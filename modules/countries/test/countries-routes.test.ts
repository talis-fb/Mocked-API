import countriesList from '../data/countries';

const request = require('supertest');
const baseURL = 'http://localhost:3000';

describe('country api endpoints', () => {
  describe('GET /countries/', () => {
    it('should return a list of countries', async () => {
      const response = await request(baseURL).get(`/countries/`);
      expect(response.body).toStrictEqual({ countries: [...countriesList] });
    });
  });

  describe('GET /countries/:filterBy?', () => {
    it('should return gpb_usd ticker data', async () => {
      const filter = 'Afghanistan';
      const response = await request(baseURL).get(`/countries/${filter}`);
      console.log(response.body);

      expect(response.body.countries[0]).toEqual(filter);
    });
  });
});
