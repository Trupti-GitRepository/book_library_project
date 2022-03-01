import {
    faStar, faComments, faHeart
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { stockData } from '../data'

const BookCard = () => {

    return (
        <>
            <section className="grid grid-cols-5 gap-6">
                {stockData.map((data, key) => {
                    return (
                        <div key={key} className="">
                            <div style={{width: '100%', height: '45vh'}}>
                                <img src={data.url} alt="" className="" style={{width: '100%', height: '100%'}}/>
                            </div>
                            <h3 className="text-2xl capitalize pt-3 font-bold text-gray-600">{data.name}</h3>
                            <h6 className="text-lg italic">{data.subname}</h6>
                            <p>{data.author}</p>
                            <div className="flex gap-2 pt-3 ">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500"/>
                            </div>
                            <div className="flex justify-between pt-3">
                                <FontAwesomeIcon icon={faComments} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default BookCard