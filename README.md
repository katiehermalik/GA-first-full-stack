![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# MEN Stack Homework

This weekend you are going to create an express app from scratch, whatever model you want.

**Read this *entire* page before you start**

## <font color="red">There should be at least 15 commits.</font>

1. The app should have one model with at least two properties.
2. It should have all the CRUD functionality.
3. It should contain all seven RESTful routes.
4. This app will be very similiar to the fruits app, but the model must be different.
5. **DO NOT COPY AND PASTE ANY CODE FROM YOUR FRUITS APP OR ANYWHERE ELSE**. It's okay to use it as a reference, but type it out.  **DO NOT COPY AND PASTE**. 
6. Do one small step at a time, and then make sure that one step works, and commit before moving on. **You are required to have at least 12 commits**.

### Remember: Use this list of **RESTful routes** as your guide for HTTP methods, CRUD functionalities, and URL formatting:

![RESTful routes](https://i.imgur.com/ReOfT0u.png)

#### Hints and tips.

* Don't forget to `npm init` in order to start your node project.

* If you get an error message that says module not found—did you install the module?

* **READ YOUR ERROR MESSAGES**, first try to solve them by going through the error message. 
Then look it up (try googling the error message and including "express" and/or "mongoose"). Then compare to code that you know works, like the fruits app from class repo. Then slack an instructor.

* Set up your db first and make sure it's connected.

* Do one functionality at a time, and do each piece of that functionality one step a time.  For example, maybe start with a user story like: _"User should be able to add an item"_.  Think: In terms of REST, that means you need "create" and "new." Don't do anything else until the user can add an item.  Perhaps you'd follow steps like this:
    * First make a "new" route that works at all and `res.send()`s some text back. **Test it**.
    * Then, make it render a template with a form. **Test it**.
    * Then, make a "create" route for the form to `POST` to, and make sure submitting the form successfully hits the create route. Don't worry about the data or the database, just `res.send()` some text back "hitting create route".  **Test it.**
    * Then see if you can `console.log()` the submitted data ("`req.body`"). **And Test It**.
    * Then see if you can get the post route to actually add the submitted data to the DB. **Test it using the `mongo` CLI and by logging the `createdItem` in your callback** 
    * _Then_ worry about what should happen after the data is added.  Maybe you should have an index page where the user can see the items?

* Ok. so then you're gonna need to build an index route... and just focus on that until its done.  And work in small steps... so maybe:
    * First make a route that works at all and `res.send()`s some text back. **Test it**.
    * Then make a template that will be the index page.  Just get the template rendering.  **Test it.**
    * Then make the index route actually get data from the db successfully, and **test it** with console.log().
    * Then render the data into the template... etc..
   
* ....And so forth. Make sure you're building your apps in this way.  Take careful small well-reasoned steps, and do what you can to stay clear on what the goal of each step is.  **It is critical that you build these apps one step at a time, thinking about what functionality you need to add, and adding it one step at a time, thinking about what you're doing at each step and why. Do not just write out all your routes and try to fill them in without testing them.**

* `console.log()` everything you can think of.

* Remember when you are submitting a form, you are making a request from the client, and your server
has to respond to that request. 

* `res.render()` is for rendering templates (ejs), `res.send()` is for sending text, `res.redirect()` is for sending a message to the browser that it should redirect to a new location.  Remember, the `res` object is how you _'respond'_ to the client. 

* Use lesson notes and labs from this week as a guide only if you are completely lost.  But make sure you are giving it 
a true effort and not taking the easy way out.  _No Pain, No Gain!_


## Hungry for More

### [Bootstrap](https://getbootstrap.com/)

Add bootstrap to your project and use some of the basic styling for layout.  

At a basic level, most layout challenges can be solved with [the info on this page](https://getbootstrap.com/docs/4.3/layout/overview/) and [this page](https://getbootstrap.com/docs/4.3/layout/grid/).

Also in the docs, check out the Components section and some of the subsection.  There's a nice collection of other styles you can use to easily get great professional default styling for things like [forms](https://getbootstrap.com/docs/4.3/components/forms/) or [buttons](https://getbootstrap.com/docs/4.3/components/buttons/)

### EJS Partials/Includes

Tired of putting an entire html `<head>` in every template?  You should be.  It's not very DRY or easily updatable.  It'd be cool if we could just have one `header.ejs` that has maybe our `<head>` (or even more) and just include that in each template.  Then we have way less repeated code, and if we ever need to make a sitewide change to the head, we could change it in one file instead of every template.  

Here's some relevant pieces the EJS ["documentation" (look at the "Includes" section),](https://ejs.co/#docs) which includes information on how to do this:

![includes-1](https://i.imgur.com/BqRTqtD.png)

&nbsp;&nbsp;![includes-2](https://i.imgur.com/C40Py9D.png)


Or here's [a blog post about it](https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433) and [another blog post about it](https://scotch.io/tutorials/use-ejs-to-template-your-node-application), and there are dozens more.

The EJS system of includes is beautifully simple; you just `include` any template in any other template you need it in.  Just be sure not to include 2 things in each other!
