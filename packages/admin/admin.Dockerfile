FROM node:16-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app

COPY --chown=nextjs:nodejs ../../.yarn ./.yarn
COPY ../../package.json ../../yarn.lock ../../.pnp.cjs ../../.pnp.loader.mjs ../../.yarnrc.yml ./
COPY --chown=nextjs:nodejs ../../packages ./packages

RUN yarn set version berry && yarn install
RUN yarn workspace @fms/admin build


FROM node:16-alpine AS runner
WORKDIR /usr/src/app  
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.yarn ./.yarn
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/package.json /usr/src/app/yarn.lock /usr/src/app/.pnp.cjs /usr/src/app/.pnp.loader.mjs /usr/src/app/.yarnrc.yml ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/packages/admin/.next ./packages/admin/.next
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/packages/admin/package.json ./packages/admin/package.json

USER nextjs
EXPOSE 3000
CMD ["yarn", "workspace", "@fms/admin", "start"]
