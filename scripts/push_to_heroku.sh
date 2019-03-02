#!/bin/bash

echo "$HEROKU_PASSWORD" | docker login --username="$HEROKU_USERNAME" --password-stdin registry.heroku.com
docker tag samjbro/koel-recreation-nginx registry.heroku.com/koel-recreation/web
docker tag samjbro/koel-recreation-client registry.heroku.com/koel-recreation-client/web
docker tag samjbro/koel-recreation-api registry.heroku.com/koel-recreation-api/web
docker push registry.heroku.com/koel-recreation/web
heroku container:release web --app koel-recreation
docker push registry.heroku.com/koel-recreation-client/web
heroku container:release web --app koel-recreation-client
docker push registry.heroku.com/koel-recreation-api/web
heroku container:release web --app koel-recreation-api