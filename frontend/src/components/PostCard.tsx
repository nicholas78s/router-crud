import { useNavigate } from "react-router-dom";

interface PropsType {
  //content: string, 
  created?: number | undefined,
  close: boolean,
  children?: React.ReactNode
}

function dateDiff(date1: Date, date2: Date, value: string) {
  let diffInTime = date2.getTime() - date1.getTime();
  let d = (value == 'minutes') ? 1000 * 60 : 
    (value == 'hours') ? 1000 * 60 * 60 : 
      (value == 'days') ? 1000 * 60 * 60 * 24 : 1;

  return (diffInTime / d);
}

export const PostCard = ({created, close, children}: PropsType) => {
  let createdString = '';
  if (created) {
    const createdDate = new Date(created);
    const now = new Date();
    const diffMinutes = dateDiff(createdDate, now, 'minutes');
    const diffHours = dateDiff(createdDate, now, 'hours');
    const diffDays = dateDiff(createdDate, now, 'days');
    createdString = (diffMinutes < 60) ? diffMinutes.toFixed(0) + ' мин.' :
      (diffHours < 24) ? diffHours.toFixed(0) + ' час.' :
        diffDays.toFixed(0) + ' дн.';
    createdString = '~ ' + createdString;
  }

  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate(-1);
  }

  return (
    <div className="post-card">
      {close &&
        <div className="close-container">
          <span className="close" onClick={handleCloseClick}>x</span>
        </div>
      }
      {created && <div className="created"><span className="user-name">Пользователь</span> {createdString}</div> }      
      {children}
    </div>
  )
}


