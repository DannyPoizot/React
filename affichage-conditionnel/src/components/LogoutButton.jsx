import React from 'react';

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Déconnection
        </button>
    );
}

export default LogoutButton;