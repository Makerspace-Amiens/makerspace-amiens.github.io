---
project_number: 23
hero_image: stop-motion.jpg
hero_darken: true
layout: project
image: stop-motion.jpg
product_toc: true

title: Stop motion
subtitle: Robot de prise de vue automatique
description: Création d'un robot de prise de vue automatique pour le Stop-Motion

tags: 

tutor:
- label: Pierre DOUAY
  mail: 'pierre.douay@unilasalle.fr'
  year: 2022

multi-group: true

student:
  - label: Etudiant 1-1
    mail: '@unilasalle.fr'
  - label: Etudiant 1-2
    mail: '@unilasalle.fr'
  - label: Etudiant 1-3
    mail: '@unilasalle.fr'
  - label: Etudiant 1-4
    mail: '@unilasalle.fr'
  - label: Etudiant 2-1
    mail: '@unilasalle.fr'
  - label: Etudiant 2-2
    mail: '@unilasalle.fr'
  - label: Etudiant 2-3
    mail: '@unilasalle.fr'
  - label: Etudiant 2-4
    mail: '@unilasalle.fr'

empty_group: true

state_new: false

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

area: Application mobile,Electronique,Mécanique,Programmation,Robotique

soft: Dragon frame,Arduino IDE,Fusion 360

---

{% 
include message.html 
title="À noter" 
message="Ce projet est dans la continuité de celui proposé en 2022. Vous aurez accès à l'ensemble des ressources du projet précédent, mais le travail devra se démarquer de ce qui a été proposé l'année précédente."
status="is-info" 
icon="fas fa-info" 
%}
## Contexte et description du projet  :

{% include step-tuto.html content="Les films d’animation en Stop Motion sont des films tournés à partir de prises de vues successives souvent effectuées à partir d’appareils photographiques. Les sujets sont déplacés manuellement entre deux séries de prises de vues. Pour augmenter et compléter le rendu de mouvements les appareils de prises de vues peuvent être mis en mouvement selon plusieurs axes. " video="ox3sI7W4NJg" %}

L’objectif de ce projet est de créer une infrastructure permettant de déplacer un appareil photographique selon plusieurs angles par rapport à la scène filmée et de pouvoir interfacer l’ensemble avec le logiciel [Dragonframe](https://www.dragonframe.com) un outil de la réalisation de films en stop motion. 

Le projet se fait en partenariat avec [La Fabrique D'Image](https://lafabriquedimages8.wixsite.com/site), une association Amiénoise de création audiovisuelle et d'éducation populaire. Cette structure cherche à accompagner l’éveil culturel et artistique, favoriser l’éducation à l’image, démocratiser les pratiques artistiques et culturelles, notamment autour de la vidéo et de la photographie, et encourager la recherche et la créativité en matière de production audiovisuelle.

## Contraintes spécifiques :

Document annexe préliminaire pour les contraintes de dimensions et de mouvements (StopMotionEsiee.pdf).

## Description de l'existant :

Le précédent projet a permis de calculer les contraintes mécaniques associées à la construction de la maquette et de commander une partie des armatures ainsi que les moteurs et drivers associés. Reste à construire la maquette et lui donner vie dans un premier temps à partir d’un smartphone et ensuite à partir de [Dragonframe](https://www.dragonframe.com).

## Les différents sujets :

{% include step-tuto.html 
greyBackground=true
title="SUJET 1 : Développement du déplacement"
content="Les responsables du sujet 1 auront la charge de développer la partie déplacement sur 3 axes de la plateforme." 
image="2021-09-27-09-39-44.png" %}

{% include step-tuto.html 
greyBackground=false
title="SUJET 2 : Développement du cardan"
content="Le sujet portera sur le développement du cardan. C'est le support tournant permettant la fixation et l'orientation de la camera." 
image="2021-09-27-09-40-46.png" %}

{% include step-tuto.html 
greyBackground=true
title="SUJET 3 : Développement boitier électronique"
content="Le sujet 3 sera orienté sur la conception et la réalisation du boitier de commande du système." 
image="2021-09-27-09-41-55.png" %}

## Liens et ressources :

- [Vidéo - 6-Axis Motion Control Camera Rig DIY](https://www.youtube.com/watch?v=zDXDevPtEbs)
- [Vidéo - Motion control camera crane](https://www.youtube.com/watch?v=YF9FcSiL0Ho)
- [DragonFrame](https://www.dragonframe.com)
- [Exemple de film StopMotion - Kubo et l'armure magique](https://www.youtube.com/watch?v=Ywx3QWVDhkU)
- [Exemple de film StopMotion - Les Boxtrolls](https://www.youtube.com/watch?v=CSomVLvah34)
- [Figurine StopMotion](https://www.thingiverse.com/search?q=ModiBot&type=things&sort=relevant)

