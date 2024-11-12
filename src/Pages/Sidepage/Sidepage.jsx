
import ban11 from '../../assets/Photo/Banner/ban11.jpg'
import './Sidepage.css'
const SidePage = () => {
    return (
        <div className='mt-32'>
            <section className="grid grid-cols-2 gap-5 slow-text-animation">
           <div>
           <img src={ban11} alt="" />
           </div>
               <div className='text-white text-center mt-10'>
               <p className='uppercase text-xl py-4 mt-2 side-p'>Your special occasion destination</p>
                <h1 className='text-3xl  text-orange-400 font-bold py-4 side-1'>The Wilma is a premium taste that years to be savored, ground beef between your teeth</h1>
               </div>
            </section>
        </div>
    );
};

export default SidePage;