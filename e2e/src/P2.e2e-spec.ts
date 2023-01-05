import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Login', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it("Usuario No Logra ingresar a la segunda pestaña", async ()=>{
        await element(by.css("[tab=tab2]")).click();
        browser.driver.sleep(500);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("tab 1");
    })
});