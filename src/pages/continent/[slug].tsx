import Head from "next/head";
import {Header} from '../../components/Header'
import {Loader} from '../../components/Loader'
import {Banner} from '../../components/Continent/Banner'
import {Details} from '../../components/Continent/Details'
import {Cities} from '../../components/Continent/Cities'
import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import {ContinentProps} from '../_types/continent'
import { useRouter } from "next/router";


export default function Continent ({continent}: ContinentProps){
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />
  }

  return (
    <>
      <Head>
        <title>slug | WordTrip</title>
      </Head>
      <Header back/>
      <Banner image={continent.banner} title={continent.title} />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
         <Details continent={continent} />
        <Cities towns={continent.cities100} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continents', String(slug), {});

  const continent = {
    slug:response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner: response.data.banner.url,
    countries: response.data.counter,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities100: response.data.cities100.map(city => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumb.url,
        flag:city.flag.url,
      }
    })
  };

  return {
    props: {
      continent,
    },
    revalidate: 1800,
  }
}

