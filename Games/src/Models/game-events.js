class Event {

    constructor(
        aggregate
    ) {
        this.aggregate = aggregate
    }

}



class GamePostponed extends Event{

}

class GameFinished extends Event{

}

class GameInProgress extends Event{
    
}

class GameScheduled extends Event{
    
}

module.exports = {
    GamePostponed : GamePostponed,
    GameFinished : GameFinished,
    GameInProgress : GameInProgress,
    GameScheduled : GameScheduled,
}