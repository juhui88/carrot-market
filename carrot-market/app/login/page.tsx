"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleForm } from "./action";
//import { useActionState } from "react";
import { useFormState } from "react-dom";

const Login = () => {
    const [state, formAction] = useFormState(handleForm, null);

    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Log in with email and password.</h2>
            </div>
            <form action={formAction} className="flex flex-col gap-3">
                <Input name="email" type="email" placeholder="Email" required errors={[]} />
                <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    errors={state?.errors ?? []}
                />
                <Button text="Log in" />
            </form>
        </div>
    );
};

export default Login;