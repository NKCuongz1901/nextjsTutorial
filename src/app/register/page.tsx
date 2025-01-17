import RegisterForm from "./register-form";

export default function page() {

    return (
        <div>
            <h1 className="text-gray-300 text-center font-bold text-xl">Register Form</h1>
            <div className="flex justify-center">
                <RegisterForm />
            </div>

        </div>
    )
}
