import vue from 'vue'
//导入路由
import router from 'vue-router'

// 使用路由 相当于将路由放到vue对象中
vue.use(router);
import wzhljld from "@/components/weizhonghulijiludan/wzhljld.vue"
//登录页面
import mcs_yh from '../components/denglu/mcs_yh.vue'
//点击登录进入主页面
import com from '../components/com.vue'
//用户管理页面
import yhgl from "@/components/yonghuguanli/yhgl.vue"
//用户管理-添加/修改数据页面
import tj from "@/components/yonghuguanli/tj.vue"
import tianjia from "@/components/yonghuguanli/tianjia.vue"
//为重护理记录单-弹窗
import tsqkjl from '@/components/weizhonghulijiludan/tsqkjl.vue';
//入院护理评估及健康宣教
import ryhlpgjjkxj from '@/components/ruyuanhulipinggu/ryhlpgjjkxj.vue';
//意识障碍病人评估单
import yszabrttpgdA from '@/components/yszabrttpgd/yszabrttpgdA.vue';
//意识障碍病人评估单2
import yszabrttpgdA2 from '@/components/yszabrttpgd/yszabrttpgdA2.vue';
//折线图
import zhexiantu from '@/components/yszabrttpgd/zhexiantu.vue';
//柱状图
import zhuzhuangtu from '@/components/yszabrttpgd/zhuzhuangtu.vue';
//饼状图
import bingzhuangtu from '@/components/yszabrttpgd/bingzhuangtu.vue';
//生活能力评估
import shnlpg from '@/components/shenghuonengli/shnlpg.vue';
//生活能力评估2
import shnlpg2 from '@/components/shenghuonengli/shnlpg2.vue';

const originalPush = router.prototype.push

router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new router({
    routes:[
        {
            //程序加载后默认显示的组件
            path:'/',
            redirect:mcs_yh
        },
        //主组件
        {
            //组件名
            name:'com',
            //组件路径
            path:'/yilanjiemian',
            //注册组件，只注册当前组件
            component:com,
            children:[
                //用户管理一览页面 子组件
                {
                    name:'yhgl',
                    path:'/yonghuguanli/yhgl',
                    component:yhgl
                },
                //用户管理-添加数据 子组件
                {
                    //组件名
                    name:'tj',
                    //组件路径
                    path:'/yonghuguanli/tj',
                    //注册组件，只注册当前组件
                    component:tj
                },
                {
                    //组件名
                    name:'tianjia',
                    //组件路径
                    path:'/yonghuguanli/tianjia',
                    //注册组件，只注册当前组件
                    component:tianjia
                },
                {
                    name:'wzhljld',
                    path:'/weizhonghulijiludan/wzhljld',
                    component:wzhljld,
                    children:[
                        {
                            name:'tsqkjl',
                            path:'/weizhonghulijiludan/tsqkjl',
                            component:tsqkjl,
                        }
                    ]
                },
                {
                    name: 'ryhlpgjjkxj',
                    path: '/ruyuanhulipinggu/ryhlpgjjkxj',
                    component: ryhlpgjjkxj,
                },
                {
                    name: 'yszabrttpgdA',
                    path: '/yszabrttpgd/yszabrttpgdA',
                    component: yszabrttpgdA,

                },
                {
                    name: 'yszabrttpgdA2',
                    path: '/yszabrttpgd/yszabrttpgdA2',
                    component: yszabrttpgdA2,
                },
                {
                    name: 'zhexiantu',
                    path: '/yszabrttpgd/zhexiantu',
                    component: zhexiantu,
                },
                {
                    name: 'zhuzhuangtu',
                    path: '/yszabrttpgd/zhuzhuangtu',
                    component: zhuzhuangtu,
                },
                {
                    name: 'bingzhuangtu',
                    path: '/yszabrttpgd/bingzhuangtu',
                    component: bingzhuangtu,
                },
                {
                    name: 'shnlpg',
                    path: '/shenghuonengli/shnlpg',
                    component: shnlpg,
                },
                {
                    name: 'shnlpg2',
                    path: '/shenghuonengli/shnlpg2',
                    component: shnlpg2,
                }
            ]
        },
        {
            name:'mcs_yh',
            path:'/denglu/mcs_yh.vue',
            component:mcs_yh
        },
],
})
