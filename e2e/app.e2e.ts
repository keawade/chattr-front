import { ChattrPage } from './app.po';

describe('chattr App', function() {
  let page: ChattrPage;

  beforeEach(() => {
    page = new ChattrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chattr works!');
  });
});
