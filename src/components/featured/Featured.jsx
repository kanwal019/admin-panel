import { KeyboardArrowDownTwoTone, KeyboardArrowUpTwoTone, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import { loremIpsum } from "lorem-ipsum";
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVert fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={7} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$619</p>
                <p className="desc">{loremIpsum()}</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpTwoTone />
                            <div className="tagertAmount">$12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownTwoTone />
                            <div className="tagertAmount">$12.4K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownTwoTone />
                            <div className="tagertAmount">$12.4K</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured