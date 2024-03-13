# API Docs
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

- [API Docs](#api-docs)
  - [Olta()](#olta)
    - [Olta~getAll(collectionId) ⇒ Array.\<Object\> | undefined](#oltagetallcollectionid--arrayobject--undefined)
    - [Olta~create(collectionId, doc)](#oltacreatecollectionid-doc)
    - [Olta~update(collectionId, doc)](#oltaupdatecollectionid-doc)
    - [Olta~onUpdate(callback)](#oltaonupdatecallback)
    - [Olta~onError(callback)](#oltaonerrorcallback)

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