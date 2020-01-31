            function language() {
                lang = (lang).toLowerCase(); //转小写以便判断
                if (lang.substr(0, 2) == 'zh') {
                    if (lang.substr(3, 5) != 'cn') {
                        lang = "zh-TW";
                    } else {
                        lang = "zh-CN";
                    };
                } else {
                    switch (lang) {
                        case "ja-jp":
                            lang = "ja";
                            break;
                        case "ko-kr":
                            lang = "ko";
                            break;
                        case "ru-ru":
                            lang = "ru";
                            break;
                        default:
                            lang = "en";
                    }
                };
                var url = lang + ".json"; //对应语言json
                var request = new XMLHttpRequest();
                request.open("get", url); //设置请求方法与路径
                request.send(null); //不发送数据到服务器
                request.onload = function () { //XHR对象获取到返回信息后执行
                    if (request.status == 200) { //返回状态为200，即为数据获取成功
                        var language = JSON.parse(request.responseText);
                        var arr = document.querySelectorAll(".lang");
                        var num;
                        for (num = 0; num < arr.length; num++) {
                            var key = arr[num].getAttribute("data-lang");
                            arr[num].innerHTML = language[key];
                        };
                    };
                };
            }