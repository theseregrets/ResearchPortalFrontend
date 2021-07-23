/* eslint-disable import/prefer-default-export */

const member1 = require('../Assets/member1.png');
const member2 = require('../Assets/member2.png');

export const TEAM_INFO = [
  {
    id: 1,
    name: 'Barry ',
    contact: 'flash@fastmail.com',
    image: member1.default,
  },
  {
    id: 2,
    name: 'Allen',
    contact: 'random@fastmail.com',
    image: member2.default,
  },
  {
    id: 3,
    name: 'Whocares',
    contact: 'abc@gmail.com',
    image: member1.default,
  },
  {
    id: 4,
    name: 'Barry ',
    contact: 'flash@fastmail.com',
    image: member2.default,
  },
  {
    id: 5,
    name: 'Whocares',
    contact: 'abc@gmail.com',
    image: member1.default,
  },
  {
    id: 6,
    name: 'Allen',
    contact: 'random@fastmail.com',
    image: member2.default,
  },
];
