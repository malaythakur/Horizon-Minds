---
title: HorizonMinds - Master JWT in Just a Few Minutes
description: A concise guide to learning how to generate a JWT with easy-to-follow steps.
tags:
  - "tutorial"
  - "JWT"
  - "authentication"
---


# Prerequisites

To get started, ensure you have **Node.js** and **npm** installed. Additionally, create an AWS account by visiting the [AWS website](https://aws.amazon.com/) and complete the sign-up process.

1. HorizonMinds.io

![prerequisites](/src/assets/home-image.png)

> "In just a few moments, you’ll be up and running with JWTs to secure your application."

Once your setup is ready, open the terminal and check your Node.js and npm versions by running the following commands:

```bash
node -v
npm -v
```

Next, install the AWS Amplify CLI by running:

```bash
npm install -g @aws-amplify/cli
```

# Create a New React Project

Now, create a new React app by running:

```bash
npx create-react-app your-app-name
```

Once the app is created, open it in **Visual Studio Code**.

# Set Up AWS Amplify CLI

We’ll now configure the Amplify CLI to connect with AWS. Open the terminal and run:

```bash
amplify configure
```

This will take you to the AWS console to sign in. Once signed in, return to the terminal, select your AWS region, and provide a user name (e.g., `amplify-auth`). You’ll need to attach the **AdministratorAccess-Amplify** policy.

After reviewing the settings, select **Create user**. Once the user is created, you will generate an access key and secret key.

Enter the keys in the terminal to finish the setup, and assign a profile name for future use.

# Initialize AWS in the React Project

Navigate to your project directory and initialize AWS Amplify:

```bash
amplify init
```

Follow the prompts, provide a project name, and select the AWS profile you created earlier. Amplify will now configure the project and create the necessary files.

# Add Authentication to the React App

To add authentication to your app, run the following:

```bash
amplify add auth
```

Select the default configuration and choose **Email** as the authentication method. After configuration, push the changes to Amplify by running:

```bash
amplify push
```

# Install Necessary Packages

Once everything is set up, install the required Amplify packages:

```bash
npm install --save aws-amplify @aws-amplify/ui-react
```

# Start Writing the Code

In the `App.js` file, remove the default content and import the necessary libraries:

```js
import "./App.css";
import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h2>Welcome, {user.username}!</h2>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
```

This code integrates AWS Amplify with a user authentication UI in your React app. 

---

Feel free to ask any questions or for further clarifications on JWT or any related topics!
