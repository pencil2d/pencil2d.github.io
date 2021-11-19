---
layout: page
ref: community
title: Community
tagline: Communities for everyone to share their work
forum_link: https://discuss.pencil2d.org/
fb_link: https://www.facebook.com/groups/709024775972087/
discord_link: https://discord.gg/8FxdV2g
youtube_link: https://www.youtube.com/channel/UCexMjl4rq8OyzAc7C03uKCQ/playlists
tumblr_link: https://pencil2d-software.tumblr.com/
---
{% include translations %}

<div class="tiles" style="text-align:center">
  <div class="community-tile">
    <a href="{{ page.forum_link }}" target="_blank"><img src="{{ "/images/community-forum.jpg" | relative_url }}" alt="Forum Screenshot"></a>
    <a href="{{ page.forum_link }}" target="_blank"><h2 class="post-title">{{ translations.forum[page.language] }}</h2></a>
    Community forum for all Pencil2D animators
  </div>

  <div class="community-tile">
    <a href="{{ page.fb_link }}" target="_blank"><img src="{{ "/images/community-facebook.jpg" | relative_url }}" alt="Facebook Screenshot"></a>
    <a href="{{ page.fb_link }}" target="_blank"><h2 class="post-title">{{ translations.facebook[page.language] }}</h2></a>
    Great place to meet other Pencil2D users
  </div>

  <div class="community-tile">
    <a href="{{ page.discord_link }}" target="_blank"><img src="{{ "/images/community-discord.jpg" | relative_url }}" alt="Discord Screenshot"></a>
    <a href="{{ page.discord_link }}" target="_blank"><h2 class="post-title">{{ translations.discord[page.language] }}</h2></a>
    Great for chatting with other users online
  </div>

  <div class="community-tile">
  <a href="{{ page.youtube_link }}" target="_blank"><img src="{{ "/images/community-youtube.jpg" | relative_url }}" alt="Youtube Screenshot"></a>
    <a href="{{ page.youtube_link }}" target="_blank"><h2 class="post-title">{{ translations.youtube[page.language] }}</h2></a>
    Watch animations made in Pencil2D
  </div>

  <div class="community-tile">
    <a href="{{ page.tumblr_link }}" target="_blank"><img src="{{ "/images/community-tumblr.jpg" | relative_url }}" alt="Tumblr Screenshot"></a>
    <a href="{{ page.tumblr_link }}" target="_blank"><h2 class="post-title">{{ translations.tumblr[page.language] }}</h2></a>
    Animation works on Tumblr
  </div>

</div>
<div style="clear:both"></div>
