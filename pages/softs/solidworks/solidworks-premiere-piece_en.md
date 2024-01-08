
## **Aim of the project**

{% include 3d-model.html model = "/img/3d/TutoSldw.glb" %}

The aim of this tutorial is to discover the basic functions of SolidWorks by step-by-step creating the part shown above. All the functions used are not exhaustively explained, so feel free to test some options yourself.

## **Creating Your Project**

{% include step-tuto.html 
greyBackground = true
title="STEP 1"
content="At the launch of SolidWorks and on the Start Page, click on **Welcome to SolidWorks** and then on Part to create a new single part design project.

![Alt text](SLDWORKS_mWB6UfvzKd.png)
![](2022-09-09-09-36-45.png)
" 
image="O9A0sQ0T5a.png" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 2"
content="Verify that the units are set to **MMGS (millimeter, gram, second)**, then click on **OK**.

![Alt text](SLDWORKS_MdxG64dxv5.png)
" 
image="SLDWORKS_REg0FpPzp3.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 3"
content="For this first part, we will primarily use the tools available in the **Part** workshop. 

In the case of an assembly, you will use the **Assembly** workshop (not covered by this first tutorial)." 
image="SLDWORKS_gj7mVhyNYl.png" %}

## **Settings**

To enhance the design experience on SolidWorks, here are some small setting tips that you can implement.

{% include step-tuto.html 
greyBackground = true
title="Access Settings"
content="Access the settings dialog box by clicking on the **Options** icon

![Alt text](SLDWORKS_GOBJMups99.png)" 
image="SLDWORKS_DyqkpZIkFg.png" %}

{% include step-tuto.html 
greyBackground = true
title="Modify Sketch Options"
content="In the **Sketch** options tab, make sure the following elements are checked:
- Automatic view rotation in the direction normal to the plane
- Use fully constrained sketches
" 
image="SLDWORKS_6k4SbXfMNo.png" %}

{% include step-tuto.html 
greyBackground = true
title="Modify Performance Options"
content="In the **Performance** options tab, disable the **High Quality** options in the transparency section." 
image="SLDWORKS_QX0bLnQeIO.png" %}

## **Overview of the Window**

![Alt text](SLDWORKS_gj7mVhyNYl.png)

{% include step-tuto.html 
greyBackground = true
title="General View"
content="The design window is divided into 3 areas:
- **Area 1:** 3D/2D view of the part 
- **Area 2:** Function and part tree
- **Area 3:** Toolbar
"
image="sldwnum.png" %}

{% include step-tuto.html 
greyBackground = false
title="1 - 3D/2D View"
content="Area 1 is dedicated to the 3D and 2D view of your part. In 3D view, you can navigate around your part and select the elements to interact with.
To navigate within SolidWorks, you will mainly use your mouse. Given the functionalities to be used, **we strongly recommend using a 3-button mouse** rather than a trackpad. 

- Left click to select
- Middle click to rotate 
- Middle click + CTRL to move in the plane
- Right click for options

You also have access to various tools that allow you to manage your display and its orientation in the upper toolbar.
![](SLDWORKS_TBm5u6W7OT.png)" 
image="SLDWORKS_KPvCywywmQ.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Function and Part Tree"
content="On the right, you will find the display area of the function and part tree as well as the dialog boxes of various tools. 

The tree displays all the parts of a project, its functions, and its constituent elements.

The **blue bar** indicates where you are in the design history of your part. You can adjust the bar if you wish to go back on your design.
![Alt text](SLDWORKS_Pos3qbqB4Z.png)" 
image="SLDWORKS_f4PXcB4Wc4.png" %}

{% include step-tuto.html 
greyBackground = true
title="3 - Toolbar"
content="At the top of your screen, you will find the toolbar that gives you access to the functions that allow you to create and manage your parts. It is different for each workshop and can be highly customizable according to your needs.

Examples of toolbar:
![Alt text](SLDWORKS_20230823_113355.png)

![Alt text](SLDWORKS_20230823_113422.png)

![Alt text](SLDWORKS_20230823_113823.png)
" 
image="SLDWORKS_dcj4KDZpXR.png" %}

