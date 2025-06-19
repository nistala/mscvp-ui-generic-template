"use client"

import { useState } from "react"
import { LockIcon, PersonStandingIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import Image from "next/image"

type LoginCardProps = {
    onLoginSuccess: () => void
}

export default function LoginCard({ onLoginSuccess }: LoginCardProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (username === "admin" && password === "admin") {
            onLoginSuccess()
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <div
            className="min-h-screen w-full flex bg-[#0d416b]"
            style={{
                // backgroundImage: "url('/download.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                imageRendering: "auto", // or "crisp-edges" or "high-quality"
            }}
        >
            {/* <Image
                src="/download.jpg"
                alt="Background"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                className="-z-10"
            /> */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative bg-[#212121] rounded-r-[30%]">
                <div className="w-full max-w-sm px-6 py-10 text-white text-left">
                    <img src="/Miracle-Logo-White.png" alt="Logo" className="mb-3 w-40" />

                    <h1 className="font-cabin text-white text-2xl font-semibold mb-3">
                        Supply Chain Visibility Portal
                    </h1>

                    <p className="text-md font-cabin text-gray-300 mb-6 font-semibold text-white">
                        Sign in to start your session
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <PersonStandingIcon className="w-4 h-4" />
                            </span>
                            <Input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-10 text-sm text-black"
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <LockIcon className="w-4 h-4" />
                            </span>
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10 pr-10 text-sm text-black"
                            />
                            <span
                                className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                            </span>
                        </div>

                        <Button
                            type="submit"
                            className="w-full text-sm font-semibold py-2 bg-[#03A9F4] text-white hover:bg-[#0288d1]"
                        >
                            <LockIcon className="w-4 h-4 mr-1" />
                            Sign In
                        </Button>

                    </form>

                    <div className="flex justify-start gap-8 text-sm text-blue-400 mt-4">
                        <a href="#">Forgot Username?</a>
                        <span>|</span>
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>

            <div className="hidden md:block md:w-3/4" />
        </div>
    )
}
