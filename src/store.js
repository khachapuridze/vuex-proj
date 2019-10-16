import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        amount: 4900000000,
        items:[
            {
                title:"ხე",
                price: 3750000,
                img:'https://media.treehugger.com/assets/images/2019/07/angeltree.jpg.1200x0_q70_crop-smart.jpg',
                amount: 0
            },
            {
                title:"კარფური",
                price: 5200000,
                img:'https://www.languedocliving.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-17-at-16.41.11.jpg',
                amount: 0
            },
            {
                title:"porsche",
                price: 178000,
                img:'https://upload.wikimedia.org/wikipedia/commons/1/10/Porsche_992_Cabrio%2C_GIMS%2C_Le_Grand-Saconnex_%28GIMS0127%29.jpg',
                amount: 0
            },
            {
                title:"სამშობლო",
                price: 1,
                img:'https://upload.wikimedia.org/wikipedia/ka/9/95/Geo-map.png',
                amount: 0
            },
            {
                title:"ზვიგენი",
                price: 580000,
                img:'https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg',
                amount: 0
            },
            {
                title:"შუშის სასახლე",
                price: 100500000,
                img:'https://www.shin.ge/pictures/image16/382e0128bef64301488e2160b64829e7.jpg',
                amount: 0
            },
            {
                title:"modern house",
                price: 15000000,
                img:'https://cdn.vox-cdn.com/thumbor/mwdkCtzfXICFeiC1UieFdpfNoL0=/0x0:3600x2754/1200x800/filters:focal(1512x1089:2088x1665)/cdn.vox-cdn.com/uploads/chorus_image/image/64920979/395_Detroit_St.25_forprintuse.0.jpg',
                amount: 0
            },
            {
                title:"პინგვინი",
                price: 500000,
                img:'https://ross.on.ge/2016/05/03/emperor-penguin_5728aa91be387.jpg',
                amount: 0
            }




        ]
    }
});
