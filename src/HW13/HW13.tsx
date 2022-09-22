import React from 'react';
import {postAPI} from "./RequestsAPI";

const Hw13 = () => {
    return (
        <div>
            <input onChange={postAPI} type="checkbox"/>
        </div>
    );
};

export default Hw13;