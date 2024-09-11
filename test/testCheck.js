import {PAGE_PATH} from '../constants.js'

describe('Nightwatch check() Command Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/check.html`));
  
    it('should check an unchecked checkbox', async function({element, assert}) {
      const checkbox = element('#checkbox1');
      await checkbox.check();
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Checkbox is checked after using check() command');
    });
  
    it('should not change state of an already checked checkbox', async function({element, assert}) {
      const checkbox = element('#checkbox2');
      await checkbox.check();
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Already checked checkbox remains checked');
    });
  
    it('should not check a disabled checkbox', async function({element, assert}) {
      const checkbox = element('#checkbox3');
      try {
        await checkbox.check();
      } catch (error) {
        assert.ok(error, 'Error thrown when trying to check disabled checkbox');
      }
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, false, 'Disabled checkbox remains unchecked');
    });
  
    it('should check a hidden checkbox', async function({element, assert}) {
      const checkbox = element('#hidden-checkbox');
      await checkbox.check();
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Hidden checkbox is checked');
    });
  
    it('should check an offscreen checkbox', async function({element, assert}) {
      const checkbox = element('#offscreen-checkbox');
      await checkbox.check();
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Offscreen checkbox is checked');
    });
  
    it('should check an unchecked radio button', async function({element, assert}) {
      const radio = element('#radio1');
      await radio.check();
      const isChecked = await radio.isSelected();
      assert.strictEqual(isChecked, true, 'Radio button is checked after using check() command');
    });
  
    it('should not change state of an already checked radio button', async function({element, assert}) {
      const radio = element('#radio2');
      await radio.check();
      const isChecked = await radio.isSelected();
      assert.strictEqual(isChecked, true, 'Already checked radio button remains checked');
    });
  
    it('should not check a disabled radio button', async function({element, assert}) {
      const radio = element('#radio3');
      try {
        await radio.check();
      } catch (error) {
        assert.ok(error, 'Error thrown when trying to check disabled radio button');
      }
      const isChecked = await radio.isSelected();
      assert.strictEqual(isChecked, false, 'Disabled radio button remains unchecked');
    });
  
    it('should uncheck previously checked radio button when checking another in the same group', async function({element, assert}) {
      const radio1 = element('#radio1');
      const radio2 = element('#radio2');
      await radio1.check();
      let isRadio1Checked = await radio1.isSelected();
      let isRadio2Checked = await radio2.isSelected();
      assert.strictEqual(isRadio1Checked, true, 'First radio button is checked');
      assert.strictEqual(isRadio2Checked, false, 'Second radio button is unchecked');
  
      await radio2.check();
      isRadio1Checked = await radio1.isSelected();
      isRadio2Checked = await radio2.isSelected();
      assert.strictEqual(isRadio1Checked, false, 'First radio button is now unchecked');
      assert.strictEqual(isRadio2Checked, true, 'Second radio button is now checked');
    });
  
    it('should scroll to and check a checkbox not in view', async function({element, assert}) {
      const checkbox = element('#scroll-checkbox');
      await checkbox.check();
      const isChecked = await checkbox.isSelected();
      assert.strictEqual(isChecked, true, 'Checkbox not in view is scrolled to and checked');
    });
  
    it('should check a dynamically added checkbox', async function({element, assert}) {
      const addButton = element('#add-checkbox');
      await addButton.click();
      
      const dynamicCheckbox = element('#dynamic-checkbox');
      await dynamicCheckbox.check();
      const isChecked = await dynamicCheckbox.isSelected();
      assert.strictEqual(isChecked, true, 'Dynamically added checkbox is checked');
    });

    // TODO: Fix this test.
    // it('should handle attempting to check a non-existent element', async function({element, assert}) {
    //   try {
    //     const nonExistentCheckbox = element('#non-existent-checkbox');
    //     await nonExistentCheckbox.check();
    //     assert.fail('Should have thrown an error');
    //   } catch (error) {
    //     console.log({error})
    //     assert.strictEqual(error, 'NoSuchElementError')
    //     assert.ok(error, 'Error thrown when trying to check non-existent element');
    //   }
    // });
  
    after(browser => browser.end());
  });