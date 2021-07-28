import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import siteText from '@/data/siteText';

export default function Timeline(){
  return (
    <section>
      <div className="bg-lightGray dark:bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="ml-2 text-yellow-300 uppercase tracking-loose">{siteText.TargetTimeline.subtitle}</p>
          <p className="font-extrabold text-gray-900 dark:text-gray-200 text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{siteText.TargetTimeline.title}</p>
          <p className="text-sm md:text-base text-gray-900 dark:text-white mb-4">
            {siteText.TargetTimeline.description}
          </p>
          <a href="#"
          className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
          {siteText.TargetTimeline.buttonExploreNowText}</a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{right: "50%", border: "2px solid #FFC100", "borderRadius": "1%"}}></div>
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{left: "50%", border: "2px solid #FFC100", "borderRadius": "1%"}}></div>
              {siteText.TargetTimeline.events.map((item,i) => {
                return (
                  <div key={"TargetTimeline-event-" + i} className={ i % 2 == 0 ? "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline" : "mb-8 flex justify-between items-center w-full right-timeline"}>
                    <div className="order-1  w-5/12"></div>
                    <div className={"order-1 w-5/12 px-4 py-4 " + (i % 2 === 0 ? "text-right":"")}>
                      <p className="mb-3 text-base text-yellow-300">{
                        item.f_date ? (<>{item.s_date + " - " + item.f_date}</>) : (<>{item.s_date}</>)
                      }</p>
                      <h4 className={"mb-3 font-bold text-lg md:text-2xl " + (i % 2 === 1 ? "text-left":"")}>{item.name}</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-900 dark:text-white">
                        {item.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <img className="mx-auto" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
