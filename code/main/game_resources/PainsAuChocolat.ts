///<reference path="../classes/StatusBarResource.ts"/>

class PainsAuChocolat extends StatusBarResource{
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
        if(n < 0)
            return "What, negative" + Version.getPlural(TypeResource.PAIN_AU_CHOCOLAT) + "?!";
        else if(n == 1 || n == 0)
            return "-> " + n + Version.getSingular(TypeResource.PAIN_AU_CHOCOLAT);
        else
            base = Algo.numberToStringButNicely(n);
        
        // How much space do we still have ?
        size = totalSize - base.length;
        
        // We set the suffix
        if(size >= 18){
            suffix = Version.getPlural(TypeResource.PAIN_AU_CHOCOLAT);
            
            // We add a suffix
                // How much space do we still have ?
                size = totalSize - base.length - suffix.length;
                
                // We set the prefix
                var prefixTxt = Database.getTranslatedOrEnText("youhave");
                if(size - prefixTxt.length - 1 >= 0) {
                    prefix = prefixTxt + " ";
                } else if(size >= 3) {
                    prefix = "-> ";
                }
        }
        else if(size >= 3) suffix = Version.getMini(TypeResource.PAIN_AU_CHOCOLAT);
        
        // How much space do we still have ?
        size = totalSize - base.length - prefix.length - suffix.length;
        
        return prefix + base + suffix;
    }
}
