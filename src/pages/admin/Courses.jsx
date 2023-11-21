import { CCol, CContainer, CRow } from "@coreui/react";
import UsersTable from "../../components/admin/DataTable";

const Courses = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "createdAt",
      headerName: "Fecha de creacion",
      width: 160,
      valueGetter: (params) =>
        `${
          (params.row.createdAt &&
            params.row.createdAt.toDate().toLocaleDateString("es-MX")) ||
          ""
        }`,
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
            <UsersTable columns={columns} collection={"courses"} />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Courses;
