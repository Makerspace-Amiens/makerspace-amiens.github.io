---
project_number: 23
hero_image: 2022-11-28-15-46-48.png
hero_darken: true
layout: project
image: 2022-11-28-15-46-28.png
product_toc: true

title: InMoov
subtitle: Le robot Humanoïde imprimé en 3D
description: Re-créer le robot humanoide InMoov en impression 3d designé par Gaëlle Langevin, sculpteur français.

tags: robot,club,arduino

multi-group: false
empty_group: true
state_new: false

tutor:
- label: Adrien BRACQ
  mail: 'adrien.bracq@unilasalle.fr'
  year: 2023
- label: Adrien BRACQ
  mail: 'adrien.bracq@unilasalle.fr'
  year: 2024

student:
  - label: LECLERCQ Eric 
    mail: '@unilasalle.fr'
    year: 2023
  - label: RENOULT Baptiste 
    mail: '@unilasalle.fr'
    year: 2023
  - label: ROBERT Arthur 
    mail: '@unilasalle.fr'
    year: 2023

categories:
  - label: MakerSpace
    check: true
  - label: Projets I3 2024
    check: true
  - label: Projets I3 2023
    check: true
  - label: Projets I3 2022
    check: false
  - label: Archivés
    check: false

area: Electronique,Mécanique,Programmation

soft: FreeCAD,Solidworks,Fusion 360,Cura,Inkscape

---

## Contexte et description du projet :

InMoov est un robot développé à des fins artistiques par le sculpteur français Gaël Langevin à partir de septembre 2011. Il est reproductible avec une simple imprimante 3D de petit format (12 × 12 × 12 cm1) et ses fichiers sont sous licence Creative Commons (CC-BY-NC). Le projet est aussi une plateforme de développement et d'apprentissage robotique. Sur cette base et ce concept ont été développées différentes itérations open source.

MyRobotLab, reposant sur Java, est le cadriciel qui permet au développeur de modifier ou d'ajouter des briques open source2 pour piloter le robot InMoov.

InMoov est capable de percevoir les sons, de voir, de parler et de se déplacer de façon autonome. Le robot est capable d'identifier son environnement à travers des micro-caméras et, dans certains projets, reconnaître les commandes vocales qui lui sont émises par le propriétaire. Il est doté de différents capteurs tactile, PIR et 3 dimensionnel, en outre, le Kinect lui permet de voir en infra-rouge et d'analyser l'espace en 3 dimensions.

Grâce à l'utilisation de technologies ouvertes et des composants open source, comme la plateforme programmable Arduino, de nombreux développeurs ont modifié InMoov, dans le but d'étendre ses fonctions pour être utilisé comme la base pour de nombreux types de développement. Les plus ambitieux sont les programmes de reconnaissance artificielle, car le robot intègre sur sa seule plate-forme une micro-caméra, des capteurs et un fonctionnement de système de mouvement, ainsi que la possibilité de se connecter à n'importe quel ordinateur.

Le prototype original a participé à la Maker Faire de Rome en 2013, où il a suscité un grand intérêt pour son potentiel en tant que modèle de développement et pour des prothèses robotiques. Comme ses pièces peuvent entièrement être réalisées avec une imprimante 3D, ses possibilités d'utilisation sont très variées.

Il est reproduit dans plus de 50 pays et utilisé dans de nombreuses universités.

{% include youtube.html video="H4Z09edx52E" %}

## Existant :

Le robot a déja été commencé au MakerSpace. Certaines pièces ont été imprimées et assemblées. Un projet I3 de 2023 a déjà avancé sur le projet et sur l'impression des pièces. Cependant le robot ne bouge pas encore et l’électronique n'est pas fonctionnelle. 

![](2022-11-28-15-53-21.png)

## Objectifs 2024 :

- Réaliser une carte de pilotage du robot permettant d'alimenter et de faire fonctionner les servomoteurs du robot
- Assembler correctement les différentes pièces qui constituent la partie haute du robot (principalement torse et les deux bras)
- Faire bouger la tête et les deux bras
- Bonus : créer une application permettant de piloter le robot.

## Liens et ressources :

- [InMoov - site officiel](https://inmoov.fr)
- [Vidéo](www.youtube.com/watch?v=H4Z09edx52E)