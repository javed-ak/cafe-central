export default function VisitOurCafe() {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-3 gap-8 items-center relative">
        {/* Left Image Grid */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-5">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/VisitCafe1.jpg"
              alt=""
              className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/VisitCafe2.jpg"
              alt=""
              className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/VisitCafe4.jpg"
              alt=""
              className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/VisitCafe5.jpg"
              alt=""
              className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-white rounded-xl shadow-xl px-10 py-14 text-center flex flex-col items-center gap-5 -ml-20 hover:scale-105 transition-all z-10 relative">
          <div>
            <h2 className="text-4xl font-[cursive] text-[#CFA66F]">Visit Our</h2>
            <h1 className="text-5xl font-serif font-bold">Cafe</h1>
          </div>
          <img src="leaf.png" alt="leaf" className="w-6 h-6 opacity-40" />
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, exercitationem culpa! Unde amet fugit eligendi provident, numquam accusantium sint voluptatum ullam eum aspernatur delectus, rerum dolorum accusamus dolor repellat dolores.
          </p>
          <div className="text-[#CFA66F] font-semibold border-b-2 border-[#CFA66F] inline-block pb-1 mt-2 cursor-pointer hover:text-[#b68b4c]">
            Get Locations
          </div>
        </div>
      </div>
    </div>
  )
}
