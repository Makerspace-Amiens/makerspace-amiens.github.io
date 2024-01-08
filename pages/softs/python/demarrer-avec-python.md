---
layout: page
title: Python
subtitle: Demarrer avec python
description: Programmation
tags: python
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hero_height: is-medium
---

*Document réalisé par Sébastien HERLANT pour l'option SIN I1 2023*

# Démarrer avec Python

Après avoir installé Python sur l'ordinateur, il est maintenant temps de découvrir l'interpréteur de commandes de ce langage. Les petits tests qui suivent, même s'ils paraissent anodins vont permettre de découvrir les premiers rudiments de syntaxe de ce langage. En effet, comme tout langage (de programmation ou pas), Python possède une syntaxe claire qu'il convient de respecter rigoureusement pour être compris.

Pour commencer il faut ouvrir l'interpréteur de commande (ou shell). 	

![](001.png)

A l'ouverture de l'interpréteur de commandes, un message d'accueil apparaît donnant quelques informations concernant la version de Python mise en route, l'architecture de l'ordinateur utilisée ainsi que les commandes à saisir pour obtenir davantage d'informations. 

On retrouve également les triples chevrons >>> qui indiquent que Python est prêt à recevoir votre première instruction. 

Cet interpréteur de commande va permettre de tester directement du code. On saisit une ligne d'instruction puis on appuie sur la touche ENTRÉE du clavier et Python nous répond. Puis on en saisit une deuxième, puis une troisième… 

Cet interpréteur de commandes est très utile pour comprendre les bases de Python et réaliser nos premiers petits programmes. Mais le principal inconvénient réside dans le fait ce qui est saisi n'est pas sauvegardé. 

Nous verrons plus tard comment sauvegarder son script mais pour l'heure, commençons par nous familiariser avec les commandes élémentaires de Python.


## Pour bien communiquer avec Python

**1 - Saisir la commande**

```python
premier test Python 
```
avec Python et taper ENTRÉE.

Python nous renvoie une erreur de syntaxe car il ne comprend pas cette instruction.

![](002.png)

**2 - Saisir la commande**

```python
"premier test Python" 
```
avec Python et taper ENTRÉE

Python nous renvoie le texte ce qui signifie que l'instruction est comprise.

![](003.png)

**3 - Saisir la commande**

```python
type(\_)**
```
et taper ENTRÉE. Python nous renvoie

```python
class 'str' 
```

![](004.png)

De la même manière que les mots d'une langue ont une nature (nom, adjectif, verbe, préposition …), Python a besoin de connaître la nature de l'instruction ou de l'expression qui lui est donnée pour la comprendre et éventuellement la réutiliser. En langage informatique on appelle cela le type.

Ainsi dans cet exemple, nous lui avons fourni une expression de type chaîne de caractères ou string en anglais. D'où la réponse donnée par Python lorsque nous lui demandons le type : **str**.

Python connaît une multitude de types. Il convient donc de respecter rigoureusement les symboles associés afin qu’il les reconnaisse. Par exemple, les symboles guillemets “ … ” permettent de créer une chaîne de caractères.

Seuls les nombres (entier et décimaux) sont reconnus sans être encadrés par des symboles.

4 - **Saisir un nombre entier**, taper ENTRÉE puis saisir type(\_) et taper de nouveau ENTRÉE.

``` python
7
type(\_)
```

Python nous renvoie le nombre 7 et le type **int** pour integer, nombre entier.

![](005.png) 

5 - **Saisir un nombre décimal**, taper ENTRÉE puis saisir type(\_) et taper de nouveau ENTRÉE (le séparateur décimal est le point et non la virgule).

``` python
5\.2
type(\_)
```

Python nous renvoie le nombre 5,2 et le type 'float' pour flottant, nombre à virgule flottante. 

![](006.png)

## Opérations courantes

1 - Saisir dans la console d'interprétation 5+3, taper ENTRÉE puis saisir type(\_) et taper de nouveau ENTRÉE. 

``` python
5 + 3
type(\_)
```

![](007.png)

Python calcule le résultat de la somme. S'agissant de la somme de deux nombres entiers, le résultat appartient au type 'int'. 

