import he from "he";
import { Bounce } from "react-toastify"
import sanitizeHtml from 'sanitize-html';

import { bpg } from "./fonts"

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

export const exportDataAsCSV = (dataObject) => {
    // Convert the dataObject to a CSV string
    const convertToCSV = (objArray) => {
        const array = Array.isArray(objArray) ? objArray : [objArray];
        const headers = Object.keys(array[0]).join(","); // Extract headers
        const rows = array.map(row =>
            Object.values(row)
                .map(value => `"${value}"`) // Wrap values in quotes
                .join(",")
        ); // Convert each row to CSV

        return [headers, ...rows].join("\n");
    };

    const csvString = convertToCSV(dataObject);
    const csvBlob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

    // Create a download link for the CSV file
    const link = document.createElement("a");
    const url = URL.createObjectURL(csvBlob);
    link.href = url;
    link.download = "data.csv";

    // Trigger the download
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(url);
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

export const capitalize = (s) => (s && String(s[0]).toUpperCase() + String(s).slice(1)) || ""

export const isEmptyObj = (obj) => {
    return Object.values(obj).every(val => !val);
}

export const openNewWindow = (locale, page, title) => {
    const baseUrl = `${window.location.origin}/${locale}/${page}`; // Fully resolved URL
    const params = new URLSearchParams({
        title: title
    });
    const fullUrl = `${baseUrl}?${params.toString()}`;

    window.open(
        fullUrl,
        '_blank',
        'width=800,height=600,scrollbars=yes,resizable=yes'
    );
}

export const getStatus = (value) => {

    let fullStatus;

    switch (value) {
        case "EX":
            fullStatus = "Extinct (EX)";
            break;
        case "EW":
            fullStatus = "Extinct in the wild (EW)";
            break;
        case "CR":
            fullStatus = "Critically endangered (CR)";
            break;
        case "EN":
            fullStatus = "Endangered (EN)";
            break;
        case "VU":
            fullStatus = "Vulnerable (VU)";
            break;
        case "NT":
            fullStatus = "Near threatened (NT)";
            break;
        case "LC":
            fullStatus = "Least concern (LC)";
            break;
        case "DD":
            fullStatus = "Data deficient (DD)";
            break;
        case "NE":
            fullStatus = "Not evaluated (NE)";
            break;
        case "RE":
            fullStatus = "Regionally Extinct (RE)";
            break;
        case "NA":
            fullStatus = "Not Applicable (NA)";
            break;
        default: break;
    }

    return fullStatus
}

export const sanitize = (value) => {
    if (value) {
        return sanitizeHtml(value || '')
    }
}

// export const getChartColors = (value) => {

//     let color;

//     switch (value) {
//         case "EX":
//             color = "#000000";
//             break;
//         case "EW":
//             color = "#542344";
//             break;
//         case "CR":
//             color = "#D81E05";
//             break;
//         case "EN":
//             color = "#FC7F3F";
//             break;
//         case "VU":
//             color = "#F9E814";
//             break;
//         case "NT":
//             color = "#CCE226";
//             break;
//         case "LC":
//             color = "#60C659";
//             break;
//         case "DD":
//             color = "#D1D1C6";
//             break;
//         case "NE":
//             color = "#fffff9";
//             break;
//         case "RE":
//             color = "#9B4F96";
//             break;
//         case "NA":
//             color = "#C1B5A5";
//             break;
//         default: break;
//     }

//     return color
// }

export const getChartColors = (value) => {

    let color;

    switch (value) {
        case "EX":
            color = "#262626";
            break;
        case "EW":
            color = "#6E4F65";
            break;
        case "CR":
            color = "#A04242";
            break;
        case "EN":
            color = "#C47248";
            break;
        case "VU":
            color = "#B8A933";
            break;
        case "NT":
            color = "#9CAC47";
            break;
        case "LC":
            color = "#5E8B5A";
            break;
        case "DD":
            color = "#9A9A89";
            break;
        case "NE":
            color = "#CFCFBD";
            break;
        case "RE":
            color = "#8B5C82";
            break;
        case "NA":
            color = "#9E8772";
            break;
        default: break;
    }

    return color
}

export const getValue = (value) => {
    let level;
    switch (true) {
        case value === 0:
            level = 0;
            break;
        case value === 1 || value === 2:
            level = 1;
            break;
        case value >= 3 && value < 5:
            level = 2;
            break;
        case value >= 5 && value < 7:
            level = 3;
            break;
        case value >= 7:
            level = 4;
            break;
        default:
            level = 0;
    }
    return level;
};

export const formatCodes = (object) => {
    if(!object) return
    return  Object.keys(object).length
        ? Object.entries(object).map(([key, value], index) => ({
            id: index + 1,
            code: key,
            count: parseInt(value, 10),
        })).filter((item) => item.count !== 0)
        : [];
}

export const formatCodesTotal = (array) => {
    if (!array || array?.length === 0) return
    const totalCount = array.reduce((accumulator, current) => accumulator + current.count, 0);
    return totalCount
}


