---
project_number: 11
hero_image: 2021-12-02-11-08-48.png
hero_darken: true
layout: project
image: 2021-12-02-11-08-48.png
product_toc: true

title: Pince ampèremétrique
subtitle: Création d'une pince ampèremétrique
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

soft: fusion360,freecad,solidworks,kicad,proteus

---
## Contexte et description du projet  :

Ce projet s'adresse plus particulièrement à des élèves intéressés par la GEDD voire la GSP.  
La mesure du courant est fondamentale  dans toutes les applications de l'électrotechnique pour lesquelles il est très souvent difficiles de brancher un ampèremètre classique en série et surtout si ces mesure doit rester à demeure. Un façon de pallier ce problème est la réalisation d'une pince ampèremétrique dont la description peut être consulté dans les ouvrages cités en référence. le principe de base est assez simple. Le conducteur dont on désiré mesurer le courant se trouve encerclé par un anneau ferromagnétique (noyau toroïdal) dans lequel est confiné le champ créé par le courant circulant dans le conducteur . Un petit entrefer est ménagé dans le noyau pour y insérer un capteur à effet Hall en charge de la mesure du champ. La valeur du courant à mesurer est déduite de la relation de proportionnalité champ-courant.

Le travail à réaliser se composera de différentes phases.

- **Phase 1 :** choix de la gamme de courant à mesurer en fonction en fonction des noyaux toroïdaux et de la sensibilité des capteurs à effet Hall.
- **Phase 2 :** réalisation du principe de mesure et montage dit en boucle ouverte (il est à prévoir un peu d'usinage 3D) pour encapsuler le montage.
- **Phase 3 :** tests, étalonnage et relevé des caractéristiques de la réalisation.
- **Phase 4 :** comme le noyau est magnétique, les problèmes d'hystérésis vont entrainer des non linéarités en fonction de l'intensité du courant à mesurer et de sa fréquence. Pour éviter ceci on réalise un montage dit en boucle fermé ou à flux nul. Pour ce, on enroule sur le noyau un bobinage que l'on alimente par un courant dont le but est d'annuler le flux dans le noyau magnétique et c'est alors ce courant qui est à l'image du courant circulant dans le conducteur. 
- **Phase 5 :** tests, étalonnage et relevé des caractéristiques de la réalisation.
- **Phase 6 :** modification de la réalisation précédente (coupe et nouvel usinage 3D) pour que le système constitue réellement une pince pouvant venir enserrer le conducteur. En fonction du temps passé, cette phase peut être réalisée après le phase 3.
- **Phase 7 :** tests, étalonnage et relevé des caractéristiques de la réalisation.

## Liens et ressources :

- [Les capteurs, P. Dassonvalle, Dunod (problème 20).]()

