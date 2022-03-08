import { useState, useEffect } from 'react'
import Loading from './Extras/Loading';
import Moviedata from './Moviedata';
import Hover from './Hover'
import Slider from './Mainnavigation/Slider'
import logo from './Mainnavigation/movielogo.png'
import Dropdown from './Extras/Dropdown';

function Moviepage() {
  const [moviedata, setmoviedata] = useState([])
  const [loading, setloading] = useState(true)
  const [id, setid] = useState()
  const [hover, sethover] = useState(false)
  const [search, setsearch] = useState(false)
  const [searchdata, setsearchdata] = useState('')
  const [page, setpage] = useState(1)
  const [sort, setsort] = useState(false)




  useEffect(async () => {
    try {
      const response = await fetch(`https://movie-task.vercel.app/api/popular?page=${page}`)
      const json = await response.json()
      const data = await json.data.results
      setloading(false)
      if (sort) {
        setmoviedata(data.sort(function (a, b) { return new Date(b.release_date).valueOf() - new Date(a.release_date).valueOf(); }))
      } else if (!sort) { setmoviedata(data) }
    } catch (e) { alert(`Pls Chekc Your Internet Connection or Refresh Page ${e}`) }
  }, [page, sort])
  const onclickhander = () => {
    setsearch(false)
    setsearchdata('')



  }
  const onNexthandler = () => {
    setpage(page + 1)
  }
  const onbackhandler = () => {
    setpage(page - 1)
  }








  return (
    <>{loading && <div className='flex w-screen h-screen items-center justify-center bg-gray-700'><Loading /></div>}
      {!loading && <div>
        <div className='w-screen h-16 flex  flex-row items-center bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className="w-1/4"><img src={logo} className="h-10 w-10 ml-16 " alt="logo here"></img></div>
          <div className="w3/4 flex items-center">
            <input type="text" placeholder="search here movie....." className='cursor-text  mx-2 md:w-[500px] lg:w-[800px] px-2 bg-white md:h-10 rounded-full shadow-inner shadow-black' value={searchdata} onChange={event => { setsearchdata(event.target.value); setsearch(true) }} ></input>
            <svg className={`svg-icon md:h-8 md:w-8 h-5 w-5 cursor-pointer  ${!search && 'hidden'}`} onClick={onclickhander} viewBox="0 0 20 20">
              <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
            </svg>

          </div>
        </div>
        <div className={`hidden ${search && 'lg:hidden'}   lg:flex lg:flex-row lg-w-full  lg:h-[500px] bg-gradient-to-r from-purple-500 to-pink-500`}>
          <div className="slider w-3/4  overflow-hidden">
            <Slider />
          </div>
          <div className="info   w-1/4 overflow-scroll scrollbar-hide">
            <ul className="flex flex-col-reverse  ">
              {moviedata?.map((movie) => {

                return <li key={movie.id}>
                  <div className=" flex flex-row  w-full h-20 items-center">
                    <div className='w-1/4 '>
                      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} onClick={() => { setid(movie.id); sethover(true) }} className="cursor-pointer h-16 w-16 rounded-full mt-2 ml-2" alt="dp"></img>
                    </div>
                    <div className='w-3/4  '>
                      <span className=' text-md font-bold  text-white cursor-pointer ' onClick={() => { setid(movie.id); sethover(true) }}>{movie.original_title}</span>
                    </div>
                  </div>
                </li>
              })}

            </ul>
          </div>
        </div>
        <div className="flex flex-row pt-3  items-center  w-full bg-gradient-to-r from-purple-500 to-pink-500 md:justify-between">
          <div className="flex flex-col mt-3 mx-8 items-center" >
            <div className="top flex flex-row space-x-3 items-center">
              <div className="border-4 border-yellow-300 h-8"></div>
              <div className="text-2xl text-white font-bold">Popular Movies
                
              </div>
              <div className="text-3xl font-extrabold text-white">&#x3e;</div>
            </div>

          </div>
          <div className="sort mr-8 lg:w-[100px]">
            <Dropdown setsort={setsort}></Dropdown>
          </div>

        </div>
        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">

          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 px-16 py-8'>
            {moviedata?.filter((movie) => {
              if (searchdata === "") {
                return movie
              } else if (movie.original_title.toLowerCase().includes(searchdata.toLowerCase())) {
                return movie
              }

            }).map((movie) => {

              return <Moviedata movie={movie} setid={setid} sethover={sethover} key={movie.id}></Moviedata>
            })}

          </div>

        </div>



        <div>
          <div className="flex items-center justify-center space-x-8 bg-gradient-to-r pb-8 from-purple-500 to-pink-500">
            <button className={`${page <= 1 && 'hidden'} text-lg ml-3 font-medium leading-none shadow-lg shadow-black bg-white hover:shadow-white border border-black rounded-lg h-8 w-20 `} onClick={onbackhandler}> previous </button>
            <button className='text-lg font-medium leading-none mr-3 shadow-lg shadow-black hover:shadow-white bg-white border border-black rounded-lg  h-8 w-20' onClick={onNexthandler}> Next </button>
          </div>


          {hover && <Hover id={id} sethover={sethover}  ></Hover>}


        </div>
      </div>
      }
    </>
  )
}








export default Moviepage;