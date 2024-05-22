---
project_number:
hero_image: 2022-11-29-15-20-39.png
hero_darken: true
layout: project
image: 2022-11-29-15-20-16.png
product_toc: true

title: reacTable 
subtitle: Une table réactive pour des applications tangibles
description: Créer une table interactive en utilisant des elements tangibles et le framework reacTIVision
site-projet: https://makerspace-amiens.fr/2024-InteractiveTable/

tags: 

tutor:
- label: Adrien BRACQ
  mail: 'adrien.bracq@unilasalle.fr'
  year: 2023

multi-group: false

student:
  - label: CADART Ugo
    mail: '@unilasalle.fr'
    year: 2023
  - label: CHEN Chen
    mail: '@unilasalle.fr'
    year: 2023
  - label: LEFEBVRE Geoffrey
    mail: '@unilasalle.fr'
    year: 2023
  - label: LEON Samuel
    mail: '@unilasalle.fr'
    year: 2023

empty_group: true

state_new: false

categories:
  - label: MakerSpace
    check: false
  - label: Projets I3 2024
    check: true
  - label: Projets I3 2023
    check: true
  - label: Projets I3 2022
    check: false
  - label: Archivés
    check: false

area: Mécanique,Programmation

soft: VsCode,FreeCAD,Fusion360,OnShape,Processing

---
## Contexte et description du projet  

A l'origine, la [ReacTable](http://reactable.com) est un dispositif de musique electronique créé à l'université Pompeu Fabra de Barcelonne. Cet instrument se présente sous la forme d'une table ronde sur laquelle le ou les musiciens peuvent poser des blocs, chaque blocs représentant les éléments d'un synthétiseur. Les tags apposés sur les blocs et elements sont nommé des Fiducials.

Les élements peuvent interagir ensemble et le dispositif réagit différemment selon la position, la proximité et l'orientation des différents tags posés. A l'origine pensé comme un instrument de musique, il a été utilisé par Björk en concert pour sa tournée Volta 2007 ainsi que par ColdPlay lors de leur tournée *Ghost Stories* en 2014.

Depuis quelques années, la société [Reactable](http://reactable.com) a cessée tout activité. Il n'est donc plus possible de se procurer une table ou des elements similaires sur le marché.

{% include youtube.html video="Ky3GLuZ_hII" %}

## Fonctionnement  

Techniquement, le dispositif se compose d'une camera qui lis les différents tags {% include image-hover.html text="(fiducials)" link="2022-11-29-15-41-40.png" %}, et d'un vidéo-projecteur qui vient diffuser l'image sur la surface. Le framework utilisé est un framework openSource nommé [Reactivision](https://reactivision.sourceforge.net).

![](2022-11-29-15-31-54.png)

## Existant

La table a déjà été réalisé et un prototype est fonctionnel du point de vu mécanique. Coté software, des jeux ont été créés pour la table et sont fonctionnels mais demande un PC puissant pour être utilisés et n'utilise pas toutes les possibilités de pilotage avec les elements physiques. 

## Objectifs du projet :

Le but du projet cet année sera de créer une table fonctionnel permettant l’émergence de projets autour du dispositif reactivision dans le MakerSpace. 

- Simplifier le design mécanique de la table pour la rendre plus pratique à déplacer
- Intégrer un PC de contrôle directement dans la table afin de simplifier le câblage et le pilotage.
- Créer une application simple sous [processing](https://www.processing.org) permettant de montrer les capacité de la table au grand public
- Créer une application de musique avec la table, comme le faisait la reactivision originelle.


## Liens et ressources

- [Wikipedia](https://fr.wikipedia.org/wiki/Reactable)
- [ReacTable.com](http://reactable.com)
- [Reactivision](https://reactivision.sourceforge.net)
