import { PAGE_PATH } from '../constants.js';

describe('Nightwatch getRect() Command Tests', function() {
  before((browser) => browser.navigateTo(`${PAGE_PATH}/getRect.html`));

  it('should get rectangle properties of an element', async function({ element }) {
    const loginDiv = element('#login');
    const rect = await loginDiv.getRect();
    
    expect(rect.x).to.be.approximately(50, 5);
    expect(rect.y).to.be.approximately(100, 5);
    expect(rect.width).to.be.approximately(222, 5); // 200px width + 20px padding + 2px border
    expect(rect.height).to.be.approximately(172, 5); // 150px height + 20px padding + 2px border
  });

  it('should demonstrate async usage with console log', async function({ element }) {
    const loginDiv = element('#login');
    const rect = await loginDiv.getRect();
    console.log('getRect result:', rect);
    
    expect(rect.x).to.be.approximately(50, 5);
    expect(rect.y).to.be.approximately(100, 5);
    expect(rect.width).to.be.approximately(222, 5);
    expect(rect.height).to.be.approximately(172, 5);
  });

  after((browser) => browser.end());
});