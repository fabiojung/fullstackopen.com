## Creating a new note using the SPA


```
title Creating a new note (SPA)

note over Browser
Save button is clicked
js-code adds the new note locally
js-code request the browser to redraw its contents
js-code sends HTTP POST with new note to server
end note
Browser->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa \n{"content":"new note spa","date":"2019-09-03T15:02:22.275Z"}
Server-->Browser: HTTP Status Code 201 (Created)\n{"message":"note created"}

```

![alt text](https://github.com/fabiojung/fullstackopen.com/raw/master/part0/new_note_spa.png "New Note SPA Diagram")
