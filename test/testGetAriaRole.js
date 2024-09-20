import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getAriaRole() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getAriaRole.html`));

  it('should get aria role of a search input', async function({ element }) {
    const searchInput = element('input[name="search"]');
    await searchInput.getAriaRole().assert.equals('combobox');
  });

  it('should get aria role of a button', async function({ element }) {
    const submitButton = element('#submit-button');
    await submitButton.getAriaRole().assert.equals('button');
  });

  it('should get aria role of a menu', async function({ element }) {
    const menu = element('#menu');
    await menu.getAriaRole().assert.equals('menu');
  });

  it('should get aria role of a menu item', async function({ element }) {
    const menuItem = element('#menu div:first-child');
    await menuItem.getAriaRole().assert.equals('menuitem');
  });

  it('should get aria role of an alert', async function({ element }) {
    const alert = element('#alert');
    await alert.getAriaRole().assert.equals('alert');
  });

  it('should get aria role of a navigation link', async function({ element }) {
    const navLink = element('#nav-link');
    await navLink.getAriaRole().assert.equals('navigation');
  });

  // TODO: Possible bug.
//   it('should get aria role of a form', async function({ element }) {
//     const form = element('#login-form');
//     await form.getAriaRole().assert.equals('form');
//   });

  it('should handle element without explicit role', async function({ element }) {
    const noRoleDiv = element('#no-role-div');
    await noRoleDiv.getAriaRole().assert.equals('generic');
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const searchInput = element('input[name="search"]');
    const ariaRole = await searchInput.getAriaRole();
    console.log('getAriaRole result:', ariaRole);
    expect(ariaRole).to.equal('combobox');
  });

  after((browser) => browser.end());
});