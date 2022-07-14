import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Profile() {
    let navigate = useNavigate();
    let { username } = useParams();

    return (
        <div>
            <div>Profile Page for {username}</div>
            <div>
                <Button variant="dark" onClick={() => {
                    navigate('/about')
                }}>
                    Go to About Page</Button>
            </div>
        </div>
    );
}

export default Profile;