## Creating a new note diagram

```
title Creating a new note (HTTP POST)

note over Browser
Save button is clicked
end note
Browser->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/notes \nform-data: new note text
note over Server: persists the new note \nwith timestamp
Server-->Browser: HTTP Status Code 302 (Redirect)
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
Server-->Browser: HTML-Code
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Browser: main.css
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
Server-->Browser: main.js
note over Browser: 
browser starts executing js-code
that requests JSON data from server 
end note
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
Server-->Browser: [{{content: "HTML is easy", date: "2019-05-23T17:30:31.098Z"}},...]
note over Browser:
Browser executes the event handler
that renders notes to display
end note
```

![alt text](https://github.com/fabiojung/fullstackopen.com/raw/master/part0/new_note.png "New Note Diagram")
