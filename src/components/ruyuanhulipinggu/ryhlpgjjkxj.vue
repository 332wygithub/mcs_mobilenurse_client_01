<template>
    <div id="ryhlpgjjkxj">
        <el-header><b>入院护理评估及健康记录单</b></el-header>
            <div style="overflow: auto; border:none;width: 90%;height: 550px;margin-left: 90px">
                <table border="1px" cellspacing="0" cellpadding="0" width="100%">

                    <tr>
                        <td>科别:<input type="text"  v-model="listyszas.ksmc" class="W"/></td>
                        <td>病房:<input type="text" name=""  v-model="listyszas.bingfang" class="W"/></td>
                        <td>床号:<input type="text" name=""  v-model="listyszas.chuanghao" class="W"/></td>
                        <td>住院号:<input type="text" name=""  v-model="listyszas.newcolumna" readonly class="W"/></td>
                    </tr>
                    <tr>
                        <td>姓名:<input type="text" name=""  v-model="listyszas.xingming" readonly class="W"/></td>
                        <td>年龄:<input type="text" name=""  v-model="listyszas.nl" readonly class="W"/></td>
                        <td>性别:<input type="text" name=""  v-model="listyszas.xingbie" readonly class="W"/></td>
                        <td>民族:<input type="text" name=""  v-model="listyszas.minzu" class="W"/></td>
                    </tr>
                </table>

                <!-- 第二张表 -->
                <table border="1px" cellspacing="0" cellpadding="0" width="100%">
                    <tr>
                        <td style="width: 6.25rem;">入院日期</td>
                        <td><input type="text" name=""  v-model="listyszas.ryrq" class="W"/></td>
                        <td>入院诊断</td>
                        <td><input type="text" name="" v-model="listyszas.ryzd" class="W"/></td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">入院方式</td>
                        <td>
                            <input type="radio" name="a"  v-model="listyszas.ryfs" value="1" />门诊
                            <input type="radio" name="a"  v-model="listyszas.ryfs" value="2"/>急诊
                            <input type="radio" name="a"  v-model="listyszas.ryfs" value="3"/>步行
                            <input type="radio" name="a"  v-model="listyszas.ryfs" value="4"/>轮椅
                            <input type="radio" name="a"  v-model="listyszas.ryfs" value="5"/>平车
                        </td>
                        <td>费用支付</td>
                        <td>
                            <input type="radio" name="b"  v-model="listyszas.newcolumnb" value="1" />北京医保
                            <input type="radio" name="b"  v-model="listyszas.newcolumnb" value="2"/>北京医保老年
                            <input type="radio" name="b"  v-model="listyszas.newcolumnb" value="3"/>自费医疗
                            <input type="radio" name="b"  v-model="listyszas.newcolumnb" value="4"/>自费新生儿
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="2">教育程度</td>
                        <td>
                            <input type="radio" name="c" v-model="listyszas.jycd" value="1" />文盲
                            <input type="radio" name="c" v-model="listyszas.jycd" value="2" />小学
                            <input type="radio" name="c" v-model="listyszas.jycd" value="3" />初中
                            <input type="radio" name="c" v-model="listyszas.jycd"value="4" />高中
                            <input type="radio" name="c" v-model="listyszas.jycd" value="5" />大专
                        </td>
                        <td rowspan="2">婚姻</td>
                        <td>
                            <input type="radio" name="d" v-model="listyszas.hunyin" value="1" />未婚
                            <input type="radio" name="d" v-model="listyszas.hunyin" value="2" />已婚
                            <input type="radio" name="d" v-model="listyszas.hunyin" value="3" />离婚
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="c" v-model="listyszas.jycd" value="6" />大学及以上
                        </td>
                        <td>
                            <input type="radio" name="d" v-model="listyszas.hunyin" value="4" />丧偶
                            <input type="radio" name="d" v-model="listyszas.hunyin" value="5"/>其他
                        </td>
                    </tr>
                    <tr>
                        <td>宗教</td>
                        <td>
                            <input type="radio" name="e" v-model="listyszas.zjxy" value="1" />无
                            <input type="radio" name="e" v-model="listyszas.zjxy "value="2" />有
                        </td>
                        <td>家庭</td>
                        <td>
                            子<input type="number" name="" v-model="listyszas.newcolumnc" value="" class="W"/>人
                            女<input type="number" name="" v-model="listyszas.newcolumnc" value="" class="W"/>人
                        </td>
                    </tr>
                    <tr>
                        <td rowspan="3" style="background-color: cadetblue;">职业</td>
                        <td rowspan="3">
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="wu" />无
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="qt" />其他
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="zy" />职员
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="gb" />干部
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="xs" />学生<br>
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="js" />教师
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="ys" />医生
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="hg" />护士
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="gr" />工人
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="nm" />农名<br>
                            <input type="radio" name="f" v-model="listyszas.zhiye" value="tx" />退休
                        </td>
                        <td>联系人姓名</td>
                        <td><input type="text" name="" v-model="listyszas.lxrxm" value="" class="W"/></td>
                    </tr>
                    <tr>
                        <td>联系人电话</td>
                        <td><input type="text" name="" v-model="listyszas.lxrdh" value="" class="W"/></td>
                    </tr>
                    <tr>
                        <td>与患者关系</td>
                        <td><input type="text" name="" v-model="listyszas.hzgx" value="" class="W"/></td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">生命体征</td>
                        <td colspan="3">
                            体温:<input type="number" name="" v-model="listyszas.tiwen" value="" class="W"/>
                            脉搏:<input type="number" name="" v-model="listyszas.maibo" value="" class="W"/>次/分
                            呼吸:<input type="number" name="" v-model="listyszas.huxi" value="" class="W"/>次/分<br>
                            血压:<input type="number" name="" v-model="listyszas.xueya" value="" class="W"/>mmHg
                            身高:<input type="number" name="" v-model="listyszas.shengao" value="" class="W"/>cm
                            体重:<input type="number" name="" v-model="listyszas.tizhong" value="" class="W"/>kg
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">语言表达</td>
                        <td>
                            <input type="radio" name="g" v-model="listyszas.yybd" value="qx" />清晰
                            <input type="radio" name="g" v-model="listyszas.yybd" value="hu" />含糊
                            <input type="radio" name="g" v-model="listyszas.yybd" value="sy" />失语<br>
                            <input type="radio" name="g" v-model="listyszas.yybd" value="fy" />方言
                            <input type="radio" name="g" v-model="listyszas.yybd"　 value="qt" />其他
                        </td>
                        <td style="background-color: cadetblue;">循环</td>
                        <td>
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="1" />脉搏齐
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="2" />脉过速
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="3" />心脏起搏器<br>
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="4" />脉过缓
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="5" />脉不齐
                            <input type="radio" name="h" v-model="listyszas.xhxt" value="6" />其他
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">意识精神</td>
                        <td>
                            <input type="radio" name="i" v-model="listyszas.yszt" value="1" />清醒
                            <input type="radio" name="i" v-model="listyszas.yszt" value="2" />嗜睡
                            <input type="radio" name="i" v-model="listyszas.yszt"value="3" />朦胧
                            <input type="radio" name="i" v-model="listyszas.yszt" value="4" />躁动<br>
                            <input type="radio" name="i" v-model="listyszas.yszt" value="5" />昏迷
                            <input type="radio" name="i" v-model="listyszas.yszt" value="6" />平静
                            <input type="radio" name="i" v-model="listyszas.yszt" value="7" />烦躁<br>
                            <input type="radio" name="i" v-model="listyszas.yszt" value="8" />焦虑
                            <input type="radio" name="i" v-model="listyszas.yszt" value="9" />恐惧
                            <input type="radio" name="i" v-model="listyszas.yszt" value="10" />其他
                        </td>
                        <td style="background-color: cadetblue;">循环呼吸</td>
                        <td>
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="1" />正常
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="2" />呼吸困难
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="3" />端坐呼吸<br>
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="4" />吸氧
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="5" />气切插管
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="6" />气管插管<br>
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="7" />其他
                            <input type="radio" name="n" v-model="listyszas.hxxt" value="8" />呼吸机辅助
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">皮肤完整性</td>
                        <td colspan="3">
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="1" />正常
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="2" />潮红
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="3" />苍白
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="4" />黄疸
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="5" />紫绀
                            <input type="radio" name="m" v-model="listyszas.pifunmwz" value="6" />皮疹<br>
                            <input type="checkbox" name="o" v-model="listyszas.pifunmwz" value="7" />完整
                            <input type="checkbox" name="o" v-model="listyszas.pifunmwz" value="8" />破损
                            部位:<input type="text" name="" v-model="listyszas.pifunmwzbw" value="" class="W"/>
                            面积:<input type="number" name="" v-model="listyszas.psmj" value="" class="W"/>公分<br>

                            <input type="checkbox" name="o" v-model="listyszas.pifunmwz" value="9" />外伤
                            <input type="checkbox" name="o" v-model="listyszas.pifunmwz" value="10" />压疮
                            部位:<input type="text" name="" v-model="listyszas.pifunmwzbw" value="" class="W"/>
                            面积:<input type="text" name="" v-model="listyszas.psmj" value="" class="W"/>公分
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">饮食</td>
                        <td colspan="3">
                            <input type="radio" name="k" v-model="listyszas.yszt" value="1" />正常
                            <input type="radio" name="k" v-model="listyszas.yszt" value="2" />减低
                            <input type="radio" name="k" v-model="listyszas.yszt" value="3" />增加
                            <input type="radio" name="k" v-model="listyszas.yszt" value="4" />其他<br>
                            食物禁忌:<input type="radio" name="l" v-model="listyszas.psmj" value="1" />无
                            <input type="radio" name="l" v-model="listyszas.psmj" value="2" />有
                            种类:<input type="text" name="" v-model="listyszas.psmj" value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">过敏史</td>
                        <td colspan="3">
                            食物:<input type="radio" name="p" v-model="listyszas.gmmc" value="1" />无
                            <input type="radio" name="p" v-model="listyszas.gmmc" value="2" />有
                            <input type="text" name="" v-model="listyszas.guominshi" value="" class="W"/><br>
                            药物:<input type="radio" name="w" v-model="listyszas.gmmc" value="1" />无
                            <input type="radio" name="w" v-model="listyszas.gmmc" value="2" />有
                            <input type="text" name="" v-model="listyszas.guominshi" value="" class="W"/>

                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">视力情况</td>
                        <td colspan="3">
                            左眼:<input type="radio" name="s" v-model="listyszas.zuoyan" value="1" />清晰
                            <input type="radio" name="s" v-model="listyszas.zuoyan" value="2" />近视
                            <input type="radio" name="s" v-model="listyszas.zuoyan" value="3" />老花
                            <input type="radio" name="s" v-model="listyszas.zuoyan" value="4" />失明
                            <input type="radio" name="s" v-model="listyszas.zuoyan" value="5" />其他
                            <input type="text" name="" iv-model="listyszas.zydd" value="" class="W"/><br>
                            右眼:<input type="radio" name="ss" v-model="listyszas.youyan" value="1" />清晰
                            <input type="radio" name="ss" v-model="listyszas.youyan" value="2" />近视
                            <input type="radio" name="ss" v-model="listyszas.youyan" value="3" />老花
                            <input type="radio" name="ss" v-model="listyszas.youyan" value="4" />失明
                            <input type="radio" name="ss" v-model="listyszas.youyan" value="5" />其他
                            <input type="text" name="" v-model="listyszas.guominshi" value="" class="W"/>

                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">听力情况</td>
                        <td colspan="3">
                            左耳:<input type="radio" name="t" v-model="listyszas.zuoer" value="1" />清晰
                            <input type="radio" name="t" v-model="listyszas.zuoer" value="2" />听力下降
                            <input type="radio" name="t" v-model="listyszas.zuoer" value="3" />失聪
                            <input type="radio" name="t" v-model="listyszas.zuoer" value="4" />其他
                            <input type="text" name="" v-model="listyszas.zuoer" value="" class="W"/><br>
                            右耳:<input type="radio" name="tt" v-model="listyszas.youer" value="1" />清晰
                            <input type="radio" name="tt" v-model="listyszas.youer" value="2" />听力下降
                            <input type="radio" name="tt" v-model="listyszas.youer" value="3" />失聪
                            <input type="radio" name="tt" v-model="listyszas.youer" value="4" />其他
                            <input type="text" name="" v-model="listyszas.youer" value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">活动休息</td>
                        <td colspan="3">
                            活动能力:<input type="radio" name="x" v-model="listyszas.hdnl" value="1" />行动正常
                            <input type="radio" name="x" v-model="listyszas.hdnl" value="2" />使用助行器
                            <input type="radio" name="x" v-model="listyszas.hdnl" value="3" />残疾
                            <input type="radio" name="x" v-model="listyszas.hdnl" value="4" />无法行动
                            <input type="radio" name="x" v-model="listyszas.hdnl" value="5" />其他<br>
                            自我照顾能力:<input type="radio" name="xx" v-model="listyszas.youer" value="1" />自理
                            <input type="radio" name="xx" v-model="listyszas.youer" value="2" />部份依赖
                            <input type="radio" name="xx" v-model="listyszas.youer" value="3" />完全依赖<br>
                            睡眠习惯:<input type="text" name="" v-model="listyszas.youer" value="1" class="W"/>小时/天
                            <input type="radio" name="xxx" v-model="listyszas.youer" value="2" />正常
                            <input type="radio" name="xxx" v-model="listyszas.youer" value="3" />间断入睡
                            <input type="radio" name="xxx" v-model="listyszas.youer" value="4" />失眠
                            <input type="radio" name="xxx" v-model="listyszas.youer" value="5" />服镇静剂
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">吸烟饮酒</td>
                        <td colspan="3">
                            吸烟:<input type="radio" name="y" v-model="listyszas.xyyj" value="1" />不吸烟
                            <input type="radio" name="y" v-model="listyszas.xyyj" value="2" />吸烟
                            <input type="radio" name="y" v-model="listyszas.xyyj" value="3" />已戒烟
                            每日<input type="number" name="" v-model="listyszas.cysj" value="" class="W"/>支
                            已吸<input type="number" name="" v-model="listyszas.xyns" value="" class="W"/>年<br>
                            饮酒:<input type="radio" name="yy" v-model="listyszas.yjcs" value="1" />不饮
                            <input type="radio" name="yy" iv-model="listyszas.yjcs" value="2" />偶饮
                            <input type="radio" name="yy" v-model="listyszas.yjcs" value="3" />大量
                            <input type="radio" name="yy" v-model="listyszas.yjcs" value="4" />已戒酒
                            每日<input type="number" name="" v-model="listyszas.yjns" value="" class="W"/>ml
                            已喝 <input type="number" name="" v-model="listyszas.yjns" value="" class="W"/>年
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">排泄</td>
                        <td colspan="3">
                            小便:<input type="radio" name="z" v-model="listyszas.painiao"  value="1" />正常
                            <input type="radio" name="z" v-model="listyszas.painiao"  value="2" />失禁
                            <input type="radio" name="z" v-model="listyszas.painiao"  value="3" />尿潴留
                            <input type="radio" name="z" v-model="listyszas.painiao"  value="4" />尿少
                            <input type="radio" name="z" v-model="listyszas.painiao"  value="5" />留置尿管
                            <input type="radio" name="z" v-model="listyszas.painiao"  value="6" />其他<br>
                            大便:<input type="radio" name="zz" v-model="listyszas.paibian"  value="" />正常
                            <input type="radio" name="zz" v-model="listyszas.paibian"  value="1" />失禁
                            <input type="radio" name="zz" v-model="listyszas.paibian"  value="2" />腹泻
                            <input type="radio" name="zz" v-model="listyszas.paibian"  value="3" />便秘
                            <input type="radio" name="zz" v-model="listyszas.paibian"  value="4" />肠造口 <br>
                            其他:<input type="radio" name="zzz" v-model="listyszas.jzsqt"  value="1" />呕吐
                            <input type="radio" name="zzz" v-model="listyszas.jzsqt"  value="2" />引流
                            <input type="radio" name="zzz" v-model="listyszas.jzsqt"  value="3" />其他
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">既往史</td>
                        <td colspan="3">
                            <input type="radio" name="aa" v-model="listyszas.jws"  value="1" />无
                            <input type="radio" name="aa" v-model="listyszas.jws"  value="2" />有<br>
                            <textarea rows="2" cols="100" placeholder="*诊断,年" style="background-color: gainsboro;border: none;"></textarea><br>
                            住院经历:<input type="radio" name="aaa" v-model="listyszas.zyjl"  value="1" />无
                            <input type="radio" name="aaa" v-model="listyszas.zyjl"  value="2" />有
                            原因<input type="text" name="" v-model="listyszas.zyyy"  value="" class="W"/>*原因
                            地点:<input type="radio" name="q" v-model="listyszas.zydd"  value="1" />本院
                            <input type="radio" name="q" v-model="listyszas.zydd"  value="2" />外院<br>
                            手术经历:<input type="radio" name="qq" v-model="listyszas.ssjl"  value="1" />无
                            <input type="radio" name="qq" v-model="listyszas.ssjl"  value="2" />有
                            原因<input type="text" name="" v-model="listyszas.ssyy"  value="" class="W"/>*原因
                            地点:<input type="radio" name="qqq" v-model="listyszas.ssdd"  value="1" />本院
                            <input type="radio" name="qqq" v-model="listyszas.ssdd"  value="2" />外院<br>
                            长期用药:<input type="radio" name="ww" v-model="listyszas.cqyy"  value="1" />无
                            <input type="radio" name="ww" v-model="listyszas.cqyy"  value="2" />有
                            主要用药:<br>
                            <textarea rows="2" cols="100" style="border: none;background-color: gainsboro;" v-model="listyszas.zyyy"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">家族史</td>
                        <td colspan="3">
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="1" />无
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="2" />高血压
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="3" />心脏病
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="4" />糖尿病
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="5" />肿瘤
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="6" />精神病
                            <input type="checkbox" name="j" v-model="listyszas.jzs"  value="7" />其他
                            <input type="text" name="" v-model="listyszas.jzs"  value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">危险因素评估</td>
                        <td colspan="3">
                            压疮危险因素评分:
                            <input type="radio" name="o" v-model="listyszas.yjns"  value="" />已评估,非高危
                            <input type="radio" name="o" v-model="listyszas.yjns"  value="" />高危
                            <input type="text" name="" v-model="listyszas.yjns"  value="" class="W"/>分<br>
                            跌倒/坠床危险因素评分:
                            <input type="radio" name="oo" v-model="listyszas.yjns"  value="" />已评估,非高危
                            <input type="radio" name="oo" v-model="listyszas.yjns"  value="" />高危
                            <input type="text" name="" v-model="listyszas.yjns"  value="" class="W"/>分<br>
                            血栓危险因素评估:<input type="text" name="" v-model="listyszas.yjns"  value="" class="W"/>分
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">入院护理指导</td>
                        <td colspan="3">
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="1" />全选<br>
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="2" />跌倒宣教
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="3" />自我介绍
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="4" />环境介绍
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="5" />呼叫器使用
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="6" />探视陪伴制度
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="7" />住院须知/病房规定介绍
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="8" />作息制度
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="9" />订餐制度<br>
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="10" />疼痛宣教
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="11" />床单位使用
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="12" />医生查房时间
                            <input type="radio" name="u" v-model="listyszas.ryzd"  value="13" />贵重物品保管<br>
                            专科护理指导:<input type="checkbox" name="uu" v-model="listyszas.ryzd"  value="" />术前教育
                            <input type="checkbox" name="uu" v-model="listyszas.ryzd"  value="" />术后教育
                            <input type="checkbox" name="uu" v-model="listyszas.ryzd"  value="" />健康指导
                            此次入院原因:<br>
                            <textarea rows="2" cols="100" style="border: none;background-color: gainsboro;"　v-model="listyszas.zyyy"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: cadetblue;">资料来源</td>
                        <td colspan="3">
                            <input type="checkbox" name="uuu" v-model="listyszas.zlly" value="" />病人
                            <input type="checkbox" name="uuu" v-model="listyszas.zlly" value="" />亲属
                            <input type="checkbox" name="uuu" v-model="listyszas.zlly" value="" />朋友
                            <input type="checkbox" name="uuu" v-model="listyszas.zlly" value="" />其他
                            <input type="text" name="" v-model="listyszas.zllyqt" value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td>执行护士</td>
                        <td><input type="text" name="" v-model="listyszas.zxhs" value="" class="W"/></td>
                        <td>日期/时间</td>
                        <td><input type="datetime-local" name="" v-model="listyszas.zxsj" value="" /></td>
                    </tr>
                </table>

                <!-- 第三张表 -->
                <table border="1px" cellspacing="0" cellpadding="0" width="100%">
                    <tr style="height: 1.25rem;">
                        <td></td>
                    </tr>
                    <tr>
                        <td>出员小结及护理指导</td>
                    </tr>
                </table>


                <!-- 第四张表 -->
                <table border="1px" cellspacing="0" cellpadding="0" width="100%">
                    <tr>
                        <td colspan="2" style="width: 600px;">
                            出院日期:<input type="datetime-local" name="" value="" />
                        </td>
                        <td colspan="2">
                            出院诊断:<input type="text" name="" value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            出科方式:
                            <input type="radio" name="kk" value="" />步行
                            <input type="radio" name="kk" value="" />平车
                            <input type="radio" name="kk"  value="" />轮椅
                            <input type="radio" name="kk" value="" />家属陪同
                        </td>
                        <td colspan="2">
                            饮食注意事项:<input type="text" name="" value="" class="W"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            活动与休息方式及注意事项:<br>
                            <textarea rows="2" cols="50"></textarea>
                        </td>
                        <td colspan="2">
                            出院用药:
                            <input type="radio" name="pp" value="" />无
                            <input type="radio" name="pp" value="" />出院用药指导
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            复诊:<input type="radio" name="ppp" value="" />无
                            <input type="radio" name="ppp" value="" />按医生要求指导
                        </td>
                    </tr>
                    <tr>
                        <td>执行护士</td>
                        <td><input type="text;" name="" value="" class="W"/></td>
                        <td>日期/时间</td>
                        <td><input type="datetime-local ;" name="" value="" /></td>
                    </tr>
                </table>
            </div>
            <!-- 右下 -->
            <div style="border: 0px solid blueviolet;width: 100%;height: 35px;margin-top: 60px;margin-left: -50px">
                <button type="button" style="float: right" @click="xgryhljldjjkxj">保存</button>
                <button type="button" style="float: right">暂存</button>
                <button type="button" style="float: right">打印</button>
                <button type="button" style="float: right">签章</button>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'ryhlpgjjkxj',
        data() {
            return {
                //查询到的数据
                listyszas: {},
                //接收病人树传过来的病人id
                brID:'',
                //查询到的在院病人信息
                bingrenxinxis:{},
                ksmc:'',
                ch:'',
                zyhm:'',
                xm:'',
                nl:'',
                xb:'',
            }
        },
        created() {
            this.$watch("brID", (newValue, oldValue) => {
                console.log(newValue + "_新值");
                console.log(oldValue + "_旧值");
                if (newValue != oldValue) {
                    this.brID = newValue;
                    this.chaxunbingrenxinxi();
                }
            });
        },
        methods: {
            //查询病人信息-入院护理评估及健康宣教
            chaxunbingrenxinxi: function () {
                axios
                    .get("http://127.0.0.1:8080/ryhljldjjkxjController/cxryhljldjjkxj", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.listyszas = res.data;
                        console.log(this.brID);
                        if(res.data=='') {
                            this.chaxunzaiyuanbingren();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //新建-如果没有此病人的记录单，就新建
            xjryhljldjjkxj() {
                axios
                .post("http://127.0.0.1:8080/ryhljldjjkxjController/xjryhljldjjkxj",
                    {brid: this.brID,
                        ksmc:this.ksmc,
                        chuanghao:this.ch,
                        newcolumna:this.zyhm,
                        xingming:this.xm,
                        nl:this.nl,
                        xingbie:this.xb
                    })
                .then((res)=>{
                    console.log(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            //查询在院病人信息
            chaxunzaiyuanbingren: function () {
                axios
                    .get("http://127.0.0.1:8080/mcs_zaiyuanbingrenbiaoController/cxbr", {
                        params: {
                            brID: this.brID,
                        }
                    })
                    .then((res) => {
                        this.bingrenxinxis = res.data;
                        console.log(this.bingrenxinxis);
                        this.ksmc=this.bingrenxinxis.ksmc;
                        console.log(this.ksmc);
                        this.ch=this.bingrenxinxis.ch;
                        this.zyhm=this.bingrenxinxis.zyhm;
                        this.xm=this.bingrenxinxis.xm;
                        this.nl=this.bingrenxinxis.nl;
                        this.xb=this.bingrenxinxis.xb;
                        this.xjryhljldjjkxj();
                        this.chaxunbingrenxinxi();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            //保存
            xgryhljldjjkxj() {
                axios
                .put("http://127.0.0.1:8080/ryhljldjjkxjController/xgryhljldjjkxj",this.listyszas)
                .then((res)=>{
                    console.log(res.data);
                     if(res.data==2) {
                        alert("提示：更新数据失败");
                    }else{
                        alert("提示：更新数据成功");
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
        },
        props: ['brID'],
    }
</script>

<style>
    #ryhlpgjjkxj{
        margin-left: 270px;
        height: 600px;
        width: 80%;
    }
    {
        border:none;
        background-color:gainsboro;
        text-align: center;
        width: 80px;
    }


</style>