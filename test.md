---
title: "Mundana Free Jekyll Theme"
date: 2018-02-22T17:01:34+07:00
layout: default_mun
bodyClass: page-about
---


<div class="container">
    
{% if page.url == "/" %}
    
    
    
<!-- Begin post excerpts, let's highlight the first 4 posts on top -->
<div class="row remove-site-content-margin">
    
    <!-- latest post -->
    {% assign latest_post = site.posts[0] %}
    <div class="col-md-6">
    <div class="card border-0 mb-4 box-shadow">   
    <a href="{{site.baseurl}}{{latest_post.url}}">
    <div class="topfirstimage" style="background-image: url({% if latest_post.image contains "://" %}{{ latest_post.image }}{% else %} {{site.baseurl}}/{{ latest_post.image}}{% endif %}); height: 200px;    background-size: cover;    background-repeat: no-repeat;"></div>     
    </a>
    <div class="card-body px-0 pb-0 d-flex flex-column align-items-start">
    <h2 class="h4 font-weight-bold">
    <a class="text-dark" href="{{site.baseurl}}{{latest_post.url}}">{{ latest_post.title }}</a>
    </h2>
    <p class="excerpt">
        {{ latest_post.excerpt | strip_html | strip_newlines | truncate: 136 }}
    </p>
    <div>
        <small class="d-block text-muted">
            In <span class="catlist">
                {% for category in latest_post.categories %}
                <a class="text-capitalize text-muted smoothscroll" href="{{site.baseurl}}/categories.html#{{ category | downcase }}">{{ category }}</a><span class="sep">, </span>
                {% endfor %}
                </span>                   
        </small>
        <small class="text-muted">
            {{ latest_post.date | date: '%b %d, %Y' }}
        </small>
    </div>
    </div>
    </div>
    </div>
    
    <div class="col-md-6">
        
        <!-- second latest post -->
        {%- assign second_post = site.posts[1] -%}        
        <div class="mb-3 d-flex align-items-center">                
                {% if second_post.image %}
                <div class="col-md-4">
                <a href="{{site.baseurl}}{{second_post.url}}">
                 <img class="w-100" src="{% if second_post.image contains "://" %}{{ second_post.image }}{% else %}{{ second_post.image | absolute_url }}{% endif %}" alt="{{ second_post.title }}">
                </a>
                </div>
                {% endif %}                
                <div>
                    <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="{{site.baseurl}}{{second_post.url}}">{{ second_post.title }}</a>
                    </h2>
                    <small class="d-block text-muted">
                        In <span class="catlist">
                        {% for category in second_post.categories %}
                        <a class="text-capitalize text-muted smoothscroll" href="{{site.baseurl}}/categories.html#{{ category | downcase }}">{{ category }}</a><span class="sep">, </span>
                        {% endfor %}
                        </span>                   
                    </small>
                    <small class="text-muted">
                        {{ second_post.date | date: '%b %d, %Y' }}
                    </small>
                </div>
            </div>
        
        <!-- third latest post -->
        {%- assign third_post = site.posts[2] -%}        
        <div class="mb-3 d-flex align-items-center">                
                {% if third_post.image %}
                <div class="col-md-4">
                <a href="{{site.baseurl}}{{third_post.url}}">
                 <img class="w-100" src="{% if third_post.image contains "://" %}{{ third_post.image }}{% else %}{{site.baseurl}}/{{ third_post.image }}{% endif %}" alt="{{ third_post.title }}">
                </a>
                </div>
                {% endif %}                
                <div>
                    <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="{{site.baseurl}}{{third_post.url}}">{{ third_post.title }}</a>
                    </h2>
                    <small class="d-block text-muted">
                        In <span class="catlist">
                        {% for category in third_post.categories %}
                        <a class="text-capitalize text-muted smoothscroll" href="{{site.baseurl}}/categories.html#{{ category | downcase }}">{{ category }}</a><span class="sep">, </span>
                        {% endfor %}
                        </span>                   
                    </small>
                    <small class="text-muted">
                        {{ third_post.date | date: '%b %d, %Y' }}
                    </small>
                </div>
            </div>
        
        <!-- fourth latest post -->
        {%- assign fourth_post = site.posts[3] -%}        
        <div class="mb-3 d-flex align-items-center">                
                {% if fourth_post.image %}
                <div class="col-md-4">
                <a href="{{site.baseurl}}{{fourth_post.url}}">
                <img class="w-100" src="{% if fourth_post.image contains "://" %}{{ fourth_post.image }}{% else %}{{site.baseurl}}/{{ fourth_post.image }}{% endif %}" alt="{{ fourth_post.title }}">
                </a>
                </div>
                {% endif %}                
                <div>
                    <h2 class="mb-2 h6 font-weight-bold">
                    <a class="text-dark" href="{{site.baseurl}}{{fourth_post.url}}">{{ fourth_post.title }}</a>
                    </h2>
                    <small class="d-block text-muted">
                        In <span class="catlist">
                        {% for category in fourth_post.categories %}
                        <a class="text-capitalize text-muted smoothscroll" href="{{site.baseurl}}/categories.html#{{ category | downcase }}">{{ category }}</a><span class="sep">, </span>
                        {% endfor %}
                        </span>                   
                    </small>
                    <small class="text-muted">
                        {{ fourth_post.date | date: '%b %d, %Y' }}
                    </small>
                </div>
            </div>
        
    </div>
    
