import './button.style.scss';

export const Button = (props) => {
    const { className = '', children, ...rest } = props;
    return <button
        className={className + ' btn_button btn btn-md btn-light'}
        type="button"
        {...rest}>
        {children}
    </button>

}

Button.propTypes = {}