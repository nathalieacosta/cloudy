# DESIGN DOCUMENT
This file is meant to explain some design choices and answer some questions regarding the technical and ethical decisions I made.

## TECHNICAL DECISIONS
### In this section, share and justify the technical decisions you made.
I definitely struggled learning a whole new framework (Next JS) on top of a framework I didn't know much about (React JS). I wanted to implement more features but I initially struggled a lot on how to connect the database to the frontend. I wanted to learn more about MongoDB but I relied on SQL after finding out about Prisma and PlanetScale since that is the language I know best. 


## ETHICAL DECISIONS
### What motivated you to complete this project? What features did you want to create and why?
Regardless, my initial goal was accomplished—I wanted to learn something beyond the scope of CS50 and make a fully functional and accessible website. Even if the features were limited to just GET/POST/DELETE requests, I wanted to work with tangible data and be able to host my website so that anyone could access it even after CS50.


### Who are the intended users of your project? What do they want, need, or value?
The intended users of my project include those who want to track their moods over time or value statistics on them. I think most of all though, my project is a great example for other developers to model their Next JS/Prisma projects on and how the API calls work with Next JS.



### How does your project's impact on users change as the project scales up? 
The online database can only handle a certain amount of reads/writes a month, so if the project ever scaled up, I would need to most likely buy a subscription to be able to have more database space. I would probably have to host ads on the website to pay for this and also add more requested features like a friends list + feed pages.

