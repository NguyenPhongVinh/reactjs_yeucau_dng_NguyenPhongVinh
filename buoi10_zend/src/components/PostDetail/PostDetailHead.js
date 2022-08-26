import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeVi from 'dayjs/locale/vi';
import { DATE_TEMPLATE } from '../../constants';

dayjs.extend(relativeTime);
dayjs.locale(localeVi);

function PostDetailHead({title, author, viewCount, createdDate}) {
  
  const createdDateObj = dayjs(createdDate);
  const dateFormatted = createdDateObj.format(DATE_TEMPLATE);
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{ title }</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="/"><strong>{author.nickname}</strong></a>
          </li>
          <li className="item date">
            {dateFormatted}
          </li>
          <li className="item views">
            {viewCount} <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            20 <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PostDetailHead