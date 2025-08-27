import {Request, Response, Router} from "express";
import {didResolver} from "../resolver";

export const identifiers = Router();

/**
 * Handles a DID resolution request:
 * - Extracts the DID from the URL
 * - Negotiates the response content type
 * - Resolves the DID using the shared resolver
 * - Maps resolver metadata to HTTP status and sends the response
 */
identifiers.get("/:did", async (req: Request, res: Response) => {
    const did = decodeURIComponent(req.params.did);

    try {
        const result = await didResolver.resolveFull(did);


        const err = result.didResolutionMetadata?.error;
        const status = mapDidErrorToHttpStatus(err);

        res.type(result.didResolutionMetadata.contentType!).status(status).send(result);
    } catch {
        res.status(500).json({
            didDocument: null,
            didDocumentMetadata: {},
            didResolutionMetadata: {error: "internalError"},
        });
    }
});

// Maps DID resolution errors to appropriate HTTP status codes.
// Defaults to 200 (OK) if no error is present.
export function mapDidErrorToHttpStatus(err?: string): number {
    if (!err) return 200;
    switch (err) {
        case "invalidDid":
            return 400;
        case "notFound":
            return 404;
        case "representationNotSupported":
            return 406;
        case "unsupportedDidMethod":
            return 501;
        default:
            return 400;
    }
}