import Link from "next/link";

const CTA = (props) => {
  return (
    <section className="w-full bg-lightGray dark:bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col items-center mx-auto">
            <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Find out more
            </h1>
            <div className="w-full flex flex-row justify-center mt-4 flex-wrap">
              <Link href="/projects" legacyBehavior>
               <a className="text-white text-center bg-yellow-300 w-36 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg mt-10 sm:mt-0 mx-2">
                Projects
               </a>
              </Link>
              <Link href="/initiatives" legacyBehavior>
               <a className="text-white text-center bg-yellow-300 w-36 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg mt-10 sm:mt-0 mx-2">
                Initiatives
               </a>
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CTA;
