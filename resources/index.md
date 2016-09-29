---
layout: default
title: Other Grid Resources
---

# Grid Resources

{% assign resources = site.resources | sort: 'resource-date' | reverse %}
<ul class="card-listing">
           {% for resource in resources %}
           <li class="type-{{resource.resource-type}}">
             <h3><a href="{{resource.resource-url}}">{{resource.resource-name}}</a></h3>
             <div class="details">


                   {{resource.content}}


             </div>

           </li>
           {% endfor %}
         </ul>

_To add a resource [submit a pull request](https://github.com/rachelandrew/grid-by-example) adding the resource as a new file in the `_resources` folder._
