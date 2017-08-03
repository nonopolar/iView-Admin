export default{

    cutstring: (str, number)=>{
        if( str.length<=number ){
            return str;
        }
        return str.substring(0, number)+'...';
    },

    /* 
     * 格式化时间
     * data 时间戳
     * format 需要输出的时间格式 eg: 'yyyy年 MM月 dd日 hh:mm:ss'
     */
    dateFormat:(date, format)=>{
        date = new Date(date);
        var map = {
            "M": date.getMonth() + 1, //月份 
            "d": date.getDate(), //日 
            "h": date.getHours(), //小时 
            "m": date.getMinutes(), //分 
            "s": date.getSeconds(), //秒 
            "q": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        format = format.replace(/([yMdhmsqS])+/g, function(all, t){
            var v = map[t];
            if(v !== undefined){
                if(all.length > 1){
                    v = '0' + v;
                    v = v.substr(v.length-2);
                }
                return v;
            }
            else if(t === 'y'){
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    }
};