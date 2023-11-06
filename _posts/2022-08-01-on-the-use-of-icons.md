---
layout: post
title: On the use of icons
lead: A very quick guide.
---

The icons used throughout this theme are partly custom-made, and partly come from the [Iconoir](https://iconoir.com/) library. More can be created or downloaded from the Iconoir website as svg files, and saved in `assets/svg` for use in your website.

Here's an overview of icons that already ship with the theme.

<table class="table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Icons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Navigation</td>
      <td>{% include svg/arrow-left-circled.svg %} {% include svg/arrow-right-circled.svg %} {% include svg/nav-arrow-left.svg %} {% include svg/nav-arrow-right.svg %} {% include svg/nav-arrow-down.svg %}</td>
    </tr>
    <tr>
      <td>Actions</td>
      <td>{% include svg/download-circled-outline.svg %} {% include svg/download-square-outline.svg %} {% include svg/open-in-browser.svg %} {% include svg/open-in-window.svg %} {% include svg/open-new-window.svg %}</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td>{% include svg/phone.svg %} {% include svg/mail.svg %} {% include svg/internet.svg %} {% include svg/send-mail-circled.svg %}</td>
    </tr>
    <tr>
      <td>Maps</td>
      <td>{% include svg/pin-alt.svg %}</td>
    </tr>
    <tr>
      <td>Social</td>
      <td>{% include svg/facebook.svg %} {% include svg/twitter.svg %} {% include svg/instagram.svg %} {% include svg/linkedin.svg %} {% include svg/stackoverflow.svg %} {% include svg/google-circled.svg %}</td>
    </tr>
    <tr>
      <td>Git</td>
      <td>{% include svg/github.svg %} {% include svg/github-outline.svg %}</td>
    </tr>
    <tr>
      <td>Security</td>
      <td>{% include svg/key-alt-circled.svg %}</td>
    </tr>
    <tr>
      <td>Users</td>
      <td>{% include svg/user-circle-alt.svg %}</td>
    </tr>
    <tr>
      <td>CV</td>
      <td>{% include svg/cv-circled.svg %}</td>
    </tr>
    <tr>
      <td>Academic</td>
      <td>{% include svg/orcid.svg %} {% include svg/clarivate-circled.svg %} {% include svg/scopus-circled.svg %}</td>
    </tr>
    <tr>
      <td>Chess</td>
      <td>{% include svg/lichess-circled.svg %}</td>
    </tr>
  </tbody>
</table>

They can be used in two ways through Liquid tags. First, as simple glyphs for decorative purposes, as in the table above or in the [contact](/cv) section of the CV:

{% highlight text %}
{% raw %}{% include svg/github.svg %}{% endraw %}
{% endhighlight %}

Second, as links:

{% highlight text %}
{% raw %}{% include iconlink.html icon="svg/github.svg" href="https://github.com/" %}{% endraw %}
{% endhighlight %}

In this case, the icon shows up with link formatting and its stroke width slightly increases on hovering. Here is an example: {% include iconlink.html icon="svg/github.svg" href="https://github.com/" %}

Simple CSS allows you to modify many aspects of the icon's appearance, including stroke width, color (with the `stroke` property), and size (with `transform`). Here is a usage example:

{% highlight css %}
svg {
  /* 250% of its original size */
  transform: scale(2.5);
  }
svg path {
    /* red color */
    stroke: red;
    /* thinner line */
    stroke-width: 1.25;
  }
{% endhighlight %}

## Note

Each icon available from Iconoir is essentially a text file:

{% highlight text %}

<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

{% endhighlight %}

The `<?...?>` tag at the beginning is useful for apps but not for a Jekyll website, and will sometimes show up as a string of text, so it needs to be deleted. This has already been done for the default icons, but remember to do it also for every additional icon you download.
