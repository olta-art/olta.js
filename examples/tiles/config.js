/*
  The initial state of the example smart contract.
  This is not actually used in the example just yet but
  is here for reference and may be used in the future.
*/
export const config = {
  "colors": {
    "name": "colors",
    "type": "object",
    "properties": {
      "value": {
        "name": "value",
        "type": "bigint",
        "min": "0",
        "max": "255",
        "update": "set"
      }
    },
    "permissions": {
      "create": "open",
      "createType": "set",
      "update": "open",
      "updateType": "set"
    }
  }
}