# Diagnostic Unit 2.1
Name: Erin Martin

### Question 1: What is the Request/Response Cycle?  How does it work?

This sends a request to the server and receives a response in return that triggers a desired action.

### Question 2: What are the differences between a GET request and a POST request?

GET request: Requests the server to display/render something in response.
POST request: Requests to add or create a new line item or object in a data file (or database). This new line item/object can then be viewable to the user.

### Question 3: What does `npm init` do?

Initializes the node package manager within that particular directory. It allows you to specify the entry point JS file to use as the server, and specify information about the directory and its contents. Initializing npm will output a package.json file with comprehensive information about packages required.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?

C: Create / Post
R: Read / Get
U: Update / Put
D: Delete / Delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  

POST

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

It would be overriding the POST method using method-override and instead cause the form to edit the name.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

```
app.post('/menus', function(req, res) {
    res.redirect('/homepage');
});
```

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  //hmm...
}
```

```
var id = req.params.id;
var songId = req.params.song_id;
```

### Question 9: What is MVC? How have we been using it so far?
MVC (method-view-controller) is a way to break up parts of your code into functional, usable groups in separate files known as methods, views, and controllers. We've been using it to dry up our code and make server.js the primary config file, while "relegating" specific code to separate files and requiring them as needed in the app.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

```
app.get('/products', function(req, res) {
    res.json({error: "Bad Request"});
});
```
