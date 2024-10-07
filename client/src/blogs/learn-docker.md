---
title: HorizonMinds Learning How to use Docker?
description: Learn Docker basics in a single article.
tags:
  - "docker"
  - "containers"
  - "devops"
---

# Prerequisites

Before getting started with Docker, ensure that you have Docker installed on your machine.

Visit the [Docker website](https://www.docker.com/) and download the Docker Desktop for your operating system.

1. HorizonMinds.io

![prerequisites](/src/assets/home-image.png)

> "In the world of containers, Docker is the pioneer, revolutionizing how we build and deploy applications."

Once installed, open your terminal or command prompt and verify Docker installation by running the following commands:

```bash
docker --version
```

This will display the Docker version installed on your system.

# Setting Up Docker

Now that Docker is installed, let’s walk through creating your first Docker container. Start by pulling a Docker image from the Docker Hub registry.

Docker Hub is a cloud-based library where you can find container images. For example, to pull the official **nginx** image, run:

```bash
docker pull nginx
```

This downloads the latest version of the **nginx** image from Docker Hub to your local machine.

# Running a Docker Container

After pulling the image, you can create and run a Docker container. Run the following command to start an **nginx** container:

```bash
docker run -d -p 8080:80 nginx
```

This command will:

- `-d`: Run the container in detached mode (in the background).
- `-p 8080:80`: Map port 8080 of your local machine to port 80 of the container.

Now open your browser and go to `http://localhost:8080`. You should see the **nginx** welcome page.

# Managing Docker Containers

To list all running containers, use:

```bash
docker ps
```

To stop a running container:

```bash
docker stop <container_id>
```

To remove a container, first stop it, then remove it with:

```bash
docker rm <container_id>
```

# Creating a Custom Docker Image

Next, let’s create a custom Docker image. For this, create a `Dockerfile` in your project directory with the following content:

```Dockerfile
# Use the official Node.js image from Docker Hub
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
```

Then, build the image using:

```bash
docker build -t my-node-app .
```

This will create a Docker image named **my-node-app** from your Dockerfile.

# Running the Custom Docker Image

Once the image is built, run it using:

```bash
docker run -p 3000:3000 my-node-app
```

This starts your Node.js application inside a Docker container, and you can access it at `http://localhost:3000`.

# Pushing Images to Docker Hub

To share your Docker image with others, push it to Docker Hub. First, log in to Docker Hub:

```bash
docker login
```

Then, tag your image with your Docker Hub username:

```bash
docker tag my-node-app your-dockerhub-username/my-node-app
```

Finally, push the image:

```bash
docker push your-dockerhub-username/my-node-app
```

Now others can pull and use your Docker image.

# Conclusion

With Docker, you’ve learned how to pull images, run containers, and even create your own Docker images. Docker simplifies deploying applications and managing environments, making it essential for modern development and DevOps workflows.

Happy coding with Docker!
