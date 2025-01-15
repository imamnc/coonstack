ARG GOLANG_VERSION=latest

FROM golang:${GOLANG_VERSION}

# Install some utils
RUN apk add bash nano git curl make

# Install air for hot reload
RUN go install github.com/air-verse/air@latest

# Expose Port
WORKDIR /usr/src/app

EXPOSE 8080