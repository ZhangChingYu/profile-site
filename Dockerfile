FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG REACT_APP_HOMEPAGE
ENV REACT_APP_HOMEPAGE=$REACT_APP_HOMEPAGE

RUN npm run build
RUN npm install -g serve
CMD ["npx", "serve", "-s", "build", "-l", "5000"]
EXPOSE 5000