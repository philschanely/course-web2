---
type: lessons
title: "Grid Design"
number: 4
cover: "https://source.unsplash.com/weuZKB19ZeU"
---
import { Subpage, Callout } from "course-components";

<Subpage slug="intro">

### Introduction

One last advanced topic to discuss in this course is that of designing a grid system for our interactive interfaces. While on the surface level it can seem like a pretty basic aspect of design that involves a baseline grid, columns for aligning items up and down the page and rows for establishing vertical rhythm. But a few additional factors specific to interactive interfaces make this a little more challenging:

* Font sizes can be adjusted by the user, so our assumptions about a baseline grid should be made with flexibility in mind.
* We don't have a fixed canvas width, so our assumptions about how to break up the canvas from side to side needs some adjustment. As a result we will often end up with both a flexible grid system and a series of grids for different base devices.
* We must assume a variable and infinite canvas height, so our assumptions about breaking up the height and establishing vertical rhythm also need to be checked at the door. As a result, we'll look at Khoi Vinh's solution of using the golden ratio as a base.

</Subpage>
<Subpage slug="baseline-grid">

### 1. Baseline Grid

One of the simplest and most fundamental aspects of a grid system is the baseline grid upon which the system will be built. This is fundamental and simple as it provides the rhythm for the most common visual component: the body copy.

Khoi Vinh suggests that we use a baseline grid based on the leading of our body copy. In order to determine this we start by choosing our fonts and play around with the font at sizes conducive to online reading for body copy. I typically find a minimum of 13 points up to 18 points is a safe range, and I often land on 14 points.

Next, choosing the leading is based on what appears visually appealing given our font choice and seeing that font at different line widths. He suggests laying out several blocks of text in varying widths and playing with the leading settings in order to determine one that looks consistently pleasing and readable.

Whenever possible, also keep in mind how this number can be subdivided and/or how simple it is to do multiplication with this. I tend towards multiples of 5, 6, or 8 such as 20, 24, 25, 30, and 32. Each of these can be subdivided easily.

Finally, with a leading size selected we determine whether the size itself is the best for our baseline grid, or whether a subdivision of it is best. In order to determine this, we begin to play with the font size of potential levels of headings, and try snapping them to the same leading or multiples thereof.

