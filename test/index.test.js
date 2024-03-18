import {Olta} from "../lib/olta.module.js"

const olta = Olta()

describe("olta.parseDoc()", () => {
  test("should parse BigInt to number", () => {
    const doc = {
      value: "1n"
    }

    expect(olta.parseDoc(doc))
      .toEqual({
        value: 1
      })
  })

  test("should return number if value is number already", () => {
    const doc = {
      value: 1
    }

    expect(olta.parseDoc(doc))
      .toEqual(doc)
  })

  test("should not parse hidden properties", () => {
    // "_" denotes hidden

    const doc = {
      _id: "someValue",
      _valueEndingInN: "on",
      _bigIntButHidden: "1n"
    }

    expect(olta.parseDoc(doc))
      .toEqual(doc)
  })
})

describe("olta.formatDoc()", () => {
  test("should format number to BigInt", () => {
    const doc = {
      number: 1,
      negative: -1,
      float: 0.5,
      negativeFloat: -1.5
    }

    expect(olta.formatDoc(doc))
      .toEqual({
        number: "1n",
        negative: "-1n",
        float: "1n",
        negativeFloat: "-1n"
      })
  })

  test("should not format if already bigInt", () => {
    const doc = {
      value: "1n"
    }

    expect(olta.formatDoc(doc))
      .toEqual(doc)
  })
})