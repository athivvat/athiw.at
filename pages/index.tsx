import Image from 'next/image';

function HomePage() {
  return (
    <div className="w-full sm:max-w-screen-sm mx-auto">
      <div className="flex items-center space-x-6 my-16">
        <div className="flex justify-center items-center rounded-full bg-white w-[65px] h-[65px]">
          <Image src="/profile.png" height={55} width={55} />
        </div>
        <div>
          <h1 className='text-white font-medium text-xl'>Athiwat Hirunworawongkun</h1>
          <p className='text-white/60 text-sm'>Founder Humaan.ai, Data Platform Engineer at King Power Click</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
