import SectionContainer from '@/components/SectionContainer'
import { Spring, animated } from 'react-spring';
import { InView } from 'react-intersection-observer';
import React , { useState } from 'react';
import siteText from '@/data/siteText';
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Project from "@/components/Projects/Project";

/**
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
                  <div className="bg-white dark:bg-gray-800 dark:bg-opacity-40 transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg p-6 rounded-lg">
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
*/

/**
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={}
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
</Carousel>
*/

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

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
          </div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={2500}
            centerMode={false}
            className=""
            infinite
            itemClass=""
            responsive={responsive}
            sliderClass=""
            slidesToSlide={1}
            swipeable={false}
          >
            {siteText.projects.projects_description.map((item,i) => {
              return (
                <Project key={"target-project-" + item.id} item={item} />
              )
            })}
          </Carousel>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Projects;
