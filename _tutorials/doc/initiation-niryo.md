---
layout: tutorial
image: 2023-02-24-16-41-11.png
hide_hero: false
hero_image: 2023-02-24-16-41-11.png
hero_darken: true
component_toc: true

title: Initiation au robot Niryo
subtitle: Prise en main, démarrage et conseils
description: Le robot Niryo fait partie des outils de la mallette pédagogique permettant d'initier les publics à la robotique et à la Cobotique grâce à des ateliers.
tags: robot
type: doc

time: 2
difficulty: 1
compatibilities-os: mac,win,lin

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: Niryo Studio
    link: "https://niryo.com/download/"

todo: 90
---

## 1 - Présentation

Niryo est une entreprise française qui développe des robots industriels et éducatifs destinés à faciliter l'automatisation des tâches répétitives dans différents secteurs, tels que l'industrie, l'agriculture ou l'éducation. Les robots Niryo sont conçus pour être facilement programmables et personnalisables, ce qui les rend accessibles à un large public, y compris les étudiants et les makers. Ils sont équipés de capteurs de haute qualité et d'un logiciel convivial pour une utilisation optimale.

Les robots Niryo sont des robots collaboratifs, également appelés cobots. Les cobots sont des robots industriels conçus pour travailler en collaboration avec des humains dans un environnement de travail partagé, sans nécessiter de cages de sécurité ou d'autres dispositifs de sécurité coûteux. Les robots Niryo sont capables d'interagir de manière fluide et sûre avec les opérateurs humains et sont dotés de multiples capteurs de sécurité pour éviter les collisions et les accidents. Ils sont également équipés de fonctionnalités telles que la programmation intuitive et la vision par ordinateur pour faciliter leur utilisation par les travailleurs humains.

## 2 - Installation

{% include step-tuto.html 
title="2.1 - Déballage"
image="2023-02-24-16-45-09.png"
content="Le robot est rangé dans sa boite en plastique avec l'ensemble des équipements à l'intérieur. Veuillez noter la disposition des différents équipements ainsi que la position du robot pour le rangement ultérieur en fin d'atelier.
Sortez délicatement le robot de sa boite ainsi que l'ensemble des équipements.

**Attention lors de la prise du robot :** Celui-ci dispose de jointures avec ressorts. Il est donc possible lors de la manipulation du robot que les jointures se déplacent. Maintenez donc correctement le robot pendant son extraction de la boite." 
%}

