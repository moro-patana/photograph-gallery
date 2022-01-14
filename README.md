# Front-end final mockup-to-website project
![screenshot](https://iili.io/KuMCBt.png)


This project is about practicing how to use node-sass. There is a part that we need to use javascript to switch the images.
Before we start, let's install dependencies.

## Dependencies

- Node.js
- Figma
- Figma Font Helper

## Install

We'll be using `node-sass` for our Sass compilation. Let's install that by doing:

1. `npm i`

## Getting started

### Design

You can find the demo:

- Demo: https://front-end-final-manjaka.netlify.app


### Source files

Have a look in the `source_materials` folder. There you'll find any fonts you need, images that are required by the design work.

2. Install any OTF/TTF fonts found in the `source_materials/fonts` folder in your system, so that you don't get bugged by Figma's Font replacement dialog box.

### Webroot

As with most setups, it's a good idea to isolate all the web-files in the `webroot` folder.
Export all the images, fonts, HTML, JS, and CSS you use to this webroot folder (in the right subfolder of course!).

3. Create a `webroot/index.html` file.

### Sass

We'll be using the `scss` folder for all our Sass files.

4. Create a `scss/index.scss` file, that will act as our manifest Sass file.
5. Build your CSS file once by running the `npm run scss` script.

All your Sass files will be output to the `webroot/css` folder.

### Linking up our styles

6. Link up the new `webroot/css/index.css` stylesheet in your `index.html`

## Development

You'll want to run the `scss:watch` task when you're developing this project.



## Contact:
Github:

