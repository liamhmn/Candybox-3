///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>
///<reference path="../classes/QuestEntityMovement.ts"/>
///<reference path="../enums/QuestEntityTeam.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>

class PlayerCloneCandyBox extends QuestEntity{
    // Constructor
    constructor(quest: Quest, pos: Pos){
        super();
        super.constructQuestEntity(quest,
              pos,
              new Naming("A clone", "a clone"),
              new RenderArea(3, 1),
              new Pos(0, 0),
              new CollisionBoxCollection(new CollisionBox(this, new Pos(0, 0), new Pos(3, 1))),
              new QuestEntityMovement()
             );
        
        // Set the team
        this.setTeam(QuestEntityTeam.PLAYER);
        
        // Set destructible
        this.setDestructible(true);
        this.setMaxHp(quest.getGame().getPlayer().getHp());
        this.setHp(quest.getGame().getPlayer().getHp());
        
        // Set the ascii art and the transparent character
        this.getRenderArea().drawString("\\o/");
        
        // Set the weapon and its delay
        this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(), this, new Naming("Its fists", "its fists"), new CollisionBoxCollection(new CollisionBox(this, new Pos(-1, -1), new Pos(5, 3))), 3));
        this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3);
    }
}
