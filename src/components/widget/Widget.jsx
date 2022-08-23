import "./widget.scss";
import { AccountBalanceWalletTwoTone, ShoppingCartTwoTone, PeopleAlt, KeyboardArrowUpTwoTone, AttachMoneyTwoTone } from "@mui/icons-material";

const Widget = ({ type }) => {
    const amount = 100;
    const diff = 20;

    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PeopleAlt className="icon" />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: (
                    <ShoppingCartTwoTone className="icon" />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <AttachMoneyTwoTone className="icon" />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletTwoTone className="icon" />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpTwoTone />
                    20 %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget