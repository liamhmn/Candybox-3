///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>
///<reference path="../classes/QuestEntityMovement.ts"/>
///<reference path="../classes/QuestEntityAnimation.ts"/>
///<reference path="../classes/QuestItemFound.ts"/>

class DesertBird extends QuestEntity{
    // Constructor
    constructor(quest: Quest, pos: Pos, goingRight: boolean){
        super();
        super.constructQuestEntity(quest,
              pos,
              new Naming("A desert bird", "a desert bird"),
              new RenderArea(9, 4),
              new Pos(0, 0),
              new CollisionBoxCollection(new CollisionBox(this, new Pos(0, 0), new Pos(9, 4)))
             );
        
        // If we're heading to right
        if(goingRight){
            this.setQuestEntityMovement(new QuestEntityMovement(new Pos(1, 0)));
            this.setQuestEntityAnimation(new QuestEntityAnimation(3, Random.upTo(2), Random.upTo(1), "places/quests/desert/birdRightUp", "places/quests/desert/birdRightDown"));
        }
        // Else
        else{
            this.setQuestEntityMovement(new QuestEntityMovement(new Pos(-1, 0)));
            this.setQuestEntityAnimation(new QuestEntityAnimation(3, Random.upTo(2), Random.upTo(1), "places/quests/desert/birdLeftUp", "places/quests/desert/birdLeftDown"));
        }
        
        // Set destructible
        this.setDestructible(true);
        this.setMaxHp(6);
        this.setHp(6);
    }
    
    // willDie()
    public willDie(): void{
        super.willDie();
        this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(), "gridItemPossessedFeather", "You found a desert bird feather!", "You gain a desert bird feather"));
    }
}
