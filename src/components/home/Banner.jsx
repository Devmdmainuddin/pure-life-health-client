

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co/zSHGLtR/14.jpg" className="w-full h-[400px] object-cover" />
                <div className="absolute   left-6  top-1/3 max-w-md text-slate-50 bg-gradient-to-r form-[#151515] to-[rgba(21,21,21,0)] h-full">
                    <h2 className="text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, vitae!</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ex hic similique maxime ullam sint a ratione corrupti, recusandae earum consequatur at illum quasi minima.</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Dpdwj5m/10.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-4">❯</a>
                   
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nMGKqWx/7.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/1m3W3Pj/6.jpg" className="w-full  h-[400px] object-cover" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-auto right-7 bottom-[40px]">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;