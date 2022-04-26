export const analyticsTemplate = async (gtag, details, flagname) => {
	let assignment = {
		flagname: flagname,
		treatment: details.variationIndex,
		isExperiment: details.reason.inExperiment == null || details.reason.inExperiment == undefined ?  false : details.reason.inExperiment,
		audience: details.reason.ruleId == undefined ?  details.reason.kind : details.reason.ruleId,
		audienceIndex: details.reason.ruleIndex == undefined ?  details.reason.kind : details.reason.ruleIndex,
		eventCreated: new Date(),
	};

	console.log(details);
	console.log(assignment);

	if (!!window.gtag)
		gtag("event", "feature_treatment", assignment);

}