import '../css/Feed.css'
import FeedPhoto from '../assets/thumbnail.png'

import UsrAvatar from '../assets/user_noPict.svg'
import IconLike from '../assets/like.svg'
import IconComment from '../assets/comment.svg'



function Feed (){
    return <div className='feed-container'>
        <div className='usr-profile'>
            <img id='feed-usr-avatar' src={UsrAvatar}></img>
            <h4 className='feed-username'>Hauzan</h4>
        </div>

        <div className='feed-content'>
            <h3 className='feed-title'>Mantep ni gan!</h3>
            <img id = 'feed-photo' src={FeedPhoto}></img>
            <p className='feed-caption'>Data Science adalah cabang ilmu yang menggabungkan konsep matematika, statistik, dan teknologi untuk mengumpulkan, menganalisis, dan menafsirkan data.</p>
            
            <div className='feed-reaction'>
                <div className='reaction-icons likes'>
                <a href='/'><img src = {IconLike} alt='like button'/></a>
                </div>
                <div className='reaction-icons comment'>
                    <a href='/'><img src = {IconComment} alt='comment button'/></a>
                </div>
            </div>

        </div>

    </div>

}

export default Feed