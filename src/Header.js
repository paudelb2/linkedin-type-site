import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  const user = useSelector(selectUser);


  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };


  return (
    <div className='header'>
      <div className="header__left">
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645733660~hmac=f34af081643f1eae0a49a5b1923c41b2"
          alt="" />


        <div className="header__search">
          <SearchIcon />
          <input placeholder='Search' type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messages' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar = {true}
        title = "me" onClick={logoutOfApp} />
      </div>
    </div>

  )
}

export default Header