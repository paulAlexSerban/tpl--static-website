#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
echo "🔍  Lint Frontend Nginx"
npm --prefix ../frontend/nginx run lint