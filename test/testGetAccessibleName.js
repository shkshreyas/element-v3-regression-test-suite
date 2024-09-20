import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getAccessibleName() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getAccessibleName.html`));

  it('should get accessible name of an input element', async function({ element }) {
    const searchInput = element('input[name="search"]');
    await searchInput.getAccessibleName().assert.equals('Country calling code');
  });

  it('should get accessible name of a button', async function({ element }) {
    const submitButton = element('#submit-button');
    await submitButton.getAccessibleName().assert.equals('Submit search');
  });

  it('should get accessible name of a div with aria-label', async function({ element }) {
    const resultArea = element('#result-area');
    await resultArea.getAccessibleName().assert.equals('Search results');
  });

  it('should get accessible name of a link', async function({ element }) {
    const helpLink = element('#help-link');
    await helpLink.getAccessibleName().assert.equals('Get help with search');
  });

  it('should get accessible name of a complex element', async function({ element }) {
    const complexElement = element('#complex-element');
    await complexElement.getAccessibleName().assert.equals('Important notification');
  });

  it('should handle element without accessible name', async function({ element }) {
    const elementWithoutLabel = element('body');
    await elementWithoutLabel.getAccessibleName().assert.equals('');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const searchInput = element('input[name="search"]');
    const accessibleName = await searchInput.getAccessibleName();
    console.log('getAccessibleName result:', accessibleName);
    expect(accessibleName).to.equal('Country calling code');
  });

  after((browser) => browser.end());
});