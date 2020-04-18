import os
import re
import sys
from jsFormat import *

tupleList = []
rootdir = "./../text/"
finalFileName = "./../code/gen/genText.ts"

# We get the list of files in each subdirectory
for root, subFolders, files in os.walk(rootdir):
    for file in files:
        fullPath = os.path.join(root, file)
        if(os.path.splitext(fullPath)[0].replace(rootdir, "") != "cauldron/en"): # We don't want to use cauldron/en because the cauldron english text is contained in the book ascii art
            tupleList.append((fullPath, os.path.splitext(fullPath)[0].replace(rootdir, "")))

# If a previous file exist, we delete it
if os.path.isfile(finalFileName):
    os.remove(finalFileName)

# We open the output file
outfile = open(finalFileName, mode='w', encoding="utf-8")

# We write the Database module import
outfile.write("///<reference path=\"../main/modules/Database.ts\"/>\n")

# We copy the content of each file in a big "genText.ts" file
for tup in tupleList:
    # Open the input file
    infile = open(tup[0], 'r', encoding="utf-8")
    
    # Write the Database.addText() function calls
    for index, line in enumerate(infile.readlines()):
        if(index % 2 == 0):
            line = line.split(' ', 1)[0]
            outfile.write("Database.addText(\"" + line.rstrip() + "\", ")
        else:
            outfile.write("\"" + jsFormat(line.rstrip()) + "\");\n")
    # Close the input file
    infile.close()

# We close the output file
outfile.close()
