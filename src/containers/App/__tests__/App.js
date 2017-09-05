import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './..';

describe('#App', () => {
  // to remove warnings
  console.error = () => null;

  // mock style postcss
  const theme = {app: 'app'};

  it('should render App component', () => {
    const el = shallow(<App theme={theme} />);
    expect(el.find('div')).toHaveLength(1);
  });

  it('Generate source of App without properties', () => {
    const tree = renderer.create(<App theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
