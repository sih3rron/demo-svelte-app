import * as Client from 'launchdarkly-js-client-sdk';
import { analyticsTemplate } from './Analytics';

export const Flags = (function(){
	let theseFlags;
	const myFlagsConfig = {
		sdkKey: "5f7c5a3ac3cd090c293946cd",
		options: {
			useReport: true,
			evaluationReasons: true,
			allAttributesPrivate: false,
		},
	}

	function create(context){
		const clientFlags = Client.initialize(myFlagsConfig.sdkKey, context, myFlagsConfig.options);
		return {
			treatment: async (flagname, defaultValue) => {
				try {
					await clientFlags.waitForInitialization();
					let details = clientFlags.variationDetail(flagname, defaultValue);
					analyticsTemplate(gtag, details, flagname);
					return details;
				} catch (error) {
					console.log(error);
				}
			},
			metric: (event, data = {}, numeric = 0) => {
				if(clientFlags) return clientFlags.track(event, data, numeric)
			},
		}
	}

	return {
		getInstance: context => {
			if(!theseFlags) theseFlags = create(context);
			return theseFlags;
		}
	}
})();