///<reference path="EqItem.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>

class PolishedSilverSword extends EqItem{
    // Constructor
    constructor(){
        super("eqItemWeaponPolishedSilverSword",
              "eqItemWeaponPolishedSilverSwordName",
              "eqItemWeaponPolishedSilverSwordDescription",
              "eqItems/weapons/polishedSilverSword");
    }
    
    // Public getters
    public getQuestEntityWeapon(quest: Quest, player: Player): QuestEntityWeapon{
        var qew: QuestEntityWeapon = 
                 new QuestEntityWeapon(quest,
                                       player,
                                       new Naming("A polished silver sword", "a polished silver sword"),
                                       player.getClassicCollisionBoxCollection(),
                                       7
                                      );
        qew.getCloseCombatDelay().setFixedDelay(4, 0);
        return qew;
    }
}
