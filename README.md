# EMPE DID Method

This chapter details Empeiria's innovative approach to Decentralized Identifiers (DIDs) within our broader End-to-End
Verifiable Data Infrastructure (EVDI). Our DID methodology is designed to offer enhanced benefits for organizations,
aligning with their unique identity verification needs and operational demands without compromising the foundational SSI
principles of individual control and data sovereignty.

Empeiria's DID method is a pivotal component in our EVDI, providing a balanced framework that caters to both private
individuals and organizations:

* **Simple/Off-Chain DIDs for Private Individuals:** Focused on privacy and security, these DIDs are derived from the
  user's public key, ensuring a direct and secure mechanism for identity verification. This method respects the
  individual's preference for privacy and minimal data exposure.
* **Blockchain-Based DIDs with Advanced Features:** These DIDs are designed for users who seek the full spectrum of
  blockchain advantages, such as key rotation, backup keys, and enhanced security. The integration with blockchain
  technology ensures transparent and immutable record-keeping.
* **Company-Associated DIDs for Organizational Affiliation:** Empeiria introduces a novel concept where a company can
  validate an individual’s DID, creating an extended DID that symbolizes organizational affiliation. This mechanism
  allows organizations to endorse individual identities securely while still preserving the individual's autonomy over
  their primary DID.

A standout feature in our approach is the **DNS Verification Mechanism**. Tailored to elevate organizational DIDs, this
mechanism enables organizations to prove their control over a domain, adding a significant trust layer to their digital
identity. It involves a unique decentralized consensus process among validators, ensuring an authentic and credible link
between an organization's DID and its established internet domain.

This chapter will explore how each aspect of our DID method is designed to optimize the benefits for organizations,
providing them with powerful tools for identity verification and management. At the same time, we maintain a strong
commitment to the core SSI values of individual autonomy and data control, ensuring a harmonious balance between
organizational needs and personal privacy.

## DID for Private Individuals

Empeiria's DID models are tailored to address the specific needs of our diverse user base, offering solutions that range
from simple and cost-effective to advanced and security-centric.

### Simple, Off-Chain DID

* **Target Audience:** Ideal for users seeking a straightforward and cost-effective digital identity solution, this
  model is particularly suited for those who prefer minimal interaction with blockchain technology and a focus on ease
  and privacy.
* **Key Generation and Identifier Derivation:** In this model, users generate a cryptographic key pair with the help of
  secure algorithms. The public key forms the basis of the DID identifier. This format allows for straightforward
  derivation of an essential DID document directly from the DID, streamlining the identity verification process.
* **Storage and Cost Implication:** The key feature of the simple/off-chain DID is its cost-effectiveness. The private
  key is securely stored in the user's wallet application, and the DID document, being directly derivable from the DID,
  requires no separate storage or blockchain registration. This model is a costless solution for managing digital
  identity, making it accessible and straightforward for users.
* **Revocation in Case of Compromise:** In scenarios where the user's key is compromised, the simple/off-chain DID model
  necessitates the revocation of the entire identity. This action ensures security but at the expense of deactivation of
  the entire DID.

### Blockchain-Based DID

* **Target Audience:** This model is crafted for power users who require enhanced security features for their digital
  identity. It is aimed at those willing to engage with blockchain transactions to benefit from the advanced
  capabilities of blockchain technology.
* **Creation and Identifier Generation:** The blockchain-based DID employs a UUID-based identifier, ensuring the
  creation of unique and independent DIDs for each user. This model is designed for users seeking a robust, secure, and
  blockchain-integrated digital identity. A notable difference is when a user upgrades their simple DID—in such a case,
  the identifier part of their DID, previously used as a public key, will still be used.
* **Associated Identifiers:** A publicly resolvable DID document allows for the association of additional identifiers
  with the primary identity, such as DIDs issued using other DID methods or AnonCreds profiles.
* **Key Rotation, Backup Keys, and Response to Compromise:** Key rotation is a core feature of this model, enhancing
  security by allowing users to update their DID document with new public keys as needed. In case of a key compromise,
  users can utilize backup keys, which should be securely stored offline or in a hardware wallet, to regain control of
  their DID. Unlike the simple model, this approach allows users to replace a compromised key without revoking their
  identity.
