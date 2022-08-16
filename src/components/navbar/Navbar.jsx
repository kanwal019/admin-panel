import "./navbar.scss"
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import ListAltTwoToneIcon from '@mui/icons-material/ListAltTwoTone';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchTwoToneIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageTwoToneIcon className="icon" />
                    English
                </div>
                <div className="item">
                    <DarkModeTwoToneIcon className="icon" />
                </div>
                <div className="item">
                    <FullscreenExitTwoToneIcon className="icon" />
                </div>                
                <div className="item">
                    <NotificationsNoneTwoToneIcon className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleTwoToneIcon className="icon" />
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListAltTwoToneIcon className="icon" />
                </div>
                <div className="item">
                    <img src="https://wonderfulengineering.com/wp-content/uploads/2014/07/display-wallpaper-28.jpg" className="avatar" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar