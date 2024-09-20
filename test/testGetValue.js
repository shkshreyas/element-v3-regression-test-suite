import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getValue() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getValue.html`));

  it('should get value of text input', async function({ element }) {
    const usernameInput = element('#username');
    await usernameInput.getValue().assert.equals('testuser');
  });

  it('should get value of password input', async function({ element }) {
    const passwordInput = element('#password');
    await passwordInput.getValue().assert.equals('password123');
  });

  it('should get value of textarea', async function({ element }) {
    const commentTextarea = element('#comment');
    await commentTextarea.getValue().assert.equals('This is a comment');
  });

  it('should get value of select element', async function({ element }) {
    const countrySelect = element('#country');
    await countrySelect.getValue().assert.equals('ca');
  });

  it('should get value of checked checkbox', async function({ element }) {
    const rememberCheckbox = element('#remember');
    await rememberCheckbox.getValue().assert.equals('on');
  });

  it('should get value of selected radio button', async function({ element }) {
    const maleRadio = element('input[type="radio"][value="male"]');
    await maleRadio.getValue().assert.equals('male');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const usernameInput = element('#username');
    const value = await usernameInput.getValue();
    console.log('getValue result:', value);
    expect(value).to.equal('testuser');
  });

  after((browser) => browser.end());
});