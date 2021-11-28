import UserProfileImage from '../Images/profile.png';


export const UserProfile = () =>{

    return(
        <div className="flex">
            <div className="user-profile ml-4">
                <div className="w-14">
                    <img className="w-full" src={UserProfileImage} alt="profile"/>
                </div>
            </div>
            <div className="user-name">
                <h3 className="text-gray-200 text-xl">Name</h3>
                <h2 className="text-gray-300 text-sm">Role</h2>
            </div>
        </div>
    )
}