import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div style={{backgroundColor:"grey", paddingTop:"20px", marginTop:"20px"}}>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>

                <JSONPretty data={user} />

                {/* <pre>
                    {JSON.stringify(user)}
                </pre> */}
            </div>
        )
    )
};

export default Profile;