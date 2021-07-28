import Hero from '@/components/FrontPage/Hero';
import Skills from '@/components/FrontPage/Skills';
import Projects from '@/components/FrontPage/Projects';
import Timeline from '@/components/FrontPage/Timeline';
import LayoutWrapper from '@/components/LayoutWrapper';



export default function Home() {
  return (
    <LayoutWrapper abs={true}>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
    </LayoutWrapper>
  )
}
