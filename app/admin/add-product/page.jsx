'use client'
import { assets } from "@/assets/assets"
import Image from "next/image"
import { useState } from "react"
import { UploadCloud } from "lucide-react"
import toast from "react-hot-toast"

export default function AddProduct() {
    const [image, setImage] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Headphones")

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        toast.success("Product Added")
        setName("")
        setDescription("")
        setPrice("")
        setImage(false)
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3 text-slate-800">
            <div className="flex flex-col gap-1">
                <p className="mb-2">Upload Image</p>
                <label htmlFor="image">
                    <Image className="w-20 cursor-pointer" src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" width={100} height={100} />
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </label>
            </div>

            <div className="w-full">
                <p className="mb-2">Product name</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Type here" required />
            </div>

            <div className="w-full">
                <p className="mb-2">Product description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="w-full max-w-[500px] px-3 py-2" type="text" placeholder="Write content here" required />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
                <div>
                    <p className="mb-2">Product category</p>
                    <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
                        <option value="Headphones">Headphones</option>
                        <option value="Speakers">Speakers</option>
                        <option value="Watch">Watch</option>
                        <option value="Earbuds">Earbuds</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Decoration">Decoration</option>
                    </select>
                </div>

                <div>
                    <p className="mb-2">Product Price</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full px-3 py-2 sm:w-[120px]" type="number" placeholder="25" required />
                </div>
            </div>

            <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">ADD</button>
        </form>
    )
}
