const {StatusEnum, GameEvents, Game} = require("../../../src/Models/index")

describe('Game model test suite', () => {

    /**
     * happy path suite
     */

    it('happy path create Game', () => {

        const GameObj = Game.create(
            "3e7f2b51-c7ce-41b9-ab34-acc40776e39e",
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
        expect(GameObj.events).toEqual(expect.arrayContaining([expect.any(GameEvents.GameInProgress)]));

    });

    it('Game Finished', () => {

        const GameObj = Game.create(
            "3e7f2b51-c7ce-41b9-ab34-acc40776e39e",
            "barcelona",
            "real madrid"
        );

        GameObj.finish();

        expect(GameObj.status).toBe(StatusEnum.FINISH);
        expect(GameObj.events).toEqual(expect.arrayContaining([expect.any(GameEvents.GameFinished)]));

    });

    it('Game Postponed', () => {

        const GameObj = Game.create(
            "3e7f2b51-c7ce-41b9-ab34-acc40776e39e",
            "barcelona",
            "real madrid"
        );

        GameObj.postpone();

        expect(GameObj.events).toEqual(expect.arrayContaining([expect.any(GameEvents.GamePostponed)]));
        expect(GameObj.status).toBe(StatusEnum.POSTPONED);

    });

});