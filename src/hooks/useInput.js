import { useState } from "react";

const useInput = (initial) => {
    const [value, setValue] = useState(initial);

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return { value, onChange }
};

export default useInput;