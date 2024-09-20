import { assert } from 'nightwatch';
import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getProperty() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getProperty.html`));

  it('should get classList property', async function({ element }) {
    const usernameInput = element('#login input[type=text]');
    const classList = await usernameInput.getProperty('classList');
    assert.equal(classList.join(' '), 'input-field required')
  });

  it('should get value property', async function({ element }) {
    const usernameInput = element('#login input[type=text]');
    await usernameInput.getProperty('value').assert.equals('testuser');
  });

  it('should get disabled property', async function({ element }) {
    const usernameInput = element('#login input[type=text]');
    await usernameInput.getProperty('disabled').assert.equals(true);
  });

  it('should get checked property', async function({ element }) {
    const rememberCheckbox = element('#remember');
    await rememberCheckbox.getProperty('checked').assert.equals(true);
  });

  it('should get href property', async function({ element }) {
    const forgotPasswordLink = element('#forgot-password');
    await forgotPasswordLink.getProperty('href').assert.equals('https://example.com/');
  });

  after((browser) => browser.end());
});