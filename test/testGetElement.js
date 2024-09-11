import {PAGE_PATH} from '../constants.js'

describe('Nightwatch Element Commands Tests', function() {

    before((browser) => browser.url(`${PAGE_PATH}/getElement.html`));

    it('getFirstElementChild should return the first child of a parent element', async function({element, assert}) {
      const firstChild = await element('#parent-list').getFirstElementChild();
      assert.ok(firstChild, 'First child element found');
      const text = await firstChild.getText();
      assert.strictEqual(text, 'First Child', 'First child has correct text');
    });

    it('getFirstElementChild should return null for an empty element', async function({element, assert}) {
      const emptyFirstChild = await element('#empty-container').getFirstElementChild();
      assert.strictEqual(emptyFirstChild, null, 'Empty container has no first child');
    });

    it('getFirstElementChild should work with nested elements', async function({element, assert}) {
      const nestedFirstChild = await element('.container').getFirstElementChild();
      assert.ok(nestedFirstChild, 'Nested first child element found');
      const tagName = await nestedFirstChild.getTagName();
      assert.strictEqual(tagName.toLowerCase(), 'ul', 'Nested first child is a ul element');
    });

    it('getLastElementChild should return the last child of a parent element', async function({element, assert}) {
      const lastChild = await element('#parent-list').getLastElementChild();
      assert.ok(lastChild, 'Last child element found');
      const text = await lastChild.getText();
      assert.strictEqual(text, 'Last Child', 'Last child has correct text');
    });

    it('getLastElementChild should return null for an empty element', async function({element, assert}) {
      const emptyLastChild = await element('#empty-container').getLastElementChild();
      assert.strictEqual(emptyLastChild, null, 'Empty container has no last child');
    });

    it('getLastElementChild should work with nested elements', async function({element, assert}) {
      const nestedLastChild = await element('.container').getLastElementChild();
      assert.ok(nestedLastChild, 'Nested last child element found');
      const tagName = await nestedLastChild.getTagName();
      assert.strictEqual(tagName.toLowerCase(), 'template', 'Nested last child is a template element');
    });

    it('getNextElementSibling should return the next sibling element', async function({element, assert}) {
      const nextSibling = await element('#sibling-container p:first-child').getNextElementSibling();
      assert.ok(nextSibling, 'Next sibling element found');
      const text = await nextSibling.getText();
      assert.strictEqual(text, 'Second Paragraph', 'Next sibling has correct text');
    });

    it('getNextElementSibling should return null for the last sibling', async function({element, assert}) {
      const lastNextSibling = await element('#sibling-container p:last-child').getNextElementSibling();
      assert.strictEqual(lastNextSibling, null, 'Last sibling has no next sibling');
    });

    it('getNextElementSibling should work across different element types', async function({element, assert}) {
      const differentTypeSibling = await element('#parent-list').getNextElementSibling();
      assert.ok(differentTypeSibling, 'Different type sibling found');
      const tagName = await differentTypeSibling.getTagName();
      assert.strictEqual(tagName.toLowerCase(), 'div', 'Different type sibling is a div element');
    });

    it('getPreviousElementSibling should return the previous sibling element', async function({element, assert}) {
      const prevSibling = await element('#sibling-container p:last-child').getPreviousElementSibling();
      assert.ok(prevSibling, 'Previous sibling element found');
      const text = await prevSibling.getText();
      assert.strictEqual(text, 'Second Paragraph', 'Previous sibling has correct text');
    });

    it('getPreviousElementSibling should return null for the first sibling', async function({element, assert}) {
      const firstPrevSibling = await element('#sibling-container p:first-child').getPreviousElementSibling();
      assert.strictEqual(firstPrevSibling, null, 'First sibling has no previous sibling');
    });

    it('getPreviousElementSibling should work across different element types', async function({element, assert}) {
      const differentTypeSibling = await element('#sibling-container').getPreviousElementSibling();
      assert.ok(differentTypeSibling, 'Different type previous sibling found');
      const tagName = await differentTypeSibling.getTagName();
      assert.strictEqual(tagName.toLowerCase(), 'ul', 'Different type previous sibling is a ul element');
    });

    // TODO: Fix tests for shadow root

    // it('getShadowRoot should return the shadow root of an element', async function({element, assert}) {
    //   const shadowRoot = await element('#shadow-host').getShadowRoot();
    //   assert.ok(shadowRoot, 'Shadow root found');
    // });

    // it('getShadowRoot should allow accessing elements within the shadow DOM', async function({element, assert}) {
    //   const shadowRoot = await element('#shadow-host').getShadowRoot();
    //   const shadowParagraph = await shadowRoot.find('p');
    //   assert.ok(shadowParagraph, 'Paragraph within shadow DOM found');
    //   const text = await shadowParagraph.getText();
    //   assert.strictEqual(text, 'Shadow DOM paragraph', 'Shadow DOM paragraph has correct text');
    // });

    // it('getShadowRoot should return null for elements without a shadow root', async function({element, assert}) {
    //   const nonShadowRoot = await element('#parent-list').getShadowRoot();
    //   assert.strictEqual(nonShadowRoot, null, 'Element without shadow DOM returns null');
    // });

    after(browser => browser.end());
  });