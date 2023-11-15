import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between border-t-4 border-t-[#FAD264]">
        <div className="text-[#FAD264]">© Copyright Loading 2023</div>
        <div
          className="text-5xl font-turret text-[#FAD264] "
          onClick={() => navigate("")}
        >
          Loading
        </div>
      </div>
    </>
  );
};

export default Footer;
