## S2z1 - Support for Node's built-in http module for http protocol

**Node.js/S2z1/zad1.js** - An example of the simplest server application using the built-in 'HTTP' module, which sends a greeting to our client. We check the operation by starting the browser and sending a request to our server (port 4700).

**Node.js/S2z1/zad2.js** - Status code added to the returned information and information about the type of returned content.

**Node.js/S2z1/zad3.js** - Modification of the application, returning different messages and response status depending on the http method used.

**Node.js/S2z1/zad4.js** - Modification of the application by for requests at 'http://localhost:4700/users' returned 'Hello from Users path' and returned 'Hello from Comments path' for requests at 'http://localhost:4700/comments'

**Node.js/S2z1/zad5.js** - Adding to the application and returning the 'name' parameter given in the url. A request to 'http://localhost:4700?name=pawel' returns 'Hello pawel'. When no parameter value is specified, the application returns the message 'Hello World'.

**Node.js/S2z1/zad6.js** - The application takes 2 parameters 'a' and 'b' from the url and performs multiplication in our application. The result is sent to the end user (client).

**Node.js/S2z1/zad7.js** - Example of an application that performs mathematical operations: multiplication, division, subtraction... It is divided into paths. When an action is impossible to perform, the application returns the appropriate message and status code 'Bad Request'.

**Node.js/S2z1/zad8.js** - The application returns all parameters specified in the url. The result returned is an object and has ''Content-type':'application/json''

**Node.js/S2z1/zad9.js** - An application that performs operations on a set of users. The path '/add' is used to add the user, takes the parameters 'name', 'username', 'email', e.g. '?name=Jan&username=janko&email=jan@nowak.abc', adding a user only works when a 'POST' request has been sent. The path '/show' is used to display all users, a request of type 'GET'. The display path of the selected user, if the corresponding 'id' ('/show?id=1') and a request of type 'GET' are specified. Delete the user via the path '/delete?id=1'. When there is no user with a given id returns the appropriate status code.
