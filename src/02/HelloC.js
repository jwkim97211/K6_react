import logo from '../logo.svg';
import './HelloC.css'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
import HelloYoutube from './HelloYoutube';

export default function HelloC() {

    const apikey=process.env.REACT_APP_MOVIE_API
    console.log(apikey)

    return (
        <div className='hellomain'>
            <img className = "imglogo" src={logo} alt="logo" />
            <div className='flex'>
            <HelloWhite />
            <HelloYoutube />
            <HelloYellow />
            </div>
        </div>
    )
}
