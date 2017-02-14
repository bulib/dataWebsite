---
layout: page
title: Data Management Plans
permalink: /data-management-plans/
category:
---

# Data Management Plans 

Add content here about data management plans 

{% for page in site.pages %}{% if page.category contains "dmp" %} 

### [ {% if page.title == "National Science Foundation" %} NSF: {% else %} {{ page.title }} {% endif %} {{ page.subtitle }} ]({{ site.baseurl }}{{ page.permalink }})

{% endif %}{% endfor %}

## Add data management plan selector dd
