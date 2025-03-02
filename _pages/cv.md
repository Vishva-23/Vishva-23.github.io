---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="container">

<div class="card">
<h2>Education</h2>
<ul>
<li>Ph.D in Version Control Theory, GitHub University, 2018 (expected)</li>
<li>M.S. in Jekyll, GitHub University, 2014</li>
<li>B.S. in GitHub, GitHub University, 2012</li>
</ul>
</div>

<div class="card">
<h2>Work Experience</h2>
<ul>
<li><strong>Spring 2024: Academic Pages Collaborator</strong>
  <ul>
    <li>GitHub University</li>
    <li>Duties include: Updates and improvements to template</li>
    <li>Supervisor: The Users</li>
  </ul>
</li>

<li><strong>Fall 2015: Research Assistant</strong>
  <ul>
    <li>GitHub University</li>
    <li>Duties included: Merging pull requests</li>
    <li>Supervisor: Professor Hub</li>
  </ul>
</li>

<li><strong>Summer 2015: Research Assistant</strong>
  <ul>
    <li>GitHub University</li>
    <li>Duties included: Tagging issues</li>
    <li>Supervisor: Professor Git</li>
  </ul>
</li>
</ul>
</div>

<div class="card">
<h2>Skills</h2>
<ul>
<li>Skill 1</li>
<li>Skill 2
  <ul>
    <li>Sub-skill 2.1</li>
    <li>Sub-skill 2.2</li>
    <li>Sub-skill 2.3</li>
  </ul>
</li>
<li>Skill 3</li>
</ul>
</div>

<div class="card">
<h2>Publications</h2>
<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
</div>

<div class="card">
<h2>Talks</h2>
<ul>
{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html %}
{% endfor %}
</ul>
</div>

<div class="card">
<h2>Teaching</h2>
<ul>
{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
</div>

<div class="card">
<h2>Service and Leadership</h2>
<ul>
<li>Currently signed in to 43 different slack teams</li>
</ul>
</div>

</div> <!-- End of container -->
