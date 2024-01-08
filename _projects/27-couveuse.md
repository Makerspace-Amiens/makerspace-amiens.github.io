---
project_number: 27
hero_image: 2021-12-02-11-35-24.png
hero_darken: true
layout: project
image: 2021-12-02-11-35-24.png
product_toc: true

title: Couveuse régulée
subtitle: Régulation thermique d'une enceinte type couveuse
description: 

tags: 
empty_group: true
state_new: false
multi-group: false
area: Electronique,Programmation
soft: LabVIEW


tutor:
- label: Maximilien Leclercq
  mail: 'maximilien.leclercq@unilasalle.fr'
  year: 2023
- label: Maximilien Leclercq
  mail: 'maximilien.leclercq@unilasalle.fr'
  year: 2022


student:
  - label: 
    mail: '@unilasalle.fr'
    year: 2023
  - label: 
    mail: '@unilasalle.fr'
    year: 2023
  - label: 
    mail: '@unilasalle.fr'
    year: 2023
  - label: 
    mail: '@unilasalle.fr'
    year: 2023
  - label: BOURGIN Raphaël
    mail: '@unilasalle.fr'
    year: 2022
  - label: LAURIDSEN Kent
    mail: '@unilasalle.fr'
    year: 2022
  - label: LEFEBVRE Pierre
    mail: '@unilasalle.fr'
    year: 2022
  - label: TRUJILLO Théo
    mail: '@unilasalle.fr'
    year: 2022

categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2023
    check: false
  - label: Projets I3 2022
    check: true
  - label: Archivés
    check: false
---

{% 
include message.html 
title="À noter" 
message="Ce projet est dans la continuité de celui proposé en 2022. Vous aurez accès à l'ensemble des ressources du projet précédent, mais le travail devra se démarquer de ce qui a été proposé l'année précédente."
status="is-info" 
icon="fas fa-info" 
%}

## 1 - Projet 2023

### 1.1 - Contexte et description du projet

Dans la continuité du projet de l'année dernière. L'objectif est de tester la performance de l'enceinte climatique et de déterminer un modèle thermique sur la base des puissances électriques consommées pour maintenir à température l'environnement de l'enceinte ainsi que le "corps" qui s'y trouve.

### 1.2 - Contraintes spécifiques

Il faut concevoir un (ou plusieurs) élément(s) dont la température puisse être contrôlée et mesurée : dans un premier temps un cube en impression 3D équipé d'une sonde et de un ou plusieurs modules peltiers sera suffisant. Une boucle de régulation permettra de piloter les actionneurs. Les boucles de régulations seront faites sous LabVIEW.
Cet élément devra ensuite être placé dans l'enceinte climatique (couveuse). La réalisation de l'année dernière pourra être améliorée par rapport aux objectifs de cette année.
Des tests sont à réaliser pour déterminer les échanges thermiques (extérieur-couveuse et couveuse-corps) en fonction des relevés des puissances électriques.
### 1.3 - Description de l'existant

L'enceinte climatique de l'année dernière avec son programme LabVIEW

## 2 - Projet 2022
### 2.1 - Contexte et description du projet

Le laboratoire PERITOX - UMI_01 est une unité mixte entre l’UPJV et l’INERIS dont les travaux de recherches concernent la Périnatalité et les Risques Toxiques. Elle fait partie du CURS (Centre Universitaire de Recherche sur la Santé), basé au CHU Amiens-Picardie Hôpital Sud. Le projet aborde la problématique des échanges thermiques entre un prématuré et son environnement direct, à savoir une couveuse dans le cas présent. Afin de pouvoir quantifier exactement les transferts de chaleur, il est nécessaire de maitriser correctement l’ambiance thermique de la couveuse Pour se faire, on se propose de mettre en œuvre un système permettant de réguler la température (avec mesure voire régulation de l’hygrométrie) d’une enceinte à l’aide de pompes à chaleur électroniques.

### 2.2 - Contraintes spécifiques

Utilisation des solutions National Instrument pour la programmation et la mise en oeuvre de la boucle de régulation.

### 2.3 - Description de l'existant

Une enceinte thermique (à revoir), équipée de 2 PAC électroniques et des capteurs de température/hygrométrie. Des cartes d'acquisition NI pour la mesure et la commande. Alimentations, étages de puissance (Peltier) et conditionneur (capteurs).

### 2.4 - Rendus projet I3 2022

#### a - Poster

![](Groupe_n27.png)

#### b - Vidéo

#### c - Rapport