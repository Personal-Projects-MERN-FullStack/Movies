import React from 'react'



function Moviedata({ movie ,setid, sethover }) {
    
    

    const { poster_path, id, original_title, original_language,  vote_average ,release_date  } = movie
    

    return (
        <>


            <div className="flex flex-col gap-1 mt-8" >

               
                <div href="" className="bg-white cursor-pointer" onClick={()=> {setid(id); sethover(true)}}>
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=" here" className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
                </div>

              
                <div href="#" className=" text-gray-200 font-semibold"> {original_title} </div>

               
                <div href="#" className=" text-sm text-black -mt-1 "> {release_date} </div>

                
                <div className="flex flex-row flex-wrap gap-2">
                    <div href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex flex-row space-x-1 items-center"><img className='h-4  w-4 ' src="https://img.icons8.com/emoji/50/000000/star-emoji.png" alt="star"/> {vote_average}  </div>
                    <div href="#" className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> {original_language} </div>
                   
                
                </div>

            </div>
            


        </>
    )
}

export default Moviedata