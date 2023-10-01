import React, { useState } from 'react';
import './sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import MoreIcon from '@mui/icons-material/More';
import SidebarOptions from './SidebarOptions';
import CustomeLink from './CustomeLink';
import { Avatar, Button, IconButton, MenuItem, Menu, ListItemIcon, Divider } from '@mui/material';
import UseLoggedInUser from '../../hooks/useLoggedInUser';

const Sidebar = ({ handleLogout, user }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [loggedInUser] = UseLoggedInUser();

    const userProfilePic = loggedInUser[0]?.profileImage ? loggedInUser[0]?.profileImage :
        'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const result = user[0]?.email?.split('@')[0];

    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitterIcon' />
            <CustomeLink to='/home/feed' className='customeLink'>
                <SidebarOptions active Icon={HomeIcon} /><h3>Home</h3>
            </CustomeLink>
            <CustomeLink to='/home/notifications' className='customeLink'>
                <SidebarOptions active Icon={NotificationsIcon} /><h3>Notifications</h3>
            </CustomeLink>
            <CustomeLink to='/home/explore' className='customeLink'>
                <SidebarOptions active Icon={SearchIcon} /><h3>Explore</h3>
            </CustomeLink>
            <CustomeLink to='/home/messages' className='customeLink'>
                <SidebarOptions active Icon={MailOutlineIcon} /><h3>Messages</h3>
            </CustomeLink>
            <CustomeLink to='/home/bookmarks' className='customeLink'>
                <SidebarOptions active Icon={BookmarkBorderIcon} /><h3>Bookmarks</h3>
            </CustomeLink>
            <CustomeLink to='/home/lists' className='customeLink'>
                <SidebarOptions active Icon={ListAltIcon} /><h3>Lists</h3>
            </CustomeLink>
            <CustomeLink to='/home/profile' className='customeLink'>
                <SidebarOptions active Icon={PermIdentityIcon} /><h3>Profile</h3>
            </CustomeLink>
            <CustomeLink to='/home/more' className='customeLink'>
                <SidebarOptions active Icon={MoreIcon} /><h3>More</h3>
            </CustomeLink>
            <Button variant='outlined' className='sidebar_tweet'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp tweetIcon">
                    <g>
                        <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                        </path>
                    </g>
                </svg>
                <h3>Tweet</h3>
            </Button>

            <div className='Profile_info' >
                <Avatar src={userProfilePic} />
                <div className='user_info'>
                    <h4>
                        {
                            loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName
                        }
                    </h4>
                    <h5>@{result}</h5>
                </div>
                <IconButton
                    size='small'
                    sx={{ sm: 2 }}
                    aria-controls={openMenu ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={openMenu ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </IconButton>
                <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className='Profile_info1'>
                        <Avatar src={userProfilePic} />
                        <div className='user_info subUser_info'>
                            <div>
                                <h4>
                                    {
                                        loggedInUser[0]?.name ? loggedInUser[0]?.name : user && user[0]?.displayName
                                    }
                                </h4>
                                <h5>@{result}</h5>
                            </div>
                            <ListItemIcon className='done_icon'><DoneIcon /></ListItemIcon>
                        </div>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClose={handleClose}>Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out @{result}</MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Sidebar;
