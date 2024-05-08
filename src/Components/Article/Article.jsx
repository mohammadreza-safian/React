import styled from './article.module.css'
import article from '../../assest/images/images.png'
function Article(props){
    
    return(
        <div className={styled.articleWrraper}>
            <img src={article} alt="" />
            <h3>{props.dataArt.title}</h3>
            <span>Read in {props.dataArt.readingTime} minutes</span>
        </div>
    )
}

export default Article