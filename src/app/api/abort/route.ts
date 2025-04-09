import { setTimeout } from "timers/promises";

export async function GET(request: Request) {
  console.log("Here we goooooo!");
  request.signal.onabort = () => {
    console.log("onabort");
  };
  request.signal.addEventListener("abort", () => {
    console.log("abort event");
  });

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  writer.write(encoder.encode("Hello"));
  console.log("Sending Hello");
  setTimeout(5_000).then(async () => {
    writer.write(encoder.encode("world!"));
    console.log("Sending world!");
    writer.close();
  });

  return new Response(readable);
}
