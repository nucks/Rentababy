import { Component } from 'react';
import {observer} from "mobx-react";

const styles = {
    icon: this.props.icon
}

@observer
class BootstrapBox extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 text-center">
                <div className="feature-center animate-box" data-animate-effect="fadeIn">
                    <span className="icon">
                        <i className={ styles.icon }></i>
                    </span>
                    <h3>Free Delivery { this.props.header }</h3>
                    <p>{ this.props.message } Our free delivery policy is unheard of because even at hospitals you have to pay for delivery—not anymore. We're the first to do it because we thought you deserved the best.</p>
                    <p><a href="#" className="btn btn-primary btn-outline">Learn More</a></p>
                </div>
			</div>
        );
    }
}

export default BootstrapBox;
