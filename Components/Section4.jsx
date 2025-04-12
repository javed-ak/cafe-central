export default function Section4() {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-7 gap-10">
        <div className="grid col-span-4 gap-5">
            <div>
                <h1 className="font-medium text-4xl">"Until I discovered cooking I was never really interested in anything"</h1>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-medium">Reserve by Phone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui odio neque? Sed tempora non rem vitae reiciendis ex cupiditate quasi, quibusdam aspernatur, nam voluptatem saepe quae quo suscipit sint accusantium animi ab laudantium sit quos, </p>
                    <p>doloribus quia eum. Unde quam enim accusantium quo facere neque doloremque, est iste nisi!</p>
                </div>
                <div>
                    <h3 className="text-2xl font-medium">Event & Group Booking</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui odio neque? Sed tempora non rem vitae reiciendis ex cupiditate quasi, quibusdam aspernatur, nam voluptatem saepe quae quo suscipit sint accusantium animi ab laudantium sit quos, </p>
                </div>
            </div>
        </div>
        <div className="bg-black text-white rounded-lg p-5 grid col-span-3">
            <div className="border-2 border-white rounded p-10 flex flex-col gap-10">
                <div className="grid grid-cols-2 gap-1">
                    <div>
                    <h5 className="font-bold">Lunch Time</h5>
                    <p>Monday to Sunday<br />10.30am - 3:00pm</p>
                    </div>
                    <div>
                    <h5 className="font-bold">Dinner Time</h5>
                    <p>Monday to Sunday<br />05.30pm - 11:00pm</p>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold">Location</h5>
                    <p>732/21 Second Street, Manchester Kingston United Kingdom</p>
                </div>
                <div className="bg-white text-black border cursor-pointer border-white text-xl px-2 py-1 hover:text-white hover:bg-transparent text-center rounded-lg">Download our Menu</div>
            </div>
        </div>
      </div>
    </div>
  )
}
