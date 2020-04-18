///<reference path="./QuestEntityWeapon.ts"/>
///<reference path="../modules/Random.ts"/>

class PlayerBludgeon extends QuestEntityWeapon{
    // Public methods
    public getRealDamage(): number{
        return Random.between(12, 16);
    }
    
    public getRealDamageText(): string{
        return "12-16";
    }
}
