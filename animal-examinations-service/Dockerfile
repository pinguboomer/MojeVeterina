# Run node.js as in a container with npm run dev
FROM node:20
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

ARG PROJECT_PATH=./
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY ${PROJECT_PATH}/package.json ./
RUN npm install
RUN if [ "${NODE_ENV}" = "development" ]; then \
      npm install -g nodemon; \
    fi
COPY ${PROJECT_PATH} ./

# copy the _lib folder to the src folder = shared code
COPY ./_lib ./src/_lib