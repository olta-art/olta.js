# olta.js

> **Warning** Super duper early version. Only works locally. Very likely there will be breaking changes in the near future.

## Prerequisites

#### Node.js

You'll need [Node.js](https://nodejs.org/en/download) installed.

to check everything is installed correctly

run this in a terminal
```
node -v
```

You should see version number.

#### Arlocal

We will use [arlocal](https://github.com/textury/arlocal) to run a local arweave blockchain (not as scary as it sounds)

Open a terminal and run:
```
npx arlocal
```

This will install arlocal onto your machine and run an instance of it on the port number 1984. Next time you run it it simply spins up an instance.

---

## Getting Started

Make sure you have `arlocal` running. See above.

### To view an example:
1. head to olta [dashboard](https://olta-v2-alpha.vercel.app/)
2. click on one of the examples
3. use the `manage` tab to edit the state
4. use the `viewer` tab to see changes in the artwork (tip: duplicate to another window to see changes live)

### To edit an example:
1. Download/clone this repo.
2. head to olta [dashboard](https://olta-v2-alpha.vercel.app/)
3. create a new project (tip: copy example configs exactly)
4. click on newly created project
5. in vscode/code editor navigate to example and spin up localserver for the index.html file of the example. In vscode there is a `golive` button in the bottom right corner.
6. put the url eg `localhost:5500/examples/box-dom/index.html` in to the url input on the project page.