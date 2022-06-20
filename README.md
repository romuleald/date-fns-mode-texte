# `@romuleald/date-fns-gherkin-texte`

Ce package permet de détecter dans une chaine tout chiffre et le mot qui le succède si c'est `an(s)`, `mois` ou `jour(s)`.  
Ainsi dans "il y a 1 an, 4 mois et 10 jours" on va extraire 1 an, 4 mois, 10 jours.  
Ensuite une transformation sera faite pour passer en objet `Duration` utilisable dans la méthode [add](https://date-fns.org/v2.28.0/docs/add) de **date-fns** `{years: 1, months: 3, days: 10}`.

## Installation

```shell-script

npm i -D @romuleald/date-fns-gherkin-texte

```

## Utilisation

Le gherkin écrit ainsi :
```gheking
    Given j'ai fait mon virement il y a 1 an 3 mois et 10 jours
```

Le test :
```ts
import { add, startOfToday } from 'date-fns';

// votre lecteur de gherkin préféré, ici la syntaxe tiré de jest-cucumber
given(/j'ai fait mon virement (.*)$/, (dateEnTexte: string) => {
    const dateDuration = transformeDate(dateEnTexte);
    // dateDuration = {years: 1, months: 3, days: 10};
    add(startOfToday(), dateDuration)
})
```

## Changelog

### 1.0.0
* 🚀 Init du package avec la fonctionnalité de base
