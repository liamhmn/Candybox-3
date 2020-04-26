///<reference path="../enums/TypeResource.ts"/>
/**
 * Contains methods to have elements which are which between versions.
 */
module Version {

    // ------------------------ //
    // ----- GET SINGULAR ----- //
    // ------------------------ //
    export function getSingular(typeResource: TypeResource = TypeResource.CANDY): string {
        var dbKey: string = "";
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

}
