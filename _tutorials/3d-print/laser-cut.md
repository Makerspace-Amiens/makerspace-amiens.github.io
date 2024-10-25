---

layout: tutorial  
image: Flat_Benchy.png  
hide_hero: true  
hero_image: Flat_Benchy.png  
hero_darken: true  
component_toc: true  
background_color: '#f7f4ed'

title: Découper au laser
subtitle: Comment découper sa première pièce au laser  
description: Dans ce tutoriel, vous apprendrez à découper votre première pièce en utilisant le logiciel LaserBox.  
tags: 3d-print  
type: 3d-print

time: 2  
difficulty: 1  
compatibilities-os: win, mac, lin

softwares: 
  - label: OnShape  
    link: "https://cad.onshape.com"

  - label: LaserBox
    link: "https://support.makeblock.com/hc/en-us/articles/25439631937687-Use-Laserbox-Software"
todo: 30  
---

# Découpe d'une pièce

### Introduction

Ce **tutoriel d'initiation** vous guidera de l'**exportation** de votre modèle depuis **OnShape** jusqu'à la **fin de la découpe**, en vous aidant à éviter les erreurs courantes.

Si votre modèle n'est pas encore créé, rendez-vous sur la page [**tutoriels CAO**](/pages/tutoriels-cao).

Contrairement à l'**impression 3D**, la **découpe laser** travaille sur un seul plan, elle permet de découper et graver des formes dans des plaques en brûlant de la matière.

{% include message.html title="Pré-requis" message="Dans les premières étapes de ce tutoriel, vous apprendrez à exporter votre plan de découpe depuis **OnShape**. Si vous avez déja un fichier **.DXF**, rendez vous à l'**étape 2**." status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html  
greyBackground = true  
image = "Flat_Benchy.png"
title="1 - Exportation du plan"
content="Pour découper une plaque au laser, il vous faut extraire **une des faces de votre pièce** qui servira de **plan de découpe**.

Sélectionnez la face et **clic droit** sur cette dernière.

![Clic droit sur face](Right_Click_On_Face.png)

Cliquez ensuite sur **Export as DXF/DWG...** "  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Flat_Benchy_DXF.png"
content="Dans la nouvelle fenêtre, entrez un **nom de fichier cohérent**.

Sélectionnez **DXF** dans le menu déroulant **Format**

![Fenêtre d'exportation](Export_Window.png)

Cliquez finalement sur le **bouton** ![Bouton Export](Export_Button.png)

Placez ensuite le fichier téléchargé dans votre **clé USB**.

"
%}

{% include step-tuto.html  
greyBackground = true  
image = "Flat_Benchy_DXF.png"
title="2 - Préparation et vérification"
content="Rendez-vous maintenant au [**MécaLab**](/pages/informations). Cet espace est dédié à l'**usinage,** **perçage** et **découpe** de divers matériaux.

La **découpeuse laser** se trouve au **fond à droite de la pièce**.

"
%}

