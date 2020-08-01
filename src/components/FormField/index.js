import React from 'react';

function FormField({label, type, name, value, onChange}){
    return(
        <div>
        <label>
          {label}:
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    )
}

export default FormField;