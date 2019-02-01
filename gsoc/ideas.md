---
layout: page
title: Pencil2D Project Ideas
tagline: Google Summer of Code 2019
comments: true
---

{% include toc.html %}

# Getting Started

This page contains a list of potential project ideas based on the areas that that our development team deemed the primary focus for 2019. If you would like to apply as a GSoC student, please follow these steps to get started:

+ Play around with our tools! Trying out Pencil2D should be a first step for everyone so that they know this project interesting and is right for them. Trying the program is useful for starting to understand all that we have done and all that we still have to do.
+ Read through this page and identify the project ideas you find interesting.
+ Join us on our dedicated GSoC channel on [Discord](https://discord.gg/8FxdV2g) and talk to your potential mentors, so we can get to know each other and you can meet our community.
+ Read through and follow our [Proposal Guidelines](proposal.html) to make your submission the best it can be!

# Mentors

Pencil2D's mentors are working professionals who have each been with the project for many years. They are familiar with all parts of the codebase, but may specialize in specific areas. They can help with virtually any project, and we're sure they will be able to provide you with the nurturing feedback you require for your proposal. Mentors for each project are selected based on their technical expertise and interest in a given project while taking into consideration the needs of each student. While you are assigned a specific mentor, you will find that many of the Pencil2D developers will be willing to give you feedback and help on the public development channels even if they have not agreed to mentor this year. For this reason, you are encouraged to use these channels for questions which developers other than your mentor may be able to answer for the faster response.

# Project Ideas Overview

For any of the proposed project you will need to research Pencil2D codebase, read GitHub issues to understand how the project has evolved, and talk with developers to put together a complete project proposal. It's also fine for you to come up with your own project ideas. The projects proposed below stem from key areas that we'd like to improve after taking into account our users and other developers' insights.

To assist you in finding a great project to challenge your abilities, we list the skills that are required, but also try to emphasize where strong skills with particular tools are likely to be critical for any given project. While it is definitely possible to learn any of these skills and still finish the project, we must balance our desire to help you learn with a realistic understanding of what can be achieved in the limited timeline of the Google Summer of Code program. If you are truly passionate about a particular project, but do not have the required skills, please note this on your proposal, and take the initiative to learn the skills necessary on your own. Then let the developers know what progress you've made before the submission evaluation deadline and we will re-evaluate your submission.

Demonstrating your skills by contributing to an open source project like Pencil2D can be very important to your submission to:
+ Show that you can work effectively in a large codebase (it doesn't matter what part of Pencil2D, and we're happy to consider work in other open source projects).
+ Test your work before submitting for review. To us quality is more important than quantity.
+ Follow the [coding guidelines](https://github.com/pencil2d/pencil/issues/683) we are currently developing to make sure your code is clean and easy to understand (and don't worry if you make mistakes in your first few contributions! Everyone makes mistakes getting started).

When you've gotten a feel for our program and it's code, you should start discussing with the Pencil2D development community the project you'd like to do, and developing a specific project plan. We recommend discussing what you're thinking in #gsoc-2019 channel of our Discord server (see Getting Started), so it's easy to get quick feedback on the idea.

# GSoC 2019 Project Ideas

Without further ado, here are some of the ideas which are high priority tasks in our opinion.

## Error Reporting

**Difficulty:** Easy

**Project Core Objective:** Create a way for users to easily submit error reports.

**Description:**

Although we have been working hard to eliminate program crashes, they still
unavoidably happen from time to time. When a user's program does crash, it often
goes unreported. Even if they do report it, it is very difficult for us to get
enough information from the user to isolate the cause of the crash.

To address this issue we would like to have an error reporting dialog popup when
Pencil2D crashes. This dialog would present the user with a simple one-click
method of sharing all the details necessary for the Pencil2D developers fix
the crash. This information includes the exact version, system specifications,
and a stack trace. Additionally debug builds should send a log of actions taken
leading up to the crash. This many involve adding more debug messages throughout
the code for more useful logs. The user's file may also be uploaded with their
consent to help developers replicate the issue. An optional field for the user's
email address could also be included so the developers can notify the user when
the issue has been fixed or solicit more information from the user.

A server-side program will also have to be created to allow the reports to be
uploaded and accessed in some way by the Pencil2D developers. We currently do
not have any custom dynamic server pages, so the language used to achieve this
is up for discussion.

- **Proposal Tag:** `other`
- **Skills required:** C++, Qt, PHP or some other server backend language
- **Co-Mentors:** Matt Chang (chchwy), Connor Deptuck (scribblemaniac)

## Sound Scrubbing

**Difficulty:** Intermediate

**Project Core Objective:** Improve the timeline to add sound-scrubbing support

**Description:**

Pencil2D recently re-enabled sound layer support which is very important to any
animation really. A common feature in video editing applications is to allow
the playback of sound when moving the timeline cursor. This reduces the time it
takes to align sound with animations and can help a lot with lip syncing, both
of which are things which we aim to support.

In order to implement this, you may have to modify the timeline slightly to
enable higher precision playback, and you will need to modify our sound system
to play automatically when the cursor moves. You will have to figure out exactly
what part of the sound layers should play in response to specific cursor move
events. There also should be some option to enables/disable this feature since
some may find it annoying or not useful.

- **Proposal Tag:** `sound`
- **Skills required:** C++, Qt (useful, but optional for application), Jack Audio or a similar library (not required, and not currently in use, but may be worth investigating to implement alongside this project)
- **Mentor:** Matt Chang (chchwy)
- **Backup Mentor:** Connor Deptuck (scribblemaniac)

## Backup and Recovery

**Difficulty:** Intermediate

**Project Core Objective:** Protect our users' work from being lost or corrupted with new backup and recovery mechanisms.

**Description:**

Older versions of Pencil2D were notorious for corrupting project files. We have
put a lot of work into fixing this and have almost completely eliminated this
very frustrating problem for our users. However we still get the rare report of
being unable to open a file, and changes that we make in the future could
reintroduce this issue unintentionally. We do not want users to have to worry
about ever losing their work, which is why it is important that we implement
effective backup and recovery mechanisms.

The exact mechanisms that we should use are still up for debate, but may
include some combination of the following solutions:
- An option to automatically rename the old project file to a backup when
saving.
- Test saves immediately after saving for file integrity.
- Check for project folders in temporary storage on startup and provide the user
the option to recover or remove any of those project which likely are there due
to a crash.
- Write files to the disk (in temporary storage) more often in the background
so more work can be recovered with the previous method.
- Autosave in the background. We currently have an autosave feature, but due
to it's intrusive popups most people have it disabled. Running it in the
background would likely lead to greater user adoption.

See the [backup proposal](https://github.com/pencil2d/pencil/issues/1045) for some more details.

- **Proposal Tag:** `backup/recovery`
- **Skills required:** C++, Qt (for recovery dialog)
- **Mentor:** Connor Deptuck (scribblemaniac)
- **Backup Mentor:** Matt Chang (chchwy)

## Vector Engine Improvement

**Difficulty:** Hard

**Project Core Objective:** Fix or replace our buggy vector engine.

**Description:**

The vector layer in Pencil2D is practically unusable at the moment due to
many bugs, particularly with drawing, rendering, and manipulating. One solution
to this is obviously to fix the bugs in some cases this is the only solution.

It is probably best in the long term if we replace the current implementation
with a third-party vector library to improve performance, stability, and
maintainability. We have not settled one specific library yet, the only strict
requirements we would have is that it must be: easy to connect with our code
(ie. C/C++), open source, and cross-platform. Support for hardware acceleration,
Qt, and SVGs are all nice to have. Cairo is a very popular library, and
[here are some alternatives] to explore as well. If you are submitting a
proposal for this feature, please say which library you would use and explain
why.

- **Proposal Tag:** `vector`
- **Skills required:** C++, vector library (not strictly required)
- **Co-Mentors:** Matt Chang (chchwy), Connor Deptuck (scribblemaniac)

## Timeline Rewrite

**Difficulty:** Hard

**Project Core Objective:** Rewrite the timeline for better optimization and extensibility

**Description:**

The timeline we are currently using is a very old remnant of the Pencil program
from which Pencil2D was forked nearly 6 years ago. Problems with it include its
non-native display, poor speed performance, and it was coded in a way that is
very difficult to add new features to. While few users will notice a significant
difference after these changes, it is very important to us moving forward so
that we continue to provide a responsive program and add many new requested
features which are waiting for the timeline to be more flexible (for example,
layer effects and groups are two important things that would require much less
work to implement with a refactored timeline).

Work on this project has already started. There is a barely-started
[abandoned implementation](https://github.com/scribblemaniac/pencil/tree/timeline-rewrite)
that was done by scribblemaniac, who will be one of the main mentors should this
project be chosen. He, along with the other developers, will help guide the
design, but it will be up to you to implement the structure and current
features. If you manage to implement all of the features from the old timeline,
you may look into implementing some new timeline/layer features which pique your
interest. A strong background in Qt will be needed for this project.

- **Proposal Tag:** `user interface`
- **Skills required:** C++, Qt, UI design (useful, not strictly necessary)
- **Mentor:** Connor Deptuck (scribblemaniac)
- **Backup Mentor:** Matt Chang (chchwy)

## MyPaint Integration

**Difficulty:** Hard

**Project Core Objective:** Integrate, or make significant progress towards integrating MyPaint into Pencil2D.

**Description:**

Nearly three years ago, the developer François Téchené (username: feeef) created a
branch of Pencil2D which aimed to integrate the
[MyPaint library](https://github.com/mypaint/libmypaint) into Pencil2D.

MyPaint is a painting-oriented image manipulation library which has support for
a wide variety of brushes and hardware (drawing tablets particularly). It has
become a standard in the open source community with many drawing program using
it or at least providing the option to use it.

Integrating MyPaint is a high priority task for us as enables better
compatibility with a variety of hardware, provides the brush tools that digital
artists have come to expect, and enables higher quality artwork to be produced
in-app, which is all very much inline with our vision for Pencil2D. Oh and as
the icing on the cake, it should also provide significant speed improvements,
which is something we always concern ourselves with.

Feeef's mypaint branch is [available online](https://github.com/feeef/pencil/tree/mypaint),
and is in at least a functional state. However there were many issues with it
that were left unsolved. These issues include: the vector engine,
zooming artifacts, rotating the canvas, and perhaps more bugs which we have not
found yet. In addition to the bugs, this branch is very old now, and will
require significant work just to merge it with the hundreds of commits that
have occurred since it was forked, including a major refactor. The current
consensus among developers seems to be that it would be easier to rewrite the
MyPaint branch from scratch and use the old branch purely as a reference than
to try and update the old branch.

Our expectation is not necessarily for you to fix everything and integrate the
changes into master, but to make as much progress towards this as you think is
realistically possible within the 3-month time frame that you have. The MyPaint
branch must get fixed and integrated at some point in our future, so any
progress you can make will be beneficial to our project as a whole.

- **Proposal Tag:** `bitmap`
- **Skills required:** C++, mypaint experience (useful, but optional for application)
- **Mentor:** Matt Chang (chchwy)
- **Backup Mentor:** Connor Deptuck (scribblemaniac)

# Old Ideas

Here are some ideas from last year which still have yet to be implemented, but are not as high priority. It is more important to us that you find a project that *you* want to work rather than a project that we want to you to work on, so do hesitate to submit a proposal for a lower priority feature if it is something you are passionate about.

## Preview Widget

**Difficulty:** Easy

**Project Core Objective:** Add a window which displays a preview of the canvas

**Description:**

Often when a user is painting, especially with a detailed scene, they are zoomed
into a small area. To show the user how their small changes are affecting the
appearance of the whole canvas, we would like to add an external "Preview"
window. This will make Pencil2D easier to use for many of our users. This window
should show the canvas zoomed out to fit, but should not be editable like the
main canvas.

This could be implemented as a QDialog, or perhaps even better as
as QDockWidget, so it can be in it's own window, or attached to the side of the
main window.

- **Proposal Tag:** `user interface`
- **Skills required:** C++, Qt
- **Mentor:** Matt Chang (chchwy)
- **Backup Mentor:** Connor Deptuck (scribblemaniac)

## Shape Tool and Library

**Difficulty:** Easy

**Project Core Objective:** Add a tool which allows users to easily place a variety of shapes

**Description:**

A new tool should be added which allows you to select a shape from a library (or
some other way of selecting from many different shape options), and then draw
that shape on the canvas instantly with the desired scale and rotation simply
by clicking and dragging with the tool. Many of our users use Pencil2D for
animation with simple shapes, and even advanced users will use basic shapes as
a base for more complex figures. This shape library can greatly improve the
quality of the artwork and the speed to make it for these users.

Implementing this feature will require adding support for the tool on both
bitmap and vector layers. The library should include the following shpaes (but
is not limited to only these shapes): rectangles, circles, squares, n-gons, and
stars.

- **Proposal Tag:** `vector`
- **Skills required:** C++, experience with vector graphics (very useful)
- **Co-Mentors:** Matt Chang (chchwy), Connor Deptuck (scribblemaniac)

## Lasso Tool

**Difficulty:** Intermediate

**Project Core Objective:** Add a lasso selection tool to Pencil2D

**Description:**

A lasso selection tool is a common tool in image editing applications, and you
can look to any of them (ex. GIMP, Photoshop, Krita) for an idea of how it
should work, although it may be under a different name such as a "Free Selection"
tool. The basic idea is to allow the user to draw a selection using a
combination of hand-drawn and/or arbitrary straight lines to create a selection.
As mentioned, this is a common tool for image editing, so we need to add it to
support typical digital workflows and to provide the features that digital
artists expect.

The current code for selection is a bit messy and may need some refactoring to
properly implement this new feature. Additionally it will take some
consideration to assure that the selection transformation tools work well with
these irregular selections. Finally, during the selection process, you will need
to save the current selection line and render it live on the canvas. You should
be able to find some useful code for this in our existing polyline tool.

As an extension of this project if you are feeling very ambitious, many of the
higher-end editors have some form of a "smart lasso tool", or "magnetic
selection tool" which will have similar user interactivity to the lasso tool,
but will automatically fit the selection to the contours of the image/layer. To
determine how this is done, you will need to do some research into
implementations of this feature in other open source project, or find relevant
research papers.

- **Proposal Tag:** `other`
- **Skills required:** C++, computer vision experience (extension only)
- **Mentor:** Matt Chang (chchwy)
- **Backup Mentor:** Connor Deptuck (scribblemaniac)

## Improve Free Transform Tools

**Difficulty:** Intermediate

**Project Core Objective:** Improve the free transform tools

**Description:**

Free transform tools are those that allow manipulation of the transformation of
a selected area. We currently have an implementation of this which can be used
by selecting an area and then using the move tool to move, scale, and rotate the
selection. However there is a lot of room for improvement. To make things easier
for animators, there should be obvious rotation handles, a visible and
modifiable anchor for rotation, and the ability to perform perspective
transformations (or at least skews). A good free transform tool can make the
lives of our users much simpler, eliminating the need to redraw things that only
perform these transformations.

To implement this, you will need to understand transformation matrices and how
to apply them to a 2d bitmap image. Some research should be done on how to apply
perspective transformations to vectors. The scope of that task may be limited to
only the bitmap layers if it proves too difficult to perform properly on vector
paths, however the other transformation should work on both bitmap and vector
selections.

- **Proposal Tag:** `user interface`
- **Skills required:** C++, Qt, linear algebra
- **Mentor:** Matt Chang (chchwy)
- **Backup Mentor:** Connor Deptuck (scribblemaniac)

# Even More Ideas

Are you interested in Pencil2D, but none of the idea above interested you? If
this is the case, fear not! We have many, many more things you can work on. The
current best place to find these things is on our [Feature Request Roadmap](https://github.com/pencil2d/pencil/issues/540)
which is a compilation of nearly all of the features we are considering adding
to Pencil2D. Our [Priority spreadsheet](https://docs.google.com/spreadsheets/d/1c2GOMLolfCu6qpwxZ-ZLcb_VIZUeeJd0P-PU8WzJZc4/edit?usp=sharing)
is a bit outdated, but gives any idea of some of the things our developers were
planing on working on last year. Many of these features are still not
implemented. Finally browsing our [Github issues](https://github.com/pencil2d/pencil/issues)
can be a great way to get ideas for new features or find things to fix or
improve.

# Conclusion

We hope to hear from you! And on behalf of everyone in the Pencil2D team we thank you for taking an interest in this wonderful project. We're always happy to help so just reach out if you need us!
