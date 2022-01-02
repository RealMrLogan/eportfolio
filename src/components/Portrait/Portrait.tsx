import { GatsbyImage } from 'gatsby-plugin-image'

const Portrait = ({ img }) => {
  return (
    <>
      <GatsbyImage className="aspect-square rounded-b-full mx-4 h-96 portrait" image={img.src} alt="A portait of Logan Saunders" />
      <div className='bg-[url(../images/portrait-underline.svg)] bg-no-repeat bg-bottom bg-contain h-44 relative bottom-40 -mb-40 dark:hue-rotate-180' />
    </>
  )
}

export { Portrait }
