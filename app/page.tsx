import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className='main-container w-[290px] h-[327px] bg-[#000] rounded-[37px] relative overflow-hidden shadow-[100px_100px_250px_0_rgba(22,20,20,0.9)] mx-auto my-0'>
        <div className='w-[192px] h-[46px] text-[0px] bg-[#fff] rounded-[8px] relative overflow-hidden shadow-[5px_5px_13px_0_rgba(133,133,133,0.9)_inset] mt-[58px] mr-0 mb-0 ml-[49px]'>
          <span className="block h-[20px] font-['Inter'] text-[12px] font-normal leading-[14.523px] text-[#000] relative text-left whitespace-nowrap z-[1] mt-[15px] mr-0 mb-0 ml-[13px]">
            Username
          </span>
          <input className='w-[192px] h-[46px] bg-transparent border-none absolute top-0 left-0 z-[2]' />
        </div>
        <div className='w-[192px] h-[46px] text-[0px] bg-[#fff] rounded-[8px] relative overflow-hidden shadow-[5px_5px_13px_0_rgba(133,133,133,0.9)_inset] z-[3] mt-[17px] mr-0 mb-0 ml-[49px]'>
          <span className="block h-[20px] font-['Inter'] text-[12px] font-normal leading-[14.523px] text-[#000] relative text-left whitespace-nowrap z-[4] mt-[17px] mr-0 mb-0 ml-[10px]">
            Password
          </span>
          <input className='w-[192px] h-[46px] bg-transparent border-none absolute top-0 left-0 z-[5]' />
        </div>
        <div className='flex w-[212px] h-[49px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] flex-col gap-[10px] justify-center items-center flex-nowrap relative z-[6] mt-[26px] mr-0 mb-0 ml-[39px]'>
          <button className='flex h-[29px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[32px] border-none relative overflow-hidden z-[7] pointer'>
            <span className="flex w-[32px] h-[15px] justify-start items-start shrink-0 basis-auto font-['Inter'] text-[10px] font-normal leading-[12.102px] text-[#000] relative text-left whitespace-nowrap z-[8]">
              Login
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
