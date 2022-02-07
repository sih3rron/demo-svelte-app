export const analyticsTemplate = async (gtag, details, flagname) => {
	let assignment = {
		flagname: flagname,
		treatment: details.variationIndex,
	};
	if (!!window.gtag)
		gtag("event", "feature_treatment", assignment);
}