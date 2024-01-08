---
layout: page
title: PlatformIO
subtitle: Présentation, installation et premier projet
description: Ressources pour la découverte de platformIO
tags: arduino,vscode,platformio
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hide_hero: false
hero_height: is-small
show_edit: true
---

## 1 - Introduction

[PlatformIO](https://platformio.org) est une alternative à l’IDE Arduino permettant de développer des objets connectés ou du code pour micro-contrôleur d’une manière plus générale. PlatformIO n’est pas un éditeur de code : c’est un ensemble d’outils (toolchains) sous la forme de plugin pour Visual Studio Code (ou VSCode) de Microsoft et Atom de GitHub (également Microsoft !). 

Atom étant en perte de vitesse en terme de développement, nous vous conseillons de vous orienter vers VSCode. VSCode est un éditeur de code léger et gratuit pour Windows, macOS, Linux. Il permet de réaliser des projets de développement sur quasi n'importe quel support.

[Télécharger VSCode](https://code.visualstudio.com)

VSCode à l'avantage de s'intégrer parfaitement dans une multitude de projet de développement et d'être entièrement personnalisable via des extensions.

## 2 - VSCode

Visual Studio Code est un éditeur de code extensible développé par Microsoft pour Windows, Linux et macOS. Les fonctionnalités incluent la prise en charge du débogage, la mise en évidence de la syntaxe, la complétion intelligente du code, les snippets, la refactorisation du code et Git intégré.

### 2.1 - Installation classique

L'installation de VSCode est très simple il vous suffit de [télécharger l'installateur VSCode](https://code.visualstudio.com) puis de lancer l'installation. 

Il est possible de se créer un compte VSCode afin de pourvoir retrouver sur différentes machines son envirronnement favoris.

Par la suite, à vous d'installer les extensions que vous désirez en fonction des projets que vous réalisez. Dans notre cas, nosu allons surtout nous focaliser sur l'installation de PlatformIO poru l'utilisation avec des µC.

### 2.2 - Installation portable

Il est également possible d'installer VSCode en version portable. Ceci vous permet de stocker et de garder avec vous une version spécifique et personnelle de VSCode sans avoir à l'installer sur un ordinateur. Ceci peut être utile dans le cas d'utilisation sur des machines de l'école (droit admins) ou pour des projets spécifiques.

Pour ce faire, [la documentation en ligne de VSCode explique la marche à suivre](https://code.visualstudio.com/docs/editor/portable).

## 3 - PlatformIO

### 3.1  Installation

Que ce soit sur la version classique ou portable, la procédure est la même :

{% include step-tuto.html 
title="Etape 1 : installer PlatformIO"
content="Dans VSCode, allez dans *Extension* dans la barre de menu à gauche" 
image="2021-11-05-14-40-29.png" %}

{% include step-tuto.html 
content="Recherchez l'extension *PlatformIO* et cliquez sur *Installer*" 
image="2021-11-05-14-46-10.png" %}

{% include step-tuto.html 
content="Une fois installé, l'icone *PlatformIO* apparait sur la barre de menu gauche." 
image="2021-11-05-14-47-47.png" %}

A ce stade, PlatformIO est installé. On va maintenant terminer l'installation en ajoutant les extensions necessaire à l'utilisation d'une carte Arduino.

{% include step-tuto.html 
title="Etape 2 : ajouter la platform AtmalAVR"
content="Cliquez sur le menu *PlatformIO*, un nouveau menu apparait. cliquez sur *Open*." 
image="2021-11-05-14-48-56.png" %}

{% include step-tuto.html 
content="La fenêtre de démarrage de PIO s'affiche. On va commencer par rajouter un *Platform*. Cliquez sur *Platforms* dans la barre de menu de gauche." 
image="2021-11-05-14-51-17.png" %}

{% include step-tuto.html 
content="Cliquez sur *Embedded* et recherchez *AtmelAVR* et cliquez sur le lien *AtmelAVR*." 
image="2021-11-05-14-54-27.png" %}

{% include step-tuto.html 
content="Cliquez sur *Install* et attendez la fin de l'installation." 
image="2021-11-05-14-54-43.png" %}

Vous pouvez maintenant créer votre premier projet.

### 3.2  Premier Projet

{% include step-tuto.html 
title="Etape 2 : ajouter la platform AtmalAVR"
content="Allez dans le menu **Home** de PIO, et cliquez sur **New Project**. Dans la fenêtre qui s'affiche (Project Wizard), indiquez 
- un nom de projet
- la carte que vous souhaitez programmer (Board)
- Le Framework à utiliser (Arduino)
Vous pouvez spécifier un chemin pour votre projet ou garder celui par défaut. Cliquez ensuite sur **Finish**. " 
image="2021-11-05-14-59-26.png" %}

Votre projet est créé. Vous pouvez voir sur le bandeau de gauche l'arborescence du proejt et sur le panneau de droite les onglets avec le contenu des fichiers ouverts (pour le moment seul le **platformio.ini** est ouvert).

![](2021-11-05-15-04-06.png)

Dans l'arborescence, dans le dossier **src**, vous trouverez le fichier `main.cpp` qui continent déja la structure minimale pour la compilation du code avec le framework Arduino.

![](2021-11-05-15-05-45.png)

Si votre carte est connectée en USB à votre ordinateur, vous pouvez cliquez en bas à droite sur `PlatformIO: Build` puis sur `PlatformIO: Upload`.  
![](2021-11-05-15-09-58.png)  
![](2021-11-05-15-10-11.png)  

La compilation ne devrait pas afficher d'erreur :

![](2021-11-05-15-11-40.png)

Et le transfert dans la carte devrait se faire sans soucis

![](2021-11-05-15-12-25.png)

Si vous disposez d'une carte **Arduino UNO** standard ou d'une carte **Maker UNO**, une led d'état est disponible sur la pin 13 de la carte. Vous pouvez donc tester le code ci-dessous afin de faire clignoter la led sur la pin 13 :

``` c++
#include <Arduino.h>

const int pinLed = 13;

void setup() 
{
  pinMode(pinLed,OUTPUT);
}

void loop() 
{
  digitalWrite(pinLed,HIGH);
  delay(500);
  digitalWrite(pinLed,LOW);
  delay(500);
}

```

### 3.3  Installation d'un librairie

Si vous avez besoins d'installer une librairie pour votre projet, vous pouvez le faire directement depuis l'interface de PlatformIO. Pour ce faire :

{% include step-tuto.html 
content="Dans le menu **Libraries** de PIO, tapez la librairie que vous recherchez et cliquez dessus. Une fois ce ci fait, cliquez sur **Add to Project**.
*Note que vous pouvez choisir qu'elle version de librairie vous souhaitez installer.*" 
image="2021-11-05-15-19-50.png" %}

{% include step-tuto.html 
content="Choisissez le projet auquel vous souhaitez ajouter la librairie, puis cliquez sur **add**." 
image="2021-11-05-15-21-44.png" %}

{% include step-tuto.html 
content="De retour dans votre projet, vous pouvez retrouver votre librairie dans `.pio\libdeps\uno\nomDeLib`." 
image="2021-11-05-15-23-19.png" %}

### 3.4  Usage du port série

La majorité des cartes "type Arduino" sont capables de communiquer en série via l'USB (c'est le cas des cartes arduino UNO). Il est donc possible de recevoir et d'envoyer des instructions via ce port et de les afficher sur un terminal de l'ordinateur hôte.

Pour se faire nous allons établir une communication série entre le µC et le PC. Dans notre exemple, nous allons envoyer une trame (un sinus) et nous allons l'afficher sur le moniteur série.

La liaison série permet une communication point-à-point grâce à deux voies:
- **TX : La transmission** - C'est la voie qui transmet le message à son interlocuteur
- **RX : La réception** - C'est la voie qui va recevoir un message de l'interlocuteur

Etant donné que les voies sont spécifiques et associées à des pins du µC (sur une UNO : RX = pin0 et TX = pin1) il ne faut pas oublier de croiser le fils de communication comme montré dans cet exemple :

![](2021-11-05-15-55-36.png)

Afin de communiquer, les deux périphériques doivent être synchronisés sur la même vitesse de transmission appelée [**bauds**](https://fr.wikipedia.org/wiki/Baud_(mesure)).

Si vous souhaitez en savoir plus sur la liaison série : 
[La liaison série - Zeste de savoir](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/744_la-communication-avec-arduino/3426_generalites-sur-la-voie-serie/)

Pour tester le port série, on pourra utiliser le code suivant :

``` c++
#include <Arduino.h>
float i=0;

void setup() 
{
  Serial.begin(115200);
}

void loop() 
{
  i+=0.1;
  Serial.print(">sin:");
  Serial.println(sin(i));
  delay(10);
}

```

* `Serial.begin(115200) `   : Initialise une communication série à 115200 bauds
* `Serial.print(">sin:")`   : Envoi sur le porte série la chaine de caractères `">sin:"`
* `Serial.println(sin(i))`  : Envoi sur le porte série le résultat de l'opération `sin(i)` avec un retour à la ligne à la fin

En savoir plus sur l'utilisation du port série dans le Framework arduino : [référence Arduino - Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/)

Pour que le moniteur série puisse lire le porte série, il faut donner à platformIO l'information de vitesse de la communication en ajoutant la ligne suivante `monitor_speed = 115200` dans le fichier de configuration  **platformio.ini**

![](2021-11-05-16-02-33.png)

Vous pouvez ensuite **Serial Monitor** dans la barre de menu en bas à gauche :

![](2021-11-05-16-03-58.png)

Le moniteur série s'ouvre et vous affiche l'ensemble des données transmises entre votre carte et votre ordinateur. 

![](2021-11-08-10-53-14.png)

**Problème :** les données sont transmises toutes les 10ms. Elles sont donc difficilement visibles et descriptibles dans le terminal série. 

Vous pouvez utiliser d'autres solutions pour visualiser plus efficacement les données transmises via le port série. Pour une description des ressources afin d'interagir avec le port série, suivez ce lien :

<div class="buttons">
<a href="../port-serie"  class="button is-link is-light is-rounded">Ressources pour l'usage du port série</a>
</div>

