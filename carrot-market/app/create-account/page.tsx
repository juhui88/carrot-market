import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

const CreateAccount = () => {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        placeholder="Username"
                        required
                        errors={[]}
                    />
                    <Input
                        type="text"
                        placeholder="Email"
                        required
                        errors={[]}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        required
                        errors={[]}
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        errors={[]}
                    />
                </div>
                <Button
                    loading={true}
                    text="Create account"
                />
            </form>
            <div className="w-full h-px bg-neutral-500" />
            <div>
                <Button
                    text="💬 Continue with SMS"
                    href="/sms"
                />
            </div>
        </div>
    );
};

export default CreateAccount;