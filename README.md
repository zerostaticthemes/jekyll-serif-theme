# cvless

Cvless is a theme for static websites built with Jekyll. It aims for simplicity and readability by following best practices of graphic design, like the use of [high contrast](https://www.contrastrebellion.com), [law of proximity](https://lawsofux.com/law-of-proximity), and responsive layout. Its typography is based on the [Piazzolla system](https://piazzolla.huertatipografica.com/), which performs extremely well over a wide range of font sizes.

The main aesthetic feature of the theme is the use of [particles.js](https://vincentgarreau.com/particles.js/) in the home and the 404 pages. In addition, the theme includes a well-designed CV page. Printing this from browser automatically adapts the layout for a more traditional appearance, so you no longer have to maintain a separate CV for offline distribution. Finally, the theme offers a simple and easily extensible blog.

Light and dark modes are available. The theme initializes based on system preferences and stores the user's preference for the duration of the session.

See the [demo](https://cvless.netlify.app) to get a better sense of what the theme looks like.

![](https://github.com/piazzai/cvless/blob/master/screenshot.jpg)

## Installation

1.  Clone this repository.
2.  Rename it to `[username].github.io`.
3.  Start editing!

## Usage

Configuration primarily occurs in four files. First, `_config.yml`, which contains site variables such as title, tagline, url, and repository address, as well as the author's name and email address for inclusion in blog posts. You can also specify the path to an avatar for inclusion in the home (optional).

Second, you should update icon links in `_includes/particles-home.html` and add/remove icons as needed. You might want to add icons that are not included in the theme by default. For more information on how to do this, see [this post](https://cvless.netlify.app/2022/08/01/on-the-use-of-icons/).

Third, you should customize the file `_includes/contact.html` by inputting your contact details and adding/removing lines as needed. This information is prepended to your CV.

Fourth, you might want to edit the style variables specified in `_sass/_variables.scss`. These allow you to customize the theme's color scheme and typefaces. There are many resources on the web to learn the principles of good web design. I personally recommend Matthew Butterick's [Practical Typography](https://practicaltypography.com/websites.html).

In addition to these files, you can customize favicons in the `assets` folder. For that, [favicon.io](https://favicon.io/) is an excellent tool. You can also change the particles.js configurations in `assets/json`. The [library homepage](https://vincentgarreau.com/particles.js/) features an interactive tool from which you can export a new configuration.

## Local Development

This repo includes a docker-compose file that allows you to quickly setup a container running Jekyll. If you don't already have Docker and docker-compose installed, you can install them using the following guides from Docker:

**Install Guides**
* [Docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)

To start the container simply run:

```
docker-compose up
```

Alternatively you can run the container without docker-compose using the following command on Mac/Linux:

```
docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
```

## Credits

The theme draws in one way or another from the following projects:

-   [Bootstrap](https://getbootstrap.com/)
-   [Hack](https://sourcefoundry.org/hack/)
-   [Iconoir](https://iconoir.com/)
-   [Open Color](https://yeun.github.io/open-color/)
-   [Particles.js](https://vincentgarreau.com/particles.js/)
-   [Piazzolla](https://piazzolla.huertatipografica.com/)
-   [Poole](https://getpoole.com/)

## Bugs

If you find any problem using this theme, please [open an issue](https://github.com/piazzai/cvless/issues).
