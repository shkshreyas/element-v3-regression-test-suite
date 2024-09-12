import {PAGE_PATH} from '../constants.js'

describe('Nightwatch update() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/update.html`));
  
    it('should update value in a text input', async function({element, assert}) {
      const input = element('#text-input');
      await input.update('Hello, Nightwatch!');
      const value = await input.getValue();
      assert.strictEqual(value, 'Hello, Nightwatch!', 'Text was updated correctly in text input');
    });
  
    it('should update value in a number input', async function({element, assert}) {
      const input = element('#number-input');
      await input.update('42');
      const value = await input.getValue();
      assert.strictEqual(value, '42', 'Number was updated correctly in number input');
    });
  
    it('should update value in an email input', async function({element, assert}) {
      const input = element('#email-input');
      await input.update('test@example.com');
      const value = await input.getValue();
      assert.strictEqual(value, 'test@example.com', 'Email was updated correctly in email input');
    });
  
    it('should update value in a password input', async function({element, assert}) {
      const input = element('#password-input');
      await input.update('secret123');
      const value = await input.getValue();
      assert.strictEqual(value, 'secret123', 'Password was updated correctly in password input');
    });
  
    it('should clear existing value before updating new value', async function({element, assert}) {
      const input = element('#prefilled-input');
      await input.update('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'New Value', 'Existing value was cleared and new value was updated');
    });
  
    it('should not update value in a readonly input', async function({element, assert}) {
      const input = element('#readonly-input');
      await input.update('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'Readonly Input', 'Readonly input value remained unchanged');
    });
  
    it('should not update value in a disabled input', async function({element, assert}) {
      const input = element('#disabled-input');
      await input.update('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Disabled input value remained empty');
    });
  
    it('should update value in a textarea', async function({element, assert}) {
      const textarea = element('#textarea-input');
      await textarea.update('Line 1\nLine 2\nLine 3');
      const value = await textarea.getValue();
      assert.strictEqual(value, 'Line 1\nLine 2\nLine 3', 'Multiline text was updated correctly in textarea');
    });
  
    it('should update value in a contenteditable div', async function({element, assert}) {
      const div = element('#contenteditable-div');
      await div.update('New content');
      const text = await div.getText();
      assert.strictEqual(text, 'New content', 'Text was updated correctly in contenteditable div');
    });
  
    it('should update value and submit form', async function({element, assert}) {
      const input = element('#form-input');
      await input.update('Form submission test');
      await element('#test-form button[type="submit"]').click();
      
      const output = await element('#form-output').getText();
      assert.strictEqual(output, 'Submitted: Form submission test', 'Form was submitted with the updated value');
    });
  
    it('should update value with special characters', async function({element, assert}) {
      const input = element('#text-input');
      await input.update('Special chars: !@#$%^&*()');
      const value = await input.getValue();
      assert.strictEqual(value, 'Special chars: !@#$%^&*()', 'Special characters were updated correctly');
    });
  
    it('should update value and trigger key events', async function({element, assert}) {
      const input = element('#key-events-input');
      await input.update('Nightwatch', browser.Keys.ENTER);
      
      const value = await input.getValue();
      assert.strictEqual(value, 'Nightwatch', 'Value was updated correctly');
  
      const output = await element('#key-events-output').getText();
      assert.strictEqual(output, 'Last key pressed: Enter', 'Enter key event was triggered');
    });
  
    it('should update value in a dynamically created input', async function({element, assert}) {
      const showButton = element('#show-delayed-input');
      await showButton.click();
      
      await browser.waitForElementVisible('#delayed-input', 5000);
      
      const delayedInput = element('#delayed-input');
      await delayedInput.update('Delayed input text');
      const value = await delayedInput.getValue();
      assert.strictEqual(value, 'Delayed input text', 'Value was updated in dynamically created input');
    });
  
    it('should handle updating with an empty value', async function({element, assert}) {
      const input = element('#text-input');
      await input.update('');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Empty value was updated correctly');
    });
  
    it('should update with multiple key presses', async function({element, assert}) {
      const input = element('#key-events-input');
      await input.update('abc', browser.Keys.BACK_SPACE, 'd', browser.Keys.ENTER);
      
      const value = await input.getValue();
      assert.strictEqual(value, 'abd', 'Value was updated correctly with multiple key presses');
  
      const output = await element('#key-events-output').getText();
      assert.strictEqual(output, 'Last key pressed: Enter', 'Last key event was triggered');
    });
  
    after(browser => browser.end());
  });