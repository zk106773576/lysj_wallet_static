/**
 *中文内容放置在zh下，外语内容放置在对应语种下 如英文内容在en下。
 *内容按注释填写
 */
const mediaList = {
    zh: {
        communityList: [
            //两个一组
            //userFace 评价头像  URL 
            //userName 评价用户名 字符 max 10字
            //userTitle 评价人偷闲 字符 max 10字
            //userIntroduce 评价人简介 字符 max 10字
            //evaluate 评价 字符 max 90字
            [{ userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GitHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            { userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GaytHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            ],
            [{ userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GeoHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            { userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GncHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            ],
            [{ userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GeoHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            { userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GncHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            ],
            [{ userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GeoHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            { userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GncHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            ],
            [{ userFace: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596605129046&di=e47c58cec6f568f41b25beb33a208961&imgtype=0&src=http%3A%2F%2Fbbsimg.res.flyme.cn%2Fforum%2F201512%2F17%2F014758mlw1j471jvh47ng7.png', userName: 'GeoHub', userTitle: 'CEO', userIntroduce: 'Bitcoin Asic Manufacturing Company', evaluate: '是我们最大的客户之一，也是我们的可靠合作伙伴。他们透明的挖矿场所和高效的软件基础设施配合上我们的高端挖矿硬件，为所有挖矿爱好者们创造了卓越、独特的产品和用户体验！' },
            ],
        ],
        videoList: [
            //posterSrc 封面  videoSrc视频源
            { posterSrc: 'https://i.alipayobjects.com/i/ecmng/png/201501/4Jdkug9K2v.png', videoSrc: 'https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4' },
            { posterSrc: 'https://i.alipayobjects.com/i/ecmng/png/201501/4Jdkug9K2v.png', videoSrc: 'https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4' },
        ],
        newsList: [

        ]
    },
    en: {

    }
}

// export default mediaList
