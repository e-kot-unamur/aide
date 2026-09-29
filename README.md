<h1 align="center">Diagramme interactif</h1>
<p align="center">
    <a>
        <img src="https://img.shields.io/website?down_color=red&down_message=down&up_color=brightgreen&style=flat-square&up_message=online&url=https%3A%2F%2Faide.e-kot.be" />
    </a>
    <a>
        <img src="https://img.shields.io/github/languages/code-size/e-kot-unamur/interactive-diagram?style=flat-square" />
    </a>
    <a>
        <img src="https://img.shields.io/github/v/tag/e-kot-unamur/interactive-diagram?style=flat-square" />
    </a>
    <a>
        <img src="https://img.shields.io/github/last-commit/e-kot-unamur/interactive-diagram?style=flat-square" />
    </a>
    <a>
        <img src="https://img.shields.io/github/contributors/e-kot-unamur/interactive-diagram?style=flat-square" />
    </a>
</p>



### Démo

Vous pouvez accéder à la dernière version du projet depuis [aide.e-kot.be](https://aide.e-kot.be/).

### But 

Rendre le diagramme classique interactif et plus attrayant afin de soulager nos messages Facebook.

### Ajouter de nouveaux diagrammes 
```bash
$ cd <project-files>/client/src/static/diagrams/
$ mkdir <nouveau dossier>
$ cd <nouveau dossier> 
$ touch en.json fr.json
```
Modifiez les *json* afin de créer le diagramme en français et en anglais, <br />importez les au sein du fichier `diagram.js`, <br />et voilà !

> Attention à garder les mêmes *ref* et *id* de noeuds entre le fichier français et sa traduction anglaise ! 

Pour plus de précisions sur la structure du fichier *.json*, voir sa [documentation relative](client/src/static/diagrams/README.md).

> L'ordre des diagrammes dans `diagram.js` définit leur numéro (0, 1, 2...). Ce numéro est le premier chiffre du **code d'erreur** donné aux étudiants (ex. `0-1-2-3-13`) et de l'**URL** de chaque étape (ex. `aide.e-kot.be/#0-1-2-3-13`, ce qui permet le bouton « retour » du navigateur et le partage d'un lien vers une étape précise). Changer l'ordre ou les *id* de noeuds rend donc invalides les anciens codes et liens : à faire en connaissance de cause. La page `/admin?code=...` permet de retrouver le parcours d'un code.

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

L'instance en ligne ([aide.e-kot.be](https://aide.e-kot.be/)) est hébergée via **CapRover** (PaaS auto-hébergé), configuré avec le fichier [`captain-definition`](captain-definition) à la racine, qui pointe vers le même `Dockerfile` que ci-dessous.

**Déployer une mise à jour (méthode CLI, recommandée) :**

``````bash
$ npx caprover deploy --caproverUrl https://captain.e-kot.be --caproverApp aide --appToken <TOKEN> --branch main
``````

Le `<TOKEN>` se génère dans le dashboard CapRover : app `aide` → onglet *Déploiement* → *Méthode 1 : CLI Officielle* → *Activer le Token d'App*. Ne jamais commit ce token dans le repo (ni ailleurs en clair).

> ⚠️ Un déploiement automatique via webhook Git existe aussi (onglet *Déploiement* → *Méthode 3* du dashboard CapRover), mais sa config (URL du dépôt, identifiants) doit être tenue à jour manuellement et peut se périmer silencieusement. Si un push sur `main` ne se répercute plus tout seul sur le site, vérifiez cette config avant de chercher ailleurs — sinon, la méthode CLI ci-dessus fonctionne dans tous les cas.

**Déploiement Docker "manuel" (sans CapRover, sur n'importe quel serveur avec Docker) :**

``````bash
$ docker build --tag aide-ekot:2.0 .
$ docker run --publish <server-port>:80 --detach --name aide-ekot aide-ekot:2.0
``````

> Check ton `localhost` mon gars ! 
>
> -- 2019, <cite>Random livreur de delsart qui m'appela un beau jour de printemps</cite> 
