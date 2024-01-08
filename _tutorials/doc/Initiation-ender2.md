---
layout: tutorial
image: 
hide_hero: false
hero_image: 
hero_darken: true
component_toc: true

title: Initiation a l'impression 3D
subtitle: Prise en main, démarrage et conseils
description: L'imprimante ender 2 pro fait partie des outils de la mallette pédagogique permettant d'initier les publics à l'impression 3D grâce à des ateliers.
tags: impression3D
type: doc

time: 2
difficulty: 1
compatibilities-os: mac,win,lin

prerequisites:
  - label: Slicing
    link: ""

softwares: 
  - label: Cura
    link: "https://ultimaker.com/fr/software/ultimaker-cura"

todo: 30
---


## 1 - Presentation

L'ender 2 pro est une imprimante créée par Creality, base sur la technologie FDM (fused deposit modeling = dépot de fil fondue) elle permet de fabriquer des pièces modélisée depuis un CAO, je vous renvoi vers ce page pour l'initiation [CAO](https://makerspace-amiens.fr/pages/softs/). Ou alors après avoir récupéré des fichier modèle trouvé sur les pages de communauté comme [Thingiverse](https://www.thingiverse.com/)

>Avant de modéliser quelque chose, regardez sur internet si votre objet n'existe déja sur une des communautés, ne reinventez pas la roue :)

L'ender 2 pro est une imprimante 3D très portatif, et sa calibration est intuitif ce qui la rend parfait pour etre ramméné pendant les évenement, pour presenter l'école devant les lycéen et le collégiens en les intitiant a l'impression 3D dû a sa facilité d'instalation ainsi que son utilisation.

## 2 - installation

{% include step-tuto.html
title="2.1 - Déballage"
image=""
content="L'imprimante est rangée dans une boite sans couvercle, enlever tout autre objet dans la boite avant de sortir le l'imprimante elle meme, veuillée noter le sens dans laquele l'imprimante est mise, car elle ne passe pas dans les 2 sens.

**Attention lors de la prise de l'imprimante :** Celui-ci poséde des élement craintif au mouvement, veuillez bien la prendre par le poignée dédiée, de plus, verfiéer si l'écran est pas détachée, les cables sont fragiles et peuvent se casser, rendant l'imprimante inutilisable."
%}

{% include step-tuto.html
title="2.2 - Liste du materiel"
image=""
content="Dans la boite, vous devriez retrouver :

- L'imprimante
- Bobine de plastique (Chargée ou non)
- Cable d'alimentation 220V
- Une carte SD déja dans l'imprimante (attention, elle est maintenu en place avec un resort puisant)
- Une clef USB contenant le logiciel [Cura](https://ultimaker.com/fr/software/ultimaker-cura)"
%}

{% include step-tuto.html
title="2.3 - Mise en route"
image=""
image_2=""
content="Mettez l'imprimante sur une surface plane, elle ne doit pas pouvoir basculer.

Depliér le bras de bobine et poser la bobine dessus (verfier a ne pas tordre le fil si elle est déja chargée dans l'imprimante).

Brancher le cable d'alimentation en commencant coté imprimante.

Verfier que il n'y a pas d'objet intru sur le plateau de travail, et allumer l'imprimante3D.

Votre imprimante est prête!!!

**A noter :** Même si la bobine est déja chargée, elle risquera de briser du au transport, veulliez toujour verfiéer au début d'une impression"
%}

## 3 - Imprimer un piéce préchargée sur la carte SD et calibration

Des modéles ont été prechargée sur la carte SD, ceux si peuvent etre utilisé pour la calibration,

{% include step-tuto.html
title="3.1 -  Choisir Calicat"
image=""
content="Le calicat, comme son nom l'indique, chat de calibration, permet de faire la calibration intiale de l'imprimante en verfiant les capacitées principales, notament:

- Le Niveau du plateau
- La Bonne Temperature
- Sa Stabilité

Apuyer sur le bouton rotatif pour rentrer dans le menu, puis choisir load from card = charger depuis carte, retrouver maintenant le fichier calicat, selectionez le, et apuyer sur confirm. Le plateau va chauffer, ainsi que la buse.
**A noter :** L'imprimante peut maintenant poser un danger de brûlure, ne laisser jamais des petit enfants sans suppervision près de l'imprimante a partir de ce moment la. Manipuler avec précaution si vous devez toucher au plateau.
"
%}

{% include step-tuto.html
title="3.2 -  Verfier la premiere couche"
image=""
content="Le bon déroulement de la création d'une piece sur l'imprimante 3D est fortement liée a la premiére couche, verfiéez donc bien celle ci, elle doit etre consistant, attaché au plateau entierement, ainsi que les couches visibliment fusionée"
%}
