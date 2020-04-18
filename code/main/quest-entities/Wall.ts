///<reference path="QuestEntity.ts"/>
///<reference path="../quests/Quest.ts"/>
///<reference path="../classes/Pos.ts"/>
///<reference path="../classes/Naming.ts"/>
///<reference path="../classes/CollisionBoxCollection.ts"/>
///<reference path="../classes/CollisionBox.ts"/>

class Wall extends QuestEntity{
    // Constructor
    constructor(quest: Quest, pos: Pos){
        super(quest,
              pos,
              new Naming("A wall", "a wall"),
              null,
              new Pos(0, 0),
              new CollisionBoxCollection()
             );
    }
    
    // Public method
    public addBox(pos: Pos, size: Pos): void{
        this.getCbc().addCollisionBox(new CollisionBox(this, pos, size));
    }
    
    public removeBoxes(): void{
        this.getCbc().removeBoxes();
    }
}
