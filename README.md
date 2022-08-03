# Traefik Reverse-proxy & Nginx Web-server

## Tech-stack

[![Traefik](https://img.shields.io/badge/Traefik-v2-green)](https://traefik.io/)
[![NodeJS](https://img.shields.io/badge/NodeJS-14.19.1-green)](https://nodejs.org/docs/latest-v14.x/api/)
[![Docker](https://img.shields.io/badge/Docker-20-blue)](https://docs.docker.com/release-notes/)
[![Nginx](https://img.shields.io/badge/Nginx-1.21.6-green)](https://www.nginx.com/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Versioning](https://img.shields.io/badge/Semantic%20Versioning-2.0.0-green)](https://semver.org/spec/v2.0.0.html)

## About
- secure, fast and easy to deploy
- use cases are for blogs, documentation or informational websites
- the focus is on serving content, not on personalization or user interactions

### Pros
- easy to implement for simple websites

### Cons
- development can get complicated on larger dynamic websites

## Commands

- `npm run install:root` - install root dependencies

- `bash scripts/docker-all-start.bash` - start all docker containers
- `bash scripts/docker-trafik-proxy-start.bash` - start traefik container
- `bash scripts/docker-nginx-start.bash` - start nginx container

- `bash scripts/docker-all-stop.bash` - stop all docker containers
- `bash scripts/docker-all-clean-stop.bash` - stop all docker container and clean leftovers

- `bash scripts/frontend-nginx-install.bash` - install nginx frontend project dependencies
- `bash scripts/frontend-nginx-build.bash` - build nginx frontend project dependencies

- `bash scripts/frontend-living-style-guide-install.bash` - install project dependencies
- `bash scripts/frontend-living-style-guide-compile development` - compile for development environment
- `bash scripts/frontend-living-style-guide-compile production` - compile for production environment

## Useful Local Development URLs

- [traefik dashboard](http://localhost:8080/dashboard)
- [nginx-service](https://nginx-traefik-proxy-nginx-server.localhost/)
