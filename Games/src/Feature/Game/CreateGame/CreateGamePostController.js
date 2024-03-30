const { CreateGameCommand } = require("./CreateGameHandler")

class CreateGamePostController {

    constructor(CreateGameHandler) {
        this.handler = CreateGameHandler;
    }

    async handle(req, res) {

        const { uuid, local_team, away_team } = req.body;

        const command = new CreateGameCommand(uuid, local_team, away_team);

        await this.handler.handle(command);

        res.status(200).send('Product is now for sale');
    }

}

module.exports = CreateGamePostController
