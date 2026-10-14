import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  attendees: "1",
  dietary: "",
  guests: false,
};

const inputClasses =
  "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 " +
  "shadow-sm placeholder:text-slate-400 focus:border-violet-600 focus:outline-none " +
  "focus:ring-2 focus:ring-violet-600/30";

const labelClasses = "text-sm font-medium text-slate-800";

export const RSVPForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ ...form });
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-lg space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Rooftop Film Night
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Saturday at sunset. Let us know you're coming.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="attendees" className={labelClasses}>
                Number of attendees
              </label>
              <input
                id="attendees"
                name="attendees"
                type="number"
                min="1"
                required
                value={form.attendees}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="dietary" className={labelClasses}>
                Dietary preferences
              </label>
              <input
                id="dietary"
                name="dietary"
                type="text"
                placeholder="Optional"
                value={form.dietary}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <label
              htmlFor="guests"
              className={
                "flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors " +
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-violet-600/40 " +
                (form.guests
                  ? "border-violet-600 bg-violet-50 text-violet-900"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50")
              }
            >
              <input
                id="guests"
                name="guests"
                type="checkbox"
                checked={form.guests}
                onChange={handleChange}
                className="size-4 rounded border-slate-300 accent-violet-600 focus:outline-none"
              />
              <span>I'm bringing additional guests</span>
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-violet-600 px-4 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
            >
              Send RSVP
            </button>
          </form>
        </div>

        {submitted && (
          <section
            role="status"
            aria-live="polite"
            className="rounded-2xl border-2 border-dashed border-violet-400 bg-white p-6 shadow-md sm:p-8"
          >
            <h2 className="text-xl font-bold text-violet-700">
              RSVP Submitted!
            </h2>
            <div className="mt-3 space-y-1 text-slate-700">
              <p>Name: {submitted.name}</p>
              <p>Email: {submitted.email}</p>
              <p>Number of attendees: {submitted.attendees}</p>
              <p>Dietary preferences: {submitted.dietary.trim() || "None"}</p>
              <p>
                Bringing additional guests: {submitted.guests ? "Yes" : "No"}
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default RSVPForm;
