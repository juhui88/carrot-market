"use client"

import { redirect } from "next/navigation";
import { useFormStatus } from "react-dom";

interface ButtonType {
    text: string,
    href?: string
}


const Button = (props: ButtonType) => {
    const { pending } = useFormStatus()

    const onClick = () => {
        if (props.href) {
            redirect(`${props.href}`)
        }
    }

    return (
        <button
            disabled={pending}
            onClick={() => onClick()}
            className="w-full btn flex items-center justify-center bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors  disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
        >
            {pending ? "로딩중" : props.text}
        </button>
    );
};

export default Button;