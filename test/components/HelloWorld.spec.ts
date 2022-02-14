import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'

describe('HelloWorld', () => {
  it('render props value correctly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hi' } })

    expect(wrapper.text()).toContain('Hi')
  })

  it('increase count by click button', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hi' } })
    const button = wrapper.find('button')

    expect(button.text()).toEqual('count is: 0')
    await button.trigger('click')
    expect(button.text()).toEqual('count is: 1')
  })
})
