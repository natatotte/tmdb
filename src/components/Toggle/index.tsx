import { useDarkMode } from 'hooks/useDarkMode'

interface TogglerProps {
  themeToggler: () => void
}

export function Toggle({ themeToggler }: TogglerProps) {
  // const { themeToggler } = useDarkMode()

  return <button onClick={themeToggler}>Switch</button>
}
