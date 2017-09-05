import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../';

describe('#Button', () => {
  // mock style postcss
  const theme = {button: 'button'};

  it('Deve renderizar Button', () => {
    const el = shallow(<Button theme={theme} />);
    expect(el.contains('Button')).toEqual(true);
    expect(el.find('button')).toHaveLength(1);
  });

  it('Deve escrever source do Button', () => {
    const tree = renderer.create(<Button theme={theme} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
