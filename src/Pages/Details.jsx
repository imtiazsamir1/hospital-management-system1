/* eslint-disable no-undef */
import './Details.css';

const Details = () => {

const handleAddUser= (event)=>{
  event.preventDefault();
  const form = event.target;
  const name = form?.name?.value;
  const email = form?.email?.value;
  const number = form?.number?.value;
  const dob = form?.dob?.value;
  const comment = form?.comment?.value;
  
  const user={name,email,number,dob,comment}
  console.log(user);

  fetch('http://localhost:5000/users',
    {method:'POST',
    headers:{
    'content-type':'application/json'
  },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{console.log('inside post',data);
  if(data.insertedId)
  {
  alert('Appointment Add Successfully')
  form.reset();}
    //const newUsers = [...users,data]
    //setUsers(newUsers);
    
  })
}

  return (
    <div className='items-center text-center'>
      <h5 className='text-4xl'>Appointment </h5>
      <div className="flex w-full flex-col"><div className="divider divider-neutral">Form</div></div>
      <form onSubmit={handleAddUser}>
        <h1>Name*</h1>
        <input className='textfild'  type="text" name="name" id=""/>
        <br/>
        <h1>Email*</h1>
        <input className='textfild' type="email" name="email" id=""/>
        <br/>
        <h1>Mobile Number*</h1>
        <input className='textfild' type="number" name="number" id=""/>
        <br/>
        <h1>Date Of Birth*</h1>
        <input className='textfild'  type="text" name="dob" id=""/>
        <br/>
        <h1>Problem*</h1>
        <input className='textfild' type="text" name="comment" id=""/>
        <br/>
        
        <input className='btn btn-neutral' type="submit" value="Add User"/>
      </form>
    </div>
  );
};

export default Details;