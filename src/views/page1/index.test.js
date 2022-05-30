import { mount } from '@vue/test-utils'
import Page1 from './index.jsx'

test('测试1', () => {
  const wrapper = mount(Page1)
  expect(wrapper.html()).toContain('这里是Pinia返回的数据：')
})
