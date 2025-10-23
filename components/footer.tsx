import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:to-gray-900 shadow-inner py-12">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">

        {/* Logo */}
        <Link href="#">
          <Image
            src="/imagens/logo.png"
            alt="Logo do site"
            width={140}
            height={40}
            className="h-auto w-auto"
          />
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
          © 2025 Todos os direitos reservados.
        </p>

        {/* Redes sociais */}
        <div className="flex space-x-4">
          {[
            {
              href: "#",
              label: "Reddit",
              svg: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zM6.807 10.543a1.67 1.67 0 00-0.357 0.922c0 0.572 0.311 1.064 0.798 1.314C7.78 13.42 8.879 13.315 9.42 12.75c0.229-0.23 0.338-0.569 0.28-0.889a1.68 1.68 0 00-0.893-0.802c-0.472-0.154-0.99-0.057-1.322 0.228z" />
                </svg>
              ),
            },
            {
              href: "#",
              label: "Facebook",
              svg: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zM15 12h-3v7h-3v-7H7v-3h2V8.5C9 7.12 10.12 6 11.5 6H15v3h-2c-.276 0-.5.224-.5.5V9h2l-.5 3z"/>
                </svg>
              ),
            },
            {
              href: "#",
              label: "Github",
              svg: (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.252-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025a9.564 9.564 0 012.5-.336c.847 0 1.7.114 2.5.336 1.91-1.294 2.75-1.025 2.75-1.025.545 1.377.201 2.394.098 2.647.64.699 1.03 1.592 1.03 2.683 0 3.842-2.337 4.687-4.565 4.934.359.31.678.921.678 1.855 0 1.338-.012 2.419-.012 2.748 0 .268.18.579.688.48C19.136 20.163 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              ),
            },
          ].map(({ href, label, svg }, idx) => (
            <Link
              key={idx}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 
                         hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-lg"
            >
              {svg}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
