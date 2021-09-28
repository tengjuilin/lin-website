# Reference Guide

To make initializing new projects and adding content to the site reproducible even after a long time, this user manual is written to provide a detailed, step-by-step guide.

The website is built with [Hugo](https://gohugo.io/), a static site generator based on Go, and uses the theme [LoveIt](https://github.com/dillonzq/LoveIt) with theme customizations. The site is deployed with [Netlify](https://www.netlify.com/), allowing Git-based continuous deployment.

## Initializing a new site project

### Create new site

To create a new site, `cd` into the directory that you want a new site to be created, then type:

```bash
hugo new site site_name
```

### Add to Git

To add the directory to version control, `cd` into the website directory, then type:

```bash
git init
```

Or use [GitHub Desktop](https://desktop.github.com/) to add new repository.

### Add theme

To add the theme [`LoveIt`](https://github.com/dillonzq/LoveIt) into the project, `cd` into the website directory, then type:

```bash
git submodule add https://github.com/dillonzq/LoveIt.git themes/LoveIt
```

### Add configuration

Edit the website configuration in `config.toml` according to the examples in the documentation.

### Remove Git information

To remove the website directory from git, `cd` into the website directory, then type:

```bash
rm -rf .git
```

### Local preview

To preview the website build, `cd` into the website directory, then type:

```bash
hugo serve
```

For full rebuilds, type

```bash
hugo server --disableFastRender
```

### Remove sensitive content from Git*

To [remove sensitive content](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) committed to git, download [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/). `cd` into the directory and type

```bash
java jar "<YOUR-PATH/bfg.jar>" --delete folders "<YOUR-SENSITIVE-FOLDER-PATH>"
```

e.g.

```bash
java -jar "C:/Softwares/BFG Repo Cleaner/bfg.jar" --delete-folders "sensitive/password"
```

Then, push to remote

```bash
git push --force
```

## Directory structure

*generated empty upon new site | ~~not important in this site~~ | **frequently updated**

- ~~`archetypes` - Generated upon new site with templates for new `.md` page. Not important: not used unless make initiate new `.md` from command line~~
- `assets` - Manually created to store `.scss` override to the theme under `/css/_override.scss`
- **`content`\* - Main content of the website, such as posts and other information**
- ~~`data`* - Stores data files (`.json`, `.yoml`, `.yaml`) if needed (not used in this site)~~
- `layouts`* - Stores html template that overrides the theme
- ~~`resources` - Generated upon build. Not important: placed in `.gitignore`~~
- **`static`\* - Stores css, images, and other static binary documents (e.g. pdf)**
- `themes`* - Theme submodules. Do not change theme defaults, override using `layouts` and `assets`.

## Style customizations (`/assets/`, `/static/`)

### Override theme style with `scss`

To override styles from `LoveIt` theme, create a file under the website directory `assets/css/_override.scss`, then edit for style customization. Default values can be found under `/themes/LoveIt/assets/css/_variables.scss`.

### Add new styles with `css`

To add new styles different from them theme, create `.css` files under `/static/css/` and link them in html templates.

## Basics of Content (`/content/`) and html templates (`/layouts/`)

`/layouts/` stores html templates that overrides the theme templates under `/theme/LoveIt/layouts`. Do not edit the original default templates in the theme. Important default html templates are:

- `/index.html` - Website home page
- `/_default/summary.html` - Home page summary cards
- `/_default/section.html` - Section page
- `/_default/single.html` - Single article page

In the default template, section page lists titles of single article pages in the directory (and subdirectories) in reverse chronological order. Single article page shows the main content of an article.

The content (in `/content/`) that uses the html templates can take custom parameters, as documented in each of the following section.

## Home page (`index.html`)

To customize home page, edit the index page template override of `/layout/index.html`. Do not overwrite the template in the theme.

The top of the home page is the profile information, whose content can be modified in `config.toml` under `[params.home]`.

The content of the home page is divided to left and right columns. The right column lists recent blog posts. The left column lists recent publications, news, and recent blog posts after the right section.

### Home page blog post cards (`_default/summary.html`)

The blog post cards displays the profile photo, article title, and posted date. This is automated from the post contents.

## Members page

### Current members page (`members/section.html`)

The template displays the member's image on the left. Names, title, contact, major, education, and recognitions.

Pages uses this template should be placed under `/content/members/`. They can take the following custom parameters.

```toml
# higher weight locates higher on the page
# Scientist/Manager/Professor/Postdoc: 7xx; PhD: 5xx; MS: 3xx; Undergrad: 1xx; Join us card: 1; Alumni card: 0
# xx gets progressively smaller as the alumni is more recent, starting from 99
weight: Integer of display order defined above  # e.g. 124 is the 24th current undergraduate from the lab
name: Member's name
title: Member's academic title
major: Member's major
education: Member's previous education
recognition: Member's recognition, fellowship, etc
image: Path to member's profile photo
email: Email
website: Personal website
cv_link: Relative path to CV location
... any additional social media identifier
```

### Alumni page (`members/alumni/section.html`)

The template displays the alumni's image on the left. Names, degree offered, thesis title, and current position.

Pages uses this template should be placed under `/content/members/alumni/`. They can take the following custom parameters.

```toml
# higher weight locates higher on the page
# Scientist/Manager/Professor/Postdoc: 7xx; PhD: 5xx; MS: 3xx; Undergrad: 1xx; Join us card: 1; Alumni card: 0
# xx gets progressively greater as the alumni is more recent, starting from 00
weight: Integer of display order defined above  # e.g. 124 is the 24th undergraduate alumni from the lab
name: Alumni's name
degree: Alumni's degree offered
thesis: Alumni's thesis title
current: Alumni's current position
image: Path to alumni's profile photo
email: Email
website: Personal website
... any additional social media identifier
```

## Publications page

The publications page is custom-written under `content/publications/_index.md`. It provides links to publications, softwares, teaching, and talks.

### Paper publications section (`publications/publications/section.html`)

The section page lists publication in reverse chronological order. Each article card have a profile image, number (reversed), paper title, authors, journal citations, publication date, and links/pdf. This page is automatically generated.

### Paper publications article (`publications/publications/single.html`)

The article page lists details of the article, including title, citations, links, and abstract.

Pages uses this template should be placed under `/content/publication/publications/`. They can take the following custom parameters.

```toml
type: publications/publications  # must have
author: Paper's author
title: Paper's title
journal: Paper's journal
doi: Paper's digital object identifier (DOI)
identifier: Paper's identifier (the string that is after the slash (/) in the DOI)
abstract: Paper's abstract
date: Paper's publication date (e.g. 2020-11-04T00:00:00+08:00)
show_image: whether to show profile image, boolean (e.g. true)
show_pdf: whether to show pdf link (e.g. true, false) if true, the link is automatically generated using the identifier
show_code: whether to show code link. if show code, fill in the absolute url; if not show code, fill "false".
featuredImage: Paper's featured image
```

## Research page

The Research page is custom-written under `content/research/`. Each individual markdown file represents a card in the research page.

Pages uses this template should be placed under `/content/research/`. They can take the following custom parameters.

```toml
# lower weights displays at the top of the page
weight: Display order
title: Research topic title
show_image: Path to the profile image of the topic
```

The content of the markdown file will be the content in the card.
