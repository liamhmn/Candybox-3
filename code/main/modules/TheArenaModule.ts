module TheArenaModule{
    var quests: { [s: string]: TheArenaModuleQuest; } = {};

    // Add a quests
    export function addQuest(quest: TheArenaModuleQuest): void{
        quests[quest.getQuestFolderName()] = quest;
    }

    // Get a quests
    export function getQuest(questFolderName: string): TheArenaModuleQuest{
        return quests[questFolderName];
    }
}
