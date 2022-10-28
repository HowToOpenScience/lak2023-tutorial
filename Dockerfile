# Get python docker container
FROM python:3.9.5-alpine3.14

# Setup environment variables

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Create app directory
RUN mkdir /docs

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# Mention 8000 for listening on TCP
EXPOSE 8000/tcp

# Set working directory to app
WORKDIR /docs

# Creates a non-root user and adds permission to access the /docs folder
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /docs
USER appuser

# Set entrypoint for execution
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
