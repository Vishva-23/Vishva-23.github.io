---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="container">

  <div class="card">
    <h2>Education</h2>
    <ul>
      <li><strong>Master’s in Data Science</strong>, XYZ University, 2024 (expected)</li>
      <li><strong>Bachelor’s in Computer Science</strong>, St. Joseph's College of Engineering, 2021</li>
    </ul>
  </div>

  <div class="card">
    <h2>Work Experience</h2>
    <ul>
      <li><strong>Business Analyst & Machine Learning Intern</strong> - GeoDataTek India Pvt Ltd (May 2024 - Aug 2024)
        <ul>
          <li>Developed Power BI dashboards for warehouse and sales forecasting.</li>
          <li>Worked with machine learning models for sales forecasting.</li>
          <li>Automated data processing using Python and SQL.</li>
        </ul>
      </li>

      <li><strong>Data Analyst Intern</strong> - GSMDATA Tech Pvt Ltd (Mar 2024 - May 2024)
        <ul>
          <li>Designed dashboards for HR, Sales, and Income statements.</li>
          <li>Implemented Power Apps workflows for automation.</li>
          <li>Collaborated with cross-functional teams to analyze business data.</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="card">
    <h2>Skills</h2>
    <ul>
      <li><strong>Programming:</strong> Python, SQL, R, JavaScript</li>
      <li><strong>Data Analysis:</strong> Power BI, Tableau, Pandas, NumPy</li>
      <li><strong>Machine Learning:</strong> Forecasting, Time Series, YOLOv8, Chronos</li>
      <li><strong>Cloud & Tools:</strong> Azure, Google Cloud, SharePoint, JIRA</li>
    </ul>
  </div>

  <div class="card">
    <h2>Certifications</h2>
    <ul>
      <li><strong>Microsoft Certified: Power BI Data Analyst Associate (PL-300)</strong> - 2024</li>
      <li><strong>Google Data Analytics Professional Certificate</strong> - 2023</li>
    </ul>
  </div>

  <div class="card">
    <h2>Projects</h2>
    <ul>
      <li><strong>Aerial Animal Detection Using YOLOv8</strong>
        <ul>
          <li>Trained a custom YOLOv8 model on drone images from the WAID dataset.</li>
          <li>Preprocessed data and fine-tuned the model for accurate wildlife detection.</li>
        </ul>
      </li>

      <li><strong>Sales Forecasting Using Machine Learning</strong>
        <ul>
          <li>Developed a predictive model to forecast sales and quantities for ProductID ESQ.</li>
          <li>Used Chronos and ARIMA for time-series forecasting.</li>
        </ul>
      </li>
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
    <h2>Service and Leadership</h2>
    <ul>
      <li>Mentor for junior interns in Data Science and Power BI.</li>
      <li>Organized technical workshops on ML forecasting models.</li>
    </ul>
  </div>

  <div class="card">
    <h2>Contact</h2>
    <ul>
      <li><strong>Email:</strong> vishvasundar@example.com</li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vishvasundar">linkedin.com/in/vishvasundar</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/Vishva-23">github.com/Vishva-23</a></li>
    </ul>
  </div>

</div> <!-- End of container -->
