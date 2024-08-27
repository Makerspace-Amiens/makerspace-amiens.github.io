---
layout: page
title: Aide à la documentation
subtitle: Cheatsheet de la documentation sur le Hub
description: Ressources et liens utilisés pour la construction du hub
tags: bulma,jekyll,markdown,front matter
menubar_toc: true
menubar: main_menu
toc_title: INDEX
show_sidebar: false
hide_hero: true
show_edit: true
---

# Aide à la documentation

## 1. Ressources générales

## 1.1 Thème et framework

Le thème du site est basé sur le thème "[Bulma clean Theme](https://github.com/chrisrhymes/bulma-clean-theme)" modifié pour s'ajuster aux besoins du hub. Pour une documentation complète du thème, vous pouvez consulter : 
- [Demo du thème **Bulma Clean Theme**](http://www.csrhymes.com/bulma-clean-theme/)
- [Git **Bulma Clean Theme**](https://github.com/chrisrhymes/bulma-clean-theme/)

Pour la documentation liée à Bulma : [Bulma.io](http://bulma.io/documentation/)

Le processeur Markdown utilisé est **"Kramdowm"**. Vous pouvez en retrouver une documentation complète ici : [Kramdown quick ref](https://kramdown.gettalong.org/quickref.html).

Si la génération locale ne fonctionne pas correctement avec WSL ou si la regénération ne se fait pas, vous ouvez utiliser cette commande :
```bundle exec jekyll serve --force_polling --livereload```

Pour une utilisation avec l'espace en ligne "CodeSpace" de GitHub, il faudra mettre en place certains outils avant de générer le site :

- Installer rvm et la version de ruby 2.7.0 utilisé par le site :
```rvm install "ruby-2.7.0"```
- Spécifier l'utilisaiton de la version de Ruby :
```rvm use 2.7.0```
- Installer les gemmes spécifiées dans le fichier "Gemfile" du projet :
```bundle install```
- Vérifier les mises à jour des gemmes :
```bundle update```
- Générer en local le site :
```bundle exec jekyll serve```


## 1.2 Utilitaire de recherche

Pour l'utilitaire de recherche, celui-ci est intégré au site en utilisant [Jekyll instant search](https://blog.webjeda.com/instant-jekyll-search/). Celui-ci est simple et léger mais ne se base que sur les infos fournis dans le **Front Matter** de chaque page. 
En effet, le fonctionnement de [Jekyll instant search](https://blog.webjeda.com/instant-jekyll-search/) est le suivant :

* L'ensemble des datas du Front Matter sont enregistrées dans un fichier Json
* Un script JS scrute ce fichier JSon et renvois les liens vers les pages ou ressources en question

Attention donc à bien renseigner l'ensemble des informations dans le **Front Matter** de chaque page.

## 2. Spécificités du hub

### 2.1 Images

---

#### a. Image simple
`![](image001.png "Image Title")`
![](image001.png "Image Title")

---

#### b. Image avec ombre
`![](image001.png "Image Title"){: .shadow}`
![](image001.png "Image Title"){: .shadow}

---

#### c. Image derrière un lien
`{``% include image-hover.html text="Texte" link="lien d'image" %}`
{% include image-hover.html text="Passez votre souris sur le lien" link="image001.png" %}

---

#### d. Etape de documentation

Permet de générer rapidement et facilement des étapes de documentation avec une image et un texte en markdown. Le résultat est responsive et les étapes peuvent se succéder

`{``% include step-tuto.html 
content="##### Etape 1 : 
Voici une étape de documentation. *Compatible* avec **Markdown**. " 
image="image001.png" %}`

{% include step-tuto.html 
content="##### Etape 1 : 
Voici une étape de documentation. *Compatible* avec **Markdown**. " 
image="image001.png" %}

`{``% include step-tuto.html 
content="##### Etape 1 : 
Voici la **première** étape du tutoriel." 
image="image002.png" %}`

`{``% include step-tuto.html 
content="##### Etape 2 : 
Voici la *seconde* étape du tutoriel." 
image="image003.png" %}`

**Résultat :**

{% include step-tuto.html 
content="##### Etape 1 : 
Voici la **première** étape du tutoriel." 
image="image002.png" %}

{% include step-tuto.html 
content="##### Etape 2 : 
Voici la *seconde* étape du tutoriel." 
image="image003.png" %}

Il est aussi possible d'inclure une vidéo :

`{``% include step-tuto.html 
content="Il est également possible avec les mêmes outils de recycler d'autres matériaux par la suite et ainsi compléter le champs d'usage du projet. Comme ici dans cette vidéo où le recyclage des masques, utilisés et jetés quotidiennement par l'ensemble des personnes fréquentant l'école, devient possible et permet d'être injecté pour la création de nouveaux produits." 
video="YVsd3XBJ6i4" %}`

{% include step-tuto.html 
content="Il est également possible avec les mêmes outils de recycler d'autres matériaux par la suite et ainsi compléter le champs d'usage du projet. Comme ici dans cette vidéo où le recyclage des masques, utilisés et jetés quotidiennement par l'ensemble des personnes fréquentant l'école, devient possible et permet d'être injecté pour la création de nouveaux produits." 
video="YVsd3XBJ6i4" %}


#### e. Inclure plusieurs images en ligne

Il est parfois necessaire d'inclure plusieurs images sur une seule ligne afin de gagner de la palce ou en clarté. Pour cela vous pouvez utiliser le snip suivant : 

`{``% include image-row.html 
image_1 = "/img/posts-images/2022-11-22-17-37-51.png"
image_2 = "/img/posts-images/2022-11-22-17-47-01.png"
image_3 = "/img/posts-images/2022-11-22-17-48-51.png"
image_4 = "/img/posts-images/2022-11-22-17-38-15.png"
%}`

{% include image-row.html 
image_1 = "/img/posts-images/2022-11-22-17-37-51.png"
image_2 = "/img/posts-images/2022-11-22-17-47-01.png"
image_3 = "/img/posts-images/2022-11-22-17-48-51.png"
image_4 = "/img/posts-images/2022-11-22-17-38-15.png"
%}

Vous pouvez aller jusque 4 images en ligne maximum. Si vous en souhaitez moins (2 ou 3) il vous suffit de ne pas mettre d'image 3 ou 4.

Resultat avec deux images : 

`{``% include image-row.html 
image_1 = "/img/posts-images/2022-11-22-17-37-51.png"
image_2 = "/img/posts-images/2022-11-22-17-47-01.png"
%}`

{% include image-row.html 
image_1 = "/img/posts-images/2022-11-22-17-37-51.png"
image_2 = "/img/posts-images/2022-11-22-17-47-01.png"
%}

### 2.2 Message

Rajoute les "messages" Bulma au theme : 

`{``% include message.html 
title="Attention"
message="Le PLA n’est pas autant réutilisable que les PE. Pour conserver un maximum ses propriétés, et espérer refaire du finalement d’impression, il faudrait pouvoir mélanger du plastique usagé avec du plastique neuf à chaque recyclage.  
Pour éviter cela, le choix de créer des bobines de filament est mis de côté pour le moment, et l’injection plastique sera privilégiée" 
status="is-warning" 
dismissable="false"
icon="fas fa-exclamation-triangle" %}`

{% include message.html 
title="Attention"
message="Le PLA n’est pas autant réutilisable que les PE. Pour conserver un maximum ses propriétés, et espérer refaire du finalement d’impression, il faudrait pouvoir mélanger du plastique usagé avec du plastique neuf à chaque recyclage.  
Pour éviter cela, le choix de créer des bobines de filament est mis de côté pour le moment, et l’injection plastique sera privilégiée" 
status="is-warning" 
dismissable="false"
icon="fas fa-exclamation-triangle" %}

### 2.3 Intégrer un modèle 3D

Pour intégrer un modèle 3D, on va utiliser un fichier *.gltf* ou *.glb*. Pour cela, la première chose à faire est de récupérer un fichier au bon format. Certains logiciels permettent l'export vers ces format simplement.

Si ce n'est pas le cas, il est conseiller de passer par un format intermédiaire (un *.obj* par exemple) puis de l'ouvrir dans le logiciel [CAD Assistant](https://www.opencascade.com/products/cad-assistant/). Le logiciel vous permettra de faire les dernieres modifications sur votre modèle (suppression, rendu, couleurs, materiaux,etc...) avant de l'exporter dans le bon format *.gltf* ou *.glb*.

Une fois ceci fait, rendez-vous sur le site [modelviewer]/(https://modelviewer.dev/editor/) et chargez votre fichier. Faites les ajouts nécessaires puis copiez-collez le snippet dans votre page.

Ne pas oublier de mettre votre modèle au format *.gltf* ou *.glb* sur le site de la même manière que pour une image.

Modifier le ***_main.scss*** pour changer l'affichage du model-viewer.

Pour inclure un fichier 3D rapidement sans passer par "model-viewer" et sans personnalisation, vous pouvez utiliser ce code :
`{``% include 3d-model.html 
model = "bloc.glb"
%}`

{% include 3d-model.html 
model = "bloc.glb"
%}

## 3. Plugins

### 3.1 Spaceship

![](image004.png)

[Spaceship](https://github.com/jeffreytse/jekyll-spaceship#4-mermaid-usage) est un plugin jekyll qui incorpore un nombre important d'outils permettant l'écriture de documents avec des fonctionnalités augmentées. 

Les outils sont nombreux et intègre par exemple :

- Un module de notation Mathématique
- Des tableaux augmentés
- Des outils de graph ([mermaid](https://mermaid-js.github.io/mermaid/), PlantUML, etc...)
- De l'intégration poussé de médias
- etc ...

Vous trouverez une liste des fonctionnalités complète sur le repo associé : [jekyll-Spaceship](https://github.com/jeffreytse/jekyll-spaceship#4-mermaid-usage)

Quelques exemples :

**Tableaux :**

| :    Easy Multiline   : |||
| :----- | :----- | :------ |
| Apple  | Banana | Orange  \
| Apple  | Banana | Orange  \
| Apple  | Banana | Orange
| Apple  | Banana | Orange  \
| Apple  | Banana | Orange  |
| Apple  | Banana | Orange  |||

|              Stage | Direct Products | ATP Yields |
| -----------------: | --------------: | ---------: |
|         Glycolysis |          2 ATP              ||
| ^^                 |          2 NADH |   3--5 ATP |
| Pyruvaye oxidation |          2 NADH |      5 ATP |
|  Citric acid cycle |          2 ATP              ||
| ^^                 |          6 NADH |     15 ATP |
| ^^                 |          2 FADH |      3 ATP |
|                               30--32 ATP        |||

**Mermaid :**

```mermaid!
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

```

**Mathématiques :**

$ \int\_a^b f(x)\,dx. $

**PlanUML :**

```plantuml!
Bob -> Alice : hello world
```

### 3.2 Pdf Embed

Le plugin permet d'afficher directement un lecteur de pdf (local ou externe) dans une page en markdown. Plus d'infos sur le repo du plugin : [https://github.com/MihajloNesic/jekyll-pdf-embed](https://github.com/MihajloNesic/jekyll-pdf-embed).

**Exemple :**

`{``% pdf "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" %}`

{% pdf "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" %}

On peut aussi afficher des présentations au format .ppt ou .pptx

`{``% pdf "http://img.labnol.org/di/PowerPoint.ppt" %}`

{% pdf "http://img.labnol.org/di/PowerPoint.ppt" %}

### 3.3 LinkPreview

[LinkPreview](https://github.com/ysk24ok/jekyll-linkpreview) est une addons permettant d'afficher une prévisualisation d'un lien en utilisant les métadonnées. 

Utilisation simple : 
`{``% linkpreview "https://www.unilasalle.fr" %}`

**Attention :** LinkPreview est utilisé sur le site pour générer le Board des projets. Il n'est donc pas utilisable directement aujourd'hui dans n'importe qu'elle page. 

Si le site n'a pas de metadata OpenGraph enregistrées : 
<div class="card">
    {% linkpreview "https://www.unilasalle.fr" %}
</div>
Si le site a des metadata OpenGraph enregistrées : 

<div class="card">
    {% linkpreview "https://github.com/LesKaribous/Karibous-2023-Hardware" %}
</div>

### 3.4 Jekyll remote Include

[Jekyll-remote-include](https://github.com/netrics/jekyll-remote-include) permet d'inclure une page markdown externe directement dans un page du site. Cela permet de rendre un readme d'un autre repo projet par exemple.

Plus d'infos ici : [Jekyll-remote-include](https://github.com/netrics/jekyll-remote-include)
Afin d'utiliser au mieux le plugin, la branch "context-variables" est utilisé depuis le fork de [UriShX](https://github.com/UriShX/jekyll-remote-include/tree/context-variables). La branch de ce fork permet d'inclure des variables liquid dans le tag liquid.

Pour l'utiliser : 

`{``% remote_include https://raw.githubusercontent.com/jekyll/jekyll/master/README.markdown %}`

La page est ensuite rendue avec les standards du site.

**Attention :** Bien utiliser la version raw du fichier markdown que vous souhaitez inclure si vous utiliser un markdown stocké sur un repo git. Sur GitLab, pour trouver le lien vous pouvez cliquer sur **OpenRaw** en haut à drotie du fichier :

![](2022-12-21-10-33-31.png)


## 4. Doc standard de Jekyll pages : 

![Build Status](https://gitlab.com/pages/jekyll/badges/master/pipeline.svg)
![Jekyll Version](https://img.shields.io/gem/v/jekyll.svg)

---

Documentation site of Unilasalle Amiens
Based on [Jekyll] website using GitLab Pages.

[Learn more about GitLab Pages](https://pages.gitlab.io) or read the the [official GitLab Pages documentation](https://docs.gitlab.com/ce/user/project/pages/).

---

### Installation
Even if this documentation page is hosted on gitlab, it is easier to use a local copy of the project to modify the website.
There is several way on running Jekyll locally depending on the platform you're using.

#### Windows
You can both use Jekyll for windows of install the WSL to run the classical linux version of Jekyll
Personnaly I prefere using the WSL since it way more convenient to install additionnal gem dependecies.

---

##### Get Jekyll for windows with (WSL)

<details>
<summary><b>Why WSL</b></summary>

>Th WSL is a convenient way to take advantage of Linux without setupping a dual boot on your local machine.
The WSL is a Windows10 features allowing you to run simultaneously with shared ressources and data (This is not a VM)
Using WSL with Visual studio code is a pretty convenient way to maximize your productivity if you need both Linux and Windows.

</details>

##### Install Ubuntu
To get Ubuntu and Windows working together follow these steps :
1. In windows startmenu type "feature" to launch the windows feature manager [[Help]](https://docs.microsoft.com/fr-fr/windows/wsl/install-win10)
2. Select the Windows subsystem linux & click apply
3. Open Microsoft store and install Ubuntu (Restart may be required) [[Link]](https://www.microsoft.com/fr-fr/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)
4. Start Ubuntu and create your login and password

###### Setup Jekyll
6. Udpate package list using : 
```
sudo apt-get update -y && sudo apt-get upgrade -y
```
7. Install Ruby using : 
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```
8. Change gem installation path using these command : 

```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

* Finnaly install jekyll bundler :

```
gem install jekyll bundler
```

---

##### Get Jekyll for windows without (WSL) : **Not recommended**
1. Download and run the [Ruby installer](https://rubyinstaller.org)
2. Mind to add Ruby to your ```PATH```
3. Install Jekyll and Bundler using : ```gem install jekyll bundler```
4. Check if jekyll is installed :  ```jekyll -v```

---

#### Cloning project

You can clone this repo using [Git](https://git-scm.com/downloads) by typing this command :
```
git clone https://gitlab.com/makerspace-unilasalle/campus-amiens/hub-amiens.git
```
Fill in your credentials and wait for it !



#### Running the website

To start the local webserver run this command from the project root: 
```
bundle exec jekyll serve
```


[Jekyll]: http://jekyllrb.com/

[documentation]: https://jekyllrb.com/docs/home/
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages


---
### Bulma Clean Theme

This website use the Bulma Clean theme. The theme is available as a ruby gem or can be used with GitHub pages. 

[![Gem Version](https://badge.fury.io/rb/bulma-clean-theme.svg)](https://badge.fury.io/rb/bulma-clean-theme)
![Gem](https://img.shields.io/gem/dt/bulma-clean-theme.svg)

#### Ruby Gem

The ruby gem is available on the Ruby Gems website at the following location. [https://rubygems.org/gems/bulma-clean-theme](https://rubygems.org/gems/bulma-clean-theme).

#### GitHub Pages

The theme can be used with GitHub Pages by setting the `remote_theme` in your Jekyll sites `_config.yml`

```yml
remote_theme: chrisrhymes/bulma-clean-theme
```

#### Instructions

For full instructions, please see the Readme at the GitHub repo:
[https://github.com/chrisrhymes/bulma-clean-theme/blob/master/README.md](https://github.com/chrisrhymes/bulma-clean-theme/blob/master/README.md)

#### Page Layouts

The demo site showcases the available page layout options.

* Page With Sidebar
* Page Without Sidebar
* Page With Menubar
* Page With Tabs
* Page Without Footer
* Page Without Hero
* Page With Contents
* Landing Page With Callouts
* Sponsors Page
* Image Gallery
* Recipe Page
* Blog
* Post