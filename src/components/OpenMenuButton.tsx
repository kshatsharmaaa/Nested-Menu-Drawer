
export function OpenMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 active:scale-95 transition-all"
      aria-label="Open menu"
    >
      Open Menu
    </button>
  );
}
