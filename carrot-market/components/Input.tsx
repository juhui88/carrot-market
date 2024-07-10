
interface inputType {
    type: string,
    placeholder: string,
    required?: boolean,
    errors: string[],
    name: string
}
const Input = (props: inputType) => {
    return (
        <div className="flex flex-col gap-2">
            <input
                name={props.name}
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 px-2"
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
            />
            {props.errors.map((error, index) => (
                <span key={index} className="text-red-500 font-medium">
                    {error}
                </span>
            ))}
        </div>

    );
};

export default Input;