L'opération + fonctionne évidemment aussi avec les nombres entiers négatifs. L'utilisation de parenthèses pour séparer l'opérateur + du signe – n'est pas nécessaire pour Python même s'il est recommandé de l'utiliser pour plus de lisibilité. 

``` python
-5+-7
type(\_)
-5+(-7)
type(\_)
```

![](008.png)

2 - Saisir dans la console d'interprétation 3.11+2.09, taper ENTRÉE puis saisir type(\_) et taper de nouveau ENTRÉE.

``` python
3\.11+2.09
type(\_)
```

![](009.png)

Résultat surprenant ! Python calcule avec des nombres de type 'float' ce qui conduit à un résultat approximatif (on s'attendait normalement à obtenir 5,2).

Il convient donc, dès qu'on le peut, de travailler avec des nombres entiers plutôt qu'avec des nombres décimaux dans un programme.

3 - Les résultats restent les mêmes lorsqu'il s'agit d'une multiplication qui n'est autre qu'une addition ré-itérée :

``` python
8\*7
4\.7\*2.1
type(\_)
```

![](010.png)

C'est le symbole \* qui représente la multiplication.

4 - Saisir dans la console d'interprétation

``` python
3\*\*2
3\*\*3
3\*\*4
```

![](011.png)

Le symbole \*\* représente est l'opérateur de puissance.

5 - Saisir dans la console d'interprétation 

``` python
5+2\*3
(5+2)\*3
```

![](012.png)

On constate que la priorité des opérations est respectée.

6 - Saisir dans la console d'interprétation 

``` python
24/8
24/5
27/7
```

![](013.png)

Le symbole / représente la division décimale. Si le quotient est entier, Python renvoie 0 comme chiffre des dixièmes. Si le quotient est décimal, Python renvoie le nombre de décimales nécessaire pour obtenir sa valeur exacte. Si le quotient est non décimal, Python renverra une valeur approchée décimale contenant 16 chiffres. Quelle que soit le quotient demandé, Python renverra toujours une type 'float' (même pour 24/8 qui est entier).

7 - Saisir dans la console d'interprétation

``` python
47//9
47%9
```

![](014.png)

L'opérateur // renvoie le quotient de la division euclidienne. 

L'opérateur % renvoie le reste de la division euclidienne. 

Ces deux opérateurs renvoient des nombres de type 'int'. 

8 - Saisir dans la console d'interprétation a=4 (on affecte la valeur 4 à la variable a) puis a, puis id(a), puis type(a). 

``` python
a=4
a
id(a)
type(a)
```

![](015.png)

Une fois la valeur 4 affectée à la variable a, cette affectation reste valable jusqu'au redémarrage de la console sauf si l'affectation d'une autre valeur à cette même variable a vient écraser la précédente.

Une variable possède un identifiant (fonction id()) correspondant à un nombre entier à 10 chiffres indiquant l'adresse mémoire avec laquelle la variable est stockée.

Une variable possède également un type : celui de la valeur qui lui est affectée.

Pour connaître davantage de détails sur la fonction id() (resp. toute autre fonction), saisir help(“id”) (resp. help(“nom\_de\_la\_fonction”)).

``` python
help("id")
```

9 - Saisir dans la console d'interprétation 

``` python
a,b=11,12
a
b
```

![](016.png)

Cette syntaxe permet l'affectation simultanée de plusieurs valeurs sur plusieurs variables. On appelle cela l'affectation parallèle.

10 - Saisir dans la console d'interprétation 

``` python
sin(0)
```

On s'attendait à autre chose qu'un message d'erreur de la part de Python.

En réalité, Python ne connaît pas par défaut les fonctions mathématiques. Il a donc besoins de l'import préalable d'un paquet additionnel de fonctions appelé module.

Pour importer la fonction sinus, il faut saisir préalablement from math import sin.

``` python
from math import sin
```

Il est évidemment possible d'importer l'ensemble des fonctions mathématiques incluses dans le paquet maths. Pour cela il faut saisir from math import \* (l'étoile signifie « universel »).

``` python
from math import \*
```

Pour connaître toutes les fonctions incluses dans le paquet math, saisir help(“math”).

![](017.png)

11 - Le symbole dièse (#) permet de commencer un commentaire dans le script c'est-à-dire une succession de caractères qui ne seront pas interprétés par Python.

``` python
from math import \*
sqrt(2)  #La fonction sqrt donne une valeur approchée de la racine carrée positive.
```

Le commentaire apparaît en rouge dès lors que le symbole # est inscrit.

![](018.png)

12 - Pour terminer, écrivons notre premier petit programme.

Nous ne dérogerons pas à la tradition informatique qui consiste à commencer l’apprentissage d’un langage par l’affichage d’une salutation.

En python, ce sera très simple :

``` python
print("Hello world !") #Ceci est mon premier programme !
```

![](019.png)

Est-il possible de modifier la ligne précédente et de l’exécuter à nouveau, pour obtenir l’afﬁchage "Bonjour tout le monde" ?

C’est le problème de la console : on devrait procéder par copier/coller, car dans cette fenêtre, seule la dernière ligne est interprétée par Python. On peut toutefois récupérer et modifier les lignes déjà entrées par les raccourcis Alt+P (précédent) et Alt+N (suivant) permettant de naviguer dans l’historique des commandes. Mais cette méthode s'avère très peu pratique, dès que l’on souhaite écrire un script de plus de deux ou trois lignes.

On préfère alors utiliser un éditeur de texte à l’intérieur duquel on peut naviguer et faire toutes les modifications souhaitées.

## L'éditeur IDLE

Ouvrir l'interpréteur de commande (ou shell).

Cliquer ensuite sur File puis sur New File. Une fenêtre vierge s'ouvre.

saisir la commande `print(''Hello world !'')` et enregistrer ce fichier dans un répertoire à l'aide du menu File – Save as…

![](020.png)

Nommer ce fichier salutation.py (il faut ajouter manuellement l’extension .py) et l’exécuter avec la commande Run Module du menu Run. On peut également appuyer sur la touche F5. Le résultat apparaît à l’écran dans la fenêtre de la console. Si on clique dans la fenêtre de l’éditeur et si on appuie à nouveau sur F5, la console fait un Restart et exécute à nouveau le programme.

![](021.png)

Fermer toutes les fenêtres Python et à l’aide de l’explorateur, retrouver le ﬁchier salutation.py, puis, à l’aide d’un clic droit, faire Edit with IDLE. Seule la fenêtre de l’éditeur intégré s’ouvre, avec le contenu du script sauvegardé. En faisant Run Module, la fenêtre de la console s’ouvre et le script s’exécute.

## Ce qu'il faut retenir

1. Il existe deux manière de travailler avec Python : 

   a. en écrivant les instructions sur l'**interpréteur de commande (ou shell)**. L'inconvénient réside dans le fait que les lignes de commandes ne sont pas enregistrées et donc non modifiables dans le temps. Seule la dernière instruction est exécutée.
   
   b. en écrivant dans **un environnement de développement intégré**. Le script peut alors être sauvegardé au format .py. Il est alors modifiable et exécutable à souhait.

2. Python a besoin de connaître la nature de l'instruction ou de l'expression qui lui est donnée pour la comprendre et éventuellement la réutiliser. En langage informatique on appelle cela **le type**. Chaque commande est dont liée à un ou plusieurs types donnés qu'il convient de bien respecter (int pour nombre entier ; float pour nombre décimal ; str pour chaîne de caractères ...) 
3. Python connaît par défaut la plupart des opérateurs courants utilisés en mathématiques. En voici une liste : 

|**Symbole**|**Effet**|**Instruction**|**Résultat**|
| :-: | :-: | :-: | :-: |
|+|Addition|2+2|4|
|-|Soustraction|8-5|3|
|\*|Multiplication|7\*5|35|
|/|Division décimale|34/8|4,25|
|\*\*|Puissance|3\*\*4|81|
|//|Quotion de la division euclidienne|13//4|3|
|%|Reste de la division euclidienne|13%4|1|

4 - Pour des fonctions mathématiques plus complexes, il est nécessaire d'**importer un paquet additionnel de fonctions** en saisissant : 

``` python
from math import \*
```

5 - Le principe reste le même lorsqu'on a besoin d'utiliser des fonctions spécialisées : importer un module faisant ou non partie intégrante de Python (le module math fait partie intégrante de Python).

