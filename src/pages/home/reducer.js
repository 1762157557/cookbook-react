import {LOADDATA,SETSHOW,GETLIST} from './action-types'

const defaultState={
    list:[{
      "name": "\u5c0f\u7092\u725b\u8089",
      "id": "785855",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1313\/561c9a314c8bb.jpg\/OTAweDYwMA",
      "all_click": "961.2\u4e07",
      "favorites": "6.0\u4e07",
      "uri": "dishInfo.app?code=78602371",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "2",
      "burdens": "\u9752\u849c\u3001\u5c0f\u7c73\u6912\u3001\u725b\u91cc\u810a\u3001\u9e21\u86cb\u6e05\u3001\u9999\u83dc\u6897\u3001\u8471\u3001\u59dc"
    }, {
      "name": "\u7ea2\u70e7\u8089",
      "id": "785834",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201510\/1311\/561c79f4d4e14.jpg\/OTAweDYwMA",
      "all_click": "3672.3\u4e07",
      "favorites": "10.0\u4e07",
      "uri": "dishInfo.app?code=78600271",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "2",
      "burdens": "\u4e94\u82b1\u8089"
    }, {
      "name": "\u7cd6\u918b\u6392\u9aa8",
      "id": "786082",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201509\/0722\/55ed97982b6fc.JPG\/OTAweDYwMA",
      "all_click": "3334.9\u4e07",
      "favorites": "20.4\u4e07",
      "uri": "dishInfo.app?code=78625071",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "2",
      "burdens": "\u6392\u9aa8"
    }, {
      "name": "\u6e05\u84b8\u9c7c",
      "id": "778816",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/caipu\/201508\/3113\/311354095180.jpg\/OTAweDYwMA",
      "all_click": "1358.8\u4e07",
      "favorites": "7.0\u4e07",
      "uri": "dishInfo.app?code=77898471",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "2",
      "burdens": "\u8349\u9c7c"
    }, {
      "name": "\u897f\u7ea2\u67ff\u7092\u9e21\u86cb",
      "id": "801048",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/caipu\/201601\/1914\/191406289.jpg\/OTAweDYwMA",
      "all_click": "624.1\u4e07",
      "favorites": "3.1\u4e07",
      "uri": "dishInfo.app?code=80121673",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "9",
      "burdens": "\u9e21\u86cb\u3001\u9999\u83dc\u3001\u897f\u7ea2\u67ff\u3001\u8471\u3001\u5927\u849c"
    }, {
      "name": "\u849c\u9999\u6392\u9aa8",
      "id": "780819",
      "img": "http:\/\/s1.cdn.jiaonizuocai.com\/videoImg\/201509\/0722\/55eda07f5974c.JPG\/OTAweDYwMA",
      "all_click": "949.4\u4e07",
      "favorites": "5.7\u4e07",
      "uri": "dishInfo.app?code=78098771",
      "is_fine": 1,
      "has_make_img": 1,
      "is_exclusive": "2",
      "burdens": "\u6392\u9aa8"
    }]
      ,isShow:false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState,action)=>{
    switch (action.type) {
        case LOADDATA:
            return {
                ...state,
                list:action.data
            }
            
        case SETSHOW:
          return {
            ...state,
            isShow:action.data
        }
          
        default:
            return state
              }
}