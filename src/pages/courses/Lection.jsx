import { useEffect, useState } from "react";
import { CContainer, CCol, CRow } from "@coreui/react";
import { downloadImage } from "../../firebase/storage";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import ModuleProgressList from "../../components/course/ModuleProgressList";

const Lection = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await downloadImage("miniaturas/f1.jpeg");
        const video = await downloadImage("video/Lab4_1_CesarZarate7am.mp4");
        setImageUrl(url);
        setVideoUrl(video);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    };

    fetchData();
  }, []);

  const modules = [
    {
      title: "Módulo 1",
      duration: "2h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "30m" },
        { type: "Texto", title: "Lección 2" },
      ],
    },
    {
      title: "Módulo 2",
      duration: "1.5h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "45m" },
        { type: "Texto", title: "Lección 2" },
        { type: "Video", title: "Lección 3", duration: "15m" },
      ],
    },
    {
      title: "Módulo 3",
      duration: "1.5h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "45m" },
        { type: "Texto", title: "Lección 2" },
        { type: "Examen", title: "Lección 3", duration: "15m" },
      ],
    },
    {
      title: "Módulo 4",
      duration: "1.5h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "45m" },
        { type: "Texto", title: "Lección 2" },
        { type: "Examen", title: "Lección 3", duration: "15m" },
      ],
    },
  ];

  return (
    <CContainer className="pt-10">
      <CRow>
        <CCol xs={9}>
          <video src={videoUrl} className="w-full" controls />
          <div className="flex justify-end gap-3 pt-2">
            <div className="border-solid border-2 border-[#FAD264] rounded-lg">
              <FastRewindIcon color="primary" fontSize="large" />
            </div>
            <div className="border-solid border-2 border-[#FAD264] rounded-lg">
              <FastForwardIcon color="primary" fontSize="large" />
            </div>
          </div>
        </CCol>
        <CCol xs={3}>
          <ModuleProgressList modules={modules} />
        </CCol>
      </CRow>
      <div className="flex flex-col gap-4">
        <div className="text-white font-medium text-2xl">
          Resumen de la Lección:
        </div>
        <div className="text-white font-medium text-xl">
          Esta lección introductoria te sumerge en el fascinante mundo del sueño
          y las siestas. Comprenderás por qué el descanso adecuado es esencial
          para la salud y la productividad. Además, explorarás cómo las siestas
          estratégicas pueden mejorar tu rendimiento diario y bienestar general.
        </div>
        <div>
          <img src={imageUrl} alt="Imagen video" className="h-1/4 w-1/4" />
        </div>
        <div className="text-white font-medium text-2xl">Archivos adjuntos</div>
        <div className="bg-[#FAD264] rounded-lg p-2 flex justify-between">
          <div className=" text-black font-medium text-2xl">
            Archivo adjunto
          </div>
          <CloudDownloadIcon fontSize="large" />
        </div>
      </div>
    </CContainer>
  );
};

export default Lection;
