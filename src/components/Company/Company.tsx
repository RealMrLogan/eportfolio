import { GatsbyImage } from 'gatsby-plugin-image'
import { H3 } from '../Type'

const Company = ({ logo, name, superHeading }) => {
  return (
    <div className="flex space-x-2 h-14">
      <GatsbyImage className='aspect-square rounded-lg' image={logo.src} alt={name} />
      <div>
        <p className='text-carrot dark:text-dodger'>{superHeading}</p>
        <H3>{name}</H3>
      </div>
    </div>
  )
}

export { Company }
