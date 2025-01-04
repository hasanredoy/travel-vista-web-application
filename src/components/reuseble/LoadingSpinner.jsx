import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className=" w-full min-h-[calc(100dvh-100px)] flex justify-center items-center">
      <Image src="https://lh3.googleusercontent.com/proxy/CRIJxlPzDcirn-loLJW_MGBjeGvQCkVDaM5zuLmoLoTkzuJqisXUaHlBt3Yzm1Nt92-xOyJ2vqvjQRQfwgPnXVXa2qk" alt="loading spinner" width={70} height={70} />
    </div>
  );
};

export default LoadingSpinner;