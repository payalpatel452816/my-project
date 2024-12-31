import React from "react";
import AboutBnner from "../Componats/AboutBnner";
import AboutInfo from "../Componats/AboutInfo";
import OurPriority from "../Componats/OurPriority";
import ShopGram from "../Componats/ShopGram";


const Aboutus = () => {
  return (
    <div>
        {/* Banner Section */}
         <AboutBnner/>
{/* About Info */}
<AboutInfo/>

{/* Quality Priority Section */}
<OurPriority/>
{/* Shop Gram */}
<ShopGram/>
    </div>
  );
};

export default Aboutus;
