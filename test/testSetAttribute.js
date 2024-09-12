import {PAGE_PATH} from '../constants.js'

describe('Nightwatch setAttribute() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/setAttribute.html`));
  
    it('should set the value attribute of a text input', async function({element, assert}) {
      const input = element('#text-input');
      await input.setAttribute('value', 'New Value');
      const value = await input.getValue();
      assert.strictEqual(value, 'New Value', 'Text input value attribute was set correctly');
    });
  
    it('should set the checked attribute of a checkbox', async function({element, assert}) {
      const checkbox = element('#checkbox-input');
      await checkbox.setAttribute('checked', true);
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Checkbox checked attribute was set correctly');
    });
  
    it('should set the disabled attribute of a radio button', async function({element, assert}) {
      const radio = element('#radio-input');
      await radio.setAttribute('disabled', true);
      const isEnabled = await radio.isEnabled();
      assert.strictEqual(isEnabled, false, 'Radio button disabled attribute was set correctly');
    });
  
    it('should set the min and max attributes of a number input', async function({element, assert}) {
      const input = element('#number-input');
      await input.setAttribute('min', '10');
      await input.setAttribute('max', '50');
      const min = await input.getAttribute('min');
      const max = await input.getAttribute('max');
      assert.strictEqual(min, '10', 'Number input min attribute was set correctly');
      assert.strictEqual(max, '50', 'Number input max attribute was set correctly');
    });
  
    it('should set the href attribute of an anchor element', async function({element, assert}) {
      const link = element('#link-element');
      await link.setAttribute('href', 'https://nightwatchjs.org/');
      const href = await link.getAttribute('href');
      assert.strictEqual(href, 'https://nightwatchjs.org/', 'Anchor href attribute was set correctly');
    });
  
    it('should set the src and alt attributes of an image element', async function({element, assert}) {
      const img = element('#image-element');
      await img.setAttribute('src', 'new-image.jpg');
      await img.setAttribute('alt', 'New image description');
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');
      assert.strictEqual(src, `${PAGE_PATH}/new-image.jpg`, 'Image src attribute was set correctly');
      assert.strictEqual(alt, 'New image description', 'Image alt attribute was set correctly');
    });
  
    it('should set a custom data attribute', async function({element, assert}) {
      const div = element('#custom-element');
      await div.setAttribute('data-custom', 'test-value');
      const customAttr = await div.getAttribute('data-custom');
      assert.strictEqual(customAttr, 'test-value', 'Custom data attribute was set correctly');
    });
  
    it('should trigger attribute change event', async function({element, assert}) {
      const button = element('#reactive-button');
      await button.setAttribute('data-test', 'test-value');
      await browser.pause(500); // Give time for the MutationObserver to react
      const output = await element('#reaction-output').getText();
      assert.strictEqual(output, 'Attribute changed: data-test', 'Attribute change was detected');
    });
  
    it('should set attributes on SVG elements', async function({element, assert}) {
      const circle = element('#svg-element circle');
      await circle.setAttribute('fill', 'blue');
      const fill = await circle.getAttribute('fill');
      assert.strictEqual(fill, 'blue', 'SVG circle fill attribute was set correctly');
    });
  
    it('should handle setting boolean attributes', async function({element, assert}) {
      const input = element('#text-input');
      await input.setAttribute('readonly', true);
      const isReadOnly = await input.getAttribute('readonly');
      assert.strictEqual(isReadOnly, 'true', 'Boolean attribute was set correctly');
    });
  
    it('should handle setting numeric attributes', async function({element, assert}) {
      const input = element('#number-input');
      await input.setAttribute('step', 5);
      const step = await input.getAttribute('step');
      assert.strictEqual(step, '5', 'Numeric attribute was set correctly');
    });
  
    it('should handle setting attributes with special characters', async function({element, assert}) {
      const div = element('#custom-element');
      await div.setAttribute('data-special', 'test&<>"\'');
      const specialAttr = await div.getAttribute('data-special');
      assert.strictEqual(specialAttr, 'test&<>"\'', 'Attribute with special characters was set correctly');
    });
  
    it('should handle setting empty attribute value', async function({element, assert}) {
      const input = element('#text-input');
      await input.setAttribute('title', '');
      const title = await input.getAttribute('title');
      assert.strictEqual(title, '', 'Empty attribute value was set correctly');
    });
  
    after(browser => browser.end());
  });