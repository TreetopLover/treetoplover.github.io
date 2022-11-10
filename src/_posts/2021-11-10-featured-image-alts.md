---
layout: post
author: "Joseph Hargrove"
title: Featured Images
date:
description: "Learning about adding featured images to my blog posts."
categories: 
published: true
cloudinary_id: https://res.cloudinary.com/dafocsz3k/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1668012748/noman-shahid-nbijoicghjQ-unsplash_n3iwld.jpg
image_alt: Pictures hanging on a line.
image_credit: "Noman Shahid"
image_credit_link: https://unsplash.com/@theycallmenomz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
image_credit_source: "Unsplash"
image_credit_source_link: https://unsplash.com/s/photos/pictures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---  
<br>
This week I've been avoiding the next step in my learning process. Let's say I'm in the planning phase instead. I want to start #100daysofcode but I'm hemming and hawing over whether to start a project or dive back into FreeCodeCamp. While I figure that out I've been spending more time learning the ins and outs of Jekyll and GitHub pages, and I'm going to take a quick minute to share something I have learned.   
<br>
I have been looking for ways to give this site a glow-up without anything too complicated or distracting. Mostly I've been looking at adding some images here and there. I came across a great series of videos on YouTube by the very helpful Bill Raymond. [Two of them](https://www.youtube.com/watch?v=6oKO-7gsM4s&t=642s) outlined some pretty simple tricks to add feature images to the tops of the posts. (Like that one up there. ^) I found myself wondering how, using this method, I could add alt text to the featured images. As per usual, I was getting ahead of myself. It dawned on me that pretty much any image used in this way would be purely decorative and wouldn't require any alt text. I'm kinda stubborn though and needed to figure this out anyway.   
<br>
Using Bill's method I wound up adding an image attribute to my post's front matter like so:   

```markdown
---
image: /assets/images/foo.jpg
---
```
<br>
...and a Liquid if else statement to the post's layout page.[^1] [^2]

[^1]: Holy crap guys. Turns out Jekyll gets kinda cranky if you try to put Liquid syntax inside a code block. I guess it renders a markdown page and converts all that Liquid to HTML before it looks at the markdown syntax and things just don't work right. Michael Currin gives an explanation and a pretty good fix for this [here](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/jekyll/code-blocks/liquid-code.html).

[^2]:Bonus: I learned how to footnote!

```html
{%- if page.image -%}
    <img src="{{- page.image | relative_url -}}" alt="" class="featured-image">
{%- else -%}
    {%- assign postImage = "/assets/images/bar.jpg" -%}
    <img src="{{- postImage | relative_url -}}" alt="" class="featured-image">
{%- endif -%}
```
<br>
This uses the previously assigned **foo.jpg** and allows for the default usage of **bar.jpg** when there is no image specified in the front matter. What I wanted to do was allow for the possible edge case where the feature image contained some pertinent or interesting content. This is where I got to learn about custom front matter.   
<br>
It was easy enough to add this:

```markdown
---
image: /assets/images/foo.jpg
alt: "Foo is good for you"
---
```
<br>
...and to make a quick adjustment to the layout page like so:

```html
{%- if page.image -%}
    <img src="{{- page.image | relative_url -}}" alt="{{- page.alt -}}" class="featured-image">
{%- else -%}
    {%- assign postImage = "/assets/images/bar.jpg" -%}
    <img src="{{- postImage | relative_url -}}" alt="" class="featured-image">
{%- endif -%}
```
<br>
Now I have the option to add alt text to a feature image. Bet I never use it. :wink:  
<br>
