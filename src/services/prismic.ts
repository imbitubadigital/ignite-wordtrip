import Prismic from '@prismicio/client'
import {DefaultClient} from '@prismicio/client/types/client'

export function getPrismicClient(req?: unknown): DefaultClient {

  const primic = Prismic.client(process.env.PRISMIC_API_ENPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })

  return primic;
}
