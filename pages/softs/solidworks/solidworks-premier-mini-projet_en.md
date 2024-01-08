
## Objectives

Now that you know some basics of manipulating 3D modeling software, it's interesting to design a small functional project on your own.

For this, we will model the phone holder below. Its realization will not be guided step-by-step, but we will give you some information to successfully complete this first mini project.

![Alt text](SLDWORKS_20230823_174336.png)

{% include 3d-model.html model = "/img/3d/SupportTelephone.glb" %}

## General Description of the Design

{% include step-tuto.html 
greyBackground = false
title="1 - Design Tree"
content="Here you will find the design tree of the final part.

As you can see, the part is made in three sketches that we will detail later, as well as 2 boss operations and one material removal operation.

The fillet operations finalize the part.

A new operation in this design is the **Shell** creation operation, which we will detail later. ![Alt text](SLDWORKS_20230823_175259.png)
" 
image="SLDWORKS_20230823_175024.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Main Boss"
content="To create the main boss, you will need to create a 60mm diameter circle.

![Alt text](SLDWORKS_20230823_175557.png)

The boss will also have **a depth of 60mm**.
" 
image="SLDWORKS_20230823_175432.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Creating the Feet"
content="To create the feet's boss, you will need to create the sketch below in the same plane as the main boss.

![Alt text](SLDWORKS_20230823_175827.png)

For this, you will use the **3-Point Rectangle** tool. Don't forget to use construction lines ![Alt text](20230823_180030.png) and geometric relations in the left panel.

![Alt text](20230823_175852.png)

The boss will also have **a depth of 60mm**.
" 
image="SLDWORKS_20230823_175749.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Creating the Opening for the Phone"
content="To create the material removal for the phone, you will need to create the sketch below, still in the same plane as the main boss.

![Alt text](SLDWORKS_20230823_180331.png)

For this, you will use, as in the previous operation, the **3-Point Rectangle** tool. Don't forget to use construction lines ![Alt text](20230823_180030.png) and geometric relations in the left panel.

You will make a material removal **Through All**.
" 
image="SLDWORKS_20230823_180213.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Creating the Central Opening"
content="To create the central opening of the part, we could create an offset of the outer contour. But to simplify the design, we will work with the **Shell** tool. This operation allows you to hollow out a part by leaving open the faces you select and creating thin walls.

For this, click on the **Shell** button ![Alt text](SLDWORKS_20230823_180819.png) in the upper banner. Then select the two opposite faces of the part:

![Alt text](SLDWORKS_20230823_180854.png)

Indicate a dimension of 3mm for the shell thickness and validate.

![Alt text](SLDWORKS_20230823_181021.png)
" 
image="SLDWORKS_20230823_181052.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Creating the Fillets"
content="The last operation now consists of creating the fillets on each edge as shown in the view below. You can select all the edges in one single operation.

The fillets will all have a radius of 2mm.

![Alt text](SLDWORKS_20230823_181342.png)
" 
image="SLDWORKS_20230823_181359.png" %}

## 3D Printing of the Part

With the project completed, you can now start printing the model.

{% include step-tuto.html 
greyBackground = false
title="1 - Saving in 3mf Format"
content="Go to the **Save As** menu and select the ***3mf** file format. Save the file to a USB drive so you can take it to the MakerSpace printing PC.

![Alt text](SLDWORKS_20230823_181622.png)
"
image="20230823_181809.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Opening the File"
content="Open the Cura software ![](20230823_182215.png) then open your **3mf** format file by going to **File > Open File(s)**

![Alt text](UltiMaker-Cura_20230823_182245.png)

Select the model and using the movement and rotation tools, position the file in the center of the platform.
![Alt text](UltiMaker-Cura_20230823_182606.gif)
"
image="20230823_181809.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Slicing"
content="Check that the machine and selected settings are correct (see below), then click on **Slice** at the bottom right. ![Alt text](UltiMaker-Cura_20230823_182901.png)

![Alt text](UltiMaker-Cura_20230823_182712.png)

Once the slicing operation is finished, you will see an estimated printing time at the bottom right:

![Alt text](UltiMaker-Cura_20230823_182943.png)
"
image="UltiMaker-Cura_20230823_183033.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Verification"
content="In the upper banner, click on the **Preview** tab.

![Alt text](UltiMaker-Cura_20230823_183117.png)

You will then have access to a view representing all the layers and manufacturing operations of the part generated by the software. You can navigate through the layers using the right scrolling, or simulate the fabrication of a layer using the bottom scrolling.

![Alt text](UltiMaker-Cura_20230823_183422.gif)
"
image="UltiMaker-Cura_20230823_183456.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Saving"
content="All that's left is to save the machine code generated by the software to send it to the print server. For this, simply click on **Save to Disk** at the bottom right and save the file in ***.gcode** format.

![Alt text](UltiMaker-Cura_20230823_183709.png)
"
image="UltiMaker-Cura_20230823_183846.png" %}
