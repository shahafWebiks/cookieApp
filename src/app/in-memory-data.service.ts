import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const places = [
      {id: 1, name: 'place 1', city: 'Tel Aviv', country: 'Israel', num_cookies: 2, num_coffee: 3},
      {id: 2, name: 'place 2', city: 'Ramat Gan', country: 'Israel', num_cookies: 5, num_coffee: 2},
      {id: 3, name: 'place 3', city: 'Jerosalem', country: 'Israel', num_cookies: 8, num_coffee: 15},
      {id: 4, name: 'place 4', city: 'Ramat Gan', country: 'Israel', num_cookies: 0, num_coffee: 19},
      {id: 5, name: 'place 5', city: 'Holon', country: 'Israel', num_cookies: 11, num_coffee: 13},
      {id: 6, name: 'place 6', city: 'Tel Aviv', country: 'Israel', num_cookies: 20, num_coffee: 5},
      {id: 7, name: 'place 7', city: 'Rehovot', country: 'Israel', num_cookies: 3, num_coffee: 2},
      {id: 8, name: 'place 8', city: 'Bat Yam', country: 'Israel', num_cookies: 9, num_coffee: 1},
      {id: 9, name: 'place 9', city: 'Holon', country: 'Israel', num_cookies: 1, num_coffee: 0},
      {id: 10, name: 'place 10', city: 'Jerosalem', country: 'Israel', num_cookies: 15, num_coffee: 0}
    ];
    return {places};
  }
}
