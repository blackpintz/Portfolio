import uuid from 'uuid/v1'
import semanticlogo from './Images/semantic-ui.svg'
import nodelogo from './Images/nodejs.svg'
import reactlogo from './Images/reactjs.svg'
import digitalOcean from './Images/dg_icon.svg'
import firebaselogo from './Images/firebase.svg'
import colortheme1 from './Images/paletteApp.png'
import game from './Images/axe-game.png'
import budget from './Images/budget-app.png'
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
        app: 'Axe game',
        link: 'https://axe-phaser-game.netlify.app/',
        images: [
          game
        ],
        description: 'A phaser 3 game.',
        technologies: 'The app is built using javascript and phaser 3 and deployed on netlify. The game data is stored in an API.',
        devTools: [],
        githublink: 'https://github.com/blackpintz/RPG-game'
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