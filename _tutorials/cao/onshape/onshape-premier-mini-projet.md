---
layout: tutorial
image: Onshape(3).png
hide_hero: false
hero_image: opera_IrNGzaeHom.png
hero_darken: true
component_toc: true
background_color: '#edf7f0'

title: OnShape (3) - Mini-projet
subtitle: Réaliser un mini-projet sans tutoriel
description: Dans ce troisième tutoriel, on va créer un support de téléphone simple afin de pouvoir ensuite l'imprimer en 3D.
tags: onshape
type: cao

time: 2
difficulty: 2
compatibilities-os: win

prerequisites:
  - label: Premier tuto OnShape
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## Objectifs

Maintenant que vous connaissez quelques bases de la manipulations des logiciels de modélisation 3D, il est intéressant de concevoir un petit projet fonctionnel en autonomie. 

Pour cela, nous allons modéliser le support de téléphone ci-dessous. ça réalisation ne sera pas guidée pas-à-pas mais nous allons vous donner quelques informations vous permettant de mener à bien ce premier mini projet.

![Alt text](opera_IrNGzaeHom.png)

{% include 3d-model.html model = "/img/3d/SupportTelephone.glb" %}

## Description générale de la conception

{% include step-tuto.html 
greyBackground = false
title="1 - Arbre de conception"
content="Vous trouverez ci-contre l'arbre de conception de la pièce finale. 

Comme vous pouvez le constater, la pièce est réalisée en trois esquisses que nous détaillerons plus loin, ainsi que 2 opérations de bossage et une opération d’enlèvement de matière.

Les opération de congés viennent finaliser la pièce. 

Une opération est nouvelle dans cette conception, c'est l'opération de création de **Coque** que nous détaillerons plus loin.
"
image="opera_cTY1jF91xq.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Bossage principal"
content="Pour créer le bossage principal, il vous suffira de créer un cercle de 60mm de diamètre.

![Alt text](opera_GV2wFjc1eE.png)

Le bossage aura également **une profondeur de 60mm**.
" 
image="opera_GbUkn74SvD.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Création des pieds"
content="Pour créer le bossage des pieds, vous allez devoir créer l'esquisse ci-dessous dans le même plan que celui du bossage principal.

![Alt text](opera_SySqeyL56v.png)

Pour cela, vous allez utiliser l'outil **Rectangle aligné** ![Alt text](opera_ODOvFWW2ex.png). N'oubliez pas l'usage des relations géométriques dans la barre d'outil supérieur.

Le bossage aura également **une profondeur de 60mm**
" 
image="opera_1JKxFQ1Lzg.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Création de l'ouverture pour le téléphone"
content="Pour créer l’enlèvement de matière pour le téléphone, vous allez devoir créer l'esquisse ci-dessous toujours dans le même plan que celui du bossage principal.

![Alt text](opera_ITbSQFXK7o.png)

Pour cela, vous allez utiliser, comme lors de la précédente opération, l'outil **Rectangle aligné**. N'oubliez pas l'usage des relations géométriques dans la barre d'outil supérieur.

Vous ferrez un enlèvement de matière **A travers tout**.
" 
image="opera_537YGdGP1D.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Création de l'ouverture centrale"
content="Afin de créer l'ouverture centrale de la pièce, nous pourrions créer un offset du contour extérieur. Mais pour simplifier la conception, nous allons travailler avec l'outil **Coque**. Cette opération permet de creuser une pièce en laissant ouvertes les faces que vous sélectionnez et en créant des parois minces.

Pour cela, cliquez sur le bouton **Coque** ![Alt text](opera_SzeRBAdkuR.png) dans le bandeau supérieur. Puis sélectionnez les deux faces opposées de la pièce :

![Alt text](opera_ZSFLXy92Uq.png)

Indiquez une dimensions de 3mm pour l'épaisseur de la coque et valide. 

![Alt text](opera_RP8pCdUDrd.png)
" 
image="opera_V9vMHNywOx.png" %}

{% include step-tuto.html 
greyBackground = false
title="6 - Création des congés"
content="La dernière opération consiste maintenant à créer les congés sur chaque arrêtes comme sur la vue ci-dessous. Vous pouvez sélectionner toutes les arrêtes en une seule et même opération. 

Les congés auront tous un rayon de 2mm.

![Alt text](opera_UTiBKf7JSB.png)
" 
image="opera_hyDIclBLPu.png" %}


## Impression 3D de la pièce

Le projet terminé, vous pouvez maintenant lancer l'impression du modèle.

### Préparation du fichier

