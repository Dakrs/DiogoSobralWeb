import Link from "next/link";

const Project = ({item,bgcolor}) => {
  return (
    <div className="w-full p-4">
      <Link href={`/projects/${item.id}`}>
        <div className={"transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg p-6 rounded-lg " + (bgcolor ? bgcolor : "bg-white dark:bg-gray-800 dark:bg-opacity-40")}>
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.img} alt="content" />
          <h3 className="tracking-widest text-blue-500 dark:text-indigo-400 text-xs font-medium title-font">{item.subtitle}</h3>
          <h2 className="text-lg text-gray-900 dark:text-white font-medium title-font mb-4">{item.name}</h2>
          <p className="leading-relaxed text-base">{item.short_description}</p>
        </div>
      </Link>
    </div>
  )
}

export default Project;
