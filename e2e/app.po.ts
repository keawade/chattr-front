export class ChattrPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chattr-app h1')).getText();
  }
}
