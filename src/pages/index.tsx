import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Header } from '../components'

export default function Index() {
  return (
    <main className="max-w-5xl m-auto px-6 font-sans">
      <Header />
      <p className="font-oswald text-xl">Logan Saunders</p>
      <p className="font-raleway text-md">Web Developer</p>
    </main>
  )
}
