const Details = ({lang,tec,category,tags}) => {

  return (
    <>
      <div className="flex border-gray-200 dark:border-gray-800 py-2">
        <span className="text-gray-500">Category</span>
        <span className="ml-auto text-gray-900 dark:text-white">{category}</span>
      </div>
      <div className="flex border-t border-gray-200 dark:border-gray-800 py-2">
        <span className="text-gray-500">Languages</span>
        <span className="ml-auto text-gray-900 dark:text-white">{lang.join(', ')}</span>
      </div>
      <div className="flex border-t border-gray-200 dark:border-gray-800 py-2">
        <span className="text-gray-500">Tags</span>
        <span className="ml-auto text-gray-900 dark:text-white">{tags.join(', ')}</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 dark:border-gray-800 py-2">
        <span className="text-gray-500">Technologies</span>
        <span className="ml-auto text-gray-900 dark:text-white">{tec.join(', ')}</span>
      </div>
    </>
  )
}

export default Details;
