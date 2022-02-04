export const userId = "user" + Math.floor(Math.random() * 9525678);

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