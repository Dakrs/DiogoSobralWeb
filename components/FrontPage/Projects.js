import SectionContainer from '@/components/SectionContainer'
import { Spring, animated } from 'react-spring';
import { InView } from 'react-intersection-observer';
import React , { useState } from 'react';
import siteText from '@/data/siteText';
import Link from "next/link";


const Projects = (props) => {
  const [hasRan,setRan] = useState(false);

  return (
    <section className="w-full bg-lightGray dark:bg-gray-900">
      <SectionContainer>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Project Gallery
              </h1>
              <div className="h-1 w-20 bg-blue-500 dark:bg-indigo-400 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref} className="flex flex-wrap -m-4">
                {siteText.projects.targetProjects.map((item,i) => {
                  return (
                    <Spring key={"target-project-" + i} opacity={(inView || hasRan) ? 1 : 0 } onStart={(e,p) => setRan(true)} config={{ duration: 750 }}>
                      {
                        styles =>
                        <animated.div style={styles} className="xl:w-1/3 md:w-1/2 p-4">
                          <Link href={`/projects/${siteText.projects.projects_description[item].id}`}>
                            <div className="bg-white dark:bg-gray-800 dark:bg-opacity-40 hover:scale-125 hover:cursor-pointer hover:shadow-lg p-6 rounded-lg">
                              <img className="h-40 rounded w-full object-cover object-center mb-6" src={siteText.projects.projects_description[item].img} alt="content" />
                              <h3 className="tracking-widest text-blue-500 dark:text-indigo-400 text-xs font-medium title-font">{siteText.projects.projects_description[item].subtitle}</h3>
                              <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">{siteText.projects.projects_description[item].name}</h2>
                              <p className="leading-relaxed text-base">{siteText.projects.projects_description[item].short_description}</p>
                            </div>
                          </Link>
                        </animated.div>
                      }
                    </Spring>
                  )
                })}
              </div>
            )}
          </InView>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Projects;
