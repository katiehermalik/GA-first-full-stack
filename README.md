![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# MEN Stack Homework

This weekend you are going to create an express app from scratch, whatever model you want.

**Read this *entire* page before you start**

## <font color="red">There should be at least 15-20 commits.</font>

1. The app should have one model with at least two properties.
2. It should have all the CRUD functionality.
3. It should contain all the same RESTful routes we have in our fruits app.
4. This app will be very similiar to the fruits app, but the model must be different.
5. **DO NOT COPY AND PASTE ANY CODE FROM YOUR FRUITS APP OR ANYWHERE ELSE**. It's okay to use it as a reference, but type it out.  **DO NOT COPY AND PASTE**. 
6. Do one small step at a time, and then make sure that one step works, and commit before moving on.

### Remember: Use this list of **RESTful routes** as your guide for HTTP methods, CRUD functionalities, and URL formatting:

![RESTful routes](https://i.imgur.com/ReOfT0u.png)

#### Hints

1. Don't forget to `npm init` in order to start your node project.
2. If you get an error message that says module not found—did you install the module?
3. **READ YOUR ERROR MESSAGES**, first try to solve them by going throught the error message, 
then look it up, then compare to code that you know works, like the fruits github repo, then ask a friend.
4. Set up your db first and make sure it's connected.
5. Do one route at a time, maybe start with your index route, then move onto creating a route
6. `console.log()` everything you can think of.
7. Remember when you are submitting a form, you are making a request from the client, and your server
has to respond to that request. 
8. `res.render` is for rendering templates (ejs), `res.send` is for sending text.  Remember, the `res` object
is how you 'respond' to the client. 
9. Use lesson notes and labs from this week as a guide only if you are completely lost.  But make sure you are giving it 
a true effort and not taking the easy way out.  _No Pain No Gain!_


## Hungry for More

### [Bootstrap](https://getbootstrap.com/)

Add bootstrap to your project and use some of the basic styling for layout.  

At a basic level, most layout challenges can be solved with [the info this page](https://getbootstrap.com/docs/4.2/layout/overview/) and [this page](https://getbootstrap.com/docs/4.2/layout/grid/).

Also in the docs, check out the Components section and some of the subsection.  There's a nice collection of other styles you can use to easily get great professional default styling for things like [forms](https://getbootstrap.com/docs/4.2/components/forms/) or [buttons](https://getbootstrap.com/docs/4.2/components/buttons/)

### EJS Partials/Includes

Tired of putting an entire html `<head>` in every template?  You should be.  It's not very DRY or easily updatable.  It'd be cool if we could just have one `header.ejs` that has maybe our `<head>` (or even more) and just include that in each template.  Then we have way less repeated code, and if we ever need to make a sitewide change to the head, we could change it in one file instead of every template.  

Here's some relevant pieces the EJS ["documentation" (look at the "Includes" section),](https://ejs.co/#docs) which includes information on how to do this:

![includes-1](https://i.imgur.com/BqRTqtD.png)

![includes-2](https://i.imgur.com/C40Py9D.png)


Or here's [a blog post about it](https://medium.com/@henslejoseph/ejs-partials-f6f102cb7433) and [another blog post about it](https://scotch.io/tutorials/use-ejs-to-template-your-node-application), and there are dozens more.

The EJS system of includes is beautifully simple; you just `include` any template in any other template you need it in.  Just be sure not to include 2 things in each other!
