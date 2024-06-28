import os


def read_file(resource_path: str):
    with open(resource_path) as f:
        print(f.read())


def scanDir(dir: str):

    dirlist = os.listdir(dir)
    for resource in dirlist:

        resource_path = f"{dir}/{resource}"

        if os.path.isfile(resource_path) and resource.endswith(".tsx"):
            read_file(resource_path)

        elif os.path.isdir(resource_path):
            scanDir(dir=dir + f"/{resource}")


scanDir(".")
