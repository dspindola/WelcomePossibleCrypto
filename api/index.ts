import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";

export const api = () =>
    new Elysia()
        .use(cors())
        .get("/", () => {
            return {
                message: "Hello, world!",
            };
        })
        .listen(
            {
                hostname: "0.0.0.0",
                port: 3000,
            },
            ({ url }) => {
                console.log("%s", url);
            },
        );

export type Api = ReturnType<typeof api>;
