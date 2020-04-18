///<reference path="./QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../enums/QuestEntityTeam.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>

class Lava extends QuestEntity{
    // Constructor
    constructor(quest: Quest, globalPosition: Pos, size: Pos){
        // Call the mother constructor
        super(quest,
              globalPosition,
              new Naming("Lava", "lava")
             );
        
        // Set the team (nature)
        this.setTeam(QuestEntityTeam.NATURE);
        
        // Set the weapon and its delay
        this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(), this, new Naming("Fire", "fire"), new CollisionBoxCollection(new CollisionBox(this, new Pos(0, 0), size)), 1000));
        this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0);
    }
}
