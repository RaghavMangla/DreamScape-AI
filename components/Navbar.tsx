"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
)

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-purple-400">DreamScape AI</span>
            </Link>
            <div className="hidden md:block ml-10">
              <ul className="flex space-x-4">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/gallery">Gallery</NavItem>
                <NavItem href="/videos">Videos</NavItem>
                <NavItem href="/music">Music</NavItem>
                <li className="relative group">
                  <button className="text-gray-300 hover:text-white transition-colors flex items-center">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                    <NavItem href="/faq">FAQ</NavItem>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="mr-2 text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-black">Log in</Button>
            <Button className="bg-purple-500 text-white hover:bg-purple-600">Sign up</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <NavItem href="/videos">Videos</NavItem>
            <NavItem href="/music">Music</NavItem>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <NavItem href="/faq">FAQ</NavItem>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <Button variant="outline" className="mr-2 w-full text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-black">Log in</Button>
              <Button className="w-full bg-purple-500 text-white hover:bg-purple-600">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}