import * as React from 'react';
import './EditProfile.css';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Button, IconButton, Modal, TextField } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 8,
};
function EditChild({ dob, setDob }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <div className='birthdate-section' onClick={handleOpen}>
                <text>Edit</text>
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 300, height: 350 }}>
                    <div className='text'>
                        <h2>Edit date of birth?</h2>
                        <p>This can only be change few time.<br />
                            make sure  you enter the age of the<br />
                            person using account</p>
                        <input
                            type='Date'
                            onChange={e => setDob(e.target.value)}
                        />
                        <Button className='e-button' onClick={() => { setOpen(false) }} >Cancle</Button>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}

export default function EditProfile({ user, loggedInUser }) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [website, setWebsite] = React.useState('');
    const [dob, setDob] = React.useState('');

    const handleSaveInfo = async () => {
        const editedInfo = {
            name,
            bio,
            location,
            website,
            dob
        }
        if (editedInfo) {
            await axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, editedInfo)
            setOpen(false)
        }
    }

    return (
        <div>
            <button className='Edit-profile-btn' onClick={() => setOpen(true)}>Edit Profile</button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='modal'>
                    <div className='header'>
                        <IconButton onClick={() => { setOpen(false) }}> <CloseIcon /> </IconButton>
                        <h2 className='header-title'>Edit Profile</h2>
                        <button className='save-btn' onClick={handleSaveInfo} > Save </button>
                    </div>
                    <form className='fill-contant'>
                        <TextField className='text-field' fullWidth is='fullwidth' label='Name' variant='filled'
                            onChange={(e) => { setName(e.target.value) }} defaultValue={loggedInUser[0]?.name ? loggedInUser[0]?.name : ''} />
                        <TextField className='text-field' fullWidth is='fullwidth' label='Bio' variant='filled'
                            onChange={(e) => { setBio(e.target.value) }} defaultValue={loggedInUser[0]?.bio ? loggedInUser[0]?.bio : ''} />
                        <TextField className='text-field' fullWidth is='fullwidth' label='Location' variant='filled'
                            onChange={(e) => { setLocation(e.target.value) }} defaultValue={loggedInUser[0]?.location ? loggedInUser[0]?.location : ''} />
                        <TextField className='text-field' fullWidth is='fullwidth' label='Website' variant='filled'
                            onChange={(e) => { setWebsite(e.target.value) }} defaultValue={loggedInUser[0]?.website ? loggedInUser[0]?.website : ''} />
                    </form>
                    <div className='birthdate-section'>
                        <p>Birth Date</p>
                        <p>.</p>

                        <EditChild dob={dob} setDob={setDob} />
                    </div>
                    <div className='last-section'>
                        {
                            loggedInUser[0]?.dob ?
                                <h2>{loggedInUser[0]?.dob}</h2> :
                                <h2>
                                    {
                                        dob ? dob : 'Add your date of birth'
                                    }
                                </h2>
                        }
                        <div className='last-btn'>
                            <h2>Switch to professional</h2>
                            <ChevronRightIcon />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
