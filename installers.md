---
title: Installers
layout: default
permalink: /installers
author: muziejus
---

<h1>Plain Plain Text Installer Tutorials</h1>

Here are direct links to all of our software installation tutorials.

{% for installer in site.modules %}
{% if installer.url contains "install/" %}
<h4 module="install/{{ installer.slug }}">{{ installer.title}}</h4>
{% endif %}
{% endfor %}
