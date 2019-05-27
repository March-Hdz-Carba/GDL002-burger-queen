import React from 'react';

const ButtonDelete = (props) => (
    <button type="button" class="btn btn-light" onClick={props.onClick} key={props.key}>
        Eliminar
    </button>
)

export default ButtonDelete;