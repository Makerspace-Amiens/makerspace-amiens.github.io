---
layout: documentation
hide_hero: false
hero_image: "placeholder.png"
hero_darken: true
image: "placeholder.png"
component_toc: true
doc_header: true
type: tutorial

title: Exemple de Tutoriel
subtitle: Suivez ces étapes pour accomplir votre tâche
description: Ce tutoriel explique les étapes de base pour réaliser une tâche.
author: Votre Nom

manufacturer:
  - name: Manufacturer
    link: "https://example.com/manufacturer"

working_area: 200x200x200mm
materials:
  - name: PLA
    link: "https://example.com/pla"
  - name: PETG
    link: "https://example.com/petg"
file_extensions:
  - name: STL
    link: "https://example.com/pla"
  - name: 3MF
    link: "https://example.com/petg"
  - name: OBJ
    link: "https://example.com/petg"
precision: 0.15mm
speed: 4
access_level: 0

time: 2
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""

softwares: 
  - label: Aucun logiciel requis
    link: ""

hardwares: 
  - label: Aucune machine requise
    link: ""

todo: 100
---

## Introduction

Bienvenue sur la page de démonstration des fonctionnalités. Ce template propose plusieurs éléments modulaires que vous pouvez facilement intégrer dans vos pages de documentation. Voici quelques exemples des fonctionnalités disponibles.

## 1. Section de Contenu Personnalisée

Vous pouvez également ajouter des sections de contenu personnalisées pour des explications détaillées, des exemples de projets ou des résumés d’instructions.

---

## 2. Messages d'alerte

```liquid
{% raw %}
{% include message.html title="Information" message="Ceci est un message d'information. Utilisez-le pour attirer l'attention de l'utilisateur sur un point important." status="is-info" icon="fas fa-info-circle" %}
{% endraw %}
```

