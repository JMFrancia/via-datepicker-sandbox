import { SandboxDatepickerPage } from './app.po';

describe('sandbox-datepicker App', function() {
  let page: SandboxDatepickerPage;

  beforeEach(() => {
    page = new SandboxDatepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
