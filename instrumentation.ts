import { validateEnv } from "./lib/env";

export async function register() {
	validateEnv();
}
