import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";


const CustomTextWidget = (props) => {
  const additional = props.schema?.__additional_property; // check if the field is additional
  const name = (additional? "Value" : props.label) // || props.id?.split('_')[-1].trim()
  const focused=props.options?.focused // true for datetime-local
  const prettifiedName = name || 'Enter a value'
  const style = {
    display : "flex",
    alignItems : "center",
  }
  return (
    <>
      <div key={props.id} style={style}>
        <TextField
          variant={additional ? "standard" : "outlined"}
          size="small"
          focused={focused}
          type={props.options?.inputType}
          key={props.id}
          value={additional && props?.value==="New Value" ? "" : props?.value } // remove the default value i.e. New Value for additionalFields
          id={props.id}
          error={props.rawErrors?.length > 0}
          onChange={e => props?.onChange(e.target.value=== "" ? props.options.emptyValue : e.target.value)}
          label={`${prettifiedName}`}
          InputProps={{
            style : { padding : "0px 0px 0px 0px" },
            endAdornment : (<InputAdornment position="start">
              {props.rawErrors?.length > 0 && (
                  <IconButton component="span" size="small">
                   /!\
                  </IconButton>
              )}
              {props.schema?.description && (
                  <IconButton component="span" size="small">
                   ?
                  </IconButton>
              )}
            </InputAdornment>),
          }} />
      </div>
    </>
  )
}

export default CustomTextWidget;
