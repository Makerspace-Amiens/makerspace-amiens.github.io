---
layout: page
title: Atelier Capteurs
subtitle: Atelier de découverte des capteurs sur arduino
description: Atelier de découverte des capteurs sur arduino
tags: arduino,vscode,platformio,serie,moniteur,port,serial,capteurs
menubar_toc: true
menubar: atelier_capteurs_menu
toc_title: INDEX
show_sidebar: false
hide_hero: false
hero_height: is-small
show_edit: true
---

## 1. Introduction

Le but de cet atelier est de faire découvrir comment interfacer efficacement plusieurs sortes de capteurs sur une carte compatible avec le Framework Arduino.  

{% include message.html 
message="  
Les extensions ***Markdown All in One*** et ***Markdown PDF*** dans VSCode peuvent vous aider dans la rédaction et l'export au format PDF" 
status="is-info" %}

{% include message.html 
message="Si possible, utilisez votre ordinateur pour développer, et/ou stockez vos données sur le réseau pour ne pas perdre vos infos. Assurez vous que votre binôme a toujours accès aux fichiers du TP." 
status="is-info" %}

### Outils :

- [Carte Arduino Uno](https://store.arduino.cc/products/arduino-uno-rev3) ou [carte Maker Uno](https://makeruno.com.my)
- [Kit de capteur ST1065](https://www.gotronic.fr/art-kit-de-modules-et-capteurs-st1065-29993.htm)
- [Arduino IDE](https://www.arduino.cc/en/software) ou [VSCode](https://code.visualstudio.com)(recommandé) avec [PlatformIO](https://platformio.org)
- [Extension TelePlot pour VSCode](https://github.com/nesnes/teleplot-vscode)

### Ressources :

- [Cours Capteurs](../../ressources/capteurs)
- [Introduction à Arduino](../../ressources/arduino)
- Références Framework Arduino : [en](https://www.arduino.cc/reference/en/)-[fr](https://www.arduino.cc/reference/fr/)
- [Démarrage Arduino IDE](../../softs/arduino/arduino-ide-v2)
- [Démarrage PlatformIO-VSCode](../../softs/platformio/platformio)
- [Introduction à l'utilisation du Port-série](../../ressources/port-serie)
- [Documentation du kit ST1065](kit-capteur-ST1065.pdf)
- [Sparkfun - Analog to digital conversion](https://learn.sparkfun.com/tutorials/analog-to-digital-conversion/all)

## 2. Initiation - Rappels

Dans cette première partie, on va s'attarder sur deux types de capteurs :
- TOR - Bouton poussoir
- Analogique -  Joystick

Le but étant de reprendre quelques bases de fonctionnement de ces capteurs et de préciser la méthodologie avant d'être en autonomie sur le reste de la gamme des capteurs proposés. 

Dans la suite, vous pourrez créer des programmes différents pour chaque parties. Vous pouvez aussi enregistrez vos blocs de captures d'information dans des fonctions.

Commencez par créer un programme vierge sous VSCode : Voir ["Débuter avec VSCode et PlatformIO"](../../ressources/platformio)

{% include message.html
icon="fas fa-exclamation-triangle"
title="Attention"
message="Lors des montages, toujours débrancher l'alimentation de la carte via l'USB.  
En raison de la fragilité des ports micro USB des cartes, **toujours débrancher du coté PC !!**" 
status="is-warning" %}

### 2.1 Bouton poussoir

![](2021-11-10-09-31-11.png)

Le bouton poussoir est l'un des capteurs les plus simples à interfacer. Cependant, même avec ce composant simple, il existe des subtilités qu'ils ne faut pas négliger. 

{% include message.html
icon="fas fa-question-circle"
title="Question - Dessiner le schéma électronique d'un bouton poussoir" 
status="is-info" %}

#### a. Introduction

{% include step-tuto.html 
title="Etape 1 :** "
content="Branchez la platine du bouton poussoir comme suit :
- `S` -> `2`
- `-` -> `5V`
" 
image="2021-11-10-13-31-13.png" %}

Pour lire une entrée digitale, nous allons utiliser le code suivant :
``` c++
#include <Arduino.h>
const int pinButton = 2;

void setup() {
  pinMode(pinButton,INPUT);
}

void loop() {
  bool val = digitalRead(pinButton);
}
```

A quoi servent les lignes de code ci-dessous? Explicitez et commentez :  
- `const int pinButton = 2;`
- `pinMode(pinButton,INPUT);`
- `bool val = digitalRead(pinButton);`
Explicitez le fonctionnement du code.
Le code ci-dessus permet-il de visualiser l'état du bouton ?
Aidez vous de la [doc de référence du Framework Arduino](https://www.arduino.cc/reference/fr/)

#### b. Visualisation de l'état du bouton

Pour visualiser l'état du bouton, nous allons utiliser le port série de la carte. Pour la suite, nous utiliserons l'extension TelePlot pour l'affichage des valeurs du port série et des courbes.

- Réalisez les codes et testez le fonctionnement de l'extension TelePlot en vous aidant de la doc suivante: [Introduction à l'utilisation du Port-série](../../ressources/port-serie)
- Proposez une modification du programme du bouton afin de visualiser l'état du bouton.
- Appuyez et relâchez le bouton. Que remarquez vous ? Expliquez le phénomène.

Pour visualiser plus en détail le phénomène observé précédemment, branchez maintenant le signal `S` du bouton sur le port `A0` de la carte. Les ports `Ax` des cartes arduino sont des **entrées analogiques**. Pour lire ces entrées, on utilisera le fonction `analogRead(pinAnalogique)`.
- Expliquez le fonctionnement de `analogRead(pinAnalogique)` en vous aidant de [doc de référence du Framework Arduino](https://www.arduino.cc/reference/fr/)
- Proposez une modification du code afin de lire l'entrée analogique `A0` sur laquelle est branchée le capteur.
- Qu'observez-vous ? Qu'en déduisez-vous ?

#### c. Mise en forme du signal

Le carte de prototypage du bouton possède une troisième connectique centrale.
- A quoi est reliée cette connectique ? 
- Faire le schéma de la carte bouton

Branchez comme suit la carte au bouton :
- `S` -> `A0`
- `centre` -> `5V`
- `-` -> `GND`

- Que se passe-t-il sur votre graphique ? 
- Expliquez le phénomène ? Comment s'appelle ce principe de circuit 

Débranchez maintenant l'alimentation 5V sur la carte du bouton et branchez votre bouton sur la pin 2 (premier circuit) et reprenez votre code associé à ce montage.

- Regardez la documentation de `pinMode()` dans la [référence du Framework Arduino](https://www.arduino.cc/reference/fr/language/functions/digital-io/pinmode/)
- A quoi correspond l'instruction `INPUT_PULLUP` ?
- Modifiez votre code pour utiliser cette instruction
- Visualisez la sortie et commentez

#### d. Rebond

Zoomez sur le front montant du signal et repérez un "rebond". Pour cela, commentez la ligne de `delay();` si vous en avez une afin d'augmenter un maximum la fréquence d'envois. Vous pouvez effectuer le test en analogique ou numérique.
- Visualisez et capturez ce rebond
- A quoi est-il du ?
- Quel soucis cela peut-il poser ?
- Comment l'éviter ? Proposer quelques idées (logiciel, matériel)

**Ressources - ** Ultimate Guide to Switch Debounce : 
[Part 1](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-1) - [Part 2](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-2) - [Part 3](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-3) - [Part 4](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-4) - [Part 5](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-5)- [Part 6](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-6)- [Part 7](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-7)- [Part 8](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-8)- [Part 9](https://www.eejournal.com/article/ultimate-guide-to-switch-debounce-part-9) 

### 2.2 Joystick

![](2021-11-10-09-32-50.png)

{% include message.html 
title="En cours de rédaction"
icon="fas fa-hard-hat"
status="is-warning" %}

Dans cette partie, afin d'initier et d'utiliser les entrées analogiques, nous allons étudier le fonctionnement et l'utilisation d'un capteur analogique : le joystick.

#### a. Visualisation de la valeur 

- Expliquer le fonctionnement d'un joystick et les éléments qui le composent ([voir cours](https://www.les-electroniciens.com/sites/default/files/cours/capteurs.pdf))

Branchez un seul axe du joystick sur votre platine arduino :

- `GND` -> `GND`
- `+5V` -> `5V`
- `VRx` -> `A0`

- Le joystick étant branché sur une entrée **analogique**, proposez un code de lecture d'un axe. 
- Observez la valeur et donnez :
  - La valeur au repos
  - La valeur min
  - La valeur max
- En utilisant la documentation de [analogRead()](https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/), expliquez ces valeurs

#### b. Plages de fonctionnement

Bien souvent, les valeurs min et max ne sont pas utilisables directement. Il faut transformer les plages de fonctionnement afin qu'elles aient un sens pour votre application.

Dans notre cas, on va estimer que votre joystick doit piloter un gouvernail de bateau. La variation d'angle doit donc se faire ainsi :  
`-90°` <-> `0°` <-> `+90°` 

- Etudiez la fonction `map()` dans la [référence arduino](https://www.arduino.cc/reference) et expliquez son fonctionnement. 
- Utilisez la fonction `map()` pour résoudre le soucis de plage de données.
- Visualisez le changement

Le joystick dispose également d'un second axe.

- Branchez le second axe et proposez un code qui :
  - transpose les deux axes entre `-100` et `+100`
  - affiche les deux axes du joystick sur le moniteur série

#### Bonus - Mixage des valeurs pour pilotage d'un robot

A ce stade vous avez un capteur (le joystick) vous permettant de détecter une position sur deux axes. Cette position peut servir, par exemple, au pilotage à distance d'un robot. Généralement, les robots utilisent une motorisation différentielle, à savoir :
- Un moteur pilotant la traction droite
- Un moteur pilotant la traction gauche

En utilisant ces deux moteurs et en combinant les vitesses, il est alors possible de piloter un robot et de le déplacer dans n'importe qu'elle direction. 

Pour réaliser ce pilotage, il est nécessaire de modifier un peu la commande des joysticks. En effet, plutôt que d'attribuer à chaque commande de moteur un axe du joystick, il est parfois plus intéressant de faire l'attribution suivante :
- Axe verticale  = déplacement en avant, ou en arrière
- Axe horizontal = rotation

C'est ce que l'on appel le **mixage** :  
![](2021-11-19-09-09-26.png)

- Proposez une méthode simple pour effectuer ce mixage
- Afficher sur trois graphes séparés
  - Les données brutes des joysticks
  - Les données recentrée des joysticks
  - Les données mixées

## 3. Aller plus loin

Tester plusieurs capteurs et dispositifs. Pour chaque capteur choisi et étudié :
- Description du capteur
- Schéma de la carte + explication de fonctionnement
- Schéma d'implantation + explications de fonctionnement
- Code de test unitaire du capteur **avec commentaires**
- Courbes d'essais + mesures et explications
- Fonctions de capture de l'information en non-bloquant **avec commentaires**