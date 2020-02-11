import React, { Component } from 'react'
import { Carousel, Flex } from 'antd-mobile';
import axios from 'axios'
const url = 'http://localhost:8080'

export class index extends Component {
    state = {
        data: ['1', '2', '3'],
        swipers: []
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.swiper();
    }

    // 获取轮播图数据
    async swiper() {
        const { data: res } = await axios.get(`${url}/home/swiper`)
        console.log(res)
        if (res.status === 200) {
            this.setState({
                swipers: res.body
            })
        }
    }

    // 渲染轮播图
    swiperDye = () => {
        const { swipers } = this.state;
        return swipers.map(item => (
            <a
                key={item.id}
                // href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: 212 }}
            >
                <img
                    src={`${url}${item.imgSrc}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                />
            </a>
        ))
    }

    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite={true}
                >
                    {this.swiperDye()}
                </Carousel>
                <Flex>
                    <Flex.Item>
                        <img src="" alt=""/>
                        <span>整租</span>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}

export default index
