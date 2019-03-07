function plugin_wfjs_cookie(){
  /**
   * Day a created cookie exist.
   * @type Number
   */
  var days = 99;
  /**
   * Set a cookie.
   * @param {type} name
   * @param {type} value
   * @returns {undefined}
   */
  this.set = function (name, value){
    var exp = new Date();
    exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * this.days));
    var expires = exp;
    document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString());
  }
  /**
   * Delete a cookie.
   * @param {type} name
   * @returns {undefined}
   */
  this.del = function (name){
    document.cookie = name + "=; expires=Thu, 01-Jan-70 00:00:01 GMT" +  "; path=/";
  }
  /**
   * Delete all cookies.
   * @returns {undefined}
   */
  this.delAll = function (){
    var data = this.getCookies();
    for(var i in data){
      this.del(i);
    }
  }
  /**
   * Get all cookies.
   * @returns object
   */
  this.getCookies = function (){
    var cookies = document.cookie.split(';');
    var data = {};
    for(var i in cookies)
    {
      var cookie = cookies[i].split('=');
      if(cookie.length==2){
        eval('data.'+cookie[0]+' = \''+cookie[1]+'\';');
      }
    }
    return data;
  }
  /**
   * Set cookies.
   * @param object Javascript object.
   * @returns null
   */
  this.setCookies = function(data){
    for(var i in data){
      this.set(i, data[i]);
    }
    return null;
  }  
}
PluginWfjsCookie = new plugin_wfjs_cookie();
