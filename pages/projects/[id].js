import { useRouter } from 'next/router';
import SectionContainer from '@/components/SectionContainer';
import LayoutWrapper from '@/components/LayoutWrapper';
import siteText from '@/data/siteText';


const Project = () => {
  const router = useRouter()
  const { id } = router.query

  if(!id){
    return(null)
  }

  if (id >= siteText.projects.projects_description.length){
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

  const project_data = siteText.projects.projects_description[id];


  return (
    <LayoutWrapper>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-5/5 w-full flex flex-col">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">PROJECT NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{project_data.name}</h1>
            </div>
            <div className="lg:w-3/5 w-full lg:pr-10 mb-6 lg:mb-0">
              <div className="flex mb-4">
                <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
              </div>
              <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">Blue</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">Medium</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">4</span>
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
