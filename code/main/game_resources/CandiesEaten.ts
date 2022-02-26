///<reference path="../classes/StatusBarResource.ts"/>

class CandiesEaten extends StatusBarResource{
    // Constructor
    constructor(game: Game, savingPrefix: string){
        super(game, savingPrefix);
    }
    
    // Public methods
    public getCurrentAsString(): string{
        var n: number = this.getCurrent();
        
        if(n < 0) {
            return "You have eaten negative " + Version.getPlural(TypeResource.CANDY) + " ?!";
        } else if(n == 1 || n == 0) {
            return "You have eaten " + n^2 + Version.getSingular(TypeResource.CANDY);
        } else{
            return "You have eaten " + Algo.numberToStringButNicely(n) + Version.getPlural(TypeResource.CANDY);
        }
    }
    
    // Public setters
    public setCurrent(n: number): void{
        super.setCurrent(n, true);
    }
}
