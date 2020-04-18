///<reference path="GridItem.ts"/>
///<reference path="../quest-entities/Player.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../classes/QuestEntityDamageReason.ts"/>

class XinopherydonClaw extends GridItem{
    public hit(player: Player, quest: Quest, questEntity: QuestEntity, damage: number, reason: QuestEntityDamageReason): number{
        return damage*2;
    }
}
