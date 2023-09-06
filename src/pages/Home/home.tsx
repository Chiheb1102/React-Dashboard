import './home.scss';
import TopBox from '../../components/Topbox/TopBox';
import ChartBox from '../../components/Chartbox/ChartBox';
import {chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue} from '../../data'; 
import BarChartBox from '../../components/BarChartBox/BarChartBox';
import PieChartBox from '../../components/PieChartBox/PieChartBox';
import AreaChartBox from '../../components/AreaChartBox/AreaChartBox';

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4"><PieChartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box7"><AreaChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
            <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
        </div>
    );
}
 
export default Home;