export default function SectionContainer({ children, small }) {
  if (small)
    return <div className="w-full max-w-3xl px-4 sm:px-6 mx-auto lg:max-w-3xl xl:px-0">{children}</div>

  return <div className="w-full max-w-3xl px-4 sm:px-6 mx-auto lg:max-w-5xl xl:px-0">{children}</div>
}
