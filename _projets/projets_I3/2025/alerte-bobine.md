---
project_number: 00
hero_image: image.png
hero_darken: true
layout: project
image: image.png
product_toc: true

title: Alerte Bobine
subtitle: Capteur de fin de filament connecté pour ferme d'impression
description: Ce projet vise à concevoir un **capteur de fin de filament connecté**, permettant d’envoyer des alertes en cas d’épuisement du matériau dans une ferme d’impression 3D. Basé sur un **ESP32**, ce système sera intégré à une **ferme d’imprimantes utilisant Repetier Server**, afin de prévenir les utilisateurs et éviter les impressions ratées dues à un manque de filament. 

tags: 
multi-group: false
empty_group: true
state_new: true
area: 

categories:
  - label: Projets I3 2025
    check: true

---

Dans une ferme d’impression 3D, le suivi du niveau de filament est essentiel pour garantir un fonctionnement continu et éviter les interruptions imprévues. Ce projet propose la conception d’un **capteur de fin de filament connecté**, capable de détecter l’épuisement du filament et d’envoyer une **alerte automatique** via le **serveur Repetier**.  

Les principales fonctionnalités du système seront :  
- **Détection du passage du filament** à l’aide d’un capteur optique ou mécanique.  
- **Communication avec un ESP32**, qui enverra des alertes au système central.  
- **Intégration avec Repetier Server** pour afficher l’état du filament et notifier les utilisateurs.  
- **Possibilité d’extension** pour gérer plusieurs imprimantes depuis une seule interface.  

Ce projet permettra d’automatiser une tâche essentielle pour la gestion d’une ferme d’impression, en assurant une meilleure **réactivité en cas de rupture de filament** et une **réduction des pertes de temps et de matériaux**.  

### **Cahier des charges**  
#### **Objectifs principaux :**  
- Concevoir un capteur de fin de filament fiable et compatible avec différentes imprimantes.  
- Assurer une **intégration fluide avec Repetier Server** pour afficher les alertes.  
- Développer un **système de notification** (email, API, signal visuel…).  
- Garantir une **faible consommation énergétique** et une connexion stable.  

#### **Contraintes techniques :**  
- Utilisation d’un **ESP32** pour la gestion des capteurs et la communication.  
- Compatibilité avec les imprimantes de la ferme utilisant **Repetier Server**.  
- Capteur capable de fonctionner avec **différents types de filaments** (PLA, ABS, PETG…).  
- Mise en place d’une **interface configurable** pour ajuster les seuils d’alerte et les notifications.  

#### **Livrables attendus :**  
- Un **prototype fonctionnel** du capteur de fin de filament connecté.  
- Un **système de transmission des alertes** intégré à Repetier Server.  
- Une **documentation technique** expliquant le montage et la configuration.  
- Un rapport de **tests et d’optimisation** sur la fiabilité et la réactivité du capteur.  

### **Vous travaillerez sur :**  
- **Électronique & Capteurs** : Choix et intégration d’un capteur de fin de filament.  
- **Programmation embarquée** : Développement du firmware ESP32 pour la gestion des alertes.  
- **Communication & Réseaux** : Intégration du système avec Repetier Server via API ou MQTT.  
- **Interface & Notifications** : Création d’un affichage des alertes et gestion des notifications.  
- **Tests & Optimisation** : Validation du système en conditions réelles sur la ferme d’impression.  

Ce projet apportera une **amélioration concrète** à la gestion des impressions 3D, en réduisant les risques d’interruptions et en facilitant la supervision de plusieurs machines en parallèle.