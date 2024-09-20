import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getId() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getId.html`));

  it('should get ID of main div', async function({ element }) {
    const mainDiv = element('#main');
    const id = await mainDiv.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Main div ID:', id);
  });

  it('should get ID of page title', async function({ element }) {
    const pageTitle = element('#page-title');
    const id = await pageTitle.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Page title ID:', id);
  });

  it('should get ID of description paragraph', async function({ element }) {
    const description = element('#description');
    const id = await description.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Description ID:', id);
  });

  it('should get ID of username input', async function({ element }) {
    const usernameInput = element('#username');
    const id = await usernameInput.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Username input ID:', id);
  });

  it('should get ID of submit button', async function({ element }) {
    const submitButton = element('#submit-btn');
    const id = await submitButton.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Submit button ID:', id);
  });

  it('should handle element without ID', async function({ element }) {
    const noIdElement = element('.no-id');
    const id = await noIdElement.getId();
    expect(id).to.be.a('string').and.not.empty;
    console.log('Element without ID, generated ID:', id);
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const mainDiv = element('#main');
    const id = await mainDiv.getId();
    console.log('getId result:', id);
    expect(id).to.be.a('string').and.not.empty;
  });

  after((browser) => browser.end());
});