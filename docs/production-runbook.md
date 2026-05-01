# SchoolSheba Production Runbook

## Environment Variables
- `NODE_ENV=production`
- `PORT=5000`
- `MONGO_URL=<mongodb connection string>`
- `JWT_ACCESS_SECRET=<long secret>`
- `JWT_REFRESH_SECRET=<long secret>`
- `ACCESS_TOKEN_TTL_SECONDS=900`
- `REFRESH_TOKEN_TTL_SECONDS=2592000`

## Deployment Steps
1. Configure environment variables on server.
2. Run `npm ci`.
3. Run `npm run check && npm run test && npm run build`.
4. Start service with `npm run start`.
5. Configure reverse proxy with HTTPS termination.

## Operational Checks
- Verify `/api/health` returns `{ ok: true }`.
- Validate login/register flow.
- Validate premium subscription callback flow.
- Validate public portfolio URL by school slug.

## Incident Response
- Authentication failures: rotate JWT secrets and restart app.
- Billing mismatch: inspect `/api/billing/history` and gateway callback logs.
- Trial/archive anomalies: run lifecycle job manually by restarting app and checking school statuses.
