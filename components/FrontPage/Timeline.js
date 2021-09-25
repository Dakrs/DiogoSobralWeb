import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import siteText from '@/data/siteText';
import Link from "next/link";

export default function Timeline(){
  return (
    <section>
      <div className="bg-lightGray dark:bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 pl-12 pr-4">
          <p className="ml-2 text-yellow-300 uppercase tracking-loose">{siteText.TargetTimeline.subtitle}</p>
          <p className="font-extrabold text-gray-900 dark:text-gray-200 text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{siteText.TargetTimeline.title}</p>
          <p className="text-sm md:text-base text-gray-900 dark:text-white mb-4">
            {siteText.TargetTimeline.description}
          </p>
          <img className="w-9/12 mx-auto mt-4" src="images/undraw_Process_re_gws7.svg" />
        </div>
        <div className="ml-0 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-yellow-300 absolute right-2/4 h-full lg:border"></div>
              <div className="border-yellow-300 absolute left-2/4 h-full lg:border"></div>
              {siteText.TargetTimeline.events.map((item,i) => {
                return (
                  <div key={"TargetTimeline-event-" + i} className={ i % 2 == 0 ? "mb-8 flex justify-between flex-row-reverse items-center w-full" : "mb-8 flex justify-between items-center w-full"}>
                    <div className="md:w-0/12 lg:w-5/12"></div>
                    <div className={"md:w-12/12 lg:w-5/12 px-4 py-4 " + (i % 2 === 0 ? "text-right":"")}>
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
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
