---
layout: page
title: IDE Arduino V2.0
subtitle: Présentation, installation et premier projet
description: Ressources pour la découverte d'Arduino V2.0
tags: arduino,ide,V2
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hide_hero: false
hero_height: is-small
show_edit: true
---


## 1 - Introduction

[Arduino IDE V2.0](https://docs.arduino.cc/software/ide-v2) est la nouvelle version du bien nconnu **IDE Arduino** utilisé depuis plusieurs années pour programmer les cartes Arduino mais également différentes cartes de prototypage basées sur des microcontroleurs ou microprocesseur. La version 2.0 de l'IDE se différencie de l'ancienne version de l'IDE dans son interface mais également dans le coeur de sa programmation. Initialement basée sur JAVA, la version 2 est maintenant completement ré-écrite en C++ et techno web. Les fonctionnalités ont été revues afin d'apporter les bases d'un IDE moderne avec les simplifications d'Arduino. 

[Télécharger Arduino IDE V2](https://www.arduino.cc/en/software#future-version-of-the-arduino-ide)

## 2 - Installation

L'installation de l'IDE Arduino V2 est très simple. Commencez par [télécharger Arduino IDE V2](https://www.arduino.cc/en/software#future-version-of-the-arduino-ide) dans la version qui convient à votre système d'exploitation. 

- Windows - Win 10 and newer, 64 bits
- Linux - 64 bits
- Mac OS X - Version 10.14: "Mojave" or newer, 64 bits

### 2.1 - Windows

{% include step-tuto.html 
greyBackground = true
title="Etape 1"
content="Après avoir téléchargé l'exécutable d'installation, doublez-cliquez sur l'exécutable afin de lancer l'installation. " 
image="2022-09-27-15-58-39.png" %}

{% include step-tuto.html 
greyBackground = false
title="Etape 2"
content="Suivez ensuite les instructions à l'écran. L'installation peut prendre quelques minutes. " 
image="2022-09-27-16-00-23.png" %}

### 2.2 - MacOs

Sous MacOs, vous avez simplement à déplacer le fichier téléchargé dans votre dossier d'applications.
[](2022-09-27-16-01-28.png")

### 2.3 - Linux

{% include step-tuto.html 
greyBackground = true
title="Etape 1"
content="Dans un premier temps, téléchargez l'**Appimage 64 bits (X86-64)** de la page de téléchargement." 
image="2022-09-27-16-01-28.png" %}

{% include step-tuto.html 
greyBackground = false
title="Etape 2"
content="Avant de lancer l'éditeur, nous avons besoins de transformer le fichier en un fichier exécutable. Pour se faire:
- clic-droit sur le fichier
- choisir *Propriétés*
- selectionner l'onglet *Permissions*
- Cocher **Autoriser l'exécution du programme** 

Vous pouvez maintenant double cliquer pour exécuter l'IDE arduino 2." 
image="linux-installation.gif" %}

## 3 -  Premier Projet

Pour tester votre installation et vérifier que vos cartes fonctionne correctement, nous allons charger un programme d'exemple dans votre carte. 

{% include step-tuto.html 
greyBackground = true
title="Etape 1 : configurer le port COM de programmation"
content="Branchez votre carte sur un des ports USB de votre ordinateur. Votre carte devrait apparaitre sous la forme d'un nouveau port série dans le menu **Select Board**. Dans notre cas, c'est le **COM7** qui est apparu et que nous allons selectionné. Cela dépend bien evidemment des machines et de votre configuration. Selon le type de carte, le nom de la carte peut apparaitre au dessus du nom du port, rendant la selection plus facile. Ici, la carte utilisée (une **Maker Uno**) n'est pas directement reconnue. Cela ne posera aucun soucis pour la suite de votre travail." 
image="2022-10-01-12-22-35.png" %}

{% include step-tuto.html 
greyBackground = false
title="Etape 1.2"
content="Il se peut que le logiciel vous demande de confirmer le type de carte que vous avez branché si il ne la reconnait pas automatiquement. Dans ce cas, reselectionnez votre carte dans la liste. Si vous utilisez une carte à base d'un microcontroleur Atmega 328P, comme la **Maker UNO**, vous pouvez selectionner comme type de carte **Arduino Uno**.

![](2022-10-01-12-29-42.png)"
image="2022-10-01-12-28-48.png" %}

{% include step-tuto.html 
greyBackground = false
title="Etape 2 : Charger un programme de test"
content="Allez ensuite dans **File > Example > 01.Basics > Blink**.
Une nouvelle fenêtre s'ouvre avec le programme **Blink**. 

![](2022-10-01-12-34-21.png)![](2022-10-01-12-32-18.png)![](2022-10-01-12-32-33.png)"
image="2022-10-01-12-33-27.png" %}

{% include step-tuto.html 
greyBackground = true
title="Etape 3 : Téléverser le programme de test"
content="Deux icones en haut à gauche vous permettent de vérifier votre programme et de le téléverser.
- ![](2022-10-01-12-44-00.png) Icone vérifier : Vérifie votre programme si il n'y a pas d'érreur de syntaxe. Attention : cela ne veut pas dire que votre programme est fonctionnellement bon. Cela vérifie juste si il peut être compilé sans problème. 
- ![](2022-10-01-12-44-20.png) Icone téléverser (Upload) : vérifie votre programme (comme ci-dessous), compile le programme puis l'envoi à la carte.

Dans un premier temps, vérifiez votre programme avec le bouton de gauche **Verify**. Une zone **Output** devrait apparaitre en dessous de la fenêtre de votre IDE. Si tout est OK, vous devriez obtenir ce résultat : 

![](2022-10-01-12-43-36.png)
"
image="2022-10-01-12-39-17.png" %}

{% include step-tuto.html 
greyBackground = false
title="Etape 4 : Vérifier le fonctionnement"
content="Si votre programme a été correctement chargé, vous devriez obtenir le résultat à gauche, à savoir le clignotement de la led 13 sur votre carte."
image="Blinkuno.gif" %}
