import { PAGE_PATH } from '../constants.js';

describe('Nightwatch doubleClick() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/doubleClick.html`));

  it('should change color of element on double click', async function({ element }) {
    const colorChangeBox = element('#color-change-box');
    await colorChangeBox.doubleClick();
    await colorChangeBox.assert.hasClass('active');
  });

  it('should change text of element on double click', async function({ element }) {
    const textChangeBox = element('#text-change-box');
    await textChangeBox.doubleClick();
    await textChangeBox.getText().assert.contains('(Double Clicked)');
  });

  it('should increment counter on double click', async function({ element }) {
    const counterBox = element('#counter-box');
    await counterBox.doubleClick();
    await counterBox.getText().assert.equals('Double Click Count: 1');
    await counterBox.assert.hasClass('active');
  });

  it('should select all text in input on double click', async function({ element }) {
    const inputBox = element('#input-box');
    await inputBox.doubleClick();
    const selectionStart = await inputBox.getProperty('selectionStart');
    const selectionEnd = await inputBox.getProperty('selectionEnd');
    const value = await inputBox.getValue();
    expect(selectionStart).to.equal(0);
    expect(selectionEnd).to.equal(value.length);
  });

  it('should double click on a delayed element', async function({ element }) {
    const delayedBox = element('#delayed-box');
    await delayedBox.waitUntil('present',{timeout: 1000});
    await delayedBox.doubleClick();
    await delayedBox.getText().assert.equals('Double Clicked!');
  });

  it('should handle non-existent element', async function({ element }) {
    const nonExistentElement = element({
        selector: '#non-existent',
        suppressNotFoundErrors: true,
        timeout: 100
    });
    try {
      await nonExistentElement.doubleClick();
    } catch (error) {
      expect(error.message).to.include('Element not found');
    }
  });

  after((browser) => browser.end());
});