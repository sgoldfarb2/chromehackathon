// Unit 5: Client server
// HOW TO INTERNET!!!!!

/*
What is Full Stack Development - someone responsible for both client side and server side tasks
 */



 /*
HTTP
Hypertext Transfer Protocol
Hypertext is a structured text that uses logical links (hyperlinks) between other nodes containing text
Client initiates the conversation (request) and the server replies (response)
HTTPS is the secure version of this protocol
Web Client -> HTTP Request -> Server -> HTTP Response -> Web Client
 */



 /*
Structure of an HTTP Request:
   - Request Method
   - Uniform Resource Identifier
   - Headers
   - Body

HTTP Methods
   - GET - requesting data
   - POST - sending new information to the server
   - PUT - update existing data
   - DELETE - delete some data

URI
   - Used to route requests to the correct server for processing, and provide some info about where in that server the request needs to go

HTTP Headers
    Consist of metadata that gives the server more information for processing
    Common headers include:
        - Accept: the type of data we are willing to accept as a response
        - User-Agent: infromation about the requestor (checks if it's a social media bot - if it's a person, it'd be like Chrome version 7.1)
        - Cookies: persisted data the server might need to process the request (i.e. authentication info, checks if we are logged in, etc.)

HTTP Request Body
    Not all HTTP requests have a body
    An object with key/value pairs (request.body.username = sara.powers)

Headers vs. Body
    Headers are information not specific to the request
    Body is used for stuff specific to that request - data that needs to be put in our database


 */



 /*
HTTP Response:

HTTP Status Code
    httpstatusdogs.com
    200-299 good
    300s - needs action
    400s - client errors
    500s - server errors

Headers
    Content-Type - tells the client what type of data we are sending back
    Set Cookies - tells the browser to set a cookie

Response Body
    If we are sending a GET request to the server, we need a place to store the response
 */

 //Keep requests to a minimum, making a request to a server triggers a cascading effect of loading resources

 /*
 REST (Representational State Transfer)
    A way to structure and visualize your application
        - interacts with data s URLS and HTTP verbs
        - stateless - client state is not stored on the server
        - cacheable - responses can be reused
        - intuitive routing - you'll be able to guess what we want by how we structure our endpoints
    
    Client handles application state
        - Every request contains the context necessary to understand and interpret it on the server side
        - All requests stand on their own, so one failed request doesn't mean the rest of the requests will fail
        - Doesn't remember the state of our application, so it allows us to do things faster

    Namespace, Collection, Member
    
    REST allows for performance tuning
        You can tune your performance so your server responds to different requests at different speeds
 */

 /*
 The internet is a network of computers that transfer information from clients and servers

 Routers - the path that HTTP requests take is often not linear, it's routed through many directions

 IP Addresses - every computer has an IP address and this is required so we know where to send a response

 DNS - Domain Name System - converts IP addresses into humanly readable domain names 
 */


 /*
 Asynchronous JS - AJAX
 */

 /*
 we can do all of our requests with AJAX and use it to provide an uninterrupted user experience
 */

 /*
 AJAX - Async JS and XML
    Allows communication with servers from front-end code
    Originally designed to fetch XML
    Supports many data formats: JSON, HTML, TEXT, etc.
    Makes single page app (SPA) development possible (IG, Slack, FB, Github)

Why do we like it?
    Make non-blocking HTTP requests to a server
    Request data from a server after a page has loaded
    Receive data from a server after the page has loaded
    Send data to the server in the background
    Don't have to refresh the page to send data
    Don't have to tie POSTing data to a <form> tag

Definitions:
    Synchronous code is completed before the next line of code is executed. Synchronous code is BLOCKING
    Asynchronous code schedules work to be done later, once some work is complete elsewhere. Async is NON-BLOCKING

HTTP requests are typically blocking
    It forces the browser to wait for a response
    Causes a perceived "slowness"
    AJAX uses JS to make HTTP requests to the server
    JS schedules code to execute once the request has been completed, allowing downstream code to execute
    Provides the basis for creating SPAs

XMLHttpRequest object
    This object enables you to make an HTTP request and then respond to it later using a callback function
 */

//Example of an XMLHttpRequest
// const xhttp = new XMLHttpRequest()
// xhttp.open("POST", "ajax_test.asp", true) //true defaults to true, and is what makes it asynchronous (unless you pass it false, and then it's not async)
// xhttp.setRequestHeader("Content-type", "urlencoded")
// xhttp.send("fname=Henry&lname=Ford")
//once we've sent the request, we need a callback to do something with the response

  /*
 Each XHR client that is created has a readyState property
    Specifies current status of XHR client
    Five discreet states
        0 = uninitialized - xhr created
        1 = loading - .open() has been called
        2 = loaded - .send() has been called
        3 = interactive - data received but not finished
        4 = complete - request finished
    
To complete the call to the server, you'll assign a callback function to the onreadystatechange event
The onreadystatechange event is called five times
The onreadystatechange event handler should do the following
    Check the ready state value is 4 (complete)
    Check the response status is 200 (status okay)
    Work with the returned data supplied in responseText
 */

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    document.getElementById('demo').innerHTML = xhttp.responseText;
  }
};
xhttp.open('GET', 'https://example.com/?sortBy=name', true);
xhttp.send();


//A WAY EASIER WAY TO DO THIS
//fetch
//fetch uses promise chaining
//make a fetch (get request) from our URL
//it gets the data, parses through it for us, and then console.logs it
fetch('http://www.example.com')
.then((data) => data.json())
.then((data) => {
    console.log(data)
})

//you can also do post requests, you just need to change the method - look this up, no time to copy the code
