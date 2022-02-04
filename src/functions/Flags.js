import * as Client from 'launchdarkly-js-client-sdk';
import type { dataset_dev } from 'svelte/internal';

const Flags = (function(){
	let theseFlags;
	const myFlags = {
		sdkKey: "xyz",
		options: {
			useReport: true,
			evaluationReasons: true,
			allAttributesPrivate: false,
		},
	}

	function create(context){
		const clientFlags = Client.initialize(myFlags.sdkKey, context, myFlags.options);
		return {
			treatment: async (flagname, defaultValue) => {
				try {
					await clientFlags.waitForInitialization();
					let details = clientFlags.variationDetail(flagname, defaultValue);
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
})()