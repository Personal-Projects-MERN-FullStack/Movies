import { useState, useEffect } from 'react'
import Loading from './Extras/Loading';
import Moviedata from './Moviedata';
import Hover from './Hover'
import Slider from './Mainnavigation/Slider'


function Example() {
  const [moviedata, setmoviedata] = useState([])
  const [loading, setloading] = useState(true)
  const [id, setid] = useState()
  const [hover, sethover] = useState(false)
  useEffect(() => {
    fetch("https://movie-task.vercel.app/api/popular?page=1")
      .then((response) =>
        response.json())
      .then((data) => {
        const dataa = data.data.results
        const list = dataa;
        setloading(false)
        setmoviedata(list)


      }
      ).catch(err => { console.log(err) })


  }, [])








  return (
    <>{loading && <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2  py-8 bg-black'><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /><Loading /></div>}
      {!loading && <div>
        <div className="hidden    lg:flex lg:flex-row lg-w-full  lg:h-[500px] bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="slider w-3/4  overflow-hidden">
            <Slider />
          </div>
          <div className="info   w-1/4 overflow-scroll scrollbar-hide">
            <ul className="flex flex-col-reverse  ">
              {moviedata?.map((movie) => {

                return <li >
                  <div className=" flex flex-row bg-gradient-to-r from-purple-500 to-pink-500 w-full h-20 ">
                    <div className='w-1/4 '>
                      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onClick={()=>{setid(movie.id); sethover(true)}} className="cursor-pointer h-16 w-16 rounded-full mt-2 ml-2"></img>
                    </div>
                    <div className='w-3/4  '>
                      <span className=' text-xl font-bold  text-white cursor-pointer ' onClick={()=>{setid(movie.id); sethover(true)}}>{movie.original_title}</span>
                    </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>

        <div className="h-auto bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">

          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 px-16 py-8'>
            {moviedata?.map((movie) => {

              return <Moviedata movie={movie} setid={setid} sethover={sethover} key={movie.id}></Moviedata>
            })}

          </div>

        </div>
      </div>
      }


      <div>
        {hover && <Hover id={id} sethover={sethover}  ></Hover>}


      </div>
    </>
  )
}








export default Example;