{% include message.html title="Information" message="Ceci est un message d'information. Utilisez-le pour attirer l'attention de l'utilisateur sur un point important." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Attention" message="Ceci est un message d'avertissement. Utilisez-le pour signaler un risque ou une précaution." status="is-warning"  icon="fas fa-exclamation-triangle" %}

{% include message.html title="Danger" message="Ceci est un message de danger. Utilisez-le pour avertir l'utilisateur d'un risque majeur." status="is-danger" icon="fas fa-exclamation-triangle" %}

---

## 2. Images en ligne

Vous avez la possibilité d'intégrer des images en ligne. Possible jusqu'à 4 images au choix.

{% include image-row.html 
image_1 = "placeholder.png" 
image_2 = "placeholder.png"
%}

{% include image-row.html 
image_1 = "placeholder.png" 
image_2 = "placeholder.png"
image_3 = "placeholder.png" 
image_4 = "placeholder.png"
%}

```liquid
{% raw %}{% include image-row.html 
image_1 = "placeholder.png" 
image_2 = "placeholder.png"
%}{% endraw %}
```

---

## 3. Paramètres de la Carte d’En-Tête

Vous pouvez configurer plusieurs paramètres pour personnaliser l’affichage de la carte en haut de chaque page de tutoriel ou documentation. Voici une explication de chaque paramètre disponible :

- **layout** : Définit le type de mise en page. Ici, `documentation` indique une page de type documentation.
- **hide_hero** : Booléen pour afficher ou masquer l’image héro (grande image en en-tête). `true` pour masquer, `false` pour afficher.
- **hero_image** : Chemin de l’image affichée en en-tête.
- **hero_darken** : Assombrit l’image héro pour une meilleure lisibilité du texte. `true` pour activer, `false` pour désactiver.
- **image** : Image utilisée pour la carte en aperçu.
- **component_toc** : Affiche la table des matières. `true` pour l'activer, `false` pour la désactiver.
- **doc_header** : Active l’affichage de l’en-tête de la documentation. `true` pour afficher, `false` pour masquer.
- **type** : Type de contenu, comme `tutorial` ou `documentation`.
- **title** : Titre de la page.
- **subtitle** : Sous-titre pour une description rapide.
- **description** : Brève description de la page pour clarifier son contenu.
- **author** : Nom de l’auteur.

### Paramètres spécifiques aux machines

- **manufacturer** : Informations sur le fabricant de l’équipement, avec `name` pour le nom et `link` pour le lien vers le site du fabricant.
- **working_area** : Taille de la zone de travail de la machine (ex : `200x200x200mm`).
- **materials** : Liste des matériaux compatibles avec la machine, chaque matériau ayant un `name` et un `link`.
- **file_extensions** : Formats de fichiers acceptés par la machine (ex : STL, OBJ).
- **precision** : Précision de la machine, indiquée en millimètres (ex : `0.15mm`).
- **speed** : Vitesse d'opération de la machine, exprimée ici en unité arbitraire (`4`).
- **access_level** : Niveau d’accès requis pour utiliser cette machine (ex : `0` pour accès libre).

### Paramètres liés au tutoriel

- **time** : Temps estimé pour compléter le tutoriel.
- **difficulty** : Niveau de difficulté (1 pour facile, 5 pour expert).
- **compatibilities-os** : Systèmes d’exploitation compatibles (win, mac, lin).
- **prerequisites** : Liste des prérequis avec `label` pour le nom et `link` pour le lien.
- **softwares** : Logiciels requis pour le tutoriel, également définis par `label` et `link`.
- **hardwares** : Machines requis pour le tutoriel, également définis par `label` et `link`.
- **todo** : Indique le pourcentage d'avancement (de 0 à 100) pour une vue d'ensemble rapide de la progression.

Ces paramètres sont flexibles et peuvent être adaptés en fonction des besoins spécifiques de chaque page.

---

## 4. Étapes de Tutoriel

### Exemple d'Étape

{% include step-tuto.html 
greyBackground = true
content="Cette étape montre comment présenter une étape dans le tutoriel. Vous pouvez inclure une description ici." 
image="placeholder.png" %}

{% include step-tuto.html 
greyBackground = true
title = "Titre"
content="Vous pouvez compléter votre étape avec un titre et avec plusieurs images (jusqu'à 4) si vous le souhaitez." 
image="placeholder.png" 
image_2="placeholder.png" 
image_3="placeholder.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Vous pouvez également utiliser un gif plutôt qu'une image. Mais ne surchargez pas la page avec des gif lourd. Cela peut-être nocif pour la lisibilité de votre page de documentaiton."
image="placeholder.gif" %}

---

## 5. Intégration de modèles 3D

{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true%}


Pour intégrer des modèles 3D dans votre documentation, nous utilisons la librairie [**model-viewer**](https://modelviewer.dev). Celle-ci permet de visualiser des fichiers 3D interactifs directement dans le navigateur. Il est possible de les intégrer de deux manières : en utilisant l’API [**model-viewer**](https://modelviewer.dev/editor/) directement ou en passant par un fichier d’inclusion.

### Méthode 1 : Intégration directe avec model-viewer

Vous pouvez intégrer un modèle 3D en utilisant directement le composant HTML `model-viewer`. Pour cela, vous pouvez directement aller sur l'[editeur de model-viewer](https://modelviewer.dev/editor/), importer votre modèle et personnaliser sa visualisation. Vous pourrez ensuite cliquer sur **Download Scene** afin d'avoir accès aux différents fichiers permettant l'inclusion sur votre page.

### Méthode 2 : Utilisation du fichier d’inclusion

Pour simplifier l’intégration, vous pouvez également utiliser le fichier d’inclusion `3d-model.html`, qui permet d'ajouter un modèle avec ou sans image d’aperçu (poster).

#### Exemple avec un poster

Utilisez cette méthode pour afficher une image de prévisualisation avant de charger le modèle.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" poster="astronaut_poster.webp" fullscreen_modal=true %}{% endraw %}
```

- **model** : Chemin vers le fichier 3D (par exemple, `astronaut.glb`).
- **poster** (optionnel) : Chemin vers une image de prévisualisation (format .webp recommandé pour la rapidité de chargement).

#### Exemple sans poster

Si vous ne souhaitez pas afficher d’image d’aperçu, laissez simplement le paramètre `poster` vide.

```liquid
{% raw %}{% include 3d-model.html model="astronaut.glb" fullscreen_modal=true %}{% endraw %}
```

Cette méthode est utile pour garantir une intégration rapide et simplifiée tout en conservant une présentation visuelle cohérente pour tous les modèles 3D intégrés.

---

## 6. Intégration de PCB - Schémas et board avec Kicanvas

Nous utilisons [**Kicanvas**](https://kicanvas.org) pour intégrer des schémas PCB et des plans de circuits imprimés dans votre documentation. 
Kicanvas permet d'embedder des fichiers de projet KiCad (.kicad_sch pour les schémas et .kicad_pcb pour les boards) pour une visualisation interactive directement sur la page.

### Méthode d'intégration directe avec Kicanvas

Utilisez la balise `<kicanvas-embed>` pour intégrer vos fichiers PCB et schémas, en spécifiant le chemin du fichier source. 
Vous pouvez ajuster les contrôles selon vos préférences en utilisant l'attribut `controls`.

#### Exemple d'intégration d'un schéma

```html
<kicanvas-embed src="chemin/vers/votre-schema.kicad_sch" controls="basic">
</kicanvas-embed>
```

- **src** : Chemin vers le fichier de schéma (.kicad_sch) ou le board (.kicad_pcb).
- **controls** : Définissez le niveau de contrôle de l'interface (par exemple, `basic` pour des contrôles de base).

<kicanvas-embed src="kicanvas-example.kicad_sch" controls="basic"></kicanvas-embed>

#### Exemple d'intégration d'un board

```html
<kicanvas-embed src="chemin/vers/votre-board.kicad_pcb" controls="advanced">
</kicanvas-embed>
```

- **src** : Chemin vers le fichier de schéma (.kicad_sch) ou le board (.kicad_pcb).
- **controls** : Définissez le niveau de contrôle de l'interface (par exemple, `advanced` pour des contrôles avancés).

<kicanvas-embed src="kicanvas-example.kicad_pcb" controls="advanced"></kicanvas-embed>

### Options de contrôle pour Kicanvas

- **basic** : Inclut les commandes de base pour la visualisation.
- **advanced** : Donne accès à des contrôles avancés pour une exploration détaillée du schéma ou du board.

Cette intégration permet aux utilisateurs d’explorer vos PCB et schémas de manière interactive, facilitant ainsi la compréhension des circuits.

{% include message.html title="Documentation" message="Pour plus d'informations n'hésitez pas à consulter la documentation du module [**Kicanvas**](https://kicanvas.org)." status="is-info" dismissable="false" icon="fas fa-info-circle" %}

### Carte PCB en 3D

Pour la visualisation de la carte en 3D, vous pouvez toujours utiliser le module model-viewer vu ci-dessus.

{% include 3d-model.html model="kicanvas-example.glb" poster="kicanvas-example.webp" %}

---

## 7. Cartes de Collections

Vous pouvez intégrer des cartes de collections en indiquant la collection que vous souhaitez faire apparaitre. Idéal pour renvoyer vos lecteurs vers des tutoriels similaires ou en lien.

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}
