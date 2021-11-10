---
layout: single
title: Featured Images
description: "Learning about adding featured images to my blog posts."
tags: learning jekyll coding image alt
image:
alt:
---
*I learned a thing!*

This week I've been avoiding the next step in my learning process. Let's say I'm in the planning phase instead. I want to start #100daysofcode but I'm hemming and hawing over whether to start a project or dive back into FreeCodeCamp. While I figure that out I've been spending more time learning the ins and outs of Jekyll and Github pages, and I'm going to take a quick minute to share something I have learned.

I have been looking for ways to give this site a glow up without anything too complicated or distracting. Mostly I've been looking at adding some images here and there. I came across a great series of videos on YouTube by the very helpful Bill Raymond. [Two of them](https://www.youtube.com/watch?v=6oKO-7gsM4s&t=642s) outlined some pretty simple tricks to add feature images to the tops of the posts. (Like that one up there. ^) I found myself wondering how, using this method, I could add alt text to the featured images. As per usual, I was getting ahead of myself. It dawned on me that pretty much any image used in this way would be purely decorative and wouldn't require any alt text. I'm kinda stubborn though and needed to figure this out anyway.

Using Bill's method I wound up adding an image attribute to my post's front matter like so:

```markdown
---
image: /assets/images/foo.jpg
---
```

...and a Liquid if else statement to the post's layout page.[^1] [^2]

[^1]: Holy crap guys. Turns out Jekyll gets kinda cranky if you try to put Liquid syntax inside a code block. I guess it renders a markdown page and converts all that Liquid to HTML before it looks at the markdown syntax and things just don't work right. Michael Currin gives an explanation and a pretty good fix for this [here](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/jekyll/code-blocks/liquid-code.html).

[^2]:Bonus: I learned how to footnote!

{% raw %}
```html
{%- if page.image -%}
    <img src="{{- page.image | relative_url -}}" alt="" class="featured-image">
{%- else -%}
    {%- assign postImage = "/assets/images/bar.jpg" -%}
    <img src="{{- postImage | relative_url -}}" alt="" class="featured-image">
{%- endif -%}
```
{% endraw %}

This uses the previously assigned **foo.jpg**, and allows for the default usage of **bar.jpg** when there is no image specified in the front matter. What I wanted to do was allow for the possible edge case where the feature image contained some pertinent or interesting content. This is where I got to learn about custom front matter.

It was easy enough to add this:

```markdown
---
image: /assets/images/foo.jpg
alt: "Foo is good for you"
---
```

...and to make a quick adjustment to the layout page like so:

{% raw %}
```html
{%- if page.image -%}
    <img src="{{- page.image | relative_url -}}" alt="{{- page.alt -}}" class="featured-image">
{%- else -%}
    {%- assign postImage = "/assets/images/bar.jpg" -%}
    <img src="{{- postImage | relative_url -}}" alt="" class="featured-image">
{%- endif -%}
```
{% endraw %}

Now I have the option to add alt text to a feature image. Bet I never use it. :wink: