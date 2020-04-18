///<reference path="GridItem.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quests/Quest.ts"/>

class UnicornHorn extends GridItem{
    public update(player: Player, quest: Quest): void{
        player.heal(3);
    }
}
