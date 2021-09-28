# How-to Guide

## How to make a hugo local preview?

To preview the website build, `cd` into the website directory, then type:

```bash
hugo serve
```

For full rebuilds, type

```bash
hugo server --disableFastRender
```

## How to add a publication?

- Under `/content/publications/publications`, name the markdown file with the format `<yyyymmdd>-<identifier>.md` and fill out the corresponding parameters.
- Under `/static/publication-images`, name the profile image of the publication with format of `<identifier>.jpg`.
- Under `/static/publication-pdf`, name the PDF of the publication with format of `<identifier>.pdf`.

## How to add a news?

- Under `/content/news` and appropriate yearly subfolder, name the markdown file with the format `<yyyymmdd>-<main topic connected by dash>.md` and fill out the corresponding parameters.

## How to add a blog post?

- Under `/content/posts` and appropriate yearly subfolder, name a folder with the format `<main topic connected by dash>`.
- Within the named folder, add `index.md` that contains the parameters and main content of the post
- Media used (e.g. pictures, videos) can be stored within the folder and referenced using relative paths.

## How to add a member?

- Under `/content/members`, name the markdown file with the format `<first name>-<last name>.md` and fill out the corresponding parameters.
- Under `/static/member-images`, name the profile image of the publication with format of `<first name>-<last name>.jpg`.

## How to change a member to alumni?

- Under `/content/members/alumni`, name the markdown file with the format `<first name>-<last name>.md` and fill out (change) the corresponding parameters.
- Under `/static/member-images/alumni`, name the profile image of the publication with format of `<first name>-<last name>.jpg`.
