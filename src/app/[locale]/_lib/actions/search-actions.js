export async function handleSimpleSearch(formData) {

  const queryParams = {}

  if (formData.get("lge").trim() !== "") {
      queryParams.name = formData.get("lge")
  }

  const queryParamString = new URLSearchParams(queryParams).toString()

  return queryParamString
}

export async function handleAdvancedSearch(formData) {
    const queryParams = {};

    const taxonRankValue = formData.get("taxon_rank")?.trim();
    
    if (taxonRankValue) {
      queryParams.taxon_rank = taxonRankValue;
    }

    const latinNameValue = formData.get("latin_name")?.trim();
    if (latinNameValue) {
      queryParams.latin_name = latinNameValue;
    }

    const iucnValue = formData.get("iucn")?.trim();
    if (iucnValue) {
      queryParams.iucn = iucnValue;
    }

    const queryParamString = new URLSearchParams(queryParams).toString();

    return queryParamString
  }