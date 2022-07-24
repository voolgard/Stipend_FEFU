import React from 'react';
import './css/grants.css';
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const grants = [{"title": "Стипендия губернатора", "description": "Описание описание описание"},
    {"title": "Стипендия №2", "description": "Описание описание описание"},
    {"title": "Стипендия №3", "description": "Описание описание описание"},
    {"title": "Стипендия №4", "description": "Описание описание описание"},
    {"title": "Стипендия №5", "description": "Описание описание описание"},
    {"title": "Стипендия №6", "description": "Описание описание описание"}]

const requests = [{"title": "Название стипендии", "status": "статус заявки", "date": "01.01.2020"},
    {"title": "Название стипендии", "status": "статус заявки", "date": "01.01.2020"},
    {"title": "Название стипендии", "status": "статус заявки", "date": "01.01.2020"},
    {"title": "Название стипендии", "status": "статус заявки", "date": "01.01.2020"}]

class GrantsItem extends React.Component {
    render() {
        return(
            <div className='grantsItemBlock'>
                <label>{this.props.GrantsTitle}<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83301 20H39.1663" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.5 1.33301L39.1667 19.9997L20.5 38.6663" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </label>
                <span>{this.props.GrantsDesc}</span>
            </div>
        )
    }
}

class GrantsBlock extends React.Component {
    render() {
        return(
            <div className='grantsBlock'>
                {grants.map((value, index) => {
                    return <GrantsItem GrantsTitle={value.title} GrantsDesc={value.description}/>
                })}
            </div>
        )
    }
}

class RequestItem extends React.Component {
    render() {
        return(
            <div className='request'>
                <label>{this.props.RequestTitle}</label>
                <span>{this.props.Status}</span>
                <span>{this.props.Date}</span>
            </div>
        )
    }
}

class RequestsBlock extends React.Component {
    render() {
        return(
            <div className='requestsBlock'>
                <label id='myRequests'>Мои заявки</label>
                <div className='requests'>
                    {requests.map((value, index) => {
                        return <RequestItem RequestTitle={value.title} Status={value.status} Date={value.date}/>
                    })}
                </div>
            </div>
        )
    }
}

class GrantsPage extends React.Component {
    render() {
        return(
            <div>
                <SiteHeader/>
                <GrantsBlock/>
                <RequestsBlock/>
                <SiteFooter/>
            </div>
        )
    }
}

export default GrantsPage;