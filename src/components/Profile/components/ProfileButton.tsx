import type { IconType } from "react-icons"

import { useIcons } from "../../../contexts/Icons"

import { cn } from "../../../utils/cn"

import "./ProfileButton.css"

type ProfileButton = {
  children: string | (() => string),
  Icon?: IconType,
  role?: "submit" | "reset" | "button",
  onClick?: () => void,
  loading?: boolean,
  disabled?: boolean,
}

const ProfileButton = ({
  children,
  Icon,
  role,
  onClick,
  loading,
  disabled,
}: ProfileButton) => {

  const {AiOutlineLoading3Quarters} = useIcons();

  return <button
    type={role}
    className={cn(
      "profile-button btn",
      loading ? "loading" : "",
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {
      Icon
        && <Icon
          size={20}
          className="profile-button__icon"
        />
    }
    <span className="profile-button__task">
      {
        children instanceof Function 
          ? children()
          : children
      }
    </span>
    {
      loading
        && <AiOutlineLoading3Quarters
          size={30}
          className="profile-button__loading"
        />
    }
  </button>
}

export default ProfileButton
