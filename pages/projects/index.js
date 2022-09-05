import SectionContainer from '@/components/SectionContainer';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteText from '@/data/siteText';
import Project from "@/components/Projects/Project";



const Projects = (props) => {
  return (
    <LayoutWrapper>
      <SectionContainer>
        <div className="min-h-screen w-full flex flex-col items-center justify-start">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5 text-center">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-400">A showcase of my projects</p>
          </div>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3">
            {siteText.projects.projects_description.map((item,i) => {
              return (
                <div key={"showcase-project-" + item.id} className="w-full">
                  <Project item={item} bgcolor="bg-lightGray dark:bg-gray-900" />
                </div>
              )
            })}
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  )
}

export default Projects;
