import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('TS5', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it("El usuario puede navegar a la pestaña", async () => {await element(by.css("[tab=tab2]")).click();
    browser.driver.sleep(500);expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");});
});
