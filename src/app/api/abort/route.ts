import { setTimeout } from "timers/promises";

export async function GET(request: Request) {
  console.log("Here we goooooo!");

  request.signal.onabort = () => {
    console.log("onabort");
  };

  request.signal.addEventListener("abort", () => {
    console.log("abort event");
  });

  setInterval(() => {
    console.log("(interval) aborted:", request.signal.aborted);
  }, 500);


  await setTimeout(5_000);
  return new Response("Hello, world!");
}
