class Enchantment{
    // Two items : before (the enchanted items) and after (the result of the enchantment)
    private beforeItem: EnchantmentItem;
    private afterItem: EnchantmentItem;
    
    // Constructor
    constructor(beforeItem: EnchantmentItem, afterItem: EnchantmentItem){
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    
    // Public methods
    public enchant(): void{
        // We check if we're currently wearing the before items. If so, we must stop wearing it !
        this.beforeItem.unequipIfEquipped();
        
        // We lose the before items and gain the after items
        Saving.saveBool(this.beforeItem.getSavingName(), false);
        Saving.saveBool(this.afterItem.getSavingName(), true);
    }
    
    public isPossible(): boolean{ // Is the enchatment possible?
        // If we have the before items but not the after items, we return true
        if(this.beforeItem.isPossessed() == true && this.afterItem.isPossessed() == false)
            return true;
        
        // Else we return false
        return false;
    }
    
    // Public getters
    public getAfterItem(): EnchantmentItem{
        return this.afterItem;
    }
    
    public getBeforeItem(): EnchantmentItem{
        return this.beforeItem;
    }
}
