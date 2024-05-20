import { useEffect, useRef, useState } from "react"

import { useIcons } from "../../contexts/Icons"

import Window from "../Window/Window"
import ProfileButton from "./components/ProfileButton"

import "./Profile.css"

type ProfileProps = {
    picture: string,
    name: string,
    surname: string,
    email: string,
}

const Profile = ({
    picture,
    name,
    surname,
    email,
}: ProfileProps) => {

    const {
        FaCog, PiSignOutBold, SiClerk,
    } = useIcons();

    const [loading, _setLoading] = useState(false);
    
    const [display, setDisplay] = useState(false);
    const switchDisplay = () => setDisplay(p => !p)
    const profileId = useRef(`id-${crypto.randomUUID()}`);

    const handleOutsideClick = (e: MouseEvent) => {
        const {target} = e;
        if(target instanceof Element)
        if(!target.closest(`#${profileId.current}`))
            return switchDisplay()
    }

    useEffect(() => {
        if(display)
            window.addEventListener("click", handleOutsideClick)
        else window.removeEventListener("click", handleOutsideClick)
        return () => window.removeEventListener("click", handleOutsideClick)
    }, [display])

    return <div 
        className="profile__container"
        id={profileId.current}
    >
        <img 
            className="profile__bubble"
            src={picture} 
            alt={`${name} ${surname}`}
            onClick={switchDisplay}
        />
        {
            display 
                && <Window 
                    maxwidth="350px"
                    top="100%"
                    right="0"
                >
                    <div className="profile__details">
                        <img 
                            className="profile__bubble"
                            src={picture} 
                            alt={`${name} ${surname}`} 
                        />
                        <div className="profile__info-wrapper">
                            <h3 className="profile__fullname">
                                {`${name} ${surname}`}
                            </h3>
                            <span className="profile__email">
                                {email}
                            </span>
                        </div>
                    </div>
                    <div className="profile__settings">
                        <ProfileButton
                            role="button"
                            Icon={FaCog}
                        >
                            Manage account
                        </ProfileButton>
                        <ProfileButton
                            loading={loading}
                            Icon={PiSignOutBold}
                        >
                            Sign out
                        </ProfileButton>
                    </div>
                    <div className="profile__disclaimer">
                        <span className="profile__disclaimer__content">
                            Secured by  <span className="profile__disclaimer--clerk"><SiClerk size={16} /> Clerk</span>
                        </span>
                    </div>
                </Window>
        }
    </div>
}

export default Profile
