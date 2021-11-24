import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex flex-col justify-around w-full h-screen sm:h-content-sm ">
      <h1 className="my-28 sm:my-10 text-center select-none text-5xl sm:text-6xl leading-none tracking-tightest font-extrabold">
        <span
          data-content="Stochasticity & Chaos"
          className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1"
        ></span>
      </h1>
      <div className="space-y-2 md:space-y-5">
        <PageTitle>
          Hi there! I'm Yann.{' '}
          <span role="img" aria-label="waving hand" className="wave">
            🤙
          </span>
        </PageTitle>
        <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
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
