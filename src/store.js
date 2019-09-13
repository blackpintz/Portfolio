import uuid from 'uuid/v1'
import semanticlogo from './Images/semantic-ui.svg'
import nodelogo from './Images/nodejs.svg'
import reactlogo from './Images/reactjs.svg'
import firebaselogo from './Images/firebase.svg'
import colortheme1 from './Images/colortheme_1.png'
import colortheme2 from './Images/colortheme_2.png'
import colortheme3 from './Images/colortheme_3.png'

export const portfolioStore = {
    Portfolios: [{
        id: uuid(),
        link: 'palette-n-shades.com',
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
            image: nodelogo},
          {
            name: 'Semantic-ui',
            image: semanticlogo},
          {
            name: 'Reactjs',
            image: reactlogo},
          {
            name: 'Firebase',
            image: firebaselogo}
            ]
      }
     ]
}