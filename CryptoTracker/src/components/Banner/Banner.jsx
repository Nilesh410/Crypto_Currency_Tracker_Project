import BannerImage from "../../assets/banner3.jfif";
function Banner()
{
    return (
         <div className="w-full h-[20rem] relative">
            <img 
               src={BannerImage}
               className="w-full h-full"
            >
            </img>
            <div className="absolute top-20 left-0 right-0 mx-[10rem] w-[20rem]">
                <div className="flex flex-col gap-4">
                    <div className="font-semibold text-6xl text-white not-italic hover:italic">
                        CryptoTracker
                    </div>
                    <div className="font-semibold text-sm italic text-white text-center">
                        Get All Information Regarding Cryptocurrencies
                    </div>
                </div>
            </div>
         </div>

    );
}
export default Banner;