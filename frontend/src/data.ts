// for now this file is temporaly holding models for
import { Item } from './app/shared/models/items';

export const sample_items: Item[] = [
  {
    id:'1',
    name: 'Toy Falcon 9',
    price: 100,
    tag: ['Toy','Rocket','Spacex','Falcon9'],
    imageUrl: 'assets/toyfaclon9_1.jpg',
    stars: 4.9
  },
  {
    id:'2',
    name: 'Toy Orion Capsule',
    price: 100,
    tag: ['Toy','Rocket','NASA','Orion'],
    imageUrl: 'assets/toyorinon_1.jpeg',
    stars: 4.9
  },
  {
    id:'3',
    name: 'SpaceX Tee',
    price: 30,
    tag: ['Shirt','Men','SpaceX'],
    imageUrl: 'assets/spacextee_1.jpg',
    stars: 4.0
  }

]


