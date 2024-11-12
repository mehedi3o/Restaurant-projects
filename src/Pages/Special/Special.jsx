

import men1 from '../../assets/Photo/menu/men1.jpg'


const Special = () => {
   



    return (
        <div className="mt-10 py-20">
            <div className="grid grid-cols-2 mx-auto gap-5">
            <div className="text-white items-center px-5 ms-5 py-5">
            <p className="uppercase py-2 text-center">delight in every bite</p>
           <h1 className="uppercase text-5xl font-bold py-3 text-center">Our chef <br /> recommend</h1>
            <p className='py-5 text-center'>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed.Crafit beer elit seitan exercitation.</p>
            <h3 className="text-center text-3xl uppercase border-y-2 py-4 my-5 mx-auto border-orange-400 font-semibold w-6/12 items-center">view menus

            </h3>
            </div>
           <div className='picture-slider'>
           <img className='translate-y-10 ' src={men1} alt="" />
           </div>
            </div>


        </div>
    );
};

export default Special;