---
layout: page
ref: contribute
title: Contribute
tagline: "Pencil2D is an open source project, developed 100% by volunteers."
---
{% include translated_pages %}

<style>
#upload-action {
  line-height: 2rem;
  display: block;
}

#upload-action img {
  height: 2rem;
  vertical-align: middle;
}

.btn, .btn:hover {
	background: rgb(20,95,179);
	border-color: rgb(67,128,196);
  padding: 0.5rem 1rem;
}
</style>

Thank you for your interest in Pencil2D! **Pencil2D** is a not-for-profit, community-driven free and open source project.

# You can help improve Pencil2D, too!

Pencil2D is developed by passionate people on their spare time.
If you like this software, and you want it to get better, you can help!

## Share your work with us

<button class="btn" id="upload-action" onclick="window.location.href='{{ translated_pages | where: "ref", "share_projects" | map: "url" | first | relative_url }}'"><img src="{{ "/images/upload_icon.svg" | relative_url }}" /> Upload your Pencil2D Projects</button>

Share your projects with us to help development.

We are actively searching for project files (.pclx and .pcl files) created by our users. These real-world projects will helps us to understand how people use our application. And they will be used for catching bugs or testing new features to improve the overall experience.

Do not worry about the quality of your animations, we will never judge you. Our only interest is making sure you have the best experience possible. If you give us permission, we may also share your work publically (giving you full credit of course).

## Share your work with the world

Upload your animations to social media, and say that your work was made with Pencil2D! It helps spread the word about our program and shows how it can be used. We love to sees all the wonderful things that people are creating with Pencil2D!

## Report a bug

**[Reporting bugs][3]** is one of the easiest and most effective ways to improve Pencil2D.

Please report the bug to **[Pencil2D Issue Tracker][3]**, a place where our developers organize tasks, bugs, and features. Don't forget to **describe the exact steps to reproduce** so developers can work on it effectively.

## Translate Pencil2D

Pencil2D has been translated into more than 10 languages by many volunteer translators from all over the world.
Join us on **[Transifex][4]** to translate Pencil2D to your language or improve the existing translations!

## Contributing code

Do you like programming? Pencil2D is developed in **C++** and **Qt Framework**. Get started with our [development document][1] and start building and fixing bugs in just a few steps.

If you have any difficulties getting involved or finding answers to your questions, please bring those questions to the [discord chat room][5] so that we can help you.


[0]: https://github.com/pencil2d/pencil
[1]: https://github.com/pencil2d/pencil/wiki  "Development Wiki"
[2]: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html "GPLv2"
[3]: https://github.com/pencil2d/pencil/issues "Issue Tracker"
[4]: https://www.transifex.com/pencil2d/pencil2d/ "Transifex"
[5]: https://discord.gg/8FxdV2g "Discord Pencil2D"
