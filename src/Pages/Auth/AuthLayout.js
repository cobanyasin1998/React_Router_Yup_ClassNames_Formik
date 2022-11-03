import {Outlet} from 'react-router-dom'

export default function AuthLayout(){
    return(
        <div>
            Auth Page&nbsp;&nbsp;
            <Outlet/>
        </div>
    )
}