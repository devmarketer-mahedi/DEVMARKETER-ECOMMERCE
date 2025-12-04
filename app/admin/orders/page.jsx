'use client'
import { useEffect, useState } from "react"
import { Package } from "lucide-react"

export default function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        // Fetch real orders data here
    }, [])

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="flex flex-col gap-4">
                {orders.length > 0 ? orders.map((order, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex gap-4">
                            <Package className="text-slate-400" size={40} />
                            <div>
                                <div className="flex flex-col gap-1 mb-2">
                                    {order.orderItems.map((item, idx) => (
                                        <p key={idx} className="text-sm font-medium text-slate-700">
                                            {item.product.name} x {item.quantity} <span className="text-slate-500 text-xs ml-2">{item.product.category}</span>
                                        </p>
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-slate-800">{order.address.name}</p>
                                <p className="text-xs text-slate-500">{order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zip}</p>
                                <p className="text-xs text-slate-500 mt-1">{order.address.phone}</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between text-sm text-slate-600 min-w-[150px]">
                            <p>Items: {order.orderItems.length}</p>
                            <p>Method: {order.paymentMethod}</p>
                            <p>Payment: {order.isPaid ? 'Done' : 'Pending'}</p>
                            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>

                        <div className="flex flex-col justify-between items-end min-w-[120px]">
                            <p className="text-lg font-bold text-slate-800">${order.total}</p>
                            <select className="p-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium outline-none">
                                <option value="Order Placed">Order Placed</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>
                )) : (
                    <div className="p-10 text-center text-slate-500 bg-white rounded-lg border border-slate-200">No orders found.</div>
                )}
            </div>
        </div>
    )
}
