# Digifridge
[Live Demo](https://digifridge.herokuapp.com/#/)
Digifridge is a digital representation of your fridge. Users make an account and enter the foods they have in stock. A user can select the foods from their fridge they’d look to use, and we’ll return recipes using those foods from the Edamam API (https://developer.edamam.com/edamam-docs-recipe-api)


## Functionality and MVP
### 1. Frontend and backend user authentication
+ Users can sign up and immediately log in
+ Users can log in / log out
+ Users can use a demo login to try the site
+ Users can't use certain features without logging in

### 2. Fridge CRUD
+ Users can add and remove foods from fridge
+ Food items within users fridge will automatically be saved

### 3. Recipe recommender based on food ingredients
+ Based on foods in user's fridge, list of results will dynamically update based on those ingredient parameters
+ Bonus: Users are able to toggle parameters to refine search (i.e dietary restrictions, meal type, cooking level, prep time, etc)

### 4. Saved Recipes CRUD
+ Users are able to save recipes (to their 'Recipe Book') from search results (can add / remove)

## Technologies and Technical Challenges

Digifridge was built using the MERN stack. In addition, we used the Edamam API for recipe selection.
(https://developer.edamam.com/edamam-docs-recipe-api)

## Things Accomplished Over the Weekend
* Full frontend and backend user auth
* Vetted out both API possibilities - conclusion: both plausible to use, might need to try out both apis on the frontend to understand latency
* Rule out web scraping due to stability of both api’s - might revisit if time allows to switch out api with custom web scraper
* Set up frontend state and boilerplate react/redux
* Finished setting up backend routes
* Decided on an API to move forward with (edmam)
* Finished building presentational frontend scaffolding
* Built out Fridge CRUD functionality

## Group Members and Work Breakdown
* Alicia - Fullstack boilerplate
* Marianna - Setting up recipe API
* Kathryn - Frontend & Design
