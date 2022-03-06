import React from 'react'
import { useEffect, useState } from 'react'
const Hover = ({ id, sethover }) => {
    const [moviedata, setmoviedata] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(async () => {
        fetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`)
            .then((response) =>
                response.json())
            .then((data) => {
                setmoviedata(data.data)
                setloading(false)

            }
            ).catch(err => { console.log(err) })



    }, [id])



    return (
        <>

            

            <div className="px-10 py-10 fixed top-0 h-full w-full backdrop-blur-sm "  >
            {loading && <h1 className="text-white">Loading.......</h1>}
            {!loading && <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://image.tmdb.org/t/p/original${moviedata.poster_path}`} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <div className="flex flex-row items-center">
                                <h5 className="text-gray-900 text-xl font-medium mb-2 font-mono ">{moviedata.original_title}</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => sethover(false)} className="h-6 w-6 ml-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <p className="text-gray-700 text-base mb-4">
                                {moviedata.overview}
                            </p>
                            <p className="text-gray-600 text-xs">Release date : {moviedata.release_date} </p>
                        </div>
                    </div>
                </div>}    
            </div>

        </>
    )
}

export default Hover