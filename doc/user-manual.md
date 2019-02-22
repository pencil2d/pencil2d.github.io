---
layout: page
title: User's Manual
tagline: Walk through the basics of using Pencil2D 
comments: false
---

{% include toc.html %}

# Welcome! #
You want to animate - and we are here to help. If you don't find the answers you need here, please ask at our [Discord server](https://discordapp.com/invite/8FxdV2g) or our [forum](https://discuss.pencil2d.org/).

Let's begin...
### Working habits ###
The guidelines we give here are just that. It's a guide. There is no right or wrong way to do things in animation, and when you get more experiences, you will develop your own habits and methods.

Until then you can rely on our recommendations.
## The user interface ##
Before we go to animation, let's have a quick glance at the user interface. 

![Pencil2D User Interface]({{ "/doc/images/pencil2dFull.png" | relative_url }})

In the top you have the menu bar. Here you can load and save files, import images, add layers and much more.

In the bottom you'll find the time-line, that keeps track of your key-frames. 

To the left and right you'll find dockable windows, where you can select tools, colors, choose settings and more. 

In the middle you have the canvas. The canvas is unlimited in size. The white rectangle in the middle of the canvas, is the camera field. When you open Pencil2D the first time, this size will be 800x600 pixels, but you can change it by double-clicking on the camera layer. *Remember* that the bigger camera field you choose, the more RAM and computer power you use and need.
## Let's animate! ##

![Add key-frame]({{ "/doc/images/addDeleteKeys.png" | relative_url }})

Right above the time-line you'll find these buttons.  Here you can Add, Remove and Duplicate key-frames.

Be sure you are on the bitmap layer and on frame 1. Select the pencil tool, and set its width to 4 or 5. Draw a small circle in the middle of the field.

Go to frame 2. Press the Add key-frame button. Draw a small circle a little to the right of the first one.

Go to frame 3. Press the Add key-frame button. Draw a small circle a little to the right of the second one.

Go to frame 1 again. Press the Play icon, and hooray! - you've made your first animation.

If you find it cumbersome to press Add key-frame every time you want a new key-frame, you can make your life easier. Go to the menu and pick Preferences. Press the Time-line icon. Where it says "When drawing on an empty frame:" you choose the first option "Create a new key-frame". Now, every time you go to an empty frame and start drawing, a new key-frame will be created on that frame.

## Onion skin ##

To help your animation process, you can turn onion skin on or off. Onion skin is the ability to see the previous and/or next keyframes. In the Preferences you can set the number of drawings to show and their transparency.

![Onion skin in the preferences]({{ "/doc/images/onionskin_preferences.png" | relative_url }})

You can choose to have up to 60 keyframes shown as onion skin, but we recommend that you choose one or two drawings. The transparency is a matter of taste. Values between 15 % and 50 % seems to be a good choice.

![Onion skin in Display options]({{ "/doc/images/onionskin_displayOptions.png" | relative_url }})

In the Display Options dock, you can turn onion skin on and off. Here you can also set the color of the previous drawings to red, and the next drawings to blue. This color coding can be very helpful. Here is how a simple ball-animation looks like with red and blue onion skin.

![Onion skin in animation]({{ "/doc/images/onionskin_animation.png" | relative_url }})

If you press this button on the timeline: ![Onion skin on timeline]({{ "/doc/images/onionskin_timeline.png" | relative_url }}) the onion skin doesn't show the previous and next keyframe, but the previous and next frame. In the following illustration you can see that this is no help.

![Onion skin in animation]({{ "/doc/images/onionskin_animation2.png" | relative_url }})

