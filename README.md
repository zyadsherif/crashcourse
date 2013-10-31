SinglePageStarter
=================

A starter template for Single Page marketing websites that will git you off and running with the scroll animations enhanced with a very customisable grid system and some nice predefined buttons, checkout the working [demo](http://zyadsherif.github.io/singlePageStarter/ "Single Page Starter Template")

Sass based, you can easily edit the color scheme and remove components as you wish, you may also usr any framework you want like Foundation - Bootstrap - Gumby

#CSS Structure

Everything in this lightweight skeleton/template can be changed from a single SASS file, settings.scss

You will also find every set of componenets organized in its own SASS file to easily plug in/out the components you need.

##Easy Scroll Animation

I've created a very lightweight cross-browser jQuery plugin that will add on page scroll functionality to any anchor tag using data attributes.

Example: 

```html
<a href="#" data-id="about" data-speed="3000">Link</a>
```

The above example shows that it uses two data attributes one is mandatory and it's the data-id and the value is equivelant to the desired elemnt ID, the other is optional if you want to set the speed of the animation until it reaches the target element, the default is slow =~ to 2.5 seconds


##Grid System

A fully responsive "MOBILE FIRST" editable grid system much like Twitter Bootstrap's but with RTL support

In a nutshell, everything you would expect from a grid system it shall serve (Four breakpoints - Source Ordering Push/Pull - Offset - Centering)

Syntax is as follows:

+ col-[sm/md/lg]-NUMBER .. for example-> col-md-6 = [Six columns in medium screens]

+ offset-[sm/md/lg]-NUMBER .. for example-> offset-lg-6 = [Six columns margin on large screens]

+ push-[sm/md/lg]-NUMBER .. for example-> push-sm-6 = [Push Six columns in small screens]

+ pull-[sm/md/lg]-NUMBER .. for example-> pull-sm-6 = [Pull Six columns in small screens, will switch places with the above element]

+ col-sm-6.centered .. this will center the block in the middle of the page

##Buttons

Very simple flat buttons that are highly customizable just to get you going

Syntax is as follows:

button is the main class
.large, .small, .expand, .radius, .round, .primary, .secondary, .alert, .success

All are self explanatory.


##Forms

Same as buttons they are just very basicly styled form items and currently have no additional classes, will add some as soon as I have time.


###Future plans

I may add some lightweight components in the future but that depends on how much time I will get for myself.




