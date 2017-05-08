import { AngularFormsAndAuthPage } from './app.po';

describe('angular-forms-and-auth App', () => {
  let page: AngularFormsAndAuthPage;

  beforeEach(() => {
    page = new AngularFormsAndAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
