// JavaScript Document
(function(){$.fn.extend({textEffectLoop:function(e){var t,n,r;r={fps:20,repeat:10,debug:false,reverse:false,possibleChar:"ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=[];;><0123456789",startTime:0};n={timeout:5e3,loop:"infinite"};t=false;r=$.extend(r,n,e);return this.each(function(){var e,n;n=0;e=$(this);e.children().each(function(){return $(this).hide()});e.children().first().textEffect(r);e.trigger("texteffectloopstart");return e.children().off("texteffectend").on("texteffectend",function(){var i;t=!t;i=$(this);if(t===true){return setTimeout(function(){return i.textEffect({fps:r.fps/4,repeat:r.repeat/2,debug:r.debug,reverse:!r.reverse,possibleChar:r.possibleChar,startTime:r.startTime})},r.timeout)}else{if(i.next().length){return i.next().textEffect(r)}else{n++;if(r.loop==="infinite"||n<r.loop){return e.children().first().textEffect(r)}else{return e.trigger("texteffectloopend")}}}})})},textEffect:function(e){var t,n,r,i;r={fps:20,repeat:10,debug:false,reverse:false,possibleChar:"ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=[];;><0123456789",startTime:0};i=r.startTime;r=$.extend(r,e);n=function(e){if(r.debug){return typeof console!=="undefined"&&console!==null?console.log(e):void 0}};t=function(){return r.possibleChar.charAt(Math.floor(Math.random()*r.possibleChar.length))};return this.each(function(){var e,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M;l=this;c=$(this).text();i=0;h=1;s=d=0;p=parseInt(c.length/2+1,10);a=[];$(this).html("").show();e=function(e){n("[rendering at "+i+"]: "+e);d++;return setTimeout(f,i+=r.fps,e,l)};f=function(e){$(l).html(e);if(++s===d){if(r.reverse){$(l).html(c).hide()}return $(l).trigger("texteffectend")}};n("[init] fps: "+r.fps);n("[init] text: "+c);n("[init] effect: sequence");$(this).trigger("texteffectstart");for(o=g=1,T=c.length;1<=T?g<=T:g>=T;o=1<=T?++g:--g){if(h>c.length){break}for(v=y=1,N=r.repeat;1<=N?y<=N:y>=N;v=1<=N?++y:--y){u="";for(m=b=0,C=h-1;0<=C?b<=C:b>=C;m=0<=C?++b:--b){if(m<(h-1)/2){u+=c[m]}else{u+=t()}}a.push(u)}if(h===c.length){break}h*=2;if(h>c.length){h=c.length}}for(o=w=k=parseInt(c.length/2,10),L=c.length-1;k<=L?w<=L:w>=L;o=k<=L?++w:--w){u=c.slice(0,+(c.length/2)+1||9e9);for(v=S=A=parseInt(c.length/2+1,10),O=c.length-1;A<=O?S<=O:S>=O;v=A<=O?++S:--S){if(v<p){u+=c[v]}else{u+=t()}}p++;a.push(u)}if(r.reverse){a.reverse()}M=[];for(x=0,E=a.length;x<E;x++){u=a[x];M.push(e(u,this))}return M})}})}).call(this)