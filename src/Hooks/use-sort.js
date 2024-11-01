import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // continue to desc if the column is already sorted use the next line
    //if (sortOrder === null && sortBy === null) {
    // continue to asc by click on the other column
    if (sortBy && sortBy !== label) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only Sort if sortOrder && sortBy are not null
  // Make a copy of the "data" prop
  // Find correct sortValue function based on sortBy

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const ValueA = sortValue(a);
      const ValueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof ValueA === "string") {
        return ValueA.localeCompare(ValueB) * reverseOrder;
      } else {
        return (ValueA - ValueB) * reverseOrder;
      }
    });
  }
  return {
    setSortColumn,
    sortOrder,
    sortBy,
    sortedData,
  };
}

export default useSort;
