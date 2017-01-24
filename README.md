# React ResponsiveEmbed

You want to embed a YouTube or other `iframe` style embedded content, and you'd
like it to take up the available width, and retain it's aspect ratio.

Much like the [Bootstrap responsive embed helpers] of old, but for react.

## Usage

```sh
npm install --save react-responsive-embed
```

Then in your app import `ResponsiveEmbed` and in JSX flavour you might do:

```html
<ResponsiveEmbed>
  <iframe src='https://www.youtube.com/embed/2yqz9zgoC-U' frameborder="0" allowfullscreen />
</ResponsiveEmbed>
```

Which'd give you an `iframe` element pointing at the `src` and any other props.
It's wrapped in a `div` with just the right amount of `padding-bottom` to
preserve a **16:9** aspect ratio like so:

```html
<div style="position:relative;height:0;overflow:hidden;max-width:100%;padding-bottom:56.25%;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;",
    src="https://www.youtube.com/embed/2yqz9zgoC-U"
    frameborder="0"
    allowfullscreen></iframe>
</div>
```

Pass a `ratio` property to pick a different one. Any ratio will do:

```html
<ResponsiveEmbed ratio='4:3'>
  <iframe src='https://www.youtube.com/embed/2yqz9zgoC-U' allowfullscreen />
</ResponsiveEmbed>
```

`frameborder="0"` is applied to the child element for you.

You can pass any child element to ResponsiveEmbed. It doesn't have to be an
iframe.

## Browserify / Webpack / Other?

**This module is just a function**. It's been babelified so it'll work with
whatever your set up is. Use browserify or webpack or any other npm module
consuming bundle whizzbang; ResponsiveEmbed don't mind.

---

A [(╯°□°）╯︵TABLEFLIP] side project.


[Bootstrap responsive embed helpers]: https://v4-alpha.getbootstrap.com/utilities/responsive-helpers/#responsive-embeds
[(╯°□°）╯︵TABLEFLIP]: https://tableflip.io
