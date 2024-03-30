const {StatusEnum, GameEvents, Game} = require("../../../src/Models/index")

describe('Game model test suite', () => {

    /**
     * happy path suite
     */

    it('happy path create Game', () => {

        const GameObj = Game.create(
            "barcelona",
            "real madrid"
        );

        expect(GameObj).toBeInstanceOf(Game);
        expect(GameObj.status).toBe(StatusEnum.PENDING);
        expect(GameObj.Score).toBeNull();

    });

    it('Game in progress', () => {

        const GameObj = Game.create(
            "barcelona",
            "real madrid"
        );

        GameObj.markInProgress();

        expect(GameObj.status).toBe(StatusEnum.PROGRESS);

    });

    it('Game Finished', () => {

        const GameObj = Game.create(
            "barcelona",
            "real madrid"
        );

        GameObj.finish();

        expect(GameObj.status).toBe(StatusEnum.FINISH);

    });

    it('Game Postponed', () => {

        const GameObj = Game.create(
            "barcelona",
            "real madrid"
        );

        GameObj.postpone();

        expect(GameObj.events).toContain(new GameEvents.GamePostponed(GameObj));
        expect(GameObj.status).toBe(StatusEnum.POSTPONED);

    });

});