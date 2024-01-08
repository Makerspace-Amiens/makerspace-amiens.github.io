---
project_number: 23
hero_image: 2022-12-13-13-17-17.png
hero_darken: true
layout: project
image: 2022-12-13-13-17-17.png
product_toc: true

title: Traceur Miniature
subtitle: Système de localisation d'objet léger en mouvement
description: 

tags: recyclage,club,association,plastique

multi-group: false
empty_group: false
state_new: true
student_project: true

tutor:
- label: Adrien BRACQ
  mail: 'adrien.bracq@unilasalle.fr'
  year: 2023

student:
  - label: Charles Fournillon
    mail: '@unilasalle.fr'
    year: 2023
  - label: Raphaël Drouvin
    mail: '@unilasalle.fr'
    year: 2023


categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2023
    check: true
  - label: Projets I3 2022
    check: false
  - label: Archivés
    check: false

area: Développement durable,Electronique,Mécanique,Programmation,Objets connectés

soft: FreeCAD,Solidworks,Fusion 360,Cura,Inkscape

---
## 1. Présentation : 

### 1.1 - Problématique : 

Réussir à localiser une cible “légère” en mouvement en captant les signaux transmis par cet objet, au moyen d’un récepteur.

### 1.2 - Idée de conception : 

Système de repérage qui recueille les données de position d’un objet léger dans une zone de plusieurs centaines de mètres et qui le localise précisément.

### 1.3 - Moyens employés : 

La méthode que nous souhaiterions utiliser en premier lieu c’est la radio télémétrie. Pour cela, nous devons concevoir un système de radar afin d’émettre les ondes radios et de recevoir le signal de retour. Il doit contenir un émetteur d’ondes radios, une antenne pour diffuser l’onde émise, et un récepteur pour traiter le signal incident. 

L’objectif est que le système soit facilement transportable. Ainsi, l’idée serait que plus l’on s’approche de la cible plus le signal se renforcerait. Il indiquerait la distance à laquelle l’objet se trouve. Afin de couvrir plus de surface en un lapse de temps très court, nous pourrions utiliser un drone.

L’avantage de cette méthode c’est la possibilité de miniaturiser le système. En effet, a posteriori, notre objectif est d’appliquer ce système à une échelle inférieure pour localiser des objets mobiles très petits (par exemple à des frelons).

![](2022-12-13-12-01-28.png)


## 2. Liens et ressources :

- [Télédétection - ](https://fr.wikipedia.org/wiki/T%C3%A9l%C3%A9d%C3%A9tection)
- [Triangulation - ](https://fr.wikipedia.org/wiki/Triangulation)
- [Radar - ](https://fr.wikipedia.org/wiki/Radar)
- [Radiopistage - ](http://perdrixgrise.com/site/index.php?option=com_content&view=article&id=28&Itemid=29)
- [Ballons-sondes, radars et satellites météorologiques - ](https://www.futura-sciences.com/planete/dossiers/meteorologie-instrumentsmeteorologiques-appareils-utilises-meteorologie-49/page/5/)
- [Nano emetteurs pour Frelons - ](https://www.lesechos.fr/pme-regions/auvergne-rhone-alpes/des-nano-emetteurs-pour-traquer-les-frelons-asiatiques-testes-en-haute-savoie-1268554)
- [Traquer le Frelon asiatique - ](https://www.inrae.fr/actualites/traquer-retour-au-nid-frelons-asiatiques-piste-prometteuse-lutte-contre-ces-dangereux-predateurs-dabeilles)
