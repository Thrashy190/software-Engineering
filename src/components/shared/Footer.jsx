import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between border-t-4 border-t-[#FAD264] px-10 pb-10 mt-20">
        <div className="text-[#FAD264] pt-4">© Copyright Loading 2023</div>
        <div
          className="text-5xl font-turret text-[#FAD264] pt-3"
          onClick={() => navigate("")}
          sx={{ cursor: "pointer" }}
        >
          Loading
        </div>
      </div>
    </>
  );
};

export default Footer;
