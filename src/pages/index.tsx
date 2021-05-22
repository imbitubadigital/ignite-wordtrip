import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import {Header} from '../components/Header'
import {Banner} from '../components/Banner'
import {Categories} from '../components/Categories'
import {Divider} from '../components/Divider'
import {Slider} from '../components/Slider'
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic'

import {HomeProps} from './_types/home'
export default function Home({ continents}: HomeProps) {

  return (
  <>
    <Head>
      <title>Home | WordTrip</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />
      <Divider />
      <Slider continents={continents} />
    </Flex>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continents')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slide.url,
    }
  })

  return {
    props: {
      continents,
    },
    revalidate: 1800,

  }
}