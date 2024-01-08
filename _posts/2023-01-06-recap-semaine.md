---
layout: post
title: "Bonne année 2023 !"
subtitle: "Une année sous le signe du prototypage !"
summary: "Une année sous le signe du prototypage !"
date: 2023-01-06 14:00:00
image: /img/posts-images/2023-01-06-16-09-29.png
top_image: /img/posts-images/2023-01-06-16-09-29.png
hero_image: /img/posts-images/2023-01-06-16-09-29.png
hero_height: is-medium
hero_darken: true
published: true
---

## Bonne année !

Nous espérons que vous avez passé de bonnes fêtes et que vous êtes prêts pour cette nouvelle année qui commence ! Nous vous la souhaitons pleine de réussite, de bonheur et de créativité.

Au sein du Makerspace de l'école, nous sommes impatients de poursuivre nos projets de création et d'innovation avec vous. Si vous êtes intéressé par ce que nous faisons, n'hésitez pas à venir nous rendre visite et à participer à nos sessions libres.

En tout cas, nous espérons que cette année sera une belle année pour vous tous ! Meilleurs vœux !

## Travaux en cours

Les travaux ont continué avant les fêtes et se sont achevées juste avant la fermeture de notre établissement. Un nouveau sol a été posé et les finitions et les peintures on été réalisées par les équipes de l'école.

Cette semaine, nous avons donc pu prendre possessions des nouvelles salles fraîchement remises à neuf. Le matériel déjà présent a été installé. Il sera complété la semaine prochaine par du mobilier comprenant tables, chaises et rangements.

{% include image-row.html
image_1 = "/img/posts-images/2023-01-06-16-09-29.png"
image_2 = "/img/posts-images/2023-01-06-16-11-29.png"
image_3 = "/img/posts-images/2023-01-06-16-11-45.png"
image_4 = "/img/posts-images/2023-01-06-16-12-11.png"
%}

## Les Sessions libres

Les sessions libres ont repris doucement cette semaine en raison des modifications des salles. Les étudiants d'UniMakers nous ont aidé à installer les machines et à les brancher : un grand merci une nouvelle fois à eux pour leur aide sur ce projet !

Nos étudiants ont repris leurs projets, notamment les secondes années pour les projets d'ITEC dont nous avons hâte de vous montrer le résultat au vu de la qualité de réalisation de certains projets !

{% include image-row.html
image_1 = "/img/posts-images/2023-01-06-16-12-32.png"
image_2 = "/img/posts-images/2023-01-06-16-13-29.png"
image_3 = "/img/posts-images/2023-01-06-16-13-41.png"
%}

Nous avons également eu l'occasion d'accueillir le premier test de "l'Escape Game" proposé par nos étudiants aux collèges et lycées qui souhaiteront découvrir l'école. Celui-ci débutera dans le Makerspace avant de laisser nos jeunes "enquêteurs" retrouver l'Alien disparu au sein de l'école ! Un indice sera d'ailleurs caché dans le Makerspace... Seront-ils capable de le retrouver ?

{% include image-row.html
image_1 = "/img/posts-images/2023-01-06-16-14-19.png"
image_2 = "/img/posts-images/2023-01-06-16-14-27.png"
%}

## Projets I3

La campagne de propositions de projets I3 est dorénavant cloturée. Ils sont accéssibles en ligne [sur la page dédiée](https://makerspace-amiens.fr/pages/projets/projets/). N'hésitez pas à découvrir l'ensemble des sujets ! Les étudiants ont maintenant 2 semaines pour se positionner sur un choix de 5 projets par ordre d'interêt.

## Nouveautés techniques sur le site

Pendant les vacances, le site du Makerspace s'est vu doté de deux nouvelles fonctionnalités très intéressantes pour la documentation de projet et la visualisation de pièces.

Il est en effet désormais possible d'insérer une vue d'un objet 3D sur n'importe quelle page du site ! Cette fonctionnalité va permettre une meilleure documentation de nos pages et également la possibilité de visualiser en Réalité Augmentée (AR) un objet et ses hotspots de description grâce à un simple téléphone ! N'hésitez pas à tester sur le plan de l'école ci-dessous et à cliquer sur le hotspot "Makerspace" ;)

<model-viewer src="/img/3d/Esiee.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls
    poster="/img/3d/posteresiee.webp" shadow-intensity="1">
    <button class="Hotspot" slot="hotspot-1"
        data-position="0.05268496531743362m 0.005201515576881671m 0.043796989302217676m"
        data-normal="0.6408722200394968m 0.2588186463884152m 0.7227002877149804m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Centre de
            documentation</div>
    </button><button class="Hotspot" slot="hotspot-2"
        data-position="0.02457633373842008m 0.003865832651446688m 0.0664575628347121m"
        data-normal="0.6307162645416059m 0.25881933682671826m 0.731580169583116m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Restaurant universitaire</div>
    </button><button class="Hotspot" slot="hotspot-3"
        data-position="0.08358937202384151m 0.014499999582767487m -0.0013544613917915171m" data-normal="0m 1m 0m"
        data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Soucoupe</div>
    <button onclick="location.href='/pages/informations/'" class="Hotspot" slot="hotspot-4"
        data-position="0.020781372880065457m 0.017500000074505806m -0.01885812901863626m" data-normal="0m 1m 0m"
        data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Makerspace</div>
    </button>
    </button><button class="Hotspot" slot="hotspot-5"
        data-position="0.052057017413428636m 0.005927473297049818m -0.0084859242306847m"
        data-normal="0.9615240647923986m 0m 0.2747207178665338m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Administration</div>
    </button>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png">
    </div>
</model-viewer>

Egalement, il est maintenant possible de simplement importer une page de documentation créée par un étudiant depuis son repo GitLab ! Ainsi, les projets accompagnés par le Makerspace pourront maintenant être hébergés dans des repo séparés et le lien entre le fichier de documentation (le readme.md) se fera automatiquement sur les pages projet du site Makerspace, simplifiant ainsi le travail de mise à jour des projets. 

Un exemple sur [le projet de Borne d'arcade](/projects/borne_arcade/) dont la documentation est en fait hébergée [sur le repo dédié](https://gitlab.com/makerspace-unilasalle/campus-amiens/projets/arcadium-retro-gaming) puis ensuite synchronisée par le site du MakerSpace.
