import React from 'react'
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div>
                        <span style={{
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'end',
                            position: 'absolute',
                            right: '0'
                        }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://images.indianexpress.com/2021/10/tiger_1200_twt.jpeg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem
