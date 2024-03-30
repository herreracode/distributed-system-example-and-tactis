const container = require("./app-services-provider");

const handleRequest = (controllerName, methodName) => async (req, res) => {
    const controller = container.resolve(controllerName);
    await controller[methodName || 'handle'](req, res);
}

module.exports = {
    handleRequest
}