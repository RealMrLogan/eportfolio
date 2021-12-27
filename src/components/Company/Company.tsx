import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Company = ({ logo, name, superHeading }) => {
  // const image = getImage(logo)
  console.log({ logo })

  return (
    <div className="flex space-x-1 h-14">
      <GatsbyImage className='aspect-square rounded-lg' image={logo.src} alt={name} />
      <div>
        <p className='text-carrot dark:text-dodger'>{superHeading}</p>
        <h4 className="uppercase font-oswald text-2xl">{name}</h4>
      </div>
    </div>
  )
}

export { Company }
