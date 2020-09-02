import uuid from 'uuid/v1'
import semanticlogo from './Images/semantic-ui.svg'
import nodelogo from './Images/nodejs.svg'
import reactlogo from './Images/reactjs.svg'
import digitalOcean from './Images/dg_icon.svg'
import firebaselogo from './Images/firebase.svg'
import colortheme1 from './Images/paletteApp.png'
import camp_1 from './Images/campApp.png'
import budget from './Images/budget-app.png'
import mongologo from './Images/Mongodb.svg'
import herokulogo from './Images/Heroku.svg'
import railslogo from './Images/rails.svg'
import pglogo from './Images/postgresql.svg'

export const portfolioStore = {
    Portfolios: [{
        id: uuid(),
        app: 'Palette-n-shades',
        link: 'https://palette-n-shades.com',
        images: [
          colortheme1
        ],
        description: 'A simple web app that creates a palette of different colors and enables one to copy a color to the clipboard. The app generates shades of each color chosen in the palette.',
        technologies: 'palette-n-shades.com is built using React.js with a node backend for cli tooling. Firebase provides the database solutions and semantic-ui is the css framework chosen. The app is deployed on digital ocean.',
        devTools: [
          {
            name: 'Nodejs',
            image: nodelogo
          },
          {
            name: 'Semantic-ui',
            image: semanticlogo},
          {
            name: 'Reactjs',
            image: reactlogo},
          {
            name: 'Firebase',
            image: firebaselogo
          },
           {
            name: 'Digital Ocean',
            image: digitalOcean
          }
        ],
        githublink: 'https://github.com/blackpintz/palette-n-shades'
          
      },
      {
        id: uuid(),
        app: 'Social camp',
        link: 'https://campenthusiasts.herokuapp.com/',
        images: [
          camp_1
        ],
        description: 'A social networking site where users can post campsites they have travelled to.',
        technologies: 'On the backend, Social camp uses Express/Node.js on Heroku to handle user accounts and authentication. MongoDB database backs up the user data.',
        devTools: [
          {
            name: 'Nodejs',
            image: nodelogo
          },
          {
            name: 'MongoDB',
            image: mongologo
          },
          {
            name: 'Heroku',
            image: herokulogo
          },
          {
            name: 'Semantic-ui',
            image: semanticlogo
          }
        ],
        githublink: 'https://github.com/blackpintz/campApp'
      },
      {
        id: uuid(),
        app: 'Decor Budget App',
        link: 'https://budgetapp-for-decor.herokuapp.com/',
        images: [
          budget
        ],
        description: 'An app that groups payments of decor bought for designing specific sections of a home. The decors are divided into categories of specific rooms of a home. Example living room, bathroom etc.',
        technologies: 'The app is built using Ruby on Rails, Postgresql database and bootstrap css framework.',
        devTools: [
          {
            name: 'Ruby on Rails',
            image: railslogo
          },
          {
            name: 'Postgresql',
            image: pglogo
          },
          {
            name: 'Heroku',
            image: herokulogo
          }
        ],
        githublink: 'https://github.com/blackpintz/campApp'
      }
     ]
}