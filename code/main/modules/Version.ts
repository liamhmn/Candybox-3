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
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".lollipopSingular";
                break;
            case TypeResource.CHOCOLATE:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarSingular";
                break;
            case TypeResource.PAIN_AU_CHOCOLAT:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".painChocolatSingular";
                break;
            case TypeResource.CANDY:
            default:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".candySingular";
        }
        var translateTxt = Database.getTranslatedText(dbKey);
        if (translateTxt == "") {
            return " " + Database.getText(dbKey);
        } else {
            return " " + translateTxt;
        }
    }

    // ---------------------- //
    // ----- GET PLURAL ----- //
    // ---------------------- //
    export function getPlural(typeResource: TypeResource = TypeResource.CANDY): string {
        var dbKey: string = "";
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".lollipopPlural";
                break;
            case TypeResource.CHOCOLATE:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarPlural";
                break;
            case TypeResource.PAIN_AU_CHOCOLAT:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".painChocolatPlural";
                break;
            case TypeResource.CANDY:
            default:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".candyPlural";
        }
        var translateTxt = Database.getTranslatedText(dbKey);
        if (translateTxt == "") {
            return " " + Database.getText(dbKey);
        } else {
            return " " + translateTxt;
        }
    }

    // -------------------- //
    // ----- GET MINI ----- //
    // -------------------- //
    export function getMini(typeResource: TypeResource = TypeResource.CANDY): string {
        var dbKey: string = "";
        switch (typeResource) {
            case TypeResource.LOLLIPOP:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".lollipopMini";
                break;
            case TypeResource.CHOCOLATE:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".chocolateBarMini";
                break;
            case TypeResource.PAIN_AU_CHOCOLAT:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".painChocolatMini";
                break;
            case TypeResource.CANDY:
            default:
                dbKey = Saving.loadString("gameVersion").toLowerCase() + ".candyMini";
        }
        var translateTxt = Database.getTranslatedText(dbKey);
        if (translateTxt == "") {
            return " " + Database.getText(dbKey);
        } else {
            return " " + translateTxt;
        }
    }

}
