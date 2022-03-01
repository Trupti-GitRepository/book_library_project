import { useState, useEffect, useRef } from 'react'
import axios from '../api/axios'
import { MdFavorite, MdInsertComment } from 'react-icons/md'
import '../index.css'
// import {
//     faStar, faComments, faHeart
// } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// SEARCH_URL = "/api/search/query?q="

const SearchForm = () => {

    const [search,setSearch] =useState("")
    const [record,setRecord] = useState([])

    const [bookCover0,setBookCover0] = useState([])
    const [bookAuthor0,setBookAuthor0] = useState([])

    const [bookCover1,setBookCover1] = useState([])
    const [bookAuthor1,setBookAuthor1] = useState([])

    const [bookCover2,setBookCover2] = useState([])
    const [bookAuthor2,setBookAuthor2] = useState([])

    const [bookCover3,setBookCover3] = useState([])
    const [bookAuthor3,setBookAuthor3] = useState([])

    const [bookCover4,setBookCover4] = useState([])
    const [bookAuthor4,setBookAuthor4] = useState([])

    const [isActive, setActive] = useState(false)

    const loadBookDetail = async () => {
        const response = fetch(`http://localhost:8080/api/search/query?q=${search}`)
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setRecord(myJson);
            });
    }

    useEffect(() => {
        loadBookDetail();
    }, []);

    const searchBooks = () => {
        axios.get(`http://localhost:8080/api/search/query?q=${search}`)
        .then(response => {
            console.log(response.data);
            setBookCover0(response.data.docs[0].coverArtUrl)
            setBookAuthor0(response.data.docs[0].authorName)

            setBookCover1(response.data.docs[1].coverArtUrl)
            setBookAuthor1(response.data.docs[1].authorName)

            setBookCover2(response.data.docs[2].coverArtUrl)
            setBookAuthor2(response.data.docs[2].authorName)

            setBookCover3(response.data.docs[3].coverArtUrl)
            setBookAuthor3(response.data.docs[3].authorName)

            setBookCover4(response.data.docs[4].coverArtUrl)
            setBookAuthor4(response.data.docs[4].authorName)
        });
    }

    const loadBooksAgain = () => {
        var response = fetch(`http://localhost:8080/api/search/query?q=${search}`)
            .then(function(response){
                return response.json();
        })
            .then(function(myJson) {
                setRecord(myJson);
        });
    }
    useEffect(() => {
        loadBooksAgain();
    }, []);

    const [heartColor, setHeartColor] = useState('')

    const onHeartClick = () => {
        setHeartColor(heartColor === 'heartGray' ? 'heartGray' : 'activeHeart')
    }

    return (
        <>
            <div className="w-full flex flex-col justify-content self-center">
                <label htmlFor="search" className="w-96 relative block self-center my-6">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </span>
                    <input onKeyDown={loadBooksAgain} onKeyUp={searchBooks} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for a book..." name="search" className="rounded-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 round-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-sky-500 focus:ring-1 sm:text-sm" />
                </label>
                <button onClick={searchBooks} type="button" className="flex justify-center self-center w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <section className="md:container md:mx-auto mx-auto">
                <div className="grid grid-cols-5 gap-6">
                    <div className="">
                        <div style={{width: '100%', height: '45vh'}}>
                            <img src={bookCover0} alt="" className="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{bookAuthor0}</h3>
                        <h6 className="text-lg italic">{bookAuthor0}</h6>
                        <p>{bookAuthor0}</p>
                        <div className="flex justify-between pt-3">
                            <MdInsertComment />
                            <MdFavorite  className={`${heartColor}`} onClick={onHeartClick}/>
                        </div>
                    </div>
                    <div className="">
                        <div style={{width: '100%', height: '45vh'}}>
                            <img src={bookCover1} alt="" className="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{bookAuthor1}</h3>
                        <h6 className="text-lg italic">{bookAuthor1}</h6>
                        <p>{bookAuthor1}</p>
                        <div className="flex justify-between pt-3">
                            <MdInsertComment />
                            <MdFavorite style={{fill: 'lightgray'}} onClick={onHeartClick}/>
                        </div>
                    </div>
                    <div className="">
                        <div style={{width: '100%', height: '45vh'}}>
                            <img src={bookCover2} alt="" className="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{bookAuthor2}</h3>
                        <h6 className="text-lg italic">{bookAuthor2}</h6>
                        <p>{bookAuthor2}</p>
                        <div className="flex justify-between pt-3">
                            <MdInsertComment />
                            <MdFavorite style={{fill: 'lightgray'}} onClick={onHeartClick}/>
                        </div>
                    </div>
                    <div className="">
                        <div style={{width: '100%', height: '45vh'}}>
                            <img src={bookCover3} alt="" className="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{bookAuthor3}</h3>
                        <h6 className="text-lg italic">{bookAuthor3}</h6>
                        <p>{bookAuthor3}</p>
                        <div className="flex justify-between pt-3">
                            <MdInsertComment />
                            <MdFavorite style={{fill: 'lightgray'}}  onClick={onHeartClick}/>
                        </div>
                    </div>
                    <div className="">
                        <div style={{width: '100%', height: '45vh'}}>
                            <img src={bookCover4} alt="" className="" style={{width: '100%', height: '100%'}}/>
                        </div>
                        <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{bookAuthor4}</h3>
                        <h6 className="text-lg italic">{bookAuthor4}</h6>
                        <p>{bookAuthor4}</p>
                        <div className="flex justify-between pt-3">
                            <MdInsertComment />
                            <MdFavorite style={{fill: 'lightgray'}} onClick={onHeartClick}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchForm
