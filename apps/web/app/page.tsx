"use client"


import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Page() {

  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.addUser)
  return (
    <>
    <Authenticated>
      <UserButton />
      
        <div className="flex flex-col items-center justify-center min-h-svh">
          <p>apps/web</p>
          <Button onClick={() => addUser()}>Add Uuser</Button>
          <div className="max-w-sm w-full mx-auto">
            {JSON.stringify(users, null, 2)}
          </div>
        </div>
     
    </Authenticated>
    <Unauthenticated>
      <p>Must be Signed in</p>
      <SignInButton />
    </Unauthenticated>
    </>
  )
}
