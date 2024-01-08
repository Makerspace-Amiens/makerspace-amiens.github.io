---
project_number: 28
hero_image: 4950408_67.jpg
hero_darken: true
layout: project
image: 4950408_67.jpg
product_toc: true

title: Prenons de la distance
subtitle: Calcul de distance végétation – ligne électrique
description: Concevoir un appareil qui mesure la distance entre la végétation et la ligne.

tags: 

tutor:
- label: Thierry Lys
  mail: 'thierry.lys@ext.unilasalle.fr'
  year: 2022

multi-group: false

student:
  - label: ATIK Salsabil
    mail: '@unilasalle.fr'
  - label: MARGUERY Arthur
    mail: '@unilasalle.fr'
  - label: MUGISHA Kamali Derrick
    mail: '@unilasalle.fr'
  - label: POIREL Leandre
    mail: '@unilasalle.fr'

empty_group: false

state_new: false

categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2023
    check: false
  - label: Projets I3 2022
    check: true
  - label: Archivés
    check: false

area: Application mobile,Electronique,Mécanique,Objets connectés,Programmation

soft: VSCode,Android studio,KICad,Proteus,Solidworks,FreeCAD

---
## Contexte et description du projet  

![](enedis-logo.png)

Le réseau électrique relie les centrales de production (nucléaire, thermique, éolienne, hydraulique, ...) aux consommateurs par le biais de lignes électriques. 50% des lignes sont dites aériennes, c’est-à-dire qu’elles sont accrochées à des poteaux et non protégées par un isolant. La végétation qui est autour pousse et certaines branches peuvent toucher les lignes électriques et provoquer des coupures d’électricité qui irritent les clients. 

Enedis fait intervenir des entreprises d’élagage pour couper cette végétation. Des règles s’appliquent pour garantir la sécurité des salariés : en fonction de la distance entre la végétation et la ligne électrique, on peut couper le courant dans ces lignes ou non.Le but du projet est de concevoir le hardware et le software pour réaliser un appareil qui mesure la distance entre la végétation et la ligne.

#### Les isolations à conserver autour des lignes aériennes   

![](2021-12-05.png)

#### Le Hardware  

C’est la technologie LIDAR qui va mesurer les distances autour de lui à 360°(distance et angle).Le LIDAR utilisé est le YDLIDAR G4. Il est relié à un ESP32 qui gère le protocole de communication et le WIFI. Le tout est alimenté par une batterie.

#### Le software  

Il s’agit d’un code qui tourne sur une tablette Androïdet qui affiche les côtes de végétation par rapport à la ligne.

## Objectifs du projet   

- Prendre en main le hardware : LIDAR, WIFI et le rendre fonctionnel,
- Concevoir le logiciel (simple) pour afficher la mesure végétation –ligne électrique sur la tablette du prestataire,
- Concevoir un outil pratique et bien pensé pour les salariés des entreprises d’élagage

## Votre tuteur : Thierry Lys  

- Diploméde l’ESIEE Paris
- Ingénieur télécoms dans la téléphonie mobile (7 ans)
- Créateur d’entreprise (3 ans)
- Ingénieur télécoms chez Enedis en charge du compteur Linky(7 ans)
- Ingénieur en charge de l’innovation et des nouvelles technologies en Picardie (4 ans)

**Vous êtes prêt à travailler sur ce proof of Concept ? Vous allez apprendre plein de choses !**

## Liens   

- [Présentation complète du projet](presentation-enedis-prenons-de-la-distance.pdf)

# Rendus projet I3 2022

## Poster

![](Groupe_n28.png)

## Vidéo

## Rapport