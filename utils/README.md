## Utilitaires

### Vérifications de l'implémentation des diagrammes

```bash
python verification.py [<path> <folder_1> <folder_2> ...]
```

Note : L'argument contenant le chemin d'accès et les dossiers des diagrammes n'est pas obligatoire; 

- par défaut le chemin d'accès est relatif au dossier *utils* et vaut `../client/src/static/diagrams`, soit là où les diagrammes se situent dans l'application Svelte. 
- De même, si aucun dossier n'est spécifié, tous les sous dossiers du chemin d'accès précisé seront alors analysés.  

 Des logs de warnings et d'erreurs seront émis si l'implémentation d'un diagramme comprend des nœuds non référencés ou si une référence ne pointe pas vers un id. 