import { FC } from "react";
import { ToggleWrapper } from "./toggle.styled";

type ToggleProps = {
    toggled?: boolean;
    onChange?: () => void;
};

const Toggle: FC<ToggleProps> = ({ toggled = false, onChange }) => {
    return (
        <ToggleWrapper $toggled={toggled} onClick={onChange}>
            <div className="ball"></div>
        </ToggleWrapper>
    );
};

export default Toggle;
