# Ajout d'un nouveau diagramme 

---

### Créer le diagramme

``````
$ mkdir <dossier>
$ cd <dossier>
$ touch <nom du diagramme>.json
``````

### Structure du *JSON*

Tout diagramme est composé d'au moins un nœud :  

``````
"NODE_NUMBER" : {
	"text" : "NODE_DESCRIPTION",
    "image": {
    	"caption": "Légende de l'image"
    },
    "answers" : [
        {
        "text" : "Trouver de l'aide",
        "ref" : NODE_NUMBER_REF
        }
 	]
 },	
``````

###### Où 

`NODE_NUMBER` est le numéro du nœud, 

`NODE_DESCRIPTION` est le texte, la question qui sera affiché à l'utilisateur,

et `NODE_NUMBER_REF` est le `NODE_NUMBER` du nœud référencé. 

Si le noeud est une feuille, *answers* sera une liste vide.

###### Attention : Si le noeud n'a pas d'image, ne spécifiez pas l'object *image* ! 

Il vous faudra ajouter vos images dans le dossier du diagramme en renommant votre fichier en `<NODE_NUMBER>`, en faisant attention à ne pas inclure l'extension.

#### Attention !

Le nœud 0 servira d'introduction au problème affiché à l'utilisateur (exemple : ***Je n'ai plus internet...***) et aura pour `NODE_NUMBER_REF`  le premier nœud. 

### Référencer le nouveau diagramme

Ouvrez le fichier `index.js`

Importez le nouveau diagramme créé à coté des autres import

``````react
const <diagram> = require('./<dossier>/<nom du diagramme>.json') //Si tu mets un ; je te tue
``````

Ajoutez le à l'objet *exportList* en lui donnant un nouvelle clef (*évitez, si possible, de mettre bite ou zizi*)

``````javascript
const exportList = {
    ...
    '<dossier>' : <diagram>,
	...
}
``````

**Et voilà !**, relancez le serveur et c'est parti