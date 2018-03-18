//index.js
//获取应用实例
const app = getApp();


Page({
    data: {
        swiper:{
            imgUrls: [
                'http://www.superwarren.top/wp-content/uploads/2018/03/wxApp1-1.jpg',
                'https://www.superwarren.top/wp-content/uploads/2018/03/wxApp2.jpg',
                'https://www.superwarren.top/wp-content/uploads/2018/03/wxApp3.jpg',
                'https://www.superwarren.top/wp-content/uploads/2018/03/wxApp4-1.jpg'
            ],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }
    },
    navigateToPicturePage: function () {
        wx.navigateTo({ url: '../pictureWall/pictureWall'})
    }
})
