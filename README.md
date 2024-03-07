# olta.js


<!-- TODO: reporting bugs -->
<!-- TODO: decide on what to call things, e.g database, project, smart contract -->


## What is Olta.js ?
A javascript api to trigger and listen to changes for artworks using the [olta collective](https://collective.olta.art/) smart contracts.

It let's you build |artworks| with persistent state changes in a decentralized manner. Data is stored permanently, publicly and you get fast |confirmation|thanks to Warp smart contracts, and Arweave. We abstract away user authentication, tailor database schema, allow for easy showcasing and remove any recurring database fees. Allowing for you to concentrate on making the art.

  <!-- ROUGH -->
  [from an artist perspective]
  Check Out [Olta Collective](https://collective.olta.art/) for an overview of the features.
  Olta Collective handles user authentication using Othent kms service (recommended) or via Metamask. The database is a smart contract and is easy to configure and designed to be open to read and use.
  <!-- ROUGH -->

<!-- Maybe on the collective page -->
Features  -> embedding, monetisation, collection document model

<!-- TODO: find a good spot for this -->
<!-- TODO: suggest staying on testnet ? -->
## pre-alpha Version
> **Warning** Functionality is limited and likely bugs are around.
This is very much still in development and we have intentionally kept the feature set to a minimum for now while we find the best approach.
Restricted features
  - only integers are stored (no strings, arrays, nested objects, floating points)
  - only 1 collection can be made right now. (more on collections)
  - no conditions (if only update if value x is more than y)
  - no error handling (if you trigger an update an it is canceled or fails there is no way of knowing -> bad ux)
  - only create and update, no read or delete

## Getting started
### 1. Connect Wallet
To get started head to [Olta Collective](https://collective.olta.art/) and hit connect. An Othent popup should appear, you can sign in via email or using gmail.

> [!NOTE]
> <details>
>  <summary>
>  What is Othent?
>  </summary>
>  <a href="https://othent.io/">Othent</a> is a key management service that creates an arweave wallet address for you. Currently Othent pays for all transaction fees so everything is free.
> </details>

> [!NOTE]
> For now the default network is testnet

### 2. Create a Project

Creating a project will deploy a new smart contract to act as our place to store the state of the project.

#### 2a. Details
When creating a project we have to define a few details (this can all be changed later) At a minimum give it a title.

#### 2b. Data
Next we to decide what data we want to store on the contract. We use a strict `NoSQL` architecture. Where each collection has pre-defined schema of what each document should look like.

> [!NOTE]
> | NoSQL structure | Description |
> | --- | --- |
> | property | a value inside a document
> | document | an object or JSON |
> | collection | a group/folder/array of documents
> ```js
>    // think of the structure like this
>    const collection = [
>      // document
>      {
>        // property
>        key: value
>      }
>    ]
> ```

##### Document Properties

With that in mind lets create a collection.
Give your collection a name, it often makes sense to make it a plural e.g `colours`, `animals` or `values`. And define a schema for each document inside that collection. You can add multiple properties, for now the value type is limited to BigInt which is javascript version of Integer. You can set a min and a max value by expanding the property.

I'm gonna stick with the default and set the collection name to `colors` and have one property called `value` with a min of `0` and a max of `255`

> [!IMPORTANT]
> make sure to give the properties unique names

---

##### Permissions

The permissions section sets who is allowed to do what in your collection. You have options for creating and updating documents

| create permission | Description |
| --- | --- |
| anyone | any user can create a document in the collection
| only admin | only you the artist can create documents in this collection
| no one | no user can create documents in this collection (useful for keeping it a fixed amount)

| updating permission | Description |
| --- | --- |
| anyone | any user can update any document in the collection
| only admin | only you the artist can update documents in this collection
| no one | no user can update documents in this collection (useful for keeping the document the same as it was created)

> [!NOTE]
> `delete` permissions will be added in the future

##### Initial State

This allows you to quickly generate some documents in the database, `random` will give the documents any values between the min and max and `default` will give the properties the min value.

#### 2c. Deploy

Hit deploy and wait a little bit, once done this will redirect you to the project page.

<!-- TODO -->
- Developing
  - get something simple working locally
  - see examples
    - viewer -> (embed, testing, overriding url)
    - manage -> (create, update)
    - history -> (history of interactions, also sonar)
    - settings
      - Content url
      - isOpen
      - Fee
  - publishing (vercel, or arweave)



<!-- TODO: rework getting started -->
## Getting Started

Make sure you have `arlocal` running on port 1984. See above.

### To view an example:
1. head to the [dashboard](https://collective.olta.art/)
2. click on one of the examples
3. use the `manage` tab to edit the state
4. use the `viewer` tab to see changes in the artwork (tip: duplicate to another window to see changes live)

### To edit an example:
1. Download/clone this repo.
2. head to olta [dashboard](https://collective.olta.art/)
3. create a new project (tip: copy example configs exactly)
4. click on newly created project
5. in vscode/code editor navigate to example and spin up localserver for the index.html file of the example. In vscode there is a `golive` button in the bottom right corner.
6. put the url eg `localhost:5500/examples/box-dom/index.html` in to the url input on the project page.

---

## Examples

### tiles
This example uses no framework and renders out things using the DOM. It will work with any project. It represents each document as a box and each property as a color in the box. This way you can easily visualise the data on the project.

You can hover over properties to view the data.

[code](./examples/tiles/index.html)

### rectangles
This example uses `p5.js` and renders out gray rectangles. You can click to `create` a new rectangle.

[code](./examples/rectangles/index.html)

### cuboids
This example uses `three.js` and renders out 100 cuboids with specific colors. You can `update` the color by clicking

[code](./examples/cuboids/index.html)

---

## Docs

<a name="Olta"></a>

## Olta()
initializes and sets up communication with olta dashboard

**Kind**: global function  
**Example**  
```js
import {Olta} from "olta.module.js"
// initialize
const olta = Olta()
```

* [Olta()](#Olta)
    * [~getAll(collectionId)](#Olta..getAll) ⇒ <code>Array.&lt;Object&gt;</code> \| <code>undefined</code>
    * [~create(collectionId, doc)](#Olta..create)
    * [~update(collectionId, doc)](#Olta..update)
    * [~onUpdate(callback)](#Olta..onUpdate)
    * [~onError(callback)](#Olta..onError)

<a name="Olta..getAll"></a>

### Olta~getAll(collectionId) ⇒ <code>Array.&lt;Object&gt;</code> \| <code>undefined</code>
Get all documents from a given collection

**Kind**: inner method of [<code>Olta</code>](#Olta)  
**Returns**: <code>Array.&lt;Object&gt;</code> \| <code>undefined</code> - array of documents  

| Param        | Type                |
| ------------ | ------------------- |
| collectionId | <code>string</code> |

**Example**  
```js
const colors = olta.getAll("colors")
```
<a name="Olta..create"></a>

### Olta~create(collectionId, doc)
Creates a new document for a given collection

**Kind**: inner method of [<code>Olta</code>](#Olta)  

| Param        | Type                |
| ------------ | ------------------- |
| collectionId | <code>string</code> |
| doc          | <code>Object</code> |

**Example**  
```js
const doc = { value: "123n" }
// create doc in the "colors" collection
olta.create("colors", doc)
```
<a name="Olta..update"></a>

### Olta~update(collectionId, doc)
Updates a document in a given collection

**Kind**: inner method of [<code>Olta</code>](#Olta)  

| Param        | Type                |
| ------------ | ------------------- |
| collectionId | <code>string</code> |
| doc          | <code>Object</code> |

**Example**  
```js
// Note include the id in the doc object
const doc = { id: docId, value: "123n" }
// updated doc in the "colors" collection
olta.create("colors", doc)
```
<a name="Olta..onUpdate"></a>

### Olta~onUpdate(callback)
Set a function to run on every update

**Kind**: inner method of [<code>Olta</code>](#Olta)  

| Param    | Type                  | Description                        |
| -------- | --------------------- | ---------------------------------- |
| callback | <code>function</code> | the function to run on each update |

**Example**  
```js
olta.onUpdate(() => {
 const colors = olta.getAll("colors")
 colors.forEach(color => {
   // render each color doc here
   console.log(color)
 })
})
```
<a name="Olta..onError"></a>

### Olta~onError(callback)
This function doesn't do anything just yet.

**Kind**: inner method of [<code>Olta</code>](#Olta)  
**Todo**

- [ ] implement error handling


| Param    | Type                  |
| -------- | --------------------- |
| callback | <code>function</code> |


---

## To Run Locally

It is possible to run a local version of arweave to test how interactions might happen. This can speed up development by not waiting for interactions over the network. It also means you can test in private.

### Prerequisites

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

> **Note** `arlocal` produces logs the folder it is run from. If you run it in the same folder as your project please watch out for it triggering hot reloads when not desired.

### Dashboard

Once you have arlocal running head back to the dashboard click on the wallet settings icon in the sidebar. Select wallet type: local, network: local. Refresh the page and it should detect arlocal and generate a fresh wallet.

You can then experiment to your hearts content.
---