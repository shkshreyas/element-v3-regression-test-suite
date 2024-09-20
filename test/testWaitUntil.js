import { PAGE_PATH } from '../constants.js';

describe('Nightwatch waitUntil() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/waitUntil.html`));

  it('should wait until element is visible', async function({ element }) {
    const visibilityTest = element('#visibility-test');
    await element('#toggle-visibility').click();
    await visibilityTest.waitUntil('visible');
    await visibilityTest.assert.visible();
  });

  it('should wait until element is not visible', async function({ element }) {
    const visibilityTest = element('#visibility-test');
    await element('#toggle-visibility').click();
    await visibilityTest.waitUntil('not.visible');
    await visibilityTest.assert.not.visible();
  });

  it('should wait until element is present', async function({ element }) {
    const presenceTest = element('#presence-test');
    await element('#toggle-presence').click();
    await element('#toggle-presence').click();
    await presenceTest.waitUntil('present');
    await presenceTest.assert.present();
  });

  // Possible bug.
//   it('should wait until element is not present', async function({ element }) {
//     const presenceTest = element('#presence-test');
//     await element('#toggle-presence').click();
//     await presenceTest.waitUntil('not.present');
//     await presenceTest.assert.to.be.not.present();
//   });

  it('should wait until element is enabled', async function({ element }) {
    const enabledTest = element('#enabled-test');
    await element('#toggle-enabled').click();
    await enabledTest.waitUntil('enabled');
    await enabledTest.assert.enabled();
  });

  it('should wait until element is disabled', async function({ element }) {
    const enabledTest = element('#enabled-test');
    await element('#toggle-enabled').click();
    await enabledTest.waitUntil('disabled');
    await enabledTest.getAttribute('disabled').assert.equals('true');
  });

  it('should wait until element is selected', async function({ element }) {
    const selectedTest = element('#selected-test');
    await element('#toggle-selected').click();
    await selectedTest.waitUntil('selected');
    await selectedTest.assert.selected();
  });

  it('should wait until element is not selected', async function({ element }) {
    const selectedTest = element('#selected-test');
    await element('#toggle-selected').click();
    await selectedTest.waitUntil('not.selected');
    await selectedTest.assert.not.selected();
  });

  it('should wait until delayed element appears', async function({ element }) {
    const delayedElement = element('#delayed-element');
    await delayedElement.waitUntil('visible', { timeout: 1000 });
    await delayedElement.assert.visible();
  });

  it('should use custom timeout', async function({ element }) {
    const visibilityTest = element('#visibility-always');
    await visibilityTest.waitUntil('visible', { timeout: 1000, abortOnFailure: false });
  });

  it('should use custom retry interval', async function({ element }) {
    const visibilityTest = element('#visibility-always');
    await element('#toggle-visibility').click();
    await visibilityTest.waitUntil('visible', { timeout: 1000, retryInterval: 100 });
    await visibilityTest.assert.visible();
  });

  it('should use custom message', async function({ element }) {
    const visibilityTest = element('#visibility-always');
    await element('#toggle-visibility').click();
    await visibilityTest.waitUntil('visible', { message: 'Custom wait message for %s' });
    await visibilityTest.assert.visible();
  });

  // Possible bug
//   it('should continue if failed when abortOnFailure is false', async function({ element }) {
//     const nonExistentElement = element('#non-existent');
//     await nonExistentElement.waitUntil('visible', { timeout: 1000, abortOnFailure: false });
//     console.log('This line should be reached even if the wait fails');
//   });

  it('should wait with xpath locator', async function({ element }) {
    const xpathElement = element('xpath', '//div[@id="visibility-test"]');
    await element('#toggle-visibility').click();
    await xpathElement.waitUntil('visible');
    await xpathElement.assert.visible();
  });

  after((browser) => browser.end());
});