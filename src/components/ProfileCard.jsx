function ProfileCard({ user, useApi }) {
  return (
    <div
      className="w-[230px] h-[230px] rounded-xl bg-slate-50 flex shadow-md 
                 items-center text-center justify-center flex-col 
                 hover:bg-slate-200 transform transition duration-300 ease-out 
                 hover:scale-105"
    >
      <img
        src={user.profileImg}
        alt={user.name}
        className="w-20 h-20 rounded-full mb-4"
      />

      <h1 className="text-xl font-bold mt-1">{user.name}</h1>

      <h2 className="text-sm font-bold text-slate-600 mt-1">
        {user.role}
      </h2>

      <p className="text-sm text-gray-400 mt-1">
        {useApi ? user.role : user.description}
      </p>
    </div>
  );
}

export default ProfileCard;
