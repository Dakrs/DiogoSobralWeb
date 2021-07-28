import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'


const LayoutWrapper = ({ children, abs }) => {
  return (
    <div className="w-full h-full dark:bg-gray-800">
      <div className={ (abs ? "absolute top-0 " : "") + "w-full"}>
        <header className="flex mx-auto max-w-2xl xl:max-w-3xl items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-center justify-between">
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  Diogo Sobral
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
      </div>
      <main className="mb-auto">{children}</main>
      <SectionContainer>
        <Footer />
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
