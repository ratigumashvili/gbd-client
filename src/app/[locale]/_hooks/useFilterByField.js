import { useState, useMemo } from "react";

export const useFilterByField = (data, searchField = "title") => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!data || data.length === 0) return [];
    return data.filter((item) => {
      const fieldValue = item[searchField];
      return fieldValue
        ? fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
        : false;
    });
  }, [data, searchTerm, searchField]);

  return { searchTerm, setSearchTerm, filteredData };
};