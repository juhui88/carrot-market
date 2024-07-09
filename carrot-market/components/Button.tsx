"use client"

import { useRouter } from "next/navigation";

interface ButtonType {
    text: string,
    href?: string,
    loading?: boolean
}


const Button = (props: ButtonType) => {
    const router = useRouter()

    const onClick = () => {
        if (props.href) {
            router.push(`${props.href}`)
        }
    }

    return (
        <button
            disabled={props.loading}
            onClick={() => onClick()}
            className="w-full btn flex items-center justify-center bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors  disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
        >
            {props.text}
        </button>
    );
};

export default Button;