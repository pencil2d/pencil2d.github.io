---
layout: post
title: "Development Update: Pencil2D Goes Universal on macOS"
tagline: "Good News for Apple Silicon Users"
categories: "Development Update"
author: "Pencil2D Team"
published: false
comments: true
---

## Native Apple Silicon Support is Here

If you're using one of the newer Apple Silicon Macs (M1, M2, M3, M4 and so on), this is for you. Pencil2D now runs natively on your hardware.

Previously, Pencil2D for macOS was built only for Intel chips. If you're on an Apple Silicon Mac, you've been running Pencil2D through Rosetta 2, Apple's translation layer. While Rosetta works well, native ARM code can run faster, uses less power, and makes better use of your Mac's capabilities.

Now, we've built a **Universal App** that automatically detects and runs in the optimal mode for your Mac. Whether you're on Apple Silicon or still using an Intel Mac, you'll get the best experience for your hardware.

Try it now in our **[Nightly Builds]({{ "/download/nightly/" | relative_url }})**! 

Nightly builds are development versions that include the latest changes. They may be less stable than official releases, but they're a great way to help us test new features before the next stable release.

## A Note on Qt6

Along with this change, you may notice the user interface looks a little different. That's because we've also upgraded from Qt5 to Qt6 under the hood. This upgrade was needed to support features like universal binaries on macOS, and it also gives us a better foundation to build on going forward.

Everything should work the same way you're used to, but if you spot anything that looks off or doesn't feel right, we'd love to hear about it!

## We'd Love Your Feedback

If you're on a Mac, we'd really appreciate it if you could give the new build a spin. Your testing helps us make sure everything is solid before the next stable release.

Have questions, suggestions, or found a bug? Feel free to share your thoughts on [our User Forum](https://discuss.pencil2d.org/) or come chat with us on [Discord](https://discord.gg/8FxdV2g).

Happy animating!
