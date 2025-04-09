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
  setTimeout(5_000).then(() => {
    writer.write(encoder.encode("world!"));
    writer.close();
  });

  return new Response(readable);
}
