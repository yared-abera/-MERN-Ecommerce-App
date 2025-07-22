import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
  <div className=" mx-auto px-4 grid grid-cols-1 md:grid-cols-5 ">
    
    {/* Left: Store Info */}
    <div>
      <h2 className="text-xl font-semibold mb-2 lg:pr-2">Biruk Computers & Accessories</h2>
      <p className="text-sm text-gray-300">
        Your home of laptops and electronics. Trusted quality and service.
      </p>
    </div>

    {/* Center: Navigation */}
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
      <a href="/" className="hover:text-yellow-400 text-sm">Home</a>
      <a href="/shop" className="hover:text-yellow-400 text-sm">Shop</a>
      <a href="/about" className="hover:text-yellow-400 text-sm">About Us</a>
      <a href="/contact" className="hover:text-yellow-400 text-sm">Contact</a>
    </div>
    
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
      <a href="/" className="hover:text-yellow-400 text-sm">HP</a>
      <a href="/shop" className="hover:text-yellow-400 text-sm"> Lenovo</a>
      <a href="/about" className="hover:text-yellow-400 text-sm">Dell</a>
      <a href="/contact" className="hover:text-yellow-400 text-sm">Asus</a>
        <a href="/contact" className="hover:text-yellow-400 text-sm">Apple</a>
        <a href="/contact" className="hover:text-yellow-400 text-sm">Acer</a>

    </div>

    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
      <a href="/" className="hover:text-yellow-400 text-sm">Microsoft</a>
      <a href="/shop" className="hover:text-yellow-400 text-sm">MacBook Pro</a>
      <a href="/about" className="hover:text-yellow-400 text-sm">ThinkPad </a>
      <a href="/contact" className="hover:text-yellow-400 text-sm">Alienware</a>
       
    </div>

    {/* Right: Contact */}
    <div  >
      <h3 className="text-lg font-semibold mb-1">Contact</h3>
      <p className="text-sm text-gray-300">📍 Addis Ababa, Ethiopia</p>
      <p className="text-sm text-gray-300">📞 +251 912 345 678</p>
      <p className="text-sm text-gray-300">✉️ birukstore@gmail.com</p>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="mt-6 border-t border-gray-700 text-center text-sm text-gray-400 pt-4">
    &copy; {new Date().getFullYear()} Biruk Computers. All rights reserved.developed by: <a href="https://github.com/yared-abera" className="hover:text-yellow-400">Yared Abera</a>
  </div>
</footer>

  )
}

export default Footer
