import { assert } from 'nightwatch';
import {PAGE_PATH} from '../constants.js'

describe('Nightwatch findAll command tests', function() {

    before((browser) => browser.url(`${PAGE_PATH}/findAll.html`));
  
    it('should find multiple elements', async function({element}) {
      const paragraphs = element.findAll('#multiple-elements p');
      const paragraphsArray = await paragraphs;

      assert.strictEqual(paragraphsArray.length, 3)

      const texts = await Promise.all(paragraphsArray.map(p => p.getText()));
      assert.deepEqual(texts, ['First paragraph', 'Second paragraph', 'Third paragraph']);
    });
  
    it('should find all nested elements', async function({element}) {
      const containerDiv = element.find('#nested-elements');
      const nestedParagraphs = containerDiv.findAll('p');

      const count = await nestedParagraphs.count();
      const nestedParagraph1 = await nestedParagraphs.nth(0);
      const nestedParagraph2 = await nestedParagraphs.nth(1);

      assert.strictEqual(count, 2)

      const texts = await Promise.all(([nestedParagraph1, nestedParagraph2]).map(p => p.getText()));
      assert.deepEqual(texts, ['Nested paragraph 1', 'Nested paragraph 2']);
    });
  
    it('should return empty array for non-existent elements', async function({element}) {
      const nonExistentElements = element.findAll({
        selector:'#non-existent-element',
        suppressNotFoundErrors: true,
        timeout: 100
      });
      const elementsArray = await nonExistentElements;

      assert.strictEqual(elementsArray.length, 0);
    });
  
    it('should find elements with class', async function({element}) {
      const specialTexts = element.findAll('.special-text');

      assert.strictEqual(await specialTexts.count(), 1)

      const text = await specialTexts.nth(0).getText();
      assert.strictEqual(text, 'This paragraph has a special class.');
    });
  
    it('should use custom locate strategy', async function({element}) {
      const boxes = element.findAll({
        selector: '.box',
        locateStrategy: 'css selector'
      });

      assert.strictEqual(await boxes.count(), 9);
    });
  
    it('should chain findAll calls', async function({element}) {
      const nestedParagraphs = element.findAll('.box').nth(0).findAll('p');
      const paragraphsArray = await nestedParagraphs;

      assert.strictEqual(paragraphsArray.length > 0, true);
    });
  
    after(browser => browser.end());
  });