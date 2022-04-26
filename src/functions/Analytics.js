export const analyticsTemplate = async (gtag, details, flagname) => {
	let assignment = {
		flagname: flagname,
		treatment: details.variationIndex,
		isExperiment: details.reason.inExperiment == null || details.reason.inExperiment == undefined ?  false : details.reason.inExperiment,
		audience: details.reason.ruleId == undefined ?  details.reason.kind : details.reason.ruleId,
		audienceIndex: details.reason.ruleIndex == undefined ?  details.reason.kind : details.reason.ruleIndex,
		eventCreated: new Date(),
	};

	console.group(`[MOCK]: Data Warehouse for ${assignment.flagname}.`)
		console.log(`Flag name: ${assignment.flagname}`)
		console.log(`Treatment: ${assignment.treatment}`)
		console.log(`Part of an Experiment: ${assignment.isExperiment}`)
		console.log(`Which Rule: ${assignment.audience}`)
		console.log(`The Rules Index: ${assignment.audienceIndex}`)
		console.log(`Event Created: ${assignment.eventCreated}`)
	console.groupEnd()

	if (!!window.gtag)
		gtag("event", "feature_treatment", assignment);

}