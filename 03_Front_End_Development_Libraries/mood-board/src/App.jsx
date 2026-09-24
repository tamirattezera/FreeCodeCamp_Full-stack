import "./App.css";

export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />

      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#f8d7a3"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Adventure"
        />

        <MoodBoardItem
          color="#b8e0d2"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Peaceful Coast"
        />

        <MoodBoardItem
          color="#c9e4ca"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Nature"
        />

        <MoodBoardItem
          color="#b5d8eb"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Open Waters"
        />

        <MoodBoardItem
          color="#f4c2c2"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Mediterranean Escape"
        />

        <MoodBoardItem
          color="#d8c4e8"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Explore"
        />
      </div>
    </div>
  );
}
