#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "🧪  Test Frontend JavaScript Component Library"
npm --prefix ../frontend/js-component-library run test
