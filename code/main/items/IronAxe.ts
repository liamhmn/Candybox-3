///<reference path="EqItem.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>
///<reference path="../classes/Naming.ts"/>

class IronAxe extends EqItem{
    // Constructor
    constructor(){
        super("eqItemWeaponIronAxe",
              "eqItemWeaponIronAxeName",
              "eqItemWeaponIronAxeDescription",
              "eqItems/weapons/ironAxe");
    }
    
    // Public getters
    public getQuestEntityWeapon(quest: Quest, player: Player): QuestEntityWeapon{
        var qew: QuestEntityWeapon = 
                 new QuestEntityWeapon(quest,
                                       player,
                                       new Naming("An iron axe", "an iron axe"),
                                       player.getClassicCollisionBoxCollection(),
                                       30000000000000
                                      );
        qew.getCloseCombatDelay().setFixedDelay(3, 0);
        return qew;
    }
}
