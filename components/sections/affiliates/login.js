const loginForm = props => {
    return (
        <div className="w-1/4 h-300 pt-12">
            <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Username" required />
            <input className="w-full h-12 text-xl my-2 pl-2" placeholder="Password" required />
            <button
                className="w-1/2 block mx-auto h-12 mt-2 hover:bg-red-dark bg-red-light text-white cursor-pointer"
                type="submit">
                Login
            </button>
        </div>
    );
};

export default loginForm;
