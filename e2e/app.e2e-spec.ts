import { AngularReactiveFormsPage } from './app.po';

describe('angular-reactive-forms App', () => {
  let page: AngularReactiveFormsPage;

  beforeEach(() => {
    page = new AngularReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
