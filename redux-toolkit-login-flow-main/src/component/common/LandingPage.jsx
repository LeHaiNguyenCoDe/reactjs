import { useSelector } from 'react-redux';

import { selectSignin } from '../signin/signinSlice';
import bender from './bender.png';
import './index.scss'
export function LandingPage() {
  const { loggedInUser } = useSelector(selectSignin);

  return (
    <div className="page-landing">
        <div className="all">
            <div className="lefter">
                <div className="text">Hosting</div>
            </div>
            <div className="left">
                <div className="text">Web Design</div>
            </div>
            <div className="center">
                <div className="explainer"><span>Welcome</span></div>
                <div className="text">Frontend Development</div>
            </div>
            <div className="right">
                <div className="text">Backend Development</div>
            </div>
            <div className="righter">
                <div className="text">SEO</div>
            </div>
        </div>
    </div>
  );
}
