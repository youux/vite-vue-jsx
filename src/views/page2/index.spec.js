import { mount } from '@vue/test-utils'
import Index from './index.vue'

test('验证文字', () => {
  const wrapper = mount(Index)

  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('this is demo')
})
