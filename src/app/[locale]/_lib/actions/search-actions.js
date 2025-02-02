import qs from 'qs';

export async function handleSimpleSearch(formData) {

  const name = formData.get("lge").trim()

  const queryParams = {
    name: name || undefined
  }

  const result = qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  })

  return result
}

export async function handleAdvancedSearch(formData) {

  const taxonRankValue = formData.get("taxon_rank")?.trim();
  const latinNameValue = formData.get("latin_name")?.trim();
  const speciesName = formData.get("species_name")
  const iucnValue = formData.get("iucn")?.trim();
  
  const queryParams = {
    rank: taxonRankValue || undefined,
    name: latinNameValue || undefined,
    species: speciesName || undefined,
    iucn: iucnValue || undefined
  };

  const result = qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  })

  return result
}