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
        <div className="hidden  lg:border-2 lg:border-black lg:flex lg:flex-row lg-w-full  lg:h-96">
          <div className="slider w-3/4 border border-white">
            <Slider/>
          </div>
          <div className="info border border-black w-1/4 ">
a
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