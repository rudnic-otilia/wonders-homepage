# Wonders Homepage

This is my Wonders Homepage project, built as part of the first module of the Wonders course.
The main goal was to create a responsive travel website homepage where users can search for bus routes between Alpine stations.

## Project Idea

I started this project from scratch, following the given Figma design:
https://www.figma.com/design/Qq0LN905byLasCfNboVzU2/Module-1-Wonders--Share-?node-id=0-1&t=sIWsM0vWwHgRRTzO-1

The development process had three stages:

HTML – building the structure and search form.

CSS – making it look nice and responsive.

JavaScript – adding interactivity and form logic.

## What the Homepage Does

The homepage includes:

A search form with “From” and “To” stations (with dropdown suggestions).

A trip type selector – either One Way or Round Trip.

A calendar to choose travel dates.

A passenger counter with a limit of 12 people.

A Find My Alpine Ride button that simulates navigation to another page.

A burger menu for mobile screens.

I made sure the layout works properly at 1440px, 768px, and 360px.

## What I Used

HTML5 – to structure the page

CSS3 – for styling and responsive layout

JavaScript (ES6) – for all the dynamic parts

Git & GitHub – version control

GitHub Pages – deployment

## JavaScript Features

Here’s what I implemented using JS:

*Opening and closing the burger menu.

*Filtering dropdown stations as the user types.

*A calendar with date restrictions (no past dates, proper round-trip logic).

*Adding/removing passengers, up to 12.

*Validating the search form:

*All fields must be filled.

*Departure and arrival can’t be the same.

*The date must be valid (not in the past).

*When the user clicks “Find My Alpine Ride,” it imitates a page change to bus-list.html.


## How I Deployed It

I hosted the project on GitHub Pages:

https://rudnic-otilia.github.io/wonders-homepage/

## About Me

I built this project as a student learning fullstack development.
This was a great way to practice responsive design, DOM manipulation, and overall project structure.
