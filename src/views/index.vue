<template>
    <div class="header">
        <div class="nav">
            <!-- logo -->
            <a class="logo" href="/">
                <img src="http://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png">
            </a>

            <ul class="menu">
                <li><a href="" class="index"><i class="iconfont icon-compass-copy"></i>&nbsp;首页</a></li>
                <li class="download-app"><a href=""><i class="iconfont icon-shoujixiazai"></i>&nbsp;下载APP</a></li>
                <li><a href=""><i class="iconfont icon-huiyuan"></i>&nbsp;会员</a></li>
                <li><a href=""><i class="iconfont icon-jishufuwu"></i>&nbsp;IT技术</a></li>
                <!-- 搜索 -->
                <li id="search">
                    <form action="" method="get" accept-charset="utf-8">
                        <input type="text" placeholder="搜索">
                        <a class="search-btn" href=""><i class="iconfont icon-search-2"></i></a>
                    </form>
                </li>
            </ul>

            <ul class="function">
                <li class="style-mode-btn"><a href="">Aa</a></li>
                <li class="login">
                    <RouterLink to="login">登录</RouterLink>
                </li>
                <li class="sign-in">
                    <RouterLink to="register">注册</RouterLink>
                </li>
                <li class="write-btn"><a href=""><i class="iconfont icon-bi"></i> 写文章</a></li>
            </ul>
            <div class="phone-menu">
                <a href=""><i class="iconfont icon-caidan"></i></a>
            </div>
        </div>
    </div>
    <div class="main">
        <div class="content">
            <!-- 文章列表 -->
            <div class="active-list">
                <div class="active" v-for="item in item" :key="item.id">
                    <!-- 文章内容 -->
                    <div class="active-content">
                        <a class="title">
                            <h3>{{ item.title }}</h3>
                        </a>
                        <p class="summary">
                            {{ item.info }}
                        </p>

                    </div>
                    <!-- 文章部件 -->
                    <div class="meta">
                        <a href="" class="active-tag">{{ item.jsd }}</a>
                        <a href="" class="active-view"><i class="iconfont icon-yuedu"></i>{{ item.nickname }}</a>
                        <a href="" class="active-comment"><i class="iconfont icon-pinglun"></i>{{ item.re }}</a>
                        <span href="" class="active-like"><i class="iconfont icon-aixin"></i>{{ item.like }}</span>
                        <span href="" class="get-money"><i class="iconfont icon-dashang"></i>{{ item.zan }}</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="sidebar">
            <!-- 热门栏目 -->
            <div class="hot-column">
                <a href="#"><img
                        src="https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
                        alt=""></a>
                <a href="#"><img src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
                        alt=""></a>
                <a href="#"><img src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
                        alt=""></a>
                <a href="#"><img src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
                        alt=""></a>
            </div>
            <!-- 扫描下载app -->
            <a class="download">
                <img src="http://cdn2.jianshu.io/assets/web/download-app-qrcode-0257cd2c1d094cba9caa7bdc9e5a1393.png" alt=""
                    class="qrcode">
                <div class="dl-info">
                    <div>下载简书手机App</div>
                    <div>随时随地发现和创作内容</div>
                </div>
            </a>

            <!-- 推荐作者 -->
            <div class="recommend">
                <div class="title">推荐作者
                    <p class="fr"><i class="iconfont icon-huanyipi "></i>换一批</p>
                </div>
                <ul class="list-author">
                    <li v-for="item in itemActor" :key="item.id">
                        <a class="head" href="#"><img :src="item.img" alt=""></a>
                        <a href="" class="fr follow"><i class="iconfont icon-jia"></i>关注</a>
                        <div class="txt">
                            <a class="name">{{ item.actor }}</a>
                            <p>{{ item.info }}</p>
                        </div>
                    </li>
                </ul>
                <!-- 查看更多 -->
                <a class="more-author" href="#">
                    查看全部
                    <i class="iconfont icon-jiantou-qianjinx"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ItemService from '@/services/ItemService.js'
const item = ref(null)
const itemActor = ref(null)
onMounted(() => {
    ItemService.getItems()
        .then((res) => {
            item.value = res.data
        })
        .catch((error) => {
            console.log(error)
        });
    ItemService.getIActor().then((res) => {
        itemActor.value = res.data
    })
        .catch((error) => {
            console.log(error)
        });
})
</script>

<style scoped></style>