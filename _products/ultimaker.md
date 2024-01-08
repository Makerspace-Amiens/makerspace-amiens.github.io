---
title: Ultimaker 2, 2+ et 3
subtitle: Imprimante FDM Ultimaker
description: Imprimante FDM Ultimaker
hero_image: ultimaker.jpg
hero_darken: true
layout: product
image: ultimaker.jpg
tags: imprimante 3D,3D printer,impression,PLA,FDM
features:
    - label: Précise et rapide
      icon: fa-plus has-text-success
    - label: Facile à utiliser
      icon: fa-plus has-text-success
    - label: Plateau chauffant
      icon: fa-plus has-text-success
    - label: Dimension du filament (2,85mm)
      icon: fa-minus has-text-danger
    - label: Materiaux souples difficiles à imprimer
      icon: fa-minus has-text-danger
rating: 1
todo: 10
product_toc: true
---
## Présentation :

Les imprimantes 3D Ultimaker 2, 2+ et 3 sont des imprimantes semi-pro développées et vendues par la société Ultimaker basée au Pay-bas[^1]. Les imprimantes Ultimaker utilisent les technologies d'impression 3D dites FDM : Fused deposition modeling. Cette technologie consiste à déposer de la matière couche par couche (en général un polymère tel que le PLA ou l'ABS) permettant de construire un modèle 3D solide de la piece désirée[^2].

## Possibilités et limitations :

### a. Possibilités

L'impression 3D permet d'imprimer des volumes 3D facilement et rapidement. 

### b. Limitations

#### Les temps d'impression

Même si les imprimantes 3d sont considérées comme étant des machines de "prototypage rapide", cela est à comparer avec les techniques et méthodes de productions traditionnelles. En effet, à cette echelle, l'impression 3D est plus rapide pour réaliser un prototype. Cependant, on obtient très vite des impressions de plusieurs heures (voir jours) si l'on ne fait pas attention aux différents réglages de sa machine et aux topologies de ses pièces. 

**Astuces :**

    - Vérifier règulierement dans votre logiciel de tranchage (Cura) le volume et le temps d'impression de vos pièces
    - Privilégiez des pieces petites/moyennes s'imprimant en 4h maximum
    - Reflechissez à des assemblages de pièces plutôt qu'à des pièces uniques
    - Prototypez des morceaux spécifiques et complexes de vos pièces plutôt que des pieces entières.

#### La précision d'impression

La définition des impressions selon les plans n'est pas infinie ni similaire. En effet, si la hauteur des couches peut être modifiée selon la précision et la finition souhaitées (entre 0.2 et 0.05mm en général), il n'en est pas de même pour la taille de la buse d'impression.
Celle-ci fait en général un diamètre de 0.4mm et ne peut que très legerement varier pendant l'impression. Ainsi, des détails seront plus facilement reproduits sur les cotés d'une impression plutôt que sur le dessus ou le dessous. 

**Astuces :**

    - Pensez dés le début de la conception de votre piece à comment celle-ci devra être orientée lors de l'impression
    - Testez la précision de certaines parties de vos pièces à part pour limiter les temps d'essais
    - N'oubliez pas que vous pouvez "reprendre" une pièce imprimée et en la poncant ou en la percant. 
    - Vous pouvez également corriger les imprecisions constantes des machines en rajoutant un offset sur certaines de vos cotations.

#### L' "Over-hang"

Le "porte-à-faux" ("Over-hang" en anglais) est aussi une limiation. Selon les machines, les possibilités sont différentes mais en règle général, un porte à faux de plus de 30° devient très difficile à imprimer.

## Materiaux utilisables :

Les imprimantes Ultimaker peuvent imprimer essentiellement grace à des filaments à base de polymères et d'un diamètre de 2.85mm. 

- [PLA](https://fr.wikipedia.org/wiki/Acide_polylactique) : Materiaux biodégradable et biosourcé, le PLA (Acide PolylActique) est le materiau le plus utilisé en impression 3D FDM. Attention, celui-ci se décompose dans l'eau et ne resiste pas bien au hautes temperatures.
- [ABS]()
- [PETG]()

## Logiciels :

- [Cura]() : Slicer permettant de transformer votre pièce en 3D en une succession de couches et de chemin d'outil pour l'imprimante
- [FreeCAD](../../pages/softs/freecad/freecad) : Logiciel de CAO 3D libre et Open Source

## Techniques & tutos :


## Notes :

[^1]: [Ultimaker](https://fr.wikipedia.org/wiki/Ultimaker)
[^2]: [Technologie FDM](https://fr.wikipedia.org/wiki/Dépôt_de_fil_fondu)
