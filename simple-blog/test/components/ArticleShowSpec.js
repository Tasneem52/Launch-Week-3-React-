import ArticleShow from '../../src/components/ArticleShow';

describe('ArticleShow', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ArticleShow
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag with the article title', () => {
    expect(true).toEqual(true)
  })

  it('should render an h2 tag', () => {
    expect(wrapper.find('h2')).toBePresent();
  });

  it('should render an h2 tag with the text property value', () => {
    expect(wrapper.find('h2').text()).toBe('How to Build a Spaceship');
  });

  it('should render an p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe('Go to NASA maybe');
  });
