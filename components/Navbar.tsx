'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Fyncee Logo" width={40} height={40} className="rounded-xl" />
            <span className="text-h4 font-bold text-primary-cyan">Fyncee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-secondary hover:text-primary-cyan transition-colors">
              Inicio
            </Link>
            <Link href="/features" className="text-text-secondary hover:text-primary-cyan transition-colors">
              Características
            </Link>
            <Link href="/download" className="text-text-secondary hover:text-primary-cyan transition-colors">
              Descargar
            </Link>
            <a
              href="/fyncee.apk"
              className="bg-primary-cyan text-dark-bg px-6 py-2.5 rounded-button font-bold text-body hover:brightness-110 hover:scale-105 transition-all duration-300"
            >
              Descargar APK
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:text-primary-cyan transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-surface border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-text-secondary hover:text-primary-cyan transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/features"
              className="block text-text-secondary hover:text-primary-cyan transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Características
            </Link>
            <Link
              href="/download"
              className="block text-text-secondary hover:text-primary-cyan transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Descargar
            </Link>
            <a
              href="/fyncee.apk"
              className="block text-center bg-primary-cyan text-dark-bg px-6 py-3 rounded-button font-bold hover:brightness-110 transition-all"
            >
              Descargar APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
