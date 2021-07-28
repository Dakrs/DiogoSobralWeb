import Link from 'next/link';
import { useSpring, animated } from 'react-spring'
import siteText from '@/data/siteText'

const Hero = (props) => {
  const propsh1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  })

  const propsh2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  })


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <animated.h1 style={propsh1} className="font-bold text-5xl md:text-7xl tracking-tight mb-4 text-black text-center dark:text-white">
        {siteText.hero.mainText}
      </animated.h1>
      <animated.h2 style={propsh2} className="prose text-gray-600 text-center dark:text-gray-400">
        {siteText.hero.subText}
      </animated.h2>
    </div>
  )
}

/**
<div className="min-h-screen flex flex-col items-center justify-center">
  <animated.h1 style={propsh1} className="font-bold text-5xl md:text-7xl tracking-tight mb-4 text-black text-center dark:text-white">
    {siteText.hero.mainText}
  </animated.h1>
  <animated.h2 style={propsh2} className="prose text-gray-600 text-center dark:text-gray-400">
    {siteText.hero.subText}
  </animated.h2>
</div>
*/

export default Hero;
