import { serveDir, serveFile } from "@std/http";

Deno.serve((req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  if (pathname == "/") {
    return serveFile(req, "./public/index.html");
  }

  if (pathname.startsWith("/public")) {
    return serveDir(req);
  }

});
