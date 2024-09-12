import { PAGE_PATH } from '../constants.js';

describe('Nightwatch uncheck() Command Tests', function() {
  
  before((browser) => browser.url(`${PAGE_PATH}/uncheck.html`));

  it('should uncheck a checked checkbox', async function({element, assert}) {
    const checkbox = element('#checked-checkbox');
    await checkbox.uncheck();
    const isChecked = await checkbox.isSelected();
    assert.strictEqual(isChecked, false, 'Checkbox was unchecked successfully');
  });

  it('should not change state of an already unchecked checkbox', async function({element, assert}) {
    const checkbox = element('#unchecked-checkbox');
    await checkbox.uncheck();
    const isChecked = await checkbox.isSelected();
    assert.strictEqual(isChecked, false, 'Unchecked checkbox remained unchecked');
  });

  it('should not uncheck a disabled checkbox', async function({element, assert}) {
    const checkbox = element('#disabled-checkbox');
    try {
      await checkbox.uncheck();
    } catch (error) {
      assert.ok(error, 'Error thrown when trying to uncheck disabled checkbox');
    }
    const isChecked = await checkbox.isSelected();
    assert.strictEqual(isChecked, true, 'Disabled checkbox remained checked');
  });

  // could be corner case.
//   it('should uncheck a hidden checkbox', async function({element, assert}) {
//     const checkbox = element('#hidden-checkbox');
//     await checkbox.uncheck();
//     const isChecked = await checkbox.isSelected();
//     assert.strictEqual(isChecked, false, 'Hidden checkbox was unchecked');
//   });

  // Could be corner case.
//   it('should uncheck an offscreen checkbox', async function({element, assert}) {
//     const checkbox = element('#offscreen-checkbox');
//     await checkbox.uncheck();
//     const isChecked = await checkbox.isSelected();
//     assert.strictEqual(isChecked, false, 'Offscreen checkbox was unchecked');
//   });

  // Corner case.
//   it('should uncheck a radio button', async function({element, assert}) {
//     const radio = element('#radio1');
//     await radio.uncheck();
//     const isChecked = await radio.isSelected();
//     assert.strictEqual(isChecked, false, 'Radio button was unchecked');
//   });

  it('should not change state of an already unchecked radio button', async function({element, assert}) {
    const radio = element('#radio2');
    await radio.uncheck();
    const isChecked = await radio.isSelected();
    assert.strictEqual(isChecked, false, 'Unchecked radio button remained unchecked');
  });

  it('should not uncheck a disabled radio button', async function({element, assert}) {
    const radio = element('#radio3');
    try {
      await radio.uncheck();
    } catch (error) {
      assert.ok(error, 'Error thrown when trying to uncheck disabled radio button');
    }
    const isChecked = await radio.isSelected();
    assert.strictEqual(isChecked, false, 'Disabled radio button remained unchecked');
  });

  it('should scroll to and uncheck a checkbox not in view', async function({element, assert}) {
    const checkbox = element('#scroll-checkbox');
    await checkbox.uncheck();
    const isChecked = await checkbox.isSelected();
    assert.strictEqual(isChecked, false, 'Checkbox not in view was scrolled to and unchecked');
  });

  it('should uncheck a checkbox in a form and submit', async function({element, assert}) {
    const checkbox = element('#form-checkbox');
    await checkbox.uncheck();
    await element('#checkbox-form button[type="submit"]').click();
    
    const output = await element('#form-output').getText();
    assert.strictEqual(output, 'Form submitted. Checkbox is unchecked', 'Form was submitted with the unchecked checkbox');
  });

  after(browser => browser.end());
});