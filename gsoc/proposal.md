---
layout: page
title: Pencil2D Proposal Guidelines
tagline: Google Summer of Code 2019
comments: true
---

<style type="text/css">
#references > cite {
  font-style: normal;
  display: block;
}

#references > cite > em {
  font-style: italic;
}
</style>

# Requirements

Here are a couple requirements for all people submitting proposals, please
review them carefully to make sure you fulfill all of the criteria:

- You must [join our Discord server](https://discord.gg/8FxdV2g) and introduce
yourself on the `#gsoc-2019` channel. We use Discord as one of the primary forms
of communication among developers (as well as Github), so it is the best place
to talk about your proposal and get to know the developers. Some of the other
channels are dedicated to the community where you can find and interact with
many of the Pencil2D users.
- You must have a fairly good grasp of **C++**. All of our code is written in C++
and there is simply not enough time to learn the language from scratch and
program your project. If you do not know how to program in C++, or are not very
good at it, but think you can learn the language quickly, then please make note
of this in your proposal. Then learn what you must on your own, and let us know
that you have improved your C++ skills *before* the application review period
has ended and your proposal will be reconsidered in light of this new
information.

Additionally, there are some skills that we do not require for our submissions,
but are very beneficial to have. If you have any of these skills, please say so
in your proposal:
- **Git.** Git is the version control system which we, and the majority of open
source software use to manage our code. You will need to know the basics of
using Git to contribute to our project, however if you are not yet familiar with
it then be prepared to learn it during the Community Bonding period.
- **Qt.** Pencil2D is built on top of the Qt5 framework, so experience with this is
a big bonus, and may even be necessary if your proposal requires significant
changes to the GUI.
- **Animating.** Experience with making animations, either in Pencil2D or in
professional software is very useful. Understanding the possible workflows of
our users helps with designing features that provide a positive user experience.
This is more important for issues where understanding how the feature is used in
other environments is key to creating an implementation that is intuitive and
useful for animators of all experience levels.
- **FFmpeg/libavcodec or other video processing libraries.** If your proposal is at
all related to import/export, having experience with the relevant libraries is
obviously useful. We currently use FFmpeg for video export, but we are open to
supporting additional backends.

# The Idea

The primary purpose of any proposal is to submit the idea that you would like to
work on. Choosing the right idea is something only you can do, as it should
reflect your unique skillset and interests. We have compiled
[a list of ideas](ideas.html) for projects of varying difficulty which we
believe are our highest priorities. It is important to note however that you do
not have to choose from those ideas, and you can propose any changes you wish to
make (there are some links at the bottom of the ideas page where you can find
many more outstanding issues to draw inspiration from).

You should, especially if you are choosing an idea that is not in the idea list,
share your idea with our developers so you can get feedback on it. Among other
things they will be able to tell you if your idea is needed, how well it aligns
with our vision, and if it is realistic for the timeframe you have to complete
it. Integrating their feedback will improve your proposal and the chances of it
being selected.

Above all, the idea you propose should be something you are interested in
working on and that you believe you are capable of completing within the 3 month
timeline of the Google Summer of Code program.

# Proposal Template

Here is a proposal template that we have developed. All applications should have
at least all of these sections filled out. Feel free to copy this this template
to use as a starting point for your application.

**The Template:**
<hr/>

### About Me

Introduce yourself here. Include all the basics and your background.
Specifically include:
- Any relevant experience you have (especially with C++). See the Requirements
section for some ideas here.
- Any commitments you have this summer that we should be aware of. This includes
planned breaks/vacations and any jobs you have or are planning on having this
summer aside from GSoC.
- How many hours are you planning on spending each week on your project if it is
selected?
- Your development environment. What operating system do you use to program?
What editor? Why? Tabs or spaces? (okay that last one was just a joke!)
- Your timezone and hours of availability. We need this information for matching
you with a mentor that is able to have meet with you during at least some of
these times.
- What attracted you to this project, and what do you hope to gain from it? This
helps us understand your motivations and will help us target interested
students better in the future.
- Any relevant online profiles you have. For example, provide a link to your
Github account if you've done open source work before, or to your LinkedIn
profile if you have one. If you have animated before, feel free to share some
links to your art as well.
- The best ways to contact you. Provide an email address at least, and any other
communication information you want to use with our developers and GSoC
organization administrators.

Feel free to add any other information here that you think we might be
interested in, such as your hobbies or what you are going to school for.

### The Idea

This section is for everything relevant to what you are actually proposing. Here
are the key points you should have:
- What do you want to achieve? Provide a 1-2 sentence summary, and then get into
more detail. If you are taking an idea from somewhere (the Ideas Page or an
issue for example), then you are expected to elaborate on the idea as much as
possible to show an understanding of the problem.
- How are you going to do it? Again try to be as detailed as possible. Break the
work up into small subtasks.
- Provide an estimate of the difficulty of each of the aforementioned subtasks.
Use this to create a timeline showing a general plan for the 3 months and how
long you will be spending on each of the subtasks. This is not a final schedule,
you will have chances to update it during the Community Bonding period and it
can be modified again during the Coding period if necessary.
- Has work on something like this been done before? Work in Pencil2D, similar
work in other programs (especially open source ones), or relevant academic
papers?
- Have you worked on a similar project before? What did you learn from it?

### Works Cited

If you used any sources, they must be cited. Use APA format if you can, but the
important part is providing enough information to convey where you got all of
your information from. If you are reading this text, then you probably need to
cite the page you got this template from.

<hr/>

# Improving Your Chances

In addition to following all of the guidelines above, here are a few things you
can do to better the chances of your proposal being selected:

- **Interact with the community.** We have a lively community of animators and
artists who use our software, and more people are joining everyday. Interacting
with the community on any of
[our platforms](https://pencil2d.github.io/community/) is a great way to get to
start getting involved with our project. Whoever is selected will have to do
some of this anyway during the Community Bonding period, but it certainly helps
to get a head start! <br/><br/>
- **Contribute.** Unlike some other GSoC organizations, we do not have a patch
requirement. However, if you do make a pull request on our Github repository
with a fix to one of
[our many issues](https://github.com/pencil2d/pencil/issues) or some new
feature, that shows that you already have a development environment set up and
have explored at least some of our source code. This reflects very well on you
and helps show us that you have the skills to see your proposal through. <br/><br/>
- **Using Pencil2D.** Many of our developers are not animators, but it's still
important that we understand how our application is used. It is highly
recommended that you experiment with the program until you understand how it all
works. Making a small little animation is a great way to do this, and posting
the animation in our showcase channel on Discord is a good way to show off the
work you've done. Don't worry if you don't think it is any good, it is a
judgement-free zone. It is your familiarity with Pencil2D, not your art skills
that we are interested in here. <br/><br/>
- **Be creative.** Any of the above points show initiative, but feel free to
come up with your own ways of showing what this project means to you. Yes we are
hoping to have something useful done by the end of summer, but ultimately we are
looking for lifelong contributors. Anything that shows your passion for our
project or your ability to work well with the existing developers will be
tremendously valuable when it comes time for us to select a proposal.

## Works Cited
Yes even we have to cite our work!

<div style="padding-left: 0.5in; text-indent: -0.5in;" id="references">
  <cite>Gede, G. (2015). GSoC 2015 Student Application Template. <em>PyDy</em>. Retrieved from <a href="https://github.com/pydy/pydy/wiki/GSoC-2015-Student-Application-Template"> https://github.com/pydy/pydy/wiki/GSoC-2015-Student-Application-Template</a></cite>
  <cite>Moore, J. K. (2016). GSoC 2016 Student Application Template. <em>PyDy</em>. Retrieved from <a href="https://github.com/pydy/pydy/wiki/GSoC-2016-Student-Application-Template">https://github.com/pydy/pydy/wiki/GSoC-2016-Student-Application-Template</a></cite>
  <cite>Paalanen, P. & Kat (2016). Application instructions for students. <em>Wayland</em>. Retrieved from <a href="https://phabricator.freedesktop.org/w/wayland/gsoc_2016/application_instructions/">https://phabricator.freedesktop.org/w/wayland/gsoc_2016/application_instructions/</a></cite>
</div>
