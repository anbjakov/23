import PropTypes from 'prop-types'

const Button = ({children="ok", onClick})=>{
    return (
        <>
            <button className="btn btn-primary" onClick={onClick}>{children}</button>
        </>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
}

export default Button