* **On-Chain Storage:** The DID document is stored on the blockchain, providing a secure, transparent, and immutable
  record. While the DID document is on-chain, users' private keys and credentials are stored in their wallets, and
  backup keys are kept securely offline. This method ensures both the security of crucial information and the
  accessibility of the DID document.

Given the blockchain's inherent nature of recording transactions, the history of previous public keys and timestamps of
key rotations can typically be derived from the blockchain's transaction history. This feature adds an extra layer of
auditability and transparency to the user's digital identity.

A distinctive feature within our blockchain system is the ability for users to upgrade from a simple off-chain DID (DAD)
to an on-chain version. This functionality is a unique aspect of our offering, enabling a seamless transition for users
seeking to expand their digital identity capabilities without starting from scratch.

This upgrade process is motivated by users' evolving needs, from initial experimentation or limited use cases to a
desire for enhanced security, privacy, and functionality provided by an on-chain presence. The system's design allows
for the preservation of established credentials and interactions, facilitating a smooth transition that maintains
continuity and integrity within the user's digital interactions.

By offering this upgrade path, we ensure that users can adapt their digital identity management to their changing
requirements, accessing a broader suite of features while retaining their established digital footprint. This approach
reflects our commitment to providing a flexible and user-centric blockchain ecosystem.

## DID for Organizations

Within our EVDI framework, organizations' Decentralized Identifiers (DIDs) are designed to provide a comprehensive,
secure, and verifiable digital identity system.
This approach emphasizes organizations' self-creation and subsequent blockchain registration of DIDs, combining the
autonomy of identity creation with the integrity and verification of blockchain technology.

### Creation and Registration of Organizational DIDs

**Self-Creation and On-Chain Registration:**
Organizations independently create their DIDs using the format did\:empe:\<unique\_method\_id>. This method ensures the
generation of unique and independent identifiers for each organization.
Following creation, the organization registers its DID on the blockchain. This registration process involves submitting
the DID and the necessary information to create the DID document stored on-chain.

**DID Document Creation and Storage:**
Upon successful registration and, if applicable, validation by validators, the DID document is created and stored on the
blockchain. This document includes:

* **Self-Declared Fields:**  For example, public keys, contact information, and service endpoints declared by the
  organization.
* **Optional Verifiable Fields:** These fields, like DNS associations or social media handles, can be submitted for
  external verification, adding an extra layer of credibility.

### Enhanced Verification Mechanism

**Verification Process for Added Trust:**
Organizations can submit specific fields in their DID document for external verification, such as DNS verification, to
establish a more trusted and credible digital identity.
The verification process, conducted by a network of validators, confirms the authenticity of the submitted information,
which is recorded on the blockchain alongside the DID document.

**Economic Model and Token-Based Verification:**
A token-based system underpins the verification process. Organizations deposit tokens when seeking verification,
incentivizing validators to conduct thorough and efficient validation.
The deposit is partially allocated to validators and partially held on the blockchain. It is refundable under certain
conditions, such as DID deletion or modification of verified fields.

**Reporting and Reverification System:**
A reporting system allows stakeholders to flag outdated or incorrect information in DID documents to maintain the
accuracy of the verified data.
Reports require an anti-spam deposit and trigger a verification process. If verified data is incorrect, the DID document
is modified, and the deposit is appropriately redistributed.

### Organizational DID Document Structure

The DID document for organizations, created and stored on the blockchain, includes:

* **Public Keys and Self-Declared Information:** Essential for organizational authentication and communication.
* **Verified Data Entries:** Marked as validated post-verification, enhancing the organization's digital presence and
  credibility.
* **Transaction and Verification History:** Derived from the blockchain, providing a transparent audit trail of key
  updates and validation activities.

Got it — Yarn only. Here’s a clean, drop-in **English** runbook for your EMPE resolver driver using **Yarn**
everywhere (incl. Docker).

---

# EMPE DID Resolver Driver — Overview & Runbook (Yarn)

A lightweight HTTP driver that resolves **EMPE DIDs** using the DID Resolution HTTP Binding (
`GET /1.0/identifiers/{did}`), suitable for plugging behind DIF Universal Resolver.

---

## What the service does

* **Health check**

    * `GET /healthz` → `{"status":"ok"}`

