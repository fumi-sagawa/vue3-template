// src/components/HelloWorld.spec.ts
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button Test', () => {
  it('should display props text', () => {
    const text = 'buttonName';
    const click = () => {
      return;
    };
    const wrapper = mount(Button, { props: { text, click } });

    expect(wrapper.find('button').text()).toEqual(text);
  });
});
