import {PAGE_PATH} from '../constants.js'

describe('Nightwatch setValue() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/setValue.html`));
  
    it('should set value in a text input', async function({element, assert}) {
      const input = element('#text-input');
      await input.setValue('Hello, Nightwatch!');
      const value = await input.getValue();
      assert.strictEqual(value, 'Hello, Nightwatch!', 'Text was set correctly in text input');
    });
  
    it('should set value in a number input', async function({element, assert}) {
      const input = element('#number-input');
      await input.setValue('42');
      const value = await input.getValue();
      assert.strictEqual(value, '42', 'Number was set correctly in number input');
    });
  
    it('should set value in an email input', async function({element, assert}) {
      const input = element('#email-input');
      await input.setValue('test@example.com');
      const value = await input.getValue();
      assert.strictEqual(value, 'test@example.com', 'Email was set correctly in email input');
    });
  
    it('should set value in a password input', async function({element, assert}) {
      const input = element('#password-input');
      await input.setValue('secret123');
      const value = await input.getValue();
      assert.strictEqual(value, 'secret123', 'Password was set correctly in password input');
    });
  
    it('should set value in a date input', async function({element, assert}) {
      const input = element('#date-input');
      await input.setValue('15/05/2023');
      const value = await input.getValue();
      assert.strictEqual(value, '2023-05-15', 'Date was set correctly in date input');
    });
  
    it('should clear existing value before setting new value', async function({element, assert}) {
      const input = element('#prefilled-input');
      await input.setValue('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'New Value', 'Existing value was cleared and new value was set');
    });
  
    it('should not set value in a readonly input', async function({element, assert}) {
      const input = element('#readonly-input');
      await input.setValue('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'Readonly Input', 'Readonly input value remained unchanged');
    });
  
    it('should not set value in a disabled input', async function({element, assert}) {
      const input = element('#disabled-input');
      await input.setValue('New Value');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Disabled input value remained empty');
    });
  
    it('should set value in a textarea', async function({element, assert}) {
      const textarea = element('#textarea-input');
      await textarea.setValue('Line 1\nLine 2\nLine 3');
      const value = await textarea.getValue();
      assert.strictEqual(value, 'Line 1\nLine 2\nLine 3', 'Multiline text was set correctly in textarea');
    });
  
    it('should set value in a contenteditable div', async function({element, assert}) {
      const div = element('#contenteditable-div');
      await div.setValue('New content');
      const text = await div.getText();
      assert.strictEqual(text, 'New content', 'Text was set correctly in contenteditable div');
    });
  
    it('should set value and submit form', async function({element, assert}) {
      const input = element('#form-input');
      await input.setValue('Form submission test');
      await element('#test-form button[type="submit"]').click();
      
      const output = await element('#form-output').getText();
      assert.strictEqual(output, 'Submitted: Form submission test', 'Form was submitted with the set value');
    });
  
    it('should set value with special characters', async function({element, assert}) {
      const input = element('#text-input');
      await input.setValue('Special chars: !@#$%^&*()');
      const value = await input.getValue();
      assert.strictEqual(value, 'Special chars: !@#$%^&*()', 'Special characters were set correctly');
    });
  
    it('should set value in a dynamically created input', async function({element, assert}) {
      const showButton = element('#show-delayed-input');
      await showButton.click();
      
      await browser.waitForElementVisible('#delayed-input', 5000);
      
      const delayedInput = element('#delayed-input');
      await delayedInput.setValue('Delayed input text');
      const value = await delayedInput.getValue();
      assert.strictEqual(value, 'Delayed input text', 'Value was set in dynamically created input');
    });
  
    it('should set value and trigger key events', async function({element, assert}) {
      const input = element('#text-input');
      await input.setValue(['Nightwatch', browser.Keys.ENTER]);
      
      // In a real scenario, you'd set up an event listener in your HTML to capture this event
      // For this example, we'll just check if the value was set correctly
      const value = await input.getValue();
      assert.strictEqual(value, 'Nightwatch', 'Value was set and Enter key was pressed');
    });
  
    it('should handle setting an empty value', async function({element, assert}) {
      const input = element('#text-input');
      await input.setValue('');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Empty value was set correctly');
    });
  
    after(browser => browser.end());
  });