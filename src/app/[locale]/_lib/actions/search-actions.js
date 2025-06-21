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

export async function handleAdvancedSearch(formData) {
  const searchIn = formData.get("search_in");

  // Collect values dynamically
  const fields = [
    "taxon_rank",
    "specieLatinName",
    "specieGeorgianName",
    "specieEnglishName",
    "taxonLatinName",
    "taxonGeorgianName",
    "taxonEnglishName",
    "iucn"
  ];

  const values = fields.reduce((acc, field) => {
    const value = formData.get(field)?.trim();
    if (value) acc[field] = value;
    return acc;
  }, {});

  // Define mappings for different search types
  const searchMappings = {
    specie: {
      taxonomy_level: values.taxon_rank,
      name: values.specieLatinName,
      georgian_name: values.specieGeorgianName,
      english_name: values.specieEnglishName,
      iucn_status: values.iucn
    },
    taxonomy: {
      taxonomy_level: values.taxon_rank,
      name: values.taxonLatinName,
      georgian_name: values.taxonGeorgianName,
      english_name: values.taxonEnglishName
    },
    iucn: {
      iucn_status: values.iucn
    }
  };

  // Get the correct queryParams based on search type
  const queryParams = searchMappings[searchIn] || {};

  // Convert to query string
  return qs.stringify(queryParams, {
    skipNulls: true,
    skipEmptyStrings: true
  });
}
