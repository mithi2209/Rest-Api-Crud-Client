import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const EditProfileDialog = ({ user }) => {

    const router = useRouter() ;

  
    const handleUpdateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updateUser = Object.fromEntries(formData.entries());

 

    const res = await fetch(`http://localhost:5000/users/${user._id}` , {
        method : "PATCH" ,
        headers: { 
            "Content-Type" : "application/json"
         } ,
        body : JSON.stringify(updateUser) ,
    })
    const result = await res.json() ;

    if(result.modifiedCount > 0){
        alert("User Data Updated Successfully ..");
        router.refresh() ;
    }

  };

  return (
    <Dialog>
      <DialogTrigger render={<Button>Edit</Button>} />

      <DialogContent className="sm:max-w-sm">

        <form onSubmit={handleUpdateUser}>

          <DialogHeader className="px-3 py-4">
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="px-3 pb-2">
            <Field className="mb-2">
              <Label htmlFor="name-1" className="mb-2">
                Name
              </Label>
              <Input
                id="name-1"
                name="name"
                type="text"
                defaultValue={user.name}
              />
            </Field>
            <Field>
              <Label htmlFor="email-1" className="mb-2">
                User Email
              </Label>
              <Input
                id="email-1"
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />

            <DialogClose render={<Button type="submit">Save changes</Button>} />
            
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
