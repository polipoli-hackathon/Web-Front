FROM node:11.0.0-alpine

ARG project_dir=/app/

COPY . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    yarn global add @angular/cli && \
    yarn install

EXPOSE 4200 49153

CMD ["yarn", "docker"]