{% include step-tuto.html 
greyBackground = false
title="1 - Enregistrement au format 3mf"
content="Cliquez droit sur votre pièce dans la barre de d'outil de gauche, puis cliquez sur **exporter**. 

![Alt text](opera_Cylzhb20xb.png)

Sélectionnez le format de fichier le ***3mf**. Enregistrez le fichier sur une clef USB afin de pouvoir l'amener sur le PC d’impression du MakerSpace.

![Alt text](opera_DlNDpXdAOZ.png)
"
image="opera_q0E3mrqhdm.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Ouverture du fichier"
content="Ouvrez le logiciel Cura ![](20230823_182215.png) puis ouvrez votre fichier au format **3mf** en allant dans **File > Open File(s)**

![Alt text](UltiMaker-Cura_20230823_182245.png)

Sélectionnez le modèle et à l'aide des outils de déplacement et de rotation, positionnez le fichier au centre du plateau.
![Alt text](UltiMaker-Cura_20230823_182606.gif)
"
image="UltiMaker-Cura_UFt5BViqGd.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Slicage"
content="Vérifiez que la machine et les paramètres sélectionnés sont correctes (voir ci-dessous), puis cliquez sur **Slice** en bas à droite. ![Alt text](UltiMaker-Cura_20230823_182901.png)

![Alt text](UltiMaker-Cura_20230823_182712.png)

Une fois l'opération de slice terminée, vous verrez apparaitre une estimation du temps d'impression en bas à droite :

![Alt text](UltiMaker-Cura_20230823_182943.png)
"
image="UltiMaker-Cura_20230823_183033.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Vérification"
content="Dans le bandeau supérieur, cliquez sur l'onglet **Preview**. 

![Alt text](UltiMaker-Cura_20230823_183117.png)

Vous aurez alors accès à une vue représentant l'ensemble des couches et des opérations de fabrication de la pièce générées par le logiciel. Vous pouvez naviguer dans les couches en utilisant le scrolling de droite, ou simuler la fabrication d'une couche en utilisant le scrolling inférieur.

![Alt text](UltiMaker-Cura_20230823_183422.gif)
"
image="UltiMaker-Cura_20230823_183456.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Enregistrement"
content="Il ne vous reste plus qu'à enregistrer le code machine généré par le logiciel afin de l'envoyer sur le serveur d'impression. Pour cela, cliquez simplement sur **Save to Disk** en bas à droite et enregistrez le ficheir au format ***.gcode**.

![Alt text](UltiMaker-Cura_20230823_183709.png)
"
image="UltiMaker-Cura_20230823_183846.png" %}

### Impression du fichier sur le serveur

{% include step-tuto.html 
greyBackground = false
title="1 - Accéder au serveur"
content="Allez dans le MakerSpace sur l'ordinateur d'impression et ouvrez, si ce n'est pas déja fait, la page du serveur d'impression.

Sur la page qui s'ouvre, vous avez accés au statut de l'ensemble des imprimantes du serveur. Dans notre cas, nous allons utilsiez les imprimantes SideWinder S1, S2 ou S3. Vérifiez qu'elles sont bien connectées. Si ce n'est pas le cas, prévenez le FabManager du MakerSpace.
"
image="opera_jgFT9zCsVc.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Accéder à l'imprimante"
content="Cliquez ensuite sur le bouton **Aller à l'imprimante** sous l'imprimante à laquelle vous souhaitez accéder.

![Alt text](opera_AQgVbCvl0a.png)

Vous arrivez sur la page de gestion de l'imprimante. 
"
image="opera_KhippXyscX.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Charger et lancer le Gcode"
content="Cliquez sur **Charger le G-Code** et selectionnez le fichier que vous avez précédemment créé avec Cura. 

![Alt text](opera_rqZdnGHzrr.png)

Votre fichier apparait alors dans la liste des fichiers pouvant être imprimé. Cliquez sur l'icone d'impression ![Alt text](opera_e3NAHhE1VJ.png) sur la ligne de votre fichier afin de lancer l'impression.

![Alt text](opera_AuKRv4tlRt.png)

Une fois lancée, les informations d'impression se mettent à jour en haut de la fenetre et la machine commence son cycle de chauffe du plateau et de la buse.

![Alt text](opera_TyOjruQrHo.png)

Il ne vous reste plus qu'à vérifier la bonne impression des premieres couches et à vérifier le bon fonctionnement de l'impression règulierement. 
"
image="opera_PmIMDM8QQi.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Récuperez votre pièce !"
content="Et voila ! Il ne vous reste plus qu'à attendre la fin de votre impression ! Pour retirer la pièce, bien attendre que le plateau ai refroidit. LA pièce doti se décoller toute seul sans forcer. Si ce n'est pas le cas, attendre encore un peu ou prévenir le FabManager.
"
image="Animation.gif" %}

{% include message.html title="Attention" 
message="Si un soucis apparait avant ou pendant l'impression, ou que vous avez un doute sur la marche à suivre, n'hésitez pas à contacter le FabManager du MakerSpace." 
status="is-warning"
icon="fas fa-exclamation-triangle" %}