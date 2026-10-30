import UserCard from "@/components/userCard/UserCard";








const UsersPage = async () =>{

    const res = await fetch(`http://localhost:5000/users`) ;
    const users = await res.json();

    
    return(
        <div className="">
            <h2 className="text-4xl text-black dark:text-foreground font-semibold text-center py-16">All User : {users.length}</h2>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 container mx-auto pb-10">
               {users.map(user => (
                <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );

};

export default UsersPage ;