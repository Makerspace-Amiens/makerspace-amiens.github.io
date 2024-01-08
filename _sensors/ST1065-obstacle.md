---
hide_hero: true
layout: component
image: 2021-09-15-08-59-00.png
component_toc: true

title: Module détecteur d'obstacle
subtitle: Module détecteur d'obstacle
description: Ce module équipé d'un émetteur et d'un récepteur infrarouge (IR) est basé sur un amplificateur NE555 et permet la détection d'obstacles sur une portée de 2 à 40 cm (réglable par deux potentiomètres).
tags: infrarouge,suiveur,ampli

features:
    - label: Alimentation -  3,3 ou 5 Vcc
    - label: Consommation - environ 20 mA
    - label: Angle de détection - 35°
    - label: Sortie - 4 broches (Gnd, +, S et EN)
    - label: Sortie digitale - état bas lors d'une détection
    - label: Leds d'indication de détection
    - label: Dimensions - 45 x 17 x 13 mm
      icon: fa-ruler

rating: 1
todo: 5
---
## Câblage  :

| Carte Microcontrôleur | Module |
|:---:|:---:|
| D9 |  DAT  |
|5 Vcc|  +  |
| GND |  -  |

## Exemple de programme :

L’exemple de code suivant, à copier dans l’IDE Arduino®, permet d’afficher un « 1 » lorsqu’aucun obstacle n’est détecté et un « 0 » en cas de détection.

``` c++

int count;
void setup () 
{
  Serial.begin (9600);
  pinMode (9, INPUT); // Sélection de la broche de sortie
}
void loop ()
{
  Serial.print ("Sensor: ");
  Serial.println (digitalRead(9)); // Affiche l'état de la sortie du capteur
  delay (500);
}

``` 

## Liens et ressources :

- [lien du kit complet](https://www.gotronic.fr/art-kit-de-modules-et-capteurs-st1065-29993.htm)