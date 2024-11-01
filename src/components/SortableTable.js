import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  // Handle Click Event on Header

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortOrder, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortOrder, sortBy) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }

  if (sortOrder === "asc") {
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
  }

  return (
    <div>
      <GoTriangleUp />
      <GoTriangleDown />
    </div>
  );
}

export default SortableTable;
