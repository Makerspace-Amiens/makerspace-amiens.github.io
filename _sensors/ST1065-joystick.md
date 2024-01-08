---
hide_hero: true
layout: component
image: 2021-09-01-16-47-35.png
component_toc: true

title: Module joystick
subtitle: Module joystick analogique avec bouton-poussoir
description: Ce module joystick comporte deux sorties analogiques pour les axes X et Y et une sortie digitale pour le bouton poussoir Z.
tags: joystick,analogique,commande de position

features:
    - label: Alimentation - 5 VCC
    - label: 2 sorties analogiques pour les axes X et Y
    - label: 1 sortie digitale pour le bouton-poussoir Z
    - label: Tension de sortie - entre 0 et 5 VCC
    - label: Dimensions - 37 x 25 x 32 mm
      icon: fa-ruler

rating: 1
todo: 20
---

## Câblage  :

| Carte Microcontrôleur | Module joystick |
|:---:|:---:|
|GND|GND|
|+5V|+5V|
|A0|Vrx|
|A1|VRy|
|7|SW|

## Exemple de programme :

L’exemple de code suivant, à copier dans l’IDE Arduino, permet d’afficher la tension analogique des
axes X et Y sur le port série. Cette tension varie en fonction de la position du joystick.

L'état du bouton est également affiché.

``` c++
int axeX = A0; // signal de l'axe X sur entrée A0
int axeY = A1; // signal de l'axe Y sur entrée A1
int BP7 = 7; // bouton-poussoir en broche 7
float X, Y; // valeur des axes X et Y en Volt
bool bouton; // valeur du bouton (poussé ou non)
void setup ()
{
  pinMode (axeX, INPUT); // définition de A0 comme une entrée
  pinMode (axeY, INPUT); // définition de A1 comme une entrée
  pinMode (BP7, INPUT); // définition de la broche 7 comme une entrée
  digitalWrite(BP7, HIGH); // Activation de la résistance de Pull-Up
  Serial.begin (9600);
}
void loop ()
{
  X = analogRead (axeX) * (5.0 / 1023.0);
  Y = analogRead (axeY) * (5.0 / 1023.0);
  bouton = digitalRead (BP7);
  Serial.print ("Axe X:");
  Serial.print (X, 4);
  Serial.print ("V, ");
  Serial.print ("Axe Y:");
  Serial.print (Y, 4);
  Serial.print ("V, ");
  Serial.print ("Bouton:");

  if (bouton==1)
  {
    Serial.println (" Aucune pression sur le bouton poussoir ");
  }
  else
  {
    Serial.println (" Bouton-poussoir actif ");
  }
  delay (500);
}
``` 

## Liens et ressources :

- [lien du kit complet](https://www.gotronic.fr/art-kit-de-modules-et-capteurs-st1065-29993.htm)
