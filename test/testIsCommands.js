import { PAGE_PATH } from '../constants.js';

describe('Nightwatch Element State Commands Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/isCommands.html`));

  // isEnabled() tests
  it('should return true for enabled input', async function({ element }) {
    const enabledInput = element('#enabled-input');
    await enabledInput.isEnabled().assert.equals(true);
  });

  it('should return false for disabled input', async function({ element }) {
    const disabledInput = element('#disabled-input');
    await disabledInput.isEnabled().assert.equals(false);
  });

  it('should return true for enabled button', async function({ element }) {
    const enabledButton = element('#enabled-button');
    await enabledButton.isEnabled().assert.equals(true);
  });

  it('should return false for disabled button', async function({ element }) {
    const disabledButton = element('#disabled-button');
    await disabledButton.isEnabled().assert.equals(false);
  });

  // isSelected() tests
  it('should return false for unchecked checkbox', async function({ element }) {
    const uncheckedBox = element('#unchecked-box');
    await uncheckedBox.isSelected().assert.equals(false);
  });

  it('should return true for checked checkbox', async function({ element }) {
    const checkedBox = element('#checked-box');
    await checkedBox.isSelected().assert.equals(true);
  });

  it('should return true for selected option in select element', async function({ element }) {
    const selectedOption = element('#select-element option[value="2"]');
    await selectedOption.isSelected().assert.equals(true);
  });

  it('should return false for unselected option in select element', async function({ element }) {
    const unselectedOption = element('#select-element option[value="1"]');
    await unselectedOption.isSelected().assert.equals(false);
  });

  it('should return false for unselected radio button', async function({ element }) {
    const unselectedRadio = element('#unselected-radio');
    await unselectedRadio.isSelected().assert.equals(false);
  });

  it('should return true for selected radio button', async function({ element }) {
    const selectedRadio = element('#selected-radio');
    await selectedRadio.isSelected().assert.equals(true);
  });

  // isVisible() tests
  it('should return true for visible paragraph', async function({ element }) {
    const visibleParagraph = element('#visible-paragraph');
    await visibleParagraph.isVisible().assert.equals(true);
  });

  it('should return false for hidden paragraph (display: none)', async function({ element }) {
    const hiddenParagraph = element('#hidden-paragraph');
    await hiddenParagraph.isVisible().assert.equals(false);
  });

  it('should return false for invisible paragraph (visibility: hidden)', async function({ element }) {
    const invisibleParagraph = element('#invisible-paragraph');
    await invisibleParagraph.isVisible().assert.equals(false);
  });

  it('should return true for visible div', async function({ element }) {
    const visibleDiv = element('#visible-div');
    await visibleDiv.isVisible().assert.equals(true);
  });

  it('should return false for div with zero opacity', async function({ element }) {
    const zeroOpacityDiv = element('#zero-opacity-div');
    await zeroOpacityDiv.isVisible().assert.equals(false);
  });

  // Async usage demonstrations
  it('should demonstrate async usage of isEnabled', async function({ element }) {
    const enabledInput = element('#enabled-input');
    const result = await enabledInput.isEnabled();
    console.log('isEnabled result:', result);
    expect(result).to.equal(true);
  });

  it('should demonstrate async usage of isSelected', async function({ element }) {
    const checkedBox = element('#checked-box');
    const result = await checkedBox.isSelected();
    console.log('isSelected result:', result);
    expect(result).to.equal(true);
  });

  it('should demonstrate async usage of isVisible', async function({ element }) {
    const visibleParagraph = element('#visible-paragraph');
    const result = await visibleParagraph.isVisible();
    console.log('isVisible result:', result);
    expect(result).to.equal(true);
  });

  after((browser) => browser.end());
});