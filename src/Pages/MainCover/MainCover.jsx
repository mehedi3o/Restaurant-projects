

const MainCover = ({img, title}) => {
    return (
        <div >
            <div className="hero min-h-[650px] py-5 mt-10 " style={{backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 mt-5 py-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default MainCover;