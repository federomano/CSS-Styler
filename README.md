CSS-Styler
==========

CSStyler is a little app for writing fast CSS structures. Its meant for organizations that don't use (yet) preprocessors. This way, you can at least write the structure fast and code live in the browser.

Usage
==========

Just type your selector and press 'enter', for child selectors just press space.
```
body
 div.someClass
  a:first-child
```
compiles to
```
body {

}
body div.someClass {

}
body div.someClass a:first-child {

}
```

Beta
==========
This version needs some correcting, for example if you write more spaces than expected, the app will crash. If you want to contribute thats great!
