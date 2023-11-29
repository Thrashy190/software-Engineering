import { CCol, CContainer, CRow } from "@coreui/react";
import DataTable from "../../components/admin/DataTable";
import {useNavigate} from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
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
    {
      field: "title",
      headerName: "Titulo",
      width: 200,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 160,
      valueGetter: (params) => `$${params.row.price || ""} MXN`,
    },
    {
      field: "status",
      headerName: "Estado",
      width: 160,
      valueGetter: (params) =>
        `${
          (params.row.status === "published" && "Publicado") || "Borrador" || ""
        }`,
    },
  ];

  const selectedRowData = (params, event, details) => {
    navigate(`/admin/editar-courses/${params.row.id}`);
  }
  return (
    <>
      <CContainer className="min-h-screen pt-10">
        <CRow>
          <CCol className="flex pb-10">
            <div className="text-4xl font-bold text-[#67237E]">Cursos</div>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="flex pb-6">
            <DataTable columns={columns} collection={"courses"} onRowDoubleClick={selectedRowData} />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Courses;
