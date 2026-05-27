# n8n-nodes-threatdown

An n8n community node for the ThreatDown Nebula API by Malwarebytes.

The node appears in n8n as `Threatdown (Malwarebytes)` and uses OAuth2 client
credentials to call ThreatDown endpoints for detections, endpoints, exclusions,
jobs, policies, reports, webhooks, usage, users, and related Nebula resources.

## Installation

Install this package as an n8n community node:

```bash
npm install n8n-nodes-threatdown
```

For self-hosted n8n, you can also install it from **Settings > Community Nodes**
using the package name `n8n-nodes-threatdown`.

## Credentials

Create a `Threatdown (Malwarebytes) OAuth2 API` credential in n8n.

Required values:

- Client ID
- Client Secret
- ThreatDown Nebula Account ID

Optional values:

- Base URL, defaulting to `https://api.malwarebytes.com`
- Scope, defaulting to `read write execute`

The credential requests tokens from `https://api.malwarebytes.com/oauth2/token`
using the OAuth2 client credentials grant. The Account ID is sent as the
`accountid` header on API calls that require it.

## Operations

This package exposes 181 ThreatDown Nebula API operations. The OAuth token route
is intentionally handled by the credential and is not exposed as a normal node
operation.

Each operation includes:

- Resource and operation dropdowns
- Path and query parameter fields
- JSON body fields for endpoints that accept a body
- n8n item linking and continue-on-fail handling

## OpenAPI Source

The operation catalog was generated from the ThreatDown OpenAPI document used
during development. The OpenAPI document itself is intentionally not committed
to this repository.

If you need to regenerate the operation catalog, place the OpenAPI file at
`openapi/MalwareBytes.json` locally, then run:

```bash
npm run generate:operations
```

The `openapi/` folder is ignored by git.

## Development

Install dependencies:

```bash
npm install
```

Run checks:

```bash
npm run lint
npm run build
```

Run a local n8n instance with this node loaded:

```bash
npm run dev
```

## Publishing

This repository includes GitHub Actions workflows for CI and npm publishing with
provenance, following n8n's community-node guidance for Creator Portal
verification.

Before the first publish, configure one of these npm authentication paths:

- Recommended: add a trusted publisher on npmjs.com for
  `kboykov/n8n-nodes-threatdown` with workflow filename `publish.yml`.
- Fallback: add a GitHub Actions secret named `NPM_TOKEN` containing an npm
  automation token with publish access.

To release:

```bash
npm run release
```

The release command bumps the package version, commits, tags, and pushes. A
version tag triggers the publish workflow.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [n8n node CLI documentation](https://docs.n8n.io/integrations/creating-nodes/build/n8n-node/)
- [ThreatDown API base URL](https://api.malwarebytes.com)
