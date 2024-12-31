import React from 'react'
import list1 from "../images/black-1.jpg";
import list2 from "../images/black-2.jpg";
import list3 from "../images/black-3.jpg";
import list4 from "../images/blue.jpg";
import list5 from "../images/brown-2.jpg";
import list6 from "../images/brown-3.jpg";
import list7 from "../images/brown.jpg";
import list8 from "../images/green.jpg";
import list9 from "../images/light-green-1.jpg";
import list10 from "../images/light-green-2.jpg";
import list11 from "../images/orange-1.jpg";
import list12 from "../images/pink-1.jpg";
import list13 from "../images/purple.jpg";
import list14 from "../images/white-1.jpg";
import list15 from "../images/white-2.jpg";
import list16 from "../images/white-3.jpg";
import list17 from "../images/white-4.jpg";
import list18 from "../images/white-5.jpg";
import list19 from "../images/white-6.jpg";
import list20 from "../images/black-8.jpg";
import list21 from "../images/brown-4.jpg";
import list22 from "../images/black-10.jpg";
import list23 from "../images/white-9.jpg";
import list24 from "../images/grey.jpg";
import list25 from "../images/grey-2.jpg";
import list26 from "../images/black-11.jpg";
import list27 from "../images/black-12.jpg";
import list28 from "../images/black-4.jpg";
import list29 from "../images/black-5.jpg";
import list30 from "../images/black-7.jpg";
import list31 from "../images/white-8.jpg";
import BlackFooter from '../Componats/BlackFooter';


const Shop = () => {
  return (
    <div>
         <div className="bg-custom-gradient text-center h-40  mt-20 pt-14 w-full">
            <h1 className='text-4xl'>New Arrival</h1>
            <p>Shop through our latest selection of Fashion</p>
        </div>
         <div className="main-container">
              <div className="container">
                <div className="list-grid">
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list11} alt=" " />
                      <img src={list14} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Ribbed Tank Top</h3>
                      <p>Price: $16.95</p>
                    </div>
        
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list8} alt=" " />
                      <img src={list13} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Ribbed modal T-shirt</h3>
                      <p>Price: $18.95</p>
                    </div>
                    
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list16} alt=" " />
                      <img src={list17} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Oversized Printed T-shirt</h3>
                      <p>Price: $10.00</p>
                    </div>
                    
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list2} alt=" " />
                      <img src={list12} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Oversized Printed T-shirt</h3>
                      <p>Price: $16.95</p>
                    </div>
                    
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list5} alt=" " />
                      <img src={list6} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>V-neck linen T-shirt</h3>
                      <p>Price: $114.95</p>
                    </div>
                    
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list9} alt=" " />
                      <img src={list10} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Loose Fit Sweatshirt</h3>
                      <p>Price: $10.00</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list28} alt=" " />
                      <img src={list29} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Regular Fit Oxford Shirt</h3>
                      <p>Price: $10.00</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list30} alt=" " />
                      <img src={list31} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Loose Fit Hoodie</h3>
                      <p>Price: $9.95</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list20} alt=" " />
                      <img src={list21} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Patterned scarf</h3>
                      <p>Price: $14.95</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list22} alt=" " />
                      <img src={list23} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Slim Fit Fine-knit Turtleneck Sweater</h3>
                      <p>Price: $18.95</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list24} alt=" " />
                      <img src={list25} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Slim Fit Fine-knit Turtleneck Sweater</h3>
                      <p>Price: $18.95</p>
                    </div>           
                  </div>
                  <div className="list-item">
                    <div className="list-img">
                      <img src={list26} alt=" " />
                      <img src={list27} alt=" " className="rear" />
                    </div>
                    <div className="list-info">
                      <h3>Slim Fit Fine-knit Turtleneck Sweater</h3>
                      <p>Price: $18.95</p>
                    </div>           
                  </div>
                </div>
              </div>
            </div>
            <center>
     <hr className="my-8 w-[90%]  border-gray-700" />
     </center>
     <div>
      <BlackFooter/>
     </div>
    </div>
  )
}

export default Shop