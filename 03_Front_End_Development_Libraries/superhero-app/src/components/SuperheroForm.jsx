import { useState } from "react";

const POWER_SOURCES = [
  "Bitten by a strange creature",
  "Radioactive exposure",
  "Science experiment",
  "Alien heritage",
  "Ancient artifact discovery",
  "Other",
];

const POWERS = [
  "Flight",
  "Super Strength",
  "Invisibility",
  "Telepathy",
  "Speed",
  "Telekinesis",
];

const fieldClasses =
  "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 " +
  "shadow-sm placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none " +
  "focus:ring-2 focus:ring-indigo-600/30";

export default function SuperheroForm() {
  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);

  const togglePower = (power) =>
    setPowers((prev) =>
      prev.includes(power) ? prev.filter((p) => p !== power) : [...prev, power],
    );

  const isValid =
    heroName.trim() && realName.trim() && powerSource && powers.length > 0;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
        <header className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Superhero Application Form
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Please complete all fields.
          </p>
        </header>

        <form
          method="post"
          action="https://freecodecamp.org"
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="hero-name"
              className="text-sm font-medium text-slate-800"
            >
              Hero name
            </label>
            <input
              id="hero-name"
              name="heroName"
              type="text"
              required
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div>
            <label
              htmlFor="real-name"
              className="text-sm font-medium text-slate-800"
            >
              Real name
            </label>
            <input
              id="real-name"
              name="realName"
              type="password"
              autoComplete="off"
              required
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
              className={fieldClasses}
            />
            <p className="mt-1 text-xs text-slate-500">
              Hidden while you type, to protect your identity.
            </p>
          </div>

          <div>
            <label
              htmlFor="power-source"
              className="text-sm font-medium text-slate-800"
            >
              Power source
            </label>
            <select
              id="power-source"
              name="powerSource"
              required
              value={powerSource}
              onChange={(e) => setPowerSource(e.target.value)}
              className={fieldClasses}
            >
              <option value="">Select one</option>
              {POWER_SOURCES.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-slate-800">
              Powers
            </legend>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {POWERS.map((power) => {
                const checked = powers.includes(power);
                return (
                  <label
                    key={power}
                    className={
                      "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-colors " +
                      "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-indigo-600/40 " +
                      (checked
                        ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                        : "border-slate-300 text-slate-700 hover:bg-slate-50")
                    }
                  >
                    <input
                      type="checkbox"
                      name="powers"
                      value={power}
                      checked={checked}
                      onChange={() => togglePower(power)}
                      className="size-4 rounded border-slate-300 accent-indigo-600 focus:outline-none"
                    />
                    <span>{power}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            Join the League
          </button>
        </form>
      </div>
    </div>
  );
}
