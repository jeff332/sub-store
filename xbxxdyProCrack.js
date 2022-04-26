/*
 *
 *
脚本功能：傲软抠图解锁会员
软件版本：1.5.1
下载地址：http://t.cn/A6xBOE5d
脚本作者：Hausd0rff
更新时间：2021-11-20
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 傲软抠图解锁会员
^https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/BackgroundEraserProCrack.js

[mitm] 

hostname = gw.aoscdn.com
*
*
*/


var body = $response.body
    .replace(/\"isNormalMember\":\w/g, "\"isNormalMember\":true")
    .replace(/\"isPreschoolMember\":\w/g, "\"isPreschoolMember\":true")
    .replace(/\"isSchoolAgeMember\":\w/g, "\"isSchoolAgeMember\":true");
$done({
    body
});
