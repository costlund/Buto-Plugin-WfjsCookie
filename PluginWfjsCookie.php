<?php
class PluginWfjsCookie{
  public static function widget_include(){
    wfPlugin::enable('include/js');
    $element = wfDocument::createWidget('include/js', 'include', array('src' => '/plugin/wfjs/cookie/include.js'));    
    wfDocument::renderElement(array($element));
  }
}
