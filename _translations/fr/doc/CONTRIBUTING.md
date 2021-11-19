---
layout: page
title: Documentation Contribution Guide
tagline: Contribute to Pencil2D by improving all kinds of documentation!
---
{% include translated_pages %}

> _This is the contribution guide for user & developer documentation media & technical writing for Pencil2D_

> _If you're interested in donating your time through other tasks including programming, consider reviewing our [**Contribute**]({{ translated_pages | where: "ref", "contribute" | map: "url" | first | relative_url }}) page._

> _If you need to contact please visit our [**Community**]({{ translated_pages | where: "ref", "community" | map: "url" | first | relative_url }}) driven hubs. For real-time contact we're available through [**Discord**](https://discord.gg/8FxdV2g) and you can use our dedicated [**Forum**](https://discuss.pencil2d.org/) for in-depth discussions on these topics during your contribution time._

{% include toc.html %}

# **Documentation Contribution Guide**

### Quick Reference Guide (_single task claim_)
It’s a hand-out style guide that comes with the software, and presents key concepts that allow the user to get up and running with Pencil2D.

**Tasks**
- Update to the latest version of Pencil2D. Since _0.6.5_ is due to be released before December 2019 so please use the source code compiled version or the nightly builds to work your screenshots
- The guide should be "platform agnostic" however we can't avoid the quirks of either operating system, so please include OS specific screenshots in key points (such as macOS preferences showing in the apple menu)
- It should include a “cheat-sheet” for keyboard shortcuts
- Pending...

### User Manual (_multiple task claim, task per topic_)
It's a simple and direct guide on how to use the software in general, there is no need for in depth descriptions on the features and any that is required will link back to the [reference manual]() when possible.

Think of the writing style as an approachable description of how to use the software in the same way a mentor or a friend would teach you.

**Tasks**
-
- Pending...

### Reference Manual (_multiple task claim, task per topic_)
An in-depth, and sometimes technical, manual that explains inside out how the software works (but still from a user perspective). Here it's important to be thorough but explain things in laymen's terms.

> This is the markdown format to import an image that has been previously uploaded to the current documentation root folder **_images_** folder `![Autosave Preferences]({{ "/images/autosave.png" | relative_url }})`

**Topic Selection**

1. Pick a topic you want to contribute to
2. Fork our website repository
3. Start on writing the topic with all it's possible descriptions and suggest links to other topics within that can be later on realized by any other contributor or yourself.
4. Submit a PR and wait for it to be reviewed as well as possible changes that are suggested.

**Anatomy of a reference topic**
> _Format structure any given topic should have._

- **Insert an icon**, find the related icon on this repository (some features do not have an associated icon so simply use a text title)
- **Insert a Title** (the name of the feature)
- **Feature logline**: Describe how the feature is used in less that 140 characters.
- **Feature description**: In here expand what the logline mentioned using with examples on how to use the feature.
- **Technical options**: This is where you describe all the related feature options and functionality. Links to other reference topics are encouraged.

Try to use as many images as possible where sensible. You can also upload GIF's, we recommend using [LICECap (Win/macOS)](https://www.cockos.com/licecap/) or similar software of choice to capture your GIF's. Don't make full movies, but specific visual aids.

**Topic writing example**
_(WIP)_

> e.g The `![Tool Icon](/images/tool_icon.filetype)` `Pencil tool` is a drawing tool meant to be used mainly for rough sketching and for pre-planning stages of your animation drawings (thumbnailing, underdrawing, etc).

> The Pencil tool Is located in the tools panel and can be accessed in different ways:

> _Note:Images are always encouraged to accompany these instructions._

> - Via the `Top Bar Menu > Tools > Pencil`
> - Via shortcut key `N`
> - By clicking on the `[Toolbox Panel](/link to tool box panel general description)`

> It also has several options associated such as:
> - Pressure Sensitivity `[link to Pressure sensitivity description]`
> - Size `[link to brush description]`
> - Stabilizer `[link to stabilizer description]`

### Developer Manual (_multiple task claim, task per topic_)
Consolidate all the knowledge laid out in the wiki and the docs into a single place and organize it so any new developer can have Pencil2D running from their development environment under half an hour.

**Tasks**
- Pending ...
