import {useState} from 'react'
export default function Dropdown({setsort}) {
const [name, setname] = useState('Sort by')

  return (
  
      <div className="flex space-x-2 justify-center items-end">
        <div className="dropdown relative">
          <button
            className="
        dropdown-toggle
         px-4 py-1.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition duration-150 ease-in-out
        flex
        items-center
        whitespace-nowrap
      "
            type="button"
            id="dropdownMenuSmallButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           {name}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            className="
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        
        m-0
        bg-clip-padding
        border-none
      "
            aria-labelledby="dropdownMenuSmallButton"
          >
            <li>
              <span
                className={`
                ${name === 'By Date' && 'bg-blue-300'}
            dropdown-item
            cursor-pointer
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
           
          `}
                onClick={()=>{setsort(true) ; setname('By Date')}}
              >Date</span
              >
            </li>
       
            <li>
              <span
                className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
                onClick={()=> {setsort(false) ; setname('Sort by')}}
              >NO Sorting</span
              >
            </li>
          </ul>
        </div>
      </div>
      )
}
