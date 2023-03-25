import React from 'react'

const DropDown = ({
  options,
  selected,
  onChange, }) => {
  return (
    
    <select
      className="DropDownBox"
      value={selected}
      onChange={onChange}
    >
      
      {options.map((option, ind) => {
        return (
          <option
            key={ind}
            value={option.value}
          >
            {option.label}
          </option>
        );
      })}
      
    </select>
    
  )
}

export default DropDown