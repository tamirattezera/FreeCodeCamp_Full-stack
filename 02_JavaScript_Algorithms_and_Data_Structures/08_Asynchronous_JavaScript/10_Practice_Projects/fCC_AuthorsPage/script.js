// Select DOM elements
const authorContainer = document.getElementById("author-container");
const loadMoreBtn = document.getElementById("load-more-btn");

// Pagination state variables
let startingIndex = 0;
let endingIndex = 8;

// Stores all authors fetched from API
let authorDataArr = [];

// ============================================
// CHANGE #1:
// BEFORE: fetch().then().then().catch()
// AFTER: async/await with try/catch
// ============================================

const initialFetch = async () => {
  try {
    // CHANGE #2:
    // BEFORE:
    // fetch("url")
    //
    // AFTER:
    // await pauses execution until fetch resolves
    // The Response object is stored in res

    const res = await fetch(
      "https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json",
    );

    // CHANGE #3:
    // BEFORE:
    // .then((res) => res.json())
    //
    // AFTER:
    // await converts Response body into JSON
    // Directly assign the result to global authorDataArr

    authorDataArr = await res.json();

    // Display first 8 authors
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  } catch (error) {
    // CHANGE #4:
    // BEFORE:
    // .catch((err) => console.error(err))
    //
    // AFTER:
    // catch block handles errors
    // Show error message directly in UI

    authorContainer.innerHTML =
      '<p class="error-msg">There was an error loading the authors</p>';
  }
};

// ============================================
// Load More Authors Function
// ============================================

const fetchMoreAuthors = () => {
  // Move indexes forward by 8
  startingIndex += 8;
  endingIndex += 8;

  // Display next group of authors
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

  // If there are no more authors
  if (authorDataArr.length <= endingIndex) {
    // Disable button
    loadMoreBtn.disabled = true;

    // Change cursor appearance
    loadMoreBtn.style.cursor = "not-allowed";

    // Update button text
    loadMoreBtn.textContent = "No more data to load";
  }
};

// ============================================
// Render Author Cards
// ============================================

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
      
        <div id="${index}" class="user-card">

          <h2 class="author-name">
            ${author}
          </h2>


          <img
            class="user-img"
            src="${image}"
            alt="${author} avatar"
          />


          <div class="purple-divider"></div>


          <p class="bio">
            ${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}
          </p>


          <a
            class="author-link"
            href="${url}"
            target="_blank"
          >
            ${author}'s author page
          </a>


        </div>
      `;
  });
};

// ============================================
// Start application
// ============================================

initialFetch();

// Connect button click to loading more authors
loadMoreBtn.addEventListener("click", fetchMoreAuthors);
