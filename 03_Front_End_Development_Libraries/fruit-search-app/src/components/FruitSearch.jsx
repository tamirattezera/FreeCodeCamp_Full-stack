import { useEffect, useState } from "react";

const API_URL = "https://fruit-search.freecodecamp.rocks/api/fruits";

function FruitSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setError("");
      setIsLoading(false);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}?q=${encodeURIComponent(query.trim())}`,
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        setResults(data.map((fruit) => fruit.name));
      } catch (error) {
        console.error("Error fetching fruit data:", error);
        setResults([]);
        setError("Something went wrong while searching.");
      } finally {
        setIsLoading(false);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Fruit Explorer
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Find your favorite fruit.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
            Search the fruit database and discover matching fruits instantly.
          </p>
        </header>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl sm:p-8">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="search-input"
              className="mb-3 block text-sm font-medium text-zinc-300"
            >
              Search for fruits
            </label>

            <div className="relative">
              <input
                id="search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try apple, pear, mango..."
                autoComplete="off"
                className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 pr-12 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />

              {isLoading && (
                <div
                  aria-label="Searching"
                  className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin rounded-full border-2 border-zinc-700 border-t-emerald-400"
                />
              )}
            </div>
          </form>

          <div id="results" className="mt-6" aria-live="polite">
            {error ? (
              <div className="rounded-2xl border border-red-900/50 bg-red-950/30 p-6">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            ) : isLoading ? (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
                <p className="text-sm text-zinc-500">Searching for fruits...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-3">
                {results.map((fruit) => (
                  <p
                    key={fruit}
                    className="result-item rounded-2xl border border-zinc-800 bg-zinc-950 p-4 font-medium text-zinc-200 transition hover:border-emerald-400/40 hover:bg-zinc-900"
                  >
                    {fruit}
                  </p>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-zinc-800 p-6 text-center text-sm text-zinc-500">
                {query
                  ? "No matching fruits found."
                  : "Start typing to search for fruits."}
              </p>
            )}
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-zinc-600">
          Search updates automatically after you pause typing.
        </footer>
      </div>
    </main>
  );
}

export default FruitSearch;
