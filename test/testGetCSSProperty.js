import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getCssProperty() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getCssProperty.html`));

  it('should get display property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('display').assert.equals('block');
  });

  it('should get color property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('color').assert.equals('rgba(0, 0, 255, 1)');
  });

  it('should get font-size property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('font-size').assert.equals('16px');
  });

  it('should get margin property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('margin').assert.equals('10px');
  });

  it('should get padding property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('padding').assert.equals('5px');
  });

  it('should get border property', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getCssProperty('border').assert.equals('1px solid rgb(0, 0, 0)');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    const displayProperty = await firstLink.getCssProperty('display');
    console.log('getCssProperty result:', displayProperty);
    expect(displayProperty).to.equal('block');
  });

  after((browser) => browser.end());
});