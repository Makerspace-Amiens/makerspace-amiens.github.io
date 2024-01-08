---
layout: page
title: Outil de dimensionnement d'un moteur d'entrainement
subtitle: Calculateur en ligne pour dimensionner ses moteurs
description: Script automatique permettant le calcul des données moteurs pour un robot
tags: robot,moteur,calculateur,dimensionnement
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hero_image: 2021-09-06-14-40-06.png
hero_darken: true
hero_height: is-small
---
## 1. Présentation et Méthode

La méthode et l'outil se basent sur le travail de [cbenson](https://www.robotshop.com/community/user/cbenson) déposé sur le site de [Robotshop](https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement) en 2013. 

L'outil permet de dimensionner rapidement des moteurs d'entrainement (pour un robot par exemple) en vue d'en faire une sélection sur catalogue.

Quelques points d'attention :
* Les résultats sont donnés **par** sortie
* Attention aux unités
* Le calculateur ne tient pas compte d'éventuels réducteurs positionnés en sortie du moteur. Plutôt que d'essayer de trouver un nouveau moteur, il est parfois intéressant d'envisager l'ajout d'un réducteur en sortie afin de s'adapter aux requis.
* Veillez à garder la valeur "inclinaison maximum" à 20° minimum même sur un sol plat.

## 2. Calculateur

{% include calculator-motor.html %}
