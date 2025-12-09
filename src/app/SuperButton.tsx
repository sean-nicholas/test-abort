"use client";

export function SuperButton() {
  return (
    <button
      onClick={() => {
        fetch("/api/abort", {
          method: "GET",
          signal: AbortSignal.timeout(2_000),
        });
      }}
      className="bg-red-500 text-white p-4 rounded-md"
    >
      Super Button
    </button>
  );
}
