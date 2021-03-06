'use strict';

function thousands_separators(num) {
    var num = num.toString();//将数字转换成字符串
    if (num.indexOf(".") != -1)//如果是小数
    {
        var str1 = "";
        var array = num.split(".");//分割为整数和小数部分，存放于数组
        if (array[0].length <= 3)//如果整数部分长度不大于3，直接返回
        {
            str1 = str1 = array[0] + "." + array[1];
        }
        else {
            for (var i = 1; i <= array[0].length / 3; i++) {
                str1 = "," + array[0].substring(array[0].length - (3 * i), array[0].length - (3 * (i - 1))) + str1;
            }
            return array[0].substring(0, array[0].length % 3) + str1 + "." + array[1];
        }
    }
    else//如果是整数
    {
        var str2 = "";
        if (num.length <= 3) {
            return num;
        }
        else {
            for (var i = 1; i <= num.length / 3; i++) {
                str2 = ',' + num.substring(num.length - (3 * i), num.length - (3 * (i - 1))) + str2;
            }
            return num.substring(0, num.length % 3) + str2;
        }
    }
}
module.exports = thousands_separators;
