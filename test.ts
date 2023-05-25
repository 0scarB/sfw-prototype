const {createHelloWorld} = require("./src");

it("should return 'Hello World!'", () => expect(createHelloWorld()).toBe("Hello World!"))