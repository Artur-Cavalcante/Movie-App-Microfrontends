import React from 'react';
import { Alert } from 'reactstrap';

function MessageBox(props){
    return(
        <div>
            <Alert style={{textAlign: 'center'}} color="danger">
                {props.name}
            </Alert>
        </div>
    );
};

export default MessageBox;