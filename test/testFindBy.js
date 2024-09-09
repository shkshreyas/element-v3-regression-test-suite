import {PAGE_PATH} from '../constants.js'

describe('Nightwatch Commands Comprehensive Tests', function() {
  
    before((browser) => browser.url(`${PAGE_PATH}/findBy.html`));


    it('findByAltText should find element by partial alt text', async function({element, assert}) {
      const img = await element.findByAltText('foo', { exact: false });
      assert.ok(img, 'Found image by partial alt text');
    });

    it('findByAltText should find element by exact alt text', async function({element, assert}) {
      const img = await element.findByAltText('A group of people sitting in front of a computer', { exact: true });
      assert.ok(img, 'Found image by exact alt text');
    });

    it('findByAltText should handle empty alt text', async function({element, assert}) {
      const img = await element.findByAltText('', { exact: true });
      assert.ok(img, 'Found image with empty alt text');
    });

    it('findAllByAltText should find all elements by alt text', async function({element, assert}) {
      const imgs = await element.findAllByAltText('Group photo');
      assert.strictEqual(imgs.length, 2, 'Found all images containing "group" in alt text');
    });
  
    it('findByAltText should handle nested elements', async function({element, assert}) {
      const img = await element.findByAltText('Nested image');
      assert.ok(img, 'Found nested image by alt text');
    });

    it('findByPlaceholderText should find input by partial placeholder text', async function({element, assert}) {
      const input = await element.findByPlaceholderText('Search', { exact: false });
      assert.ok(input, 'Found input by partial placeholder text');
    });

    it('findByPlaceholderText should find textarea by exact placeholder text', async function({element, assert}) {
      const textarea = await element.findByPlaceholderText('Write your message here', { exact: true });
      assert.ok(textarea, 'Found textarea by exact placeholder text');
    });

    it('findByPlaceholderText should handle empty placeholder text', async function({element, assert}) {
      const input = await element.findByPlaceholderText('', { exact: true });
      assert.ok(input, 'Found input with empty placeholder text');
    });

    it('findAllByPlaceholderText should find all inputs by placeholder text', async function({element, assert}) {
      const inputs = await element.findAllByPlaceholderText('Enter your email');
      assert.strictEqual(inputs.length, 2, 'Found all inputs with "Enter" in placeholder text');
    });
  
    it('findByPlaceholderText should handle nested elements', async function({element, assert}) {
      const input = await element.findByPlaceholderText('Nested input');
      assert.ok(input, 'Found nested input by placeholder text');
    });
  
    it('findByRole should find element by basic role', async function({element, assert}) {
      const combobox = await element.findByRole('combobox');
      assert.ok(combobox, 'Found element by combobox role');
    });

    it('findByRole should find element by role with pressed state', async function({element, assert}) {
      const pressedButton = await element.findByRole('button', { pressed: true });
      assert.ok(pressedButton, 'Found pressed button');
    });

    it('findByRole should find element by role with selected state', async function({element, assert}) {
      const selectedTab = await element.findByRole('tab', { selected: true });
      assert.ok(selectedTab, 'Found selected tab');
    });

    it('findByRole should find heading by role and level', async function({element, assert}) {
      const heading = await element.findByRole('heading', { level: 3 });
      assert.ok(heading, 'Found level 3 heading');
    });

    it('findAllByRole should find all elements by role', async function({element, assert}) {
      const checkboxes = await element.findAllByRole('checkbox');
      assert.strictEqual(checkboxes.length, 14, 'Found all checkbox roles');
    });

    it('findAllByRole should handle nested roles', async function({element, assert}) {
      const treeItems = await element.findAllByRole('treeitem');
      assert.strictEqual(treeItems.length, 2, 'Found nested tree items');
    });

    it('findByLabelText should find input by partial label text', async function({element, assert}) {
      const input = await element.findByLabelText('Enter your', { exact: false });
      assert.ok(input, 'Found input by partial label text');
    });

    it('findByLabelText should find input by exact label text', async function({element, assert}) {
      const input = await element.findByLabelText('Enter your email:', { exact: true });
      assert.ok(input, 'Found input by exact label text');
    });
    
    // NOTE: Posssible bug.
    // it('findByLabelText should find checkbox with wrapping label', async function({element, assert}) {
    //   const checkbox = await element.findByLabelText(' I agree to the terms ');
    //   assert.ok(checkbox, 'Found checkbox with wrapping label');
    // });
  
    it('findByLabelText should handle hidden labels', async function({element, assert}) {
      const input = await element.findByLabelText('Hidden Label');
      assert.ok(input, 'Found input with hidden label');
    });
    
    // NOTE: Posssible bug.
    // it('findByLabelText should find radio button within a fieldset', async function({element, assert}) {
    //   const radioButton = await element.findByLabelText('Red');
    //   assert.ok(radioButton, 'Found radio button within fieldset');
    // });


    it('findByText should find element by partial text content', async function({element, assert}) {
      const para = await element.findByText('paragraph with some', { exact: false });
      assert.ok(para, 'Found paragraph by partial text content');
    });

    it('findByText should find element by exact text content', async function({element, assert}) {
      const span = await element.findByText('This is a span element.', { exact: true });
      assert.ok(span, 'Found span by exact text content');
    });

    // it('findByText should find element with nested text nodes', async function({element, assert}) {
    //   const div = await element.findByText('Text with bold and italic parts');
    //   assert.ok(div, 'Found element with nested text nodes');
    // });

    it('findByText should handle hidden text', async function({element, assert}) {
      const hiddenDiv = await element.findByText('Hidden text');
      assert.ok(hiddenDiv, 'Found element with hidden text');
    });

    it('findAllByText should find all elements by text content', async function({element, assert}) {
      const elements = await element.findAllByText('This div', { exact: false});
      assert.strictEqual(elements.length, 2, 'Found all elements starting with "This div"');
    });

    it('findByText should handle text with unicode characters', async function({element, assert}) {
      const ele = await element.findByText('こんにちは', { exact: false });
      assert.ok(ele, 'Found element with unicode text');
    });

    after(browser => browser.end());
  });