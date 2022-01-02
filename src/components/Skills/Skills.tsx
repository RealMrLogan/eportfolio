import { Children } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Skills = ({ logos, superHeading, name }) => {
  console.log({ logos })
  return (
    <div className='mb-5'>
      <div className='mb-3'>
        <p className="text-carrot dark:text-dodger">{superHeading}</p>
        <h4 className="uppercase font-oswald text-2xl">{name}</h4>
      </div>
      <div className='flex gap-2'>
        {Children.toArray(
          logos.map(({ src, name: fileName }) => <GatsbyImage className="aspect-square rounded-lg w-16 dark:bg-platinum" image={src} alt={fileName} />),
        )}
      </div>
    </div>
  )
}

export { Skills }
