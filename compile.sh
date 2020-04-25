#!/bin/bash

### Check existing commands

command -v tsc >/dev/null 2>&1 || { echo >&2 "The typescript compiler is not installed"; exit 1; }
command -v uglifyjs >/dev/null 2>&1 || { echo >&2 "UglifyJs is not installed"; exit 1; }

### Update the version written in the cacheManifest.mf file to force update of the whole game (see https://developer.mozilla.org/en-US/docs/HTML/Using_the_application_cache )

cd pythonScripts
python updateCacheManifestVersion.py
cd ..

### Generate genAscii.ts and genText.ts from the ascii and text files
### They will be added in the code/gen dir

cd pythonScripts
python genAscii.py
python genText.py
cd ..

### Compile the game using tsc
### It will generate the candybox3.js.temp script

tsc ./libs/*.ts ./code/main/modules/*.ts \
    ./code/main/classes/*.ts \
    ./code/main/classes/candies_thrown/*.ts \
    ./code/main/classes/candy_merchant_item/*.ts \
    ./code/main/classes/super_rpg/*.ts \
    ./code/main/classes/the_cave_pattern/*.ts \
    ./code/main/classes/the_sea/*.ts \
    ./code/main/enums/*.ts \
    ./code/main/interfaces/*.ts \
    ./code/main/items/*.ts \
    ./code/main/places/*.ts \
    ./code/main/quest-entities/*.ts \
    ./code/main/quest-entity-spells/*.ts \
    ./code/main/quest-entity-spells/fireballs/*.ts \
    ./code/main/quest-entity-weapons/*.ts \
    ./code/main/quests/*.ts \
    ./code/main/render-areas/*.ts \
    ./code/main/render-link/*.ts \
    ./code/main/game_resources/*.ts \
    ./code/gen/*.ts \
    ./code/arena/*/* --out ./candybox3.js.temp


## Minify the script with uglifyjs, we get a candybox3.min.js.temp script

uglifyjs candybox3.js.temp -c -m -o candybox3.min.js.temp

### Create the candybox3.js file from the license and the temp file

cat candybox3_sourceCodeLicense.txt > candybox3.js
cat candybox3.js.temp >> candybox3.js


### Create the candybox3.min.js file from the license and the temp file

cat candybox3_sourceCodeLicense.txt > candybox3.min.js
cat candybox3.min.js.temp >> candybox3.min.js


### Remove the temp files

rm candybox3.js.temp candybox3.min.js.temp

