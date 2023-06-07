import { Handlers } from "$fresh/server.ts";
import { agents } from "caniuse-lite";

export const handler: Handlers = {
  GET(_, ctx) {
    const browser = ctx.params.browser;
    if (browser in agents) {
      const body = JSON.stringify(agents[browser]);
      return new Response(body, {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not Found", {
      status: 404,
    });
  },
};
