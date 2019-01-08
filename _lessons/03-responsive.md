---
layout: lesson
title:  "3: Responsive Web Design"
---
### Responsive Web Design

While a little out of date, get started with Responsive Web Design by reading [my article on Medium](https://medium.com/@philschanely/introduction-responsive-web-design-d3285e47b5a3).

Read [Responsive Design in 3 Steps &raquo;](http://webdesignerwall.com/tutorials/responsive-design-in-3-steps) for a sample of how this is achieved with CSS.


### Mobile First

With a little peak into the idea of responsive design and the world it opens up, now consider the idea of design ["Mobile First"](https://zurb.com/word/mobile-first)

In summary:

- There are a myriad of devices our websites users may be using to access our content and services.
- We can design our sites flexibly to accommodate this diversity using responsive web design techniques, the key technique being to leverage "media queries" to design around "breakpoints" that correspond to common device sizes.
- Given that a vast majority of users are using mobile devices and that the thinking of these users first helps us plan and prioritize well for many other devices, we use a "mobile first" mindset when planning and designing our sites as well as to build them from a technical standpoint.

Using a mobile first mindset we can design using the following ideas:

- Imagining a small screen space forces us to prioritize content in a way that matches the priorities of our users.
- This ordering can be implemented in a small screen design based around 320 pixels, the smallest width commonly used today (and subdivides easily into halves, thirds, quarters, fifths, and so on).
- We can carry over this prioritization to the slightly wider 768 pixel canvas (wider devices up to a landscape tablet device)
- Next we can jump out to 1200 pixels, a good minimum for desktop devices today)


### Designing Responsively

After the initial explosion of responsive web design to the scene a lot more has been written about best practices, cautions, and overall responsibility with this new world of web design. Here are a few tips I've gathered from common issues I've observed from those new to designing in this medium:

* **Think about the use case.** Imagine the kind of user that might be accessing the site and in what context they might do so. What are their needs in such a context? What about the layout of the page should adjust to make room for these priorities?
* **Optimize elements in the canvas; don't just scale them.** Our eyesight does not get better when we use mobile devices, so don't expect too much to change in the size of text. On the other hand do consider the effect the size of larger text has in the context of the smaller canvas, and scale down where appropriate. And when it comes to images, making them smaller might not be best; sometimes actually zooming in and re-cropping them is best.

In terms of thinking about our breakpoints, consider these questions:

- *What devices will you target?* I recommend at least smartphone, tablet, and desktop.
- *What kind of grid system will you employ to maintain unity and intentionality? How should this flex from device to device?* I typically work with mobile in a single-column layout (doing only very minimal tiling where tasteful), switch to at most a three-up layout for tablet, and employ a 12-column layout with greatest variety at desktop and higher.
- *Will you assume a mobile first mindset and set up mobile as default or use another device as your base?* I recommend mobile first as this is endorsed by user experience professionals, provides a simple starting point and then progressively enhances up from there.

In terms of specifics for device sizes, if you know the minimum sizes for each device you're targeting you can round down a little when needed in order to set up a canvas that uses column widths you find easy to work with. The commons answers are:

- **Smartphone** -- minimum of 320px, with majority of these devices today in the 350--375px zone. If we assume to support the smaller size of 320px we can round down to 318 and use a grid with 3 106px columns (or 6 at 53px).
- **Tablet** -- minimum of 768px in portrait mode and 1024px in landscape mode. Bearing in mind that most tablet users can rotate their device at will to see an improved layout, some split this into two groups and build two layouts as a result. On the other hand, if we only design for portrait mode a user who finds landscape too small can just rotate their device for a more optimized view. This said I have worked with 720px as this makes for a smaller leap from smartphone to tablet and provides a wide range of grid options since it can be divided into 3, 4, 5, 6, 8, 9, 10, and 12 columns. 768px also allows for subdividing but results in columns that are slightly less approachable.
- **Desktop** -- minimum of 1200px, but some design as small as 1080 to lump "larger" tablets in with this group. If we stick with 1200 we have a fantastic base for subdividing into 3s, 4s, 5s, etc. Its a small squeeze down to 1080 with a very similar amount of flexibility.

So while this is definitely only one system that you should modify as needed from project to project, here is a visualization of the constraints:


### Responsive Design Technical Templates

Make sure to add this to the `head` of all your HTML files to ensure the devices render at the intended size rather than scaling:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
```

Here is a starter framework for the CSS media queries that support this (feel free to remove any of the comments...):

```css

/* Center body and fix to minimum width */
body {
  width: 318px;
  margin-left: auto;
  margin-right: auto;
}

/* Ensures base font size is a factor of 10 for using rems for font sizes */
html {
  font-size: 10px;
}

/* Images will always scale to be no wider than their container */
img {
  max-width: 100%;
}

/* Other mobile (default) styles go here */


@media screen and (min-width:768px) {

  /* Scale body to new minimum width */
  body {
    width: 768px;
  }

  /* Other portrait tablet styles */

}


@media screen and (min-width:1200px) {

  /* Scale body to new minimum width */
  body {
    width: 1200px;
  }

  /* Other desktop styles */

}
```


### Overriding Process

Also as you build your media query sections, most of the time you'll be overriding styles you've set elsewhere. With this in mind, it can be very helpful to work with a browser-based tool such as the developer tools available in Google Chrome. Consider this process:

1. With a browser resized to the correct zone for a given media query, identify an element that needs to be adjusted in the breakpoint, ideally, based on a pre-established design comp.
2. Using the browser developer tools, determine the precise element that must be affected. If the element already has a set of styles applied to it from pre-existing styles, note the precise selector used; you'll want a matching or more specific selector. If no styles exist, then consider what simplest but precise selector will correctly target the element.
3. Investigate exactly what is different. If the difference involves a new setting altogether, you're in luck. However, if the different involves overriding an existing setting, then be careful to precisely override the desired setting or collection of settings. Refer to your comp to help with this precision.
4. Set up the necessary selector in your media query based on step 2 and provide new settings as identified in step 3.


### Reversing CSS Effects

When we start getting into the details of a responsive build-out what we often deal with is setting up styles inside of media query blocks that attempt to override styles we've set up elsewhere. When the specificity of the selector matches and we're just providing a new value this can be very straight-forward. However, sometimes we find we need to cancel certain settings or revert them to the default settings. Here is a list of common defaults we often re-establish in our media queries, particularly for mobile stops:

| Property   | Default/revert settings |
|:===========|:========================|
| width      | `auto` or `100%`        |
| height     | `auto`                  |
| `float`    | `none`                  |
| `clear`    | `none`                  |
| `position` | `static`                |
| `display:flex` | Undo this by restoring the target element's default setting such as `display: block` for block-level or `display: inline` for inline elements |
| Other `display` settings | Make an element invisible using `display: none`. Or if you've already made it invisible and want to make it visible again use `display: inline` or `display: block` to restore its default nature. |
