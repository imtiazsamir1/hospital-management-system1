import { Link } from "react-router-dom";


const Cards = () => {
    return (
        <div className="card bg-base-150 w-950 shadow-xl">
      
        <div className="card-body items-center text-center">
          <div className="flex w-full flex-col"><div className="divider divider-info text-4xl">Doctors</div></div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">DR. MIR JAKIB HOSSAIN</div>
              <div className="text-sm opacity-50">Associate Professor</div>
            </div>
          </div>
        </td>
        <td>
        MBBS, FCPS (MEDICINE), MD (GASTRO).
          <br />
         
        </td>
       
        <th>
          <button className="btn btn-ghost btn-xs"><Link to='/detail1'>Details</Link></button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Prof. Dr. Sharmin Rahman</div>
              <div className="text-sm opacity-50">Professor</div>
            </div>
          </div>
        </td>
        <td>
        M B B S (D A C), F C P S (OBS & Gynae)
          <br />
         
        </td>
       
        <th>
          <button className="btn btn-ghost btn-xs"><Link to='/detail2'>Details</Link></button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Dr. Rokeya Khatun</div>
              <div className="text-sm opacity-50">Assistant Professor</div>
            </div>
          </div>
        </td>
        <td>
        MBBS, MCPS (Gynae & Obs), DGO
          <br />
          
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs"><Link to='/detail3'>Details</Link></button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Prof. Dr. Kazi Shahnaz Begum</div>
              <div className="text-sm opacity-50">Professor</div>
            </div>
          </div>
        </td>
        <td>
        MBBS, FCPS (Gynae & obs)
          <br />
          
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs"><Link to='/detail4'>Details</Link></button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
     
    </tfoot>
  </table>
</div>
         
        </div>
      </div>
    );
};

export default Cards;