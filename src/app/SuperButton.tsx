"use client";

export function SuperButton() {
  return (
    <button
      onClick={() => {
        fetch("http://localhost:3000/api/abort", {
          method: "GET",
          signal: AbortSignal.timeout(2_000),
        });
      }}
    >
      Super Button
    </button>
  );
}
