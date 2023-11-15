/*
  The initial state of the example smart contract.
  This is not actually used in the example just yet but
  is here for reference and may be used in the future.
*/
export const initialState = {
  configs: {
    "colors": {
      "name": "colors",
      "type": "object",
      "properties": {
        "value": {
          "name": "value",
          "type": "bigint",
          "min": "0",
          "max": "3",
          "update": "set"
        }
      },
      "permissions": {
        "create": "closed",
        "createType": "set",
        "update": "open",
        "updateType": "set"
      }
    }
  },
  collections: {
    "colors": {
      "0": {
        "_id": 0,
        "_creator": "0x",
        "value": "3n"
      },
      "1": {
        "_id": 1,
        "_creator": "0x",
        "value": "1n"
      },
      "2": {
        "_id": 2,
        "_creator": "0x",
        "value": "1n"
      },
      "3": {
        "_id": 3,
        "_creator": "0x",
        "value": "3n"
      },
      "4": {
        "_id": 4,
        "_creator": "0x",
        "value": "2n"
      },
      "5": {
        "_id": 5,
        "_creator": "0x",
        "value": "0n"
      },
      "6": {
        "_id": 6,
        "_creator": "0x",
        "value": "3n"
      },
      "7": {
        "_id": 7,
        "_creator": "0x",
        "value": "1n"
      },
      "8": {
        "_id": 8,
        "_creator": "0x",
        "value": "1n"
      },
      "9": {
        "_id": 9,
        "_creator": "0x",
        "value": "3n"
      },
      "10": {
        "_id": 10,
        "_creator": "0x",
        "value": "2n"
      },
      "11": {
        "_id": 11,
        "_creator": "0x",
        "value": "0n"
      },
      "12": {
        "_id": 12,
        "_creator": "0x",
        "value": "2n"
      },
      "13": {
        "_id": 13,
        "_creator": "0x",
        "value": "3n"
      },
      "14": {
        "_id": 14,
        "_creator": "0x",
        "value": "3n"
      },
      "15": {
        "_id": 15,
        "_creator": "0x",
        "value": "0n"
      },
      "16": {
        "_id": 16,
        "_creator": "0x",
        "value": "1n"
      },
      "17": {
        "_id": 17,
        "_creator": "0x",
        "value": "1n"
      },
      "18": {
        "_id": 18,
        "_creator": "0x",
        "value": "3n"
      },
      "19": {
        "_id": 19,
        "_creator": "0x",
        "value": "0n"
      },
      "20": {
        "_id": 20,
        "_creator": "0x",
        "value": "0n"
      },
      "21": {
        "_id": 21,
        "_creator": "0x",
        "value": "1n"
      },
      "22": {
        "_id": 22,
        "_creator": "0x",
        "value": "3n"
      },
      "23": {
        "_id": 23,
        "_creator": "0x",
        "value": "3n"
      },
      "24": {
        "_id": 24,
        "_creator": "0x",
        "value": "1n"
      },
      "25": {
        "_id": 25,
        "_creator": "0x",
        "value": "0n"
      },
      "26": {
        "_id": 26,
        "_creator": "0x",
        "value": "1n"
      },
      "27": {
        "_id": 27,
        "_creator": "0x",
        "value": "0n"
      },
      "28": {
        "_id": 28,
        "_creator": "0x",
        "value": "3n"
      },
      "29": {
        "_id": 29,
        "_creator": "0x",
        "value": "3n"
      },
      "30": {
        "_id": 30,
        "_creator": "0x",
        "value": "0n"
      },
      "31": {
        "_id": 31,
        "_creator": "0x",
        "value": "0n"
      },
      "32": {
        "_id": 32,
        "_creator": "0x",
        "value": "0n"
      },
      "33": {
        "_id": 33,
        "_creator": "0x",
        "value": "3n"
      },
      "34": {
        "_id": 34,
        "_creator": "0x",
        "value": "1n"
      },
      "35": {
        "_id": 35,
        "_creator": "0x",
        "value": "3n"
      },
      "36": {
        "_id": 36,
        "_creator": "0x",
        "value": "2n"
      },
      "37": {
        "_id": 37,
        "_creator": "0x",
        "value": "3n"
      },
      "38": {
        "_id": 38,
        "_creator": "0x",
        "value": "1n"
      },
      "39": {
        "_id": 39,
        "_creator": "0x",
        "value": "1n"
      },
      "40": {
        "_id": 40,
        "_creator": "0x",
        "value": "3n"
      },
      "41": {
        "_id": 41,
        "_creator": "0x",
        "value": "0n"
      },
      "42": {
        "_id": 42,
        "_creator": "0x",
        "value": "0n"
      },
      "43": {
        "_id": 43,
        "_creator": "0x",
        "value": "0n"
      },
      "44": {
        "_id": 44,
        "_creator": "0x",
        "value": "0n"
      },
      "45": {
        "_id": 45,
        "_creator": "0x",
        "value": "3n"
      },
      "46": {
        "_id": 46,
        "_creator": "0x",
        "value": "1n"
      },
      "47": {
        "_id": 47,
        "_creator": "0x",
        "value": "1n"
      },
      "48": {
        "_id": 48,
        "_creator": "0x",
        "value": "1n"
      },
      "49": {
        "_id": 49,
        "_creator": "0x",
        "value": "3n"
      },
      "50": {
        "_id": 50,
        "_creator": "0x",
        "value": "3n"
      },
      "51": {
        "_id": 51,
        "_creator": "0x",
        "value": "3n"
      },
      "52": {
        "_id": 52,
        "_creator": "0x",
        "value": "0n"
      },
      "53": {
        "_id": 53,
        "_creator": "0x",
        "value": "2n"
      },
      "54": {
        "_id": 54,
        "_creator": "0x",
        "value": "2n"
      },
      "55": {
        "_id": 55,
        "_creator": "0x",
        "value": "1n"
      },
      "56": {
        "_id": 56,
        "_creator": "0x",
        "value": "3n"
      },
      "57": {
        "_id": 57,
        "_creator": "0x",
        "value": "0n"
      },
      "58": {
        "_id": 58,
        "_creator": "0x",
        "value": "3n"
      },
      "59": {
        "_id": 59,
        "_creator": "0x",
        "value": "3n"
      },
      "60": {
        "_id": 60,
        "_creator": "0x",
        "value": "2n"
      },
      "61": {
        "_id": 61,
        "_creator": "0x",
        "value": "3n"
      },
      "62": {
        "_id": 62,
        "_creator": "0x",
        "value": "3n"
      },
      "63": {
        "_id": 63,
        "_creator": "0x",
        "value": "1n"
      },
      "64": {
        "_id": 64,
        "_creator": "0x",
        "value": "0n"
      },
      "65": {
        "_id": 65,
        "_creator": "0x",
        "value": "3n"
      },
      "66": {
        "_id": 66,
        "_creator": "0x",
        "value": "1n"
      },
      "67": {
        "_id": 67,
        "_creator": "0x",
        "value": "1n"
      },
      "68": {
        "_id": 68,
        "_creator": "0x",
        "value": "1n"
      },
      "69": {
        "_id": 69,
        "_creator": "0x",
        "value": "2n"
      },
      "70": {
        "_id": 70,
        "_creator": "0x",
        "value": "3n"
      },
      "71": {
        "_id": 71,
        "_creator": "0x",
        "value": "1n"
      },
      "72": {
        "_id": 72,
        "_creator": "0x",
        "value": "2n"
      },
      "73": {
        "_id": 73,
        "_creator": "0x",
        "value": "3n"
      },
      "74": {
        "_id": 74,
        "_creator": "0x",
        "value": "0n"
      },
      "75": {
        "_id": 75,
        "_creator": "0x",
        "value": "0n"
      },
      "76": {
        "_id": 76,
        "_creator": "0x",
        "value": "3n"
      },
      "77": {
        "_id": 77,
        "_creator": "0x",
        "value": "1n"
      },
      "78": {
        "_id": 78,
        "_creator": "0x",
        "value": "2n"
      },
      "79": {
        "_id": 79,
        "_creator": "0x",
        "value": "0n"
      },
      "80": {
        "_id": 80,
        "_creator": "0x",
        "value": "3n"
      },
      "81": {
        "_id": 81,
        "_creator": "0x",
        "value": "3n"
      },
      "82": {
        "_id": 82,
        "_creator": "0x",
        "value": "2n"
      },
      "83": {
        "_id": 83,
        "_creator": "0x",
        "value": "1n"
      },
      "84": {
        "_id": 84,
        "_creator": "0x",
        "value": "0n"
      },
      "85": {
        "_id": 85,
        "_creator": "0x",
        "value": "2n"
      },
      "86": {
        "_id": 86,
        "_creator": "0x",
        "value": "0n"
      },
      "87": {
        "_id": 87,
        "_creator": "0x",
        "value": "3n"
      },
      "88": {
        "_id": 88,
        "_creator": "0x",
        "value": "2n"
      },
      "89": {
        "_id": 89,
        "_creator": "0x",
        "value": "0n"
      },
      "90": {
        "_id": 90,
        "_creator": "0x",
        "value": "2n"
      },
      "91": {
        "_id": 91,
        "_creator": "0x",
        "value": "3n"
      },
      "92": {
        "_id": 92,
        "_creator": "0x",
        "value": "3n"
      },
      "93": {
        "_id": 93,
        "_creator": "0x",
        "value": "0n"
      },
      "94": {
        "_id": 94,
        "_creator": "0x",
        "value": "3n"
      },
      "95": {
        "_id": 95,
        "_creator": "0x",
        "value": "0n"
      },
      "96": {
        "_id": 96,
        "_creator": "0x",
        "value": "3n"
      },
      "97": {
        "_id": 97,
        "_creator": "0x",
        "value": "1n"
      },
      "98": {
        "_id": 98,
        "_creator": "0x",
        "value": "3n"
      },
      "99": {
        "_id": 99,
        "_creator": "0x",
        "value": "0n"
      }
    }
  }
}