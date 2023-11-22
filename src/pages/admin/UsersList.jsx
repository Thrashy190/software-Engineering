import { CCol, CContainer, CRow } from "@coreui/react";
import DataTable from "../../components/admin/DataTable";

const UsersList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "createdAt",
      headerName: "Fecha de creacion",
      width: 160,
      valueGetter: (params) =>
        `${
          params.row.createdAt &&
          params.row.createdAt.toDate().toLocaleDateString("es-MX")
        }`,
    },
    { field: "name", headerName: "Nombre(s)", width: 130 },
    { field: "lastname", headerName: "Apellidos", width: 130 },
    {
      field: "fullName",
      headerName: "Nombre completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.name || ""} ${params.row.lastname || ""}`,
    },
    {
      field: "email",
      headerName: "Correo electrónico",
      width: 160,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      width: 160,
    },
    {
      field: "role",
      headerName: "Rol",
      width: 160,
    },
  ];
  return (
    <>
      <CContainer className="min-h-screen pt-10">
        <CRow>
          <CCol className="flex pb-10">
            <div className="text-4xl font-bold text-[#67237E]">Usuarios</div>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="flex pb-6">
            <DataTable columns={columns} collection={"users"} />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default UsersList;
