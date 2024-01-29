FROM node:16-alpine
# Copy .env file
COPY .env .

# Set environment variables
ENV NUXT_APP_BASE_URL=$NUXT_APP_BASE_URL

ENV APP_ROOT /web
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm install
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]



