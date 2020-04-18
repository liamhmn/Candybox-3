///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../classes/QuestEntitySpellColor.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/QuestEntityMovement.ts"/>
///<reference path="../classes/QuestEntityAnimation.ts"/>

class QuestEntitySpell extends QuestEntity{
    // Colors
    private colors: QuestEntitySpellColor[] = [];
    
    // Constructor
    constructor(){
        super();
    }

    public constructQuestEntitySpell(quest: Quest, pos: Pos, naming: Naming, renderArea: RenderArea = null, renderAreaPosition: Pos = new Pos(0, 0), cbc: CollisionBoxCollection = null, questEntityMovement: QuestEntityMovement = null, questEntityAnimation: QuestEntityAnimation = null){
        super.constructQuestEntity(quest,
            pos,
            naming,
            renderArea,
            renderAreaPosition,
            cbc,
            questEntityMovement,
            questEntityAnimation
        );

        // Set isASpell
        this.setIsASpell(true);
    }

    // Public methods
    public addColor(color: QuestEntitySpellColor): void{
        this.colors.push(color);
    }
    
    public draw(renderArea: RenderArea): void{
        // Call the mother class draw method
        super.draw(renderArea);
        
        // Draw the colors
        for(var i = 0; i < this.colors.length; i++){
            this.colors[i].draw(renderArea, this.getQuest().getRealQuestPosition().plus(this.getGlobalPosition()).plus(this.getQuest().getGlobalDrawingOffset()));
        }
    }
    
    public removeColors(): void{
        this.colors = [];
    }
}
