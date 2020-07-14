
# Stage 1 - react build
FROM node:alpine as react-build
WORKDIR /app
COPY package*.json /app/
COPY nginx.conf /app/
RUN yarn install
COPY ./ /app/
RUN yarn run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=react-build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]