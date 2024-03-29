import useScroll from '@/hooks/useScroll'
import Button from './Button'

const ScrollTop = () => {
  const isInTop = useScroll()

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Button onClick={handleClick} className={`fixed bottom-2 right-2 z-50 ${isInTop ? 'opacity-0' : 'opacity-100'} duration-300`}>Ir Arriba</Button>
  )
}

export default ScrollTop
