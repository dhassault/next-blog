import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="sm:h-content-sm flex h-screen w-full flex-col justify-around ">
      <h1 className="tracking-tightest my-28 select-none text-center text-5xl font-extrabold leading-none sm:my-10 sm:text-6xl">
        <span
          data-content="Stochasticity & Chaos"
          className="before:animate-gradient-background-1 relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
        ></span>
      </h1>
      <div className="space-y-2 md:space-y-5">
        <PageTitle>
          Hi there! I'm Yann.{' '}
          <span role="img" aria-label="waving hand" className="wave">
            🤙
          </span>
        </PageTitle>
        <p className="prose max-w-none text-lg leading-7 text-gray-500 dark:text-gray-400">
          I am a machine learning engineer and entrepreneur.{' '}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a
              className="font-medium leading-6 "
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
