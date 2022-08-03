#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🛑 Cleaning Frontend Nginx"
rm -rfv ../frontend/static-website/dist
echo "🏗️ Building Frontend Nginx "
npm --prefix ../frontend/static-website run build