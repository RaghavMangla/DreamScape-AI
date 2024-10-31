'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { useState } from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="w-full flex-1 flex items-center justify-center p-8">
        <SignIn.Root>
          <Clerk.Loading>
            {(isGlobalLoading) => (
              <>
                <SignIn.Step name="start">
                  <Card className="px-8 py-6 w-full max-w-md bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl shadow-2xl rounded-xl">
                    <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Sign In
                      </CardTitle>
                      <CardDescription className="w-full text-gray-400 text-center my-4">
                        Welcome! Get started right away by using your email. Your profile will be created and kept up to date automatically.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-center w-full">
                        <Clerk.Connection name="google" asChild>
                          <Button
                            variant="outline"
                            className="w-full bg-gray-700/50 border-gray-600/50 text-white hover:bg-gray-600/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading scope="provider:google">
                              {(isLoading) =>
                                isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                ) : (
                                  <div className="flex gap-2 items-center justify-center">
                                    <Clerk.Icon/>
                                    Google
                                  </div>
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </Clerk.Connection>
                        
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-gray-600/50"></span>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-gray-800/50 text-gray-400">
                            Or continue with
                          </span>
                        </div>
                      </div>

                      <Clerk.Field name="identifier" className="space-y-2">
                        <Clerk.Label asChild>
                          <Label className="text-gray-300 text-md font-medium pl-1">
                            Email
                          </Label>
                        </Clerk.Label>
                        <Clerk.Input asChild>
                          <Input className="py-1 w-full bg-gray-700/30 border border-gray-600/50 rounded-lg placeholder-gray-400 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200" />
                        </Clerk.Input>
                        <Clerk.FieldError className="text-sm text-red-400" />
                      </Clerk.Field>

                      <SignIn.Action submit asChild>
                        <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 active:scale-[0.98]" disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {(isLoading) => 
                              isLoading ? (
                                <Icons.spinner className="size-4 animate-spin" />
                              ) : (
                                'Continue'
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </SignIn.Action>
                    </CardContent>
                  </Card>
                </SignIn.Step>

                

                <SignIn.Step name="verifications">
                    <Card className="px-16 py-6 w-full max-w-md bg-gray-800/50 border border-gray-700/50 backdrop-blur-xl shadow-2xl rounded-xl">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Check your email
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-center">
                          Enter the verification code sent to your email
                        </CardDescription>
                        <p className="text-sm text-gray-400 text-center mt-2">
                          Welcome back <SignIn.SafeIdentifier />
                        </p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Clerk.Field name="code">
                          <Clerk.Label className="sr-only">Email verification code</Clerk.Label>
                          <div className="grid gap-y-2 items-center justify-center">
                            <div className="flex justify-center text-center">
                              <Clerk.Input
                                type="otp"
                                autoSubmit
                                className="flex justify-center has-[:disabled]:opacity-50"
                                render={({ value, status }) => {
                                  return (
                                    <div
                                      data-status={status}
                                      className="relative flex h-9 w-9 items-center justify-center border-y border-r border-gray-600/50 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-purple-500/50 data-[status=cursor]:ring-1 data-[status=cursor]:ring-purple-500/50 bg-gray-700/30 text-white"
                                    >
                                      {value}
                                    </div>
                                  )
                                }}
                              />
                            </div>
                            <Clerk.FieldError className="text-sm text-red-400 text-center" />
                            <SignIn.Action
                              asChild
                              resend
                              className="text-gray-400"
                              fallback={({ resendableAfter }) => (
                                <Button variant="link" size="sm" disabled className="text-gray-400">
                                  Didn't receive a code? Resend (
                                  <span className="tabular-nums">{resendableAfter}</span>)
                                </Button>
                              )}
                            >
                              <Button
                                
                                variant="link"
                                size="sm"
                                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                              >
                                Didn't receive a code? Resend
                              </Button>
                            </SignIn.Action>
                          </div>
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <SignIn.Action submit asChild>
                          <Button
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2.5 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 active:scale-[0.98]"
                            disabled={isGlobalLoading}
                          >
                            <Clerk.Loading>
                              {(isLoading) =>
                                isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                ) : (
                                  'Continue'
                                )
                              }
                            </Clerk.Loading>
                          </Button>
                        </SignIn.Action>
                      </CardFooter>
                    </Card>
                </SignIn.Step>
              </>
            )}
          </Clerk.Loading>
        </SignIn.Root>
      </div>
      <div className="hidden lg:flex flex-1 bg-gray-800/30 backdrop-blur-xl items-center justify-center p-12">
        <div className="w-full max-w-2xl">
          <video
            className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-gray-700/50"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/jazz.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}