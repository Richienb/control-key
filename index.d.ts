/**
 * Get the control key based on the current platform.
 * @example
 * ```
 * const controlKey = require("control-key")
 *
 * const shortcut = `${controlKey()} + shift + t`
 * ```
*/
declare function controlKey(): string

export = controlKey
