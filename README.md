# USER'S MANUAL
Project Presentation for CS50 URL: [https://youtu.be/M5Z7UHRo8Fo](https://youtu.be/M5Z7UHRo8Fo)
## INTRODUCTION
Welcome to the source code for Cloudy, a mood tracker app built entirely on Next JS, a React JS framework. The implementation is fairly simple but I wanted to learn more about Node JS apps and the different libraries you can use to create a fully functional app that communicates with a real database and can be deployed as a real, useful website [(go to the online version of Cloudy here).](https://cloudy-mood-tracker.vercel.app/)
## TECHNOLOGIES USED
- Next JS (+ React JS) for the frontend
- Prisma as an ORM/query builder that connects to the sql database hosted on PlanetScale
- Prisma Next JS adapter to connect them
- Next Auth for Google authentication
- React Bootstrap for styling
## FUNCTIONALITY
- The home page is the index page. All pages can be found under the pages folder. _app.js and _document.js are global pages that are applied to every page.
- Users login through Google authentication and can access new pages: Dashboard, Add, and Statistics.
- Dashboard shows the user's journals added through the Add page while Statistics shows a few interesting details about the user's mood. This is done through getServerSideProps, which is how Next JS fetches data.
- Users can add journals by clicking the Add button and filling out some information. This sends a POST request to api/journals/index.js which, with Prisma, will add a journal.
- Users can also delete journals from the Dashboard, which is also found under api/journals/index.js.
- The actual Prisma schema can be found in prisma/schema.prisma.
- Styles for the page can be found under styles, which are then imported into the respective .js file.
- Pages are built with React components which can be found under the components folder.
## HOW TO RUN CLOUDY LOCALLY
1. Make sure you have Node installed.
2. Clone the code with `git clone https://github.com/nathalieacosta/cs50.git` and fill out the .env.local file with the following information (provided in the CS50 Zip submitted to Gradescope).
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL=http://localhost:3000`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_SECRET`
- `DATABASE_URL`
3. Run `npm install` to install all the dependencies.
4. Once everything is installed run `npm run dev`.
5. Go to `localhost:3000` in your browser and access Cloudy!