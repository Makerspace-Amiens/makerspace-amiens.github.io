---
layout: tutorial
image: opera_PmIMDM8QQi.png
hide_hero: true
hero_image: opera_PmIMDM8QQi.png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: Impression 3D avec OrcaSlicer
subtitle: Comment imprimer sa pièce avec OrcaSlicer
description: Dans ce tutoriel, nous vous apprenons à imprimer votre pièce en utilisant le logiciel OrcaSlicer.
tags: 3d-print
type: 3d-print

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

softwares: 
  - label: OrcaSlicer
    link: ""

todo: 50
---

# Impression 3D d'une pièce

### Introduction

Ce **tutoriel d'initiation** vous guidera de l'**importation** de votre modèle jusqu'au **lancement de l'impression**, tout en vous aidant à éviter les erreurs courantes.

Avant de débuter ce tutoriel, nous supposons que votre pièce **a déjà été conçue et exporté** au format ***STL*** ou ***3MF*** depuis votre logiciel de CAO (OnShape, Solidworks, FreeCAD, Fusion 360...)

Si votre modèle n'est pas encore créé, rendez vous sur la page [**tutoriels CAO**](/pages/tutoriels-cao)

Sinon, munissez vous d'une clé USB sur laquelle vous mettrez votre fichier.

{% include step-tuto.html 
greyBackground = true
image = "Etagere_Artillery.png"
title="1 - Rendez-vous au PrinterLab"
content="Vous vous trouvez maintenant au [**PrinterLab**](/pages/informations), un espace dédié à l'impression 3D au sein du MakerSpace, vous y trouverez de nombreux modèles d'imprimantes, mais pas de panique, il suffit de suivre les étapes de ce tutoriel ;)

Nous nous concentrerons ici sur l'étagère de droite en rentrant, c'est ici que votre pièce prendra forme !" 

%}

{% include step-tuto.html 
greyBackground = true
image = "Dashboard_Repetier.png"
title="2 - Vérifications avant impression"
content="Vérifiez le **moniteur du PC** à gauche de l'étagere, il devrait afficher le **tableau de bord** du serveur

Si ça n'est pas le cas et que l'écran semble éteint, faites appel a un FabManager." 

%}

{% include step-tuto.html 
greyBackground = true
image = "Powered_Artillery.png"
image_2 ="Spool.png"
title="3 - Choisir une machine"
content="**Sélectionnez** la machine sur laquelle vous imprimerez votre pièce. Elle doit être **disponible** et **allumée**.

Vérifier également que le **plateau d'impression** est **propre** et qu'il reste du **filament**.

En cas de bobine vide, suivez ce [**tutoriel**](/tutorials/3d-print/refill-bobine/) pour la recharger.

" 

%}

{% include message.html title="Conseil" message="Pour débuter, nous vous conseillons d'utiliser les [Artillery Genius Pro](/pages/machines/)"
status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html 
greyBackground = true
image = "Power_Button_Artillery.png"
content="Si l'imprimante est éteinte, le bouton d'allumage se trouve a l'**arrière droite de la machine**."

%}

{% include message.html title="Conseil" message="OrcaSlicer est un logiciel de type **slicer** qui transforme les modèles 3D en instructions détaillées pour les imprimantes 3D"
status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html 
greyBackground = true
image = "Landing_Page_Orca.png"
title="3 - Ouverture du logiciel"
content="Sur l'un des postes du PrinterLab, ouvrez le logiciel **OrcaSlicer** ![OrcaSlicer icon](Orca_Icon.png).

Sur la page d'accueil, cliquez sur **Nouveau Projet**

![Nouveau Projet Orca](New_Project.png)" 

%}

{% include step-tuto.html 
greyBackground = true
image = "Empty_File.png"
title="4 - Sélection de la machine"
content="En haut du volet de gauche, dans le **menu déroulant**, **selectionnez la machine choisie plus tôt**.

![Choix imprimante](Printer_Choice_Menu.png)"

%}

{% include step-tuto.html 
greyBackground = true
image = "Benchy_On_Plate.png"
title="5 - Importation du modèle"
content="Dans le **ruban supérieur**, cliquez sur le bouton **Ajouter** ![Ajouter](Add_Part.png) et sélectionner votre **fichier** dans l'**explorateur de fichiers**.

Après validation, votre pièce devrait apparaître au centre du plateau. Il est possible d'ajouter d'autres pièces."
%}

{% include step-tuto.html 
greyBackground = true
image = "Benchy_On_Plate_Close_Up.png"
title="6 - Paramètrage de l'impression"
content="Dans le menu déroulant **Filament** sur le panneau de gauche, sélectionnez **PLA - Rosa**

![Menu filament](Filament_Choice_Menu.png)"
%}

{% include step-tuto.html 
greyBackground = true
image = "Sliced_Benchy.png"
content="Pour garantir l'adhésion de la pièce sur le plateau d'impression, rendez vous sur le panneau **Autre** dans le volet gauche.
Dans le menu déroulant **Type de bordure**, sélectionnez **Bordure extérieure et intérieure**

![Menu bordure](Bordure_Choice_Menu.png)

Augmentez ensuite la **Largeur de la bordure** à **5 mm**.

Pour de très petites pièces, préferrez une valeur proche de **10 mm**.

![Paramètre bordure](Bordure_Param.png)
"

%}