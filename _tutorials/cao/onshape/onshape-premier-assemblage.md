---
layout: tutorial
image: opera_2e0SXhwL6l.png
hide_hero: false
hero_image: opera_2e0SXhwL6l.png
hero_darken: true
component_toc: true
background_color: '#edf7f0'

title: OnShape (5) - Premier Assemblage
subtitle: Création de votre premièr assemblage dans OnShape
description: Création de votre premièr fichier d'assemblage dans OnShape
tags: onshape
type: cao

time: 3
difficulty: 2
compatibilities-os: win,mac,lin

prerequisites:
  - label: Installation de OnShape
    link: "../onshape-installation"
  - label: Votre premiere pièce en 3D
    link: "../onshape-premiere-piece"

softwares: 
  - label: OnShape
    link: "https://www.onshape.com/"

todo: 100
---

## Objectif :

L'objectif de ce tutorial est de vous initier à l'assemblage dans OnShape. Nous allons réaliser 2 pièces, un berceau de servomoteur et un palonier, que nous allons assembler avec un modèle de servomoteur déja réalisé que nosu allons importer.

Le modèle provient du site [GrabCAD](https://grabcad.com/library). C'est un site communauataire d'ingénieurs qui mettent à disposition de nombreux fichiers techniques. 

{% include message.html title="Attention" message="Vérifiez toujours la jsutesse des fichiers que vous téléchargez et utilisez. Vérifiez également les licences liés à ces fichiers. Certains ont des licences commerciales limitantes."
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

## Création de votre projet

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1 - Nouveau document"
content="Créez un nouveau **Document** dans OnShape puis une esquisse sur le plan du Dessus (**Top**). Reproduisez ensuite l'esquisse cotée ci-contre.

- **Le palonnier :** 

![alt text](opera_f59RUI0Vyd.png) 

- **Le support :**

![alt text](opera_6WpHNgYTnZ.png)
" 
image="opera_9i9la5FIdz.png"
image_2="opera_SI2pVdwusl.png" %}

## Téléchargement d'un modèle externe

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1 - Récupérer votre modèle"
content="Suivez le lien de téléchargement ci-dessous et enregistrez le modèle sur votre poste. Cet équipement est un Servomoteur, un actionneur très couramment utilisé dans le modélisme et la robotique pour piloer des dispositifs. Pour en savoir plus sur le fonctionnement de cet actionneur, vous pouvez suivre les vidéos suivantes : 
- [Les Servomoteurs : Présentation et bases](https://youtu.be/igxxH9_NNl4)
- [Les Servomoteurs : Signaux et pilotage](https://youtu.be/WfrrK6lKP0U)

[Télécharger le modèle de servo](mg996R_v2.step)
" 
image="CADAssistant_M3KPVel4Yk.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 - Importer le modèle"
content="Cliquez sur le **+** dans la liste des onglets en bas à gauche et cliquez ensuite sur **Importer**. Selectionnez votre fichier precedemment téléchargé puis **Ouvrir**.

![alt text](opera_z26sYcw9pG.png)

Dans la fenêtre qui s'affiche, cliquez sur **Combiner dans un même Ateliers des pièces**. Cela va importer votre fichier au format **.stp** dans un dossier **Imports CAO** puis créer un atelier de pièce pour votre servomoteur.

![alt text](opera_tNtS4GRNgc.png)
" 
image="opera_waTkfnGpsE.png" %}

{% include message.html title="Attention" message="L'import et la création des fichiers peut prendre un certain temps. Attendez d'avoir l'atelier de pièces avec votre modèle importé créé avant de continuer"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

## Assemblage

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1 - Importer vos pièces"
content="Cliquez sur l'onglet **Assembly**, ou créez un nouvel assemblage en cliquant sur ![alt text](opera_jACBG7LaQS.png). Dans l'atelier d'assemblage, cliquez sur **Insérer** puis selectionnez le **Palonnier** et le **Support**, puis validez. Vous dvriez voir vos pièces dans l'arbre d'assemblage à gauche ainsi que dans votre vue 3D.
" 
image="opera_Rg5frXRPbl.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 - Importer le servomoteur"
content="Pour le servomoteur, étant donné que l'**atelier de pièce** du servomoteur est constitué de plusieurs parts importées non assemblées, la méthode différe légerement. Cliquez sur **Insérer** puis avant de cliquer sur votre servomoteur, cliquez sur **Insérer un atelier de pièces complet en mode rigide**

![alt text](opera_LLkzEI6y6p.png)

Vous pouvez ensuite insérer votre servomoteur. Il apparaitra comme un ensemble déja assemblé.

![alt text](opera_fPbqNmw62t.png)
" 
image="opera_Gqin6FMhPr.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 3 - Figer une pièce"
content="Afin que votre assemblage se comporte correctement, nosu allons commencer par figer un des éléments. Cliquez droit sur votre support puis selectionnez **Fixer**. De cette manière, le support ne sera pas en mouvement et l'assemblage se fera par rapport à cet élément.

![alt text](opera_PNPE0cXwUA.png)

Gardez en tête que si vous faites évoluer votre assemblage, il faudra peut être **dé-fixer** cet éléments dans le futur. 
" 
image="opera_THm1JZ2w0U.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 4 - Mettre en position flottante"
content="En cliquant sur une des pièces du modèle, un manipulateur blanc apparait. Il vous permet de bouger votre pièce dans l'espace. Bougez vos pièces afin de mettre en position basique vos pièces l'une par rapport à l'autre. **Cela n'a pas besoins d'être précis**.

![alt text](opera_pPL7t8a67t.gif)
" 
image="opera_BTggzODulV.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 5 - Assemblage du servomoteur"
content="Nous allons maintenant assembler de manière fixe le servomoteur et la plaque support. Cliquez sur **Liaison Fixe** puis selectionnez les deux elements géométrique que vous souhaitez fixer.

![alt text](opera_C9R3hmaIGG.png)

Remarquez comme des éléments aparraissent lorsque vous survolez votre pièce. Ce sont des **connecteurs de positionnement**, les outils qui vont vous permettre d'effectuer l'assemblage de votre pièce. Selectionnez un connecteur du coté du support, au centre d'un des trous, puis un second connecteur sur votre servomoteur.

Une fois réalisé vous pouvez valider votre action.
"
image="opera_F19v169G2w.gif" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 6 - Assemblage du palonnier"
content="Nous allons effectuer la même chose avec le palonnier en utilisant l'outil **Liaison pivot** :

![alt text](opera_mrbYLPEGLq.png)

**Astuce** Lorsque votre curseur est au dessus d'une surface, si vous restez appuyé sur la touche **Shift** de votre clavier, OnShape vérouille la face et vous pouvez alors plus facilement selectionner un connecteur sur cette surface.
" 
image="opera_7jj3iqldQ8.gif" %}
