import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Login E2E', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('E2E Login vacio no permite ingresar', async () => {
    await browser.get('/');
    await browser.driver.sleep(500);
    await element(by.id('botonIngreso')).click();
    const error = element(by.id('titlelogin'));
    expect(await error.getText()).toEqual('Ingreso de Usuario');
  });
});
