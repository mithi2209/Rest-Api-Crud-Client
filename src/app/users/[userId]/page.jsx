


const UserDetailPage = async ({params}) => {

    const { userId } = await params ;
    const res = await fetch(`http://localhost:5000/users/${userId}`) ;

    const user = await res.json() ;

    return (
        <div className="text-center py-10 font-medium text-3xl space-y-2">
           <h2> User detail : {userId} </h2>
           <p>Name : {user.name}</p>
           <p>Email : {user.email} </p>
        </div>
    );
};

export default UserDetailPage;