import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="flex flex-col items-center">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="resume" href={siteMetadata.resume} size="6" />
        </div>
        <div className="flex items-center text-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`Developed with ❤️ using NextJs`}</div>
        </div>
      </div>
    </footer>
  )
}
