import axios from "axios"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const getData = async (endpoint, locale) => axios.get(`${apiUrl}/${endpoint}`,
  {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Language': locale
    },
  }).then((response) => response.data).catch((error) => error.message)

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