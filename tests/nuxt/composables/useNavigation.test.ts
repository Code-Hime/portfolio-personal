import { beforeEach, describe, expect, it } from 'vitest'
import { useNavigation } from '~/composables/useNavigation'

describe('useNavigation', () => {
  beforeEach(() => {
    const { closeNav } = useNavigation()
    closeNav()
  })

  it('starts closed by default', () => {
    const { isNavOpen } = useNavigation()
    expect(isNavOpen.value).toBe(false)
  })

  it('toggleNav flips the open state', () => {
    const { isNavOpen, toggleNav } = useNavigation()
    toggleNav()
    expect(isNavOpen.value).toBe(true)
    toggleNav()
    expect(isNavOpen.value).toBe(false)
  })

  it('openNav forces the nav open', () => {
    const { isNavOpen, openNav } = useNavigation()
    openNav()
    expect(isNavOpen.value).toBe(true)
    openNav()
    expect(isNavOpen.value).toBe(true)
  })

  it('closeNav forces the nav closed', () => {
    const { isNavOpen, openNav, closeNav } = useNavigation()
    openNav()
    closeNav()
    expect(isNavOpen.value).toBe(false)
  })

  it('shares state across instances', () => {
    const a = useNavigation()
    const b = useNavigation()
    a.openNav()
    expect(b.isNavOpen.value).toBe(true)
  })
})
