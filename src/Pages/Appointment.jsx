import { useLoaderData } from "react-router-dom";


const Appointment = () => {
    const users = useLoaderData()
    return (
        <div>
              <div >
              <h2>{users.length}</h2>
         <div className="mt-8 mb-8">
            {
            users.map(user => <p className="mockup-window bg-base-300 border pt-8 pb-8 pl-12 mt-8 mb-8" key={user._id}> 
            Name:  {user.name}<br/>
            Email:  {user.email}<br/>
            Mobile Number: {user.number}<br/>
            Date Of Birth: {user.dob}<br/>
            Problem:  {user.comment}</p> )
        }
         </div>
              </div>
        
        </div>
    );
};

export default Appointment;