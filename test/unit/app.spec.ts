import { Configuration } from 'aurelia-cli';
import {App} from '../../src/components/app/app';

describe('the app', () => {
  it('says hello', () => {
    expect(new App().title).toBe('Adra');
  });
});
