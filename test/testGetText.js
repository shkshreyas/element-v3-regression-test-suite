import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getText() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getText.html`));

  it('should get text of h1 element', async function({ element }) {
    const header = element('#main h1');
    await header.getText().assert.equals('Welcome to Nightwatch Tests');
  });

  it('should get text of paragraph including nested elements', async function({ element }) {
    const paragraph = element('#main p');
    await paragraph.getText().assert.equals('This is a paragraph with some bold text and some italic text.');
  });

  it('should get text of first list item link', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getText().assert.equals('First Item');
  });

  it('should get text of second list item link', async function({ element }) {
    const secondLink = element('#main ul li a.second');
    await secondLink.getText().assert.equals('Second Item');
  });

  it('should not get text of hidden element', async function({ element }) {
    const hiddenText = element('#hidden-text');
    await hiddenText.getText().assert.equals('');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const paragraph = element('#main p');
    const text = await paragraph.getText();
    console.log('getText result:', text);
    expect(text).to.equal('This is a paragraph with some bold text and some italic text.');
  });

  after((browser) => browser.end());
});