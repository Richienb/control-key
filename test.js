const test = require("ava")
const controlKey = require(".")

const result = (main, windows) => process.platform === "darwin" ? windows : main

test("main", (t) => {
	t.is(controlKey(), result("ctrl", "⌘"))
})
