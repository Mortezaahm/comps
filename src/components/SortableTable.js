import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../Hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { setSortColumn, sortOrder, sortBy, sortedData } = useSort(
    data,
    config
  );

  // Handle Click Event on Header

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortOrder, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
