import { GatsbyImage } from 'gatsby-plugin-image'

const Project = ({ img, name, superHeading }) => {
  return (
    <>
      <GatsbyImage className='aspect-[5/2] rounded-lg mb-5' image={img.src} alt={name} />
      <div>
        <p className='text-carrot dark:text-dodger'>{superHeading}</p>
        <h4 className="uppercase font-oswald text-2xl">{name}</h4>
      </div>
    </>

  )
}

export { Project }