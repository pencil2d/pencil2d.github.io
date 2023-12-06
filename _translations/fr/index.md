---
ref: home
tagline: An easy, intuitive tool to make 2D hand-drawn animations.
title: Pencil2D Animation
---

<div>
  <div class="tiles">
  <div class="tile">
    <h2>Minimal Design</h2>
    <p>Lightweight and easy to use so you can focus on animating and not what button to hit next.</p>
  </div>
  <div class="tile">
    <h2>Raster & Vector</h2>
    <p>Seamlessly switch between raster and vector workflows, allowing you to sketch, ink & paint on the go.</p>
  </div>
  <div class="tile">
    <h2>Cross-Platform</h2>
    <p>Pencil2D is cross-platform and runs on Windows, macOS, Linux & FreeBSD.</p>
  </div>
  <div class="tile">
    <h2>Open Source & Free</h2>
    <p>Pencil2D is completely open source and free to use, even commercially!</p>
  </div>
  <div style="clear:both"></div>
</div>

<div style="">
<iframe class="showreel" src="https://www.youtube.com/embed/ma52j9B1kEM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>

  <h3>Latest News</h3>
  <ul class="home-post-list">
    {% assign siteposts = site.posts | where: 'language',page.language %}
    {% for post in siteposts limit:5 %}
      <li>
        {% assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" %}
        <a class="home-post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
        <span class="home-post-meta">{{ post.date | date: date_format }}</span>
      </li>
    {% endfor %}
  </ul>
</div>
