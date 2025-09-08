import { ref } from "vue"

// Shared navigation state using reactive composable
const isNavOpen = ref(false)

export const useNavigation = () => {
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }
  
  const closeNav = () => {
    if (isNavOpen.value) {
      isNavOpen.value = false
    }
  }
  
  const openNav = () => {
    isNavOpen.value = true
  }
  
  return {
    isNavOpen,
    toggleNav,
    closeNav,
    openNav
  }
}
