FROM nginx
COPY ./prod/default.conf /etc/nginx/conf.d/default.conf
CMD /bin/bash -c "envsubst '\$PORT \$HEROKU_APP_CLIENT_URL \$HEROKU_APP_API_URL' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
