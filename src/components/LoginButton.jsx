import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    // const { loginWithPopup } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick={()=> loginWithRedirect()}>Iniciar sesion</button>
    )

}

export default LoginButton;