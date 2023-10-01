import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UseLoggedInUser = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [loggedInUser, seLoggedInUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/loggedInUser?email=${email}`)
            .then(res => res.json())
            .then(data => {
                seLoggedInUser(data);
            })
    }, [email, loggedInUser])

    return [loggedInUser, seLoggedInUser]
}

export default UseLoggedInUser;
