## Running the Website Locally

### Install Node.js

First, install the [Node Version Manager](https://github.com/nvm-sh/nvm) by running the following code in the Terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Restart your terminal and then verify that `nvm` was installed:

```bash
nvm --version
```

Now install the latest version of Node.js

```bash
nvm install --lts
```

Verify that this worked:

```bash
node --version
npm --version
```

### Clone the Repository

Clone the repository in a directory of your choice by running the following command in Terminal:

```bash
git clone https://github.com/ChimiSeanGa/solid-foundations.git
```

Opening the repository in an IDE such as [WebStorm](https://www.jetbrains.com/webstorm/) is recommended.

### Run the Development Server
Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
