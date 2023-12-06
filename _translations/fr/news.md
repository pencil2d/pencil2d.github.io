---
layout: page
ref: news
title: Nouvelles
tagline:
---
{% include translated_pages %}
{% assign siteposts = translated_pages | where: 'layout', 'post' | sort: 'date' | reverse %}
<ul class="post-list">
{% for post in siteposts %}
    <li>

    {% assign date_format = site.cayman-blog.date_format | default: "%-d %b, %Y" %}
    <span class="post-meta">{{ post.date | date: date_format }}</span>

    <h2>
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
    </h2>

    <span>{{ post.content | strip_html | truncatewords: 70 }}</span>

    </li>
{% endfor %}
</ul>
