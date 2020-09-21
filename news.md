---
layout: page
title: News
tagline: 
---

<h2>Latest Posts</h2>

<div>&nbsp;</div>

<ul class="post-list">
{% for post in site.posts %}
    <li>

    {% assign date_format = site.cayman-blog.date_format | default: "%-d %b, %Y" %}
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
    </h2>

    <span>{{ post.excerpt | strip_html | truncatewords: 70 }}</span>

    </li>
{% endfor %}
</ul>
