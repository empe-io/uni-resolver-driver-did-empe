import "dotenv/config";
import {DidMethods} from "@empe/empe-did-resolver";

// The port the server listens on. Defaults to 8080 if not set in the environment.
export const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

// Loads and validates the supported DID methods from the DID_METHODS environment variable.
// Expects a JSON array of objects with "method", "url", and optional "network" properties.
export function loadSupportedDidMethodsFromEnv(): DidMethods {
    const raw = process.env.DID_METHODS;
    if (!raw) throw new Error('DID_METHODS env is required (JSON array).');

    let parsed: unknown;
    try {
        parsed = JSON.parse(raw);
    } catch {
        throw new Error('DID_METHODS must be valid JSON (array of { method, url, network? }).');
    }

    if (!Array.isArray(parsed)) throw new Error('DID_METHODS must be a JSON array.');

    const methods: DidMethods = parsed.map((it: any, i: number) => {
        if (!it?.method || !it?.url) throw new Error(`DID_METHODS[${i}] must contain "method" and "url".`);
        return {
            method: String(it.method),
            url: String(it.url),
            network: it.network ? String(it.network) : undefined,
        };
    });

    if (methods.length === 0) throw new Error('DID_METHODS cannot be empty.');
    return methods;
}