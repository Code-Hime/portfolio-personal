import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import DetailRow from '~/components/DetailRow.vue'

describe('DetailRow', () => {
  it('renders the label and value', async () => {
    const wrapper = await mountSuspended(DetailRow, {
      props: { label: 'Located', value: 'Dallas, TX' },
    })

    expect(wrapper.get('.label').text()).toBe('Located:')
    expect(wrapper.get('.value').text()).toBe('Dallas, TX')
  })

  it('updates when props change', async () => {
    const wrapper = await mountSuspended(DetailRow, {
      props: { label: 'Pronouns', value: 'She/Her' },
    })

    await wrapper.setProps({ label: 'Pup', value: 'Mako' })

    expect(wrapper.get('.label').text()).toBe('Pup:')
    expect(wrapper.get('.value').text()).toBe('Mako')
  })
})
