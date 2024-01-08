---
hide_hero: true
layout: component
image: 2021-09-01-17-30-35.png
component_toc: true

title: Module à micro électret
subtitle: Module micro avec amplificateur
description: Ces capteurs sonores didactiques sont constitués d'un micro et d'un amplificateur. Ce capteur délivre un signal analogique et un signal digital en fonction de l'intensité sonore reçue.
tags: micro,module,capteur

features:
    - label: Alimentation -  3,3 ou 5 Vcc
    - label: 3 broches (Vcc, GND et D0 et A0)
    - label: Dimensions - 36 x 15 x 13 mm
      icon: fa-ruler

rating: 1
todo: 5
---

## Câblage  :

| Carte Microcontrôleur | Module joystick |
|:---:|:---:|
| GND | GND |
|  7  |  S  |
| A0  | A0  |
|5 Vcc|  +  |
| GND |  -  |

## Exemple de programme :

### Exemple 1

L’exemple de code suivant, à copier dans l’IDE Arduino®, allume la Led 13 intégrée à la carte Uno lorsque le capteur détecte un son assez fort. La sensibilité est réglable via le potentiomètre du module.


``` c++
int Led = 13 ;
int buttonpin = 7;
int val = 0;
void setup ()
{
  pinMode (Led, OUTPUT) ;
  pinMode (buttonpin, INPUT) ;
}
void loop ()
{
  val = digitalRead(buttonpin);
  if (val == HIGH)
  {
    digitalWrite (Led, HIGH);
  }
  else
  {
    digitalWrite (Led, LOW);
  }
}
``` 

### Exemple 2

Ce second programme permet la lecture de la sortie analogique du module (A0). Cette lecture se fait dans le moniteur série de l’IDE Arduino®.

``` c++
int sensorPin = A0;
int sensorValue = analogRead(A0);
void setup ()
{
  Serial.begin (9600);
}
void loop ()
{
  sensorValue = analogRead (sensorPin);
  delay (500);
  Serial.println (sensorValue, DEC);
}
``` 

## Liens et ressources :

- [lien du kit complet](https://www.gotronic.fr/art-kit-de-modules-et-capteurs-st1065-29993.htm)