# Dr. Cinema

## Group 9 - Guðmundur, Helgi & Kristján

### Developed for IOS 16

### Install dependencies

`npm install`

### Start program

`npm start` 

or

`npx expo start`

### How to replace the API authentication key / access token

The access token is a constant inside `src\services\CinemaService.js`

Navigate to that file and place a new valid key in line 3.

### How to view upcoming movies

On the top of the main page is a button with the title 'Væntanlegar myndir'.
All upcoming movies will be presented in the order of their release date. 
Each of them is clickable and will present more info if opened.

### How to view current movies

Select any cinema from the homepage.
Movies shown in the selected cinema will be displayed on the page.
All movies are clickable and doing so will present more information about them.

### How to purchase a move ticket

Once you have selected a movie you will find 
all available tickets for that movie on the bottom portion of the page.

Selecting any time slot will transfer you to the cinema website to finalize your purchase.

### Extras

Logo designed for the Dr. Cinema app.

Display different components depending on if description/genre/showtime exists or NOT.

Default image for upcoming movies which have no poster image.

### Useful links

Link to our github repo:

https://github.com/HelgiHrafn/Dr.-Cinema


