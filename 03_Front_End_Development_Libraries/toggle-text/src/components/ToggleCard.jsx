import { useState } from "react";
import ToggleButton from "./ToggleButton";

const ToggleCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((previousValue) => !previousValue);
  };

  return (
    <section className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/50">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600">
          React State
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
          Toggle Message
        </h1>

        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Click the button to show or hide the message.
        </p>
      </div>

      {/* Toggle control */}
      <ToggleButton isVisible={isVisible} onToggle={handleToggle} />

      {/* Message */}
      <div className="mt-6 min-h-20">
        {isVisible && (
          <div
            id="toggle-message"
            className="
              rounded-2xl
              border
              border-emerald-200
              bg-emerald-50
              p-5
              text-emerald-900
              transition-all
              duration-300
            "
          >
            <p className="text-sm font-medium">I love freeCodeCamp!</p>

            <p className="mt-1 text-xs text-emerald-700">
              The message is currently visible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToggleCard;
