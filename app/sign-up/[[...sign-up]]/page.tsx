'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { lazy, Suspense, useState } from "react"
import * as Clerk from "@clerk/elements/common"
import * as SignUp from "@clerk/elements/sign-up"
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, Environment, Text, Float } from "@react-three/drei"
import CanvasLoader from "@/components/Loading"
import DemoComputer from "@/components/DemoComputer"
import { Eye, EyeOff } from "lucide-react"

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      {/* Background gradient with animated effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(0,0,0,0))]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 bg-black/50" 
           style={{
             backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 1%)',
             backgroundSize: '3px 3px'
           }} />

      {/* Main content */}
      <div className="m-6 relative flex w-full">
        {/* Sign up form section */}
        <div className="w-full lg:w-[45%] flex items-center justify-center md:p-12">
          <SignUp.Root>
            <Clerk.Loading>
              {(isGlobalLoading) => (
                <>
                  <SignUp.Step name="start">
                    <Card className="px-12 w-full max-w-md bg-black/30 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl">
                      <CardHeader className="space-y-4 px-8 pt-8">
                        <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                          Create Account
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-8 px-8 pt-4">
                        <div className="space-y-4">
                          <Clerk.Connection name="google" asChild>
                            <Button
                              variant="outline"
                              className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
                            >
                              <Clerk.Loading scope="provider:google">
                                {(isLoading) =>
                                  isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                  ) : (
                                    <div className="flex gap-3 items-center justify-center">
                                      <Clerk.Icon/>
                                      Sign up with Google
                                    </div>
                                  )
                                }
                              </Clerk.Loading>
                              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                            </Button>
                          </Clerk.Connection>
                        </div>

                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10"></span>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-black/30 text-gray-400">
                              Or sign up with email
                            </span>
                          </div>
                        </div>

                   

                        <Clerk.Field name="emailAddress" className="space-y-2">
                          <Clerk.Label className="text-gray-200 text-sm font-medium pl-1">
                              Email Address
                          </Clerk.Label>
                          <Clerk.Input type="email" required asChild>
                            <Input 
                              className="py-5 bg-white/5 border-white/10 rounded-xl placeholder-gray-500 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300" 
                              placeholder="name@example.com"
                            />
                          </Clerk.Input>
                          <Clerk.FieldError className="text-sm text-red-400 pl-1" />
                        </Clerk.Field>

                        <Clerk.Field name="password" className="space-y-2">
                          <Clerk.Label asChild className="text-gray-200 text-sm font-medium pl-1">
                              Password
                          </Clerk.Label>
                          <Clerk.Input  type={showPassword ? "text" : "password"} required asChild>
                          <div className="relative">
                          <Input type={showPassword ? "text" : "password"} required 
                              className="py-5 bg-white/5 border-white/10 rounded-xl placeholder-gray-500 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300" 
                              placeholder="••••••••"/>
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-transparent hover:bg-white/10"
                                onClick={togglePasswordVisibility}
                                aria-label={
                                  showPassword
                                    ? "Hide password"
                                    : "Show password"
                                }
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-gray-500" />
                                ) : (
                                  <Eye className="h-4 w-4 text-gray-500" />
                                )}
                              </Button>
                              </div>
                            </Clerk.Input> 
                         
                          <Clerk.FieldError className="text-sm text-red-400 pl-1" />
                        </Clerk.Field>
        
                        <div className="grid w-full gap-y-2">
                        <SignUp.Captcha className="empty:hidden" />
                          <SignUp.Action submit asChild>
                            <Button 
                              className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 hover:from-purple-500 hover:to-pink-500 focus:ring-4 focus:ring-purple-500/30 active:scale-[0.98]" 
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
                          </SignUp.Action>
                          <Button variant="link" size="sm" className="w-full" asChild>
                            <Link href="/sign-in">Already have an account? Sign in</Link>
                          </Button>
                        </div>
                        </CardContent>
                    </Card>
                  </SignUp.Step>

                  <SignUp.Step name="continue">
                    <Card className="w-full max-w-md bg-black/30 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl">
                      <CardHeader className="space-y-4 px-8 pt-8">
                        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                          Complete Your Profile
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-center">
                          Please fill in any missing information
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 px-8 pt-4">
                        <Clerk.Field name="username" className="space-y-2">
                          <Clerk.Label asChild>
                            <Label className="text-gray-200 text-sm font-medium pl-1">
                              Username
                            </Label>
                          </Clerk.Label>
                          <Clerk.Input type="text" required asChild>
                          <Input className="py-5 bg-white/5 border-white/10 rounded-xl placeholder-gray-500 text-white focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300" 
                              placeholder="johndoe"/>
                              </Clerk.Input>
                          <Clerk.FieldError className="text-sm text-red-400 pl-1" />
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter className="px-8 pb-8">
                        <SignUp.Action submit asChild>
                          <Button
                            className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 hover:from-purple-500 hover:to-pink-500 focus:ring-4 focus:ring-purple-500/30 active:scale-[0.98]"
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
                        </SignUp.Action>
                      </CardFooter>
                    </Card>
                  </SignUp.Step>

                  <SignUp.Step name="verifications">
                      <Card className="w-full max-w-md bg-black/30 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl">
                        <CardHeader className="space-y-4 px-8 pt-8">
                          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
                            Check Your Email
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-center">
                          Use the verification link sent to your email address
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 px-8 pt-4">
                          <Clerk.Field name="code">
                            <Clerk.Label className="sr-only">Email address</Clerk.Label>
                            <div className="grid gap-y-4">
                              <div className="flex justify-center gap-2">
                                <Clerk.Input
                                  type="otp"
                                  autoSubmit
                                  className="flex justify-center has-[:disabled]:opacity-50"
                                  render={({ value, status }) => (
                                    <div
                                      data-status={status}
                                      className="relative flex h-14 w-14 items-center justify-center border border-white/10 text-lg font-medium shadow-sm transition-all first:rounded-l-xl last:rounded-r-xl data-[status=selected]:ring-2 data-[status=selected]:ring-purple-500/50 data-[status=cursor]:ring-2 data-[status=cursor]:ring-purple-500/50 bg-white/5 text-white"
                                    >
                                      {value}
                                    </div>
                                  )}
                                />
                              </div>
                              <Clerk.FieldError className="text-sm text-red-400 text-center" />
                              <SignUp.Action
                                asChild
                                resend
                                className="text-gray-400"
                                fallback={({ resendableAfter }) => (
                                  <Button variant="link" size="sm" className="w-full text-gray-400" disabled>
                                    Didn&apos;t receive a code? Resend (
                                    <span className="tabular-nums">{resendableAfter}</span>)
                                  </Button>
                                )}
                              >
                                <Button variant="link" size="sm">
                                  Didn&apos;t receive a code? Resend
                                </Button>
                              </SignUp.Action>
                            </div>
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter className="px-8 pb-8">
                          <SignUp.Action submit asChild>
                            <Button
                              className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 hover:from-purple-500 hover:to-pink-500 focus:ring-4 focus:ring-purple-500/30 active:scale-[0.98]"
                              disabled={isGlobalLoading}
                            >
                              <Clerk.Loading>
                                {(isLoading) =>
                                  isLoading ? (
                                    <Icons.spinner className="size-4 animate-spin" />
                                  ) : (
                                    'Verify'
                                  )
                                }
                              </Clerk.Loading>
                            
                            </Button>
                          </SignUp.Action>
                        </CardFooter>
                      </Card>
                  </SignUp.Step>
                </>
              )}
            </Clerk.Loading>
          </SignUp.Root>
        </div>

        {/* 3D Scene section */}
        <div className="hidden lg:block lg:w-[55%] h-screen">
          <Canvas className="touch-none" camera={{ position: [0, 0, 20], fov: 45 }}>
            <ambientLight intensity={Math.PI/2}/>
            <directionalLight position={[10,10,5]}/>
            <fog attach="fog" args={['#050510', 30, 40]} />
            <Environment preset="city" />
            
            <Suspense fallback={<CanvasLoader />}>
              <Float
                speed={2}
                rotationIntensity={0.6}
                floatIntensity={0.6}
              >
                <Center>
                  <group scale={3.5} position={[0, -2, 0]} rotation={[Math.PI / 16, -Math.PI / 8, 0]}>
                    <DemoComputer />
                  </group>
                </Center>
              </Float>
            </Suspense>
            
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </div>
  )
}