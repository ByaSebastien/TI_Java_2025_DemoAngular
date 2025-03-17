# Demo Angular

## Génerer un projet angular

```shell
ng new "Nom du projet" 
```

### Options

- skip test
```shell
ng new "Nom du projet" --skip-tests
```
- modules
```shell
ng new "Nom du projet" --standalone=false
```
On peut très bien enchaîner les options

--- 

## Generer via cli

- Component
```shell
ng g c ["path/"]"Nom du composant"
```
- Pipe
```shell
ng g p ["path/"]"Nom du pipe"
```

## Lancer le serveur

```shell
ng s
```

### Options

- ouvrir dans le navigateur par défault
```shell
ng s --o
```
