import Button from "@/components/Button";
import Input from "@/components/Input";

const Login = () => {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Log in with email and password.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <Input type="email" placeholder="Email" required errors={[]} />
                <Input
                    type="password"
                    placeholder="Password"
                    required
                    errors={[]}
                />
                <Button loading={false} text="Log in" />
            </form>
        </div>
    );
};

export default Login;