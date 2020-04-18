///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>
///<reference path="../enums/QuestEntityTeam.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>

class Spikes extends QuestEntity{
    // Constructor
    constructor(quest: Quest, globalPosition: Pos, width: number, damage: number = 200, inverted: boolean = false){
        // Call the mother constructor
        super();
        super.constructQuestEntity(quest,
              globalPosition,
              new Naming("Some spikes", "some spikes"),
              new RenderArea(),
              new Pos(0, 0),
              new CollisionBoxCollection(new CollisionBox(this, new Pos(0, 0), new Pos(width, 1)))
             );
        
        // Set the team (nature)
        this.setTeam(QuestEntityTeam.NATURE);
        
        // Set the weapon and its delay
        this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(), this, new Naming("Its spikes", "its spikes"), new CollisionBoxCollection(new CollisionBox(this, new Pos(0, (inverted? 1: -1)), new Pos(width, 1))), damage));
        this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0);
        
        // Draw the ascii art
        this.getRenderArea().resize(width, 1);
        for(var i = 0; i < Math.floor(width/2); i++){
            if(inverted == false)
                this.getRenderArea().drawString("/\\", i*2, 0);
            else
                this.getRenderArea().drawString("\\/", i*2, 0);
        }
    }
}
