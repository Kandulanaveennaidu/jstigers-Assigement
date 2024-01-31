import { AiOutlineCodeSandbox } from "react-icons/ai";

const Logo = ({ fontSize = 60 }) => {
    return (
        <AiOutlineCodeSandbox fontSize={fontSize} color="var(--accent_color)" />
    )
}

export { Logo }