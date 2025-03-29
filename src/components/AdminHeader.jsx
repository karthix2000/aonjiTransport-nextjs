import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/ANJITLOG.svg'

const AdminHeader = () => {
  return (
    
    <>
    
    <div className="w-full p-1 bg-blue-950 flex justify-between sticky top-0 z-50   " >
      <Link href='/admin' >
      <Image  src={logo} className="w-28 mt-1 " alt='logo'   />
      </Link>

         <div className=" flex items-center mr-1" >
        <ul className="font-roboto  flex gap-3 justify-end text-sm md:text-lg lg:text-xl lg:gap-8 lg:mr-4  text-gray-300  ">
          
          <li>
          <Link href="/admin/invoice-section" className="hover:text-white"  >Invoice Section</Link>
          </li>
         <li>
         <Link href="/admin/bills" className="hover:text-white"  >Bills List</Link>

         </li>
          <li>
          <Link href="" className="hover:text-white"  >Logout</Link>
          </li>
         
          

          </ul>
          
        </div>
        </div>
    
    </>
  )
}

export default AdminHeader