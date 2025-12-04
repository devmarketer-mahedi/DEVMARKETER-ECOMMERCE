'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Customers() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        // Fetch real customers data here
    }, [])

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Customers</h1>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-[1fr_3fr_3fr_1fr] gap-4 p-4 bg-slate-50 border-b border-slate-200 font-medium text-slate-600">
                    <p>Avatar</p>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Action</p>
                </div>
                {customers.length > 0 ? customers.map((customer, index) => (
                    <div key={index} className="grid grid-cols-[1fr_3fr_3fr_1fr] gap-4 p-4 items-center border-b border-slate-100 last:border-none hover:bg-slate-50 transition">
                        <Image src={customer.image} alt="" width={40} height={40} className="rounded-full" />
                        <p>{customer.name}</p>
                        <p>{customer.email}</p>
                        <button className="text-red-500 hover:text-red-700 text-sm">Remove</button>
                    </div>
                )) : (
                    <div className="p-4 text-center text-slate-500">No customers found.</div>
                )}
            </div>
        </div>
    )
}
