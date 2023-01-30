import { Card, Title, TextInput } from "@tremor/react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataTable from "react-data-table-component";

const registros = [
  { id: 1, año: "2000", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 2, año: "2001", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 3, año: "2002", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 4, año: "2003", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 5, año: "2000", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 6, año: "2001", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 7, año: "2002", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 8, año: "2003", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 9, año: "2000", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 10, año: "2001", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 11, año: "2002", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 12, año: "2003", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 13, año: "2000", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 14, año: "2001", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 15, año: "2002", campeon: "RealMadrid", subcampeon: "Valencia" },
  { id: 16, año: "2003", campeon: "RealMadrid", subcampeon: "Valencia" },
];

const columnas = [
  { name: "ID", selector: "id", sortable: true },
  { name: "Año", selector: "año", sortable: true },
  { name: "Campeón", selector: "campeon", sortable: true },
  { name: "Subcampeón", selector: "subcampeon", sortable: true },
];

const paginacionOpcion = {
  rowsPerPageText: "Filas por Página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "todos",
};

class TableBase extends Component {
  //   console.log(data);
  render() {
    return (
      <Card>
        <TextInput
          // icon={ SearchIcon }
          placeholder="Search..."
          maxWidth="max-w-0"
        />
        <Title> Lista de los datos</Title>
        <div className="table-responsive">
          <DataTable
            columns={columnas}
            data={registros}
            pagination
            paginationComponentOptions={paginacionOpcion}
            fixedHeader
            fixedHeaderScrollHeight="600px"
          />
        </div>
      </Card>
    );
  }
}

export default TableBase;
