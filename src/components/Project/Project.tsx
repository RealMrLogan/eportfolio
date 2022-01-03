import { GatsbyImage } from 'gatsby-plugin-image'
import { H3 } from '../Type'

const Project = ({ img, name, superHeading }) => {
  return (
    <>
      <GatsbyImage className='aspect-[5/2] rounded-lg mb-5 safari-img' image={img.src} alt={name} />
      <div>
        <p className='text-carrot dark:text-dodger'>{superHeading}</p>
        <H3>{name}</H3>
      </div>
    </>

  )
}

export { Project }