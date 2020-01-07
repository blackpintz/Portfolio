import uuid from 'uuid/v1'
import semanticlogo from './Images/semantic-ui.svg'
import nodelogo from './Images/nodejs.svg'
import reactlogo from './Images/reactjs.svg'
import firebaselogo from './Images/firebase.svg'
import colortheme1 from './Images/colortheme_1.png'
import colortheme2 from './Images/colortheme_2.png'
import colortheme3 from './Images/colortheme_3.png'
import camp_1 from './Images/camp_1.png'
import camp_2 from './Images/camp_2.png'
import camp_3 from './Images/camp_3.png'
import mongologo from './Images/Mongodb.svg'
import herokulogo from './Images/Heroku.svg'


export const portfolioStore = {
    Portfolios: [{
        id: uuid(),
        app: 'Palette-n-shades',
        link: 'https://palette-n-shades.com',
        images: [
          colortheme1,
          colortheme2,
          colortheme3
        ],
        description: 'A simple web app that creates a palette of different colors and enables one to copy a color to the clipboard. The app generates shades of each color chosen in the palette.',
        technologies: 'palette-n-shades.com is built using React.js with a node backend for cli tooling. Firebase provides the database solutions and semantic-ui is the css framework chosen.',
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
          }
        ],
        githublink: 'https://github.com/blackpintz/palette-n-shades'
          
      },
      {
        id: uuid(),
        app: 'Social camp',
        link: 'https://campenthusiasts.herokuapp.com/',
        images: [
          camp_1,
          camp_2,
          camp_3
        ],
        description: 'A social networking site where users can share campsites they have travelled to and post comments.',
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
      }
     ]
}