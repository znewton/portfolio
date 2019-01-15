#!/bin/bash

npm run build

USERNAME="figgynewts"
SERVER="ftp.znewton.xyz"
DOMAIN="znewton.xyz"

ssh "${USERNAME}@${SERVER}" << EOF
  cd "${DOMAIN}"
  rm -rf static
  exit
EOF

scp -r build/* "${USERNAME}@${SERVER}:${DOMAIN}/"
