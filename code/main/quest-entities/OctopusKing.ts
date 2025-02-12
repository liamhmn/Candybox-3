///<reference path="../classes/QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../render-areas/RenderArea.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>
///<reference path="../classes/QuestEntityMovement.ts"/>
///<reference path="../classes/RenderTransparency.ts"/>
///<reference path="../quest-entity-weapons/QuestEntityWeapon.ts"/>
///<reference path="../classes/QuestItemFound.ts"/>
///<reference path="../classes/QuestLogMessage.ts"/>
///<reference path="../modules/Version.ts"/>

class OctopusKing extends QuestEntity{
    // Constructor
    constructor(quest: Quest, pos: Pos){
        super();
        super.constructQuestEntity(quest,
              pos,
              new Naming("The Octopus King", "the Octopus King"),
              new RenderArea(6, 4),
              new Pos(0, 0),
              new CollisionBoxCollection(new CollisionBox(this, new Pos(2, 0), new Pos(2, 1)),
                                         new CollisionBox(this, new Pos(1, 1), new Pos(4, 1)),
                                         new CollisionBox(this, new Pos(1, 2), new Pos(4, 1)),
                                         new CollisionBox(this, new Pos(0, 3), new Pos(6, 1))
                                        ),
              new QuestEntityMovement()
             );
        
        // Set gravity
        this.getQuestEntityMovement().setGravity(true);
        this.getQuestEntityMovement().setWormsLike(false);
        
        // Set destructible
        this.setDestructible(true);
        this.setMaxHp(30);
        this.setHp(30);
        
        // Set the ascii art and the transparent character
        this.getRenderArea().drawArray(Database.getAscii("places/quests/octopusKing/octopusKing"));
        this.setTransparency(new RenderTransparency(" "));
        
        // Set the weapon and its delay
        this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(), this, new Naming("Its tentacles", "its tentacles"), new CollisionBoxCollection(new CollisionBox(this, new Pos(-1, -1), new Pos(8, 6))), 16));
        this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3);
    }
    
    // update()
    public update(): void{
        // Go towards the player
        this.goTowards(this.getGlobalPosition(), this.getQuest().getGame().getPlayer().getGlobalPosition(), 0, new Pos(1, 0));
        
        // Call the mother class update method
        super.update();
    }
    
    // willDie()
    public willDie(): void{
        // Candies
        this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage() + " (and found " + Algo.pluralFormat(this.getQuest().foundCandies(4000), Version.getSingular(), Version.getPlural()) + ")", this.getQuest().getCandiesFoundMessage()));
        // The monkey wizard staff
        this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(), "eqItemHatOctopusKingCrown", "You found the Octopus King crown.", "You gain the Octopus King crown."));
    }
}
