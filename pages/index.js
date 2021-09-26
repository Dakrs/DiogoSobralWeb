import Hero from '@/components/FrontPage/Hero';
import Skills from '@/components/FrontPage/Skills';
import Projects from '@/components/FrontPage/Projects';
import CTA from '@/components/FrontPage/CTA';
import Timeline from '@/components/FrontPage/Timeline';
import LeftTimeline from '@/components/FrontPage/LeftTimeline';
import LayoutWrapper from '@/components/LayoutWrapper';



export default function Home() {
  return (
    <LayoutWrapper abs={true}>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
      <LeftTimeline />
      <CTA />
    </LayoutWrapper>
  )
}
