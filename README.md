# react-responsive-embed

You want to embed a YouTube or other `iframe` style embedded content, and you'd
like it to take up the available width, and retain it's aspect ratio.

Much like the [Bootstrap responsive embed helpers] of old, but for react.

## Usage

```sh
npm install --save react-responsive-embed
```

Then in your app

```
<ResponsiveEmbed src='https://www.youtube.com/embed/2yqz9zgoC-U' allowfullscreen />
```

This module is just a function. It doesn't require any babel, ES6, JSX or other transpilation. It'll work with whatever your set up is. Use browserify or webpack or any other npm module consuming bundle whizzbang; ResponsiveEmbed don't mind.

---

A [(╯°□°）╯︵TABLEFLIP] side project.


[Bootstrap responsive embed helpers]: https://v4-alpha.getbootstrap.com/utilities/responsive-helpers/#responsive-embeds
[(╯°□°）╯︵TABLEFLIP]: https://tableflip.io
