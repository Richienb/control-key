"use strict"

module.exports = () => {
	const { platform } = process
	return platform === "darwin" ? "⌘" : "ctrl"
}
