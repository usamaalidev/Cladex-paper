import { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, Typography } from "@mui/material";
import style from "./ProductTable.module.css";

import { data } from "./makeData";

export default function ProductTable() {
  const columns = useMemo(
    () => [
      {
        id: "products", //id used to define `group` column
        columns: [
          {
            accessorFn: (row) => `${row.name}`, //accessorFn used to join multiple data into a single cell
            id: "name", //id is still required when using accessorFn instead of accessorKey
            header: "Name",
            size: 400,
            enableClickToCopy: true,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  alt="avatar"
                  height={30}
                  src={row.original.photo}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                />
                {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
          {
            accessorKey: "category", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
            enableClickToCopy: true,
            header: "Category",
            size: 250,
          },
          {
            accessorKey: "stock",
            enableClickToCopy: true,
            header: "Stock",
            size: 250,
          },
          {
            accessorFn: (row) => `${row.price}$`, //accessorFn used to join multiple data into a single cell
            enableClickToCopy: true,
            header: "Price",
            size: 250,
            Cell: ({ renderedCellValue, row }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span>{renderedCellValue}</span>
              </Box>
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableGrouping
      enablePinning
      enableRowSelection
      enableStickyHeader
      initialState={{ showColumnFilters: false }}
      positionToolbarAlertBanner="bottom"
      renderTopToolbarCustomActions={({ table }) => {
        const handleDeactivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert("deactivating " + row.getValue("name"));
          });
        };

        const handleActivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert("activating " + row.getValue("name"));
          });
        };

        return (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button
              color="success"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleActivate}
              variant="contained"
              className={`btn ${style["btn-edit"]}`}
            >
              Edit
            </Button>
            <Button
              color="error"
              disabled={!table.getIsSomeRowsSelected()}
              onClick={handleDeactivate}
              variant="contained"
              className={`btn ${style["btn-delete"]}`}
            >
              Delete
            </Button>
          </div>
        );
      }}
    />
  );
}
