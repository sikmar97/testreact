import React, { useContext } from 'react'
import {UserContext} from '../../shared/global/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return(
        <div>
            <img className="profileImage" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="profileName">{authenticatedUser}</span>
        </div>
    )
}