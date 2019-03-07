# Buto-Plugin-WfjsCookie

Javascript to handle cookies.


## Javascript
```
PluginWfjsCookie.setCookies({car: 'Volvo', driver: 'Me'});
PluginWfjsCookie.delAll();
PluginWfjsCookie.del('car');
PluginWfjsCookie.set('home', 'London');
console.log(PluginWfjsCookie.getCookies());
```


## Widget
Include in head section
```
type: widget
data:
  plugin: wfjs/cookie
  method: include
```
Enable i theme settings file.
```
plugin:
  wfjs:
    cookie:
      enabled: true
```
