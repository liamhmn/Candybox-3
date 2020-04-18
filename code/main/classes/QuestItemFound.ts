///<reference path="../quests/Quest.ts"/>
///<reference path="QuestLogMessage.ts"/>
class QuestItemFound{
    // The quests
    private quest: Quest;
    
    // The saving name of the items
    private savingName: string;
    
    // The text to show when we find the items
    private foundText: string;
    
    // The text to show when we get the items
    private getText: string;
    
    // Constructor
    constructor(quest: Quest, savingName: string, foundText: string, getText: string){
        this.quest = quest;
        this.savingName = savingName;
        this.foundText = foundText;
        this.getText = getText;
    }
    
    // Public methods
    public found(): void{ // Called when we find the items
        this.quest.getGame().getQuestLog().addMessage(new QuestLogMessage(this.foundText, null, true));
    }
    
    public get(): void{ // Called when we get the items
        this.quest.getGame().getQuestLog().addMessage(new QuestLogMessage(this.getText, null, true));
    }
    
    // Public getters    
    public getSavingName(): string{
        return this.savingName;
    }
}
