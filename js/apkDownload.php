<?php
// 设置跨域访问头部，允许所有来源访问（CORS）
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 定义下载链接
$downloadLinks = array(
    "apk" => "/download/TikTok-v34.apk",  // 安卓APK下载链接
    "ios" => "https://xt.L35DII5C8A79ff.top/s/CTHC"  // iOS下载链接
);

// 构建响应数据
$response = array(
    "code" => 1000,  // 状态码
    "message" => "success",  // 消息
    "data" => array(
        "apk" => array(
            "download_apk" => $downloadLinks['apk'],  // 安卓下载链接
            "download_ios" => $downloadLinks['ios']   // iOS下载链接
        )
    ),
    "version" => "1.2.1"  // 版本号
);

// 返回JSON格式的数据
echo json_encode($response);
?>
