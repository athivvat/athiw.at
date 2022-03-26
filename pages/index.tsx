import Image from 'next/image';

function HomePage() {
  return (
    <div className="w-full sm:max-w-screen-sm mx-auto">
      <div className="flex flex-col sm:flex-row container items-center py-16">
        <div className="flex justify-center items-center rounded-full bg-white w-[65px] h-[65px] mb-4 mr-0 sm:mb-0 sm:mr-4">
          <Image src="/profile.png" height={55} width={55} />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-white font-medium text-xl mb-2 sm:mb-0">
            Athiwat Hirunworawongkun
          </h1>
          <p className="text-spun-pearl text-sm">
            Founder at Humaan.ai, Data Platform Engineer at King Power Click
          </p>
        </div>
      </div>
      <p className="text-lg">
        Hello! I&apos;m Athiwat Hirunworawongkun — founder at Humaan.ai and data
        platform engineer at King Power Click. Interested in neuroscience,
        artificial intelligence, robotics, computer science, and human-centered
        design. I&apos;m on a mission to upgrade humanity, sometimes fixed and
        upgrade myself 😜.
      </p>
    </div>
  );
}

export default HomePage;
