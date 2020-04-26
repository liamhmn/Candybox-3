///<reference path="../enums/TypeResource.ts"/>
/**
 * Contains methods to have elements which are which between versions.
 */
module Version {

    // ------------------------ //
    // ----- GET SINGULAR ----- //
    // ------------------------ //
    export function getSingular(typeResource: TypeResource = TypeResource.CANDY): string {
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".lollipopSingular");
            case TypeResource.CHOCOLATE:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarSingular");
            case TypeResource.PAIN_AU_CHOCOLAT:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".painChocolatSingular");
            case TypeResource.CANDY:
            default:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".candySingular");
        }
    }

    // ---------------------- //
    // ----- GET PLURAL ----- //
    // ---------------------- //
    export function getPlural(typeResource: TypeResource = TypeResource.CANDY): string {
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".lollipopPlural");
            case TypeResource.CHOCOLATE:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarPlural");
            case TypeResource.PAIN_AU_CHOCOLAT:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".painChocolatPlural");
            case TypeResource.CANDY:
            default:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".candyPlural");
        }
    }

    // -------------------- //
    // ----- GET MINI ----- //
    // -------------------- //
    export function getMini(typeResource: TypeResource = TypeResource.CANDY): string {
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".lollipopMini");
            case TypeResource.CHOCOLATE:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarMini");
            case TypeResource.PAIN_AU_CHOCOLAT:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".painChocolatMini");
            case TypeResource.CANDY:
            default:
                return " " + Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + ".candyMini");
        }
    }

    // ------------------------------ //
    // ----- GET VERSION BY KEY ----- //
    // ------------------------------ //
    export function getVersionTxt(key: string): string {
        return Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + "." + key);
    }

    export function replaceVersionVariableInDatabase(txt: string): string {
        let resourcesNamesTab: {searchValue: string, replaceValue: string}[] = [
            {searchValue : "%CANDY%", replaceValue: getVersionTxt("candySingular")},
            {searchValue : "%CANDIES%", replaceValue: getVersionTxt("candyPlural")},
            {searchValue : "%LOLLIPOP%", replaceValue: getVersionTxt("lollipopSingular")},
            {searchValue : "%LOLLIPOPS%", replaceValue: getVersionTxt("lollipopPlural")},
            {searchValue : "%CHOCOLATE%", replaceValue: getVersionTxt("chocolateBarSingular")},
            {searchValue : "%CHOCOLATES%", replaceValue: getVersionTxt("chocolateBarPlural")},
            {searchValue : "%PAINCHOCOLAT%", replaceValue: getVersionTxt("painChocolatSingular")},
            {searchValue : "%PAINSCHOCOLAT%", replaceValue: getVersionTxt("painChocolatPlural")},
            {searchValue : "%LOLLIGATOR%", replaceValue: getVersionTxt("lolligator")}
        ];

        for (var resourceName of resourcesNamesTab) {
            txt = txt.replace(resourceName.searchValue, resourceName.replaceValue);
        }
        return txt;
    }

}
