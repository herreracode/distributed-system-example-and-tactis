const GameEvents = require("./game-events")

class StatusEnum {

    static PENDING = "pending";
    static PROGRESS = "progress";
    static FINISH = "finish";
    static POSTPONED = "postponed";

}

class Score {

    constructor(localTeamScore, awayTeamScore) {

        this.awayTeamScore = awayTeamScore
        this.localTeamScore = localTeamScore
    }

}


class Game {

    events = [];

    constructor(status,
                localTeam,
                awayTeam,
                Score) {

        this.status = status
        this.localTeamName = localTeam
        this.awayTeamName = awayTeam
        this.Score = Score
    }

    static create(
        localTeam,
        awayTeam
    ) {

        //TODO: raise the event GAme create

        return new Game(
            StatusEnum.PENDING,
            localTeam,
            awayTeam,
            null
        );
    }

    markInProgress(){

        this.status = StatusEnum.PROGRESS

        this.events.push( new GameEvents.GameInProgress(this))
    }

    finish(){

        this.status = StatusEnum.FINISH

        this.events.push( new GameEvents.GameFinished(this))
    }

    postpone(){

        this.status = StatusEnum.POSTPONED

        this.events.push( new GameEvents.GamePostponed(this))
    }
}

module.exports = {
    Game : Game,
    StatusEnum : StatusEnum,
    Score : Score,
}