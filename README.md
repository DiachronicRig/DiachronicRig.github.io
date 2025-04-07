# Me, myself and my website by Riccardo Ghini
#### Video Demo:  <https://youtu.be/ei_Ber1lcB8>
## Description:

For my final project I decided to build a website for myself that I could use as a sort of online Resume, always at hand.\
I started with taking inspiration looking around the web and then step by step I implemented the features that i found good looking or useful.\
My website aims to be responsive for both PCs and mobile devices but I only had my PC and my phone to test it out so I expect some bugs in general.\
This project folder contains an html file for the main site structure, a css file to properly position and style all the elements, a script.js to control all the interactive stuff and the functions throughout the website and a translation.js that acts as a library of some sort when switching languages.

### The navigation bar
Starting from the top, I built a navigation bar with my logo and links to the important parts of my website (About me, Timeline, Thesis, ContactMe and Socials), that I'll describe later, a search icon that when clicked opens a search bar that act as a ctrlF, searching the website, a button to view a pdf of my CV and most importantly another button that can be used to switch languages between italian and english. The Flag icons are entirely drawn by me
#### Language Toggle:
Users can switch between English and Italian seamlessly. The site uses a custom translation system that updates content dynamically without requiring a page reload. This includes navigation items, body text, buttons, and even the embedded documents such as the CV.

#### Dynamic Translation:
Text content is marked up with data attributes (e.g., data-key), and a dedicated JavaScript function reads these keys from a translations object. This ensures that every piece of text – including “read more/read less” in the Timeline entry toggles and dropdown options reflects the current language selection too.\

#### Adaptive Layout
The navbar adjusts itself when the user scrolls down and the navbar links are hidden on mobile, accessible thanks to a burger icon on the top left.

### The Content
The page content is divided into 3 columns, the left and right column and the central one called container. The ones on the sides are hidden and can be shown when clicking on the corrisponding buttons at the top, right under the navbar. The left column contains music controls for background music while the right one contains a button to change fonts.
#### About Me
The main content is divided in sections, the first one is called About Me and contains a short description of myself as well as a photo.
#### Timeline/My Life so far
The timeline section uses an Intersection Observer to animate entries as they come into view. Each event is displayed with a date and description, and users can expand entries to read additional details./
The timeline supports both button-controlled scrolling and mouse dragging and a horizontal scrolling, offering a fun, interactive way to explore Riccardo’s life story.
#### Thesis
A pdf of my Astronomy thesis I wrote last year of University can be found here with a short description of what it talks about. This pdf is not available in both languages as I wrote it in Italian and its more than 40 pages long.
#### Contact Me and Socials
A built-in contact form lets visitors send messages directly to Riccardo. The form includes basic validation and a honeypot field to deter spam.
All the messages are not actually sent to my email but automatically compile a google form connected to an excel that notifies my second email when someone updates it. Basically it has the same effect of an email.\

Social media icons link to my profiles on platforms such as Reddit, Instagram, and LinkedIn as well as my email, making it easy for visitors to connect with me.\
Under the socials there is an image, that I carefully animated and modified to fit the theme, that seems to summon the box in which the socials buttons reside.

### Footer
Last but not least at the bottom can be found a footer with my name and copyright, the year and a back to top button.\
There is another back to top button that appears when the user scrolls down enough and can be used in the same way but its's also hidden when in mobile view./
/My code, while written by me, has been passed through ChatGPT to check for errors, redundancies and unnecessary lines of code, as to have a faster and better website. (I'm still a beginner you know)
