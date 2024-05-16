import React, { useState } from "react";
import Whatsapp from "../../../assets/images/icon/whatsapp.svg";

const ButtonWa = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    const number = "6285804552821";
    const text = "My-TechNet";
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleClick} className="fixed z-10 bottom-2 right-9" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="relative">
        {isHovering && <div className="absolute px-2 py-1 text-black bg-white rounded-md shadow-lg -top-2 right-100">Hubungi Kami</div>}
        <img src={Whatsapp} alt="WhatsApp" className="sm:w-50 w-36" />
      </div>
    </button>
  );
};

export default ButtonWa;
