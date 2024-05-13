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

import { LoginSchema } from "@/schemas"
import { CardWrapper } from "./card-wrapper"
import { Button } from "../ui/button"
import { FormError } from "../form-errors"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"

export const LoginForm = () => {
  const[isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
    
    setError("")
    setSuccess("")
    
    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    })
    
  }

  return (
    <CardWrapper headerLabel={"Please Login to Continue"} backButtonLabel={"Registration by invite only!"} backButtonHref={"/"} showSocial={true}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
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
          Login
        </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
