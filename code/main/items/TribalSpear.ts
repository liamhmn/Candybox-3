///<reference path="EqItem.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>
///<reference path="../classes/Naming.ts"/>

class TribalSpear extends EqItem{
    // Constructor
    constructor(){
        super("eqItemWeaponTribalSpear",
              "eqItemWeaponTribalSpearName",
              "eqItemWeaponTribalSpearDescription",
              "eqItems/weapons/tribalSpear");
    }
    
    // Public getters
    public getQuestEntityWeapon(quest: Quest, player: Player): QuestEntityWeapon{
        var qew: QuestEntityWeapon = 
                 new QuestEntityWeapon(quest,
                                       player,
                                       new Naming("A tribal spear", "a tribal spear"),
                                       player.getClassicCollisionBoxCollection(),
                                       8
                                      );
        qew.getCloseCombatDelay().setFixedDelay(2);
        return qew;
    }
}
