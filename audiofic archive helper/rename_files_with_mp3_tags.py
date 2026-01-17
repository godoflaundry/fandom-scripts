import os
from os import walk
import re
from datetime import date
from datetime import datetime
import eyed3

    
eyed3.log.setLevel("ERROR")

def main():
    
    audioficFiles = "C:\\Users\\Digie\\OneDrive\\Desktop\\audiofic archive"
    files = []
    my_dict = {"test","test"}
    for (dirpath, dirnames, filenames) in walk(audioficFiles):
        for(filename) in filenames:
            originalFilename = os.path.basename(filename);
            
            extension = originalFilename.split(".")[1]
            if extension == "mp3":
                 audioFile = eyed3.load(dirpath+"/"+originalFilename)
                 curArtist = audioFile.tag.artist
                 curTitle = audioFile.tag.title
                 curAlbum = audioFile.tag.album
                 curAlbumArtist = audioFile.tag.album_artist
                 curComposer = audioFile.tag.composer
                 curGenre = audioFile.tag.genre
                 print(curAlbumArtist)
                 
                 audioFile.tag.artist="xxx"
                 audioFile.tag.composer=curArtist
                 
                 if curAlbum is not None and curAlbum != curTitle:
                    audioFile.tag.album="9-1-1: "+curAlbum
                 else: 
                    audioFile.tag.album="9-1-1"
                 audioFile.tag.save()
            
            
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