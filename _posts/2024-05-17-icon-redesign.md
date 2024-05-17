---
layout: post
title: "Behind the Scenes: Pencil2D's New Icon Design"
tagline: ""
categories: "Behind the Scenes"
author: "Matt Chang"
published: false
comments: false
---

It's been a while since we last posted an update here, but we're back with some exciting news. We've been working hard on Pencil2D, and we like to share with you that we've redesigned all the icons of Pencil2D.

The redesign process started with a [Pull Request #1361](https://github.com/pencil2d/pencil/pull/1361) by [Fatih20](https://github.com/Fatih20) back in May 2020 and then was completed mostly by our core developer [MrStevns](https://github.com/MrStevns). It was a long journey to get to the final result since we've reworked all the icons of the interface, making it all feel more coherent. 

To see the new icons, please download the latest nightly builds from our website:

- **[Pencil2D Nightly Builds](https://www.pencil2d.org/download/nightly/)**

In addition, [MrStevns](https://github.com/MrStevns) has written a comprehensive guide that explains the rationale behind the new icon design, the color palette, and how to create new icons for Pencil2D. We encourage you to check out the guide and get inspired to contribute to the creative process of Pencil2D.

## Pencil2D Icon Design Guideline

With the next Pencil2D release, we've reworked all the icons of the interface, making it all feel more coherent.

| Old | New |
| --- | --- |
| <img width="1343" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/5c07dd91-e6ac-45d3-a09e-ca518a28d823"> | <img width="1343" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/83ec29f9-0b47-46ea-aeee-c37295c14327"> |

Whereas many programs nowadays choose to go with monochrome pictograms, we still believe that color can serve a meaningful purpose and provide more identity to user interfaces without tipping over to the Windows 7 and Mac OS X eras of overly skeuomorphic icons. 
To that end, we decided on a cartoonist art style where the colors are somewhat more vibrant, contain a limited number of shades and highlights, and are outlined.

If you're interested in developing new icons for Pencil2D, here's the guide to do so.

### TLDR guidelines

* The icon should be SVG
* The icon should be based on a 22x22 pixels canvas.
* The icon should have an outline
* The icon should stick to the [Palette](#Palette) whenever possible. We don't want to introduce new colors unnecessarily. 
* The icon should be [optimized for low-res display](#Optimize-for-low-res-display). This will ensure that the icon looks representative on any display.
* The icon should not contain gradient, soft shadows and other effects to create depth. Instead, stick to sharp shades and highlights, similar to [Cel shading](https://en.wikipedia.org/wiki/Cel_shading).
* The icon XML hierarchy should be as flat as possible. ie. avoid grouping elements whenever possible and don't rely on clipping functionality.
* The icon should be [compressed](#exporting-to-svg) as much as possible

### Palette
<img width="286" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/ce3302b5-f345-4991-bd6b-e4e6f474708c">

The palette currently consists of 26 colors, where blue and shades of gray have the greatest amount of variation.
While it would have made sense, the palette hasn't been made with dark mode in mind, so not all colors work well on a dark user interface.
As such, we will have to create another palette for dark mode when that time comes.

### Color grouping

<img width="630" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/09a22632-772b-4e1a-99ae-daa2c7d9d5d6">

Instead of plastering the interface with colors in all directions, which can feel nauseating to some, we figured that by utilizing the same colors for icons that share similar functionality, we can visualize how they're grouped together.

The inspiration comes from [Affinity designer](https://github.com/pencil2d/pencil/assets/1045397/f4d29ecb-6841-4882-9857-e885e156ef50), which does the same.

### Similarity through overlays

An aspect of the old interface that I liked and wanted to preserve was that the same icon could be re-used for similar actions, i.e., deleting a keyframe, layer, or color.
Although I still wanted each icon to convey more about their specific use, I couldn't quite put my finger on how to do it... until I stumbled upon the [Icon Guideline for Haiku OS](https://www.haiku-os.org/development/icon-guidelines). 

> Some of the system icons use overlays to further differentiate between file system objects for the user's benefit. These objects are generally the same type and get the same base icon. A good example are the many standard folders. Since the overlays need to be reasonably clear at 16x16 icon size

Using a smaller and simpler icon as an overlay to convey meaning to the same base icon is brilliant! Now instead of creating a completely new icon for each action, which can be difficult enough without becoming too ambiguous or abstract, we can re-use the same icon.

| Old | New |
| --- | --- |
| <img width="299" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/6f05dce5-e19d-4a9a-a3f8-b83c2cada0be"> | <img width="306" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/f7cc4f1c-c2b3-45ee-9996-4f44d69beddf"> |

Overlays should be categorized by color and action. In the above screenshot, green means adding a keyframe, red means deleting a keyframe, and yellow means duplicating a keyframe. What the overlay convey depends on its context.

There are times where you might find that the overlay blends in too much with the icon behind it; in those cases, consider applying a simple outline around the overlay.
We ended up doing that for the color palette add and remove icon.

<img width="48" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/87642168-fca5-4a07-bbe8-2a10511a2deb">

# Design Tips
The following section serves the purpose of teaching how to make an SVG icon look good in the context of a Qt application. We'll go over optimization techniques, rules, limitations of the Qt SVG specification, and how to export.

### Optimize for low-res display

When working with vector applications like Affinity Designer, Adobe Illustrator, or Inkscape, one can easily be deceived into thinking that making icons is a breeze compared to drawing with raster applications like Photoshop, Krita, or Gimp because of the unlimited scaling graphics aspect. Just pick whatever resolution, draw some strokes, and call it a day, right!? Well, yes, if you don't care about pixel alignment and like to look at blurry icons all day.

Although we work in vector, we still have to think in pixels since that's ultimately what we see on the screen.
So in order to always get a good-looking result, the trick is to pick the lowest resolution you want to support, let's say 22x22, which is the case for all our icons. Work within the limitations of the canvas, and whenever possible, stay on whole pixels, i.e., x: 1, y: 2, rather than x: 0.4, y: 0.7.

Depending on whether you're dealing with an outline or a fill, you may have to work with the center of a pixel to make a line look sharp.
It's a hassle if you've had to go through many icons to do it, and in some cases, you may also have to compromise on the look of the icon to satisfy these constraints.

| Pixel aligned | Not pixel aligned |
| ------------- | ----------------- |
| <img width="378" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/20bfff8f-a2c3-464c-811e-a310d9d51d0a"> | <img width="378" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/89759206-06b5-470d-bdf7-796eda84affb"> |
| outline width & height: 17 | outline width & height: 17.5 |
| outline x & y: 2.5         | outline origin x & y: 2.5 |

### SVG limitations

In my experience, using groups, clipping bounds, and effects like shadows, glow, outline, and raster images does not work with the Qt SVG specification, so avoid using those. Instead, be smart and think about how you can merge edges, pixels that overlap, and things that need to be within bounds of each other.
My rule of thumb is to assume that Qt won't render anything properly but the most basic strokes.

### Exporting to SVG

Vector applications, like the ones mentioned earlier, have decent settings to export to SVG in a way that's optimized for display rather than readability. We want the resulting SVG to be as small as possible while still looking the same, so we can be sure that the computer has to do as little as possible to render our icon.

Here's one example of how your export settings could look:

<img width="259" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/9614017c-8e1d-4738-990f-bc4ec3966dd5">

Once the icon has been exported, we have a decent baseline. In my case, this is what the resulting SVG looks like:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;">
    <rect id="perspective-three-point" x="0" y="0" width="22" height="21.999" style="fill:none;"/>
    <rect id="path1466" x="2.5" y="2.5" width="17" height="17" style="fill:rgb(236,236,236);fill-opacity:0.99;"/>
    <path d="M7,6L11,8L11,14.998L9,13.998L7,6Z" style="fill:rgb(47,126,222);fill-opacity:0.99;"/>
    <path d="M15.047,6L11,7.998L11,15L13,14L15.047,6Z" style="fill:rgb(22,75,136);"/>
    <path d="M7,5.998L11,5L15.047,6L11,8L7,5.998Z" style="fill:rgb(111,175,222);fill-opacity:0.99;"/>
    <path d="M15,5.998L13,14.5L11,15.5L9,14.5L7,5.998L11,4.5L15,5.998Z" style="fill:none;stroke:black;stroke-width:1px;"/>
    <rect id="path14661" serif:id="path1466" x="2.5" y="2.5" width="17" height="17" style="fill:none;stroke:black;stroke-width:1px;stroke-linecap:butt;"/>
    <ellipse id="path861" cx="3" cy="6.999" rx="2" ry="1.999" style="fill:rgb(232,72,80);"/>
    <circle id="circle863" cx="3" cy="6.998" r="2" style="fill:none;stroke:rgb(122,0,0);stroke-width:0.99px;"/>
    <ellipse id="path8611" serif:id="path861" cx="19" cy="6.999" rx="2" ry="1.999" style="fill:rgb(232,72,80);"/>
    <ellipse id="circle8631" serif:id="circle863" cx="19" cy="6.999" rx="2" ry="1.999" style="fill:none;stroke:rgb(122,0,0);stroke-width:0.99px;"/>
    <ellipse id="path8612" serif:id="path861" cx="11" cy="18.999" rx="2" ry="1.999" style="fill:rgb(232,72,80);"/>
    <ellipse id="circle8632" serif:id="circle863" cx="11" cy="18.999" rx="2" ry="1.999" style="fill:none;stroke:rgb(122,0,0);stroke-width:0.99px;"/>
</svg>
```

While we could stop here and call it a day, we might as well go all the way and apply some compression, so we can with a clean conscience, say we did our utmost to make sure that the SVG icon will be rendered with as little overhead as possible.

Fortunately, there are plenty of tools on the internet to help us compress our icons.
My usual approach is to first use [Vecta Nano](https://vecta.io/nano) and then [SVGOMG](https://jakearchibald.github.io/svgomg/), although the combination does not always result in a smaller size.

<img width="369" alt="image" src="https://github.com/pencil2d/pencil/assets/1045397/e39ee41f-fad8-4e6b-8d52-732eea7177be">

In this case, though, we shaved off an additional 119 bytes—not much, but we take what we can get.

The end result:
```xml
<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 22 22"><path fill="#ececec" fill-opacity=".99" d="M2.5 2.5h17v17h-17z"/><path fill="#2f7ede" fill-opacity=".99" d="m7 6 4 2v7l-2-1-2-8z"/><path fill="#164b88" d="M15.05 6 11 8v7l2-1 2.05-8z"/><path fill="#6fafde" fill-opacity=".99" d="m7 6 4-1 4.05 1L11 8 7 6z"/><g fill="none" stroke="#000"><path d="m15 6-2 8.5-2 1-2-1L7 6l4-1.5L15 6z"/><path d="M2.5 2.5h17v17h-17z"/></g><circle cx="3" cy="7" r="2" fill="#e84850"/><circle cx="3" cy="7" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/><circle cx="19" cy="7" r="2" fill="#e84850"/><circle cx="19" cy="7" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/><circle cx="11" cy="19" r="2" fill="#e84850"/><circle cx="11" cy="19" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/></svg>
```

or with newlines:
```xml
<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 22 22">
    <path fill="#ececec" fill-opacity=".99" d="M2.5 2.5h17v17h-17z"/>
    <path fill="#2f7ede" fill-opacity=".99" d="m7 6 4 2v7l-2-1-2-8z"/>
    <path fill="#164b88" d="M15.05 6 11 8v7l2-1 2.05-8z"/>
    <path fill="#6fafde" fill-opacity=".99" d="m7 6 4-1 4.05 1L11 8 7 6z"/>
    <g fill="none" stroke="#000">
        <path d="m15 6-2 8.5-2 1-2-1L7 6l4-1.5L15 6z"/>
        <path d="M2.5 2.5h17v17h-17z"/>
    </g><circle cx="3" cy="7" r="2" fill="#e84850"/>
    <circle cx="3" cy="7" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/>
    <circle cx="19" cy="7" r="2" fill="#e84850"/>
    <circle cx="19" cy="7" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/>
    <circle cx="11" cy="19" r="2" fill="#e84850"/>
    <circle cx="11" cy="19" r="2" fill="none" stroke="#7a0000" stroke-width=".99"/>
</svg>
```

With that, we should be ready to import the icon and display it in Qt.

### Verify the result

The Qt framework officially supports [SVG 1.2 Tiny](http://www.w3.org/TR/SVGMobile12) specification, which means that not all fancy features that your vector application utilizes will be supported. As such, if you end up with an icon that looks off, has a blank background, or does not show at all, go back to the application and simplify the SVG until it looks correct.


## Want to join the fun?

Pencil2D is developed by passionate volunteers in their spare time. You can also become a volunteer and contribute in various ways, not just through programming! Please visit the [Contribute Page](https://www.pencil2d.org/contribute/) for more information.

If you have any questions or feedback, please feel free to reach out to us on our [Forum](https://discuss.pencil2d.org/) or [Discord](https://discord.gg/8FxdV2g).