Now that we have taken a tour of the software, we will create a simple part that allows you to apply the basics of CAD.

## Creating Your First Part

SolidWorks CAD software is a parametric design software. Its operation, like many others, is based on creating sketches (dimensioned 2D drawings) that will then be given volume through operations of adding or removing material.

It is the succession of these operations that allows the creation of complex parts.

{% include step-tuto.html 
greyBackground = false
title="STEP 1: Create a Sketch"
content="Go to the toolbar at the top of the window, and access the **Sketch** tab, then click on **Sketch**.

![Alt text](SLDWORKS_20230823_114714.png)

We will create a sketch on a 2D plane. So you will need to select the 2D plane on which you want to work. Select the top plane as shown in the image below:

![Alt text](SLDWORKS_20230823_114838.png)

The view should position itself on top of the sketch. You can now work in 2D on this plane." 
image="SLDWORKS_20230823_115144.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 2: Create a Rectangle"
content="Go to the toolbar and click on **Create Rectangles**.![Alt text](20230823_115623.png)

Draw a rectangle **around the origin point** as shown in the image by clicking once to define the first vertex and a second time to determine the second vertex. **Avoid click and pull** (click-drag)" 
image="SLDWORKS_20230823_115528.png" %}

{% include message.html 
message="
Currently, your rectangle is not constrained. It is free in its 2D space and can be modified. This can be observed notably thanks to the blue coloring of the drawing. The first step will therefore be to geometrically and dimensionally constrain your sketch before moving on.
" 
status="is-info" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 3: Center Your Rectangle"
content="Use the Line tool ![Alt text](SLDWORKS_20230823_120408.png) and draw a line connecting two vertices.

![Alt text](SLDWORKS_20230823_120459.png)

Then select the newly created line and the center of your sketch while holding down the **Shift** key. You will see the properties of the selected elements appear in the left pane, and also, what interests us, a **Add Relations** section.

![Alt text](SLDWORKS_20230823_120645.png)

In this **Add Relations** section, click on **Midpoint**. ![Alt text](SLDWORKS_20230823_120901.png)

Your rectangle should now be centered on your origin. To finalize your construction, you can tell the software that this line is a construction line and that it will not be used for the 3D design of your part.

To do this, select the line and click on **For Construction** in the left option panel ![Alt text](SLDWORKS_20230823_121150.png).

Your line should now be displayed in dashed lines. 
" 
image="SLDWORKS_20230823_121234.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 4: Equalize the Sides of Your Rectangle"
content="Select two adjacent sides of your rectangle while holding down the **Shift** key, then click on **Equal** in the left panel ![Alt text](SLDWORKS_20230823_121445.png)

You can verify that the relation is properly applied by checking that the equality icon ![Alt text](SLDWORKS_20230823_121553.png) is displayed on both sides of your rectangle, which has now become a square!
" 
image="SLDWORKS_20230823_121528.png" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 5: Dimension the Sides of Your Square"
content="There is only one operation left to fully constrain your square. You will define the length of one of the sides. This length will be called **side** later on. 

Click on **Smart Dimension** in the upper banner ![Alt text](SLDWORKS_20230823_121827.png) then select one of the sides of the square. A dimension line then appears. 

![Alt text](SLDWORKS_20230823_121947.png)

Position it along your line and click to validate. A popup appears to allow you to enter the length value. Indicate 30mm and validate with ![Alt text](SLDWORKS_20230823_122152.png)

![Alt text](SLDWORKS_20230823_122204.png) 
" 
image="SLDWORKS_20230823_122247.png" %}

