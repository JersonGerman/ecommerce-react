const User = ({logout}) => {

    

    return(
        <div className="text-center text-sm">
            <b className="block mb-2.5">{localStorage.getItem("userName")}</b>
            <button className="text-blue-500" onClick={logout}>
                Log out
            </button>
        </div>
    )
}
export default User;