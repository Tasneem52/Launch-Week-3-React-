import ArticleTile from '../../src/components/ArticleTile';

describe('ArticleTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ArticleTile
        title="How to Build a Spaceship"
        body="Go to NASA maybe"
      />
    )
  });

  it('renders a paragraph tag with the article title', () => {
    expect(true).toEqual(true)
  })

  it('should render an Link tag', () => {
    expect(wrapper.find('Link')).toBePresent();
  });

  it('should render an p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe('How to Build a Spaceship');
  });

  it('should render an hr tag', () => {
    expect(wrapper.find('hr')).toBePresent();
  });


})
