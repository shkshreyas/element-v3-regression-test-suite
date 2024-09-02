import {PAGE_PATH} from '../constants.js'

describe('Nightwatch find command tests', function () {
  before((browser) => browser.url(`${PAGE_PATH}/find.html`));

  it('should find a single element', async function ({ element }) {
    const singleElement = element.find('#single-element p');
    await singleElement
      .getText()
      .assert.equals('This is a single paragraph element.');
  });

  it('should find first of multiple elements', async function ({ element }) {
    const firstParagraph = element.find('#multiple-elements p');
    await firstParagraph.getText().assert.equals('First paragraph');
  });

  it('should find nested elements', async function ({ element }) {
    const containerDiv = element.find('#nested-elements');
    const nestedParagraph = containerDiv.find('p');
    await nestedParagraph.getText().assert.equals('Nested paragraph 1');
  });

  it('should find element with class', async function ({ element }) {
    const specialText = element.find('.special-text');
    await specialText
      .getText()
      .assert.equals('This paragraph has a special class.');
  });

  // it('should handle non-existent element', async function ({
  //   element,
  //   assert,
  // }) {
  //   const nonExistentElement = await element.find('#non-existent-element');
  // });

  it('should use custom locate strategy', async function ({ element, assert }) {
    const container = element.find({
      selector: '.container',
      locateStrategy: 'css selector',
    });
    await assert.elementPresent(container);
  });

  after((browser) => browser.end());
});
