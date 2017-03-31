
export class CookieUtil {
    static getCookie(name: string) : string {
        var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        return null != value ? decodeURIComponent(value[2]) : null;
    }

    static setCookie(name: string, value: string, expiredays?: number) : void{
        var exdate = new Date();
        if(expiredays != null) {
          exdate.setDate(exdate.getDate() + expiredays);
        }
        document.cookie = name +  "="  + value +
            ((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
    }

    static delCookie(name: string) : void{
        console.info('delCookie:', name);
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if(cval!=null)
            document.cookie= name + "=" + cval + ";expires=" + exp.toUTCString();
    }
}