{% include message.html
title="WARNING" 
message="Notice how your sketch has changed from **Blue** to **Black**. This means that your sketch is **fully constrained**. It is important to **ALWAYS** check that your sketches are fully constrained before exiting a sketch and continuing your work.

If this is not done, you may find yourself in situations where your future part generation will break if you edit a previous sketch and it is not fully constrained." 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 6: Validate and Exit the Sketch"
content="If you are satisfied with your sketch, you can exit it by clicking on the **Exit Sketch** button ![](SLDWORKS_20230823_122426.png). You then exit sketch mode and return to 3D view." 
image="SLDWORKS_20230823_122459.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 7: Create a Protrusion"
content="Select your previously created Sketch![Alt text](SLDWORKS_20230823_122557.png) then click on **Extruded Boss/Base** ![Alt text](SLDWORKS_20230823_122643.png) in the toolbar. 

In the menu that appears, change the value to 10mm in the **Length** field.

![Alt text](SLDWORKS_20230823_122752.png)

Then **Validate** ![Alt text](SLDWORKS_20230823_122827.png) to confirm the entry." 
image="SLDWORKS_20230823_122708.png" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 8: Create a Second Sketch"
content="Click on **Sketch** ![Alt text](SLDWORKS_20230823_122953.png) then, in the left tree, go to the **Creation Tree** tab and select **Front Plane**. Thus, we will create a sketch on this plane for the rest of the part.

![Alt text](SLDWORKS_20230823_123030.png)" 

image="SLDWORKS_20230823_123223.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 9: Quick Sketch of Your Shape"
content="Make a quick sketch of the desired shape (see illustration) using the **line** tool ![Alt text](SLDWORKS_20230823_123516.png).
When working on a sketch, the sketch solver automatically offers you **Horizontal** or **Vertical** geometric constraints. You can see them displayed when the conditions are met under your cursor. It is therefore advisable to take advantage of them. You can, for example, start your drawing by clicking on the center of your sketch:

![Alt text](SLDWORKS_20230823_123550.png)

If some geometric constraints have not been positioned during the sketching of the shape, you can add them manually using the geometric constraints of the left panel:

![Alt text](SLDWORKS_20230823_123733.png)
" 
image="SLDWORKS_20230823_123744.png" %}

{% include message.html
title="INFO" 
message="When you make a complex sketch, a simple method that works in most cases is to:
- Make an unconstrained sketch of your sketch
- Geometrically constrain your part using constraint tools
- Finish by dimensioning the sketch
- Check that your sketch is fully constrained
This is the method you followed to make the base of your part, and it is also the method we will use for the second part of the part." 
status="is-info" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 10: Dimensionally Constrain the Sketch"
content="Using the **Smart Dimension** tool ![](SLDWORKS_20230823_123852.png), dimension the previously created sketch as indicated. For the angular dimension, select the two lines of the angular sector one after the other.

Make sure your sketch is fully constrained, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to exit." 
image="SLDWORKS_20230823_124145.png" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 11: Revolution Extrusion"
content="Select your previously created sketch and then click on the **Revolved Boss/Base** tool ![Alt text](SLDWORKS_20230823_124244.png).

In **Revolution Axis** ![Alt text](SLDWORKS_20230823_124345.png), select the line on the sketch that will be the center of your rotation, namely the one in the center of your part:

![Alt text](SLDWORKS_20230823_124504.png)

Finally, **Validate** ![Alt text](SLDWORKS_20230823_122827.png) to confirm the boss." 
image="SLDWORKS_20230823_124550.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 12: Drilling Sketch"
content="Create a **sketch** in the **top plane** ![](SLDWORKS_20230823_124803.png) as previously seen 

![Alt text](SLDWORKS_20230823_124842.png)

Then reproduce the sketch opposite using the **Circle** tool ![](SLDWORKS_20230823_124913.png). Constrain the elements as previously seen.

Make sure your sketch is fully constrained, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to exit."
image="SLDWORKS_20230823_125331.png" %}

{% include message.html
title="INFO" 
message="If you cannot constrain the position of the circle vertically, you can use a **Vertical** constraint ![](SLDWORKS_20230823_125126.png) between the center of the sketch and the center of your circle.

Or you can use the same method we used to center our rectangle at the beginning of the tutorial with the **construction line** tool ![Alt text](20230823_125255.png) " 
status="is-info" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 13: Material Removal"
content="Select your newly created sketch, then click on **Extruded Cut** ![Alt text](SLDWORKS_20230823_125458.png). 

In the window that appears, if the direction of material removal is not correct, you can reverse it using the **Reverse** button ![Alt text](SLDWORKS_20230823_125604.png).

![Alt text](SLDWORKS_20230823_125638.png)![Alt text](SLDWORKS_20230823_125650.png)

Then in **Type**, select **Through All**.

![Alt text](SLDWORKS_20230823_125708.png)

Finally, **Validate** ![Alt text](SLDWORKS_20230823_122827.png) to confirm the operation'." 
image="SLDWORKS_20230823_125838.png" %}

