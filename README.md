<blockquote class="twitter-tweet"><p>Why has no one made a Breaking Bad bookmarklet that highlights elemental symbols in text on web pages?</p>&mdash; Jason Kottke (@jkottke) <a href="https://twitter.com/jkottke/statuses/382547007417499649">September 24, 2013</a></blockquote>

# Bookmarklet

Make a new bookmark with this URL:

```
javascript:var e=document.createElement("script");e.type = "text/javascript";e.src = "https://aprescott.com/files/breakingbad.js/bookmarklet.js";document.getElementsByTagName('head')[0].appendChild(e);
```

(It relies on a file hosted at aprescott.com, so no promises about this working indefinitely into the future. :))

## Host-free version

Use the contents of `bookmarklet.js` as the URL of a bookmarklet. Make sure to put `javascript:` in front of it. It won't rely on any external server, but you won't get any changes if the script updates.

# Thanks

Almost all the functionality of this rests basically on [James Padolsey](http://james.padolsey.com)'s [find and replace library](https://github.com/padolsey/findAndReplaceDOMText).
