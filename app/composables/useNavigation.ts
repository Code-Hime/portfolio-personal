export const useNavigation = () => {
  const isNavOpen = useState('nav-open', () => false)

  const toggleNav = () => { isNavOpen.value = !isNavOpen.value }
  const closeNav = () => { isNavOpen.value = false }
  const openNav = () => { isNavOpen.value = true }

  return { isNavOpen, toggleNav, closeNav, openNav }
}
