import { JwtPage } from './app.po';

describe('jwt App', () => {
  let page: JwtPage;

  beforeEach(() => {
    page = new JwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
