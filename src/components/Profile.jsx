import { useState } from "react";
import useData from "../hooks/useData";
import ProfileCard from "./ProfileCard";

function Profile({ localUsers }) {
  const apiUsers = useData();
  const [useApi, setUseApi] = useState(false);

  const users = useApi ? apiUsers : localUsers;

const toggleBlock = (
<<<<<<< HEAD
      <div className="text-[10px] sm:text-[12px]  mt-44  mb-12 " >{useApi ? "to see data from local..   " : "Click this button to fetch and display more users from the API instead of the limited local data..  "} 
      <button
=======
      <div className="text-[10px] sm:text-[12px]  mt-44  mb-12" >{useApi ? "to see data from local..   " : "Click this button to fetch and display more users from the API instead of the limited local data..  "} <button
      
>>>>>>> c896b50 (Update Profile component layout and behavior)
        onClick={() => setUseApi(!useApi)}
        className=" px-2 h-[20px] text-[8px] leading-[10px] 
                   bg-slate-900 text-white hover:bg-slate-700 
                   rounded-xl transform transition duration-300 
                   ease-out hover:scale-105"
      >
        {useApi ? "Show data from local" : "Test fetch cards data from API"}
      </button>


      <span className="text-[10px] ">  View Source Code on GitHub... <a
  href="https://github.com/HimAnshNA/ProfileCards"
  target="_blank"
 
  className="inline-block  px-2 py-[2px] h-[20px] text-[12px]    
                   bg-slate-900 text-white hover:bg-slate-700 
                   rounded-xl transform transition duration-300 
                   ease-out hover:scale-105"
>
  open github
</a>
</span>
</div>)


  return (
    <div className="min-h-screen flex items-center flex-col">
        {useApi && toggleBlock}
      <h1 className="text-2xl font-bold text-gray-800 m-10">
        Mini Profile Card Builder
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            user={user}
            useApi={useApi}
          />
        ))}
      </div>
{!useApi && toggleBlock}



    </div>
  );
}

export default Profile;

