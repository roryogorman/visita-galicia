# Visita Galicia
## Purpose
There are two purposes in the creation of this website.
* This is my Milestone 2 Project which is part of the Code Institute's Full Stack Software Development Diploma course. 
This project demonstrates the skills and knowledge that I have picked up studying JavaScript & Inteactive Front End modules of th CI programme & combining thess skills with the existing HTML & CSS knowledge from earlier in the course.
* This website is also being built to market the tourism opportunities of Galicia, Spain. Galicia is the north-westernmost region of Spain but when it comes to tourism, it is not as well known as the major urban centres of Spain (e.g. Madrid, Barcelona, etc) or the Meditteranean coastline resorts.
The website will showcase each of the 4 provincs that make up Galicia and will give the user a guide to the attractions, hotels, restaraunts, bars, etc of each of the provinces.

The website is designed to be accessed and viewed on all smart devices, laptops & PCs.

The live site is located [here](https://roryogorman.github.io/visita-galicia/).

***

## User Experience
### User Stories
#### First Time Users
* A primary goal of first time users is to be easily able to access the site.
* The first time user should clearly be able to understand the site & its aims.
* As the first time user is interested in travelling to Galicia, the user should be easily able to navigate the site, understand the layout of the site and where to find the desired content.

#### Returning Users
* Returning Users may wish to examine the site more closely, understand how to contact & interact with the site owners.
* They may be interested in getting further information on sites & activities in Galicia that they may not have seen previously.
* They may wish to have increased interaction with the site owners either through the site or through social media links.

#### Frequent Users
* Frequent Users may be interested in updates on sites and attractions of the province.
* Frequent Users may be interested in seeing any changes and improvements to the site. 
* Frequent Users may wish to give reviews & feedback to the Owners on the functionality of the site.

#### Site Owner
* The site owner wishes to use the site to give a web presence to their business.
* The site owner wishes to have an easy-to-follow site that can be updated regularly with information on sites, accomodation, attractions, etc, as well as any new layouts, etc.
* The site owner also would like to have a seamless way of communication from users via an online contact form as well as visible links to their various social media platforms.  

***

***
### Design 
#### Colour Scheme
- To reflect the subject matter & aims of the site, I will be using bold & vibrant colours throughout the site. I feel that using these shades adds to the attractiveness of the site and is very appropriate.
- The colour scheme used is based on the Galician regional flag - a rich blue sash on a white background, with a crest which contains a Red & Gold shade. These colours ae traditional to the region and can be seen everywhere, from football clubs kits to traditional pottery.
- The colours used are:
    - a. #FFFFFF: A brilliant white.
    - b. #009ACD: Rich Electric Blue. 
    - c. #005AC1: Sapphire
    - d. #CDCDCD: Chinese Silver
    - e. #D90921: Lava

#### Typography
- Two fonts were used primarily for this site - Roboto & Roboto Slab. These are two fonts that are commonly used in tourism websites and are both clean, clear & very readable and so I feel are appropriate for this site
- From researching other leading tourism websites for the region e.g. tourism.gal & galiciaguide.com, these sites use typography such as these throughout which makes their sites look very attractive.
- I had planned on using Celtic script typography (as Galicia is a Celtic region and this script can be seen throughout the region), however I was unable to import this font in.
- Throughout, titles were entered using Roboto Slab, with the main script in Roboto.


#### Imagery
 - As this is a tourism website, stock images of the scenery & environment of Galicia was used throughout.

### Wireframes
The wireframe for the project was created using Balsamiq and can be seen [here](https://github.com/roryogorman/visita-galicia/blob/master/assets/images/Wireframe/Visita%20Galicia%20Home%20Page.bmpr).

***

## Features

### Structure of Website
The website consists of one page that is split in four sections, outlined below:
#### 1. The Landing View
This page is divided into 4 parts:
#### The Navigation Bar:
- The Navigation Bar ('Nav') sits atop this page. Contained in this bar, from left-to-right, are:
    - a. The site's logo
    - b. Links to the other pages in the site i.e. Gallery and Shop. Clicking on these links will bring you directly to the page, but in the same browser.
#### Hero Image Section:
- The Headline Section contains a Hero Image which will be a stock image of Galician scenery - in this case, the famous Torre de Hercules in A Coruna, which is one of the most famous and most-visited sites in the region.
#### Welcome Message Section:
- This section has a brief introduction to the site and its objectives.
#### Visit the Province Section:
- This section contains four divs, representing the 4 provinces of Galicia - namely A Coruna, Pontevedra, Lugo & Ourense. A stock image of landscape representing the region & a navigational button in each will take you to that relevant section

#### 2. Weather Conditions Section
- This is an API from weather.js - the aim of this being to give current weather temperature & conditions in Galicia. Santiago de Compostela - the Galician capital - was chosen to be the city form which the forecas is based, due to its central location in the region.
- The background colour used here was Lava. This was chosen to giv it contrast to the rest of the page & also this colour is used in the crest of Galicia that appears on the regional flag.

#### 3. Map Section
#### Map of Galicia
- This is a Google Maps API which has marked on it the top rated hotel, restaurants, bars and tourist attractions (based on personal knowledge & TripAdvisor).
- It was hoped to use the Places API to automatically bring in amenities, but this will be work-in-progress.

#### 4. Province Details Description
- This section contains two parts:
    - a. A map showing the position of the province within Galicia, and
    - b. A short description of the province.

#### Top 3 Picks List
- This is 3 divs showing our pick of the top 3 activites in each province, with a stock image of the attraction. A future development in this would be a JS code which would only display the top 3 activiites of the chosen destination, however this has not been implemented in this release.

#### 5. Contact Form:
- The Contact Form invites the user to submit to the site owners any questions that they may have on the region.

#### 6. The Footer Section:
- This bar sits at the bottom of the page. Contained in this bar, from left-to-right, are:
    - a. Contact Details - the address & contact no. of the business (for the purposes of MS1, this will be dummy values)
    - b. Social Media Links - links through to the Facebook, Instagram, Twitter & Pinterest pages for the business. For the purposes of MS1, these will be links to the home pages of these sites as the social media pages do not exist as yet.


***

## Technologies

### Languages

* [HTML5](https://en.wikipedia.org/wiki/HTML5) - the main structures of this website were coded using HTML5.
* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) - the styling of this website has been coded using CSS3.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - this was used in the contact form section to connect to the owners mail server.

### Frameworks, Libraires & Programs Used
* [Bootstrap 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - This was used to assist with the responsiveness and styling of the website.
* [Google Fonts](https://fonts.google.com/)
    - I used this to import the Roboto & Roboto Slab Fonts 
* [Font Awesome](https://use.fontawesome.com/releases/v5.0.10/css/all.css)
    - This was used to import Social Media icons. 
* [Github](https://github.com/roryogorman/visita-galicia)
    - Repository Hosting Service for files used for this website.
* [Gitpod](https://gitpod.io/workspaces/)
     - The IDE used for coding & the creation of the source files. These files are committed & pushed from here to Github.
* [Git](https://git-scm.com/)
    - The version control used to commit & push to GitHub.
* [Balsamiq](https://balsamiq.com/)
    - Wireframes for the site were created on Balsamiq.
* [Unsplash](https://unsplash.com/)
    - All images used on the site came from this source.
* [weatherjs](https://weatherjs.com/)
    - The API from this website was used to produce the weather conditions section of the site.
* [Coolors](https://coolors.co/)
    - This site was used to source the colour palette throughout the website.
* Chrome Developer Tools 
    - This tool was used to ensure correct mobile responsiveness, as well as inspecting the formatting of the various elements of the site
* [Stack Overflow](https://stackoverflow.com/)
    - This site was used for solutions to various tasks that arose while coding the page.
* [W3Schools](https://www.w3schools.com/)
    - This web developer site was also used to source solutions to various tasks while coding the site.
* [HTML validator](https://validator.w3.org/)
    - This site was used to validate the HTML code.
* [CSS Validator](https://jigsaw.w3.org/css-validator/)
    - this site was used to validate the CSS code.
* [JS Validator](https://codebeautify.org/jsvalidate)
    - this site was used to validate the CSS code.
* [EmailJs](https://www.emailjs.com/)
    - This site was used for the JS query to ensure that the contact form method would send an automated email to the site owners address.
* [Google Maps Developers Site](https://developers.google.com/maps)
     - The API for Google Maps and subsequent support came from this source.

***

## Testing
### Testing has been carried out throughout the site to confirm the anticipated, expected results. Details are:
#### Navbar Section:
    - Site Logo: Clicking on this keeps you on the Landing section. Test Successful.
    - Home: This should be bolded as this is the current section in view. Test Successful.
            * Clicking on 'Home' should result in the user staying on the Landing section. Test Successful.
    - Visit Provinces: This should be unbolded as this is not the section in view. Test Successful.
            * Clicking on 'Visit Povinces' should navigate the user to the 'Visit Provinces' section. Test Successful.
    - Contact: This should be unbolded as this is not the current section. Test Successful.
            * Clicking on 'Contact' should navigate the user to the 'Contact Form' section. Test Successful.
    - Mobile devices:
            * On small devices the 'Home', 'Visit Provinces' & 'Contact' links are collapsed into a 'hamburger' menu, for real estate purposes. Test Successful.

#### Welcome Section:
    - One 'section' centred on the screen giving an introduction to the site. Test Successful.

#### Visit The Provinces Section:
    - Four divs, placed in a 2 x 2 layout. Each div contains a stock image, the name of the Province and a navigational button. Test Successful.
    - Clicking 'Find Out More' button will bring you to the Province Description section. Test Successful.
    - Mobile Devices: On small mobile devices, the sections are laid out underneath each other i.e. 1 column of 4 rows. Test Successful.

#### Weather Conditions Section
     - This should show the current weather & conditions of Santiago de Compostela. Test Successful.

#### Map Section
     - A Google Map of Galicia is shown with an animated 'drop' of markers. Test Successful.
     - Hovering over each marker gives the name of the location. Test Successful.
     - Clicking on the marker gives a pop-up window giving the name, type of amenity & a link to a Trip Advisor Galicia page.
     - Depending on the device used, the zoom on th map is defaulted to a 'best-fit' factor. Test Successful.

#### Provinces Information
     - A map of the province within Galicia & a description of the province. Test Successful.
     - 3 divs aligned beside each other. Test Successful.
     - The divs contain a stock image of the activity & a description of the activity. Test Successful.
     - Mobile Devices: On small mobile devices, the acivities are stacked on each other i.e. 1 column of 3 rows.

#### Footer Section:
    - Social Media Links:
            * The icons for each social media link should darken as the mouse hovers over it. Test Successful.
            * Clicking on Facebook icon should bring the user to the Facebook page of the business, opened in a new tab (for the purposes of MS1, it brings the user to Facebook's Home Page). Test Successful.
            * Clicking on Twitter icon should bring the user to the Twitter page of the business, opened in a new tab (for the purposes of MS1, it brings the user to Twitter's Home Page). Test Successful.
            * Clicking on Instagram icon should bring the user to the Instagram page of the business, opened in a new tab (for the purposes of MS1, it brings the user to Instagram's Home Page). Test Successful.

### Testing of User Stories:
#### First Time Users
* A primary goal of first time users is to be easily able to access the site.
    - Clicking on the weblink will allow the user to access the site.
* The first time user should clearly be able to understand the site & its aims.
    - The 'Bos Dia/Welcome to...' section on the Landing Page gives an overview of the site and its objectives.
* As the first time user is interested in travelling to Galicia, the user should be easily able to navigate the site, understand the layout of the site and where to find the desired content.
    - The Navbar at the top of each screen is an easily navigable method for the site, and each link will take the user to the desired section. 
    - Also, clicking on the 'Find Out More' Buttons for each destination brings the user to that section, displaying furher information.

#### Returning Users
* Returning Users may wish to examine the site more closely, understand how to contact & interact with the site owners.
    - Links to the various Social Media platforms are clearly given at the foot of the page.
* They may be interested in getting further information on sites & activities in Galicia that they may not have seen previously.
     - Users are encouraged to contact the site owners through the Contact Form with any requests that the user amy have.
* They may wish to have increased interaction with the site owners either through the site or through social media links.
     - Social Media links to Facebook, Twitter & Instagram are given at the foot of the page and users can also use the simole contact form on the site.

#### Frequent Users
* Frequent Users may be interested in updates on sites and attractions of the province.
    - Users can see on the Google Maps feature all sites & amenities that have been recommended by the site users. 
* Frequent Users may be interested in seeing any changes and improvements to the site. 
    - Users can also suggst updates or changes to the site through the contact form or Social Media links - th sie will in future contain a log of all changes that have been made by user suggestions.
* Frequent Users may wish to give reviews & feedback to the Owners on the functionality of the site.
    - Users are encouraged to give feedback via the contact form or via social media links.

#### Site Owner
* The site owner wishes to use the site to give a web presence to their business.
    - Accessing the site gives the Owner a presence on the web.
* The site owner wishes to have an easy-to-follow site that can be updated regularly with information on sites, accomodation, attractions, etc, as well as any new layouts, etc.
    - The owners can use the Google Maps API to visualise amenities, as well as updating the map with new attractions. A description of each of the top 3 sites per province is also provided.
* The site owner also would like to have a seamless way of communication from users via an online contact form as well as visible links to their various social media platforms. 
    - As well as Social Media links, th online Contact Form sends an automated email to the inbox of the Owners email address.


#### HTML Validator
* Passing my HTML code through the Validator resulted in small errors in my coding for the javascript scripts, bu does not affect the running of the code.
* An error at the coding for the Google Maps API also was returned, but this is a minor issue that does not affect the validity of the code.

#### CSS Validator
* Passing the CSS code through resulted in four errors - all regarding the use of the 'text-align: bottom' property, as 'bottom' isnt a valid value. This was removed, test was reran and no errors were found.

#### JS Validator
* Passing the JS code through returned no errors.

***

## Bugs
*   Bug:Compressed Menu not appearing
    Fix: Adding the 3 JS script tags at lines 359-367 resolved this issue.
*   Bug: Stock images on cards not fitting correctly
    Fix: Using the tips provided at https://getbootstrap.com/docs/4.0/examples/blog/#, this showd me the style element needed in the HTML file & the CSS needed to size the image correctly to fit into the cards.
*   Bug:'Find Out More' button not navigating to the correct section
    Fix: This was resolved by correctly adding the ID tag so that the element is correctly called.
*   Bug:'Find Out More' button not hiding details of the other provinces
    Fix: This is still outstanding and not resolved in time for this deadline. A JS query is needed, however after rying codes suggested by w3schools, and also consulting with CI Tutor Support, I was unable to resolve this.
         Instead, I realigned the HTML file to display all of the information of all provinces, and to group them in a meaningful manner.
*   Bug: Google Maps not displaying Places API
    Fix: This is still outstanding - the Places API could not be called correctly. 
         In order to meet the deadline for this project, I made the decision to list the top hotels, restaraunts & attractions for each province and manually add the markers to the map.
*   Bug: Aligning the stock images in the Top 3 Picks section.
    Fix: At first, the height of the stock images in these divs were uneven. Adjusting the height of the image to c.40% aligned the images correctly.
*   Bug: White Space appearing above footer bar.
    Fix: This occurred because the 'Container-Fluid' class on the footer has a default top margin of 16px. Zeroing this removed the space.

***

## Deployment
### GitHub Pages
The following steps were taken to deploy this website:
* Log in into [GitHub](https://www.github.com).
* Click & open the Visita Galicia repository.
* Click on Settings in the toolbar.
* Scroll down the page to the GitHub Pages section.
* In the  "Source " section, click the dropdown menu currently defaulted to  "None".
* Select  "Branch: master " from the dropdown menu, then click  "Save ".
* The page will re-load automatically.
* Scroll down again to the same section "GitHub Pages".
* Now at the top of this section, you will see a link that says "Your site is published at [https://roryogorman.github.io/Crafts-by-Ainhoa/](https://roryogorman.github.io/Crafts-by-Ainhoa/)".


The following two sections were taken from the Code Institute's "Sample README.md" template [here](https://github.com/Code-Institute-Solutions/SampleREADME/blob/master/README.md)

### Fork the code
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:
* Log in to GitHub and locate the [GitHub Repository](https://github.com/)
* At the top of the Repository (not top of page) just above the 'Settings' Button on the menu, locate the 'Fork' Button.
* You should now have a copy of the original repository in your GitHub account.


### Local Clone
To make a local clone of the site, follow these steps:
* Log in to GitHub and locate the [GitHub Repository](https://github.com/)
* Under the repository name, click 'Clone or download'.
* To clone the repository using HTTPS, under 'Clone with HTTPS', copy the link.
* Open Git Bash
* Change the current working directory to the location where you want the cloned directory to be made.
* Type `git clone`, and then paste the URL you copied in Step 3.
* Press Enter. Your local clone will be created.

***

## Credits
- My mentor Spencer Barriball - whose knowledge, advice, experience & enthusiasm has been of invaluable help throughout this course.
- Code Institute's Tutor Support who have taken the time to take me through the JS issues that I was having and in helping me to understand.
- The fantastic Slack User Community who have been of such great help on numerous issues that I have come across in the creation of this site.


***
