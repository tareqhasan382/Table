import React from 'react'

const About = () => {

  return (
    <div className='h-full'>
      <div className="carousel lg:h-[500px] xs:h-[200px] w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://tse1.mm.bing.net/th?id=OIP.NbfPECA64xbFnmW58MbWDQHaEo&pid=Api&P=0" className="w-full object-cover" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="http://wonderfulengineering.com/wp-content/uploads/2014/01/HD-backgrounds-43.jpg" className="w-full object-cover" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Sky-Desktop-Backgrounds-Hd-Images.jpg" className="w-full object-cover" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="http://www.wallpapers13.com/wp-content/uploads/2016/01/Forest-Waterfall-Wide-Desktop-Background.jpg" className="w-full object-cover" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default About;