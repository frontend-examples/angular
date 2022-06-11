import { browser, element, by } from 'protractor';

describe('Hello world!', () => {
  beforeEach(() => browser.get('/'));

  it('should display "Hello world!"', async () => {
    const title = await element(by.css('app-root h1')).getText();
    expect(title).toEqual('Hello world!');
  });
});
