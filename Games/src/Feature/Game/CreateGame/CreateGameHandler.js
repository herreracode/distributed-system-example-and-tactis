const {Game} = require("../../../Models")


class CreateGameCommand {

    constructor(uuidGame,
                localTeam,
                awayTeam
    ) {

        this.localTeamName = localTeam
        this.awayTeamName = awayTeam
        this.uuidGame = uuidGame
    }
}



class CreateGameHandler {

    exec(command){

        let GameModel = Game.create(
            command.uuidGame,
            command.localTeamName,
            command.awayTeamName,
        );


        //persist the game

        //raise the event to the event bus

        console.log("create Game");
        console.log(GameModel);

        return GameModel;
    }
}

module.exports = {
    CreateGameCommand : CreateGameCommand,
    CreateGameHandler : CreateGameHandler
}