## Personal Blog

### Overview

Imagine you want to start a blog for your own personal and professional writings. You'll need to design a homepage template and an article page template according to the specifications that follow.

#### Requirements

Your blog must...

* display some of your personality while also maintaining a professional, contemporary style; you determine your own "brand" constraints.
* you want to earn some income from the blog so accommodate for [a square (1x1) ad](https://flexibleads.iabtechlab.com/samples/dfp/adbundle_1x1.html) that has a minimum width of `260px`.
* design for at least three standard devices as follows: mobile with minimum width of `318px`, table with minimum width of `720px`, and desktop with minimum width of `1200px`.

Your blog must include the following page templates designed as you see fit:

* **Home page** – this page will include a masthead (no navigation is needed), a main feed of recent articles, and a short biography/profile about you in a sidebar. You must also accommodate the 1x1 ad such that the top of the ad is above the fold somewhere in the layout in the tablet and desktop sizes.
* **Article page** – this page should feature roughly the same masthead and sidebar as the home page (along with the 1x1 ad) but swap out the article list for the content of an article in the main area, which must include:
    * The title of the article
    * The date you published it
    * A lead paragraph
    * The body of an article. While you're welcome to write an article or include one you've already written, sample Lorem Ipsum text is acceptable. However, to create a thorough design style in your comp the sample article should include at least two levels of subheadings (not including the title of the article), bulleted or numbered lists, and block quotes along with any other styles you believe you'd use given the nature of the blog you'd write for.
    * Optionally, but ideally, at least one image
    * Any other metadata you'd like (share links, comment section, etc.)

***Again, both pages must include a placeholder for a 1x1 ad***

As *merely a visual reference*, see this [wireframe report](/docs/mp3-wireframe-report.pdf). Some requirements herein are different from those above but consider this an introduction to reading and working from wireframes.

### Deliverable A: Page Design Drafts

Follow this process:

1. Create thumbnail sketches of your page templates on paper first to explore how the required components could fit together.
2. Hone in on a direction from your thumbnails and move into Sketch to create mockups. Use a new "Page" in sketch for each set of device-specific mockups and place each mockup on its own Artboard. So you should have at least three Pages in your sketch file (smartphone, tablet, desktop) each with two artboards (home page, article page). This will make things easier to sync with InVision.
3. Create a Project in InVision for each device size you design named `Web2 P2 YOURLASTNAME DEVICENAME`. Add the professor as a collaborator on each project.
4. Synchronize your Sketch file assets with each corresponding InVision project... A Page in Sketch corresponds to a Project in InVision and each Artboard in Sketch becomes a Screen in InVision. Set up navigable hotspots to simulate the interaction between the homepage and an article page in each project.

***Ensure your work is synced to InVision and notify your instructor via email if you're ready for review before the deadline***

### Deliverable B: Markup and Content Styles

Apply any feedback from your professor to your design comps and ensure the latest is synced to InVision.

Then move into the provided project space in Codio and create the two HTML files required for the project. Add clean, simple, semantic markup in each. Then add a central stylesheet and add at least the content styles you'll need for your build out. Focus on the settings in just your mobile mockup at this point and don't fret about any layout aspects; just type, color, and spacing.

***Ensure your work in progress (WIP) is on Codio, notifying your instructor via email if you're ready for review before the deadline***

### Deliverable C: Responsive Layout Build

Make any updates based on feedback from your professor. Then proceed to build out the responsive layout for your project. Be sure to start with the mobile styles as your default settings and add `min-width` media queries to scale up as discussed in the lessons.

***Submit your final work on Codio, notifying your instructor via email if you're ready for review before the deadline***


## Simple E-Commerce

### Introduction

This project is aimed to help you continue to improve your speed and proficiency with HTML/CSS skills as well as experiment with another specific genre of web design: a category and detail page from an e-commerce site, responsively designed for smartphone, tablet, and desktop.

Choose an existing online store that fits the following criteria:

* Includes products categorized in at least three levels: main categories will be on the primary navigation of your design; sub-categories and sub-sub-categories will form a sidebar. For example a suitable site might include main categories for apparel for men, women, and children. Sub-categories under "men" might include formal, casual, and accessories. Sub-sub-categories under "formal" might include suits, shirts, and pants; sub-sub-categories under accessories might include shoes, belts, ties, and socks.
* Product category page including at least 8 products and show an image, name and price for each product.
* Product detail pages include at least three images of the product: a main image that is large, and at least two other images that are shown in thumbnail form. You will not be required to make a functional
thumbnail viewer but just to mock up the idea.
* Product detail pages include several paragraphs and/or bulleted lists of features of the product.
* Product detail pages include reviews by at least three users. Each review must include a reviewer/user name, review date, icon or avatar image for the user, rating, and review content.

#### Requirements

* Use Sketch pages and artboards feature to design two pages each at three different layout sizes (total of 6 comps). See the provided wireframes for structural mockups for each page at three different sizes. Each Sketch "page" holds the comps for a different device size. Each "art board" inside the "page" holds a webpage comp for that size.  This allows us to sync a "page" in Sketch to a project in InVision where each art board becomes a screen from the site.
* Build two physical pages of the site at three different responsive sizes based on your comps: a sample category page and a sample product detail page.
* Final submission must include simple, semantic HTML and implement the CSS tile and container approach for microlayouts. BEM should be used for microformatting.
* The hoverable mobile menu pictured in the provided file is not required to be build for this project.

### Resources

Download the [Sketch wireframe starter](/docs/mp2-starter.sketch).

### Deliverable A: Design and Prototype

Follow these notes diligently to complete this deliverable.

1. Use the provided wireframes to create your two site pages at three sizes each. Your comps must follow these wireframes closely, varying only proportions, fonts, colors, imagery, and textures. Placement and the nature of the content should be identical.

  The provided wireframes use the following dimensions:

  * Phone: 300px* (2 x 150px columns with 20px side gutters)
  * Tablet: 600px* (6 x 100px columns with gutters to suit)    
  * Desktop: 1200px (12 x 100px columns with gutters to suit)

  *This is narrower than a standard devices (768px) for sake of a simpler grid. We'll ensure the media queries still occur at logical device sizes and that the layout centers inside the remaining space.*

2. Be sure to use fonts from the Google Fonts API.

3. Create three projects in InVision names as follows:

    * Web2 P3 [Lastname] - Desktop
    * Web2 P3 [Lastname] - Tablet
    * Web2 P3 [Lastname] - Smartphone

    Use the corresponding settings for each device as you set up the project. This way you can synchronize each into InVision in a way that makes the prototype there authentic.

4. Add your professor as a collaborator on each of your three projects.

5. When you're finished with your comps in Sketch make a final sync to each project in InVision. Then use InVision's Build Mode to create hotspots that link your two pages together in each device size.

***Send an email to let your instructor know you're ready for feedback.***

### Deliverable B: Markup and Mobile Content Styles

Make any adjustments to your mockup based on feedback from your instructor and sync the changes to InVision.

Create the simplest, semantic markup you need in order to begin to build out your design using HTML and CSS. Follow this process:

1. Layout Analysis: Identify and label the tiles and containers in your comp. Use BEM to contnue to label these accordingly.
2. Open this project in Codio and create an `images` folder, `styles.css`, an `index.html` for the category page and `product.html` for the product detail page.
3. Export any images you need from your comp using Sketch's export features or the download option in InVision Inspect and place them in the `images` folder.
4. *Content Markup:* Analyze the structure of the content in your comp and create the corresponding simple HTML content in your HTML files.
5. *Organizing/Layout Markup:* Based on your layout analysis, add organizing markup around your content markup in order to ensure that you have tiles and containers all accounted for. Be sure not to add any markup unless its needed. Also add your BEM classes to elements.

Continue your build out of your design by adding styles to just the content elements on your page. You should have approximately 16 styles to account for from your comp including the following:

* normal paragraphs
* normal list items (bulleted or ordered)
* primary heading (brand)
* secondary headings
* third-level headings
* main categories in primary navigation
* sub-categories in sidebar navigation
* sub-sub-categories in sidebar navigation
* product name for category page
* product price for the category page
* breadcrumb/standard hyperlink styles
* quantity field label
* quantity input field
* add to cart button
* reviewer name
* review date

Place your styles in `styles.css` and be sure you're linking this into both HTML pages.

Be sure that you're also linking to any custom fonts in a valid way from within `styles.css`, such as by implementing the Google Fonts API.

Also keep your selectors simple, being only as specific as necessary.

Build each responsive stop from mobile up to large desktop using progressively larger media queries and the `min-width` filter. Enter default styles for mobile. From there your stops should be `600px` (for large phones up to tablets), and `1200px` (for desktop and larger).

***Send your prof an email to confirm when you're ready for feedback.***

### Deliverable C: Layout Styles

Carrying forward with your build out, now add tile and container settings in order to recreate the layout you've designed. Use your layout analysis from earlier as a guide and be sure to consider microlayouts as well.

Tidy up your work for final submission.

***Send your prof an email to confirm you're ready for final evaluation.***


## Elective Project

### Introduction

This final project will be an elective project in which you can choose the topic/focus of your site as long as the following requirements are met:

* The site must be aesthetically pleasing and functional as a prototype site. Any "unfunctional" features must be user-friendly and tidy.
* The site must use appropriate techniques based on coursework to this date (semantic markup, BEM convention, efficient CSS, flexbox layout technique, etc.)
* The site must implement an intentional grid system include baseline grid, rows, and columns as discussed in the Vinh text and online lesson.
* The site must include at least 5 fully operational pages, and placeholders for others.
* The site must be responsive from smartphone up to standard desktop with 3 designed layouts as a recommended minimum.


### Deliverable A: Design and Prototype

Follow these notes diligently to complete this deliverable.

1. Create Sketch mockups for each of your page layouts (not necessarily for every page you intend to build) and at each of at least three device sizes as you did on previous projects.
2. Be sure to use fonts from the Google Fonts API and implement a grid system as discussed in this unit.
3. Create three projects in InVision names as follows:

    * Web2 P4 [Lastname] - Desktop
    * Web2 P4 [Lastname] - Tablet
    * Web2 P4 [Lastname] - Smartphone

    Use the corresponding settings for each device as you set up the project. This way you can synchronize each into InVision in a way that makes the prototype there authentic.

4. Add your professor as a collaborator on each of your three projects.
5. When you're finished with your comps in Sketch make a final sync to each project in InVision. Then use InVision's Build Mode to create hotspots that link your two pages together in each device size.

***Send an email to let your instructor know you're ready for feedback.***


### Deliverable B: Markup and Mobile Content Styles

Make any adjustments to your mockup based on feedback from your instructor and sync the changes to InVision.

Create the simplest, semantic markup you need in order to begin to build out your design using HTML and CSS. Follow the same process you have with previous projects for this deliverable.

***Send your prof an email to confirm when you're ready for feedback.***


### Deliverable C: Layout Styles

Carrying forward with your build out, now add tile and container settings in order to recreate the layout you've designed. Use your layout analysis from earlier as a guide and be sure to consider microlayouts as well.

Tidy up your work for final submission.

***Send your prof an email to confirm you're ready for final evaluation.***