import Image from "next/future/image"

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="animate-pulse flex justify-center text-3xl font-bold mb-8 text-black tracking-widest">
                <Image src="/floral.ico" width={30} height={30} className="mr-4"/>
                <span className="text-[#e4da30]">P</span>CHA
            </div>
        </div>
      )
}

export default Loading;