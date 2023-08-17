import React from 'react'
import './Cards.css'
import { Col, Row } from 'react-bootstrap'
import man from '../../images/man.jpeg'
import { Link } from 'react-router-dom'
const Cards = ({ moviesData }) => {
    return (
        <Row>
            {moviesData?.map(movie =>
                <Col md={3} xm={6} xs={12} key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <div className='card'>
                            <img className='movie_img d-flex justify-content-center align-items-center'
                                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt='img' />
                            <div className='description d-flex justify-content-center align-items-center'>
                                <div>
                                    <div>
                                        <span>اسم الفيلم :</span>
                                        <span>{movie.title}</span>
                                    </div>
                                    <div>
                                        <span> تاريخ الأصدار :</span>
                                        <span>{movie.release_date}</span>
                                    </div>

                                    <div>
                                        <span>عدد المقيمين  :</span>
                                        <span>{movie.vote_count}</span>
                                    </div>
                                    {/* <div>
                                <span>الوصف  :</span>
                                <span>{movie.overview}</span>
                        </div> */}
                                    <div>
                                        <span> التقييم :</span>
                                        <span>{movie.vote_average}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col >)
            }


        </Row >

    )
}

export default Cards
