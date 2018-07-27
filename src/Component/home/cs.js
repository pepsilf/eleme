import React,{ Component } from "react"

import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Cs extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render(){
        return(
            <WingBlank>
                <Carousel autoplay={false} infinite>
                    {this.state.data.map(val => (
                        <img
                            alt=""
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}

export default Cs