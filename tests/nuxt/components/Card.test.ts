import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Card from '~/components/Card.vue'

describe('Card', () => {
  it('renders provided project fields', async () => {
    const wrapper = await mountSuspended(Card, {
      props: {
        projectName: 'Quick Neon Signs',
        roleText: 'Designer & Developer',
        descText: 'A custom neon sign designer.',
        imageUrl: '/neon.png',
        imageAltText: 'Neon sign preview',
      },
    })

    expect(wrapper.get('.header-text').text()).toBe('Quick Neon Signs')
    expect(wrapper.get('.desc-text').text()).toBe('A custom neon sign designer.')

    const img = wrapper.get('img')
    expect(img.attributes('src')).toBe('/neon.png')
    expect(img.attributes('alt')).toBe('Neon sign preview')
  })

  it('falls back to defaults when props are omitted', async () => {
    const wrapper = await mountSuspended(Card)

    expect(wrapper.get('.header-text').text()).toBe('Project Name')
    expect(wrapper.get('img').attributes('alt')).toBe('No image loaded, placeholder image shown')
  })
})
