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
  // overridable handlers
  let onUpdateHandler = update => { console.log("olta: UPDATE", update) }
  let onErrorHandler = error => { console.error("olta: ERROR", error) }

  const state = { projectState: {} }

  window.addEventListener("message", (e) => {
    const { state: newState, type } = e.data ?? {}
    state.projectState = newState.projectState

    // initiate update handler/ callback
    onUpdateHandler(state)
  })

  /**
   * Get all documents from a given collection
   * @param {string} collectionId
   * @returns {Array<Object> | undefined} array of documents
   * @example
   * const colors = olta.getAll("colors")
   */
  function getAll(collectionId) {
    if (!state?.projectState?.collections) {
      return
    }

    const collection = state?.projectState?.collections[collectionId]
    if (!collection) {
      return
    }

    const keys = Object.keys(collection)
    return keys.map(documentId => collection[documentId])
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
    window.parent.postMessage({
      type: "create",
      collectionId,
      doc
    }, "*")
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
    window.parent.postMessage({
      type: "update",
      collectionId,
      doc
    }, "*")
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
    onUpdateHandler = callback
  }

  /**
   * Set a function to run on every update
   * @param {function} callback
   * @description This function doesn't do anything just yet.
   * @todo implement error handling
   */
  function onError(callback) {
    onErrorHandler = callback
  }

  return {
    state,
    create,
    update,
    onUpdate,
    onError,
    getAll
  }
}