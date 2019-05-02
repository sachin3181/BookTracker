import { browser, by, element } from 'protractor';
var BooktrackerPage = /** @class */ (function () {
    function BooktrackerPage() {
    }
    BooktrackerPage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    BooktrackerPage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return BooktrackerPage;
}());
export { BooktrackerPage };
//# sourceMappingURL=app.po.js.map