---
layout: default
title: Other Grid Resources
---

# Grid Resources


<ul class="card-listing">
           {% for resource in site.resources %}
           <li class="type-{{resource.resource-type}}">
             <h3><a href="{{resource.resource-url}}">{{resource.resource-name}}</a></h3>
             <div class="details">


                   {{resource.content}}


             </div>

           </li>
           {% endfor %}
         </ul>

_To add a resource submit a pull request adding the resource as a new file in the `_resources` folder._
