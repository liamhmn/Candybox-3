///<reference path="TheSeaPatternLevel.ts"/>
///<reference path="../../modules/Random.ts"/>
///<reference path="TheSeaPattern_MaybeOneSmallestFish.ts"/>
///<reference path="TheSeaPattern_OneSmallestFish.ts"/>
///<reference path="TheSeaPatternLevel_Boss0.ts"/>
///<reference path="TheSeaPattern_MaybeOneMediumFish.ts"/>

class TheSeaPatternLevel_Level0 extends TheSeaPatternLevel{
    // Constructor
    constructor(theSea: TheSea){
        super(theSea);
    }
    
    // Public methods
    public getNextLevel(): TheSeaPatternLevel{
        return new TheSeaPatternLevel_Boss0(this.getTheSea());
    }
    
    public getPattern(initialDistance: number): TheSeaPattern{
        this.increaseHowManyPatterns();
        
        switch(Random.upTo(2)){
            case 0: return new TheSeaPattern_MaybeOneSmallestFish(this.getTheSea(), initialDistance); break;
            case 1: return new TheSeaPattern_OneSmallestFish(this.getTheSea(), initialDistance); break;
            case 2: return new TheSeaPattern_MaybeOneMediumFish(this.getTheSea(), initialDistance); break;
        }
    }
    
    public isLevelDone(): boolean{
        if(this.getHowManyPatterns() >= 2)
            return true;
        return false;
    }
}
