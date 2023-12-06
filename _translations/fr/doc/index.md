---
layout: page
ref: docs
title: User's Guide
tagline: Getting Started with Pencil2D
---
{% include translations %}
{% include translated_pages %}

> We are looking for community's support to help improve the documentation. Pencil2D cannot grow and attract more users without you. [Join us](https://discuss.pencil2d.org/t/help-wanted-user-documentation/2565)!

<div><!-- --></div>

<div class="tiles" style="text-align:center">

  <div class="doc-tile">
    <a href="{{ translated_pages | where: "ref", "tutorials" | map: "url" | first | relative_url }}" >
      {% include iconmonstr-video-2.svg %}
    </a>
    <a href="{{ translated_pages | where: "ref", "tutorials" | map: "url" | first | relative_url }}" ><h2 class="doc-title">{{ translations.tutorials[page.language] }}</h2></a>
    A series of video tutorials for beginners
  </div>

  <div class="doc-tile">
    <a href="{{ translated_pages | where: "ref", "faq" | map: "url" | first | relative_url }}">
      {% include iconmonstr-help-4.svg %}
    </a>
    <a href="{{ translated_pages | where: "ref", "faq" | map: "url" | first | relative_url }}"><h2 class="doc-title">{{ translations.faq[page.language] }}</h2></a>
    Frequently asked questions <br/><br/>
  </div>

  <div class="doc-tile">
    <a href="{{ translated_pages | where: "ref", "user_manual" | map: "url" | first | relative_url }}">
      {% include iconmonstr-book-11.svg %}
    </a>
    <a href="{{ translated_pages | where: "ref", "user_manual" | map: "url" | first | relative_url }}"><h2 class="doc-title">{{ translations.user_manual[page.language] }}</h2></a>
    Walk you through the basics of using Pencil2D
  </div>

</div>
<div style="clear:both"></div>
