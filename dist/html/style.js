"use strict";

module.exports = function (theme, name, options) {
  return "\n.background {\n  background-color: black;\n  width:100%;\n  height:".concat(theme["background-height"], ";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n.full-screen #").concat(name, "-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n.full-screen #").concat(name, "-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n.svg {\n  fill: ").concat(theme["svg-color"], ";\n  stroke: ").concat(theme["svg-color"], ";\n}\n\n.pointer-event-panel {\n  height: ").concat(theme["pointer-event-panel-height"], ";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#").concat(name, "-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#").concat(name, "-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n.svg-selected svg{\n  fill: ").concat(theme["svg-selected-color"], ";\n  stroke: ").concat(theme["svg-selected-color"], ";\n}\n#").concat(name, "-hover-display{\n    border: ").concat(theme["preview-border"], ";\n    display: flex;\n    overflow:hidden;\n    background-color: black;\n    position: absolute;\n    bottom: 14px;\n    left: 0px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n#").concat(name, "-hover-millisecond {\n  background-color: ").concat(theme["hms-background-color"], ";\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n}\n#").concat(name, ",\n#").concat(name, " ::before,\n#").concat(name, " ::after,\n#").concat(name, " div,\n#").concat(name, " p,\n#").concat(name, " span,\n#").concat(name, " ul,\n#").concat(name, " li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: ").concat(theme["color"], ";\n  font-family: \"Century Gothic\", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#").concat(name, " {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + ").concat(theme["controls-position"], ");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  \n}\n\n#").concat(name, "-settings-speed-hide {\n  text-align:right;\n}\n\n.grad {\n  background-image: linear-gradient(\n    rgba(100,100,100,00.01),\n    rgba(100,100,100,00.02),\n    rgba(100,100,100,00.03),\n    rgba(100,100,100,0.04),\n    rgba(100,100,100,0.05),\n    rgba(0,0,0,0.06),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.08),\n    rgba(0,0,0,0.09),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.9),\n    rgba(0,0,0,1)\n  );\n  position:absolute;\n  width:100%;\n  height:").concat(theme["grad-height"], ";\n  left:0px;\n  bottom:0px;\n  z-index:100;\n}\n\n#").concat(name, "-controls {\n  touch-action: none;\n  background-color: ").concat(theme["background-color"], ";\n  border: ").concat(theme["controls-border"], ";\n  position: absolute;\n  bottom: ").concat(theme["controls-bottom"], ";\n  left: 0px;\n  width: 100%;\n  height: 40px;\n  z-index:100;\n}\n\n#").concat(name, "-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: #505056;\n  position: relative;\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(name, "-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: ").concat(theme["loopbar-color"], ";\n}\n\n.").concat(name, "-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:").concat(theme["loopbar-color"], ";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n}\n\n#").concat(name, "-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#").concat(name, "-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: ").concat(theme["runningbar-color"], ";\n}\n\n#").concat(name, "-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(theme["cursor-color"], ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#").concat(name, "-left-controls {\n  display:inline-block;\n  width:200px;\n  height:35px;\n}\n#").concat(name, "-time-display {\n  display: table;\n  text-align: center;\n  width: auto;\n  height: 34px;\n  position: absolute;\n  left: 90px;\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n}\n\n#").concat(name, "-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#").concat(name, "-status-btn {\n  opacity: ").concat(theme["button-opacity"], ";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 40px;\n  height: 25px;\n  position: absolute;\n  overflow:visible;\n  left: 0px;\n  bottom: 0px;\n  margin: 10px 5px 5px 5px;\n  text-align: center;\n  z-index:3;\n}\n\n#").concat(name, "-volume {\n  opacity: ").concat(theme["button-opacity"], ";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: absolute;\n  left: 45px;\n  bottom: 5px;\n  margin: 10px 5px 5px 5px;\n  text-align: center;\n  z-index:3;\n}\n#").concat(name, "-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#").concat(name, "-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: ").concat(theme["loopbar-color"], ";\n  position:absolute;\n  left:25px;\n  bottom:6px;\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n}\n\n#").concat(name, "-volumebar-helper {\n  position: absolute;\n  width: 0px;\n  height: 15px;\n  left:25px;\n  bottom:0px;\n  z-index:10;\n}\n\n#").concat(name, "-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: ").concat(theme["color"], ";\n  position:relative;\n  left:0px;\n  bottom:0px;\n}\n\n#").concat(name, "-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: ").concat(theme["color"], ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n.").concat(name, "-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:").concat(theme["background-color"], ";\n  line-height:10px;\n  font-size:10px;\n}\n\n#").concat(name, "-loop-time {\n  margin: 7px;\n}\n\n#").concat(name, "-dc-btn {\n    opacity: 0.8;\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#").concat(name, "-loop-btn {\n  opacity: ").concat(theme["button-opacity"], ";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 15px;\n  height: 15px;\n  margin: 10px 5px 5px 5px;\n}\n\n\n#").concat(name, "-settings-btn {\n  opacity: ").concat(theme["button-opacity"], ";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 15px;\n  height: 15px;\n  margin: 10px 5px 5px 5px;\n}\n\n#").concat(name, "-full-screen-btn {\n  opacity: ").concat(theme["button-opacity"], ";\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 15px;\n  height: 15px;\n  margin: 10px 5px 5px 5px;\n}\n\n.").concat(name, "-speed-btn {\n  position: relative;\n  opacity: ").concat(theme["button-opacity"], ";\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n}\n\n#").concat(name, "-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:101;\n  background-color: ").concat(theme["settings-background-color"], ";\n  bottom: ").concat(theme["settings-panel-bottom"], ";\n  border: ").concat(theme["border"], ";\n  right: 5px;\n  width: 164px;\n  height: 175px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n.").concat(name, "-mc-right-controls {\n  float: right;\n}\n\n.").concat(name, "-hide {\n  display:none !important;\n}\n\n#").concat(name, "-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: ").concat(theme["speedbar-color"], ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(options.speedValues.length * 16, "px;\n  float: left;\n  margin-right:15px;\n}\n\n#").concat(name, "-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: ").concat(options.speedValues.length * 16, "px;\n  float: left;\n  left: -5px;\n  z-index:10;\n}\n\n\n#").concat(name, "-speed-value-bar:hover,\n#").concat(name, "-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#").concat(name, "-volumebar:hover,\n#").concat(name, "-volumebar-helper:hover,\n#").concat(name, "-volume-btn:hover,\n#").concat(name, "-volumebar:active,\n#").concat(name, "-volumebar-helper:active,\n#").concat(name, "-volume-btn:active {\n  cursor:pointer;\n}\n\n#").concat(name, "-speed-cursor {\n  position: absolute;\n  background-color: ").concat(theme["speedbar-cursor-color"], ";\n  top: 0px;\n  left: 0px;\n}\n\n#").concat(name, "-speed-cursor div {\n  position: absolute;\n  background-color: ").concat(theme["speedbar-cursor-color"], ";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#").concat(name, "-speed-cursor:hover {\n  cursor: pointer;\n}\n\n.").concat(name, "-speed-value-step {\n  width: 16px;\n  background-color: ").concat(theme["speedbar-color"], ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#").concat(name, "-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: ").concat(options.speedValues.length * 16, "px;\n  text-align: left;\n}\n\n.").concat(name, "-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#").concat(name, "-indicator {\n  font-size: 8px !important;\n  position: relative;\n  bottom: 15px;\n  color: ").concat(theme["color"], ";\n  white-space: nowrap;\n}\n\n#").concat(name, "-speed-settings {\n  height: ").concat(options.speedValues.length * 16 + 32 + 10 - 2, "px;\n}\n\n#").concat(name, "-speed-settings li.no-hover { \n  height: ").concat(options.speedValues.length * 16 + 10 - 2, "px; \n}\n#").concat(name, "-settings-panel.").concat(name, "-settings-speed-panel {\n  overflow: hidden;\n  width: 80px;\n  height: ").concat(options.speedValues.length * 16 + 32 + 20, "px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-settings-panel.").concat(name, "-settings-speed-panel .").concat(name, "-speed-btn {\n  float: left;\n}\n\n.").concat(name, "-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#").concat(name, "-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#").concat(name, "-settings-panel .").concat(name, "-speed-btn {\n  float: right;\n}\n\n#").concat(name, "-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#").concat(name, "-settings-panel.").concat(name, "-settings-speed-panel ul li {\n  min-width: 70px;\n}\n\n#").concat(name, "-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\ndiv.").concat(name, "-speed-value:hover {\n  background-color: ").concat(theme["hover-color"], ";\n  cursor: pointer;\n}\n\n#").concat(name, "-settings-panel ul li {\n  position: relative;\n  width: 100%;\n  min-width: 154px;\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n}\n\n#").concat(name, "-settings-panel ul li label {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 18px;\n}\n\n.switch input {\n  display: none;\n}\n\n.settings-switch {\n  float: right;\n}\n\n.settings-switch:after {\n  clear: both;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ").concat(theme["slider-off-color"], ";\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: ").concat(theme["slider-on-color"], ";\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px ").concat(theme["slider-on-color"], ";\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n\n.m-fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n.m-fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n\n#").concat(name, "-settings-panel ul li:hover {\n  background-color: ").concat(theme["hover-color"], ";\n  cursor: pointer;\n}\n\n#").concat(name, "-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#").concat(name, "-loopbar:hover {\n  cursor: pointer;\n}\n\n#").concat(name, "-status-btn:hover {\n  cursor: pointer;\n}\n\n#").concat(name, "-controls:active #").concat(name, "-cursor,\n#").concat(name, "-controls:hover #").concat(name, "-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-volume .").concat(name, "-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-volume .").concat(name, "-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-time-display.").concat(name, "-time-width-transition {\n  left: 140px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#").concat(name, "-settings-speed:hover .").concat(name, "-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-loop-btn:hover,\n#").concat(name, "-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#").concat(name, "-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#").concat(name, "-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}");
};