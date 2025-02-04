import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const getData = async (endpoint, locale) => axios.get(`${apiUrl}/${endpoint}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': locale
    },
  }).then((response) => response.data).catch((error) => error)

export const getPaginatedData = async (endpoint, locale, currentPage, perPage) => axios.get(`${apiUrl}/${endpoint}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': locale
    },
    params: {
      'page': currentPage,
      'per_page': perPage
    }
  }).then((response) => response.data).catch((error) => error.message)

export const getRecentSpecies = async (locale, quantity) => axios.get(`${apiUrl}/taxonomy/recent-species?recent_count=${quantity}`, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Language': locale
  },
  params: {
    'recent_count': quantity
  }
}).then((response) => response.data).catch((error) => error.message)

export const getPopularClasses = async (locale, quantity) => axios.get(`${apiUrl}/taxonomy?sort_item=views&type=TaxClass&per_page=${quantity}`, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Language': locale,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' 
  },
}).then((response) => response.data).catch((error) => error.message)
