---
layout: post
title: "Windows Installers Now Available in Nightly Builds"
tagline: ""
categories: "News"
author: "The Pencil2D Team"
date: "2025-12-14"
published: true
comments: false
---

We're excited to announce that Pencil2D now has Windows installers! This long-awaited feature, developed by our core developer [Jakob](https://github.com/J5lx), is available through our [nightly builds]({{ "/download/nightly/" | relative_url }}).

## Why an Installer?

For years, Pencil2D has been distributed as a portable ZIP file for Windows users. While this works great for some people, we also see challenges for many others who are less familiar with technical processes.

We've seen requests from users who:
- Didn't know they needed to extract all files from the ZIP archive
- Didn't know they needed to install the included MSVC redistributable
- Had difficulty locating the executable after extraction
- Simply wanted a more straightforward installation experience
- Wanted only one icon on their desktop to launch Pencil2D

The new installer addresses all of these issues, providing a smooth, professional installation process that anyone can follow.

## What Does the Installer Offer?

The new Windows installer provides several benefits over the portable ZIP distribution:

- **Double-Click Installation**: No more ZIP extraction—just download and run
- **Automatic Runtime Management**: The installer handles MSVC redistributable installation automatically
- **Professional Experience**: A polished, localized installation wizard with proper branding
- **Desktop & Start Menu Shortcuts**: Optional shortcuts for easy access to Pencil2D
- **Proper File Association**: Registers `.pcl` and `.pclx` file types with Windows
- **Clean Uninstallation**: Complete removal of all installed files when needed
- **Upgrade Support**: Seamlessly update to newer versions while preserving your settings

Special thanks to Jakob for the incredible dedication and technical expertise required to create this professional-grade Windows installer. The installer is built using the WiX Toolset and includes support for multiple languages, custom branding, and features you'd expect from a Windows installer. You can see the complete development process in [Pull Request #848](https://github.com/pencil2d/pencil/pull/848).

## Try It Now!

The installers are currently available in our [nightly builds]({{ "/download/nightly/" | relative_url}}). We encourage Windows users to give them a try and let us know what you think!

**Important Note**: The nightly builds contain the latest development version of Pencil2D and may include experimental features.

You will find two installer formats in the nightly builds:

### Setup (.exe) - Recommended
- **Filename**: `pencil2d-win64-<version>.exe`
- **What it includes**: Complete installation bundle with Pencil2D and MSVC runtime libraries
- **Suitable for**: Most users—provides a complete one-click installation experience

### MSI Package (.msi) - Advanced
- **Filename**: `pencil2d-win64-<version>.msi`
- **What it includes**: Bare-bones Pencil2D installation package only (without MSVC runtime). It is your responsibility to ensure a compatible MSVC runtime is available.
- **Suitable for**: System administrators or enterprise deployments
- **Note**: The package is dual-purpose and installs in a per-user context by default. For a per-machine installation, set the `MSIINSTALLPERUSER` property to an empty string ("").

## Portable Version Still Available

Don't worry—if you prefer the portable ZIP version, it will continue to be available! The installer is simply an additional option.

## We Want Your Feedback

As with any new feature, we'd love to hear your thoughts! If you encounter any issues or have suggestions for improvements, please let us know through [our forum](https://discuss.pencil2d.org/) or [Discord server](https://discord.gg/8FxdV2g).

Thank you for being part of the Pencil2D community. We hope the new Windows installer makes your life easier!
