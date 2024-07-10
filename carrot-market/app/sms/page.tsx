import Button from "@/components/Button";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

const SMS = () => {
    const { register, reset, handleSubmit } = useForm()
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Log in</h1>
                <h2 className="text-xl">Verify your phone number.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <Input
                    name="phoneNumber"
                    type="number"
                    placeholder="Phone number"
                    required
                    errors={[]}
                />
                <Input
                    name="code"
                    type="number"
                    placeholder="Verification code"
                    required
                    errors={[]}
                />
                <Button text="Verify" />
            </form>
        </div>
    );
};

export default SMS;