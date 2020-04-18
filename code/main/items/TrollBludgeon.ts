///<reference path="EqItem.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>
///<reference path="../quest-entity-weapons/PlayerBludgeon.ts"/>
///<reference path="../classes/Naming.ts"/>

class TrollBludgeon extends EqItem{
    // Constructor
    constructor(){
        super("eqItemWeaponTrollBludgeon",
              "eqItemWeaponTrollBludgeonName",
              "eqItemWeaponTrollBludgeonDescription",
              "eqItems/weapons/trollBludgeon");
    }
    
    // Public getters
    public getQuestEntityWeapon(quest: Quest, player: Player): QuestEntityWeapon{
        var qew: QuestEntityWeapon = 
                 new PlayerBludgeon(quest,
                                       player,
                                       new Naming("The troll's bludgeon", "the troll's bludgeon"),
                                       player.getClassicCollisionBoxCollection()
                                      );
        qew.getCloseCombatDelay().setFixedDelay(6);
        return qew;
    }
}
