<template>
    <div class="pricing-grid">
        <div class="container">
            <div class="mode">
                <span class="on">Monthly</span>
                <div class="switch" @click="toggleSwitch"></div>
                <span>Yearly</span>
            </div>
            <div class="grid">
                <div class="content">
                    <div class="item">
                        <div>
                            <strong class="title">Basic</strong>
                            <p class="description">Includes basic usage of our platform. <br> Recommended for new and aspiring photographers.</p>
                            <div class="price visible-lg visible-xs">
                                <strong>$19.00</strong>
                                <small>per month</small>
                            </div>
                            <button class="btn btn-primary">PICK PLAN</button>
                        </div>
                        <div class="price visible-sm">
                            <strong>$19.00</strong>
                            <small>per month</small>
                        </div>
                    </div>
                    <div class="item middle">
                        <div>
                            <strong class="title">Pro</strong>
                            <p class="description">More advanced features available. <br> Recommended for photography veterans and professionals.</p>
                            <div class="price visible-lg visible-xs">
                                <strong>$39.00</strong>
                                <small>per month</small>
                            </div>
                            <button class="btn btn-secondary">PICK PLAN</button>
                        </div>
                        <div class="price visible-sm">
                            <strong>$39.00</strong>
                            <small>per month</small>
                        </div>
                    </div>
                    <div class="item">
                        <div>
                            <strong class="title">Business</strong>
                            <p class="description">Additional features available such as more detailed metrics. <br> Recommended for business owners.</p>
                            <div class="price visible-lg visible-xs">
                                <strong>$99.00</strong>
                                <small>per month</small>
                            </div>
                            <button class="btn btn-primary">PICK PLAN</button>
                        </div>
                        <div class="price visible-sm">
                            <strong>$99.00</strong>
                            <small>per month</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pricing-grid",
        methods:{
            toggleSwitch(){
                let toggle = document.getElementsByClassName("switch")[0]
                let spans = (document.getElementsByClassName("mode")[0]).getElementsByTagName("span")
                let priceGridItems = document.getElementsByClassName("item")
                toggle.classList.toggle("on")
                for(let i = 0; i < spans.length; i++){
                    spans[i].classList.toggle("on")
                }
                for (let j = 0; j < priceGridItems.length; j++){
                    let prices = priceGridItems[j].getElementsByClassName("price")
                    for (let k = 0; k < prices.length; k++){
                        if (toggle.classList.contains("on")){ //means we're displaying prices for year
                            prices[k].getElementsByTagName("strong")[0].innerText = "$"+(parseFloat(prices[k].getElementsByTagName("strong")[0].innerText.split("$")[1]) * 10)+".00"
                            prices[k].getElementsByTagName("small")[0].innerText = "per year"
                        }else{//we're displaying prices for month
                            prices[k].getElementsByTagName("strong")[0].innerText = "$"+parseFloat((prices[k].getElementsByTagName("strong")[0].innerText.split("$")[1]) / 10)+".00"
                            prices[k].getElementsByTagName("small")[0].innerText = "per month"
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pricing-grid{
        display: flex;
        justify-content: space-around;
        margin: 50px 0;

        .container{
            max-width: 1440px;
            .mode{
                width: 255px;
                height: 50px;
                margin: 0 auto 40px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: rgba(0,0,0,.4);
                span{
                    font-weight: bold;
                    &.on{
                        color:black ;
                    }
                }
                .switch{
                    height: 32px;
                    width: 64px;
                    background: var(--pure-black);
                    border-radius: 100px;
                    position: relative;
                    &.on{
                        &:before{
                            left: calc(100% - 29px);
                        }
                    }
                    &:before{
                        content: "";
                        width: 24px;
                        height: 24px;
                        background: var(--pure-white);
                        border-radius: 100%;
                        position: absolute;
                        top: 4px;
                        bottom: 4px;
                        left: 4px;
                        transition: left ease-in-out .15s;
                    }
                }
            }
            .grid{
                display: flex;
                justify-content: space-around;
                align-items: center;
                /*border: solid black 1px;*/
                width: 100%;
                max-width: 1110px;
                margin: 0 auto;
                .content{
                    /*border: solid green 1px;*/
                    display: flex;
                    align-items: center;
                    @media screen and (max-width: 770px){
                        flex-flow: wrap;
                    }
                    .item{
                        max-width: 350px;
                        width:100%;
                        position: relative;
                        height: 407px;
                        padding: 40px;
                        font-size: 15px;
                        display: flex;
                        background: rgba(223, 223, 223,.3);
                        @media screen and (max-width: 770px){
                            max-width: 100%;
                            height: fit-content;
                            justify-content: space-between;
                        }
                        @media screen and (max-width: 500px){
                            max-width: 100%;
                            height: fit-content;
                            justify-content: space-around;
                            padding: 40px 20px;
                        }
                        &>div:first-child{
                            align-self: center;

                            .title{
                                display: block;
                                text-align: center;
                                font-size: 24px;
                                font-weight: bold;
                                margin-bottom: 20px;
                            }
                            .description{
                                margin-bottom: 40px;
                                text-align: center;
                                color: rgba(0,0,0,.6);
                            }

                            .btn{
                                width: 100%;
                                display: block;
                                text-align: center;
                                padding: 12px;
                                font-size: 12px;
                                height: 40px;
                            }
                        }

                        .price{
                            margin-bottom: 40px;
                            strong{
                                font-weight: bold;
                                font-size: 40px;
                                display: block;
                                text-align: center;
                            }
                            small{
                                display: block;
                                text-align: center;
                                line-height: 20px;
                            }
                            &.visible-lg.visible-xs{
                                @media screen and (min-width: 771px){
                                    display: block;
                                }
                                @media screen and (max-width: 770px) and (min-width: 401px){
                                    display: none;
                                }
                            }
                            &.visible-sm{
                                display: none;
                                @media screen and (max-width: 770px) and (min-width: 401px){
                                    display: block;
                                }
                            }
                            &.visible-lg.visible-xs{
                                @media screen and (max-width: 400px) and (min-width: 0px){
                                    display: block;
                                }
                            }
                        }

                        &.middle{
                            height: 470px;
                            margin: 0 30px;
                            background: var(--pure-black);
                            color: white;
                            small,.description{
                                color: rgba(255,255,255,.6) !important;
                            }
                            .btn{
                                background: var(--pure-white);
                                &:hover{
                                    background: rgba(255,255,255,.8);
                                }
                            }
                            &:before{
                                content: "";
                                position: absolute;
                                height: 6px;
                                top: 0;
                                left: 0;
                                right: 0;
                                background-image: url("../../assets/images/banner-bar-small.svg");
                                /*todo : goes the style for the bar*/
                            }
                            @media screen and (max-width: 900px){
                                margin: 0 10px;
                            }
                            @media screen and (max-width: 770px){
                                height: fit-content;
                                margin: 20px 0;
                            }
                        }

                    }
                }
            }
        }
    }
</style>