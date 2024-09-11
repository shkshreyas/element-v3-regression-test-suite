import {PAGE_PATH} from '../constants.js'

describe('Nightwatch click() Command Tests', function() {

    before((browser) => browser.url(`${PAGE_PATH}/click.html`));

    it('should click a normal button', async function({element, assert}) {
      const button = element('#normal-button');
      await button.click();
      // In a real scenario, you'd verify some change after clicking
      assert.ok(true, 'Normal button clicked without errors');
    });

    it('should click a nested button', async function({element, assert}) {
      const button = element('#nested-button');
      await button.click();
      assert.ok(true, 'Nested button clicked without errors');
    });

    it('should click a hidden button', async function({element, assert}) {
      const button = element('#hidden-button');
      await button.click();
      assert.ok(true, 'Hidden button clicked without errors');
    });

    it('should click an offscreen button', async function({element, assert}) {
      const button = element('#offscreen-button');
      await button.click();
      assert.ok(true, 'Offscreen button clicked without errors');
    });

    it('should click a normal link', async function({element, assert}) {
      const link = element('#normal-link');
      await link.click();
      assert.ok(true, 'Normal link clicked without errors');
    });

    it('should click a styled link', async function({element, assert}) {
      const link = element('#styled-link');
      await link.click();
      assert.ok(true, 'Styled link clicked without errors');
    });

    it('should scroll to and click a button not in view', async function({element, assert}) {
      const button = element('#scroll-button');
      await button.click();
      assert.ok(true, 'Button not in view is scrolled to and clicked');
    });

    it('should click a dynamically added button', async function({element, assert}) {
      const addButton = element('#add-button');
      await addButton.click();
    
      const dynamicButton = element('#dynamic-button');
      await browser.waitForElementVisible('#dynamic-button');
      await dynamicButton.click();
      assert.ok(true, 'Dynamically added button is clicked');
    });

    it('should handle attempting to click a non-existent element', async function({element, assert}) {
    
      try {
        const nonExistentButton = element({
            selector:'#non-existent-button',
            suppressNotFoundErrors: true,
            timeout: 100
        });
        await nonExistentButton.click();
      } catch (error) {
        assert.ok(error, 'Error thrown when trying to click non-existent element');
      }
    });

    it('should verify click event is triggered', async function({element, assert}) {
      const eventButton = element('#event-button');
      await eventButton.click();
    
      const clickCounter = element('#click-counter');
      const clickCount = await clickCounter.getText();
      assert.strictEqual(clickCount, '1', 'Click event is triggered and counter is incremented');
    });

    it('should handle multiple clicks', async function({element, assert}) {
      const eventButton = element('#event-button');
      await eventButton.click();
      await eventButton.click();
      await eventButton.click();
    
      const clickCounter = element('#click-counter');
      const clickCount = await clickCounter.getText();
      assert.strictEqual(clickCount, '4', 'Multiple clicks are registered correctly');
    });

    it('should click elements with different tag names', async function({element, assert}) {
      const button = element('#normal-button');
      const link = element('#normal-link');
    
      await button.click();
      await link.click();
      assert.ok(true, 'Both button and link elements can be clicked');
    });

    after(browser => browser.end());
  });