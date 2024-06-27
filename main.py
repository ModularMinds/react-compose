import os

def scanDir(dir: str):

    dirlist = os.listdir(dir)
    for resource in dirlist:

        if os.path.isfile(resource) and resource.endswith(".tsx") : 
            print(resource)

        elif os.path.isdir(resource):
            scanDir(dir=dir+f"/{resource}")

        

scanDir(".")
