

"use client" ;

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import Link from "next/link";
import { useRouter } from "next/navigation";
import EditProfileDialog from "../editProfile/EditProfile";


export default function UserCard({ user }) {

  const router = useRouter() ;
  const { _id } = user ;

  const handleDeleteUser = async (id) =>{
  

    const res = await fetch(`http://localhost:5000/users/${id}` , {
      method : "DELETE" ,
    
    }) ;
    const afterDelete = await res.json() ;
    console.log("after deleting" , afterDelete) ;

    if(afterDelete .deletedCount > 0){
      alert("User Deleted Successfully !") ;
      router.refresh();

    }
  }
  return (
    <Card className="w-full max-w-sm lg:max-w-xl ">
      <CardHeader className="px-6 pt-4">
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link href={`/users/${user._id}`}>
            <Button variant="link">View Detail</Button>
          </Link>
          
        </CardAction>
      </CardHeader>
      <CardContent className="px-6 py-4">
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder={user.name}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={user.email}
                required
              />
            </div>
          
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex  gap-2">
        <Button type="submit" className="">
          Login
        </Button>

        <Link className="w-full" href="/users/add">
          <Button variant="outline" className="">
            Add New User
          </Button>
        </Link>

        
        <EditProfileDialog user={user}></EditProfileDialog>

          <Button 
          variant="destructive" 
          onClick={() =>handleDeleteUser(_id)}>
            Delete
          </Button>
        
      </CardFooter>
    </Card>
  )
}
