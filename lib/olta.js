// OLTA SDK
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
   * get all documents from a given collection
   * @param {string} collectionId
   * @returns {Array<Object> | undefined}
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

  function create(collectionId, doc) {
    window.parent.postMessage({
      type: "create",
      collectionId,
      doc
    }, "*")
  }

  function update(collectionId, doc) {
    window.parent.postMessage({
      type: "update",
      collectionId,
      doc
    }, "*")
  }

  // hooks
  function onUpdate(callback) {
    onUpdateHandler = callback
  }

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