{% include step-tuto.html 
title="2.2 - Liste du materiel"
image="2023-02-24-16-41-11.png"
content="Dans la boite, vous devriez retrouver :

- Le robot Niryo
- 4 pieds en caoutchouc avec leurs écrous
- Un dispositif de mise sous vide
- Un cable d'alimentation avec son transformateur
- Un cable Ethernet
- Une clef USB contenant le logiciel [Niryo Studio](https://niryo.com/download/)" 
%}

{% include step-tuto.html
title="2.3 - Installer les pieds"
image="2023-02-24-18-12-01.png"
image_2="2023-02-24-18-12-20.png"
content="Avant de commencer à utiliser le robot, installez les quatre pieds sur les coins. Dévissez les écrous et revissez les sur les pieds.

Vérifiez la stabilité du robot avant de commencer à l'utiliser. N'oubliez pas de démonter les pieds lors du rangement du robot dans la caisse à la fin de l'atelier.

**A noter :** Même équipé de ses pieds, le robot peut être instable. Lors de sa manipulation n'hésitez pas à maintenir sa base." 
%}

{% include step-tuto.html
title="2.4 - Branchements"
image="2023-02-24-18-24-45.png"
image_2="2023-02-24-18-27-05.png"
image_3="2023-02-24-18-28-50.png"
image_4="2023-02-24-18-31-57.png"
content="Commencez par brancher le dispositif de mise sous vide. Puis branchez l'alimentation et le câble ethernet du robot à l'ordinateur.

Vous pourrez ensuite allumer le robot. Celui-ci va mettre un certains temps avant de démarrer. Il faudra attendre que la diode à l'arrière du robot passe au **bleu** avant de travailler avec le robot." 
%}

{% include step-tuto.html
title="2.5 - Lancez Niryo-studio"
image="2023-02-24-18-50-47.png"
image_2="2023-02-24-18-40-56.png"
content="Si vous avez téléchargé Niryo-studio, dézippez l'archive et double-cliquez sur l'icone *NiryoStudio.exe*.

![](2023-02-24-18-37-14.png)

Si vous n'avez pas le logiciel,celui-ci se trouve sur la clef USB disponible dans la caisse. Vous pouvez copier-coller le contenu sur votre ordinateur, ou lancer le logiciel directement depuis la clef.

**A noter :** Lancer le logiciel depuis la clef peut entrainer de l'instabilité lors de l'exécution du logiciel. Il est fortement conseillé pour une utilisation sur une longue période de transférer le logiciel sur son ordinateur.
" 
%}

## 3 - Connexion et calibration

Avant de démarrer, votre robot va avoir besoin d'être calibré. Pour cela il va falloir suivre une procédure simple via le logiciel Niryo-Studio. 

{% include step-tuto.html
title="3.1 - Connecter le robot"
image="2023-02-24-18-50-47.png"
image_2="2023-02-24-18-52-09.png"
image_3="2023-02-24-18-54-33.png"
content="Dans un premier temps, nous allons connecter le robot via l'interface Niryo-Studio. On va commencer par changer la langue de l'interface et la passer en Français en haut à droite.

Puis en haut à droite toujours, sur **Non connecté**, cliquez sur **Niryo One Ethernet (default)**, puis sur **Se connecter à Niryo One**

![](2023-02-24-18-56-08.png)" 
%}

{% include step-tuto.html
title="3.2 - Calibration manuelle"
image="2023-02-24-19-00-12.png"
image_2="2023-02-24-19-00-32.png"
content="On va maintenant passer à la phase de calibration. Vous devriez voir un bouton **Calibrage requis** disponible sur l'interface. Cliquez dessus. 

![](2023-02-24-18-58-16.png) 

Puis positionnez le robot en utilisant les flèches présentes sur les deux axes principaux du robot comme montré sur les photos ci-contre. Une fois ceci fait, cliquez sur **Calibrage Manuel (recommandé)**.

![](2023-02-24-18-58-47.png)

Le robot va enregistrer cette position comme étant sa position zero. " 
%}

{% include step-tuto.html
title="3.3 - Calibration automatique"
image="2023-02-24-19-04-38.png"
content="Une fois la calibration manuelle effectuée, on peut maintenant passer à la calibration automatique. Cliquez sur le bouton **Calibration Auto**

![](2023-02-24-18-58-47.png)

Le robot va effectuer une série de mouvement lui permettant d'étalonner ses positions minimums et maximums. Laissez le finir son process de calibration en vérifiant que rien n'entrave son mouvement." 
%}

{% include step-tuto.html
title="3.4 - Prêt à être programmé !"
image="2023-02-24-19-06-42.png"
content="Le robot est maintenant prêt à être programmé et utilisé. Cliquez sur l'onglet de programmation afin d'accéder à la suite."
%}

## 4 - Programmation

Pour la programmation du robot, nous allons utiliser des blocs de programmation associé à une fonction très utile du robot : le **Mode Apprentissage**.

Le mode apprentissage est une fonctionnalité qui permet aux utilisateurs de Niryo de programmer rapidement et facilement le robot en le guidant physiquement à travers une tâche. Cela se fait en manipulant le robot manuellement pour lui faire effectuer une séquence de mouvements qui sera ensuite enregistrée par le logiciel. Le robot peut ensuite reproduire cette séquence à volonté.

Le mode apprentissage est particulièrement utile pour les personnes qui n'ont pas de connaissances en programmation et qui souhaitent automatiser des tâches simples. En utilisant cette fonctionnalité, les utilisateurs peuvent programmer le robot en quelques minutes sans avoir besoin de coder. Cela permet de gagner du temps et de réduire les coûts associés à l'automatisation des tâches.

{% include message.html 
title="Attention" 
message="Si le robot n'est pas utilisé il est conseillé de passer en **Mode apprentissage** afin de ne pas faire chauffer inutilement les moteurs. En effet, dans le cas contraire, les moteurs tentent de maintenir et de corriger la position du robot en continu. ce **blocage** de la positon entraine une chauffe assez importante sur le long terme des moteurs.

Cette situation pouvant aboutir à une mise en sécurité automatique des drivers de moteurs, il est conseillé de **libérer les moteurs** en activant le **Mode apprentissage** une fois que le robot n'est plus en service.

![](2023-02-24-19-21-04.png)" 
status="is-warning" 
dismissable="false" 
icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
title="4.1 - Préparation de la programmation"
image="2023-02-24-19-17-22.png"
content="Avant de programmer, il est conseillé, en lien avec la note ci-dessus, de positionner un bloc **Activate learning mode** dans la fenêtre de programmation.

Ce bloc devra être positionné à la fin du programme et permettra d'activer le **Mode d'apprentissage** automatiquement en fin de programme."
%}

{% include step-tuto.html
title="4.2 - Premiers mouvements"
image="2023-02-24-19-29-39.png"
image_2="2023-02-24-19-22-03.png"
content="Le **Mode d'apprentissage** permet, via l'appui **bref** sur le bouton à l'arrière du robot d'enregistrer la position actuelle de ce dernier. Il est alors très simple de créer des séquences avec le robot.

Pour cela :

- Positionnez le robot sur la position désirée
- Faites un appui bref sur le bouton à l'arrière

Un bloc de position devrait alors être créé :

![](2023-02-24-19-24-37.png)"
%}

{% include step-tuto.html
title="4.3 - Premier programme"
image="2023-02-24-19-26-51.png"
image_2="2023-02-24-19-28-59.png"
content="Utilisez le **Mode d'apprentissage** pour créer uns succession de blocs de position. Puis assemblez ces blocs dans la fenêtre de programmation fin de réaliser un programme complet.

N'oubliez pas de terminer par le bloc **Activate learning mode**.

Cliquez ensuite sur le bouton **Play** pour lancer le programme.

![](2023-02-24-19-30-46.png)
"
%}

## 5 - Eteindre et ranger le robot

{% include step-tuto.html
title="5.1 - Eteindre et ranger"
image="2023-02-24-19-38-07.png"
image_2="2023-02-24-19-36-16.png"
image_3="2023-02-24-19-37-32.png"
content="Dans un premier temps, commencez par fermer l'application afin de déconnecter le robot. Une fois l'application fermée, vous pouvez commencer le processus d'extinction du robot.

Pour cela, **restez appuyer sur le bouton poussoir à l'arrière du robot pendant 3 secondes au moins**. La leds passe au rose.

**Attendre que la led passe au rouge avant d'appuyer sur le bouton ON/OFF à coté du connecteur d'alimentation.**
"
%}

{% include message.html 
title="Rangement" 
message="Une fois le robot éteint vous pouvez ranger ce dernier dans sa caisse. N'oubliez pas d'enlever les pieds et débrancher précautionneusement l'ensemble des câbles. N'oubliez pas de remttre la clef USB dans la caisse également.

Poru la mise en place du robot dans la caisse, utilisez la photo référence ci-dessous pour vous aider :

![](2023-02-24-16-45-09.png)
" 
status="is-warning" 
dismissable="false" 
icon="fas fa-exclamation-triangle" %}