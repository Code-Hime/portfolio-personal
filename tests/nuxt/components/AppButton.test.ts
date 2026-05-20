import { describe, expect, it, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppButton from '~/components/AppButton.vue'

describe('AppButton', () => {
  it('renders slot content inside a button element', async () => {
    const wrapper = await mountSuspended(AppButton, {
      slots: { default: 'Click me' },
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.text()).toBe('Click me')
  })

  it('does not apply accent class by default', async () => {
    const wrapper = await mountSuspended(AppButton, {
      slots: { default: 'Default' },
    })
    expect(wrapper.classes()).not.toContain('accent-btn')
    expect(wrapper.classes()).not.toContain('active')
  })

  it('applies the accent class when variant=accent', async () => {
    const wrapper = await mountSuspended(AppButton, {
      props: { variant: 'accent' },
      slots: { default: 'Dev' },
    })
    expect(wrapper.classes()).toContain('accent-btn')
  })

  it('applies the active class when active=true', async () => {
    const wrapper = await mountSuspended(AppButton, {
      props: { active: true },
      slots: { default: 'On' },
    })
    expect(wrapper.classes()).toContain('active')
  })

  it('forwards native click events to the underlying button', async () => {
    const onClick = vi.fn()
    const wrapper = await mountSuspended(AppButton, {
      attrs: { onClick },
      slots: { default: 'Tap' },
    })
    await wrapper.get('button').trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
