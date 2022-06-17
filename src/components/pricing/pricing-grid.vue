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
                            <p class="description">Includes basic usage of our platform. <br> Recommended for new and
                                aspiring photographers.</p>
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
                            <p class="description">More advanced features available. <br> Recommended for photography
                                veterans and professionals.</p>
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
                            <p class="description">Additional features available such as more detailed metrics. <br>
                                Recommended for business owners.</p>
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
        methods: {
            toggleSwitch() {
                let toggle = document.getElementsByClassName("switch")[0]
                let spans = (document.getElementsByClassName("mode")[0]).getElementsByTagName("span")
                let priceGridItems = document.getElementsByClassName("item")
                toggle.classList.toggle("on")
                for (let i = 0; i < spans.length; i++) {
                    spans[i].classList.toggle("on")
                }
                for (let j = 0; j < priceGridItems.length; j++) {
                    let prices = priceGridItems[j].getElementsByClassName("price")
                    for (let k = 0; k < prices.length; k++) {
                        if (toggle.classList.contains("on")) { //means we're displaying prices for year
                            prices[k].getElementsByTagName("strong")[0].innerText = "$" + (parseFloat(prices[k].getElementsByTagName("strong")[0].innerText.split("$")[1]) * 10) + ".00"
                            prices[k].getElementsByTagName("small")[0].innerText = "per year"
                        } else {//we're displaying prices for month
                            prices[k].getElementsByTagName("strong")[0].innerText = "$" + parseFloat((prices[k].getElementsByTagName("strong")[0].innerText.split("$")[1]) / 10) + ".00"
                            prices[k].getElementsByTagName("small")[0].innerText = "per month"
                        }
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pricing-grid {
        display: flex;
        justify-content: space-around;
        margin: 50px 0;

        .container {
            max-width: 1440px;

            .mode {
                width: 255px;
                height: 50px;
                margin: 0 auto 40px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                span {
                    font-weight: bold;
                    &:last-child{
                        color: var(--color-primary);
                    }
                }

                .switch {
                    height: 32px;
                    width: 64px;
                    border-radius: 100px;
                    position: relative;
                    background: rgba(223, 223, 223, .7);


                    &.on {
                        background: var(--color-primary);

                        &:before {
                            left: calc(100% - 29px);
                        }
                    }

                    &:before {
                        content: "";
                        width: 24px;
                        height: 24px;
                        background: var(--color-secondary);
                        border-radius: 100%;
                        position: absolute;
                        top: 4px;
                        bottom: 4px;
                        left: 4px;
                        transition: left ease-in-out .15s;
                    }
                }
            }

            .grid {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                max-width: 1110px;
                margin: 0 auto;

                .content {
                    display: flex;
                    align-items: center;
                    @media screen and (max-width: 770px) {
                        flex-flow: wrap;
                    }

                    .item {
                        max-width: 350px;
                        width: 100%;
                        position: relative;
                        height: 407px;
                        padding: 40px;
                        font-size: 15px;
                        display: flex;
                        background: rgba(223, 223, 223, .3);
                        @media screen and (max-width: 770px) {
                            max-width: 100%;
                            height: fit-content;
                            justify-content: space-between;
                        }
                        @media screen and (max-width: 500px) {
                            max-width: 100%;
                            height: fit-content;
                            justify-content: space-around;
                            padding: 40px 20px;
                        }

                        & > div:first-child {
                            align-self: center;

                            .title {
                                display: block;
                                text-align: center;
                                font-size: 24px;
                                font-weight: bold;
                                margin-bottom: 20px;
                                color: var(--color-primary);
                            }

                            .description {
                                margin-bottom: 40px;
                                text-align: center;
                            }

                            .btn {
                                width: 100%;
                                display: block;
                                text-align: center;
                                padding: 12px;
                                font-size: 12px;
                                height: 40px;
                            }
                        }

                        .price {
                            margin-bottom: 40px;

                            strong {
                                font-weight: bold;
                                font-size: 40px;
                                display: block;
                                text-align: center;
                                color: var(--color-primary);
                            }

                            small {
                                display: block;
                                text-align: center;
                                line-height: 20px;
                            }

                            &.visible-lg.visible-xs {
                                @media screen and (min-width: 771px) {
                                    display: block;
                                }
                                @media screen and (max-width: 770px) and (min-width: 401px) {
                                    display: none;
                                }
                            }

                            &.visible-sm {
                                display: none;
                                @media screen and (max-width: 770px) and (min-width: 401px) {
                                    display: block;
                                }
                            }

                            &.visible-lg.visible-xs {
                                @media screen and (max-width: 400px) and (min-width: 0px) {
                                    display: block;
                                }
                            }
                        }

                        &.middle {
                            height: 470px;
                            margin: 0 30px;
                            background: var(--color-primary);
                            color: var(--color-secondary);

                            & > div:first-child {

                                .title {
                                    color: var(--color-secondary);
                                }

                                .description {
                                    color: var(--color-body-secondary);
                                }
                            }
                            .price {
                                strong {
                                    color: var(--color-secondary);
                                }
                            }


                            small, .description {
                                color: var(--color-body-secondary) !important;
                            }

                            .btn {
                                background: var(--color-secondary);

                                &:hover {
                                    background: var(--color-secondary);
                                    opacity: .7;
                                }
                            }

                            &:before {
                                content: "";
                                position: absolute;
                                height: 6px;
                                top: 0;
                                left: 0;
                                right: 0;
                                background: linear-gradient(270deg, rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147));
                                @media screen and (max-width: 770px) {
                                    bottom: 0;
                                    height: auto;
                                    width: 6px;
                                    background: linear-gradient(rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147));
                                }
                                @media screen and (max-width: 400px) {
                                    top: 0;
                                    left: 0;
                                    right: 0;
                                    height: 6px;
                                    width: auto;
                                }
                            }

                            @media screen and (max-width: 900px) {
                                margin: 0 10px;
                            }
                            @media screen and (max-width: 770px) {
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