---
layout: resources
title: Other Grid Resources
---

# Grid Resources

A huge list of grid resources that I have written and those I have discovered around the web. For more of my work on CSS, see [rachelandrew.co.uk/css](https://rachelandrew.co.uk/css).

## My Grid-related writing and speaking

{% assign resources = site.resources | where:"resource-author","Rachel Andrew" | sort: 'resource-date' | reverse %}
<ul class="card-listing">
           {% for resource in resources %}
           <li class="type-{{resource.resource-type}}">
             <h3><a href="{{resource.resource-url}}">{{resource.resource-name}}</a></h3>
             <div class="details">


                   {{resource.content}}

                   


             </div>
              <div class="date">{{resource.resource-date}}</div>
           </li>
           {% endfor %}
         </ul>

## Other recommended resources

{% assign exresources = site.resources | where_exp: "item", "item.resource-author != 'Rachel Andrew'" | sort: 'resource-date' | reverse %}
<ul class="card-listing">
           {% for resource in exresources %}
           <li class="type-{{resource.resource-type}}">
             <h3><a href="{{resource.resource-url}}">{{resource.resource-name}}</a></h3>
             <div class="details">


                   {{resource.content}}

                   
             </div>
              <div class="date">{{resource.resource-date}}</div>
           </li>
           {% endfor %}
         </ul>