## Documentation des diagrammes

### Créer le diagramme 

```bash
mkdir <folder> && cd <folder>
touch en.json fr.json diagram.plantuml
```

Le fichier *plantuml* est là pour documenter ton diagramme avant de l'implémenter, libre à toi de ne pas le faire.

Les fichiers *json* doivent garder la même structure entre leurs traductions. Autrement dit, si le nœud 9 de *fr.json* parle d'un problème A, le nœud 9 de sa traduction anglaise devra être la traduction de ce problème A. 

>  Si cela n'est pas respecté, l'application risquera de crash lors d'un changement de langue sur le diagramme en question (déso pas déso).   

### Structure d'un diagramme

```json
{
    "0": {
        "text": "Problématique du diagramme",
        "answers": [
            {
                "text": "Trouver de l'aide !",
                "ref": 1
            }
        ]
    },
    "1": {
        "text": "Début du diagramme...",
        "answers": [
            {
                "text": "Réponse à la question...",
                "ref": 2 // référence vers l'id d'un autre noeud
            },
            ...
        ]
    },
    ...
}
```

### Tester son implémentation 

Rendez vous dans le dossier *utils* à la racine du projet, l'utilisation du script `verification.py` y est spécifiée.