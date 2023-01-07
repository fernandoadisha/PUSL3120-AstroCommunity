express = require('express')
router = express.Router();


const sample_items = [
  {
    id:'1',
    name: 'Toy Falcon 9',
    price: 100,
    tag: ['toy','rocket','spacex','falcon9'],
    imageUrl: 'assets/toyfaclon9_1.jpg',
    stars: 4.9
  },
  {
    id:'2',
    name: 'Toy Orion Capsule',
    price: 100,
    tag: ['toy','rocket','nasa','orion'],
    imageUrl: 'assets/toyorinon_1.jpeg',
    stars: 4.9
  },
  {
    id:'3',
    name: 'SpaceX Tee',
    price: 30,
    tag: ['shirt','men','spacex'],
    imageUrl: 'assets/spacextee_1.jpg',
    stars: 4.0
  }

]

function getSampleItems() {
  return sample_items;
}


module.exports = getSampleItems;
