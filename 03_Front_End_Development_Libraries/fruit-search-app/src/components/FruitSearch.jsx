import { useState } from "react";

function FruitSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
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
          <form>
            <label
              htmlFor="search-input"
              className="mb-3 block text-sm font-medium text-zinc-300"
            >
              Search for fruits
            </label>

            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try apple, pear, mango..."
              className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400"
            />

            <p className="mt-3 text-xs text-zinc-600">
              Current query: {query || "empty"}
            </p>
          </form>

          <div className="mt-6">
            <p className="text-sm text-zinc-500">Results: {results.length}</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FruitSearch;
