---
title: HorizonMinds Seconds of Learning Kubernetes Basics
description: Learn Kubernetes from scratch in just a single article.
tags:
  - "kubernetes"
  - "devops"
  - "containerization"
  - "HorizonMinds"
---

# Prerequisites

Before starting with Kubernetes, make sure you have the following installed:

1. Docker
2. Kubectl
3. Minikube (for local cluster setup)

You can install these by visiting the official websites or running the following commands based on your system's package manager.

1. HorizonMinds.io

![prerequisites](/src/assets/home-image.png)

### Install Docker

```bash
# On Ubuntu
sudo apt-get update && sudo apt-get install docker.io

# On macOS with Homebrew
brew install docker
```

### Install Kubectl

```bash
# On Ubuntu
sudo apt-get update && sudo apt-get install -y kubectl

# On macOS with Homebrew
brew install kubectl
```

### Install Minikube (for local Kubernetes cluster)

```bash
# On Ubuntu
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && sudo install minikube-linux-amd64 /usr/local/bin/minikube

# On macOS with Homebrew
brew install minikube
```

![prerequisites](/src/assets/k8s-prerequisites.png)

> "In the fast-paced world of microservices and container orchestration, Kubernetes stands out as the go-to solution for managing containerized applications at scale."

Once the installations are done, verify by running the following commands to check the versions:

```bash
docker --version
kubectl version --client
minikube version
```

# Setting up Kubernetes Cluster

After installing Minikube, let's create a Kubernetes cluster locally by running:

```bash
minikube start
```

This command starts a local Kubernetes cluster using Minikube. Once the cluster is up and running, verify the cluster information:

```bash
kubectl cluster-info
```

You should see output indicating that the cluster is running and available.

# Deploying Applications in Kubernetes

Kubernetes allows you to deploy your applications in containers. Let’s deploy a simple Nginx application:

1. Create a deployment using the `kubectl` command:

```bash
kubectl create deployment nginx --image=nginx
```

2. Expose the deployment as a service to make it accessible:

```bash
kubectl expose deployment nginx --type=NodePort --port=80
```

3. To view the list of services, run:

```bash
kubectl get services
```

4. To access your Nginx application, you can run:

```bash
minikube service nginx
```

This will open your default web browser and display the Nginx welcome page.

# Scaling Applications

One of the core features of Kubernetes is its ability to scale applications. To scale your Nginx deployment to 3 replicas, run:

```bash
kubectl scale deployment nginx --replicas=3
```

To check the status of your pods, run:

```bash
kubectl get pods
```

You should now see 3 Nginx pods running.

# Cleaning Up

Once you’re done, clean up the resources you created by running:

```bash
kubectl delete service nginx
kubectl delete deployment nginx
```

If you no longer need the Minikube cluster, you can stop it with:

```bash
minikube stop
```

You’ve successfully learned the basics of setting up Kubernetes, deploying applications, and scaling them!

# Conclusion

In just a few minutes, you’ve gone from installing Kubernetes to deploying and scaling your applications. Kubernetes, when combined with DevOps practices, offers immense potential to streamline development workflows and manage applications efficiently.

For more resources and detailed tutorials, visit [HorizonMinds](https://horizonminds.io).
