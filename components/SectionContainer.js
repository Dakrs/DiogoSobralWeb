export default function SectionContainer({ children, small }) {
  if (small)
    return <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3xl xl:px-0">{children}</div>

  return <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
}
