import { treaty } from "@elysiajs/eden";
import type { Api } from "..";

export function API(domain: string) {
    return treaty<Api>(domain);
}