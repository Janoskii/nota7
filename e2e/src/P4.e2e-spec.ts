import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('QR E2E', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('E2E Testing camara al intentar escanear QR', async () => {
    await browser.get('/');
        await element(by.id('inputUsuario')).sendKeys('test');
        await element(by.id('inputPassword')).sendKeys('test');
        await element(by.id('botonIngreso')).click();
        await browser.driver.sleep(500);
        await element(by.id('startScan')).click();
        const x = element(by.id('videoscan'));

        expect(await x.isDisplayed());
    });
});
