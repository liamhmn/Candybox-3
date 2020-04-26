///<reference path="../classes/StatusBarResource.ts"/>

class ChocolateBars extends StatusBarResource{
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
        
        // We set the base or return right now in some special cases
        if(n < 0) {
            return "What, negative " + Version.getPlural(TypeResource.CHOCOLATE) + "?!";
        } else if(n == 1 || n == 0) {
            return "You have " + n + Version.getSingular(TypeResource.CHOCOLATE);
        } else {
            base = Algo.numberToStringButNicely(n);
        }

        // How much space do we still have ?
        size = totalSize - base.length;
        
        // We set the suffix
        if(size >= 15){
            suffix = Version.getPlural(TypeResource.CHOCOLATE);
            
            // We add a suffix
                // How much space do we still have ?
                size = totalSize - base.length - suffix.length;
                
                // We set the prefix
                var prefixTxt = Database.getTranslatedText("youhave");
                prefixTxt = prefixTxt == "" ? Database.getText("youhave") : prefixTxt;
                if(size - prefixTxt.length - 1 >= 0) {
                    prefix = prefixTxt + " ";
                } else if(size >= 3) {
                    prefix = "-> ";
                }
        }
        else if(size >= 3) suffix = Version.getMini(TypeResource.CHOCOLATE);
        
        // How much space do we still have ?
        size = totalSize - base.length - prefix.length - suffix.length;
        
        return prefix + base + suffix;
    }
}
