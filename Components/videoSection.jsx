export default function VideoSection() {
  return (
    <div>
      <div className="relative h-[40vh] ">

       {/* Video Background */}
       <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://themes.themegoods.com/grandrestaurantv6/demo6/wp-content/uploads/sites/6/2021/01/Restaurant-Dishes.mp4.mp4"
        autoPlay
        loop
        muted
        playsInline
       />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20" />

      {/* Content */}
         {/* <div className="relative z-20 h-full w-full flex items-center justify-center text-white">
        <h2 className="text-4xl font-bold">Delicious Moments</h2>
        </div> */}
     </div>
    </div>
  )
}
