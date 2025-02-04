import qs from 'qs';

export async function handleGeneralSearch(formData) {

  const name = formData.get("lge").trim()

  const queryParams = {
    name: name || undefined,
  }

  const result = qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  })

  return result
}

export async function handleAdvancedSpeciesSearch(formData) {

  const taxonRankValue = formData.get("taxon_rank")?.trim();
  const specieLatinName = formData.get("specieLatinName")
  const iucnValue = formData.get("iucn")?.trim();
  
  const queryParams = {
    rank: taxonRankValue || undefined,
    specieLatinName: specieLatinName || undefined,
    iucn: iucnValue || undefined
  };

  const result = qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  })

  return result
}