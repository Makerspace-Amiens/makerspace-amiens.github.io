---
project_number: 13
hero_image: 2021-12-02-17-17-20.png
hero_darken: true
layout: project
image: 2021-12-02-17-17-20.png
product_toc: true

title: Détection de fuites
subtitle: 
description: 

tags: 

tutor:
- label: Pascal DASSONVALLE
  mail: 'pascal.dassonvalle@unilasalle.fr'
  year: 2022

multi-group: true

student:
  - label: Etudiant 1
    mail: '@unilasalle.fr'
  - label: Etudiant 2
    mail: '@unilasalle.fr'
  - label: Etudiant 3
    mail: '@unilasalle.fr'
  - label: Etudiant 4
    mail: '@unilasalle.fr'

empty_group: true

state_new: true

type: I3

categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2023
    check: false
  - label: Projets I3 2022
    check: false
  - label: Archivés
    check: true

area: Electronique,Mécanique,Programmation

soft: vscode,kicad,proteus

---
## Contexte et description du projet  :

Dans l'habitat individuelle et encore plus en province, le compteur d'eau se trouve en limite de propriété et assez éloigné de l'habitation. En cas de fuite sur la conduite d'amenée de l'eau du compteur à l'habitation, il est très difficile de repérer celle-ci ; personne ne coupant régulièrement sa consommation d'eau pour aller ouvrir la trappe dans laquelle se trouve le compteur. L’objectif est d’étudié un système de surveillance du débit sur la conduite et de déclencher une alarme dans le cas ou le débit est anormal (débit continu au cours du temps sur une longue période  la nuit plus particulièrement). 

Comme le système peut se trouver loin de toute source d'électricité, ce dernier doit impérativement être autonome électriquement. 

Le projet consiste  à modifier un capteur de débit (dans un premier temps un capteur à aube) pour lui ajouter une fonction génératrice. L’énergie acquise est utilisée à l’alimentation de l’électronique de surveillance en soutien d'une petite batterie. Un microcontrôleur a en charge la surveillance du débit via la mesure donnée par le capteur. En présence d’un débit non-conforme, le microcontrôleur enclenche un mode alarme (flash de diode haute radiance dont la luminosité peu être ramener à l'extérieur de la trappe du compteur et possiblement jusqu'à l'habitation via une fibre optique bas coût) . On peut aussi prévoir une alarme différente de la première en cas de mauvais fonctionnement du système (niveau de réserve électrique trop faible).

Un moyen de réarmement et de remise à zéro du système est également à prévoir. 

Les différents éléments (capteur-génératrice, condensateur, électronique) sont à dimensionner pour que le système puisse fonctionner de façon totalement autonome (outre le mode alarme alimenté par la pile) pendant une durée illimitée.

## Contraintes spécifiques :

Autonomie du système et fiabilité.

