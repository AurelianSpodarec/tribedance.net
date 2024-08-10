import { Button } from "@/components/atoms/button"

function PageMixinAndMastering() {
  return (
    <div className="w-full rounded overflow-hidden bg-quad cursor-pointer">
      <div className="container max-w-7xl mx-auto px-16 py-28">
        <div className="flex flex-col-reverse xl:flex-row">
          <div className="xl:w-2/3 text-center xl:text-justify">
            <h3 className="text-2xl text-third lg:text-4xl font-bold mb-3 xl:mb-6">Book a mixing session today!</h3>
            <p className="text-third text-base lg:text-xl mb-4">We'd love to bring you mix to the next level! Book a session today and let us know what kind of session you would like us to do. We'll get back within 24 hours!</p>
            <Button>
              <a href="https://calendly.com/tribedance/coaching-session" target="_blank" className="flex">
                <svg className="w-5 mr-4 text-third" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-day" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M112 368h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z" className=""></path></svg>
                <span className="text-2xl text-third font-semibold">Pick a timeslot</span>
              </a>
            </Button>
          </div>
          <div className="xl:w-1/3 text-right relative mb-4 lg:mb-0">
            <figure className="">
              <img className="w-32 h-32 bg-cover xl:w-64 xl:h-64 mx-auto rounded-full" src="/images/mike.jpg" />
            </figure>
            <div className="absolute left-0 right-0 -top-20 xl:top-auto xl:-bottom-14 flex flex-col items-center mb-6 flex">
              <div className="z-30 absolute -bottom-3 xl:-bottom-0 xl:-top-3 w-6 h-6 transform rotate-45 bg-white"></div>
              <div className="text-center relative z-10 py-4 px-6 text-xs bg-white text-black leading-none whitespace-no-wrap shadow-lg rounded-lg">
                <span className=" font-bold block text-base mb-1">Mike</span>
                <span className="text-base block">
                  <span className="text-base ">Mixing Engineer - </span>
                  <a className="text-base hover:text-yellow-400" href="mailto:musicmike@gmail.com">mike@tribedance.net</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageMixinAndMastering
