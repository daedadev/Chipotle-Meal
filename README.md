# Chipotle Random Meal Generator

## Description

This project was designed to make the hard choices for you. Everyone has gone to Chipotle and not had any idea of what to order. This app takes the heavy weight of deciding off of your shoulders.

This project was developed using React, Typescript, Vite, and TailwindCSS. Make sure to follow the proper steps to install and run this project. I hope you enjoy.

Live Application: https://daedadev.github.io/Chipotle-Meal/

## Project Setup

This application uses Javascript so you'll need node.js to run this application and download its dependencies. If you don't have node installed you can get that [here](https://nodejs.org/en/). You'll also need `git` installed on your computer as well which you can download [here](https://git-scm.com/downloads).

You'll want to run `git clone git@github.com:daedadev/Chipotle-Meal.git` in your git bash wherever you want to add this project.

Once you have my project on your own machine you'll want open it and in a new terminal run either

`npm install` or `yarn install`

This set of commands will install the server side dependencies as well as the client side dependencies and ensure that you end up at the root folder by the end of it.

Now to start the project you can simply type into the command line `npm run dev` and you'll have the development version of the application running on `localhost:3000`. Now you're free to use my application.

## Usage

From the moment you load up the project you'll be met already with a generated meal which randomly chooses items from the local database. All of the data, images, prices, calories, are stored in a local file.

This is the main page. To the top left you'll see the Chipotle logo along with the title of the application, and to the top left you'll find a button that reads "To Chipotle". Clicking this button will take you to the actual Chipotle website where you can place an order if you'd like.

![Top of main page](/public/screenshots/screenshot1.PNG)

Scrolling to the bottom of the page will reveal the price of the meal that was generated as well as the total calories found in that meal.

![Bottom of main page](/public/screenshots/screenshot2.PNG)

Now at the bottom right of the screen you'll see a button that reads "Randomize Your Order". Clicking this button will run the random generation again and output a newly random order for you.

![Main page after random generation](/public/screenshots/screenshot3.PNG)

## Usage Mobile

Mobile usage of this application is very similar to the desktop use. Instead of rows most of the information is displayed in a single column.

![Top of main page on mobile](/public/screenshots/screenshot4.PNG)

Scrolling to the bottom of the page again reveals the price and calorie totals. It will also be a lot more apparent that the header and footer are fixed at this point. The randomize order button is also no much larger and mobile friendly.

![Bottom of main page on mobile](/public/screenshots/screenshot5.PNG)

## Contributions

If you wish to add anything to this project or collaborate feel free to email me at danielchrismoore@gmail.com Also feel free to fork and clone this project. Feedback is greatly appreciated. As I am currently a junior developer any critisism is also very welcome.
