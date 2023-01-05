import { browser, element, by } from "protractor";

describe('Pruebas', ()=>{
    beforeEach(()=>{
        browser.get("/");
    })
    //prueba 1
    it("El login se muestra por defecto",()=>{
        
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("login")
    })
 
    
});