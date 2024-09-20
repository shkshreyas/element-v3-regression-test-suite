import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getAttribute() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getAttribute.html`));

  it('should get target attribute of a link', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getAttribute('target').assert.equals('_blank');
  });

  it('should get href attribute of a link', async function({ element }) {
    const firstLink = element('#main ul li a.first');
    await firstLink.getAttribute('href').assert.equals('https://nightwatchjs.org/');
  });

  it('should get data-testid attribute', async function({ element }) {
    const secondLink = element('#main ul li a.second');
    await secondLink.getAttribute('data-testid').assert.equals('node-link');
  });

  it('should get multiple attributes of an input', async function({ element }) {
    const usernameInput = element('#username');
    await usernameInput.getAttribute('type').assert.equals('text');
    await usernameInput.getAttribute('name').assert.equals('username');
    await usernameInput.getAttribute('placeholder').assert.equals('Enter username');
    await usernameInput.getAttribute('maxlength').assert.equals('20');
    await usernameInput.getAttribute('required').assert.equals('true');
  });

  it('should get attributes of an image', async function({ element }) {
    const logoImg = element('#logo');
    await logoImg.getAttribute('src').assert.equals(`${PAGE_PATH}/nightwatch-logo.png`);
    await logoImg.getAttribute('alt').assert.equals('Nightwatch.js Logo');
  });

  it('should handle boolean attributes', async function({ element }) {
    const submitButton = element('#submit-btn');
    await submitButton.getAttribute('disabled').assert.equals('true');
  });

  it('should get custom data attributes', async function({ element }) {
    const customElement = element('#custom-element');
    await customElement.getAttribute('data-color').assert.equals('blue');
    await customElement.getAttribute('data-size').assert.equals('large');
  });

  it('should get ARIA attributes', async function({ element }) {
    const customElement = element('#custom-element');
    await customElement.getAttribute('aria-hidden').assert.equals('true');
  });

  it('should handle non-existent attributes', async function({ element }) {
    const customElement = element('#custom-element');
    await customElement.getAttribute('non-existent-attr').assert.equals(null);
  });

  after((browser) => browser.end());
});