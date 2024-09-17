import { Bounce } from "react-toastify"
import { bpg } from "./fonts"

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const separator = (index, array, separatorType = ', ') => index === array.length - 1 ? "." : separatorType

export const checkObject = (object) => {
    if (object && Object?.keys(object).length !== 0) {
        return object
    } else {
        return
    }
}

export const checkLink = (path) => path ? path : "#"

export const currentDate = new Date().toLocaleDateString().split('/').join('-')

export const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
}

export const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export const exportData = (dataObject) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(dataObject)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
};

export const detectLocale = (language) => {
    return language === 'ka' ? bpg.className : 'font-arial uppercase' 
}

export async function getStaticData(endpoint, page, perPage) {
    try {
      const response = await fetch(`http://test-api.biodiversity.iliauni.edu.ge/api/1.0/${endpoint}?page=${page}&per_page=${perPage}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }