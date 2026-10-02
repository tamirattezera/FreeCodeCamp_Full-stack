const ToggleButton = ({ isVisible, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isVisible}
      aria-controls="toggle-message"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-zinc-900
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition
        duration-200
        hover:bg-zinc-700
        focus:outline-none
        focus:ring-2
        focus:ring-zinc-900
        focus:ring-offset-2
        active:scale-[0.98]
      "
    >
      {isVisible ? "Hide Message" : "Show Message"}
    </button>
  );
};

export default ToggleButton;
