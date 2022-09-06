/** EXTERNALS **/


import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@stitches/react';


/** LOCALS **/


/** HELPERS **/


const Button = styled('button', {
    boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
    borderRadius: 6,
    fontFamily: 'Noto Sans JP',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '20px',
    textAlign: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: 'pointer',
    margin: "0 5px",

    variants: {
        color: {
            default: {
                color: '#3F3F3F',
                background: '#E0E0E0',
                borderColor: '#E0E0E0',
                $$focusColor1: '#AEAEAE',
                '&:hover': {
                    background: '$$focusColor1',
                    borderColor: '$$focusColor1',
                },
                '&:focus': {
                    background: '$$focusColor1',
                    borderColor: '$$focusColor1',
                },
            },
            primary: {
                color: '#FFFFFF',
                background: '#2962FF',
                borderColor: '#2962FF',
                $$focusColor2: '#0039CB',
                '&:hover': {
                    background: '$$focusColor2',
                    borderColor: '$$focusColor2',
                },
                '&:focus': {
                    background: '$$focusColor2',
                    borderColor: '$$focusColor2',
                },
            },
            secondary: {
                color: '#FFFFFF',
                background: '#455A64',
                borderColor: '#455A64',
                $$focusColor3: '#1C313A',
                '&:hover': {
                    background: '$$focusColor3',
                    borderColor: '$$focusColor3',
                },
                '&:focus': {
                    background: '$$focusColor3',
                    borderColor: '$$focusColor3',
                },
            },
            danger: {
                color: '#FFFFFF',
                background: '#D32F2F',
                borderColor: '#D32F2F',
                $$focusColor4: '#9A0007',
                '&:hover': {
                    background: '$$focusColor4',
                    borderColor: '$$focusColor4',
                },
                '&:focus': {
                    background: '$$focusColor4',
                    borderColor: '$$focusColor4',
                },
            },
        },
        size: {
            sm: {
                padding: '6px 12px'
            },
            md: {
                padding: '8px 16px',
            },
            lg: {
                padding: '11px 22px'
            },
        },
        theme: {
            outline: {
                background: '#FFFFFF',
            },
            text: {
                background: '#FFFFFF',
                border: 'none',
                boxShadow: 'none',
            }
        },
        disableShadow: {
            true: {
                boxShadow: 'none',
            },
        },
    },

    compoundVariants: [
        // outline
        {
            color: 'default',
            theme: 'outline',
            css: {
                borderColor: '#E0E0E0',
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(224, 224, 224, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(224, 224, 224, 0.1)',
                },
            },
        },
        {
            color: 'primary',
            theme: 'outline',
            css: {
                color: '#2962FF',
                borderColor: '#2962FF',
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(41, 98, 255, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(41, 98, 255, 0.1)',
                },
            },
        },
        {
            color: 'secondary',
            theme: 'outline',
            css: {
                color: '#455A64',
                borderColor: '#455A64',
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(69, 90, 100, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(69, 90, 100, 0.1)',
                },
            },
        },
        {
            color: 'danger',
            theme: 'outline',
            css: {
                background: '#FFFFFF',
                color: '#D32F2F',
                borderColor: '#D32F2F',
                '&:hover': {
                    background: 'rgba(211, 47, 47, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(211, 47, 47, 0.1)',
                },
            },
        },

        // text
        {
            color: 'default',
            theme: 'text',
            css: {
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(224, 224, 224, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(224, 224, 224, 0.1)',
                },
            },
        },
        {
            color: 'primary',
            theme: 'text',
            css: {
                color: '#2962FF',
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(41, 98, 255, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(41, 98, 255, 0.1)',
                },
            },
        },
        {
            color: 'secondary',
            theme: 'text',
            css: {
                color: '#455A64',
                background: '#FFFFFF',
                '&:hover': {
                    background: 'rgba(69, 90, 100, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(69, 90, 100, 0.1)',
                },
            },
        },
        {
            color: 'danger',
            theme: 'text',
            css: {
                background: '#FFFFFF',
                color: '#D32F2F',
                '&:hover': {
                    background: 'rgba(211, 47, 47, 0.1)',
                },
                '&:focus': {
                    background: 'rgba(211, 47, 47, 0.1)',
                },
            },
        },
    ],
});


/** MAIN **/


const ButtonComponent = function(props) {
    const {
        children,
        color,
        size,
        theme,
        disableShadow,
        disabled,
    } = props;

    return (
        <Button
            color={color}
            size={size}
            theme={theme}
            disableShadow={disableShadow}
            disabled={disabled}
        >
            {children ?? 'Button'}
        </Button>
    )
};

ButtonComponent.propTypes = {
    theme: PropTypes.oneOf(['outline', 'text']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
    disableShadow: PropTypes.bool,
};

ButtonComponent.defaultProps = {
    size: 'md',
    color: 'default',
    disableShadow: false,
};

export default ButtonComponent;
