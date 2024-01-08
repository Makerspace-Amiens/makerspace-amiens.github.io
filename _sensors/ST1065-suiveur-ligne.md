---
hide_hero: true
layout: component
image: 2021-09-01-17-40-10.png
component_toc: true

title: Module suiveur de ligne
subtitle: Module pour le suivi de ligne
description: Module suiveur de ligne basé sur un réflecteur optique et un amplificateur. Le seuil de déclenchement du signal digital est réglable via un potentiomètre ajustable.
tags: infrarouge,suiveur,ampli

features:
    - label: Alimentation -  3,3 ou 5 Vcc
    - label: 3 broches (Vcc, GND et D0 et A0)
    - label: Consommation - 20 mA sous 5 V
    - label: Etat bas   - ligne noire
    - label: Etat haut  - ligne blanche
    - label: Dimensions - 42 x 11 x 12 mm
      icon: fa-ruler

rating: 1
todo: 5
---
## Câblage  :

| Carte Microcontrôleur | Module joystick |
|:---:|:---:|
| 3 |  S  |
|5 Vcc|  +  |
| GND |  -  |

## Exemple de programme :

L’exemple de code suivant, à copier dans l’IDE Arduino, fait allumer la Led 13 intégrée à la carte Uno lorsque le module détecte une ligne noire.

``` c++

int Led = 13;
int buttonpin = 3;
int val;
void setup()
{ 
  pinMode(Led, OUTPUT);
  pinMode(buttonpin, INPUT);
}
void loop()
{
  val = digitalRead(buttonpin);
  if (val == HIGH)
  {
    digitalWrite(Led, LOW);
  }
  else 
  {
    digitalWrite(Led, HIGH);
  }
}

``` 

## Liens et ressources :

- [lien du kit complet](https://www.gotronic.fr/art-kit-de-modules-et-capteurs-st1065-29993.htm)