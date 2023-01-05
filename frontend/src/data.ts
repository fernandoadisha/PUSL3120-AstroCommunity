// for now this file is temporaly holding models for
import { Item } from './app/shared/models/items';
import { Tag } from './app/shared/models/tag';

export const sample_items: Item[] = [
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

export const sample_tags:Tag[] = [
  {name: 'All', count: 6},
  {name: 'spacex', count: 4},
  {name: "nasa", count: 5},
  {name: 'male', count: 3},
  {name: 'female', count: 3}
]
