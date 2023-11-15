/*
  The initial state of the example smart contract.
  This is not actually used in the example just yet but
  is here for reference and may be used in the future.
*/
export const initialState = {
  configs: {
    "boxes": {
      "name": "boxes",
      "type": "object",
      "properties": {
        "color": {
          "name": "color",
          "type": "bigint",
          "min": "0",
          "max": "255",
          "update": "set"
        },
        "x": {
          "name": "x",
          "type": "bigint",
          "min": "0",
          "max": "100",
          "update": "set"
        },
        "y": {
          "name": "y",
          "type": "bigint",
          "min": "0",
          "max": "100",
          "update": "set"
        },
        "size": {
          "name": "size",
          "type": "bigint",
          "min": "1",
          "max": "3",
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
  },
  collections: {
    "boxes": {
      "0": {
        "_id": 0,
        "_creator": "0x",
        "color": "12n",
        "x": "1n",
        "y": "27n",
        "size": "1n"
      },
      "1": {
        "_id": 1,
        "_creator": "0x",
        "color": "17n",
        "x": "98n",
        "y": "60n",
        "size": "3n"
      },
      "2": {
        "_id": 2,
        "_creator": "0x",
        "color": "195n",
        "x": "36n",
        "y": "40n",
        "size": "3n"
      },
      "3": {
        "_id": 3,
        "_creator": "0x",
        "color": "34n",
        "x": "28n",
        "y": "37n",
        "size": "3n"
      },
      "4": {
        "_id": 4,
        "_creator": "0x",
        "color": "17n",
        "x": "100n",
        "y": "68n",
        "size": "1n"
      },
      "5": {
        "_id": 5,
        "_creator": "0x",
        "color": "87n",
        "x": "54n",
        "y": "15n",
        "size": "2n"
      },
      "6": {
        "_id": 6,
        "_creator": "0x",
        "color": "213n",
        "x": "23n",
        "y": "47n",
        "size": "3n"
      },
      "7": {
        "_id": 7,
        "_creator": "0x",
        "color": "165n",
        "x": "34n",
        "y": "53n",
        "size": "3n"
      },
      "8": {
        "_id": 8,
        "_creator": "0x",
        "color": "154n",
        "x": "29n",
        "y": "52n",
        "size": "2n"
      },
      "9": {
        "_id": 9,
        "_creator": "0x",
        "color": "229n",
        "x": "20n",
        "y": "46n",
        "size": "3n"
      }
    }
  }
}