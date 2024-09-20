import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getTagName() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getTagName.html`));

  it('should get tag name of div element', async function({ element }) {
    const mainDiv = element('#main');
    await mainDiv.getTagName().assert.equals('div');
  });

  it('should get tag name of h1 element', async function({ element }) {
    const header = element('#main h1');
    await header.getTagName().assert.equals('h1');
  });

  it('should get tag name of p element', async function({ element }) {
    const paragraph = element('#main p');
    await paragraph.getTagName().assert.equals('p');
  });

  it('should get tag name of input element', async function({ element }) {
    const usernameInput = element('#username');
    await usernameInput.getTagName().assert.equals('input');
  });

  it('should get tag name of button element', async function({ element }) {
    const submitButton = element('#submit');
    await submitButton.getTagName().assert.equals('button');
  });

  it('should get tag name of a element', async function({ element }) {
    const link = element('#link');
    await link.getTagName().assert.equals('a');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const mainDiv = element('#main');
    const tagName = await mainDiv.getTagName();
    console.log('getTagName result:', tagName);
    expect(tagName).to.equal('div');
  });

  after((browser) => browser.end());
});