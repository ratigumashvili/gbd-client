import { useState, useMemo } from "react";

export const useFilterByName = (data, searchField = "title") => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item[searchField]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm, searchField]);

  return { searchTerm, setSearchTerm, filteredData };
};
