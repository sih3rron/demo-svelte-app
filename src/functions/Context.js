export class Context {
	constructor(known, anonymous){
		this.known = (userInfo)=>{
			return {
				key: userInfo,
			}
		},
		this.anonymous = ()=>{
			return {
				anonymous: true,
			}
		}
	}
}