---
ref: hacktoberfest_alt_guide
title: "Guide for Non-Developer Contributors"
tagline: "Hacktoberfest 2020"
---
{% include translated_pages %}

# Getting Started

Pencil2D is proud to participate actively in Digital Ocean's Hacktoberfest event, during which you can receive a free T-shirt for contributing to our project (or any other open source project).

This guide will walk you through all the things you need to know to participate in this as a **non-developer**.

> _If you do know how to program in C++, we have created a guide [specifically for developers]({{ translated_pages | where: "ref", "hacktoberfest_dev_guide" | map: "url" | first | relative_url }}) that you can look at.
> We kindly encourage you to use your programming expertise to help us, as we are always in need of programmers to fix bugs and add new enhancements to improve the application further._

# Github? Pull Requests? What are these?

Github is a popular website for people to collaborate on open source projects. If you are not familiar with the process of contributing to Github repositories (projects), you will have to learn the basics of it in order to make contributions that are recognized by Digital Ocean and which count towards you free T-shirt. Here are a few resources for getting started:
- [GitHub Guides](https://guides.github.com/) This is the source for official guides from Github. This includes a collection of short text-based guides, as well as a collection of video guides.
- [Git for non-programmers](https://jarboo.com/resources/git-for-non-programmers/) This blog post is a helpful introduction to the Github and git, and uses a user-friendly graphical interface rather than the more technical command-line interface.
- [Pro Git](https://git-scm.com/book/en/v2) This is *the* definitive resource for learning the git command line application. If you are planning on getting into programming eventually or want to use git more in the future, this is will teach you every thing you need to know, plus an additional 500 pages of everything else you could ever learn about git.

# What Can I Do?

No experience programming with C++? No problem! There are other things you help us with:
- We are in need of **documentation contributions** to help new users learn the ropes of Pencil2D. Please visit our [Pencil2D website repository](https://github.com/pencil2d/pencil2d.github.io), and read the documentation [CONTRIBUTING](https://github.com/pencil2d/pencil2d.github.io/tree/master/doc/CONTRIBUTING.md) file for a detailed guide on how to contribute to our different documentation media.
- We're interested in high quality animation files to **demo** key features of the the software. If in need of demoing.
- If you are fluent in a foreign language you can help by **translating** and **proofreading** the messages in Pencil2D into your language. You can find and help with our translations on the [Transifex platform](https://www.transifex.com/pencil2d/pencil2d/). You can submit the modified translation files to our [main repository](https://github.com/pencil2d/pencil) to contribute towards your PR count if you want.
- If you are experienced with **web development**, our website also has an open source repository [available here](https://github.com/pencil2d/pencil2d.github.io). It is a static website so we don't have many things to work on for it at the moment, but have a look around our site and let us know if there is something you think you can improve upon. Supporting translations is the only thing currently on our issues list, which contributions towards are welcome.
- Get creative! Think about what you are good at and if you can use skills to help us in any way.
  - Are you an artist? Maybe you can make create mockups for parts of our interface.
  - Work in advertising? Maybe you can provide some suggestions for marketing our software.
  - Even simple things like spreading the word on social media or thanking the developers can be more helpful than you think (although these won't help you get the t-shirt ;-) ).

_For additional details on any of these points please contact us on one of our official channels (see [Getting Help](#getting-help))._

# Pencil2D's User Guides

We have some work-in-progress documentation for our users where you can discover how to use Pencil2D:
+ [User Manual]({{ translated_pages | where: "ref", "user_manual" | map: "url" | first | relative_url }}) _A WIP effort to write a simple hands-on guide to learn the basic usage of Pencil2D._
+ [Tutorials (Community)]({{ translated_pages | where: "ref", "tutorials" | map: "url" | first | relative_url }}) _A compilation of old & new community tutorials on using Pencil2D._
+ [FAQ]({{ translated_pages | where: "ref", "faq" | map: "url" | first | relative_url }}) _Frequently Asked Questions; In need of an update._

# Tracking Our Progress

Visit our [Hacktoberfest Milestone](https://github.com/pencil2d/pencil/milestone/10) for limited-time only to see what work has been done for Hacktoberfest! We will also post some updates on our [official social media channels]({{ translated_pages | where: "ref", "community" | map: "url" | first | relative_url }}) to share what people have contributed as part of Hacktoberfest.

# Github Repository (N)ettiquete

**To avoid duplicate work** from participants that want to implement the same issues, we highly recommend the following:
+ On _Github_ you have to _"claim"_ an issue by commenting on the issue(s) you want to work on in. Task assignment will be handled on a first come, first serve basis. Make sure you explicitly mention you will be working on it for **Hacktoberfest** so we can keep track of it.

+ If you want to work on a **feature** or **fix** that does not have a corresponding issue, please **submit one before starting** to get input from our main developers and avoid duplicate or unnecessary work.

+ If two people do end up submitting pull requests for fixing the same feature, both will count towards your Hacktoberfest progress, but we will probably only use the better of the two implementations.

+ If any submission is identical to a previously submitted PR, the PR that was submitted later will be considered to be plagiarized and will not count towards your Hacktoberfest progress. Spam PR with no meaningful changes will also be marked as invalid so that they do not count towards your Hacktoberfest progress.

+ For general behavior, please abide by [our code of conduct](https://github.com/pencil2d/pencil/blob/master/CODE_OF_CONDUCT.md). TL;DR: Be nice to everyone.

# Getting Help

If you want to participate in Hacktoberfest with us but are having issues at any point, you can contact us and we will do our best to help you.

+ You can reach us on any of our [official channels]({{ translated_pages | where: "ref", "community" | map: "url" | first | relative_url }}).
+ To get help for Hacktoberfest you can use our [forum](https://discuss.pencil2d.org) or [Discord server](https://discord.gg/8FxdV2g) `#general-development`, `#website`, or `#document` channels depending on which channel is most appropriate for what you are working on.

_Note: Pencil2D is not related or sponsored by Digital Ocean in any way. We are simply promoting their event which has a beneficial impact in the open-source community and should not be considered as corporate endorsement of any kind to our project._
