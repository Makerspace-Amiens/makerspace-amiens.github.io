---
layout: tutorial
image: Kicad_PCB_Unimakers_V0.4 _right_logo.png
hide_hero: false
hero_image: Kicad_PCB_Unimakers_V0.4.png
hero_darken: true
component_toc: true
background_color: '#f7eded'

title: Kicad (1) - Présentation et Installation
subtitle: Découvrez Kicad et installez le !
description: Dans ce premier tuto, nous allons voir comment vous pouvez installer la version 7 de Kicad.
tags: Kicad
type: cao

time: 2
difficulty: 1
compatibilities-os: win, lin

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: Kicad
    link: "https://www.kicad.org/"

todo: 100
---

# 1. Présentation

KiCad est un logiciel open-source de conception assistée par ordinateur électronique (CAOE), spécifiquement conçu pour les schémas électroniques et la création de PCB (circuit imprimé).

KiCad est largement utilisé par les makers et entreprises en raison de sa large communauté et de sa simplicité d'utilisation, ce qui rend l'outil flexible pour les différents composants disponibles sur le marché.
Mais les utilisateurs peuvent créer des empreintes sur mesure, assurant une correspondance précise entre les symboles du schéma et les empreintes sur le PCB. Le gestionnaire de projets unifie tous les aspects d'un projet, simplifiant sa gestion.

En intégrant la capacité de générer des fichiers Gerber, KiCad est un logiciel qui permet également d'utiliser les services de nombreux fabricants de PCB, tels que Wurth Elektronik, JLCPCB, Aisler, etc...

![](Interface_Kicad.png)

À l'origine, en 1992, KiCad était un ensemble de programmes spécifiquement conçus pour la conception électronique. Aujourd'hui, ces différents logiciels sont regroupés en un seul dans KiCad, et ils interagissent entre eux.

## 2. Installation 

*Merci à Loaf of tech A.K.A Looij Dylan pour le tuto.*

{% include message.html
title="INFORMATION" 
message="Les étapes ci-dessous sont dédiées à l'installation de la version 7.0. Il est tout à fait possible que les nouvelles versions diffèrent. Si c'est le cas, n'hésitez pas à prévenir l'administrateur du site." %}

{% include step-tuto.html 
greyBackground = true
title="Téléchargement de KiCad"
content="Commencez par accéder à la page dédiée au **Téléchargement** en [allant sur cette page](https://www.kicad.org/download/).
Puis cliquez sur votre système d'exploitation. Une page apparaîtra avec différents serveurs. Il est recommandé d'utiliser le serveur du CERN ou de Futureware.

![](Page_de_telechargement_Kicad.png)
" 
image="Page_de_telechargement_Kicad.png" %}

{% include step-tuto.html 
title="Installation"
content="Dans les pages qui s'ouvrent, laissez tout par défaut et continuez. 
**Attention :**
- KiCad a besoin d'environ 7 Go d'espace de stockage.
  
Cliquez sur Installer"
 %}

---
## 3. Première pièce

Vous êtes maintenant prêt à vous lancer dans la création de votre première PCB sous KiCad ! Rendez-vous sur le prochain tutoriel en suivant le lien ci-dessous.

<a href="../KiCad-premiere-carte" class="button is-info is-rounded is-medium">
    <span class="icon">
      <i class="fas fa-wave-square"></i>
    </span>
    <span>Première Carte - Tuto complet</span>
</a>

