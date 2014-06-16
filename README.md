# SendToPhone Bookmarklet

Just edit the `sendToPhone.js` and fill in your
Pushover App Key and your Pushover User Key.

Then, after saving the file run  
`./minAndCopy sendToPhone.js` in your Terminal.
That script is minifying, adding a `javascript:` Prefix
and copying the result into your clipboard.
So you can just paste it into a bookmark's url.

(Note: when you directly paste the code into your browser, it may does not execute it due to mainly stupid People on Facebook who just paste everything and send then funny messages to all of their _frands_.)

(run before npm install (you need node and npm for it) and make sure that minAndCopy is exeCUTEable (if not
run `chmod u+x mindAndCopy`))
if you don't have node, just take the sendToPhone.js source code and paste it as a bookmarklet with `javascript:` before it.
