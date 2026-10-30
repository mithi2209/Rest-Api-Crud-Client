
"use client" ;

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { redirect, useRouter } from "next/navigation";

const AddUser = () => {

  const router = useRouter();

    const handleAddNewUser = async(e) =>{
      e.preventDefault();
       
      const formData = new FormData(e.currentTarget);
      const newUser = Object.fromEntries(formData.entries());


      const res = await fetch(`http://localhost:5000/users` , {

       method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }) ;
     
      const afterSubmit = await res.json() ;

      console.log("after submit" ,afterSubmit) ;

      if(afterSubmit.insertedId){
        alert("User Added Successfully") ;
        router.push("/users");

      }
   
    }
    
  return (
    <form onSubmit={handleAddNewUser}>
     
      <FieldGroup className=" max-w-4xl mx-auto min-h-screen py-20" >
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input name="name" id="fieldgroup-name" placeholder="Jordan Lee" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input
            id="fieldgroup-email"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
          <FieldDescription>
            We&apos;ll send updates to this address.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Add user

          </Button>
        </Field>
      </FieldGroup>
    
    </form>
  );
};

export default AddUser;
