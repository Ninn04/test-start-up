import Image from "next/image"

const Grid = () => {
  return (
    <section className="bg-white text-black grid grid-cols-3 relative">
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        <div className="card">
            <Image src="/image/appwar (1).jpeg" width={416} height={416} alt="image"/>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-2xl ">Dreamslab,co.LTD</h2>
                    <p>Founded : 2021</p>
                </div>
                <p className="mr-7">01/100</p>
            </div>
        </div>
        
        
    </section>
  )
}

export default Grid