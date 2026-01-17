import os
from os import walk
import re
from datetime import date
from datetime import datetime

def main(): 
    
    audioficFiles = "C:\\Users\\Digie\\OneDrive\\Desktop\\audiofic archive"
    files = []
    my_dict = {"test","test"}
    for (dirpath, dirnames, filenames) in walk(audioficFiles):
        for(filename) in filenames:
            print(dirpath)
            originalFilename = os.path.basename(filename);
            
            extension = originalFilename.split(".")[1]
            currentDate = datetime.today().strftime('%d%m%Y')
            
            newFilename = originalFilename.split(".")[0]
            newFilename = currentDate + "_" + newFilename.replace(" ", "_");
            newFilename = re.sub("[^A-Za-z0-9_]", "", newFilename).lower()
            
            print(originalFilename)
            print(newFilename+"."+extension)
            
            if originalFilename[:8].isdigit():
                print("rename skipped")
            else: 
                os.rename(dirpath+"/"+originalFilename, dirpath+"/"+newFilename+"."+extension)
           
      
    
main();