(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a217bf22"],{1474:function(t,e,a){"use strict";var i=a("477d"),r=a.n(i);r.a},"477d":function(t,e,a){},"4a84":function(t,e,a){"use strict";var i=a("5b9f"),r=a.n(i);r.a},"5b9f":function(t,e,a){},6394:function(t,e,a){"use strict";var i=a("cbc1"),r=a.n(i);r.a},a6c1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"confirm-container"},[i("div",[i("el-dialog",{attrs:{title:"",visible:t.confirmOrderVisible,width:"770px","append-to-body":!0,"before-close":t.confirmOrderClose},on:{"update:visible":function(e){t.confirmOrderVisible=e}}},[i("div",{staticClass:"order-content"},[i("div",{staticClass:"wait-icon"},[i("img",{attrs:{src:a("f720"),alt:""}})]),i("div",{staticClass:"wait-tips"},[t._v(t._s(t.$t("app.confirmOrder.label.waitTips")))]),i("div",{staticClass:"wait-time"},[t._v(t._s(t.$t("app.confirmOrder.label.countdown")))]),i("div",{staticClass:"order-info"},[i("table",{staticClass:"info-table"},[i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.name")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.name))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.dayIncome")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.dailyIncome))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.timeLimit")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.timeLimit))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.onlineDate")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.onlineDate))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.orderNumber")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.orderNumber))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.createTime")))]),i("td",{staticClass:"t-value",attrs:{width:"388"}},[t._v(t._s(t.orderData.createTime))])]),i("tr",[i("td",{staticClass:"t-title",attrs:{width:"148"}},[t._v(t._s(t.$t("app.confirmOrder.label.totalPrice")))]),i("td",{staticClass:"t-value price",attrs:{width:"388"}},[t._v("USDT "+t._s(t.orderData.totalPrice))])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"product"===t.source,expression:"source==='product'"}],staticClass:"exit-tips"},[t._v(t._s(t.$t("app.confirmOrder.label.waitPayTips")))])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{loading:t.btnLoad},on:{click:t.confirmOrderClose}},[t._v(t._s(t.$t("app.confirmOrder.btn.cancel")))]),i("el-button",{attrs:{loading:t.btnLoad,type:"primary"},on:{click:t.confirmPayDialogOpen}},[t._v(t._s(t.$t("app.confirmOrder.btn.pay")))])],1)])],1),i("div",[i("el-dialog",{attrs:{title:"",visible:t.confirmPayDialogVisible,width:"500px","before-close":t.confirmPayDialogClose},on:{"update:visible":function(e){t.confirmPayDialogVisible=e}}},[i("div",[i("el-form",{ref:"confirmForm",attrs:{model:t.confirmForm,"label-suffix":"：","label-width":"auto"}},[i("el-form-item",{attrs:{label:t.$t("app.confirmOrder.form.label.dealPassword"),prop:"dealPassword"}},[i("el-input",{attrs:{type:"password",clearable:"","auto-complete":"new-password"},model:{value:t.confirmForm.dealPassword,callback:function(e){t.$set(t.confirmForm,"dealPassword",e)},expression:"confirmForm.dealPassword"}})],1),i("el-form-item",{attrs:{label:"PIN",prop:"pin"}},[i("el-input",{attrs:{type:"password",clearable:"","auto-complete":"new-password"},model:{value:t.confirmForm.pin,callback:function(e){t.$set(t.confirmForm,"pin",e)},expression:"confirmForm.pin"}})],1)],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{loading:t.btnLoad},on:{click:t.confirmPayDialogClose}},[t._v(t._s(t.$t("app.confirmOrder.form.label.cancelPay")))]),i("el-button",{attrs:{loading:t.btnLoad,type:"primary"},on:{click:t.paySubmitBefore}},[t._v(t._s(t.$t("app.confirmOrder.form.label.confirmPay")))])],1)])],1)])},r=[],s=(a("b680"),a("cda2")),o=a("4328"),n=a.n(o);function c(t){return Object(s["b"])({url:"/business/app/order/order_detail",method:"get",params:{orderId:t}})}function l(t){return Object(s["b"])({url:"/business/app/order/confirm_payment",method:"post",data:n.a.stringify(t)})}var d=a("4128"),u={data:function(){return{btnLoad:!1,confirmOrderVisible:!1,source:"order",orderData:{},confirmPayDialogVisible:!1,confirmForm:{orderId:"",dealPassword:"",pin:""}}},props:{orderId:{type:String,default:""}},computed:{dayFee:function(){var t=new d(this.orderData.money||0).div(this.orderData.timeLimit||0),e=new d(t).toFixed(2);return e}},methods:{confirmOrderClose:function(){this.orderData={},this.confirmOrderVisible=!1},confirmOrderOpen:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"order";this.source=e,this.confirmOrderVisible=!0,this.$nextTick((function(){t.getOrderInfo()}))},getOrderInfo:function(){var t=this,e=this.orderId;c(e).then((function(e){t.orderData=e.data})).catch((function(t){}))},confirmPayDialogClose:function(){this.confirmForm.dealPassword="",this.confirmForm.pin="",this.confirmPayDialogVisible=!1},confirmPayDialogOpen:function(){var t=this;this.confirmPayDialogVisible=!0,this.$nextTick((function(){t.confirmForm.orderId=t.orderId||""}))},paySubmitBefore:function(){var t=this,e=JSON.parse(JSON.stringify(this.confirmForm));l(e).then((function(e){t.$notify({offset:120,title:t.$t("app.confirmOrder.form.message.orderSuccess"),message:e.msg,type:"success"}),t.btnLoad=!1,t.confirmPayDialogClose(),t.confirmOrderClose(),t.$emit("refresh")})).catch((function(e){t.btnLoad=!1}))}}},p=u,m=(a("6394"),a("2877")),f=Object(m["a"])(p,i,r,!1,null,"3c5b18b2",null);e["a"]=f.exports},cbc1:function(t,e,a){},ceff:function(t,e,a){t.exports=a.p+"img/so_zh.31d0463b.png"},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var r=a[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(a);)a=a.replace(r,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",r.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,r="webkit moz ms o".split(" "),s=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var n=void 0,c=0;c<r.length&&(!s||!o);c++)n=r[c],e.requestAnimationFrame=s=s||window[n+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"];s&&o||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),r=window.setTimeout((function(){t(e+a)}),a);return i=e+a,r},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,a,i){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var n="function"==typeof s?s.options:s;if(e&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns),a&&(n._scopeId=a),i){var c=Object.create(n.computed||null);Object.keys(i).forEach((function(t){var e=i[t];c[t]=function(){return e}})),n.computed=c}return{esModule:r,exports:s,options:n}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},ef79:function(t,e,a){t.exports=a.p+"img/so_en.2c9df755.png"},f720:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAKh0lEQVRoQ9Vba5AU1RX+vp59IMtDQCOgRlIxioFld3oKJT4DiihKKHZ7RoKPxMrDmNKoqEhMSHxgLBQ1scoYLYMlYjDTM4IIJioEAorRcnp4rRrLaIKaEANooq7uY/qk7syy293Ts9PMzuByf0313HvO+e4599w+jyYqNOSBSDWGyySAJ4EyDoLxAEaDGAhwUI6tfAxBK4j3ALSA3IFM50s4fOtfOBmdlRCN5SQqq+uHoa06CkETBKeCrCuNvnwMYBNsSaJakpy15cPS6OSvKgtg+X3jKdC0a0FMB1hbLuG6rKANwBrYspix9It9pd0nwBIPn4EQb4bwjL4KEnD9BmhYwKbU8wHn500rCbDEx40EaxeDmAOwOA3BLlDeAPAWhB+B8r/cEeYQUAZD8GWQXwEwsjgQEQDL0N5+Pefs+Hfx+e4ZxYX1UJR4wyxooSUADy3ITOQDEAkQ68DO9Wza9n4QweTJ8Uego3oKoJ0JSHOvPIC9sO1LGUuvCkJ735zAgGU9qrBbvxPEVb1o9QXAvgd2+1OMtbTvjyDeufL0sbVoHTIT4FwAJ/nTEoHgLog1nzFkgvALBFiWHTsEA4YkAZ5VgPEr0Owb2bTluSBM93eOmOFzQd4OsMF3rcgfIW1RxlqUd+91FAUsj0ZG4RD5gy8zwW5o9nw0pZeQUGerYkPiCIGRy6DJQgiH5TESbIGG6WxO/as3IXoFLI/VD0NtzSYA4/IZyCbUyGzOTP+zYih9CEsyfAxsxEHtRJ+/dyCUOa23e7sgYFk6oQ4Dq9YCnORD+F7YqblBz025N0Ti42oQqrkPon3XRxGbIe+fxdi7n/rxLQw4oS8FeLF7kboS5Doa6bvLDaIUemJGbgXlJ3lOlPZDbE5/LzBgMfULQS7LXyBzaVj3lCJcpdbkQOOnefRtO8pYOuF9nqdhSU44ClL9KoDBrsmCexlNXVUpwftCV/yt8UPYbScw1rLLSTsfcEJfBXCGx5TXYoc1jTfB7otglVqbPdMcsAmEx5FJnIZ1QUHAYjbOBEMrPYLthP1ZmLGWvZUSuBx0Zfn4o1FVa4E4zG2ZndMY3frsvmcuDUsikgKguxfIDEat1eUQqtI0xNQvBbnEI/+LjFon5wEWs/HrYGi9x5RX07A85l1psUunLwIiqT8PsBtglppkTmF0y2b1s1vDYupJkE097NQVlKmnsbWldBEO/EpJRiZD8CeP4pI0LKMbcO6NqnoXwBoH4JU0rFkHXuS+cxQz8pLbgUk7tNbRbHp9T1bDktS/D+EDbtvPTGZ0y4a+sz/wFMQMzwa15R4tX0HDui8HOKE/54qERHYyah1z4EUtD0dZP2YA9oxQMbjzXWI9jdQUZrOLI/BfAId0syMWsTk1vzzsPx8qktAfBXhRN3eRdhy2dyh9vTMxhc0pj8f+fAQvlask9IsAPupab8uZFFOfB3KR449W2J8N62vGolRBy7VOkieMggz0hK4yj5LQHwb4bYd3foWGNbFcjD9POmJGdoE4wnFUH1KAX/TEvL+jkbowqKDycOOhqMN0MDQasNOMptf1tlbiE44Hq8+EypBonevYtFVlMwsOMRvOBqomgPZ7+OyjNbzozVzGM8CQhL4R4GkOZW5UJv0PkF907MJCNqcWBKAHSTZOhISeBDDK4RxWdeWX8pJ4kgjPBTR1fKqy8wUdoP0jGunfePlJ/KhDoH1hBcBpDtneQab9PMa2bw8kX771vklJRPYAGN4jsD2f0bTzTBfe/UTkrwCOy5sguJ7R1GLnc4lH6qHJ1rxgXZCByFjGrDdd85PhWyCaz8aLRcOKBAKc1BdBOM+h4f8owB3dO57752oaqV8VIyiPNxyHqioF2GfIRhqWqxohZuTHIH7hO93G1Yy5eYqpvwLSH1i1fWSQXJokIupqvb1HmeigmJF2ENWOh9cxmrqrKODljWNQHXq7AOBNNKzTXRozw9eCmkvrjmNwDaPWL90a1jdD+DVf+uw4ms3b3i0qoxm5DsSdjnkdSsO7AYzoeWjfQiP982LEskcwEVFnSZVB3cPPpBORsRBRJVHNMzsD28ekTf1GkLf5yGHRSAUz6UT4ZkD7mUOZu5WXfhvgGAfhu2mkrg0EODlBh131FMjRjnOyEnbbBX73uJjhK0FNJQBzTguirOtKNlsP5u3Zw2MGYNDwFSDPcfy3E+icHjSCE1O/B+TVjvVvKS+9GXSZzkoaqcBRUve1BI4ExSoWcEiifiykZooKUiFY53VWecCfaJyKTKgBIu8AbWuCVBf20RBTfxLkNxzK2KzO8CMgLnE8fI2G9dUgGu7vc8TU3+iqSnaJKkuUSau87kKHnXdgSMcwTtv2SX8H1Jt8uXrYUJWHCzmUOY+5QpX2tMfrnEPDeuagBmzq54N8yoVBMpMp8XGDwAF7PVfTIkYP8vAw32F9ij0YmksAmPoLoDPxJX+nYX3pYNWw3AQN4/WdAI90mPNaGtbUfRmPawC660UipzNqqcrhQTck3jgVWqg7F50DYP+QRvr+HOB4+HBomoodu+7H7It9gtFU9KBDm7NY9W5wvkO77RjQMZLnb/+gJ02b0FWF352mtdnAWCpQZNJfNkYeb5yIqtDLbmfVo7wewEl9EoSePih5hoblfNPpL7gKyiEJ/c8AXe/xACbRSL2kFnlLLSqBPdlFjdLEZmtFv0eay77m57Eg62hY3b0pbsCmfhoItUPO5+8ilKkvZ/tfJTavq3dsG8jDHWdXIPap+8oseRrOOrBE+DFAm+M+A7KKUWtmJQQtB82ua+iZvC4jwVJGU99y8sivD2e7dvAagKEe0Dcwat1RDgHLTUNM/TaQN7rpyodobx/r7dbz7fEQU2/KdtK5TFtsCGczmjLLLXBf6Ek8/B1o2kMesKqFaiYNy/1q6XVazkU+saQy+DaIfTGjW/oF6K56sIqle94fsudS7mDUusFvIwt38ahWwz36GoBne0xbaXquNwfVFy2VslbMyAJQbvZpg3wazakZpH97Ru+Nab89fjCGDNoIojFfKFmGWl7GGanWUgQudY3EI0NBWeoO7PdREwutnafzksKhbfHWw2RkFGxZC9IvKfA6JHN5sSxHqeC86yQZOQ8i9wH0q2y24FNM5cV9aD3s3rcnxo6APVD1W/qUYLL9yyY6O2/l7G07ygXO5U/iDSeCoZtAnutLX+yX0d55Di/c/kEx/kU13A1amfehdQ8qT12QqOBZMHM/9oTW8LKUyneXPEQl8QYPmwXhFe7QNU/vy2C3XR401xUYcDfwRPibAH9dpHlbVTNM0F6HNm0D56RUKrjokOXh0ajiZBBTADbnvQu41J5tQv8BDStelLBjwn4Dznr9bOd6zWJXwbmw2pXJ/w2ABcGrEPkImvoMAIQtg0HVCkz1mY8OoqfG1SsK+xFomXlBO+2dpEoC3HO2w2fA5i0+0cn+bHrwuYINECxg7AB/5JHvPRtPgZ39jOc8dydQcCyFZ4qqQq7uF5/x5AGPjxsO1qosSVO2LktH38j+YW8FZBMEKyBtZjnbHvtk0r1hkHuPrcURdSdDC00EUQ/h+Gw1XlAHoq7rg4FPQKj89y5AWiDYDtgvQzo2V6rl4v9QGgnvMIWfVwAAAABJRU5ErkJggg=="},fedb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"core-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"currency-list"},[t._l(t.coinOption,(function(e){return[a("div",{key:e.id,class:[t.selectId===e.id?"currency-active":"","currency-item"],on:{click:function(a){return t.selectCoin(e)}}},[a("span",[t._v(t._s(e.shortName||e.name))])])]}))],2)]),a("el-col",{attrs:{span:20}},[t._l(t.productList,(function(e){return[a("productCard",{key:e.id,attrs:{"product-details":e,"product-coin-details":t.selectIdCoinData},on:{trialOrder:t.trialOrder}})]}))],2)],1),a("div",[a("confirmOrder",{ref:"confirmOrder",attrs:{"order-id":t.currOrderId}})],1)],1)},r=[],s=a("a6c1"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block-container"},[a("div",{staticClass:"item-col-1"},[a("table",[a("tr",{staticClass:"item-title"},[a("td",{attrs:{width:"270"}},[t._v(t._s(t.$t("app.product.card.hashPower")))]),a("td",{attrs:{width:"140"}},[t._v(t._s(t.$t("app.product.card.dayLimit")))])]),a("tr",{staticClass:"col-1-row-1"},[a("td",[a("span",[t._v(" "+t._s(t.dayFee)+" ")]),a("span",{staticClass:"money-day"},[t._v(t._s(t.dayFeeUnit))])]),a("td",[t._v(t._s(t.productDetails.timeLimit)+" "+t._s(t.$t("general.dayUnit")))])]),a("tr",{staticClass:"item-title"},[a("td",[t._v(t._s(t.$t("app.product.card.estimateOut")))]),a("td",[t._v(t._s(t.$t("app.product.card.outRate")))])]),a("tr",{staticClass:"col-1-row-2"},[a("td",{staticClass:"estimate"},[a("span",[t._v(t._s(t._f("MIXIN_SC_TO_NUM")(t.productDetails.dailyOutPutCoin))+" ")]),a("span",{staticClass:"money-day"},[t._v(t._s(t.productCoinDetails.shortName)+" / "+t._s(t.$t("general.dayUnit")))]),a("br")]),a("td",{staticClass:"return-rate"},[a("span",[t._v(" "+t._s(t.productDetails.minReturn)+"% "+t._s(t.$t("general.baseTo"))+" "+t._s(t.productDetails.maxReturn)+"% ")]),a("br")])])])]),a("div",{staticClass:"item-col-2"},[a("div",{staticClass:"item-title"},[t._v(" "+t._s(t.$t("app.product.card.choiceCFSP"))+" ")]),a("div",{staticClass:"item-slider"},[a("div",{staticClass:"block"},[a("el-slider",{attrs:{min:t.productDetails.minOrderNumber,step:1,max:t.productDetails.maxOrderNumber,"show-tooltip":!0,"format-tooltip":t.formatTooltip,marks:t.handleMark},on:{change:t.maxLimit},model:{value:t.pcs,callback:function(e){t.pcs=e},expression:"pcs"}})],1)]),a("div",{staticClass:"item-stock"},[a("el-input-number",{ref:"pcsInput",staticStyle:{width:"100%"},attrs:{size:"small",min:t.productDetails.minOrderNumber,max:t.actualMax,"controls-position":"right",placeholder:"算力"},model:{value:t.pcs,callback:function(e){t.pcs=e},expression:"pcs"}})],1),a("div",{staticClass:"item-input"},[a("div",{staticClass:"item-time"},[a("p",{directives:[{name:"show",rawName:"v-show",value:Boolean(t.productDetails.beginTime),expression:"Boolean(productDetails.beginTime)"}],staticClass:"title"},[t._v(t._s(t.$t("app.product.card.launchDate"))+t._s(t.$t("general.colon")))]),a("p",{directives:[{name:"show",rawName:"v-show",value:Boolean(t.productDetails.beginTime),expression:"Boolean(productDetails.beginTime)"}],staticClass:"time"},[t._v(" "+t._s(t.$t("app.product.card.startTime"))+" "+t._s(t.productDetails.beginTime)+" "),a("br"),t._v(" "+t._s(t.$t("app.product.card.endTime"))+" "+t._s(t.productDetails.endTime)+" ")])])])]),a("div",{staticClass:"item-col-3"},[a("p",{staticClass:"simple"},[t._v(t._s(t.pcs)+" "+t._s(t.productCoinDetails.hashPowerUnit))]),a("div",{staticClass:"start"},[a("span",[t._v(t._s(t.productDetails.onlineDate?t.$t("app.product.card.startupDay")+"："+t.productDetails.onlineDate:t.$t("app.product.card.restartNow")))])]),a("div",{staticClass:"checked"},[a("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(t._s(t.$t("app.product.card.agreement")))])],1),a("div",{staticClass:"buy-btn"},[a("el-button",{staticStyle:{width:"270px",height:"40px"},attrs:{type:"primary",round:"",disabled:!t.checked||"1"!==t.allowResult,loading:t.btnLoad},on:{click:t.buySubmit}},[t._v(" "+t._s(t.allowEnum[t.allowResult])+" ")])],1)]),t.allowStock?t._e():a("div",{staticClass:"sell-out"},[a("img",{attrs:{src:t.sellOut[t.$i18n.locale],alt:""}})])])},n=[],c=(a("99af"),a("b680"),a("ec1b")),l=a.n(c),d=a("4128"),u={data:function(){return{btnLoad:!1,pcs:0,checked:!1,marks:{},marks2:{100:"100",500:"500",2e3:"2000",5e3:"5000",1e4:"10000"},allowEnum:{0:"...",1:this.$t("app.product.card.buyBtn"),2:this.$t("app.product.card.noSaleBtn"),3:this.$t("app.product.card.noStockBtn")},sellOut:{zh:a("ceff"),en:a("ef79")}}},props:{productDetails:{type:Object,default:{}},productCoinDetails:{type:Object,default:{}}},components:{countTo:l.a},watch:{},computed:{actualMax:{get:function(){var t=this.productDetails.limit||0,e=this.productDetails.maxOrderNumber||0,a=t<=e?t:e;return a}},allowStock:{get:function(){return this.productDetails.stock>0}},allowDate:{get:function(){var t=this.productDetails.beginTime?new Date(this.productDetails.beginTime):0,e=this.productDetails.endTime?new Date(this.productDetails.endTime):0,a=(new Date).getTime();return 0===t||0===e||!(a<t)&&(!(a>e)&&(a<e&&a>t||void 0))}},allowResult:{get:function(){return this.allowStock&&this.allowDate?"1":!1===this.allowDate?"2":!1===this.allowStock?"3":"0"}},handleMark:function(){var t={},e=this.productDetails.minOrderNumber,a=this.productDetails.maxOrderNumber,i=this.stepSet(this.productDetails.maxOrderNumber)||100;t[e]="".concat(e);for(var r=e;r<=a;r++)r%i===0&&(t[r]="".concat(r));return t[a]="".concat(a),t},localTotalCalc:function(){var t=new d(this.productDetails.money||0).mul(this.pcs||0),e=new d(t).toFixed(2);return e},practicalTotalCalc:function(){var t=new d(this.productDetails.simpleMoney||0).mul(this.pcs||0),e=new d(t).toFixed(2);return e},dayFee:function(){var t=new d(this.productDetails.simpleMoney||0).div(this.productDetails.timeLimit||0),e=new d(t).toFixed(6);return e},dayFeeUnit:function(){var t="".concat(this.productCoinDetails.hashPowerUnit,"/").concat(this.$t("general.dayUnit"));return t}},mounted:function(){},methods:{stepSet:function(t){var e=500;return e=t>0&&t<=200?50:t>200&&t<=300?100:t>300&&t<=600?200:t>600&&t<=900?300:t>900&&t<=1200?400:t>1200&&t<=1500?500:t>1800&&t<=2100?600:t>2100&&t<=5e3?1500:t>5e3&&t<=1e4?2e3:t>1e4&&t<=2e4?5e3:t>2e4&&t<=3e4?1e4:t>3e4&&t<=6e4?2e4:2500,e},formatTooltip:function(t){return t+" "+this.productCoinDetails.hashPowerUnit},maxLimit:function(t){t>this.actualMax&&(this.$refs["pcsInput"].focus(),this.pcs=this.actualMax,this.$notify({title:"系统",message:"购买上限为：".concat(this.actualMax),type:"warning"}))},buySubmit:function(){var t=this,e=this.productDetails.hashPowerId,a=this.pcs;e&&a&&(this.btnLoad=!0,setTimeout((function(){t.$emit("trialOrder",e,a),t.btnLoad=!1}),600))}}},p=u,m=(a("4a84"),a("2877")),f=Object(m["a"])(p,o,n,!1,null,"2669c7a2",null),h=f.exports,b=a("cda2"),v=a("4328"),w=a.n(v);function y(){return Object(b["b"])({url:"/product/app/pay_product/product_coin",method:"get",params:{}})}function D(t){return Object(b["b"])({url:"/product/app/pay_product/product",method:"get",params:{pageNumber:1,pageSize:9999,coinId:t}})}function O(t,e){return Object(b["b"])({url:"/business/app/order/create_order",method:"post",data:w.a.stringify({hashPowerId:t,hashPower:e})})}var g={components:{productCard:h,confirmOrder:s["a"]},data:function(){return{coinOption:[],selectId:"",selectIdCoinData:{},productList:[],currOrderId:""}},mounted:function(){this.getPayProductCoin()},methods:{getPayProductCoin:function(){var t=this;y().then((function(e){t.coinOption=e.data||[],e.data.length>0&&(t.selectId=e.data[0].id,t.selectCoin(e.data[0]))})).catch((function(e){t.coinOption=[]}))},selectCoin:function(t){this.selectId=t.id,this.selectIdCoinData=t,this.getPayProductItems(t.id)},getPayProductItems:function(t){var e=this;D(t).then((function(t){e.productList=t.data.records||[]})).catch((function(t){}))},trialOrder:function(t,e){var a=this;t&&e&&O(t,e).then((function(t){t.data&&a.submitPayOpenDetail(t.data)})).catch((function(t){}))},submitPayOpenDetail:function(t){this.currOrderId=t.id,this.$refs["confirmOrder"].confirmOrderOpen("product")}}},C=g,_=(a("1474"),Object(m["a"])(C,i,r,!1,null,"750349de",null));e["default"]=_.exports}}]);