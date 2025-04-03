export default function Login() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Login</h1>
            <form className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="border p-2" required />
                <input type="password" placeholder="Password" className="border p-2" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
}