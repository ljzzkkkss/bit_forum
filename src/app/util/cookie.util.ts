import {escape} from "querystring";
export class CookieUtil {
    getCookie(name: string) : string {
        var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        return null != value ? decodeURIComponent(value[2]) : null;
    }

    setCookie(name: string, value: string, expiredays?: string) : void{
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = name +  "="  + escape(value) +
            ((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
    }

    delCookie(name: string) : void{
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if(cval!=null)
            document.cookie= name + "=" + cval + ";expires=" + exp.toUTCString();
    }
}