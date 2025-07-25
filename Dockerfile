FROM python:3.12-slim

WORKDIR /app

VOLUME ./:/app

ENTRYPOINT [ "/bin/bash" ]
