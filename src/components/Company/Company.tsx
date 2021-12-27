import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Company = ({ logo, name, superHeading }) => {
  const image = getImage(logo)
  console.log({ image, logo })

  return (
    <div className="flex space-between">
      <GatsbyImage image={image} alt={name} />
      <div>
        <p>{superHeading}</p>
        <h4 className="uppercase font-oswald">{name}</h4>
      </div>
    </div>
  )
}

export { Company }
