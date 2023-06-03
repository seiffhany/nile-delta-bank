interface CustomButtonProps {
    body: string;
    style?: string;
    type?: "button" | "submit" | "reset" | undefined;
    handleClick?: () => void;
}

const CustomButton = ({ body, style, type, handleClick }: CustomButtonProps) => {
    return (
        <button type={type} className={style} onClick={handleClick}>
            {body}
        </button>
    );
}

export default CustomButton;