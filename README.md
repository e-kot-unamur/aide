<div style="text-align:center">
    <h1>
        Diagramme interactif
    </h1>
    <img src="https://img.shields.io/website?down_color=red&down_message=down&up_color=brightgreen&style=flat-square&up_message=online&url=https%3A%2F%2Faide.e-kot.be" />
    <img src="https://img.shields.io/github/languages/code-size/e-kot-unamur/interactive-diagram?style=flat-square" />
    <img src="https://img.shields.io/github/v/tag/e-kot-unamur/interactive-diagram?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/e-kot-unamur/interactive-diagram?style=flat-square" />
    <img src="https://img.shields.io/github/contributors/e-kot-unamur/interactive-diagram?style=flat-square" />
</div>



### Démo

Vous pouvez accéder à la dernière version du projet depuis [aide.e-kot.be](https://aide.e-kot.be/).

### But 

Rendre le diagramme classique interactif et plus attrayant afin de soulager nos messages Facebook.

### Ajouter de nouveaux diagrammes 
```bash
$ cd <project-files>/client/src/static/diagrams/
$ mkdir <nouveau dossier>
$ cd <nouveau dossier> 
$ touch <nom du diagramme>.json
```
Modifiez le *json* afin de créer le diagramme, <br />importez le au sein du fichier `diagram.js`, <br />et voilà !

Pour plus de précisions voir le fichier `TODO.md` 

-------

### Commencer à coder...

##### Développement :

Pour le développement, aucun Dockerfile n'est disponible (je suis pas payé je te rappelle), il faut donc avoir *npm* ou *yarn* afin de démarrer le serveur de développement :

``````bash
$ cd <project-files>/client
$ npm install
$ npm run dev
``````

##### Production :

``````bash
$ docker build --tag aide-ekot:2.0 .
$ docker run --publish <server-port>:80 --detach --name aide-ekot aide-ekot:2.0
``````

> Check ton `localhost` mon gars ! 
>
> -- 2019, <cite>Random livreur de delsart qui m'appela un beau jour de printemps</cite> 
