import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2>Guide You to Easy Path</h2>
          <p>With the hilink application, you will no longer get lost over and over again, because we aready support offline maps when there is no internet connection in the field. Invite your family, friends and relatives to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>
    </section>
  )
}

export default Guide
