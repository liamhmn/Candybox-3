///<reference path="../classes/StatusBarResource.ts"/>
///<reference path="../classes/Game.ts"/>
///<reference path="../modules/Algo.ts"/>

class Candies extends StatusBarResource{
    // Constructor
    constructor(game: Game, savingPrefix: string){
        super(game, savingPrefix);
    }
    
    // Public methods
    public getCurrentAsString(totalSize: number = 10): string{
        var n: number = this.getCurrent();
        var size: number = totalSize;
        
        var base: string = "";
        var prefix: string = "";
        var suffix: string = "";
        var comment: string = "";
        
        // We set the base or return right now in some special cases
        if(n < 0) {
            return "What, negative " + Version.getPlural(TypeResource.CANDY) + "?!";
        } else if(n == 1 || n == 0) {
            return "You have " + n + Version.getSingular(TypeResource.CANDY);
        } else {
            if(n == 1337)
                base = "leet";
            else
                base = Algo.numberToStringButNicely(n);
        }
        
        // How much space do we still have ?
        size = totalSize - base.length;
        
        // We set the suffix
        if(size >= 8){
            suffix = Version.getPlural(TypeResource.CANDY);
            
            // We add a prefix
                // How much space do we still have ?
                size = totalSize - base.length - suffix.length;
                
                // We set the prefix
                var prefixTxt = Database.getTranslatedOrEnText("youhave");
                if(size - prefixTxt.length - 1 >= 0){
                    prefix = prefixTxt + " ";
                } else if(size >= 3) {
                    prefix = "-> ";
                }
        }
        else if(size >= 4) suffix = Version.getMini(TypeResource.CANDY);
        
        // How much space do we still have ?
        size = totalSize - base.length - prefix.length - suffix.length;
        
        // We possibly set a comment
        if(n == 42 && size >= 4) comment = " \\o/";
        else if((n == 65535 || n == 314159) && size >= 1) comment = "!";
        
        return prefix + base + suffix + comment;
    }
}
