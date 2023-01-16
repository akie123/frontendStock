
import React from 'react'
import Button from '@mui/material/Button';

const Button1 = ({ children, color, disabled, size, sx, variant }) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default Button1