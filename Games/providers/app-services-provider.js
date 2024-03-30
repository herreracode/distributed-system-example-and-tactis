const { createContainer, asClass, InjectionMode } = require('awilix');
const  CreateGamePostController = require('../src/Feature/Game/CreateGame/CreateGamePostController');
const { CreateGameHandler } = require('../src/Feature/Game/CreateGame/CreateGameHandler');

const container = createContainer({ injectionMode: InjectionMode.CLASSIC }).createScope()

container.register({
    startSellingProductHandler: asClass(CreateGameHandler),
    CreateGamePostController: asClass(CreateGamePostController)
})

// container.loadModules([
//     ['src/*.js', asClass],
// ]);

module.exports = container;