import ban10 from '../../assets/Photo/Banner/ban10.jpg'

const Cover = () => {
    return (
        <div className='mt-5 py-5 '>
         <div className='text-white items-end'>
         <img src={ban10} alt="" width={1200} height={560}/>
           <div className='-mt-72 align-middle	text-end me-20	'>
           <p className='uppercase text-right me-20 '>we seved you a seat</p>
           <h1 className='text-5xl font-bold'>Make an <b></b> online <br /> <span className='me-16 font-bold'>Reservation</span> </h1>
           <div>
           <p className=''>When the going tough, the tough get grilling.<br /><span>Bringing heart to you meat.</span><br />No one can compete with our meat</p>

        

           
           </div>
            
        
           </div>
         </div>
         {/* new  */}
         <section className='text-end me-28 mt-5'>

         <button className="btn btn-outline btn-warning ">Reservation</button>
         </section>
        </div>
    );
};

export default Cover;