* **DID Resolution**

    * `GET /1.0/identifiers/:did`
    * Uses `@empe/empe-did-resolver` under the hood.
    * Supported DID methods/backends are loaded from `DID_METHODS` env at startup.
    * Returns a **DID Resolution Result**:

      ```json
      {
        "didDocument": { /* ... */ },
        "didDocumentMetadata": { /* ... */ },
        "didResolutionMetadata": {
          "contentType": "application/did+json" // or application/did+ld+json
        }
      }
      ```

* **Content negotiation**

    * Default: `application/did+json`
    * If client sends `Accept: application/did+ld+json`, JSON-LD is returned (when supported).

* **Error → HTTP status mapping**

  | `didResolutionMetadata.error` | HTTP |
  | ----------------------------- | ---- |
  | *(absent/undefined)*          | 200  |
  | `invalidDid`                  | 400  |
  | `notFound`                    | 404  |
  | `representationNotSupported`  | 406  |
  | `unsupportedDidMethod`        | 501  |
  | *(anything else)*             | 400  |

  Unhandled exceptions → **500** with `{ error: "internalError" }`.

---

## Key files

* `index.ts` – Express server, mounts routes.
* `routes/identifiers.ts` – `GET /1.0/identifiers/:did`, error/status mapping.
* `resolver.ts` – Instantiates `DidResolver` with methods from env.
* `utils/content.ts` – content negotiation helper + strict loader/validator for `DID_METHODS`.
* `config.ts` – loads `.env`, exposes `PORT`.

---

## Requirements

* **Node.js 18+** (LTS recommended)
* **Yarn** (v1.22+ or Corepack-managed Yarn)
* Reachable backend(s) defined in `DID_METHODS`.

---

## Environment variables

* `PORT` *(optional)* — HTTP port (default **8080**).
* `DID_METHODS` *(required)* — JSON array of `{ method, url, network? }`.

**Example `.env`**

```env
PORT=8080
DID_METHODS=[{"method":"empe","url":"https://your-empe-backend.example/api","network":"mainnet"}]
```

> `DID_METHODS` must be **valid JSON** (typically on one line in `.env`).

---

## Install & run (Yarn)

```bash
# 1) Install dependencies
yarn install

# 2a) Dev mode (ts-node)
# Note: your package.json shows "dev": "ts-node src/index.ts".
# If your entry file is at project root, change it to "ts-node index.ts".
yarn dev

# 2b) Build + start (production)
yarn build
yarn start
# → logs: "did:empe driver listening on :8080"
```

---

## Quick checks

**Health**

```bash
curl -s http://localhost:8080/healthz
# {"status":"ok"}
```

**Resolve (DID JSON)**

```bash
curl -s \
  -H 'Accept: application/did+json' \
  'http://localhost:8080/1.0/identifiers/did%3Aempe%3A<your-identifier>'
```

**Resolve (DID JSON-LD)**

```bash
curl -s \
  -H 'Accept: application/did+ld+json' \
  'http://localhost:8080/1.0/identifiers/did%3Aempe%3A<your-identifier>'
```

**Unsupported method**

```bash
curl -i 'http://localhost:8080/1.0/identifiers/did%3Afoo%3Abar'
# HTTP/1.1 501 Not Implemented
```

> Most clients percent-encode `:` in the path; the route decodes it. Prefer encoded for safety.

---

## Docker (Yarn, via Corepack)

**Dockerfile**

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
# Enable Yarn via Corepack (bundled with Node 20)
RUN corepack enable && corepack prepare yarn@stable --activate
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare yarn@stable --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare yarn@stable --activate
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=true
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["node", "dist/index.js"]
```

**Build & run**

```bash
docker build -t empe-did-driver .
docker run --rm -p 8080:8080 \
  -e PORT=8080 \
  -e 'DID_METHODS=[{"method":"empe","url":"https://your-empe-backend.example/api","network":"mainnet"}]' \
  empe-did-driver
```

---

## Notes

* Method routing: `@empe/empe-did-resolver` matches the DID **method** (e.g., `empe`) to your `DID_METHODS` entry and
  calls the corresponding backend.
* `utils/content.ts` provides `negotiateContentType`; the final MIME type is surfaced in
  `didResolutionMetadata.contentType` and used as the response `Content-Type`.
* If you support multiple networks, use the optional `network` field in `DID_METHODS` to distinguish environments (e.g.,
  `mainnet`, `testnet`).
