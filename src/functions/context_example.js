let networkConnection = myFunction();
let userId = collectUserFromXYZ();


const contextExample = {
	key: userId,
	firstName: "Firstname",
	lastName: "Lastname",
	country: "UK",
	city: "London",
	ip: "127.0.0.1",
	email: "user@email.com",
	privateAttributeNames: ["firstName", "lastName", "email"],
	custom: {
	  groups: ["Beta", "Internal", "High Volume"],
	  networkConnection: networkConnection,
	  loyaltyMember: false,
	  requestTime: Math.round(new Date().getTime() / 1000),
	  LTV: "Z142456",
	  version: "4.3.8"
	}
  };