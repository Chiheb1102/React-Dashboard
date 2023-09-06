import './topbox.scss'
import {topDealUsers} from '../../data';

const TopBox = () => {
    return (
        <div className="topbox">
            <h1>Top Deals</h1>
            <div className="list">
                {topDealUsers.map(User => (
                    <ul key={User.id}>
                        <img src={User.img} alt="" />
                        <div>
                            <p>{User.username}</p>
                            <p>{User.email}</p>
                        </div>
                        <span>{User.amount}</span>
                    </ul>
                ))}
            </div>
        </div>
    );
}
 
export default TopBox;