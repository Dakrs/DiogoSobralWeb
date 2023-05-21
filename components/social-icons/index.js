import Mail from './assets/mail.svg'
import Github from './assets/github.svg'
import Facebook from './assets/facebook.svg'
import Youtube from './assets/youtube.svg'
import Linkedin from './assets/linkedin.svg'
import Twitter from './assets/twitter.svg'
import Resume from './assets/resume.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  resume: Resume
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SocialSvg = components[kind]

  return (
    <a className="text-sm text-gray-500 transition hover:text-gray-600" href={href} >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
