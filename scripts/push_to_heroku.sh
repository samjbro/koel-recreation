#!/bin/bash

docker login --username="$DOCKER_ID" --password="$HEROKU_SECRET_KEY" registry.heroku.com
docker tag samjbro/koel-recreation-nginx registry.heroku.com/koel-recreation/web
docker tag samjbro/koel-recreation-client registry.heroku.com/koel-recreation/client
docker tag samjbro/koel-recreation-api registry.heroku.com/koel-recreation/api