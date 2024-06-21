// OLTA.JS
/**
 * initializes and sets up communication with olta dashboard
 * @example
 * // add Olta globally
 * <script src="../lib/olta.js"></script>
 *
 * @example
 * // initialize
 * const olta = Olta()
 */
function Olta() {
  // Retrieving html-to-image script dynamically
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
  script.integrity =
    "sha512-7tWCgq9tTYS/QkGVyKrtLpqAoMV9XIUxoou+sPUypsaZx56cYR/qio84fPK9EvJJtKvJEwt7vkn6je5UVzGevw==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  document.body.appendChild(script);

  // overridable handlers
  let onUpdateHandler = (update) => {
    console.log("olta: UPDATE", update);
  };
  let onErrorHandler = (error) => {
    console.error("olta: ERROR", error);
  };

  const state = { projectState: {} };

  window.addEventListener("message", (e) => {
    const { state: newState, type } = e.data ?? {};

    if (type !== "state") {
      return;
    }

    state.projectState = newState?.projectState ?? {};

    // initiate update handler/ callback
    onUpdateHandler(state);
  });

  /**
   * Get all documents from a given collection
   * @param {string} collectionId
   * @returns {Array<Object> | undefined} array of documents
   * @example
   * const colors = olta.getAll("colors")
   */
  function getAll(collectionId) {
    if (!state?.projectState?.collections) {
      return;
    }

    const collection = state?.projectState?.collections[collectionId];
    if (!collection) {
      return;
    }

    const keys = Object.keys(collection);
    return keys.map((documentId) => parseDoc(collection[documentId]));
  }

  /**
   * Creates a new document for a given collection
   * @param {string} collectionId
   * @param {Object} doc
   * @example
   * const doc = { value: "123n" }
   * // create doc in the "colors" collection
   * olta.create("colors", doc)
   */
  function create(collectionId, doc) {
    window.parent.postMessage(
      {
        type: "create",
        collectionId,
        doc: formatDoc(doc),
      },
      "*"
    );
  }

  /**
   * Updates a document in a given collection
   * @param {string} collectionId
   * @param {Object} doc
   * @example
   * // Note include the id in the doc object
   * const doc = { id: docId, value: "123n" }
   * // updated doc in the "colors" collection
   * olta.create("colors", doc)
   *
   */
  function update(collectionId, doc) {
    window.parent.postMessage(
      {
        type: "update",
        collectionId,
        doc: formatDoc(doc),
      },
      "*"
    );
  }

  /**
   * Retrieves the active wallet address from the state
   */
  function getActiveWalletAddress() {
    let activeWalletAddress = state.projectState.activeWalletAddress;

    return activeWalletAddress;
  }

  /**
   * Deletes a document from a given collection
   * @param {string} collectionId
   * @param {string} documentId - ID of the document to delete
   */
  function deleteDoc(collectionId, documentId) {
    window.parent.postMessage(
      {
        type: "delete",
        collectionId,
        documentId,
      },
      "*"
    );
  }

  /**
   * Set a function to run on every update
   * @param {function} callback - the function to run on each update
   * @example
   * olta.onUpdate(() => {
   *  const colors = olta.getAll("colors")
   *  colors.forEach(color => {
   *    // render each color doc here
   *    console.log(color)
   *  })
   * })
   */
  function onUpdate(callback) {
    onUpdateHandler = callback;
  }

  /**
   * Set a function to run on every update
   * @param {function} callback
   * @description This function doesn't do anything just yet.
   * @todo implement error handling
   */
  function onError(callback) {
    onErrorHandler = callback;
  }

  /**
   * Helper function to parse documents that come from the smart contract
   * @param {Object} doc
   * @description takes a doc and converts all values from BigInt to number.
   * e.g: `"1n"` to `1`
   * @example
   * const exampleDoc = {
   *  value: "1n"
   *  _id: "czcU1MrLVxMuoTEbwnmNAu-dQ3qPyEZFjzU0lmiHh1k"
   * }
   *
   * parsDoc(exampleDoc)
   *
   * // result: {
   * //   value: 1
   * //   _id: "czcU1MrLVxMuoTEbwnmNAu-dQ3qPyEZFjzU0lmiHh1k"
   * // }
   */
  function parseDoc(doc) {
    const parsedDoc = {};
    for (const [key, value] of Object.entries(doc)) {
      // don't parse hidden properties
      if (key.startsWith("_")) {
        parsedDoc[key] = value;
        continue;
      }

      // parse property
      parsedDoc[key] = parseBigIntToNumber(value);
    }
    return parsedDoc;
  }

  // parsing a bigInt value to number e.g "1n" -> 1
  function parseBigIntToNumber(value) {
    return typeof value === "string" && value.endsWith("n")
      ? Number(value.slice(0, -1))
      : value;
  }

  /**
   * Helper function to format documents so they are ready to send to smart contract
   * @param {Object} doc
   * @description takes a object and converts all values that are numerical to BigInt
   * e.g: `1` to `"1n"`
   * @example
   * const exampleDoc = {
   *  id: "czcU1MrLVxMuoTEbwnmNAu-dQ3qPyEZFjzU0lmiHh1k"
   *  value: 1
   * }
   *
   * formatDoc(exampleDoc)
   *
   * // result: {
   * //   value: "1n"
   * //   id: "czcU1MrLVxMuoTEbwnmNAu-dQ3qPyEZFjzU0lmiHh1k"
   * // }
   */
  function formatDoc(doc) {
    const formattedDoc = {};
    for (const [key, value] of Object.entries(doc)) {
      // don't format id
      if (key === "id") {
        formattedDoc[key] = value;
        continue;
      }

      // format property
      formattedDoc[key] = isNaN(value) ? value : formatNumberToBigInt(value);
    }
    return formattedDoc;
  }

  // helper to format the value for bigInt
  function formatNumberToBigInt(value) {
    return Math.round(Number(value)) + "n";
  }

  /**
   * Captures a screenshot from a THREE.js project
   * @param {THREE.WebGLRenderer} renderer - the renderer of the scene
   */
  async function capture3d(renderer) {
    const imgData = await renderer.domElement.toDataURL("image/png");

    return imgData;
  }

  /**
   * Captures a screenshot from a 2d project, like p5
   */
  async function captureScreenshot() {
    const node = document.querySelector("body");
    const imageData = await htmlToImage.toPng(node);
    return imageData;
  }

  // Show sharing dialog
  function showShareDialog(img) {
    window.parent.postMessage(
      {
        type: "share",
        img,
      },
      "*"
    );
  }

  return {
    state,
    create,
    update,
    deleteDoc,
    onUpdate,
    onError,
    getAll,
    parseDoc,
    formatDoc,
    getActiveWalletAddress,
    capture3d,
    captureScreenshot,
    showShareDialog
  };
}
