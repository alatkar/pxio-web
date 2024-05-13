"use client"

import {useForm} from "react-hook-form"
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

import { Input} from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { RegisterSchema } from "@/schemas"
import { CardWrapper } from "./card-wrapper"
import { Button } from "../ui/button"
import { FormError } from "../form-errors"
import { FormSuccess } from "../form-success"
import { useState, useTransition } from "react"
import { register } from "@/actions/register"

export const RegisterForm = () => {
  const[isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
    
    setError("")
    setSuccess("")
    
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    })    
  }

  return (
    <CardWrapper headerLabel={"Create an account"} backButtonLabel={"Already have an account?"} backButtonHref={"/login"} showSocial={true}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="John Doe" 
                    type="name"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )
            }
          />

          <FormField
            control={form.control}
            name="company"
            render={({field}) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="AEC Firm LLC" 
                    type="company"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )
            }
          />

          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="john.doe@example.com" 
                    type="email"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )
            }
          />

          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="******" 
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )
            }
          />
        </div>
        <FormError message={error}/>
        <FormSuccess message={success}/>
        <Button type="submit" className="w-full" disabled={isPending}>
          Register
        </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
