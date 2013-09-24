<blockquote class="twitter-tweet"><p>Why has no one made a Breaking Bad bookmarklet that highlights elemental symbols in text on web pages?</p>&mdash; Jason Kottke (@jkottke) <a href="https://twitter.com/jkottke/statuses/382547007417499649">September 24, 2013</a></blockquote>

# Bookmarklet

Make a new bookmark with this URL:

```
javascript:var e=document.createElement("script");e.type = "text/javascript";e.src = "https://aprescott.com/files/breakingbad.js/bookmarklet.js";document.getElementsByTagName('head')[0].appendChild(e);
```

(No promises about this working indefinitely into the future. :))
