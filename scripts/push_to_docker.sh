#!/bin/bash

if [[ "$TRAVIS_BRANCH" = "master" && "$TRAVIS_PULL_REQUEST" = false ]] ; then
# Build images
  docker build -t samjbro/koel-recreation-nginx ./nginx
  docker build -t samjbro/koel-recreation-client ./client
  docker build -t samjbro/koel-recreation-api ./api
# Log in to the Docker CLI
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
# Push images to Docker hub
  docker push samjbro/koel-recreation-nginx
  docker push samjbro/koel-recreation-client
  docker push samjbro/koel-recreation-api
else
  echo "Skipping push to Docker since we're not on the master branch"
fi