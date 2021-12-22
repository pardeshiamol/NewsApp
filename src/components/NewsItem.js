import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, discription, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://newsmonks.com/wp-content/uploads/2021/03/News-Monks.jpeg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{title}....</h5>
                    <p className="card-text">{discription}....</p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btm-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
