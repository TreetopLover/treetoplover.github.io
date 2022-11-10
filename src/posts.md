---
layout: page
# title: Posts
---

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <%= render 'postcard', title: post.data.title, 
                              description: post.data.description, 
                              author: post.data.author, 
                              date: post.data.date, 
                              image: post.data.cloudinary_id, 
                              link: post.relative_url, 
                              image_alt: post.data.image_alt %>
    </li>
  <% end %>
</ul>

<!-- If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)! -->