</div>
    
<!-- Sticky - add sticky tag to the post you want to highlight here - tags: [sticky] -->
{% for post in site.posts %} 
{% if post.tags contains "sticky" %}
<div class="jumbotron jumbotron-fluid jumbotron-home pt-0 pb-0 mt-3 mb-2rem bg-lightblue position-relative">
    <div class="pl-4 pr-0 h-100 tofront">
        <div class="row justify-content-between">
            <div class="col-md-6 pt-6 pb-6 pr-lg-4 align-self-center">
                <h1 class="mb-3">{{post.title}}</h1>
                <p class="mb-3 lead">
                    {{ post.excerpt | strip_html | strip_newlines | truncate: 136 }}
                </p>
                <a href="{{site.baseurl}}{{post.url}}" class="btn btn-dark">Read More</a>
            </div>
            <div class="col-md-6 d-none d-md-block pr-0" style="background-size:cover;background-image:url({{site.baseurl}}/{{ post.image }});">	
            </div>
        </div>
    </div>
</div> 
{% endif %}
{% endfor %}


    


{% endif %} <!--endif page url is / -->
    


<!-- Now the rest of the posts with the usual loop but with an offset:4 on the first page so we can skeep the first 4 posts displayed above -->
    
<div class="row mt-3">
   
    <div class="col-md-8 main-loop">
        
        <h4 class="font-weight-bold spanborder"><span>All Stories</span></h4>
        

        {% for post in paginator.posts %}
        
            {% include main-loop-card.html %}
        
        {% endfor %}
        
        <div class="mt-5">
         <!-- Pagination links -->
            {% if paginator.total_pages > 1 %}
            <ul class="pagination"> 
              {% if paginator.previous_page %}
                <li class="page-item"><a class="page-link" href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a></li>
              {% else %}
                <li class="page-item disabled"><span class="prev page-link">&laquo;</span></li>
              {% endif %}

              {% for page in (1..paginator.total_pages) %}
                {% if page == paginator.page %}
                <li class="page-item disabled"><span class="webjeda page-link">{{ page }}</span></li>
                {% elsif page == 1 %}
                <li class="page-item"><a class="page-link" href="{{site.baseurl}}/">{{ page }}</a></li>
                {% else %}
                <li class="page-item"><a class="page-link" href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a></li>
                {% endif %}
              {% endfor %}

              {% if paginator.next_page %}
                <li class="page-item"><a class="page-link" href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a></li>
              {% else %}
                <li class="page-item disabled"><span class="next page-link">&raquo;</span></li>
              {% endif %}
            </ul>
            {% endif %}      
        </div>
        
    </div>
    
    <div class="col-md-4">
        {% include sidebar-featured.html %}    
    </div>
    
</div>



</div>
