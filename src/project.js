require=function h(o,r,a){function c(s,t){if(!r[s]){if(!o[s]){var e="function"==typeof require&&require;if(!t&&e)return e(s,!0);if(u)return u(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var n=r[s]={exports:{}};o[s][0].call(n.exports,function(t){var e=o[s][1][t];return c(e||t)},n,n.exports,h,o,r,a)}return r[s].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({Chess:[function(t,e,s){"use strict";cc._RF.push(e,"daeafQ+H7hGdIkUT07AY+dJ","Chess"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){}}),cc._RF.pop()},{}],HelloWorld:[function(t,e,s){"use strict";function i(t){t.opacity=0}function n(t){t.opacity=255}cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},bg:{default:null,type:cc.Node},chesses:{default:[],type:cc.Node},text:"Hello, World!"},ctor:function(){this.state=[],this.chessNum=0},onLoad:function(){this.label.string=this.text;for(var t=0;t<9;t++){var e=this.chesses[t];i(e.getChildByName("mengshou")),i(e.getChildByName("longzu")),e.index=t,e.game=this,e.on("touchend",function(){var t=this.game;t.finish||(n(this.getChildByName("mengshou")),t.state[this.index]="o",t.chessNum+=1,t.checkFinish(),t.autoPlay(),t.checkFinish())},e)}},autoPlay:function(){if(!this.finish)for(;;){var t=Math.floor(9*cc.random0To1());if(null==this.state[t]){n(this.chesses[t].getChildByName("longzu")),this.state[t]="x",this.chessNum+=1;break}}},checkFinish:function(){if(!this.finish){var t=this.checkResult();t&&(this.finish=!0,"o"==t?this.label.string="you win":"x"==t?this.label.string="you lose":"tie"==t&&(this.label.string="tie"))}},checkResult:function(){var t=this.state[0],e=this.state[1],s=this.state[2],i=this.state[3],n=this.state[6];if(t){if(t==this.state[1]&&t==this.state[2])return t;if(t==this.state[3]&&t==this.state[6])return t;if(t==this.state[4]&&t==this.state[8])return t}if(e&&e==this.state[4]&&e==this.state[7])return e;if(s){if(s==this.state[5]&&s==this.state[8])return s;if(s==this.state[4]&&s==this.state[6])return s}return i&&i==this.state[4]&&i==this.state[5]?i:n&&n==this.state[7]&&n==this.state[8]?n:9<=this.chessNum?"tie":void 0},nextRoundClick:function(t,e){this.finish=!1;for(var s=0;s<9;s++)this.state[s]=void 0,i(this.chesses[s].getChildByName("mengshou")),i(this.chesses[s].getChildByName("longzu"));this.chessNum=0,this.label.string=""},update:function(t){}}),cc._RF.pop()},{}]},{},["Chess","HelloWorld"]);