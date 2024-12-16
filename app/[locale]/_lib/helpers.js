import he from "he";

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

export const sortPosition = (members, role) => {
    return members?.filter((member) => member.role === role).sort((a, b) => a.sort_weight - b.sort_weight)
}

export const sortChildren = (array) => {
    return array && array?.length > 0 && array.sort((a, b) => a?.title?.localeCompare(b?.title))
}

export function htmlToPlainText(html) {
    if (!html) return
    
    const decodedHtml = he.decode(html);
    return decodedHtml.replace(/<\/?[^>]+(>|$)/g, "").trim();
}
