import {PAGE_PATH} from '../constants.js'

describe('Nightwatch setProperty() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/setProperty.html`));
  
    it('should set the value property of a text input', async function({element, assert}) {
      const input = element('#text-input');
      await input.setProperty('value', 'New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'New Value', 'Text input value property was set correctly');
    });
  
    it('should set the checked property of a checkbox', async function({element, assert}) {
      const checkbox = element('#checkbox-input');
      await checkbox.setProperty('checked', true);
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Checkbox checked property was set correctly');
    });
  
    it('should set the value property of a number input', async function({element, assert}) {
      const input = element('#number-input');
      await input.setProperty('value', 100);
      const value = await input.getValue();
      assert.strictEqual(value, '100', 'Number input value property was set correctly');
    });
  
    it('should set the selectedIndex property of a select element', async function({element, assert}) {
      const select = element('#select-element');
      await select.setProperty('selectedIndex', 2);
      const value = await select.getValue();
      assert.strictEqual(value, '3', 'Select element selectedIndex property was set correctly');
    });
  
    it('should set the value property of a textarea', async function({element, assert}) {
      const textarea = element('#textarea-element');
      await textarea.setProperty('value', 'New textarea content');
      const value = await textarea.getValue();
      assert.strictEqual(value, 'New textarea content', 'Textarea value property was set correctly');
    });
  
    it('should set a custom property on a div element', async function({element, assert}) {
      const div = element('#custom-element');
      await div.setProperty('customProp', 'test value');
      const customProp = await browser.execute(function(el) {
        return el.customProp;
      }, [div]);
      assert.strictEqual(customProp, 'test value', 'Custom property was set correctly on div element');
    });
  
    it('should set the disabled property on an input', async function({element, assert}) {
      const input = element('#text-input');
      await input.setProperty('disabled', true);
      const isEnabled = await input.isEnabled();
      assert.strictEqual(isEnabled, false, 'Input disabled property was set correctly');
    });
  
    it('should set the title property on an element', async function({element, assert}) {
      const div = element('#custom-element');
      await div.setProperty('title', 'Custom Title');
      const title = await div.getAttribute('title');
      assert.strictEqual(title, 'Custom Title', 'Title property was set correctly');
    });
  
    it('should trigger property change event', async function({element, assert}) {
      const button = element('#reactive-button');
      await button.setProperty('customProperty', 'test-value');
      await browser.pause(500); // Give time for the property change to be processed
      const output = await element('#reaction-output').getText();
      assert.strictEqual(output, 'Custom property set: test-value', 'Property change was detected');
    });
  
    it('should handle setting numeric properties', async function({element, assert}) {
      const input = element('#number-input');
      await input.setProperty('max', 200);
      const max = await input.getAttribute('max');
      assert.strictEqual(max, '200', 'Numeric property was set correctly');
    });
  
    it('should handle setting boolean properties', async function({element, assert}) {
      const input = element('#text-input');
      await input.setProperty('readOnly', true);
      const isReadOnly = await browser.execute(function(el) {
        return el.readOnly;
      }, [input]);
      assert.strictEqual(isReadOnly, true, 'Boolean property was set correctly');
    });
    
    // Possible bug
    // it('should handle setting properties with special characters', async function({element, assert}) {
    //   const div = element('#custom-element');
    //   await div.setProperty('data-special', 'test&<>"');
    //   const specialProp = await browser.execute(function(el) {
    //     return el.getAttribute('data-special');
    //   }, [div]);
    //   assert.strictEqual(specialProp, 'test&<>"\'', 'Property with special characters was set correctly');
    // });
  
    it('should handle setting an object as a property value', async function({element, assert}) {
      const div = element('#custom-element');
      await div.setProperty('customObject', {key: 'value'});
      const customObject = await browser.execute(function(el) {
        return JSON.stringify(el.customObject);
      }, [div]);
      assert.strictEqual(customObject, '{"key":"value"}', 'Object property was set correctly');
    });
  
    after(browser => browser.end());
  });