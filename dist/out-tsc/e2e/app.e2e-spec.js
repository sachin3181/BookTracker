import { BooktrackerPage } from './app.po';
describe('booktracker App', function () {
    var page;
    beforeEach(function () {
        page = new BooktrackerPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map