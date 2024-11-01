import { ExtensionContext, window } from "vscode";

export function activate(context: ExtensionContext) {
	const log = window.createOutputChannel("Log", {log: true})
	const log2 = window.createOutputChannel("Log", {log: true})
	context.subscriptions.push(log, log2)
	log.appendLine("Log1")
	log2.appendLine("Log2")
	log.appendLine("Log1")
}