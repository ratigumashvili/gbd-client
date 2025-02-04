import SearchParameters from "../_components/SearchParameters"


async function SearchResults({ params, searchParams }) {

  const data = []

  const rank = searchParams.rank
  const latinName = searchParams.taxonLatinName
  const iucn = searchParams.iucn

  return (
    <section className="py-4">
      SearchResults:
      <SearchParameters length={data.length} />
    </section>
  )
}

export default SearchResults