{% include step-tuto.html 
greyBackground = true
title="STEP 14: Circular Repetition"
content="Select the last material removal function performed:

![Alt text](SLDWORKS_20230823_125901.png)

Then click on **Circular Pattern**:

![Alt text](SLDWORKS_20230823_125940.png)

In the window that opens, select the empty field in **Direction 1** ![Alt text](SLDWORKS_20230823_130014.png) then select the cylinder of your part. Thus, you indicate to the software that you want to make a circular repetition around this cylinder. 

![Alt text](SLDWORKS_20230823_130108.png)

In the **Occurrences** counter, indicate the value **6** ![Alt text](SLDWORKS_20230823_130216.png)
And select **Constant Spacing** ![](SLDWORKS_20230823_130236.png)

![Alt text](SLDWORKS_20230823_130335.png)

![Alt text](SLDWORKS_20230823_130403.png)

Finally, **Validate** ![Alt text](SLDWORKS_20230823_122827.png) to confirm the operation'." 
image="SLDWORKS_20230823_130427.png" %}

{% include step-tuto.html 
greyBackground = false
title="STEP 15: Chamfers and Fillets"
content="Select the **Chamfer** tool in the toolbar:

![Alt text](SLDWORKS_20230823_130536.png)

Then select the 4 edges of your part as indicated below:

![Alt text](SLDWORKS_20230823_130610.png)

To best visualize the chamfers, you can select the **Full Preview** option![Alt text](SLDWORKS_20230823_130659.png).

![Alt text](SLDWORKS_20230823_130743.png)

Give a distance of 3mm to your chamfers and then **validate** ![Alt text](SLDWORKS_20230823_122827.png) 

![Alt text](SLDWORKS_20230823_130814.png)

You can do the same with the **Fillet** tool ![Alt text](20230823_130954.png) by selecting the base edge of the cylinder and a radius of 1mm.

![Alt text](SLDWORKS_20230823_131048.png)" 
image="SLDWORKS_20230823_131128.png" %}

## Modifying Your Part

CAD tools are, by their very nature, parametric. This means that they allow you to make modifications to your parts by going back through your construction tree. This allows you to correct or add elements to your part by going back up your tree without having to redo your entire design.

For example, in our case, we will make several modifications:

{% include step-tuto.html 
greyBackground = true
title="MOD 1: Base Dimension"
content="In this first modification, we will change the size of the sketch, and then we will modify the height of the base.

Right-click on your first sketch (the one for your base) in the part's tree on the right. Then **Edit Sketch**:

![Alt text](SLDWORKS_20230823_131430.png)

You will return to **Sketch Edit** mode for your base. Modify the dimension of your square side by changing it to **40mm**, then **Exit Sketch** ![Alt text](SLDWORKS_20230823_124011.png) to exit.

![Alt text](SLDWORKS_20230823_131546.png)

To modify your base height, right-click on the extrusion of your base in the construction tree, then on **Edit Feature**. 

![Alt text](SLDWORKS_20230823_131648.png)

Change the height to 5mm, then validate.

![Alt text](SLDWORKS_20230823_131832.png)
" 
image="SLDWORKS_20230823_131905.png" %}

{% include step-tuto.html 
greyBackground = false
title="MOD 2: Drilling Dimensions"
content="In the same way as before, enter edit mode on the drilling sketch, and modify the circle's diameter to 4mm and the spacing from the center to 16mm, then validate.

![Alt text](SLDWORKS_20230823_132019.png)
" 
image="SLDWORKS_20230823_132056.png" %}

{% include step-tuto.html 
greyBackground = true
title="MOD 3: Number of Drillings"
content="Edit the circular repetition function, then modify the **Instance Counter** to 4 instances. Then validate." 
image="SLDWORKS_20230823_132218.png" %}
