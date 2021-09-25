import { useState } from 'react';
import SectionContainer from '@/components/SectionContainer';
import siteText from '@/data/siteText';
import Link from "next/link";

export default function LeftTimeline(){
  return (
    <section>
      <div className="w-full dark:bg-gray-800 py-8">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="ml-0 lg:w-2/3 sticky order-2 md:order-1">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-yellow-300 absolute right-2/4 h-full lg:border"></div>
              <div className="border-yellow-300 absolute left-2/4 h-full lg:border"></div>
              {siteText.TargetTimelineSocial.events.map((item,i) => {
                return (
                  <div key={"TargetTimelineSocial-event-" + i} className={ i % 2 == 0 ? "mb-8 flex justify-between flex-row-reverse items-center w-full" : "mb-8 flex justify-between items-center w-full"}>
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
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 order-1 md:order-2">
          <p className="ml-2 text-yellow-300 uppercase tracking-loose">{siteText.TargetTimelineSocial.subtitle}</p>
          <p className="font-extrabold text-gray-900 dark:text-gray-200 text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{siteText.TargetTimelineSocial.title}</p>
          <p className="text-sm md:text-base text-gray-900 dark:text-white mb-4">
            {siteText.TargetTimelineSocial.description}
          </p>
          <Link href="/initiatives">
           <a className="bg-yellow-300 mx-auto hover:bg-yellow-500 text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
            {siteText.TargetTimelineSocial.buttonExploreNowText}
           </a>
          </Link>
          <img className="w-full" src="images/undraw_adventure_4hum.png" />
        </div>
      </div>
    </div>
    </section>
  )
}
