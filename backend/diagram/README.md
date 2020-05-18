# Création d'un nouveau diagramme 

---

### Créer un nouveau fichier

``````
$ touch <nom du diagramme>.json
``````

### Structure du *JSON*

Tout diagramme est composé d'au moins un nœud :  

``````
"NODE_NUMBER" : {
	"text" : "NODE_DESCRIPTION",
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

#### Attention !

Le nœud 0 servira d'introduction au problème affiché à l'utilisateur (exemple : ***Je n'ai plus internet...***) et aura pour `NODE_NUMBER_REF`  le premier nœud. 

### Référencer le nouveau diagramme

Ouvrez le fichier `index.js`

Importez le nouveau diagramme créé à coté des autres import

``````react
const diagram<nom du diagramme> = require('./<nom du diagramme>.json') //Si tu mets un ; je te tue
``````

Ajoutez le à l'objet *exportList* en lui donnant un nouvelle clef (*évitez, si possible, de mettre bite ou zizi*)

``````javascript
const exportList = {
    ...
    'Key' : diagram<nom du diagramme>,
	...
}
``````

**Et voilà !**, relancez le serveur et c'est parti