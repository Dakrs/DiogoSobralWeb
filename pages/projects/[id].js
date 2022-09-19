import { useState } from 'react';
import { useRouter } from 'next/router';
import SectionContainer from '@/components/SectionContainer';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteText from '@/data/siteText';
import ExternalLink from '@/components/Projects/ExternalLink';
import Details from '@/components/Projects/Details';
import Description from '@/components/Projects/Description';

const Project = () => {
  const router = useRouter();
  const [tabState,setState] = useState([true,false]);
  const { id } = router.query;

  if(!id){
    return(null);
  }

  const project_data = siteText.projects.projects_description.find(item => item.id == id);

  if (!project_data){
    return (
      <LayoutWrapper abs={true}>
        <SectionContainer>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <img className="h-64" src="/images/image_page_not_found.png" />
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Project not found</h1>
          </div>
        </SectionContainer>
      </LayoutWrapper>
    )
  }
  //const tabs = ["Description","Reviews","Details"];
  const tabs = ["Description","Details"];

  const swap_tab = (i) => {
    const new_tab_state = [false,false];
    new_tab_state[i] = true;
    setState(new_tab_state);
  }

  return (
    <LayoutWrapper>
      <section className="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font overflow-hidden py-10 min-h-[calc(100vh-252px)] sm:min-h-[calc(100vh-248px)]">
        <div className="container max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-5xl xl:px-0">
          <div className="w-full flex flex-wrap">
            <div className="w-full flex flex-col">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">PROJECT NAME</h2>
              <h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium">{project_data.name}</h1>
              <h3 className="text-xs title-font text-gray-500 tracking-widest mb-4">{project_data.date}</h3>
            </div>
            <div className="lg:w-3/5 w-full lg:pr-10 mb-6 lg:mb-0">
              <div className="flex mb-4">
                {tabs.map((item,i) => {
                  if (tabState[i])
                    return (
                      <div key={'project-details-tab-' + i} className="flex-grow text-blue-500 dark:text-indigo-400 border-b-2 dark:border-indigo-400 border-blue-500 py-2 text-lg">{item}</div>
                    )
                  return (
                    <div key={'project-details-tab-' + i} onClick={() => swap_tab(i)} className="flex-grow border-b-2 border-gray-300 dark:border-gray-800 hover:cursor-pointer py-2 text-lg px-1">{item}</div>
                  )
                })}
              </div>
              { tabState[0] && (<Description text={project_data.description} />) }
              { tabState[1] && (<Details lang={project_data.languages} tec={project_data.technologies} category={project_data.subtitle} tags={project_data.tags} />) }
              <div className="w-full flex justify-center">
                {project_data.links.map((item,i) => {
                  return (
                    <ExternalLink key={`project-link-${project_data.id}-${i}`} href={item.href} type={item.type} s_text={item.stext} h_text={item.htext} />
                  )
                })}
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-2/5 w-full h-full object-cover object-center rounded" src={project_data.img} />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}

export default Project;
