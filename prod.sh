#!/bin/sh
export PORT=3000 \
export HOSTNAME="localhost" \
export DEBUG="*" \
export NODE_ENV="production" \

npm run build && npm start