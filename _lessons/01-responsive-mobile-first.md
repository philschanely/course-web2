---
layout: lesson
title:  "1: Mobile First Mindset"
---
### Mobile First

While a little out of date, get started with Responsive Web Design by reading [my article on Medium](https://medium.com/@philschanely/introduction-responsive-web-design-d3285e47b5a3).

With a little peak into the idea of responsive design and the world it opens up, now consider the idea of design ["Mobile First"](https://zurb.com/word/mobile-first)

In summary:

- There are a myriad of devices our websites users may be using to access our content and services.
- We can design our sites flexibly to accommodate this diversity using responsive web design techniques, the key technique being to leverage "media queries" to design around "breakpoints" that correspond to common device sizes.
- Given that a vast majority of users are using mobile devices and that the thinking of these users first helps us plan and prioritize well for many other devices, we use a "mobile first" mindset when planning and designing our sites as well as to build them from a technical standpoint.

### More on Mobile First

Using a mobile first mindset we can design using the following ideas:

- Imagining a small screen space forces us to prioritize content in a way that matches the priorities of our users.
- This ordering can be implemented in a small screen design based around 320 pixels, the smallest width commonly used today (and subdivides easily into halves, thirds, quarters, fifths, and so on).
- We can carry over this prioritization to the slightly wider 768 pixel canvas (wider devices up to a landscape tablet device)
- Next we can jump out to 1200 pixels, a good minimum for desktop devices today)


### Media Queries

For Mobile First work in CSS we will typically start with our mobile styles and add media queries up from there using `min-width` filters. Here is a template you can use:

```css

body {
  width: 100%;
}

html {
  font-size: 10px;
}

img {
  max-width: 100%;
}

/*
  mobile (default) styles
  Place outside of any media queries
*/

@media screen and (min-width:768px) {

    /* portrait tablet styles */

}

@media screen and (min-width:1200px) {

    body {
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }

    /* desktop styles */

}
```
