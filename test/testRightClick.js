import { PAGE_PATH } from '../constants.js';

describe('Nightwatch rightClick() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/rightClick.html`));

  it('should change text of element on right click', async function({ element }) {
    const rightClickBox = element('#right-click-box');
    await rightClickBox.rightClick();
    await rightClickBox.getText().assert.equals('Right Clicked!');
  });

  it('should increment counter on right click', async function({ element }) {
    const rightClickCounter = element('#right-click-counter');
    await rightClickCounter.rightClick();
    await rightClickCounter.getText().assert.equals('Right Click Count: 1');
  });

  it('should show context menu on right click of link', async function({ element }) {
    const rightClickLink = element('#right-click-link');
    const contextMenu = element('#context-menu');
    await rightClickLink.rightClick();
    await contextMenu.assert.visible();
  });

  it('should handle right click on non-existent element', async function({ element }) {
    const nonExistentElement = element({
        selector: '#non-existent',
        suppressNotFoundErrors: true,
        timeout: 100
    });
    try {
      await nonExistentElement.rightClick();
    } catch (error) {
      expect(error.message).to.include('Element not found');
    }
  });

  after((browser) => browser.end());
});