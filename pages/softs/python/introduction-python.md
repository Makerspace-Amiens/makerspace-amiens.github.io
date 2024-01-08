---
layout: page
title: Python
subtitle: Introduction et Installation
description: Programmation
tags: python
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hero_height: is-medium
---

*Document réalisé par Sébastien HERLANT pour l'option SIN I1 2023*

# INTRODUCTION AU LANGAGE PYTHON

## Un peu d’histoire

Python est un langage de programmation dont la première version est sortie en 1991. Créé par le néerlandais Guido Van ROSSUM, ce langage a voyagé du Macintosh de son créateur qui travaillait à l'époque au Centrum voor Wiskunde en Informatica au Pays-Bas, jusqu'à se voir associé à une organisation à but non lucratif, la Python Software Foundation, créée en 2001.
Ce langage a été baptisé ainsi en hommage à la troupe de comiques les « Monty Python » dont Guido Van ROSSUM est un grand fan…

## À quoi sert Python ?

Python est un langage puissant, assez facile à apprendre (par rapport à d'autres langages) et très riche en possibilités.
Maîtriser la langage Python c'est pouvoir :

* Écrire des petits scripts, programmes courts et très simples, chargés d'une mission très précise sur votre ordinateur
* Écrire des programmes complets comme des jeux, des suites bureautiques, des logiciels multimédias, des clients de messagerie etc.
* Écrire des projets très complexes comme des progiciels (ensemble de plusieurs logiciels pouvant fonctionner ensemble principalement utilisés dans le monde professionnel).

La distribution standard Python dispose de nombreuses bibliothèques qui ont été considérées comme suffisamment génériques pour intéresser la majorité des utilisateurs. Ces bibliothèques constituent un ensemble de fonctions regroupées et mises à disposition afin de pouvoir être utilisées sans avoir à les réécrire. Elles permettent de faire du calcul numérique, du graphisme, de la programmation internet ou réseau, du formatage de texte, de la génération de documents.

Si les bibliothèques standards ne suffisent pas à couvrir les besoins d'un programme donné, il est possible d'en importer d'autres. Pour en savoir plus sur les bibliothèques Python, aller sur le [https://fr.wikibooks.org/wiki/Programmation_Python/Biblioth%C3%A8ques_pour_Python](https://fr.wikibooks.org/wiki/Programmation_Python/Biblioth%C3%A8ques_pour_Python)

### Langage de programmation interprété

Python est un langage de programmation interprété, c'est-à-dire que les instructions envoyées sont transcrites en langage machine au fur et à mesure de leur lecture. D'autres langages (C ou C++) sont des langages de programmation compilés car, avant de pouvoir les exécuter, un logiciel tiers doit se charger de transformer le code du programme en langage machine : c'est l'étape de la compilation. 

Les avantages d'un langage de programmation interprété sont la simplicité (pas d'étape de compilation à la moindre modification dans le code) et la portabilité (fonctionnement indifférencié du même code sous tous les systèmes d'exploitation : Windows, Linux ou Mac OS). 

En revanche un langage compilé se révélera plus rapide qu'un langage interprété. En effet, la traduction à la volée des instructions ralentit l'exécution du programme. Mais cette différence de rapidité d'exécution tend à se faire de moins en moins sentir au fil des améliorations de performance des ordinateurs.

### Les différentes versions de Python

Lors de la création de la Python Software Foundation en 2001, et durant les années qui ont suivi, le langage Python est passé par une suite de versions que l'on a englobées dans l'appellation Python 2.x.

Depuis le 13 février 2009, la version 3.0.1 est disponible, mise à jour depuis en version 3.2, 3.3, 3.4, 3.5, 3.6, etc...
A ce jour, la dernière version est la 3.10.7.

**Attention :** la version 3 casse la compatibilité ascendante qui prévalait jusque-là. Ce qui signifie que certaines commandes existantes en version 2 ne fonctionnent plus dans la version 3 (pour cause de modification de la syntaxe ou même de suppression pure et simple).

Pour télécharger la dernière version disponible, rendez-vous sur [www.python.org](https://www.python.org)

## Installer Python

### Sous Windows

Il convient d'abord de télécharger l'exécutable python-3.x.x sur le site officiel de Python Software Foundation. 
La version téléchargeable par défaut fonctionne sous un système 64 bits. Si cela ne convient pas à la machine destinataire de l'application, toutes les versions de Python sont disponibles à l'adresse : [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)

Enregistrer puis exécuter le fichier d'installation et se laisser guider par les étapes.

### Sous Linux

Python est préinstallé sur la plupart des distributions Linux (Ubuntu, Xubuntu etc.). Cependant, il est possible que ce ne soit pas la dernière version en date. Pour le vérifier, exécuter dans un terminal la commande `python -V`. Si ce n'est pas la version 3 de Python qui apparaît, il est fortement conseillé de procéder à une mise à jour.

Sous Ubuntu, se rendre dans la Logithèque Ubuntu et saisir « Python » dans la barre de recherche. Sélectionner et installer les deux paquets Python (version 3.x) et IDLE (utilisant python-3.x). L’icône Python apparaît alors dans la barre de lancement des applications. Si la version Python 3.x est déjà préinstallé sur le système d'exploitation, seul le paquet IDLE (utilisant python-3.x) doit être rajouté.

### Sous Mac

Télécharger le fichier Python-3.x.x-macosxy.y.pkg. Double-cliquer. Un assistant d'installation s'ouvre : il suffit alors de se laisser guider.

### Autres environnements

Il existe une multitudes d'autres environnements de développement (IDE) sous Python. Citons par exemple Pyzo, IDE libre et open-source. Il fonctionne avec l'installation préalable de Miniconda. On peut également citer Edupython, distribution clé en main et portable pour programmer sous un environnement Python 3.
PyCharm est le meilleur IDE tout simplement. Sa version gratuite est très complète et répond à tous les besoins d'un développeur python.
Visual Studio Code (ou VSC) est un éditeur de code récent (2015) il est excellent pour vos projet python mais également pour HTML, CSS, Javascript, C/C++, Golang, Ruby,etc.

## Utiliser Python

### Sous Windows

Il existe deux manières de lancer Python en se rendant dans Démarrer – Tous les programmes – Python 3.x : 

- Avec le raccourci Python 3.x (command line), une fenêtre sur fond noir s'ouvre. Il s'agit de la console d'interprétation de commandes de Python :

![](WINWORD_2Ot458CshD.png)

Le triple chevron `>>>` indique que Python attend une instruction.

- Avec le raccourci IDLE (Python 3.x GUI), une console d'interprétation de commandes plus évoluée apparaît. Elle contient une barre d'outils donnant accès à différents paramètres d'affichages, à la gestion du copier/coller, à une fonction de recherche ou encore à la documentation Python.

Elle permet aussi (et surtout) de créer des fichiers Python au format .py afin de conserver le script sur lequel l'utilisateur travaille. Mais nous reviendrons plus tard sur ces différentes fonctionnalités.

![](WINWORD_BkPCwzMpJy.png)

### Sous Linux et Mac

De même, il existe deux manières de lancer l'interpréteur Python sous Linux (Ubuntu) : 

- En saisissant `Python3` directement dans un terminal. Python démarre et le terminal devient alors sa console d'interprétation de commandes (le triple chevron `>>>` indique que Python attend une instruction) : 

![](WINWORD_ILb91cYzD8.png)

- En cliquant sur le raccourci IDLE (utilisant python-3.x) présent dans la barre de lancement des applications : 

![](WINWORD_rwOKM4sool.png)

# SUITE : Demarrer avec python

<a href="../demarrer-avec-python" class="button is-info is-rounded is-medium">
    <span class="icon">
      <i class="fas fa-wave-square"></i>
    </span>
    <span>Demarrer avec python</span>
</a>