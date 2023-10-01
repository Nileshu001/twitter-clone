import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import React from 'react';
import './Post.css';


const Post = ({p}) => {
    const {name, username, photo, post, userProfilePic}= p;
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src={userProfilePic} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            {name}{' '}
                            <span className='post_headerSpaical'>
                                <VerifiedIcon className='post_badge'/> @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>{post}</p>
                    </div>
                    <img src={photo} alt='' width='500' className='userPostImg'/>
                    <div className='post_footer'>
                        <ChatBubbleOutlineIcon className='post_footer_Icon' fontSize='small' />
                        <RepeatIcon className='post_footer_Icon' fontSize='small' />
                        <FavoriteBorderIcon className='post_footer_Icon' fontSize='small' />
                        <PublishIcon className='post_footer_Icon' fontSize='small' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Post;
