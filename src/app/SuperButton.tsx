"use client";

export function SuperButton() {
  return (
    <button
      onClick={async () => {
        const response = await fetch("/api/abort", {
          method: "GET",
          // signal: AbortSignal.timeout(2_000),
        });
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
          console.error("No reader");
          return;
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          console.log(decoder.decode(value));
          reader.cancel();
        }
      }}
    >
      Super Button
    </button>
  );
}