Here we should insert a quick work about scaling heading sizes. It can be helpful to decide on a ration with which you will scale your headings up from a base font size. [Modular Scale](https://www.modularscale.com/) is a helpful tool you can use that allows you to plug in a base size and a ratio and see what the resulting font sizes would be.

So if we'd landed on a leading of 20 for body copy we might try using leading for our headings at 20, 40, 60, etc. depending on the font size we're targeting. If we're happy with the results then that leading itself could be our baseline.

However, its likely that these provide blocks that are too large and make some gaps awkward and inconsistent for some heading sizes. In such cases we can try working with subdividing our base leading and using multiples of that size. So with a base leading of 20 we might use 10 as the subdivision and thus open up for leading settings of 20, 30, 40, 50, etc.

When we've settled on this base leading or subdivision then we simply set up a baseline grid at that dimension. I often find that 5, 6, 8, or 10 work well, and whenever possible work with 10 since it makes the math very simple.

#### Setting up Baseline Grid in Sketch

In Sketch we can use the Layout Settings (View > Canvas > Layout settings...) to establish the baseline. Turn on the "Rows" option and use the "Gutter" to specify the baseline grid size. We'll talk later about the row height setting.

</Subpage>
<Subpage slug="columns">

### 2. Columns

#### Column width

Determining column size is also pretty simple and can be done interchangeably with the baseline grid size but must be considered for each of your target device sizes. The key is to consider with what flexibility you want to subdivide your space from side to side so that you have consistent lines along which you can align elements from top to bottom. Too many columns can lead to a layout that feels detaching; too few and you'll be too limited.

So start by considering overall for each device size what kind of modules you might have and what kind of subdivision you need as a result. It is common to work with thirds, fourths, and fifths (in that order), so choosing a grid system that allows for that kind of subdivision is wise. I find 12 to be a nice magic number for wider layouts as it can be subdivided into half, thirds, and fourths. These usually fit my needs. Then for narrower devices I usually use 6 columns, which allow for halves and thirds.

Remember however that your column design should be done in the mindset that those columns will flex depending on the particular device. So if you choose 6 columns as your base for smartphones through portrait tables, your column widths will flex between 50px (300px smartphone width / 6 columns) and 180px (1080px table width / 6 columns). That's a pretty big span, so keep this in mind as you lay things out. Likewise, landscape tablet up to a standard HD monitor with 12 columns could range from 85px (1020px landscape tablet / 12 columns) to 160px (1920px monitor / 12 columns). So while we design at specific dimensions we will want to keep the ratio or percentages in mind as we build the layouts (1/6, 1/3, 1/2, 2/3, 5/6, etc.).

So given this flexibility, don't feel like you have to work with canvases that exactly match your target devices. For simplicity it can be helpful to round to a nearby dimension. For example, the smallest smartphones today are around 320px. That does not divide very nicely into thirds or sixths... but 318px divides evenly to thirds, and other multiples of three nearby might be even easier to work with. Consider 312px, which gives 3 columns that are 104px wide or 6 that are 52px wide.

#### Gutters

One final aspect to consider is the gutter width. The premise here is that if you set up a series of columns and want two elements side by side (particularly columns of text) it is usually effective to separate them with a gap to help distinguish the two blocks. This gap is called the gutter, and you should set it up by playing with blocks of text set along your baseline grid to determine what gives enough space to clearly distinguish the blocks. For small screen sizes I have used as small a dimension as 12 pixels for 14-point type but usually find larger sizes to be more readable, such as 20px and up. Too much space can great awkward gaps; so find the balance. You might also find that you want narrower gutters for mobile device canvases and wider ones for more spacious desktop canvases.

Finally, also bear in mind that when we use a gutter of 30 pixels, what we typically do is apply that evenly to the two columns affected by the gutter; so we would apply 15px to the left column and 15px to the right column. The effect then is that we usually have half of the gutter on the outermost edges of our canvas as well.

#### Setting up Columns in Sketch

The Layout settings in Sketch also allow us to set up columns with gutters (View > Canvas > Layout settings...). Here we can check the "Columns" option and enter the number of columns along with the total width that should be subdivided (typically the same as our canvas width). Use the offset setting if your canvas is wider than your desired column layout and want the first column set in from the left edge or centered in the canvas.

Use gutter width and column width to set and adjust the balance between these settings. Sketch automatically recalculates each value based on the last setting you provided since these two are interdependent.  

Finally, you can also control whether the desired gutter only applies between the columns, or is also split on the outer edges as discussed above.

</Subpage>
<Subpage slug="rows">

### 3. Rows

One of the hardest aspects to plan well for interactive devices is the rows that allow you to establish vertical rhythm in your layout. The baseline grid is a good start but much too granular. As Vinh discusses, you can look to the size of common components of your layout for this size, but often this it arbitrary and up to you to determine.

What we might typically do is take the height of our canvas and subdivide it the way we did with our layout width and columns. However, our page height needs to be much more flexible than that. It is generally a very bad idea to plan on fixing your canvas at a particular height for all the pages in your site.

Another approach could be to determine the fold line and use that as a point from which to subdivide, acknowledging that your canvas may be taller than this. This is much better than trying to fix your canvas height. However, this line is also very blurry as it is different for every device size, and much harder to predict for desktop devices where users might have a variety of toolbars that affect the viewport height.

Vinh suggests that we instead use one of the best established ratios for visual design: the golden ratio, or 1:1.618(...). Working with a landscape layout, we make the width the larger dimension (1.618...). We can determine the shorter edge by dividing the canvas width by 1.618. So if we have a canvas width of 1200 pixels (a good standard desktop size), the golden ratio rectangle's height would be ~742px.

With the golden ratio rectangle as a guide, we can then figure out our "rows" by consider a) how we want to subdivide that dimension and b) by rounding to our baseline grid. So if we wanted to subdivide by thirds, our rows would be around 247px. But if our baseline grid is 10px we might either round down to 240px or up to 250px. I find 240px to be a nicer number as that can also be divided further into fourths and thirds again.

#### Setting up rows in Sketch

This final piece can also be set up in Sketch in the Layout Settings (View > Canvas > Layout Settings...) under the "Rows" option. First enter the baseline grid size in the "gutter" box. Then figure out how many of those baseline grid rows make up the desired overall row height. In our case, 240px would have 24 baseline rows (24 &times; 10 = 240). Then subtract 1 for the actual "gutter" and you have 23 for the "Row height" box.

</Subpage>
<Subpage slug="conclusion">

### Conclusion

While this process may seem detailed, it is worth implementing and within a vew rounds you'll have it down. Here's a summary along with a suggested set of dimensions:

| Step | Sample values |
|:-----|:--------------|
| Determine the desired leading for body copy that you either use or subdivied for your baseline grid. | `20px` body copy leading and `10px` for baseline grid. |
| Determine column and gutter dimensions for your primary canvases. Consider how you intend to subdivide and which devices you will target. | `312px` with 3 columns and `20px` gutters; `768px` with 6 columns and `20px` gutters; `1200px` with 12 columns and `20px` gutters |
| Determine rows by dividing a canvas width by 1.618 (golden ratio). Then determine how to subdivide (thirds, fourths, fifths) and round to nearby desired baseline. | Based on `1200px` width, `742px` is golden ration line, but we round down to `720px` so that we can subdivide into thirds, each `240px` or 24 baselines. |

Finally, use this grid system as a guide for aligning your elements. Primarily, use your columns for aligning items up and down on the page. Use rows as a guide for setting the height of modules of content but don't feel like you have to make everything snap to a complete row. Use the grid overall to enhance the unity of the layout but don't be afraid to break out of the box to improve the visual appeal and avoid becoming to mechanical.

</Subpage>
