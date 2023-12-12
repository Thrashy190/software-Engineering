import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import {
  getCollection,
  getCollectionWithQuery,
} from "../../firebase/firestore";

export default function DataTable({
  columns,
  collection,
  onRowDoubleClick,
  courseId,
}) {
  const [rows, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollection(collection);
        setRows(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al traer la info", error);
      }
    };
    const fetchDataQuery = async () => {
      try {
        const data = await getCollectionWithQuery("users", courseId);
        setRows(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al traer la info", error);
      }
    };

    if (collection === "usersfilter") {
      fetchDataQuery();
    } else {
      fetchData();
    }
  }, []);

  return (
    <div style={{ height: 650, width: "100%" }}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          onCellDoubleClick={onRowDoubleClick}
          checkboxSelection
        />
      )}
    </div>
  );
}
