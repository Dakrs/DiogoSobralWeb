import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';

const Event = ({category, date, title, text}) => {
  return (
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 dark:text-white">{category}</span>
          <span className="mt-1 text-gray-500 text-sm">{date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white title-font mb-2">{title}</h2>
          <p className="leading-relaxed">{text}</p>
          <a className="text-indigo-500 dark:text-indigo-400 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
  )
}

export default function FullTimeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <section className="w-full bg-lightGray dark:bg-gray-900">
      <SectionContainer>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-3 lg:mb-0">
              <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Timeline
              </h1>
              <div className="h-1 w-20 bg-blue-500 dark:bg-indigo-400 rounded"></div>
            </div>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-800">
            <Event category="CATEGORY" date="19 Jun 2018" title="Bitters hashtag waistcoat fashion axe chia unicorn" text="Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer." />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
