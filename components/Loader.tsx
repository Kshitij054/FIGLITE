import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-3 bg-primary-black'>
    <Image
      src='/assets/loader.gif'
      alt='loader'
      width={120}
      height={120}
      className='object-contain'
    />
    <p className='text-sm font-bold text-primary-grey-300'>
      Setting up your canvas...
    </p>
    <p className='text-xs text-primary-grey-300 opacity-60'>
      Connecting to collaboration server
    </p>
  </div>
);

export default Loader;
