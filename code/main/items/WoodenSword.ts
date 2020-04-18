///<reference path="EqItem.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>
///<reference path="../classes/Naming.ts"/>

class WoodenSword extends EqItem{
    // Constructor
    constructor(){
        super("eqItemWeaponWoodenSword",
              "eqItemWeaponWoodenSwordName",
              "eqItemWeaponWoodenSwordDescription",
              "eqItems/weapons/woodenSword");
    }
    
    // Public getters
    public getQuestEntityWeapon(quest: Quest, player: Player): QuestEntityWeapon{
        var qew: QuestEntityWeapon = 
                 new QuestEntityWeapon(quest,
                                       player,
                                       new Naming("A wooden sword", "a wooden sword"),
                                       player.getClassicCollisionBoxCollection(),
                                       1
                                      );
        qew.getCloseCombatDelay().setFixedDelay(4, 0);
        return qew;
    }
}
