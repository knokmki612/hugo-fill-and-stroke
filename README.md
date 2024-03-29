# Hugo Theme: Fill and Stroke

A simple design, for blog


## Example

https://knokmki612.github.io/hugo-fill-and-stroke/

## Lighthouse Scores

### Mobile

![All Scores 100](images/lighthouse-mobile.png)

### Desktop

![All Scores 100](images/lighthouse-desktop.png)

## Supported features

- Configurable Partial Templates
  - `favicons.html`
  - `side-menu/bannars.html` (Optional)
- Preset Content Types
  - blog
  - default
- Preset Taxonomies
  - tags
  - archives
- Preset Shortcodes
  - iframe
  - image
  - raw
  - tab
  - tweet
  - video
- i18n
- OGP
- Page Resources
  - Image
  - Video
- Menu Templates with nesting
- Cloudinary
- Dark Mode


## Installation

```shell
$ hugo new site hugo-site
$ cd hugo-site
$ git init
$ git submodule add git@github.com:knokmki612/hugo-fill-and-stroke.git themes/fill-and-stroke
$ hugo mod npm pack
$ npm install
```

## Configuration

```toml
baseUrl = "https://example.com/"
languageCode = "en-US"
title = "Example Site"
copyright = "2021 example"
theme = ["fill-and-stroke"]
defaultContentLanguage = "en"

[params]
description = "A simple site, for example"
# For `ogp:image`
images = ["favicons/310x310.png"]

[params.cloudinary]
enable = true
# See Also: https://cloudinary.com/documentation/how_to_integrate_cloudinary#create_and_tour_your_account
cloudName = "abcdefghi"
# See Also: https://cloudinary.com/documentation/dam_folders_collections_sharing
folder = "blog"

[params.cloudinary.transformations]
# See Also: https://cloudinary.com/documentation/user_defined_variables#named_transformation
article = "t_blog_thumb"
ogp = "t_blog_thumb"

[taxonomies]
tag = "tags"
archive = "archives"

[[menu.main]]
identifier = "example"
title = "Example"
url = "/example/"
weight = 1
```
