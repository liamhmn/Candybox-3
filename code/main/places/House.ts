///<reference path="../classes/Place.ts"/>
///<reference path="../classes/Game.ts"/>
///<reference path="../classes/CallbackCollection.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>

class House extends Place{
    // Constructor
    constructor(game: Game){
        super(game);
    }
    
    // Special method used to add a button to go back to the village
    public addBackToTheVillageButton(renderArea: RenderArea, otherClass: string): void{
        this.addBackToButton(renderArea,
                             new CallbackCollection(this.getGame().goToVillage.bind(this.getGame())),
                             Database.getText("buttonBackToTheVillage"),
                             Database.getTranslatedText("buttonBackToTheVillage"),
                             otherClass);
    }
}
