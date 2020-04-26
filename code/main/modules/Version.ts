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
    export function getSingularEn(typeResource: TypeResource = TypeResource.CANDY): string {
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".lollipopSingular");
            case TypeResource.CHOCOLATE:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarSingular");
            case TypeResource.PAIN_AU_CHOCOLAT:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".painChocolatSingular");
            case TypeResource.CANDY:
            default:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".candySingular");
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
    export function getPluralEn(typeResource: TypeResource = TypeResource.CANDY): string {
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".lollipopPlural");
            case TypeResource.CHOCOLATE:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarPlural");
            case TypeResource.PAIN_AU_CHOCOLAT:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".painChocolatPlural");
            case TypeResource.CANDY:
            default:
                return " " + Database.getText(Saving.loadString("gameVersion").toLowerCase() + ".candyPlural");
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
        return Database.getText(Saving.loadString("gameVersion").toLowerCase() + "." + key);
    }
    export function getVersionTranslated(key: string): string {
        return Database.getTranslatedText(Saving.loadString("gameVersion").toLowerCase() + "." + key);
    }
    export function getVersionTxtOrTranslated(key: string): string {
        return Database.getTranslatedOrEnText(Saving.loadString("gameVersion").toLowerCase() + "." + key);
    }

    export function replaceVersionVariableInDatabase(txt: string): string {
        let resourcesNamesTab: {searchValue: string, replaceValue: string}[] = [
            {searchValue : "%CANDY%", replaceValue: getVersionTxtOrTranslated("candySingular")},
            {searchValue : "%CANDIES%", replaceValue: getVersionTxtOrTranslated("candyPlural")},
            {searchValue : "%LOLLIPOP%", replaceValue: getVersionTxtOrTranslated("lollipopSingular")},
            {searchValue : "%LOLLIPOPS%", replaceValue: getVersionTxtOrTranslated("lollipopPlural")},
            {searchValue : "%CHOCOLATE%", replaceValue: getVersionTxtOrTranslated("chocolateBarSingular")},
            {searchValue : "%CHOCOLATES%", replaceValue: getVersionTxtOrTranslated("chocolateBarPlural")},
            {searchValue : "%PAINCHOCOLAT%", replaceValue: getVersionTxtOrTranslated("painChocolatSingular")},
            {searchValue : "%PAINSCHOCOLAT%", replaceValue: getVersionTxtOrTranslated("painChocolatPlural")},
            {searchValue : "%LOLLIGATOR%", replaceValue: getVersionTxtOrTranslated("lolligator")},
            {searchValue : "%CANDYBOX%", replaceValue: getVersionTxtOrTranslated("candybox")},
            {searchValue : "%LOLLIPOPFARM%", replaceValue: getVersionTxtOrTranslated("mapFarmComment")},
            {searchValue : "%SWEET%", replaceValue: getVersionTxtOrTranslated("sweet")}
        ];

        for (var resourceName of resourcesNamesTab) {
            txt = txt.replace(resourceName.searchValue, resourceName.replaceValue);
        }
        return txt;
    }

}
