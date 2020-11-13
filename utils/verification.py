import os
import sys
import json
import logging


def diagram_checker(path: str, folders: list):
    files_to_check = __get_files(path, folders)

    for file in files_to_check:
        __check(file)


def __get_files(path, folders):
    files_to_check = []
    for diagram in diagrams:
        diagram_folder = path + '/' + diagram + '/'
        for lang in ['en', 'fr']:
            file_path = diagram_folder + lang + '.json'
            if os.path.isfile(file_path):
                files_to_check.append(file_path)
            else:
                logging.warning(file_path + " does not exist !")
    return files_to_check


def __get_keys(diagram):
    ids = [str(key) for key in diagram.keys()]
    refs = []
    for _, value in diagram.items():
        refs.extend([str(answer["ref"]) for answer in value["answers"]])
    return [list(set(refs)), ids]


def __check(file):
    with open(file) as data:
        logging.info("Checking " + file)
        diagram = json.load(data)
        [refs, ids] = __get_keys(diagram)
        for ref in refs:
            if ref not in ids:
                logging.error("ref " + str(ref) + " is not an id.")
        for id in ids:
            if id not in refs and id != "0":
                logging.warning("id " + id + " is not referenced.")


if __name__ == "__main__":
    logging.getLogger().setLevel(logging.INFO)

    try:
        path = os.path.abspath(os.getcwd()) + '/' + sys.argv[1]
    except Exception:
        path = "../client/src/static/diagrams"
        logging.info("No path specified ! Default will be used.")

    diagrams = [x for x in sys.argv[2:]]
    if len(diagrams) == 0:
        diagrams = next(os.walk(path))[1]
        logging.info(
            "No diagram folder specified ! All subdirectories will be checked.")

    diagram_checker(path, diagrams)
