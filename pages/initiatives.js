import siteMetadata from '@/data/siteMetadata';
import SectionContainer from '@/components/SectionContainer';
import SocialIcon from '@/components/social-icons';
import siteText from '@/data/siteText';
import LayoutWrapper from '@/components/LayoutWrapper';
import parse from 'html-react-parser';

import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, date ,children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex justify-between mb-2 text-green-700 dark:text-green-300">
        <div className="flex flex-row items-center">
          <span className="sr-only">Check</span>
          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </g>
          </svg>
          <p className="font-medium text-gray-900 dark:text-gray-100">{parse(title)}</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-sm title-font text-gray-500 tracking-widest">{date}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const draw = (items) => {
  return (
    <>
      { items.map((year,index) => {
        return (
          <div key={`initiative-year-${year}`}>
            <Year>{year}</Year>
            <ul>
            { siteText.initiatives[year].map((item,i)=> {
                return(
                  <Step key={`initiative-${year}-${i}`} title={item.title} date={item.date}>
                    {parse(item.text)}
                  </Step>
                )
              })
            }
            </ul>
            {(index+1) < items.length && (<Divider />)}
          </div>
        )
      })}
    </>
  )
}

const Initiatives = (props) => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const keys = Object.keys(siteText.initiatives).reverse();
  const active = keys.slice(0, 3);
  const inactive = keys.slice(3);

  console.log(inactive);

  return (
    <LayoutWrapper>
      <SectionContainer small>
        <>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5 text-center">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Timeline
            </h1>
          </div>
          { draw(active) }
          {isShowingFullTimeline ? (
            <>
              <Divider />
              {draw(inactive)}
            </>
          ) : (
            <button
              type="button"
              className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
              onClick={() => showFullTimeline(true)}
            >
              See More
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </>
      </SectionContainer>
    </LayoutWrapper>
  )
}

export default Initiatives;
