---
project_number: 00
hero_image: pid.png
hero_darken: true
layout: project
image: pid.png
product_toc: true

title: Plateforme pédagogique de régulation
subtitle: Projet de Plateforme Pédagogique sur la Régulation PID
description: Ce projet vise à créer une **plateforme pédagogique interactive** permettant de comprendre et d’expérimenter les principes du **contrôle PID (Proportionnel, Intégral, Dérivatif)**. Inspiré d’un projet utilisant une balle de ping-pong pour illustrer la régulation, il proposera un support avec écran et commandes ajustables pour observer directement l’impact des paramètres PID sur un système en temps réel.  

tags: 
multi-group: false
empty_group: true
state_new: true
area: 

categories:
  - label: Projets I3 2025
    check: true

---

La régulation PID est un principe fondamental en automatisme et en ingénierie des systèmes. Ce projet propose la conception d’un dispositif pédagogique permettant d’illustrer concrètement **comment un contrôleur PID ajuste un système pour atteindre un état stable**.  

Inspiré du projet présenté sur **[Hackaday](https://hackaday.com/2019/07/31/ping-pong-ball-makes-great-pid-example/)**, l’objectif est de concevoir une plateforme où les étudiants pourront :  
- Manipuler un système en **réglant manuellement les valeurs de P, I, et D** via des potentiomètres.  
- Observer en temps réel l’effet des modifications sur un affichage intégré.  
- Comprendre de façon expérimentale comment la régulation PID permet de stabiliser un système dynamique.  

L’enjeu est de **créer un support accessible et reproductible**, utilisable dans des contextes éducatifs pour faciliter l’apprentissage de la régulation automatique.  

### **Cahier des charges**  
#### **Objectifs principaux :**  
- Concevoir un **prototype fonctionnel** basé sur un exemple de régulation physique.  
- Intégrer un **affichage en temps réel** des paramètres et du comportement du système.  
- Permettre un **réglage manuel des valeurs PID** via des potentiomètres.  
- Développer un **guide pédagogique** expliquant le fonctionnement et les applications du PID.  
- Assurer une **reproductibilité** pour permettre son utilisation dans différents contextes éducatifs.  
- Tester et optimiser le dispositif pour garantir une **expérience d’apprentissage fluide et intuitive**.  

#### **Contraintes techniques :**  
- Utilisation d’un microcontrôleur (ESP32, Arduino…) pour gérer la régulation PID.  
- Intégration d’un **capteur** permettant d’observer la réponse du système.  
- Mise en place d’un affichage (écran OLED/LCD) pour visualiser les paramètres et l’évolution du système.  
- Fabrication d’une structure mécanique robuste et facilement ajustable.  
- Développement d’un code optimisé pour assurer une régulation fluide et réactive.  

#### **Livrables attendus :**  
- Une **plateforme pédagogique fonctionnelle** illustrant le concept de régulation PID.  
- Un **système d’affichage interactif** permettant de visualiser l’impact des réglages.  
- Une **documentation détaillée** sur la conception et l’utilisation du système.  
- Une étude des **applications réelles du PID** et une analyse des performances du prototype.  

### **Vous travaillerez sur :**  
- **Conception mécanique :** Fabrication du support et intégration des éléments physiques du système.  
- **Électronique & Capteurs :** Sélection et intégration des capteurs et actionneurs nécessaires.  
- **Programmation embarquée :** Développement du code de régulation PID et de l’interface utilisateur.  
- **Interface & Affichage :** Mise en place d’un affichage interactif des paramètres PID.  
- **Expérimentation & Optimisation :** Test du système et ajustements pour améliorer sa réactivité et son efficacité pédagogique.  

Ce projet offre une **approche concrète et expérimentale** pour comprendre la régulation automatique et ses applications, tout en développant des compétences en **électronique, programmation et analyse des systèmes dynamiques**.  

### **Liens et ressources**  
- **Projet d’inspiration sur Hackaday** : [Ping-pong ball makes great PID example](https://hackaday.com/2019/07/31/ping-pong-ball-makes-great-pid-example/)  