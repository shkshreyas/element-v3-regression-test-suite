import {PAGE_PATH} from '../constants.js'

describe('Nightwatch sendKeys() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/sendKeys.html`));
  
    it('should send keys to a simple text input', async function({element, assert}) {
      const input = element('#simple-input');
      await input.sendKeys('Hello, Nightwatch!');
      const value = await input.getValue();
      assert.strictEqual(value, 'Hello, Nightwatch!', 'Text input received the correct keys');
    });
  
    it('should send keys to a password input', async function({element, assert}) {
      const input = element('#password-input');
      await input.sendKeys('secretpassword');
      const value = await input.getValue();
      assert.strictEqual(value, 'secretpassword', 'Password input received the correct keys');
    });
  
    it('should send keys to a number input', async function({element, assert}) {
      const input = element('#number-input');
      await input.sendKeys('12345');
      const value = await input.getValue();
      assert.strictEqual(value, '12345', 'Number input received the correct keys');
    });
  
    it('should send keys to an email input', async function({element, assert}) {
      const input = element('#email-input');
      await input.sendKeys('test@example.com');
      const value = await input.getValue();
      assert.strictEqual(value, 'test@example.com', 'Email input received the correct keys');
    });
  
    it('should not send keys to a readonly input', async function({element, assert}) {
      const input = element('#readonly-input');
      const originalValue = await input.getValue();
      await input.sendKeys('New text');
      const newValue = await input.getValue();
      assert.strictEqual(newValue, originalValue, 'Readonly input value remained unchanged');
    });
  
    it('should not send keys to a disabled input', async function({element, assert}) {
      const input = element('#disabled-input');
      await input.sendKeys('New text');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Disabled input value remained empty');
    });
  
    it('should send keys to a textarea', async function({element, assert}) {
      const textarea = element('#textarea-input');
      await textarea.sendKeys('Line 1\nLine 2\nLine 3');
      const value = await textarea.getValue();
      assert.strictEqual(value, 'Line 1\nLine 2\nLine 3', 'Textarea received multiline input correctly');
    });
  
    it('should send keys to a contenteditable div', async function({element, assert}) {
      const div = element('#contenteditable-div');
      await div.clear();
      await div.sendKeys('Edited content');
      const text = await div.getText();
      assert.strictEqual(text, 'Edited content', 'Contenteditable div received the correct keys');
    });
  
    it('should send special keys', async function({element, assert}) {
      const input = element('#special-keys-input');
      await input.sendKeys('Hello', browser.Keys.SPACE, 'World', browser.Keys.ENTER);
      const value = await input.getValue();
      assert.strictEqual(value, 'Hello World', 'Input received special keys correctly');
      
      const output = element('#key-output');
      const lastKeyPressed = await output.getText();
      assert.strictEqual(lastKeyPressed, 'Last key pressed: Enter', 'Special key (Enter) was correctly registered');
    });
  
    it('should send keys to a hidden input', async function({element, assert}) {
      const input = element('#hidden-input');
      await input.sendKeys('Hidden text');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Hidden input received no keys');
    });
  
    it('should send keys to a dynamically created input', async function({element, assert}) {
      const showButton = element('#show-delayed-input');
      await showButton.click();
      
      await browser.waitForElementVisible('#delayed-input', 5000);
      
      const delayedInput = element('#delayed-input');
      await delayedInput.sendKeys('Delayed input text');
      const value = await delayedInput.getValue();
      assert.strictEqual(value, 'Delayed input text', 'Dynamically created input received the correct keys');
    });
  
    it('should handle sending an empty string', async function({element, assert}) {
      const input = element('#simple-input');
      await input.clear();
      await input.sendKeys('');
      const value = await input.getValue();
      assert.strictEqual(value, '', 'Input is empty after sending an empty string');
    });
  
    it('should append text to existing content', async function({element, assert}) {
      const input = element('#simple-input');
      await input.sendKeys('Initial ');
      await input.sendKeys('Appended');
      const value = await input.getValue();
      assert.strictEqual(value, 'Initial Appended', 'Text was correctly appended to existing content');
    });
  
    it('should handle sending non-string values', async function({element, assert}) {
      const input = element('#simple-input');
      await input.clear();
      await input.sendKeys(42);
      const value = await input.getValue();
      assert.strictEqual(value, '42', 'Non-string value was correctly sent as keys');
    });
  
    after(browser => browser.end());
  });