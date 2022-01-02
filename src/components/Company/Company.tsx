import { GatsbyImage } from 'gatsby-plugin-image'

const Company = ({ logo, name, superHeading }) => {
  return (
    <div className="flex space-x-2 h-14">
      <GatsbyImage className='aspect-square rounded-lg' image={logo.src} alt={name} />
      <div>
        <p className='text-carrot dark:text-dodger'>{superHeading}</p>
        <h4 className="uppercase font-oswald text-2xl">{name}</h4>
      </div>
    </div>
  )
}

export { Company }
