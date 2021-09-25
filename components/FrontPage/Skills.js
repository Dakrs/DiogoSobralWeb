import SectionContainer from '@/components/SectionContainer';
import skills from '@/data/skills';
import siteText from '@/data/siteText';
import { Spring, animated } from 'react-spring';
import { InView } from 'react-intersection-observer';
import React , { useState } from 'react';

const Skills = (props) => {
  const [hasRan,setRan] = useState(false);

  return (
    <section className="w-full dark:bg-gray-800">
      <SectionContainer>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-90 mb-6 lg:mb-0">{siteText.skills.description}</p>
            <div className="lg:w-1/2 text-right flex flex-col items-end w-full mb-6 lg:mb-0">
              <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Skills
              </h1>
              <div className="h-1 w-20 bg-blue-500 dark:bg-indigo-400 rounded"></div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <div className="periodic-table">
              <div className="empty-spacer-1"></div>
              <div className="empty-spacer-2"></div>

              {
                skills.skills.map((i,index) => {
                  return (
                    <div key={`periodic-${i.sign}-${index}`} className={`periodic-element ${i.type}`} data-description={i.desc}>
                        <div className="periodic-element-inner">
                            <div className="title">{i.sign}</div>
                            <div className="description">{i.name}</div>
                        </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="legend-table">
              <div className="legend-table__wrapper">
                  <span className="legend-table__marker social-media"></span><span className="legend-table__text bg-gray-900 dark:bg-white">General Stuff</span>
                  <span className="legend-table__marker intense-work"></span><span className="legend-table__text bg-gray-900 dark:bg-white">Front-End</span>
                  <span className="legend-table__marker just-trying"></span><span className="legend-table__text bg-gray-900 dark:bg-white">Performance</span>
                  <span className="legend-table__marker fun-stuff"></span><span className="legend-table__text bg-gray-900 dark:bg-white">Back-End</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Skills;
