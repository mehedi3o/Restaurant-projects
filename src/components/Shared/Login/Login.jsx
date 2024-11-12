

const login = () => {
  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }
 

  return (

    <div>
        <div className="hero min-h-screen  bg-base-black">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body bg-sky-500 text-black">
        <div className="form-control">
        <h1 className="text-5xl text-white font-bold">Login now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
         <a href="#" className="label-text-alt link link-hover">Forget password?</a>
         </div>
        <div className="form-control">
          <label className="label">
           
          </label>
         
         
         </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    
    </div>
   
  </div>
  </div>
        </div>
  );
};

export default login;