import { TbWashTemperature4, TbIroning3Filled, TbBleachOff, TbWashDrycleanOff, TbWashTumbleDry } from 'react-icons/tb';

const Description = () => {
  return (
    <div className="container text-xs mx-auto px-4 py-6">
      <section className="space-y-6">
        <p className="text-[#000000] text-[14px] text-start">
          This button-up shirt is designed with a relaxed silhouette, featuring sleeves that can be adjusted for a more personalized fit. It’s crafted from drapey, crinkle-texture fabric made from LENZING™ ECOVERO™ Viscose — a sustainable material derived from responsibly sourced wood-based fibres. This eco-friendly fabric is produced through a process that minimizes impact on forests, biodiversity, and water supply.
        </p>
         <div className='flex '>
          <div>

        <h2 className="text-[16px] font-sans text-[#000000]">Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Front button placket</li>
          <li>Adjustable sleeve tabs</li>
          <li>Babaton embroidered crest at placket and hem</li>
        </ul>

        <h2 className="text-[16px] font-sans text-[#000000]">Materials & Care</h2>
        <ul className="space-y-2 list-disc  text-gray-600">
          <li><strong>Content:</strong> 100% LENZING™ ECOVERO™ Viscose</li>
          <li><strong>Care:</strong> Hand wash, Imported</li>
        </ul>
          </div>
          <div>

        <h3 className="text-[16px] font-sans text-[#000000]">Materials Care</h3>
        <ul className=" pl-6 space-y-2 text-gray-600">
          <li>
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 border-2 border-gray-400 rounded-full">
              <TbWashTemperature4 className="w-5 h-5 text-gray-600" />
            </span>
            Machine wash at max. 30ºC. Short spin.
          </li>
          <li>
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 border-2 border-gray-400 rounded-full">
              <TbIroning3Filled className="w-5 h-5 text-gray-600" />
            </span>
            Iron at maximum 110ºC.
          </li>
          <li>
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 border-2 border-gray-400 rounded-full">
              <TbBleachOff className="w-5 h-5 text-gray-600" />
            </span>
            Do not bleach.
          </li>
          <li>
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 border-2 border-gray-400 rounded-full">
              <TbWashDrycleanOff className="w-5 h-5 text-gray-600" />
            </span>
            Do not dry clean.
          </li>
          <li>
            <span className="inline-flex items-center justify-center w-8 h-8 mr-3 border-2 border-gray-400 rounded-full">
              <TbWashTumbleDry className="w-5 h-5 text-gray-600" />
            </span>
            Tumble dry on medium heat.
          </li>
        </ul>
          </div>
         </div>
      </section>
    </div>
  );
};

export default Description;
