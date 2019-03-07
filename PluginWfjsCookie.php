<?php
/**
<p>
Javascript class to handle cookies as object for easier management.
</p>
#code-javascript#
#load:[web_dir]/plugin/[plugin]/include.js:load#
#code#
 */
class PluginWfjsCookie{
  /**
  <p>
  Include in head section.
  </p>
  #code-yml#
  type: widget
  data:
    plugin: 'wfjs/cookie'
    method: include
  #code#
  */
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wfjs/cookie/include.js'));
    wfDocument::renderElement(array($element));
  }
  
  
}