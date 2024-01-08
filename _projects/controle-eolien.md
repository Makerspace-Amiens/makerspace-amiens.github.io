---
hero_image: 2022-12-21-16-05-38.png
hero_darken: true
layout: project
image: 2022-12-21-16-05-38.png
product_toc: true

title: Contrôle de l’énergie récupérée par le système éolien
subtitle: Alimenter la charge électrique par l’énergie récupérée du système éolien
description: L’objectif de ce projet est d’alimenter la charge électrique par l’énergie récupérée du système éolien.

tags: 
multi-group: false
empty_group: true
state_new: true
area: Développement durable,Electronique,Électronique de puissance
soft: Matlab/Simulink,Control desk

tutor:
- label: Sajjad AHMADI - LINAK
  mail: 'sajjad.ahmadi@unilasalle.fr'
  year: 2023

student:
  - label: 
    mail: '@unilasalle.fr'
  - label: 
    mail: '@unilasalle.fr'
  - label: 
    mail: '@unilasalle.fr'

categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2023
    check: false
  - label: Projets I3 2022
    check: false
  - label: Archivés
    check: true

---

## Contexte et description du projet :

L’énergie éolienne est une énergie renouvelable qui ne nécessite aucun carburant, ne crée pas de gaz à effet de serre, ne produit pas de déchets toxiques ou radioactifs. En luttant contre le changement climatique, l’énergie éolienne participe à long terme au maintien de la biodiversité des milieux naturels.
L’objectif de ce projet est d’alimenter la charge électrique par l’énergie récupérée du système éolien. Puisque l’énergie éolienne possède une nature intermittente, l’énergie éolienne seule ne pourra pas assurer la tension constante aux bornes de la charge tout le temps. 

Pour palier à ce problème, il est nécessaire d’alimenter également la charge par le réseau. De ce fait, la charge est alimentée par deux sources. Dans ce projet, la charge électrique est connectée directement au bus continu.
Un redresseur MLI s’insère entre le réseau et le bus continu pour régler le flux de l’énergie entre le bus continu et le réseau. Le schéma synoptique du système à réaliser est donné ci-dessous.

![](2022-12-21-16-05-12.png)

## Contraintes spécifiques :

- Dimensionner les éléments du système tels que le condensateur du bus continu, l’inductance raccordant le réseau au redresseur MLI, les interrupteurs du redresseur MLI.
- Concevoir les systèmes du contrôle nécessaires pour régler le flux de l’énergie (régler la tension appliquée aux bornes de la charge) et pour absorber le courant sinusoïdal.
- Mettre en place les systèmes de contrôle conçus sur la carte dSPACE.

## Description de l’existant :

La maquette du système éolien existe dans le laboratoire électrotechnique.

## Matériels nécessaires :

La carte dSPACE, la maquette du système éolien, le redresseur à diode, la charge résistive, la bobine, le condensateur, des sondes de courant et de tension.

## Liens et documentation :

{% pdf "sujet_sajjad.pdf" %}