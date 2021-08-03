# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/dist/images/screenshot.png)

### Links

- Solution URL: [](https://www.frontendmentor.io/solutions/mobile-first-site-using-sass-and-bem-R96zOQHdn)
- Live Site URL: [](https://jsweeney-sunnyside-agency-landing-page.netlify.app/)

## My process

### Built with

- Sass
- BEM
- CSS grid
- CSS flexbox
- Media querries
- Mobile first
  
### What I learned

If you need to change the color of `a` tags, don't set the `color` of it's parent element. This will mess things up with the `:visited` pseudoclass. Just make sure to explicitly set the color property of an `a` tag.

Happy with this fancy underline mixin!

```scss
@mixin fancy-underline($underline-color) {
  & {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      height: 25%;
      border-radius: 50px;
      background-color: rgba($underline-color, 0.4);
      left: -5%;
      right: 0;
      width: 110%;
      bottom: 12%;
      position: absolute;
      z-index: -1;
      @include easeOut;
    }

    &:hover::before {
      background-color: rgba($underline-color, 1);
    }
  }
}
```

### Useful resources

- [CSS animation generator](http://www.theappguruz.com/tag-tools/web/CSSAnimations/) - Used this to create mobile menu animation.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
