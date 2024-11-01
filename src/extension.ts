import { ExtensionContext, LogOutputChannel, window } from "vscode";

export function activate(context: ExtensionContext) {
	const log = window.createOutputChannel("Log", { log: true });
	window.showInformationMessage("Log Level startup is " + log.logLevel);
	doLogs(log);

	// On change log level, show what actually shows
	log.onDidChangeLogLevel((level) => {
		window.showInformationMessage("Log Level changed event (" + level + ") actual is " + log.logLevel);
		log.appendLine("Log Level changed to " + level);
		doLogs(log)
	}, undefined, context.subscriptions);
}


function doLogs(log: LogOutputChannel) {
	log.appendLine("AppendLine: Log Level is " + log.logLevel)
	log.trace("Trace: Log Level is " + log.logLevel)
	log.debug("Debug: Log Level is " + log.logLevel)
	log.info("Info: Log Level is " + log.logLevel)
	log.warn("Warn: Log Level is " + log.logLevel)
	log.error("Error: Log Level is " + log.logLevel)
}