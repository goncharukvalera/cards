;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
const data = [,
    {
        ua: {
            name: 'АПАТІЯ',
            descr: `Чи можливо в променях сонячного світла та теплоти пір'ястих хмар відмовити собі в унікальній здатності відчувати політ на кінчиках пальців? Іноді захисна боротьба проти нестерпних почуттів розпачу та самотності схожа лише на, вигадану нами, хмару пилу.`
        },
        rus: {
            name: 'АПАТИЯ',
            descr: `Возможно ли в лучах солнечного света и теплоты перистых облаков отказать себе в уникальной способности чувствовать полёт на кончиках пальцев? Порой защитная борьба против невыносимых чувств отчаяния и одиночества похожа всего лишь, выдуманное нами, облако пыли.`
        },
        eng: {
            name: 'APATHY',
            descr: `Is it possible in the rays of sunlight and the warmth of cirrus clouds to deny yourself the unique ability to feel the flight at your fingertips? Sometimes, the defensive struggle against unbearable feelings of despair and loneliness looks like just a cloud of dust invented by us.`
        },
        ge: {
            name: 'APATHIE',
            descr: `Ist es möglich, sich in den Sonnenstrahlen und der Wärme der Zirruswolken die einzigartige Fähigkeit zu versagen, den Flug hautnah zu spüren? Manchmal ist der Abwehrkampf gegen unerträgliche Gefühle der Verzweiflung und Einsamkeit wie eine von uns erfundene Staubwolke.`
        }
    },
    {
        ua: {
            name: 'БЕЗНАДІЙНІСТЬ',
            descr: `Є частина душі, яка глибша за тугу – царство безнадійності. Звістки звідти: ніби життя в часі зовсім не було, і все минуле то є така ж тьмяна пляма, як це сіре небо. Збирали все життя, а коли прийшов чорний день, то з скарбнички нема чого взяти.`
        },
        rus: {
            name: 'БЕЗНАДЕЖНОСТЬ',
            descr: `Есть слой души, который глубже тоски – царство безнадежности. Вести оттуда: как будто жизни во времени вовсе не было, и всё прошлое такое же тусклое пятно, как это серое небо. Копили всю жизнь, а когда пришел чёрный день, то из копилки нечего взять.`
        },
        eng: {
            name: 'HOPELESSNESS',
            descr: `There is a layer of the soul that lies deeper than longing – the realm of hopelessness. News from there: as if there was no life at all in time and the whole past was the same foggy spot, like that gray sky. They saved all their lives, and when a rainy day came, there was nothing to take from the piggy bank.`
        },
        ge: {
            name: 'HOFFNUNGSLOSIGKEIT',
            descr: `Es gibt eine Schicht der Seele, die tiefer liegt als die Sehnsucht – das Reich der Hoffnungslosigkeit. Neuigkeiten von dort: als gäbe es überhaupt kein Leben in der Zeit und die ganze Vergangenheit wäre derselbe trübe Fleck wie dieser graue Himmel. Sie haben ihr ganzes Leben lang gespart, und als ein regnerischer Tag kam, gab es nichts, was sie aus dem Sparschwein mitnehmen konnten.`
        }
    },
    {
        ua: {
            name: 'БЕЗПЕКА',
            descr: `Ви вірите в небеса? За нами звідти завжди доглядають. Обійми з Небом наповнюють, втішаю, заспокоюють. Розчиняючись у світлі нового дня, можна відчути себе у безпеці.`
        },
        rus: {
            name: 'БЕЗОПАСНОСТЬ',
            descr: `Вы верите в небеса? За нами оттуда всегда присматривают. Объятия с Небом наполняют, утешаю, успокаивают. Растворяясь в свете нового дня, можно почувствовать себя в безопасности.`
        },
        eng: {
            name: 'SAFETY',
            descr: `Do you believe in heaven From there we are always guarded. Hugs fill with the sky, comfort, and soothe. Dissolving in the light of a new day can make you feel safe.`
        },
        ge: {
            name: 'SICHERHEIT',
            descr: `Glauben Sie an den Himmel? Von dort aus werden wir immer bewacht. Umarmungen mit dem Himmel erfüllen, trösten, beruhigen. Wenn Sie sich im Licht eines neuen Tages auflösen, können Sie sich sicher fühlen.`
        }
    },
    {
        ua: {
            name: 'БАЙДУЖІСТЬ',
            descr: `Часом найбільші акти любові зробити найскладніше. Байдужість до життя, до себе, до того, що відбувається тут і зараз подібно до небесного корабля, що ширяє в глибині морської, у пошуках себе самого.`
        },
        rus: {
            name: 'БЕЗРАЗЛИЧИЕ',
            descr: `Порой величайшие акты любви совершить сложнее всего. Безразличие к жизни, к себе, к тому, что происходит здесь и сейчас подобно небесному кораблю, парящему в глубине морской, в поисках себя самого.`
        },
        eng: {
            name: 'DISINTEREST',
            descr: `Sometimes the greatest acts of love are the hardest to accomplish. Indifference to life, to oneself, to what is happening here and now is like a heavenly ship, soaring in the depths of the sea, in search of itself.`
        },
        ge: {
            name: 'LAUHEIT',
            descr: `Manchmal sind die größten Taten der Liebe am schwierigsten zu vollbringen. Gleichgültigkeit gegenüber dem Leben, gegenüber sich selbst, gegenüber dem, was hier und jetzt geschieht, ist wie ein himmlisches Schiff, das in den Tiefen des Meeres schwebt, auf der Suche nach sich selbst.`
        }
    },
    {
        ua: {
            name: 'ЗАНЕПОКОЇННЯ',
            descr: `Як Небо приймає все, прийми себе повністю, а потім відпусти пливти за вітром. Прийми себе, означає прийми інших. Не треба турбуватися. Нехай усе йде своєю стежкою, що йде до витоків. Кожен вираз буття, від порошинки до галактики повертається до початку і там знаходить спокій.`
        },
        rus: {
            name: 'БЕСПОКОЙСТВО',
            descr: `Как Небо принимает всё, прими себя полностью и целиком, а затем отпусти плыть по ветру. Прими себя, означает прими других. Не нужно беспокоиться. Пусть все идет своей тропой, уходящей к истокам. Каждое выражение бытия, от пылинки до галактики возвращается к истоку и там обретает покой.`
        },
        eng: {
            name: 'ANXIETY',
            descr: `As Heaven accepts everything, accept yourself completely, and then let yourself go off with the wind. Accepting yourself means taking others — no need to worry. Let everything go its own path, going back to the origins. Every expression of existence, from a grain of dust to a galaxy, returns to the source and finds peace there.`
        },
        ge: {
            name: 'BEUNRUHIGUNG',
            descr: `Da der Himmel alles akzeptiert, akzeptieren Sie sich selbst vollständig und lassen Sie sich dann vom Wind wegblasen. Sich selbst zu akzeptieren bedeutet, andere zu akzeptieren. Es besteht kein Grund zur Sorge. Lassen Sie den Dingen ihren Lauf und kehren Sie zum Wesentlichen zurück. Jede Manifestation des Seins, vom Staubkorn bis zur Galaxie, kehrt zur Quelle zurück und findet dort Frieden.`
        }
    },

    {
        ua: {
            name: 'БЕЗПОРАДНІСТЬ',
            descr: `Розчинившись у небі одного разу ти раптом захочеш піти. Все, що колись було важливим, Небо допоможе все відпустити. Стан жертви – ілюзія. Необхідність допомоги – пил. Звернувшись до Неба завжди можна отримати допомогу.`
        },
        rus: {
            name: 'БЕСПОМОЩНОСТЬ',
            descr: `Растворившись в небе однажды ты вдруг захочешь уйти. Всё, что когда-то было так важно, Небо поможет всё отпустить. Состояние жертвы – иллюзия. Необходимость в помощи – пыль. Обратившись к Небу всегда можно получить помощь.`
        },
        eng: {
            name: 'HELPLESS',
            descr: `Having dissolved in the sky once, you suddenly want to leave. Everything that was once so important, Heaven will help to let go. The state of the victim is an illusion. The need for help is dust. Turning to Heaven, you can always get help.`
        },
        ge: {
            name: 'HILFLOSIGKEIT',
            descr: `Einmal im Himmel aufgelöst, möchte man plötzlich gehen. Alles, was einst so wichtig war, hilft der Himmel loszulassen. Der Zustand des Opfers ist eine Illusion. Der Bedarf an Hilfe ist Staub. Schauen Sie in den Himmel – Sie können immer Hilfe bekommen.`
        }
    },
    {
        ua: {
            name: 'БЕЗСИЛЛЯ',
            descr: `За весь час існування нас на Землі ми можемо лише дивитися в Небо у безсилому здивуванні. Свого роду ми – бранці Землі. Однак сила полягає у кожному з нас. Потужність грози визначається силою удару блискавки. І світлом, що сяє зсередини громових хмар. Будьте подібні до цього світу.`
        },
        rus: {
            name: 'БЕССИЛИЕ',
            descr: `За всё время существования нас на Земле мы можем лишь смотреть в Небо в бессильном изумлении. Своего рода мы – Пленники Земли. Однако сила заключена в каждом из нас. Мощь грозы определяется силой удара молнии. И светом, сияющим изнутри громовых туч. Будьте подобны этому свету.`
        },
        eng: {
            name: 'WEAKNESS',
            descr: `For all our existence on Earth, we can only look at the Sky in weakness and amazement. We are, in a way, Prisoners of the Earth. However, the power lies in each of us. The strength of the lightning strike determines the power of a thunderstorm and the light shining from within the thunderclouds. Be like this light.`
        },
        ge: {
            name: 'SCHLAPPHEIT',
            descr: `Während unserer gesamten Existenz auf der Erde können wir den Himmel nur in ohnmächtigem Staunen betrachten. Wir sind gewissermaßen Gefangene der Erde. Die Kraft liegt jedoch in jedem von uns. Die Stärke eines Gewitters wird durch die Stärke des Blitzeinschlags bestimmt und das Licht, das aus den Gewitterwolken scheint. Sei wie dieses Licht.`
        }
    },

    {
        ua: {
            name: 'ПОДЯКА',
            descr: `Піднявши погляд, звернувшись до вічності, усвідомимо всю красу життя – моменту тут і зараз. Не в нашій силі – контроль. Подяка і прийняття – ключ до щастя... Щодня з Подякою в серці вирушайте у захоплюючу подорож – Життя, у напрямку – Радість.`
        },
        rus: {
            name: 'БЛАГОДАРНОСТЬ',
            descr: `Подняв взгляд, обратившись к вечности, осознаём всю прелесть жизни – момента здесь и сейчас. Не в нашей силе – контроль. Благодарность и принятие – ключ к счастью... Каждый день с Благодарностью в сердце отправляйтесь в увлекательное путешествие – Жизнь, в направлении – Радость.`
        },
        eng: {
            name: 'GRATITUDE',
            descr: `Looking up, turning to eternity, we realize the beauty of life – the moment here and now. It is not in our power to control. Gratitude and acceptance is the key to happiness... Every day, with Gratitude in your heart, embark on an exciting journey – Life, towards – Joy.`
        },
        ge: {
            name: 'DANKBARKEIT',
            descr: `Wenn wir nach oben blicken und uns der Ewigkeit zuwenden, erkennen wir die Schönheit des Lebens – den Moment hier und jetzt. Es liegt nicht in unserer Macht, es zu kontrollieren. Dankbarkeit und Akzeptanz sind der Schlüssel zum Glück... Begeben Sie sich jeden Tag mit Dankbarkeit im Herzen auf eine aufregende Reise – das Leben, hin zur Freude.`
        }
    },

    {
        ua: {
            name: 'БЛАЖЕНСТВО',
            descr: `Блаженний той, хто вірує. Одне запитання: Де ви опинитеся, коли стрибнули і падаєте в небо? Одна відповідь: Блаженство хмар і політ у невідомість.`
        },
        rus: {
            name: 'БЛАЖЕНСТВО',
            descr: `Блажен тот, кто верует. Один вопрос: Где Вы окажетесь, когда прыгнули и падаете в Небо? Один ответ: Блаженство облаков и полет в неизвестность.`
        },
        eng: {
            name: 'BLESSEDNESS',
            descr: `Blessed is he who believes. One question: Where will you end up when you jump and fall into the sky? One answer: Cloud bliss and flight into the unknown.`
        },
        ge: {
            name: 'WONNE',
            descr: `Gesegnet ist, wer glaubt. Eine Frage: Wo werden du landen, wenn Sie springen und in den Himmel fallen? Eine Antwort: Wolkenglück und Flucht ins Unbekannte.`
        }
    },

    {
        ua: {
            name: 'БЛИЗЬКІСТЬ',
            descr: `Ті найближче до Неба, кому нічого не треба. Ті, хто понад усе любить свого ближнього, служить Небу священнішим чином. І ті, хто близький зі своїм внутрішнім Небом – може довіритися потоку хмар та подиху вітру Життя.`
        },
        rus: {
            name: 'БЛИЗОСТЬ',
            descr: `Те ближе всего к Небу, кому ничего не надо. Те, кто превыше всего любит своего ближнего, служит Небу самым священным образом. И те, кто близок со своим внутренним Небом – может довериться потоку облаков и дуновению ветра Жизни.`
        },
        eng: {
            name: 'CLOSENESS',
            descr: `Those closest to Heaven, who do not need anything. Those who love their neighbor above all else serve Heaven in the most sacred way. And those who are close to their inner Sky can trust in the flow of clouds and the breath of the wind of Life.`
        },
        ge: {
            name: 'VERTRAUTHEIT',
            descr: `Diejenigen, die dem Himmel am nächsten sind und nichts brauchen. Wer seinen Nächsten über alles liebt, dient dem Himmel auf heiligste Weise. Und wer seinem inneren Himmel nahe ist, kann auf den Fluss der Wolken und den Hauch des Lebenswindes vertrauen.`
        }
    },

    {
        ua: {
            name: 'ЗАРОЗУМІЛІСТЬ',
            descr: `Чи високо Небо? Чи можна виявитися вищим? Знизивши важливість, ви відразу увійдете в рівноважний стан, а маятники не зможуть встановити над вами контроль – адже порожнечу нема за що зачепити.`
        },
        rus: {
            name: 'ВЫСОКОМЕРИЕ',
            descr: `Высоко ли Небо? Можно ли оказаться выше? Снизив важность, вы сразу войдете в равновесное состояние, а маятники не смогут установить над вами контроль – ведь пустоту не за что зацепить.`
        },
        eng: {
            name: 'ARROGANCE',
            descr: `Is the sky high? Can you get higher? By reducing the importance, you will immediately enter a state of equilibrium, and the pendulums will not be able to establish control over you – after all, there is nothing to hook on the emptiness.`
        },
        ge: {
            name: 'ARROGANZ',
            descr: `Ist der Himmel hoch? Können Sie höher kommen? Durch die Reduzierung der Wichtigkeit geraten Sie sofort in einen Gleichgewichtszustand und die Pendel können keine Kontrolle über Sie erlangen – schließlich gibt es nichts, was Sie an der Leere festmachen könnten.`
        }
    },
    {
        ua: {
            name: 'БІЛЬ',
            descr: `Біль тимчасовий. Кохання вічне. І це все, і більше нічого немає – є тільки Небо. Вічне небо.`
        },
        rus: {
            name: 'БОЛЬ',
            descr: `Боль временна. Любовь вечна. И это всё, и больше нет ничего – есть только Небо. Вечное Небо.`
        },
        eng: {
            name: 'PAIN',
            descr: `Pain is temporary. Love is eternal. And that's all, and there is nothing else – there is only Sky. Eternal Heaven.`
        },
        ge: {
            name: 'SCHMERZ',
            descr: `Schmerz ist vorübergehend. Liebe ist ewig. Und das ist alles, und es gibt nichts anderes – es gibt nur den Himmel. Ewiger Himmel.`
        }
    },
    {
        ua: {
            name: 'НАТХНЕННЯ',
            descr: `У кожному з нас мешкає шматочок неба. Від світанку, коли сонце своїм теплом і світлом надихає до нового дня і наповнює душу любов'ю. І до заходу сонця, і зірок, що відображають нескінченність прояву кожного з нас.`
        },
        rus: {
            name: 'ВДОХНОВЕНИЕ',
            descr: `В каждом из нас живет кусочек неба. От рассвета, когда солнце своим теплом и светом вдохновляет на новый день и наполняет душу любовью. И до заката, и звёзд, отражающих бесконечность проявления каждого из нас.`
        },
        eng: {
            name: 'INSPIRATION',
            descr: `Each of us has a piece of heaven. From sunrise, when the sun with its warmth and light inspires a new day and fills the soul with love. And before sunset, the stars, reflect the infinity of the manifestation of each of us.`
        },
        ge: {
            name: 'INSPIRATION',
            descr: `Jeder von uns hat ein Stück Himmel. Vom Morgengrauen an, wenn die Sonne mit ihrer Wärme und ihrem Licht einen neuen Tag inspiriert und die Seele mit Liebe erfüllt. Und vor Sonnenuntergang und den Sternen, die die Unendlichkeit der Manifestation eines jeden von uns widerspiegeln.`
        }
    },
    {
        ua: {
            name: 'СХВИЛЬОВАНІСТЬ',
            descr: `Спробуйте досягти Свого Неба. Небо інших ні в що не ставте і не турбуйтеся про нього. Схвильованність – стан, що знижує здатність розуміти значення своїх дій. Чи не легше відпустити за течією себе та думки, насолоджуючись легкістю хмар?`
        },
        rus: {
            name: 'ВЗВОЛНОВАННОСТЬ',
            descr: `Попробуйте достигнуть Своего Неба. Небо других ни во что не ставьте и о нём не тревожьтесь. Взволнованность – состояние, снижающее способность понимать значение своих действий. Не легче ли отпустить по течению себя и мысли, наслаждаясь воздушностью облаков?`
        },
        eng: {
            name: 'PEACELESSNESS',
            descr: `Try to reach your sky. Do not put the sky of others in anything and do not worry about it. Anxiety is a state that reduces the ability to understand the meaning of one's actions. Isn't it easier to let yourself and your thoughts go with the flow, enjoying the airiness of the clouds?`
        },
        ge: {
            name: 'FRIEDLOSIGKEIT',
            descr: `Versuchen Sie, Ihren Himmel zu erreichen. Setzen Sie nicht den Himmel anderer in irgendetwas und machen Sie sich darüber keine Sorgen. Angst ist ein Zustand, der die Fähigkeit verringert, die Bedeutung der eigenen Handlungen zu verstehen. Ist es nicht einfacher, sich und seine Gedanken treiben zu lassen und die Luftigkeit der Wolken zu genießen?`
        }
    },
    {
        ua: {
            name: 'ПРОВИНА',
            descr: `Не має значення скільки хмар на небі, небо залишається Небом. Воно не страждає від руху хмар, йому навіть немає необхідності стежити за кожною. Будьте подібні до неба. Не зважайте на думки. Залишайтеся нерухомою свідомістю.`
        },
        rus: {
            name: 'ВИНА',
            descr: `Неважно сколько облаков на небе, небо остается Небом. Оно не страдает от движения облаков, ему даже нет необходимости следить за каждым. Будьте подобны небу. Не обращайте внимания на мысли. Оставайтесь недвижимой осознанностью.`
        },
        eng: {
            name: 'GUILT',
            descr: `No matter how many clouds there are in the sky, the sky is still the sky. It does not suffer from the movement of the clouds, it does not even need to follow each one. Be like the sky. Pay no attention to thoughts. Remain immovable awareness.`
        },
        ge: {
            name: 'SCHULD',
            descr: `Egal wie viele Wolken am Himmel sind, der Himmel ist immer noch der Himmel. Es leidet nicht unter der Bewegung der Wolken, es muss nicht einmal jeder einzelnen folgen. Sei wie der Himmel. Schenke den Gedanken keine Beachtung. Bleiben Sie unbeweglich im Bewusstsein.`
        }
    },
    {
        ua: {
            name: 'ВІРА',
            descr: `Принадність польотів у Небо – у падінні, в абсолютній довірі потоку повітря. Вір у свій політ і небо ніколи не закінчиться. Але де воно небо? Що воно таке. Небо не над нами і не під нами, не ліворуч і не праворуч. Небо – у серці людини, якщо вона вірить.`
        },
        rus: {
            name: 'ВЕРА',
            descr: `Прелесть полётов в Небо – в падении, в абсолютном доверии потоку воздуха. Верь в свой полёт и небо не закончится никогда. Но где же оно небо? Что оно такое. Небо не над нами и не под нами, не слева и не справа. Небо – в сердце человека, если он верует.`
        },
        eng: {
            name: 'FAITH',
            descr: `The beauty of flying into the sky is in falling, in absolute trust in the flow of air. Believe in your flight and the sky will never end. But where is the sky? What is it. The sky is not above us and not below us, not to the left and not to the right. Heaven is in the heart of a man, if he believes.`
        },
        ge: {
            name: 'GLAUBE',
            descr: `Das Schöne am Fliegen in den Himmel liegt im Fallen, im absoluten Vertrauen auf den Luftstrom. Glaube an deinen Flug und der Himmel wird niemals enden. Aber wo ist der Himmel? Was ist es. Der Himmel ist nicht über uns und nicht unter uns, nicht links und nicht rechts. Der Himmel ist im Herzen eines Menschen, wenn er glaubt.`
        }
    },
    {
        ua: {
            name: 'ЗАКОХАННІСТЬ',
            descr: `У твоїх очах відбивається Небо. Є ті, хто любить дивитись туди. Ніхто не звертає уваги на Небо, доки не закохається. Поки не закохається в життя, у себе й саме Небо. Хмари не розуміють натяків, але люблять щирість.`
        },
        rus: {
            name: ' ВЛЮБЛЁННОСТЬ',
            descr: `В твоих глазах отражается Небо. И есть те, кто любит туда смотреть. Никто не обращает внимание на Небо, пока не влюбиться. Пока не влюбится в жизнь, в себя и в само Небо. Облака не понимают намёков, но обожают искренность.`
        },
        eng: {
            name: 'AMOROUSNESS',
            descr: `Heaven reflects in your eyes. And there are those who like to look there. No one pays attention to Heaven until they fall in love. Until you fall in love with life, with yourself and with Heaven itself. Clouds do not understand hints, but they love sincerity.`
        },
        ge: {
            name: 'VERLIEBTHEIT',
            descr: `Der Himmel spiegelt sich in deinen Augen. Und es gibt diejenigen, die gerne dorthin schauen. Niemand achtet auf den Himmel, bis er sich verliebt. Bis du dich in das Leben, in dich selbst und in den Himmel selbst verliebst. Wolken verstehen keine Hinweise, aber sie lieben Aufrichtigkeit.`
        }
    },
    {
        ua: {
            name: 'ЗБУДЖЕННЯ',
            descr: `Однак така особливість зоряного Неба: у кожного, хто дивиться на нього, солодко щемить серце. Можливо ми й справді родом звідкись звідти?`
        },
        rus: {
            name: 'ВОЗБУЖДЕНИЕ',
            descr: `Однако такова уж особенность звёздного Неба: у всякого, кто глядит на него, сладко щемит сердце. Возможно мы и в самом деле родом откуда-то оттуда?`
        },
        eng: {
            name: 'EXCITEMENT',
            descr: `However, such is the peculiarity of the starry Sky: everyone who looks at it has a sweet heart aching. Perhaps we really come from somewhere there?`
        },
        ge: {
            name: 'AUFREGUNG',
            descr: `Das ist jedoch die Besonderheit des Sternenhimmels: Bei jedem, der ihn betrachtet, schmerzt das Herz. Vielleicht kommen wir wirklich irgendwo von dort?`
        }
    },
    {
        ua: {
            name: 'ХВИЛЮВАННЯ',
            descr: `Це ознака того, що нас мучать гріхи. Хвилі душевної бурі посилюють ці муки, намагаючись знищити наш спокій. Ніхто й ніколи не зможе відібрати у тебе Твоє Небо. Ніхто, окрім тебе самого.`
        },
        rus: {
            name: 'ВОЛНЕНИЕ',
            descr: `Это признак того, что нас мучают грехи. Волны душевной бури усиливают эти муки, пытаясь уничтожить наш покой. Никто и никогда не сможет отнять у тебя Твоё Небо. Никто, кроме тебя самого.`
        },
        eng: {
            name: 'COMMOTION',
            descr: `This is a sign that we are tormented by sins. The waves of mental storm intensify these torments, trying to destroy our peace. No one will ever be able to take your Heaven away from you. Nobody but yourself.`
        },
        ge: {
            name: 'EKLAT',
            descr: `Dies ist ein Zeichen dafür, dass wir von Sünden gequält werden. Die Wellen des mentalen Sturms verstärken diese Qualen und versuchen, unseren Frieden zu zerstören. Niemand wird dir jemals deinen Himmel nehmen können. Niemand außer dir selbst.`
        }
    },
    {
        ua: {
            name: 'ОБУРЕННЯ',
            descr: `Всесвіт дихає з тобою одним диханням. Її кров тече у твоєму тілі. Тепло сонця – це тепло твоїх долонь. З кожним вдихом ти стаєш ширшим. З кожним видихом, ти стаєш легшим. Кордон між тобою та світом зникає. Напруга розсіюється, немов нічний морок на сході. Тобі нема чого боятися своєї свободи. Тебе більше нема. Ти скрізь. Ти – Небо.`
        },
        rus: {
            name: 'ВОЗМУЩЕНИЕ',
            descr: `Вселенная дышит с тобой одним дыханием. Ее кровь течет в твоем теле. Тепло солнца – это тепло твоих ладоней. С каждым вдохом ты становишься шире. С каждым выдохом, ты становишься легче. Граница между тобой и миром исчезает. Напряжение рассеивается, словно ночной мрак на восходе. Тебе нечего бояться своей свободы. Тебя больше нет. Ты везде. Ты – Небо.`
        },
        eng: {
            name: 'DISTURBANCE',
            descr: `The universe breathes with you one breath. Its blood flows in your body. The warmth of the sun is the warmth of your palms. With every breath, you get bigger. With each exhalation, you become lighter. The line between you and the world is disappearing. The tension dissipates like the darkness of the night at sunrise. You have nothing to fear for your freedom. You are no more. You are everywhere. You are Heaven.`
        },
        ge: {
            name: 'ENTRÜSTUNG',
            descr: `Das Universum atmet einen Atemzug mit dir. Ihr Blut fließt in deinem Körper. Die Wärme der Sonne ist die Wärme Ihrer Handflächen. Mit jedem Atemzug wirst du größer. Mit jedem Ausatmen werden Sie leichter. Die Grenze zwischen dir und der Welt verschwindet. Die Spannung löst sich auf wie die Dunkelheit der Nacht bei Sonnenaufgang. Sie haben von Ihrer Freiheit nichts zu befürchten. Du bist nicht mehr. Du bist überall. Du bist der Himmel.`
        }
    },
    {
        ua: {
            name: 'НАСНАГА',
            descr: `Під час дощу завжди пахне Небом. Одного разу, скуштувавши політ, ти завжди будеш ходити по землі з очима, зверненими до Неба, бо ти вже був там і тебе нестримно тягне підвищене бажання туди повернутися.`
        },
        rus: {
            name: 'ВООДУШЕВЛЕНИЕ',
            descr: `Во время дождя всегда пахнет Небом. Однажды, вкусив полёт, ты всегда будешь ходить по земле с глазами, обращенными к Небу, – ибо ты уже был там и тебя неудержимо тянет повышенное желание туда вернуться.`
        },
        eng: {
            name: 'ENTHUSIASM',
            descr: `When it rains, it always smells like Heaven. Once, having tasted flight, you will always walk the earth with your eyes turned to Heaven – for you have already been there and you are irresistibly drawn by an increased desire to return there.`
        },
        ge: {
            name: 'BEGEISTERUNG',
            descr: `Wenn es regnet, riecht es immer himmlisch. Wenn du einmal den Flug gekostet hast, wirst du immer mit dem Blick zum Himmel auf der Erde wandeln – denn du warst bereits dort und wirst von einem unwiderstehlichen Wunsch angezogen, dorthin zurückzukehren.`
        }
    },
    {
        ua: {
            name: 'ЗАХОПЛЕННЯ',
            descr: `Це почуття відображає враження від заходу сонця, який змушує на мить відчути ту малу кількість часу, яка відведена нам на Землі. Дивлячись нагору, можна насолодитися моментом і продовжити стан захоплення від безмежного Неба.`
        },
        rus: {
            name: 'ВОСТОРГ',
            descr: `Это чувство отражает впечатление от заката, который заставляет на мгновение ощутить то малое количество времени, которое отведено нам на Земле. Глядя вверх, можно насладиться моментом и продлить состояние восторга от безграничного Неба.`
        },
        eng: {
            name: 'DELIGHT',
            descr: `This feeling reflects the impression of the sunset, which makes you feel for a moment that small amount of time that is allotted to us on Earth. Looking up, you can enjoy the moment and prolong the state of delight from the boundless Sky.`
        },
        ge: {
            name: 'FREUDENTAUMEL',
            descr: `Dieses Gefühl spiegelt den Eindruck des Sonnenuntergangs wider, der einen für einen Moment die kleine Zeitspanne spüren lässt, die uns auf der Erde zur Verfügung steht. Wenn Sie nach oben schauen, können Sie den Moment genießen und den Zustand der Freude am grenzenlosen Himmel verlängern.`
        }
    },
    {
        ua: {
            name: 'ТРІУМФУВАННЯ',
            descr: `Це радісний стан милування небом може виникнути, будь ви невагома хмара, сяйво від краси перших променів сонця і будь ви сама подяка унікальності миті «тут і зараз».`
        },
        rus: {
            name: 'ВОСХИЩЕНИЕ',
            descr: `Это радостное состояние любования небом может возникнуть, будь вы невесомое облако, сияние от красоты первых лучей солнца и и будь вы сама благодарность уникальности мгновения «здесь и сейчас».`
        },
        eng: {
            name: 'ADORATION',
            descr: `This joyous state of admiring the sky can arise whether you are a weightless cloud, radiant from the beauty of the first rays of the sun, and whether you are grateful for the uniqueness of the moment «here and now».`
        },
        ge: {
            name: 'ENTZÜCKEN',
            descr: `Dieser freudige Zustand, den Himmel zu bewundern, kann entstehen, egal ob Sie eine schwerelose Wolke sind, die von der Schönheit der ersten Sonnenstrahlen strahlt, und ob Sie selbst für die Einzigartigkeit des Augenblicks ‚hier und jetzt‘ dankbar sind.`
        }
    },
    {
        ua: {
            name: 'ГНІВ',
            descr: `Часто, проявляючи агресію через відкритий прямий тиск на простір довкола, ми не помічаємо, що Світ доброзичливий. Коли всередині тебе кришталева гладь океану, вода спокійна і легка, лише тоді в ній точно може відбитися ясність неба.`
        },
        rus: {
            name: 'ГНЕВ',
            descr: `Часто, проявляя агрессию через открытое прямое давление на пространство вокруг, мы не замечаем, что Мир дружелюбен. Когда внутри тебя хрустальная гладь океана, вода спокойна и легка, лишь тогда в ней наиболее точно может отразиться ясность неба.`
        },
        eng: {
            name: 'WRATH',
            descr: `Often, showing aggression through open direct pressure on the space around us, we do not notice that the World is friendly. When the crystal surface of the ocean is inside you, the water is calm and light, only then can the clarity of the sky be most accurately reflected in it.`
        },
        ge: {
            name: 'GRIMM',
            descr: `Wenn wir Aggression durch offenen direkten Druck auf die Umgebung zeigen, merken wir oft nicht, dass die Welt freundlich ist. Wenn sich die kristallklare Oberfläche des Ozeans in Ihrem Inneren befindet, ist das Wasser ruhig und hell, nur dann kann sich die Klarheit des Himmels am genauesten darin widerspiegeln.`
        }
    },
    {
        ua: {
            name: 'ГОРДІСТЬ',
            descr: `Якесь відчуття сили, свободи та висоти польоту дарує нам життя щодня. Ми всі живемо під одним небом, проте обрій у кожного свій. І для того, щоб добре бачити, іноді необхідно саме відійти, а не наблизитися. І тоді з'явиться повна картина життя – панорама Неба.`
        },
        rus: {
            name: 'ГОРДОСТЬ',
            descr: `Некое ощущение силы, свободы и высоты полета дарит нам жизнь каждый день. Мы все живем под одним небом, однако горизонт у каждого свой. И для того, чтобы хорошо видеть, иногда, необходимо именно отойти, а не приблизиться. И тогда откроется полная картина жизни – панорама Неба.`
        },
        eng: {
            name: 'PRIDE',
            descr: `A certain feeling of strength, freedom, and height of flight gives us life every day. We all live under the same sky, but everyone has their own horizon. And in order to see well, sometimes, it is necessary to move away, and not to approach. And then the full picture of life will open – the panorama of the Sky.`
        },
        ge: {
            name: 'STOLZ',
            descr: `Ein gewisses Gefühl von Kraft, Freiheit und Flughöhe schenkt uns jeden Tag das Leben. Wir leben alle unter dem gleichen Himmel, aber jeder hat seinen eigenen Horizont. Und um gut sehen zu können, ist es manchmal notwendig, wegzugehen und sich nicht zu nähern. Und dann öffnet sich das Gesamtbild des Lebens – das Panorama des Himmels.`
        }
    },
    {
        ua: {
            name: 'ГОРЕ',
            descr: `Втративши хмару на Небесному полотні, можна зазнати сильного негативного переживання. Горе – завчена поведінка, вивчена емоція. Але як же приємно бачити хмари, що біжать по Небу, а в просвітах – мерехтіння місячного світла. Чи не так чергуються радості та прикрості в людському житті?`
        },
        rus: {
            name: 'ГОРЕ',
            descr: `Потеряв облако на Небесном холсте, можно испытать сильное негативное переживание. Горе – заученное поведение, выученная эмоция. Но как же приятно видеть бегущие по Небу облака, а в просветах – мерцание лунного света. Не так ли чередуются радости и горести в человеческой жизни?`
        },
        eng: {
            name: 'GRIEF',
            descr: `Losing a cloud on the heavenly canvas can be a powerful negative experience. Grief is a learned behavior, a learned emotion. But how nice it is to see clouds running across the Sky, and in the gaps – the flickering of moonlight. Isn't that how joys and sorrows alternate in human life?`
        },
        ge: {
            name: 'KUMMER',
            descr: `Der Verlust einer Wolke auf der Leinwand des Himmels kann eine starke negative Erfahrung sein. Trauer ist ein erlerntes Verhalten, eine erlernte Emotion. Aber wie schön ist es zu sehen, wie die Wolken über den Himmel ziehen und das Mondlicht in den Lücken flackert. Wechseln sich im Leben eines Menschen nicht auf diese Weise Freude und Leid ab?`
        }
    },
    {
        ua: {
            name: 'СМУТОК',
            descr: `Це стан, коли Небо здається сірим, чужим, жорстким та незручним, забарвленим у красиві прозоро-сірі та мінорні тони. Часто коли сумно хочеться плакати, хочеться самотності. Досить тільки пересунути стілець на кілька кроків, і ти знову і знову дивишся на західне Небо, варто тільки захотіти.`
        },
        rus: {
            name: 'ГРУСТЬ',
            descr: `Это состояние, когда Небо кажется серым, чужим, жестким и неудобным, окрашенным в красивые прозрачно-серые и минорные тона. Часто, когда грустно хочется плакать, хочется одиночества. Довольно только передвинуть стул на несколько шагов, и ты снова и снова смотришь на закатное Небо, стоит только захотеть.`
        },
        eng: {
            name: 'SADNESS',
            descr: `This is the state when the sky seems gray, alien, hard, and uncomfortable, painted in beautiful transparent gray and minor tones. Often, when you feel sad you want to cry, you want loneliness. It is enough just to move the chair a few steps, and you look at the sunset Sky, again and again, you just have to want to.`
        },
        ge: {
            name: 'WEHMUT',
            descr: `Dies ist der Zustand, in dem der Himmel grau, fremd, hart und ungemütlich erscheint, bemalt in wunderschönem transparentem Grau und sanften Tönen. Wenn man traurig ist, möchte man oft weinen und sich Einsamkeit wünschen. Es genügt, den Stuhl ein paar Schritte zu bewegen, und schon blickt man immer wieder in den Sonnenuntergangshimmel, man muss es einfach wollen.`
        }
    },
    {
        ua: {
            name: 'ДОВІРА',
            descr: `Дозволь життя нести тебе, так само як вітер спрямовує хмари. Довіра – це формування реалістичних очікувань і усвідомлення власних обмежень і можливостей пливти у просторі хмар.`
        },
        rus: {
            name: 'ДОВЕРИЕ',
            descr: `Позволь жизни нести тебя, так же как ветер направляет облака. Доверие – это формирование реалистичных ожиданий и осознание собственных ограничений, и возможностей плыть в пространстве облаков.`
        },
        eng: {
            name: 'TRUST',
            descr: `Let life carry you like the wind guides the clouds. Trust is the formation of realistic expectations and awareness of one's own limitations and possibilities to sail in the space of clouds.`
        },
        ge: {
            name: 'VERTRAUEN',
            descr: `Lass dich vom Leben tragen, wie der Wind die Wolken führt. Vertrauen ist die Bildung realistischer Erwartungen und das Bewusstsein für die eigenen Grenzen und Möglichkeiten, im Raum der Wolken zu segeln.`
        }
    },
    {
        ua: {
            name: 'ДОСАДА',
            descr: `Що б не сталося, навіть якщо скінчиться повітря, живи щоб не скінчилося Небо. Коли Небо в серці, то почуття роздратування та невдоволення внаслідок невдачі, образи не зможе оселитися в тобі.`
        },
        rus: {
            name: 'ДОСАДА',
            descr: `Что бы ни случилось, даже если кончится воздух, живи чтобы не кончилось Небо. Когда Небо в сердце, то чувство раздражения и неудовольствия вследствие неудачи, обиды не сможет поселиться в тебе.`
        },
        eng: {
            name: 'CHAGRIN',
            descr: `Whatever happens, even if the air runs out, live so that the Sky does not end. When Heaven is in the heart, then the feeling of irritation and displeasure due to failure, and resentment will not be able to settle in you.`
        },
        ge: {
            name: 'ÄRGER',
            descr: `Was auch immer passiert, auch wenn die Luft ausgeht, lebe damit der Himmel nicht untergeht. Wenn der Himmel im Herzen ist, kann sich das Gefühl der Verärgerung und des Unmuts aufgrund von Misserfolgen und Groll nicht in dir festsetzen.`
        }
    },
    {
        ua: {
            name: 'ГІДНІСТЬ',
            descr: `Втеча від себе схожа на втечу від неба. Можна звести стіни, загородитись стелею, але Небо як було над твоєю головою, так там і залишається. Так само в іграх з власною душею, можна виростити будь-які ілюзії, розбити всі дзеркала, але твоє обличчя все одно залишиться тим самим.`
        },
        rus: {
            name: 'ДОСТОИНСТВО',
            descr: `Побег от себя похож на побег от неба. Можно возвести стены, загородиться потолком, но Небо как было над твоей головой, так там и остаётся. Точно так же в играх с собственной душой, можно вырастить любые иллюзии, разбить все зеркала, но твое лицо всё равно останется прежним.`
        },
        eng: {
            name: 'DIGNITY',
            descr: `Escape from self is like an escape from heaven. You can build walls, or block off the ceiling, but as the Sky was above your head, it remains there. Similarly, in games with your own soul, you can grow any illusion, break all the mirrors, but your face will still remain the same.`
        },
        ge: {
            name: 'NOBLESSE',
            descr: `Die Flucht vor sich selbst ist wie die Flucht vor dem Himmel. Du kannst Mauern bauen, die Decke absperren, aber da der Himmel über deinem Kopf war, bleibt sie dort. Ebenso können Sie in Spielen mit Ihrer eigenen Seele jede Illusion wachsen lassen und alle Spiegel zerbrechen, aber Ihr Gesicht wird immer noch dasselbe bleiben.`
        }
    },
    {
        ua: {
            name: 'ЖАЛЬ',
            descr: `Можна втратити себе, поринувши в туман ілюзій – почуття дискомфорту, що часто набуває вигляду поблажливого співчуття. Дозвольте собі та іншим бути подібно до Неба – вільними від оцінки. Просто бути.`
        },
        rus: {
            name: 'ЖАЛОСТЬ',
            descr: `Можно потерять себя, погрузившись в туман иллюзий – чувство дискомфорта, часто приобретающее вид снисходительного сострадания. Позвольте себе и другим быть подобно Небу – свободными от оценки. Просто быть.`
        },
        eng: {
            name: 'PITY',
            descr: `You can lose yourself in a mist of illusion – a feeling of discomfort that often takes on the appearance of condescending compassion. Allow yourself and others to be like Heaven – free from judgment. Just be.`
        },
        ge: {
            name: 'WEHLEID',
            descr: `Man kann sich in einem Nebel der Illusion verlieren – einem Gefühl des Unbehagens, das oft den Anschein von herablassendem Mitgefühl annimmt. Erlaube dir und anderen, wie der Himmel zu sein – frei von Urteilen. Sei einfach.`
        }
    },
    {
        ua: {
            name: 'ЗАСТРІСТЬ',
            descr: `Найцінніший дар, який ми можемо запропонувати іншим – це наша присутність... Коли наша усвідомленість обіймає тих, кого ми любимо, вони розпускаються як квіти, вони ширяють у хмарах, і ми теж піднімаємось у небо.`
        },
        rus: {
            name: 'ЗАВИСТЬ',
            descr: `Самый ценный дар, который мы можем предложить другим – это наше присутствие... Когда наша осознанность обнимает тех, кого мы любим, они распускаются как цветы, они парят в облаках, и мы тоже поднимаемся ввысь.`
        },
        eng: {
            name: 'ENVY',
            descr: `The most valuable gift we can offer to others is our presence... When our awareness embraces those we love, they bloom like flowers, they soar in the clouds, and we too rise up in the sky.`
        },
        ge: {
            name: 'NEID',
            descr: `Das wertvollste Geschenk, das wir anderen machen können, ist unsere Anwesenheit… Wenn unser Bewusstsein diejenigen umarmt, die wir lieben, blühen sie wie Blumen, schweben in den Wolken und auch wir steigen in den Himmel auf.`
        }
    },
    {
        ua: {
            name: 'ЗАМІШАННЯ',
            descr: `Чи може, насправді, раптове короткочасне порушення порядку хмар, правильного польоту повітряного транспорту, збентежити Небо? Невизначеність хмар, їх рух і колір завжди ідеальні, у всіх куточках Землі.`
        },
        rus: {
            name: 'ЗАМЕШАТЕЛЬСТВО',
            descr: `Может ли, на самом деле, внезапное кратковременное нарушение порядка облаков, правильного полета воздушного транспорта, привести Небо в замешательство? Неопределенность облаков, их движение и цвет – всегда идеальны, во всех уголках Земли.`
        },
        eng: {
            name: 'CONFUSION',
            descr: `Can, in fact, sudden short-term disruption of the order of the clouds, the correct flight of air transport, throw the Sky into confusion? The uncertainty of the clouds, their movement and color are always perfect, in all corners of the Earth.`
        },
        ge: {
            name: 'VERWIRRTHEIT',
            descr: `Kann tatsächlich eine plötzliche kurzfristige Störung der Ordnung der Wolken, des korrekten Fluges des Lufttransports, den Himmel in Verwirrung stürzen? Die Unsicherheit der Wolken, ihre Bewegung und Farbe sind immer perfekt, in allen Ecken der Erde.`
        }
    },
    {
        ua: {
            name: 'СОРОМ’ЯЗЛИСІСТЬ',
            descr: `Через невпевненість у собі часто одягається маска нерішучості, боязкості, напруженості. За всім цим не видно справжнього світла хмар. Небо – це та картина, яка нам уже подарована, вже дана, і не потрібна інша.`
        },
        rus: {
            name: 'ЗАСТЕНЧИВОСТЬ',
            descr: `Из-за неуверенности в себе часто надевается маска нерешительности, боязливости, напряжённости. За всем этим не видно истинного света облаков. Небо – это та картина, которая нам уже подарена, уже дана, и не нужно другой.`
        },
        eng: {
            name: 'SHYNESS',
            descr: `Because of self-doubt, a mask of indecision, timidity, and tension is often put on. Behind all this, the true light of the clouds is not visible. The sky is the picture that has already been given to us and no other is needed.`
        },
        ge: {
            name: 'SCHÜCHTERNHEIT',
            descr: `Aufgrund von Selbstzweifeln wird oft eine Maske der Unentschlossenheit, Schüchternheit und Anspannung aufgesetzt. Dahinter ist das wahre Licht der Wolken nicht sichtbar. „Der Himmel ist das Bild, das uns bereits gegeben wurde und es besteht keine Notwendigkeit für ein weiteres.`
        }
    },
    {
        ua: {
            name: 'ЗЛІСТЬ',
            descr: `У спогляданні зоряного неба можна знайти більше заспокоєння, ніж у людській мудрості. Ми можемо вести, спрямовувати наші кораблі життя, дивлячись у небо, по зірках, будучи в будь-якій частині Земної кулі і приймати кожен прояв нас самих як світло тих самих зірок.`
        },
        rus: {
            name: 'ЗЛОСТЬ',
            descr: `В созерцании звездного неба можно найти больше успокоения, нежели в человеческой мудрости. Мы можем вести, направлять наши корабли жизни, глядя в небо, по звёздам, будучи в любой части Земного шара и принимать каждое проявление нас самих как свет тех самых звезд.`
        },
        eng: {
            name: 'ANGER',
            descr: `One can find more comfort in contemplating the starry sky than in human wisdom. We can lead, and direct our ships of life, looking at the sky, by the stars, being in any part of the globe, and accepting each manifestation of ourselves as the light of those same stars.`
        },
        ge: {
            name: 'WUT',
            descr: `In der Betrachtung des Sternenhimmels kann man mehr Trost finden als in menschlicher Weisheit. Wir können unsere Lebensschiffe führen und lenken, indem wir in den Himmel und zu den Sternen blicken, uns in jedem Teil der Welt aufhalten und jede Manifestation von uns selbst als das Licht derselben Sterne akzeptieren.`
        }
    },
    {
        ua: {
            name: 'ІНТЕРЕС',
            descr: `Небо. Ти тільки глянь туди. Там зовсім інший світ. Ми можемо дивитися на нього, але не можемо зрозуміти. Не вір на слово. Перевір сам. Сумнівайся в авторитетах, перевіряй себе, але будь впевнений у Небі і з інтересом вирушай у нові подорожі хмарами подій.`
        },
        rus: {
            name: 'ИНТЕРЕС',
            descr: `Небо. Ты только посмотри туда. Там совершенно другой мир. Мы можем смотреть на него, но не можем понять. Не верь на слово. Проверь сам. Сомневайся в авторитетах, проверяй себя, но будь уверен в Небе и с интересом отправляйся в новые путешествия по облакам событий.`
        },
        eng: {
            name: 'INTEREST',
            descr: `Sky. Just look there. It's an entirely different world there. We can look at it, but we cannot understand it. Don't take my word for it. Check it yourself. Doubt the authorities, test yourself but be confident in the sky and embark on new journeys through the clouds of events with interest.`
        },
        ge: {
            name: 'INTERESSE',
            descr: `Himmel. Schauen Sie einfach da hin. Es ist dort eine ganz andere Welt. Wir können es betrachten, aber wir können es nicht verstehen. Glauben Sie mir nicht beim Wort. Überprüfen Sie es selbst. Zweifle an den Autoritäten, teste dich selbst, aber sei zuversichtlich in den Himmel und begib dich mit Interesse auf neue Reisen durch die Wolken der Ereignisse.`
        }
    },
    {
        ua: {
            name: 'ЛЕГКІСТЬ',
            descr: `Кордони має тільки вміст розуму, але свідомість ніколи не пов'язана з тим, що він містить. Небо не знає меж у своєму прояві. Будь подібний до Неба. Розправ крила, лети, як легка пір'їнка на вітрі.`
        },
        rus: {
            name: 'ЛЕГКОСТЬ',
            descr: `Границы имеет только содержимое ума, но сознание никогда не связано с тем, что оно содержит. Небо не знает границ в своём проявлении. Будь подобен Небу. Расправь крылья, лети, как легкое перышко на ветру.`
        },
        eng: {
            name: 'LIGHTNESS',
            descr: `Only the contents of the mind have no limits, but consciousness is never connected to what it contains. The sky knows no boundaries in its manifestation. Be like Heaven. Spread your wings, fly like a light feather in the wind.`
        },
        ge: {
            name: 'LEICHTIGKEIT',
            descr: `Nur die Inhalte des Geistes haben Grenzen, aber das Bewusstsein ist niemals mit dem verbunden, was es enthält. Der Himmel kennt in seiner Erscheinung keine Grenzen. Sei wie der Himmel. Breite deine Flügel aus, fliege wie eine leichte Feder im Wind.`
        }
    },
    {
        ua: {
            name: 'ЛУКАВСТВО',
            descr: `Хмари не залишають слідів і птахи блукають невидимими дорогами, але ці шляхи лежать у єдності з орбітами планет, стежками мандрівних комет і биттям твого серця. Будь Небом, ідучи по Землі.`
        },
        rus: {
            name: 'ЛУКАВСТВО',
            descr: `Облака не оставляют следов и птицы бродят по невидимым дорогам, но все же эти пути лежат в единстве с орбитами планет, тропами странствующих комет и биением твоего сердца. Будь Небом, идя по Земле.`
        },
        eng: {
            name: 'CRAFTINESS',
            descr: `Clouds leave no traces and birds roam on invisible roads, yet these paths lie in unity with the orbits of the planets, the paths of wandering comets, and the beating of your heart. Be Heaven walking on Earth.`
        },
        ge: {
            name: 'VERSCHMITZTHEIT',
            descr: `Wolken hinterlassen keine Spuren und Vögel streifen auf unsichtbaren Straßen, doch diese Wege stehen im Einklang mit den Umlaufbahnen der Planeten, den Bahnen wandernder Kometen und dem Schlag deines Herzens. Sei der Himmel, der auf Erden wandelt.`
        }
    },
    {
        ua: {
            name: 'ЦІКАВІСТЬ',
            descr: `Сьогодні захід сонця неймовірний – як завжди надихає. Небо запрошує розділити з ним затишок західного сонця та полетіти у космос із музикою. Той самий момент, коли варто віддатись потоку вітру. Небо це місце, звідки ми всі родом.`
        },
        rus: {
            name: 'ЛЮБОПЫТСТВО',
            descr: `Сегодня закат невероятный, как всегда вдохновляет. Небо приглашает разделить с ним уют уходящего солнца и улететь в космос с музыкой. Тот самый момент, когда стоит отдаться потоку ветра. Небо – это то место, откуда мы все родом.`
        },
        eng: {
            name: 'CURIOSITY',
            descr: `Today's sunset is incredible as always, inspiring. The sky invites you to share with him the comfort of the setting sun and fly into space with music. The very moment when you should surrender to the flow of the wind. Heaven is where we all come from.`
        },
        ge: {
            name: 'NEUGIER',
            descr: `Der heutige Sonnenuntergang ist unglaublich – wie immer inspirierend. Der Himmel lädt Sie ein, mit ihm die Behaglichkeit der untergehenden Sonne zu teilen und mit Musik ins All zu fliegen. Der Moment, in dem Sie sich dem Wind hingeben sollten. Der Himmel ist, wo wir alle herkommen.`
        }
    },
    {
        ua: {
            name: 'НАДІЯ',
            descr: `Коли двоє людей дивляться в Небо з різних кінців Земної кулі, десь там високо їхні погляди неодмінно перетинаються. Можливо, вони ще не знають, що вони мають бути разом, але це лише питання часу. Тому завжди тримайте голову та продовжуйте вірити.`
        },
        rus: {
            name: 'НАДЕЖДА',
            descr: `Когда два человека смотрят в Небо с разных концов Земного шара, где-то там высоко их взгляды непременно пересекаются. Возможно, они еще не знают, что им предстоит быть вместе, но это лишь вопрос времени. Поэтому всегда держите голову и продолжайте верить.`
        },
        eng: {
            name: 'HOPE',
            descr: `When two people look into the sky from different parts of the globe, somewhere high up their views will certainly intersect. Perhaps they do not yet know that they will be together, but it's only a matter of time. So always keep your head up and keep believing.`
        },
        ge: {
            name: 'HOFFNUNG',
            descr: `Wenn zwei Menschen aus verschiedenen Teilen der Welt in den Himmel blicken, werden sich ihre Ansichten mit Sicherheit irgendwo in der Höhe kreuzen. Vielleicht wissen sie noch nicht, dass sie zusammen sein werden, aber es ist nur eine Frage der Zeit. Also behalten Sie immer den Kopf und glauben Sie weiter.`
        }
    },
    {
        ua: {
            name: 'НАПРУГА',
            descr: `Ти є Всесвіт у кожній хмарі, у кожному подиху вітру. Ти є з кожним своїм вдихом у просторі варіантів. І тебе немає – з кожним твоїм видихом, бо розчиняєшся в єднанні і відчутті цілісності з навколишнім Небом. Так чудово прокидатися вранці, зустрічаючи світанок і новий день – як диво, все наше життя – диво!`
        },
        rus: {
            name: 'НАПРЯЖЕНИЕ',
            descr: `Ты есть Вселенная в каждом облаке, в каждом дуновении ветра. Ты есть с каждым своим вдохом в пространстве вариантов. И тебя нет – с каждым твоим выдохом, ибо растворяешься в единении и ощущении целостности с окружающим тебя Небом. Так здорово просыпаться утром, встречая рассвет и новый день – как чудо, вся наши жизнь – чудо!`
        },
        eng: {
            name: 'TENSION',
            descr: `You are the Universe in every cloud, in every breath of wind. You are with every breath you take in the space of options. And you are gone – with each of your exhalations because you dissolve in unity and a sense of integrity with the Sky around you. It's so great to wake up in the morning, meeting the dawn and a new day – like a miracle, our whole life is a miracle!`
        },
        ge: {
            name: 'SPANNUNG',
            descr: `Du bist das Universum in jeder Wolke, in jedem Windhauch. Mit jedem Atemzug befinden Sie sich im Raum der Möglichkeiten. Und du bist weg – mit jedem deiner Ausatmungen, weil du dich in Einheit und einem Gefühl der Integrität mit dem Himmel um dich herum auflöst. Es ist so toll, morgens aufzuwachen, die Morgendämmerung und einen neuen Tag zu erleben – wie ein Wunder, unser ganzes Leben ist ein Wunder!`
        }
    },
    {
        ua: {
            name: 'НАСОЛОДА',
            descr: `Небом можна милуватися вічно, воно завжди дарує нові та нові картини. Не поділяй Небо і Землю, себе і мир, розум і серце, з'єднай їх у своєму спогляданні – тільки так відчуєш справжній смак життя. Птах не знає про вітер, але літає. Насолоджуйся миттю – Життя.`
        },
        rus: {
            name: 'НАСЛАЖДЕНИЕ',
            descr: `Небом можно любоваться вечно, оно всегда дарит новые и новые картины. Не разделяй Небо и Землю, себя и мир, ум и сердце, соедини их в своем созерцании – только так почувствуешь подлинный вкус жизни. Птица не знает о ветре, но летает. Наслаждайся мгновением – Жизнь.`
        },
        eng: {
            name: 'ENJOYMENT',
            descr: `The sky can be admired forever, it always gives new and new pictures. Do not separate Heaven and Earth, yourself and the world, mind, and heart, unite them in your contemplation – only in this way will you feel the true taste of life. The bird does not know about the wind, but it flies. Enjoy the moment – Life.`
        },
        ge: {
            name: 'VERGNÜGEN',
            descr: `Der Himmel kann für immer bewundert werden, er gibt immer neue und neue Bilder. Trennen Sie nicht Himmel und Erde, sich selbst und die Welt, Geist und Herz, sondern vereinen Sie sie in Ihrer Betrachtung – nur so werden Sie den wahren Geschmack des Lebens spüren. Der Vogel kennt den Wind nicht, aber er fliegt. Genieße den Moment – das Leben.`
        }
    },
    {
        ua: {
            name: 'НАСТОРОЖЕНІСТЬ',
            descr: `Нехай погляд звернеться до хмар. І ти більше не почуєш гулу натовпу. Ти – Небо. Решта — це лише погода. Розправи крила. Лети.`
        },
        rus: {
            name: 'НАСТОРОЖЕННОСТЬ',
            descr: `Пусть взгляд обратится к облакам. И ты больше не услышишь гула толпы. Ты — Небо. Всё остальное — это всего лишь погода. Расправь крылья. Лети.`
        },
        eng: {
            name: 'CIRCUMSPECTION',
            descr: `Let your eyes turn to the clouds. And you will not hear the roar of the crowd more. You are Heaven. Everything else is just the weather. Spread your wings. Let yourself Fly.`
        },
        ge: {
            name: 'WACHSAMKEIT',
            descr: `Nehmen Sie den Blick in die Wolken. Und Sie werden das Grollen der Menge nicht mehr hören. Du bist das Paradies. Alles andere ist nur das Wetter. Breite deine Flügel aus und fliege. `
        }
    },
    {
        ua: {
            name: 'ЛЮБОВ',
            descr: `– це небо. Завжди поруч. Збережіть Її, і обіцяю: те, що Ви любите, знайде спосіб захопитися від землі у висоту, в її моторошно щасливі відповіді на всі запитання.`
        },
        rus: {
            name: 'ЛЮБОВЬ',
            descr: `– это небо. Всегда рядом. Сохраните Её, и обещаю: то, что Вы любите, найдёт способ увлечься от земли в высоту, в её жутковато счастливые ответы на все вопросы.`
        },
        eng: {
            name: 'LOVE',
            descr: `– is the sky. Always near. Save it, and I promise that what you love will find a way to be carried away from the earth above, into its eerily happy answers to all questions.`
        },
        ge: {
            name: 'LIEBE',
            descr: `– das ist der Himmel. Immer in der Nähe. Speichern Sie es, und ich verspreche Ihnen, dass das, was Sie lieben, einen Weg finden wird, von der Erde in die Höhe getragen zu werden, in ihre unheimlich glücklichen Antworten auf alle Fragen.`
        }
    },
    {
        ua: {
            name: 'НЕДОВІРА',
            descr: `Моє Небо любить мене так само, як і Твоє Небо любить тебе. І так само, як і Наше Небо любить нас. Варто відпустити всі сумніви та невпевненість у словах, що затуманюють твій розум. І довіритися потоку повітря, що наповнює світлом добра та довіри.`
        },
        rus: {
            name: 'НЕДОВЕРИЕ',
            descr: `Моё Небо любит меня так же, как и Твоё Небо любит тебя. И ровно на столько, как и Наше Небо любит нас. Стоит отпустить все сомнения и неуверенность в словах, что затуманивают твой ум. И довериться потоку воздуха, наполняющего светом добра и доверия.`
        },
        eng: {
            name: 'MISTRUST',
            descr: `My Heaven loves me as much as Your Heaven loves you. And exactly as much as Our Heaven loves us. It is worth letting go of all doubts and insecurities in the words that cloud your mind. And trust the flow of air that fills with the light of goodness and trust.`
        },
        ge: {
            name: 'MISSTRAUEN',
            descr: `Mein Himmel liebt mich genauso sehr, wie Dein Himmel dich liebt. Und genau so sehr, wie unser Himmel uns liebt. Es lohnt sich, alle Zweifel und Unsicherheiten in den Worten loszulassen, die Ihren Geist trüben. Und vertraue dem Luftstrom, der sich mit dem Licht der Güte und des Vertrauens füllt.`
        }
    },
    {
        ua: {
            name: 'НЕВДОВОЛЕННЯ',
            descr: `Ілюзія, у вигляді туманного затемнення, часто виникає всередині нас, виснажує душу. А бажання контролювати потік хмарних сфер над головою може дати незадоволеність і негативне ставлення до Неба. Полюби Небо. У нього можна дивитися скільки завгодно. Не набридає.`
        },
        rus: {
            name: 'НЕДОВОЛЬСТВО',
            descr: `Иллюзия, в виде туманного затмения, часто возникает внутри нас, истощает душу. А желание контролировать поток облачных сфер над головой может принести неудовлетворенность и отрицательное отношение к Небу. Полюби Небо. В него можно смотреть сколько угодно. Не надоедает.`
        },
        eng: {
            name: 'DISCONTENT',
            descr: `Illusion, in the form of a misty eclipse, often arises within us, exhausting the soul. And the desire to control the flow of cloudy spheres overhead can bring dissatisfaction and a negative attitude toward Heaven. Love the sky. You can look at it as much as you like. Doesn't get bored.`
        },
        ge: {
            name: 'UNZUFRIEDENHEIT',
            descr: `Oft entsteht in uns eine Illusion in Form einer nebligen Sonnenfinsternis, die die Seele erschöpft. Und der Wunsch, den Fluss der wolkigen Sphären über uns zu kontrollieren, kann zu Unzufriedenheit und einer negativen Einstellung gegenüber dem Himmel führen. Liebe den Himmel. Sie können es sich so oft ansehen, wie Sie möchten. Da wird es nicht langweilig.`
        }
    },
    {
        ua: {
            name: 'ЗДИВУВАННЯ',
            descr: `Стан сумніву, коливання внаслідок неможливості зрозуміти, у чому справа і як формуються хмари життя. Небеса не помиляються, це очі обманюють нас.`
        },
        rus: {
            name: 'НЕДОУМЕНИЕ',
            descr: `Состояние сомнения, колебания вследствие невозможности понять, в чём дело и как формируются облака жизни. Небеса не ошибаются, – это глаза обманывают нас.`
        },
        eng: {
            name: 'BEWILDERMENT',
            descr: `A state of doubt, hesitation due to the inability to understand what is the matter and how the clouds of life are formed. Heaven doesn't err, it's the eyes that deceive us.`
        },
        ge: {
            name: 'VERWIRRUNG',
            descr: `Ein Zustand des Zweifels, des Zögerns aufgrund der Unfähigkeit zu verstehen, worum es geht und wie die Wolken des Lebens entstehen. Der Himmel irrt nicht, es sind die Augen, die uns täuschen.`
        }
    },
    {
        ua: {
            name: 'НІЖНІСТЬ',
            descr: `Якщо люди далеко, їх поєднує світло Сонця, що сходить. Ніжність торкання Його променів дає можливість насолодитися унікальністю і дивом дня, що приходить. Якось подарувавши ніжність іншому, ви відчуєте її в кожному подуві вітру.`
        },
        rus: {
            name: 'НЕЖНОСТЬ',
            descr: `Если люди далеко, их объединяет свет восходящего Солнца. Нежность касания Его лучей даёт возможность насладиться уникальностью и чудом приходящего дня. Однажды подарив нежность другому, вы ощутите её в каждом дуновении ветра.`
        },
        eng: {
            name: 'TENDERNESS',
            descr: `If people are far away, they are united by the light of the rising Sun. The tenderness of the touch of His rays makes it possible to enjoy the uniqueness and miracle of the coming day. Once giving tenderness to another, you will feel it in every breath of the wind.`
        },
        ge: {
            name: 'ZÄRTLICHKEIT',
            descr: `Wenn Menschen weit weg sind, verbindet sie das Licht der aufgehenden Sonne. Die Zärtlichkeit der Berührung Seiner Strahlen ermöglicht es, die Einzigartigkeit und das Wunder des kommenden Tages zu genießen. Sobald Sie einem anderen Zärtlichkeit schenken, werden Sie es in jedem Atemzug des Windes spüren.`
        }
    },
    {
        ua: {
            name: 'НЕЗРУЧНІСТЬ',
            descr: `Іноді любов – немов будинок без жодних дверей, як Небо, настільки повне зірок, що жодну не розглянути. Але світло кожної можна відчути. А коли з Неба падає сніг – отже, небу так треба. Дозволь собі бути собою, проявляючись максимально, не соромлячись, а відчуваючи свободу всередині.`
        },
        rus: {
            name: 'НЕЛОВКОСТЬ',
            descr: `Порой любовь – словно дом без единой двери, как Небо, столь полное звёзд, что ни одну не разглядеть. Но свет каждой можно почувствовать. А когда с Неба падает снег – значит небу так надо. Позволь себе быть собой, проявляясь максимально, не стыдясь, а чувствуя свободу внутри.`
        },
        eng: {
            name: 'AWKWARDNESS',
            descr: `Sometimes love is like a house without a single door, like a sky so full of stars that none can be seen. But the light of each can be felt. And when snow falls from the sky, it means that the sky needs it. Allow yourself to be yourself, expressing yourself to the maximum, not being ashamed, but feeling free inside.`
        },
        ge: {
            name: 'UNBEHOLFENHEIT',
            descr: `Manchmal ist Liebe wie ein Haus ohne eine einzige Tür, wie ein Himmel voller Sterne, die man nicht sehen kann. Aber das Licht jedes Einzelnen ist spürbar. Und wenn Schnee vom Himmel fällt, bedeutet das, dass der Himmel ihn braucht. Erlaube dir, du selbst zu sein, dich maximal auszudrücken, dich nicht zu schämen, sondern dich innerlich frei zu fühlen.`
        }
    },
    {
        ua: {
            name: 'НЕНАВИСТЬ',
            descr: `Це небажання бачити і приймати те, що відбувається довкола і всередині тебе самого. Найкращий спосіб щось побачити – подивитися в Небо, звільнити розум від думок, і... хмарні постаті самі тебе знайдуть. Відпусти. Небу видніше.`
        },
        rus: {
            name: 'НЕНАВИСТЬ',
            descr: `Это нежелание видеть и принимать то, что происходит вокруг и внутри тебя самого. Лучший способ что-то увидеть – посмотреть в Небо, освободить ум от мыслей, и... облачные фигуры сами найдут тебя. Отпусти. Небу виднее.`
        },
        eng: {
            name: 'HATRED',
            descr: `This unwillingness to see and accept what is happening around and inside you. The best way to see something is to look into the sky, clear your mind of thoughts, and... the cloud figures will find you. Let go. The sky is visible.`
        },
        ge: {
            name: 'HASS',
            descr: `Diese Unwilligkeit, zu sehen und zu akzeptieren, was um Sie herum und in Ihnen geschieht. Der beste Weg, etwas zu sehen, ist, in den Himmel zu schauen, den Kopf von den Gedanken zu befreien und... die Wolkenfiguren werden Sie finden. Lass los. Der Himmel ist sichtbar.`
        }
    },
    {
        ua: {
            name: 'НЕПРИЯЗНЬ',
            descr: `Наша істинна природа, подібна до простору Неба, буває наповнена вмістом, якого ми не хотіли б мати. Але сам простір завжди порожній, чистий і водночас наповнений усім. Усередині кожного своє небо, і кожен по-своєму у ньому літає.`
        },
        rus: {
            name: 'НЕПРИЯЗНЬ',
            descr: `Наша истинная природа, подобная пространству Неба, бывает наполнена содержимым, которое мы предпочли бы не иметь. Но само пространство всегда пусто, чисто и в тоже время наполнено всем. Внутри каждого своё небо, и каждый по-своему в нем летает.`
        },
        eng: {
            name: 'DISLIKE',
            descr: `Our true nature, like the expanse of Heaven, can be filled with content that we would rather not have. But the space itself is always empty, pure, and at the same time filled with everything. Each has its own sky inside, and each one flies in it in its own way.`
        },
        ge: {
            name: 'ABNEIGUNG',
            descr: `Unsere wahre Natur kann, wie die Weite des Himmels, mit Inhalten gefüllt sein, die wir lieber nicht haben möchten. Aber der Raum selbst ist immer leer, rein und gleichzeitig mit allem gefüllt. Jeder hat seinen eigenen Himmel im Inneren und jeder fliegt auf seine eigene Weise darin.`
        }
    },
    {
        ua: {
            name: 'НЕРІШУЧІСТЬ',
            descr: `Спробуй подивитися на небо як на картину, кожна його частина має значення. У кожній живуть свої духи. Невизначеність хмар, їх рух і колір завжди ідеальні, у всіх куточках Землі. А це означає, що кожне прийняте рішення буде вірним.`
        },
        rus: {
            name: 'НЕРЕШИТЕЛЬНОСТЬ',
            descr: `Попробуй посмотреть на небо как на картину, каждая часть его имеет значение. В каждой – живут свои духи. Неопределенность облаков, их движение и цвет – всегда идеальны, во всех уголках Земли. А это значит, что каждое принятое решение – будет верным.`
        },
        eng: {
            name: 'INDECISION',
            descr: `Try looking at the sky like a painting, every part of it matters. Each one has its own spirit. The uncertainty of the clouds, their movement, and color are always perfect, in all corners of the Earth. This means that every decision made will be the right one.`
        },
        ge: {
            name: 'UNENTSCHLOSSENHEIT',
            descr: `Versuchen Sie, den Himmel wie ein Gemälde zu betrachten, jeder Teil davon ist wichtig. Jeder hat seinen eigenen Geist. Die Unsicherheit der Wolken, ihre Bewegung und Farbe sind immer perfekt, in allen Ecken der Erde. Das bedeutet, dass jede getroffene Entscheidung die richtige sein wird.`
        }
    },
    {
        ua: {
            name: 'НЕТЕРПІННЯ',
            descr: `Насправді бажання можна загадувати щодня. Адже щодня на небі падає зірка, але повільно. Ми називаємо це заходом сонця. А з кожним новим днем – на світанку, знову приходить терпіння. І одного разу піднявши очі вгору – можна знайти втіху та спокій.`
        },
        rus: {
            name: 'НЕТЕРПЕНИЕ',
            descr: `На самом деле желания можно загадывать каждый день. Ведь каждый день на небе падает звезда, но медленно. Мы называем это закатом. А с каждым новым днем – рассветом, вновь приходит терпение. И однажды подняв глаза вверх – можно найти утешение и покой.`
        },
        eng: {
            name: 'IMPATIENCE',
            descr: `In fact, wishes can be made every day. After all, every day a star falls in the sky, but slowly. We call it sunset. And with each new day – sunrise again comes patience. And once you raise your eyes up, you can find solace and peace.`
        },
        ge: {
            name: 'UNGEDULD',
            descr: `Tatsächlich können jeden Tag Wünsche geäußert werden. Schließlich fällt jeden Tag ein Stern vom Himmel, aber langsam. Wir nennen es Sonnenuntergang. Und mit jedem neuen Tag – der Morgendämmerung – kommt wieder Geduld. Und sobald Sie den Blick heben, können Sie Trost und Frieden finden.`
        }
    },
    {
        ua: {
            name: 'НЕВПЕВНЕНІСТЬ',
            descr: `Нехай вас по життю спрямовує думка «Я розправляю впевнені крила в простір, що відкривається, і злітаю в нескінченність, залишаючи позаду себе те, що інші відмовлялися побачити. Тут немає ні верху, ні низу, ні краю, ні центру. Суцільне небо».`
        },
        rus: {
            name: 'НЕУВЕРЕННОСТЬ',
            descr: `Пусть вас по жизни направляет мысль «Я расправляю уверенные крылья в открывающееся пространство и взмываю в бесконечность, оставляя позади себя то, что другие отказывались увидеть. Здесь нет ни верха, ни низа, ни края, ни центра. Сплошное небо».`
        },
        eng: {
            name: 'UNCERTAINTY',
            descr: `Let the thought guide you through life: «I spread confident wings into the opening space and soar into infinity, leaving behind me what others refused to see. There is no top, no bottom, no edge, no center. Solid sky».`
        },
        ge: {
            name: 'UNSICHERHEIT',
            descr: `Lassen Sie sich von dem Gedanken durch das Leben leiten: «Ich breite selbstbewusste Flügel in den offenen Raum aus und schwebe in die Unendlichkeit und lasse hinter mir, was andere nicht sehen wollten. Es gibt kein Oben, kein Unten, keine Kante, keine Mitte. Fester Himmel».`
        }
    },
    {
        ua: {
            name: 'МСТИВІСТЬ',
            descr: `Час, простір, відчуття, пам'ять, думки, ідеї – все виникає у тобі. Ти як безкрає небо... Жага помсти – бажання і прагнення завдати шкоди передусім самому собі. Для когось тільки Небо – межа. А когось навіть небо не зупинить.`
        },
        rus: {
            name: 'МСТИТЕЛЬНОСТЬ',
            descr: `Время, пространство, ощущения, память, мысли, идеи – все возникает в тебе. Ты как бескрайнее небо... Жажда мести – желание и стремление принести вред прежде всего самому себе. Для кого-то только Небо – предел. А кого-то даже Небо не остановит.`
        },
        eng: {
            name: 'REVENGE',
            descr: `Time, space, sensations, memory, thoughts, ideas – everything arises in you. You are like an endless sky... The thirst for revenge is the desire and desire to bring harm, first of all, to oneself. For some, only the sky is the limit. And even the sky won't stop someone.`
        },
        ge: {
            name: 'RACHE',
            descr: `Zeit, Raum, Empfindungen, Erinnerungen, Gedanken, Ideen – Alles entsteht in dir. Du bist wie ein endloser Himmel... Der Durst nach Rache ist der Wunsch und Wunsch, vor allem sich selbst Schaden zuzufügen. Für manche ist nur der Himmel die Grenze. Und selbst der Himmel kann niemanden aufhalten.`
        }
    },
    {
        ua: {
            name: 'ОБРАЗА',
            descr: `Світ навколо настільки дружелюбний чи ворожий, наскільки ми дозволяємо і приймаємо його таким бути. Образа – це ніщо інше як хмара пилу, ілюзорно, нещиро і з часом розсіюється у просторі Неба. Адже Небо і ти – два серця – один розум.`
        },
        rus: {
            name: 'ОБИДА',
            descr: `Мир вокруг настолько дружелюбен или враждебен, насколько мы позволяем и принимаем его таковым быть. Обида – это ничто иное как облако пыли, иллюзорно, неискренне и со временем рассеивается в пространстве Неба. Ведь Небо и ты – два сердца – один разум.`
        },
        eng: {
            name: 'UMBRAGE',
            descr: `The world around us is as friendly or hostile as we allow and accept it to be. Resentment is nothing but a cloud of dust, illusory, insincere, and eventually dissipates in the space of Heaven. After all, Heaven and you are two hearts – one mind.`
        },
        ge: {
            name: 'HARM',
            descr: `Die Welt um uns herum ist so freundlich oder feindselig, wie wir es zulassen und akzeptieren. Groll ist nichts weiter als eine Staubwolke, illusorisch, unaufrichtig und löst sich schließlich im Raum des Himmels auf. Schließlich sind der Himmel und du zwei Herzen – ein Geist.`
        }
    },
    {
        ua: {
            name: 'ПОЛЕГШЕННЯ',
            descr: `Там, де хмари породжують небо, де активна межа нескінченних прикрас. Кордон, після якого нічого не треба, терпляче спочатку чекає на нас. І одного разу ти відчуєш себе небом, яке вміщує у собі весь світ, і навіть саме небо всередині тебе.`
        },
        rus: {
            name: 'ОБЛЕГЧЕНИЕ',
            descr: `Там, где облака порождают небо, где активный предел бесконечных прикрас. Граница, после которой ничего не надо, терпеливо изначально ожидает нас. И однажды ты ощутишь себя небом, которое вмещает в себя весь мир, и даже само небо внутри тебя.`
        },
        eng: {
            name: 'RELIEF',
            descr: `Where the clouds give birth to the sky, where the active limit of endless embellishments. The border, after which nothing is needed, patiently initially awaits us. And one day you will feel like a sky that contains the whole world, and even the sky itself is inside you.`
        },
        ge: {
            name: 'ERLEICHTERUNG',
            descr: `Wo die Wolken den Himmel entstehen lassen, wo die aktive Grenze endloser Verzierungen liegt. Die Grenze, nach der nichts mehr nötig ist, erwartet uns zunächst geduldig. Und eines Tages wirst du dich wie ein Himmel fühlen, der die ganze Welt enthält, und sogar der Himmel selbst ist in dir.`
        }
    },
    {
        ua: {
            name: 'САМОТНІСТЬ',
            descr: `Де б ти не був, що б не робив – нас завжди з'єднує Небо. Те саме Небо – щось унікальне, ідеальне, істинне. Те, що поєднує сприйняття світу кожного з нас. Просто підніми очі вгору. Відчувай.`
        },
        rus: {
            name: 'ОДИНОЧЕСТВО',
            descr: `Где бы ты ни был, что бы ни делал – нас всегда соединяет Небо. То самое Небо – нечто уникальное, идеальное, истинное. То, что объединяет восприятия мира каждого из нас. Просто подними глаза вверх. Чувствуй.`
        },
        eng: {
            name: 'LONELINESS',
            descr: `Wherever you are, whatever you do, Heaven always connects us. That same Heaven is something unique, ideal, and true. Something that unites the perception of the world of each of us. Just lift your eyes up. Feel.`
        },
        ge: {
            name: 'EINSAMKEIT',
            descr: `Wo immer du bist, was auch immer du tust, der Himmel verbindet uns immer. Derselbe Himmel ist etwas Einzigartiges, Ideales, Wahres. Etwas, das die Wahrnehmung der Welt eines jeden von uns vereint. Hebe einfach deine Augen hoch und fühle.`
        }
    },
    {
        ua: {
            name: 'СПАНТЕЛИЧЕНІСТЬ',
            descr: `Як зачарований дивитися в обрій. Ніколи не бачити моря... А там на Небі тільки й говорять про нього, які там світанки, який захід сонця. Той самий захід сонця, який забирає з собою всі перешкоди та проблеми, а з кожним новим сходом сонця приходить рішення.`
        },
        rus: {
            name: 'ОЗАДАЧЕННОСТЬ',
            descr: `Как заколдованный смотреть в горизонт. Никогда не видеть моря... А там на Небе только и говорят о нём, какие там рассветы, какой закат. Тот самый закат, который уносит с собой все задачи и проблемы, а с каждым новым восходом солнца приходит решение.`
        },
        eng: {
            name: 'PERPLEXITY',
            descr: `How enchanted to look at the horizon. Never see the sea... And there in the Sky they only talk about it, what sunrises there, what sunsets. The same sunset takes away all the tasks and problems, and with each new sunrise comes a solution.`
        },
        ge: {
            name: 'BETROFFENHEIT',
            descr: `Wie verzaubert der Blick auf den Horizont. Niemals das Meer sehen... Und dort im Himmel reden sie nur darüber, welche Sonnenaufgänge es dort gibt, welche Sonnenuntergänge. Derselbe Sonnenuntergang, der alle Aufgaben und Probleme wegnimmt und mit jedem neuen Sonnenaufgang eine Lösung bringt.`
        }
    },
    {
        ua: {
            name: 'ПОБОЮВАННЯ',
            descr: `У хмарах можна витати, доки небо не скінчиться. Будь-яке передчуття небезпеки або якісь негативні події часто затьмарює легкість польоту в потоці життя.`
        },
        rus: {
            name: 'ОПАСЕНИЕ',
            descr: `В облаках можно витать, пока небо не кончится. Любое предчувствие опасности или каких-либо негативных событий часто затмевает легкость полета в потоке Жизни.`
        },
        eng: {
            name: 'APPREHENSION',
            descr: `You can soar in the clouds until the sky ends. Any premonition of danger or any negative events often overshadows the ease of flying in the stream of Life.`
        },
        ge: {
            name: 'FURCHT',
            descr: `Sie können in den Wolken schweben, bis der Himmel endet. Jede Vorahnung einer Gefahr oder eines negativen Ereignisses überschattet oft die Leichtigkeit des Fliegens im Strom des Lebens.`
        }
    },
    {
        ua: {
            name: 'СПУСТОШЕНІСТЬ',
            descr: `Схильність періодично перебувати у стані, вираженому у відчутті бідності почуттів та бажань, втрати моральних сил та багатства духовного змісту. Нездатність до активного, творчого життя. Глибина світу вимірюється лише глибиною своєї душі. А Небо не знає меж. Будь подібний до Неба.`
        },
        rus: {
            name: 'ОПУСТОШЕННОСТЬ',
            descr: `Склонность периодически находиться в состоянии, выраженном в ощущении бедности чувств и желаний, утраты нравственных сил и богатства духовного содержания. Неспособность к активной, творческой жизни. Глубина мира измеряется только глубиной своей души. А Небо не знает меры. Будь подобен Небу.`
        },
        eng: {
            name: 'EXINANITION',
            descr: `The tendency to periodically be in a state expressed in a feeling of poverty of feelings and desires, loss of moral strength and richness of spiritual content. Inability to lead an active, creative life. The depth of the world is measured only by the depth of one's soul. And the sky knows no measure. Be like Heaven.`
        },
        ge: {
            name: 'LEERE',
            descr: `Die Tendenz, sich periodisch in einem Zustand zu befinden, der sich in einem Gefühl der Armut an Gefühlen und Wünschen, dem Verlust der moralischen Stärke und dem Reichtum an spirituellen Inhalten äußert. Unfähigkeit, ein aktives, kreatives Leben zu führen. Die Tiefe der Welt wird nur an der Tiefe der eigenen Seele gemessen. Und der Himmel kennt keine Grenzen. Sei wie der Himmel.`
        }
    },
    {
        ua: {
            name: 'ОГИДА',
            descr: `Глибока ворожість світу може створити всередині людини ілюзію смаку Неба таким, що захочеться негайно виплюнути, викинути, вирвати зі свого життя все те, що так підсвідомо, насправді дорого. Завжди різне, завжди – Небо.`
        },
        rus: {
            name: 'ОТВРАЩЕНИЕ',
            descr: `Глубокая неприязнь мира может создать внутри человека иллюзию вкуса Неба таковым, что захочется немедленно выплюнуть, выкинуть, вырвать из своей жизни всё то, что так подсознательно, на самом деле, дорого. Всегда разное, всегда – Небо.`
        },
        eng: {
            name: 'DISGUST',
            descr: `A deep dislike of the world can create within a person the illusion of the taste of Heaven such that one wants to immediately spit out, throw out, or tear out of one's life everything that is so subconsciously, in fact, expensive. Always different, always – Heaven.`
        },
        ge: {
            name: 'ABSTOßUNG',
            descr: `Eine tiefe Abneigung gegen die Welt kann in einem Menschen die Illusion des Geschmacks des Himmels hervorrufen, so dass man alles, was unbewusst und tatsächlich teuer ist, sofort ausspucken, wegwerfen, aus seinem Leben reißen möchte. Immer anders, immer – der Himmel.`
        }
    },
    {
        ua: {
            name: 'ВІДЧУЖЕНІСТЬ',
            descr: `Будучи в стані напруженої, хворобливої відчуженості, світ навколо може здатися, зовсім безмовним. Небо позбавляється всякого кольору і хмари більше не наповнюють легкістю політ. Ви – небо. Все інше – це лише погода.`
        },
        rus: {
            name: 'ОТРЕШЕННОСТЬ',
            descr: `Будучи в состоянии напряженной, болезненной отрешённости, мир вокруг может показаться, совершенно безмолвным. Небо лишается всякого цвета и облака более не наполняют воздушностью полёт. Вы — небо. Всё остальное – это всего лишь погода.`
        },
        eng: {
            name: 'DETACHMENT',
            descr: `Being in a state of tense, painful detachment, the world around you can seem completely silent. The sky loses all color and the clouds no longer fill the flight with airiness. You are the sky. Everything else is just the weather.`
        },
        ge: {
            name: 'ABLÖSUNG',
            descr: `Wenn Sie sich in einem Zustand angespannter, schmerzhafter Distanziertheit befinden, kann die Welt um Sie herum völlig still erscheinen. Der Himmel verliert jegliche Farbe und die Wolken erfüllen den Flug nicht mehr mit Luftigkeit. Du bist der Himmel. Alles andere ist nur das Wetter.`
        }
    },
    {
        ua: {
            name: 'РОЗПАЧ',
            descr: `Втома від життя. Емоційні рани, яким не дають залікуватися часто призводять до неможливості дихати на повні груди. Часом полярні сяйва – чудове нагадування, що ми в досконалому космічному кораблі, а Небо – наше лобове скло. Варто вільно та легко вдихати Небесні ідеї.`
        },
        rus: {
            name: 'ОТЧАЯНИЕ',
            descr: `Усталость от жизни. Эмоциональные раны, которым не дают залечиться часто приводят к невозможности дышать полной грудью. Порой полярные сияния – прекрасное напоминание, что мы в совершенном космическом корабле, а Небо – наше лобовое стекло. Стоит свободно и легко вдыхать Небесные идеи.`
        },
        eng: {
            name: 'DESPAIR',
            descr: `Tired of life. Emotional wounds that are not allowed to heal often result in the inability to breathe deeply. Sometimes the auroras are a wonderful reminder that we are in a perfect spaceship and the sky is our windshield. One should freely and easily inhale Heavenly ideas.`
        },
        ge: {
            name: 'VERZWEIFELN',
            descr: `Lebensmüde. Emotionale Wunden, die nicht heilen dürfen, führen oft dazu, dass man nicht mehr tief durchatmen kann. Manchmal sind die Polarlichter eine wunderbare Erinnerung daran, dass wir uns in einem perfekten Raumschiff befinden und der Himmel unsere Windschutzscheibe ist. Man sollte himmlische Ideen frei und leicht einatmen.`
        }
    },
    {
        ua: {
            name: 'ЗНЕХТУВАНІСТЬ',
            descr: `Відчуття, що виникає внаслідок переживання своєї непотрібності. Але чи це так, якщо внутрішня віра наповнює світлом хмар. Адже ніде немає такого Неба, як на Землі. Ніде немає такого неба, як усередині кожного з нас. Унікальне. Ідеальне. Справжнє.`
        },
        rus: {
            name: 'ОТВЕРЖЕННОСТЬ',
            descr: `Ощущение, которое возникает в следствие переживания своей ненужности. Но так ли это, если внутренняя вера наполняет светом облаков. Ведь нигде нет такого Неба как на Земле. Нигде нет Неба, что внутри каждого из нас. Уникальное. Идеальное. Истинное.`
        },
        eng: {
            name: 'REJECTION',
            descr: `The feeling that arises as a result of experiencing one's uselessness. But is it so, if inner faith fills the clouds with light. After all, nowhere is there such a Heaven as on Earth. Nowhere is there such a Heaven as inside each of us. Unique. Ideal. True.`
        },
        ge: {
            name: 'ABLEHNUNG',
            descr: `Das Gefühl, das entsteht, wenn man seine Nutzlosigkeit erlebt. Aber ist es so, wenn der innere Glaube die Wolken mit Licht erfüllt? Denn nirgendwo gibt es einen solchen Himmel wie auf der Erde. Nirgendwo gibt es einen solchen Himmel wie in jedem von uns. Einzigartig. Ideal. WAHR.`
        }
    },
    {
        ua: {
            name: 'ЗАЦІПЕНІННЯ',
            descr: `Стан різкого зниження життєдіяльності за певних умов. Злітайте в хмари, довіртеся потоку життя і відпустіть минуле, майбутнє, страхи і думки, від чого ілюзорна хмара пилу зупиниться в ступорі.`
        },
        rus: {
            name: 'ОЦЕПЕНЕНИЕ',
            descr: `Состояние резкого понижения жизненной активности при определенных условиях. Ввысь в облака взлететь, довериться потоку жизненному и отпустить прошлое, будущее, страхи и мысль, что заставляет остановится в ступоре иллюзорного облака пыли.`
        },
        eng: {
            name: 'NUMBNESS',
            descr: `The state of a sharp decrease in vital activity under certain conditions. Fly up into the clouds, trust the flow of life and let go of the past, future, fears, and thoughts, which makes the illusory dust cloud stop in a stupor.`
        },
        ge: {
            name: 'LÄHMUNG',
            descr: `Der Zustand eines starken Rückgangs der Vitalaktivität unter bestimmten Bedingungen. Fliegen Sie hinauf in die Wolken, vertrauen Sie dem Fluss des Lebens und lassen Sie Vergangenheit, Zukunft, Ängste und Gedanken los, was dazu führt, dass die illusorische Staubwolke in Benommenheit verharrt.`
        }
    },
    {
        ua: {
            name: 'ПАНІКА',
            descr: `Ілюзія хмарного диму створюється на момент напруженої розумової роботи. Це стан сильного страху перед реальною чи передбачуваною загрозою. Паніка – це потужна стресова реакція на часто несподівані і лякаючі ситуації у вигляді грому, блискавки, що володіють силою.`
        },
        rus: {
            name: 'ПАНИКА',
            descr: `Иллюзия облачного дыма возникает в момент бурной работы ума. Это состояние интенсивного страха перед реальной или предполагаемой угрозой. Паника является сильной стрессовой реакцией на часто неожиданные и пугающие ситуации, в виде грома, молнии, на самом деле, несущие за собой силу.`
        },
        eng: {
            name: 'PANIC',
            descr: `The illusion of cloudy smoke is created at the moment of intense mental work. This is a state of intense fear of a real or perceived threat. Panic is a powerful stress reaction to often unexpected and frightening situations in the form of thunder, lightning, with power.`
        },
        ge: {
            name: 'PANIK',
            descr: `Die Illusion von wolkigem Rauch entsteht im Moment heftiger Geistesarbeit. Dies ist ein Zustand intensiver Angst vor einer realen oder wahrgenommenen Bedrohung. Panik ist eine starke Stressreaktion auf oft unerwartete und beängstigende Situationen, in Form von Donner, Blitz die Macht haben.`
        }
    },
    {
        ua: {
            name: 'СУМ',
            descr: `У житті Неба не існує такої форми хмар, які заслуговували б або коштували б смутку. Навіть після громових хмар приходить веселка. Кожен захід сонця в житті містить свою міру печалі. І коли Небо переповнюється хмарою пилу, змушує нас прокинутися від сну і знову почати літати, згадати свою суть і попрощатися з ілюзіями.`
        },
        rus: {
            name: 'ПЕЧАЛЬ',
            descr: `В жизни Неба не существует такой формы облаков, которые заслуживали бы или стоили бы печали. Даже после громовых туч приходит радуга. Каждый закат в жизни содержит свою меру печали. И когда Небо переполняется облаком пыли, заставляет нас пробудиться ото сна и снова начать летать, вспомнить свою суть и проститься с иллюзиями.`
        },
        eng: {
            name: 'DOLOUR',
            descr: `In the life of Heaven, there is no form of cloud that is worthy of mourning. Even after thunderclouds come rainbows. Every sunset in life contains its measure of sadness. And when the sky overflows with a cloud of dust, it makes us wake up from sleep and start flying again, remember our essence, and say goodbye to illusions.`
        },
        ge: {
            name: 'TRAURIGKEIT',
            descr: `Im Leben im Himmel gibt es keine Form von Wolke, die es wert wäre, getrauert zu werden. Auch nach Gewitterwolken kommen Regenbögen. Jeder Sonnenuntergang im Leben birgt sein Maß an Traurigkeit. Und wenn der Himmel von einer Staubwolke überflutet wird, erwachen wir aus dem Schlaf und beginnen wieder zu fliegen, uns an unser Wesen zu erinnern und uns von Illusionen zu verabschieden.`
        }
    },
    {
        ua: {
            name: 'ПРИГНІЧЕНІСТЬ',
            descr: `Це так просто. Причиною депресії є не неможливість побачити захід і схід сонця. Причина криється тільки всередині вас. Потрібно лише пам'ятати одне: в будь-якій ситуації просто розправити крила, довіритися життю і летіти.`
        },
        rus: {
            name: 'ПОДАВЛЕННОСТЬ',
            descr: `Это ведь так просто. Причина подавленности ни в невозможности видеть закаты и рассветы. Причина кроется лишь внутри вас. Необходимо лишь помнить об одном: в любой ситуации просто расправить крылья, довериться жизни и лететь.`
        },
        eng: {
            name: 'DISPIRITEDNESS',
            descr: `It's so simple. The cause of depression is not the inability to see sunsets and sunrises. The reason lies only within you. You just need to remember one thing: in any situation, just spread your wings, trust life, and fly.`
        },
        ge: {
            name: 'BEDRÜCKTHEIT',
            descr: `Es ist so einfach. Die Ursache einer Depression ist nicht die Unfähigkeit, Sonnenuntergänge und aufgänge zu sehen. Der Grund liegt nur in dir. Sie müssen sich nur eines merken: Breiten Sie in jeder Situation einfach Ihre Flügel aus, vertrauen Sie dem Leben und fliegen Sie.`
        }
    },
    {
        ua: {
            name: 'ВДЯЧНІСТЬ',
            descr: `Бути вдячним небу за новий день, за можливість ширяти в хмарах, ілюзіях, снах. Вдячним бути за політ, за нові почуття, сумніви, страх. За те, що Небо зрозуміє і спрямує крила нашого помаху. А ви дивилися сьогодні у небо?`
        },
        rus: {
            name: 'ПРИЗНАТЕЛЬНОСТЬ',
            descr: `Быть благодарным небу за новый день, за возможность парить в облаках, иллюзиях, снах. Признательным быть за полет, за новые чувства, сомнения, страх. За то, что Небо поймет и направит крыла нашего взмах. А вы смотрели сегодня в небо?`
        },
        eng: {
            name: 'APPRECIATION',
            descr: `To be grateful to the sky for a new day, for the opportunity to soar in the clouds, illusions, and dreams. To be grateful for the flight, for new feelings, doubts, and fear. For the fact that the sky will understand and direct the flapping of our wings. Have you looked at the sky today?`
        },
        ge: {
            name: 'ANERKENNUNG',
            descr: `Dem Himmel dankbar sein für einen neuen Tag, für die Gelegenheit, in den Wolken, Illusionen und Träumen zu schweben. Dankbar sein für die Flucht, für neue Gefühle, Zweifel, Ängste. Dafür, dass der Himmel unseren Flügelschlag versteht und lenkt. Hast du heute in den Himmel geschaut?`
        }
    },
    {
        ua: {
            name: 'ЗРАДА',
            descr: `У момент, коли вираження власних оригінальних ідей відсутнє. Коли небажання слухати себе, звертаючись усередину, переростає у величезну хмару, порожню від дощової води, тоді настає зрада стосовно себе та Неба, що наповнює нас світлом хмар.`
        },
        rus: {
            name: 'ПРЕДАТЕЛЬСТВО',
            descr: `В момент, когда выражение собственных оригинальных идей отсутствует. Когда нежелание слушать себя, обращаясь внутрь, перерастает в огромное облако, пустое от дождевой воды, тогда наступает предательство по отношению к себе и Небу, наполняющему нас светом облаков.`
        },
        eng: {
            name: 'BETRAYAL',
            descr: `At the moment when the expression of one's own original ideas is absent. When the unwillingness to listen to oneself, turning inward, develops into a huge cloud empty of rainwater, then betrayal occurs in relation to oneself and the Sky, which fills us with the light of the clouds.`
        },
        ge: {
            name: 'VERRAT',
            descr: `In dem Moment, in dem der Ausdruck der eigenen ursprünglichen Ideen fehlt. Wenn sich die Unwilligkeit, auf sich selbst zu hören, sich nach innen wendet, zu einer riesigen Wolke ohne Regenwasser entwickelt, dann kommt es zu Verrat an sich selbst und am Himmel, der uns mit dem Licht der Wolken erfüllt.`
        }
    },
    {
        ua: {
            name: 'ПРОТЕСТ',
            descr: `Небо. Ви тільки подивіться туди. Адже там зовсім інший світ. Ми можемо лише дивитись на нього, але розумом нам не зрозуміти. Бажання та заява про свою незгоду з рухом та направленням хмар, часом буває недоречною. Однак можна опиратися своєму сприйняттю, баченню та усвідомленню того, що відбувається.`
        },
        rus: {
            name: 'ПРОТЕСТ',
            descr: `Небо. Вы только посмотрите туда. Там ведь совершенно другой мир. Мы можем лишь смотреть на него, но умом нам не понять. Желание и заявление о своем несогласии с движением и направлением облаков, порой, бывает неуместна. Однако можно воспротивиться своему восприятию, видению и осознанию происходящего.`
        },
        eng: {
            name: 'PROTEST',
            descr: `Sky. You just look there. It's a completely different world there. We can only look at it, but we cannot understand it with the mind. Desire and declaration of disagreement with the movement and direction of the clouds, sometimes, is inappropriate. However, you can resist your perception, vision, and awareness of what is happening.`
        },
        ge: {
            name: 'PROTEST',
            descr: `Himmel. Schauen Sie einfach da hin. Es ist dort eine ganz andere Welt. Wir können es nur betrachten, aber wir können es nicht mit dem Verstand verstehen. Der Wunsch und die Erklärung, mit der Bewegung und Richtung der Wolken nicht einverstanden zu sein, sind manchmal unangemessen. Sie können jedoch Ihrer Wahrnehmung, Vision und Ihrem Bewusstsein für das Geschehen widerstehen.`
        }
    },
    {
        ua: {
            name: 'НЕЧУЛІСТЬ',
            descr: `Зовні виглядає так само, як і байдужість. Це безучастність, холоднокровне ставлення до польоту життя. Ви коли-небудь бачили, щоб Небо не було залучено до процесу буття?`
        },
        rus: {
            name: 'РАВНОДУШИЕ',
            descr: `Внешне равнодушие выглядит также, как и безразличие. Это безучастность, хладнокровное отношение к полёту жизни. Вы когда-нибудь видели, чтобы Небо не было вовлечено в процесс бытия?`
        },
        eng: {
            name: 'INDIFFERENCE',
            descr: `Outwardly, indifference looks the same as impartiality. This is disinterest, a cold-blooded attitude to the flight of life. Have you ever seen that the sky was not involved in the process of being?`
        },
        ge: {
            name: 'GLEICHGÜLTIGKEIT',
            descr: `Äußerlich sieht Gleichgültigkeit genauso aus wie Gleichgültigkeit. Das ist Gleichgültigkeit, eine kaltblütige Haltung gegenüber der Flucht des Lebens. Haben Sie jemals gesehen, dass der Himmel nicht am Prozess des Seins beteiligt war?`
        }
    },
    {
        ua: {
            name: 'РАДІСТЬ',
            descr: `Можливість радіти новому дню, новим польотам у Небо. Відчувати легкість торкання крила птиці разом парячи над Всесвітом. Бути хмарою світла, тепла. Жити у злагоді з Небом, насолоджуючись променями Сонця, що минають.`
        },
        rus: {
            name: 'РАДОСТЬ',
            descr: `Возможность радоваться новому дню, новым полетам в Небо. Чувствовать легкость касания крыла птицы, вместе паря над Миром. Быть облаком света, тепла. Жить в согласии с Небом, наслаждаясь уходящими лучами Солнца.`
        },
        eng: {
            name: 'GLADNESS',
            descr: `An opportunity to enjoy a new day, new flights to the Sky. To feel the lightness of the touch of the bird's wing, while soaring over the World together. To be a cloud of light, warmth. Live in harmony with Heaven, enjoying the departing rays of the Sun.`
        },
        ge: {
            name: 'FREUDE',
            descr: `Eine Gelegenheit, einen neuen Tag und neue Flüge in den Himmel zu genießen. Die Leichtigkeit der Berührung der Vogelflügel spüren, während wir gemeinsam über die Welt schweben. Eine Wolke aus Licht und Wärme sein. Lebe in Harmonie mit dem Himmel und genieße die scheidenden Sonnenstrahlen.`
        }
    },
    {
        ua: {
            name: 'ПРИВІТНІСТЬ',
            descr: `Сердечно, радісно зустрічати світанок та наповнювати весь день любов'ю. Так варто жити у гостинності з Небом, хмарами, морем. Якщо є Небо в душі, відбиваючись в очах, воно може наповнити радістю все навколо. А якщо глянути нагору на Небо, воно – в очах, вірно означає і всередині нас.`
        },
        rus: {
            name: 'РАДУШИЕ',
            descr: `Сердечно, радостно встречать рассвет и наполнять весь день любовью. Так стоит жить в гостеприимстве с Небом, облаками, морем. Если есть Небо в душе, отражаясь в глазах оно может наполнить радостью всё вокруг. А если взглянуть наверх на Небо, оно в глазах, верно значит и внутри нас.`
        },
        eng: {
            name: 'CORDIALITY',
            descr: `Heartily, joyfully meet the dawn and fill the whole day with love. So it is worth living in hospitality with Heaven, clouds, and the sea. If there is Heaven in the soul, reflected in the eyes, it can fill everything around with joy. And if you look up at the sky, it is in the eyes, it means right inside of us.`
        },
        ge: {
            name: 'HERZLICHKEIT',
            descr: `Begegne der Morgendämmerung herzlich und freudig und erfülle den ganzen Tag mit Liebe. Es lohnt sich also, in Gastfreundschaft mit dem Himmel, den Wolken und dem Meer zu leben. Wenn der Himmel in der Seele ist, der sich in den Augen widerspiegelt, kann er alles um ihn herum mit Freude erfüllen. Und wenn Sie in den Himmel schauen, ist es in den Augen, es bedeutet, dass es auch in uns ist.`
        }
    },
    {
        ua: {
            name: 'РОЗДРАТУВАННЯ',
            descr: `Стан неприємний і досить шкідливий. Найчастіше за ним ховається страх. Чи може Небо у своєму прояві бути незадоволеним формою хмар, їхнім рухом та світлом? Чи може злити те, що є істинним, або те, що від розуму придумане – ілюзія пилу?`
        },
        rus: {
            name: 'РАЗДРАЖЕНИЕ',
            descr: `Состояние неприятное и достаточно вредное. Чаще всего за ним скрывается страх. Может ли Небо в своем проявлении быть недовольным формой облаков, их движением и светом? Может ли злить то, что является истинным, или то, что от ума придуманное – иллюзия пыли?`
        },
        eng: {
            name: 'IRRITATION',
            descr: `The condition is unpleasant and rather harmful. Most of the time it is fear. Can the Sky in its manifestation be dissatisfied with the shape of the clouds, their movement, and light? Can something that is true, or something that is invented from the mind – an illusion of dust, be angry?`
        },
        ge: {
            name: 'REIZUNG',
            descr: `Der Zustand ist unangenehm und ziemlich schädlich. Meistens ist es Angst. Kann der Himmel in seiner Erscheinung mit der Form der Wolken, ihrer Bewegung und ihrem Licht unzufrieden sein? Kann etwas, das wahr ist oder etwas, das aus dem Kopf erfunden wurde – eine Illusion aus Staub – wütend sein?`
        }
    },
    {
        ua: {
            name: 'РОЗГУБЛЕНІСТЬ',
            descr: `Стан, що викликає гострий психічний розлад, супроводжується болісним нерозумінням руху небесних сфер, невиразними ілюзіями, туманом думок. Те, що часто сприймається як незвичайне, набуває в житті нового, неясного сенсу.`
        },
        rus: {
            name: 'РАСТЕРЯННОСТЬ',
            descr: `Состояние, при котором обусловлено острое психические расстройство, сопровождается мучительным непониманием движения Небесных сфер, облачных иллюзий и тумана мыслей. Что часто воспринимается как необычные, получившие новый неясный смысл в жизни.`
        },
        eng: {
            name: 'DISTRACTION',
            descr: `The condition in which an acute mental disorder is caused is accompanied by a painful misunderstanding of the movement of the Celestial spheres, cloudy illusions, and fog of thoughts. That is often perceived as unusual, having received a new obscure meaning in life.`
        },
        ge: {
            name: 'RATLOSIGKEIT',
            descr: `Der Zustand, in dem eine akute psychische Störung verursacht wird, geht mit einem schmerzhaften Missverständnis der Bewegung der himmlischen Sphären, trüben Illusionen und einem Gedankennebel einher. Was oft als ungewöhnlich empfunden wird, erhält einen neuen, obskuren Sinn im Leben.`
        }
    },
    {
        ua: {
            name: 'РЕВНОЩІ',
            descr: `Найважливіші зустрічі влаштовуються душами ще до зустрічі тіл.» І відбуваються ці зустрічі на небі. Чи варто піддаватися негативному почуттю, яке виникає через брак уваги, любові, поваги чи співчуття з боку того, кого ти цінуєш і, головне, любиш?`
        },
        rus: {
            name: 'РЕВНОСТЬ',
            descr: `Самые важные встречи устраивают души еще прежде, чем встретятся телесные оболочки. И эти встречи происходят на небесах. Стоит ли тешить себя негативным чувством, что возникает при ощущаемом недостатке внимания, любви, уважения или симпатии со стороны очень ценимого, прежде всего любимого вами, человека?`
        },
        eng: {
            name: 'JEALOUSY',
            descr: `The most important meetings are arranged by the souls even before the bodily shells meet. And these meetings take place in heaven. Is it worth it to indulge yourself with a negative feeling that arises when you feel a lack of attention, love, respect, or sympathy on the part of a person who is very valued, above all loved by you?`
        },
        ge: {
            name: 'EIFERSUCHT',
            descr: `Die wichtigsten Treffen werden von den Seelen arrangiert, noch bevor sich die Körperhüllen treffen. Und diese Treffen finden im Himmel statt. Lohnt es sich, sich einem negativen Gefühl hinzugeben, das entsteht, wenn man einen Mangel an Aufmerksamkeit, Liebe, Respekt oder Mitgefühl seitens einer Person verspürt, die man sehr schätzt und vor allem liebt?`
        }
    },
    {
        ua: {
            name: 'БОЯЗКІСТЬ',
            descr: `Нехай небо надихає тебе на нові польоти та подорожі світом сновидінь. Думка «Я в безпеці, мене веде світанок» набуде великої сили всередині того, хто усвідомлює себе таким. Будь подібний до Неба, різним, сміливим і наповненим світлом хмар.`
        },
        rus: {
            name: 'РОБОСТЬ',
            descr: `Пусть Небо вдохновляет тебя на новые полёты и путешествия по миру сновидений. Мысль «Я в безопасности, мною движет рассвет» обретет великую силу внутри осознающего себя таковым. Будь подобен Небу, разным, смелым и наполненным светом облаков.`
        },
        eng: {
            name: 'TIMIDITY',
            descr: `May the Sky inspire you for new flights and travels through the world of dreams. The thought «I am safe, I am driven by the dawn» will have great power within the self-aware person. Be like the Sky, different, bold, and filled with the light of the clouds.`
        },
        ge: {
            name: 'ZAGHAFTIGKEIT',
            descr: `Möge der Himmel Sie zu neuen Flügen und Reisen durch die Welt der Träume inspirieren. Der Gedanke «Ich bin in Sicherheit, die Morgendämmerung führt mich» wird in der selbstbewussten Person große Kraft haben. Sei wie der Himmel, anders, kühn und erfüllt vom Licht der Wolken.`
        }
    },
    {
        ua: {
            name: 'СИМПАТІЯ',
            descr: `Хто може перешкодити людині, якщо нею рухає саме Небо? Хто може завадити їй, якщо до її серця торкнувся Бог? Варто зауважити, що коли лежиш на вершині гори, небо ближче. Залишається лише розправити крила назустріч вітру.`
        },
        rus: {
            name: 'СИМПАТИЯ',
            descr: `Кто может воспрепятствовать человеку, если им движет само Небо? Кто может помешать ему, если к его сердцу прикоснулся Бог? Стоит заметить, что когда лежишь на вершине горы, Небо ближе. Остается лишь расправить крылья навстречу ветру.`
        },
        eng: {
            name: 'SYMPATHY',
            descr: `Who can prevent a person if they are moved by Heaven itself? Who can stop him if God has touched his heart? It is worth noting that when you lie on top of a mountain, the sky is closer. It remains only to spread the wings against the wind.`
        },
        ge: {
            name: 'SYMPATHIE',
            descr: `Wer kann einen Menschen verhindern, wenn er vom Himmel selbst bewegt wird? Wer kann ihn aufhalten, wenn Gott sein Herz berührt hat? Es ist erwähnenswert, dass der Himmel näher ist, wenn man auf einem Berg liegt. Es bleibt nur noch, die Flügel gegen den Wind auszubreiten.`
        }
    },
    {
        ua: {
            name: 'СКОРБОТА',
            descr: `Небо – одне на всіх, його немає сенсу називати якось інакше. Найміцніші і найпалкіші обійми — це прощальні, під час цих обіймів можна відчути всю прихильність до людини, емоції захльостують і здається, що все так безнадійно… Частіше обіймай коханих і близьких.`
        },
        rus: {
            name: 'СКОРБЬ',
            descr: `Небо – одно на всех, его нет смысла называть как-то по-другому. Самые крепкие и страстные объятия — это прощальные, во время этих объятий можно испытать всю привязанность к человеку, эмоции захлестывают и кажется, что всё так безнадежно… Чаще обнимай любимых и близких.`
        },
        eng: {
            name: 'MOURNING',
            descr: `The sky is one for all, it makes no sense to call it something else. The strongest and most passionate hugs are farewell hugs, during these hugs, you can experience all the affection for a person, emotions overwhelm and it seems that everything is so hopeless ... Hug your loved ones more often.`
        },
        ge: {
            name: 'TRÜBSAL',
            descr: `Der Himmel ist einer für alle, es macht keinen Sinn, ihn anders zu nennen. Die stärksten und leidenschaftlichsten Umarmungen sind Abschiedsumarmungen. Bei diesen Umarmungen spürt man die ganze Zuneigung zu einem Menschen, die Emotionen überwältigen und es scheint, als sei alles so hoffnungslos... Umarmen Sie Ihre Lieben öfter.`
        }
    },
    {
        ua: {
            name: 'НУДЬГА',
            descr: `Літайте вільно і радісно над вічністю по той бік народжень, і ми зможемо зустрітися з вами і зараз, і завжди, коли забажаємо, посеред одного великого свята, якому ніколи не приходить кінець.`
        },
        rus: {
            name: 'СКУКА',
            descr: `Летайте свободно и радостно над вечностью по ту сторону рождений, и мы сможем встретиться с вами и сейчас, и всегда, когда пожелаем, посреди одного большого праздника, которому никогда не приходит конец.`
        },
        eng: {
            name: 'BOREDOM',
            descr: `Fly freely and joyfully over eternity beyond birth, and we can meet with you now and whenever we wish, in the midst of one great holiday that never comes to an end.`
        },
        ge: {
            name: 'LANGEWEILE',
            descr: `Fliegen Sie frei und freudig durch die Ewigkeit nach der Geburt, und wir können Sie jetzt und wann immer wir wollen, inmitten eines großartigen Urlaubs, der niemals zu Ende geht, treffen.`
        }
    },
    {
        ua: {
            name: 'СМИРЕННІСТЬ',
            descr: `Розправи крила і прямуй у Неба, про яке ми так мріяли у своїх снах. Адже Небеса – це не місце та не час. Небеса – це досягнення досконалості. Смиренність – стан, коли покірність виникає від свідомості, що досконалість, якого людина прагне, залишається нескінченно далеким.`
        },
        rus: {
            name: 'СМИРЕНИЕ',
            descr: `Расправь крылья и устремись у Небу, о котором мы так мечтали в своих снах. Ведь Небеса — это не место и не время. Небеса — это достижение совершенства. Смирение – состояние, когда покорность возникает от сознания, что совершенство, к которому человек стремится, остается бесконечно далеким.`
        },
        eng: {
            name: 'HUMILITY',
            descr: `Spread your wings and rush to the Sky that we so dreamed about in our dreams. Heaven is not a place or a time. Heaven is the attainment of perfection. Humility is the state when humility arises from the realization that the perfection to which one aspires remains infinitely far away.`
        },
        ge: {
            name: 'DEMUT',
            descr: `Spreize deine Flügel und stürze dich in den Himmel, von dem wir in unseren Träumen so geträumt haben. Der Himmel ist kein Ort und keine Zeit. Der Himmel ist das Erreichen der Vollkommenheit. Ergebung ist der Zustand, in dem Demut aus der Erkenntnis entsteht, dass die Vollkommenheit, nach der man strebt, unendlich weit entfernt ist.`
        }
    },
    {
        ua: {
            name: 'ЗБЕНТЕЖЕННЯ',
            descr: `Втратити внутрішнє самовладання і рівновагу можна лише у разі, коли повністю поринаєш у глибину своїх думок. Потік морських хмар накриває і зараз варто дозволити цьому бути. Спостерігати. Приймати. Летіти, розправивши крила вгору.`
        },
        rus: {
            name: 'СМУЩЕНИЕ',
            descr: `Потерять внутреннее самообладание и равновесие можно лишь в случае, когда полностью погружаешься в глубину своих мыслей. Поток морских облаков накрывает и в этот момент стоит позволить сему быть. Наблюдать. Принимать. Лететь, расправив крылья ввысь.`
        },
        eng: {
            name: 'EMBARRASSMENT',
            descr: `You can lose inner self-control and balance only when you are completely immersed in the depths of your thoughts. The flow of sea clouds covers and at this moment it is worth letting it be. Observe. Accept. Fly, spread your wings skyward.`
        },
        ge: {
            name: 'ERLEGENHEIT',
            descr: `Sie können die innere Selbstbeherrschung und das Gleichgewicht nur verlieren, wenn Sie vollständig in die Tiefen Ihrer Gedanken versunken sind. Der Strom der Meereswolken bedeckt und in diesem Moment lohnt es sich, ihn in Ruhe zu lassen. Beobachten. Akzeptieren. Fliegen Sie mit den Flügeln in die Luft.`
        }
    },
    {
        ua: {
            name: `СУМ'ЯТТЯ`,
            descr: `Стан сильного хвилювання, занепокоєння і розгубленості, в момент, коли неможливо побачити промені Сонця, захід сонця і хмари, що пливуть назустріч. Ілюзорне бажання часто перебувати у стані безпорадного збудження, сильного шоку чи панічної розгубленості.`
        },
        rus: {
            name: 'СМЯТЕНИЕ',
            descr: `Состояние сильной взволнованности, беспокойства, замешательства, в момент, когда невозможно увидеть лучи Солнца, закат дня и облака, плывущие навстречу. Иллюзорное желание часто находиться в состоянии беспомощной взволнованности, сильного потрясения или панической растерянности.`
        },
        eng: {
            name: 'TURMOIL',
            descr: `A state of strong agitation, anxiety, and confusion, at a moment when it is impossible to see the rays of the Sun, the sunset of the day, and the clouds floating towards. Illusory desire often to be in a state of helpless agitation, severe shock, or panic confusion.`
        },
        ge: {
            name: 'WIRRNIS',
            descr: `Ein Zustand großer Aufregung, Angst und Verwirrung, in einem Moment, in dem es unmöglich ist, die Sonnenstrahlen, den Sonnenuntergang des Tages und die heranziehenden Wolken zu sehen. Illusionäres Verlangen oft in einem Zustand hilfloser Erregung, schwerem Schock oder panischer Verwirrung zu sein.`
        }
    },
    {
        ua: {
            name: 'СУМНІВ',
            descr: `Ще жоден песиміст не проник у таємниці зірок, не відкрив невідому землю і не відкрив перед людським духом нові небеса. Адже немає кращої ікони, ніж Небо! Сумнів, ніщо інше як ілюзія, що виникає в думці того, хто збився зі шляху, забувши про зірки.`
        },
        rus: {
            name: 'СОМНЕНИЕ',
            descr: `Еще ни один пессимист не проник в тайны звёзд, не открыл неизвестную землю и не распахнул перед человеческим духом новые небеса. Ведь нет лучшей иконы, чем Небо! Сомнение, ничто иное как иллюзия, возникающая в уме того, кто сбился с пути, забыв про звёзды.`
        },
        eng: {
            name: 'DOUBT',
            descr: `Not a single pessimist has yet penetrated the secrets of the stars, discovered an unknown land, and opened new skies before the human spirit. After all, there is no better icon than Heaven! Doubt is nothing but an illusion that arises in the mind of one who has gone astray, forgetting about the stars.`
        },
        ge: {
            name: 'ZWEIFELN',
            descr: `Kein einziger Pessimist ist bisher in die Geheimnisse der Sterne eingedrungen, hat ein unbekanntes Land entdeckt und dem menschlichen Geist neue Himmel eröffnet. Schließlich gibt es kein besseres Symbol als den Himmel! Zweifel, nichts als eine Illusion, die im Geist eines Menschen entsteht, der in die Irre gegangen ist und die Sterne vergessen hat.`
        }
    },
    {
        ua: {
            name: 'СПІВПЕРЕЖИВАННЯ',
            descr: `Чи можливо знайти відповідні слова втіхи для тих, хто втратив дорогих та близьких людей, хто втратив своє Небо? Просто – будьте поруч… Небо багатогранне і різноманітне, і є те спільне, що є у будь-якому Його прояві – почуття співпереживання.`
        },
        rus: {
            name: 'СОПЕРЕЖИВАНИЕ',
            descr: `Возможно ли найти подходящие слова утешения для тех, кто потерял дорогих и близких людей, кто потерял своё Небо? Просто — будьте рядом… Небо многогранно и разнообразно, и есть то общее, что присутствует в любом Его проявлении — чувство сопереживания.`
        },
        eng: {
            name: 'EMPATHY',
            descr: `Is it possible to find suitable words of consolation for those who have lost dear and close people, who have lost their Heaven? Just be there ... The sky is multifaceted and diverse, and there is something common that is present in any of His manifestations – a feeling of empathy.`
        },
        ge: {
            name: 'EINFÜHLUNGSVERMÖGEN',
            descr: `Ist es möglich, passende tröstende Worte für diejenigen zu finden, die liebe und nahestehende Menschen verloren haben, die ihren Himmel verloren haben? Seien Sie einfach da ... Der Himmel ist vielfältig und vielfältig, und in jeder seiner Manifestationen ist etwas Gemeinsames vorhanden – ein Gefühl der Empathie.`
        }
    },
    {
        ua: {
            name: 'спокій',
            descr: `Коли Небо стає безбарвним. Коли будь-який відтінок – це тиша. Наче блакитне небо — це аркуш паперу, чистий, безневинний та легкий. А за ним може бути суцільна чорнота. І все у зірках. Тільки уяви собі, як це спокійно падати ВВЕРХ.`
        },
        rus: {
            name: 'спокойствие',
            descr: `Когда Небо становиться бесцветным. Когда любой оттенок – это тишина. Как будто голубое небо — это лист бумаги, чистый, невинный и легкий. А за ним может быть сплошная чернота. И всё в звёздах. Только вообрази себе, каково это — спокойно падать ВВЕРХ.`
        },
        eng: {
            name: 'calm',
            descr: `When the sky becomes colorless. When any shade is silence. As if the blue sky is a piece of paper, clean, innocent, and light. And behind it can be solid blackness. And everything is in the stars. Just imagine what it's like to fall UP calmly.`
        },
        ge: {
            name: 'Gelassenheit',
            descr: `Wenn der Himmel farblos wird. Wenn jeder Schatten Stille ist. Als wäre der blaue Himmel ein Blatt Papier, rein, unschuldig und leicht. Und dahinter kann tiefe Schwärze sein. Und alles steht in den Sternen. Stellen Sie sich vor, wie es ist, ruhig nach oben zu fallen.`
        }
    },
    {
        ua: {
            name: 'СПІВПЕРЕЖИВАННЯ',
            descr: `Може бути схильність до співчуття та глибокого розуміння життя, але дуже рідко – можливість на людях висловлювати свої емоції – це, якби Небо самотнім, перестало проливати сльози дощу на суху землю.`
        },
        rus: {
            name: 'СОСТРАДАНИЕ',
            descr: `Может быть склонность к состраданию и глубокому пониманию жизни, но очень редко на людях выражать свои эмоции – это, как если бы Небо одиноким, перестало проливать слёзы дождя на сухую землю.`
        },
        eng: {
            name: 'COMPASSION',
            descr: `There may be a penchant for compassion and a deep understanding of life, but it's very rare to express your emotions in public – it's as if the sky is lonely, it has stopped shedding tears of rain on dry land.`
        },
        ge: {
            name: 'MITGEFÜHL',
            descr: `Man mag eine Vorliebe für Mitgefühl und ein tiefes Verständnis für das Leben haben, aber es kommt sehr selten vor, seine Gefühle in der Öffentlichkeit auszudrücken – es ist, als wäre der Himmel einsam, er hätte aufgehört, Regentränen auf dem Trockenen zu vergießen.`
        }
    },
    {
        ua: {
            name: 'СПІВЧУТТЯ',
            descr: `Хто може перешкодити людині, якщо нею рухає саме Небо? Хто може завадити їй, якщо до її серця торкнувся Бог? Варто зауважити, що коли лежиш на вершині гори – небо ближче. Залишається лише розправити крила назустріч вітру.`
        },
        rus: {
            name: 'СОЧУВСТВИЕ',
            descr: `Внутреннее состояние, в момент, когда возникает возможность почувствовать другого человека. Почувствовать его Небо. Увидеть и ощутить на себе движение облаков и пение птиц, какая бы за окном не была погода. Позволить себе чувствовать и тогда можно узнать, что кроется внутри другого человека.`
        },
        eng: {
            name: 'COMMISERATION',
            descr: `Internal state, at the moment when the opportunity arises to feel another person. Feel his sky. See and feel the movement of clouds and the singing of birds, no matter what the weather is outside the window. Allow yourself to feel and then you can find out what lies inside the other person.`
        },
        ge: {
            name: 'MITLEID',
            descr: `Innerer Zustand, in dem Moment, in dem sich die Gelegenheit ergibt, einen anderen Menschen zu spüren. Spüre seinen Himmel. Sehen und spüren Sie die Bewegung der Wolken und den Gesang der Vögel, egal wie das Wetter vor dem Fenster ist. Erlaube dir zu fühlen und dann kannst du herausfinden, was in der anderen Person steckt.`
        }
    },
    {
        ua: {
            name: 'ПРИСТРАСТЬ',
            descr: `Якщо ви любите дивитися на зоряне небо. Якщо воно приваблює вас своєю гармонією і вражає своєю неосяжністю – отже, у вас у грудях б'ється живе серце. Тож, воно зможе відзвучати на потаємні слова про життя Космосу.`
        },
        rus: {
            name: 'СТРАСТЬ',
            descr: `Если вы любите смотреть на звездное небо. Если оно привлекает вас своей гармонией и поражает своей необъятностью – значит у вас в груди бьётся живое сердце. Значит оно сможет отзвучать на сокровенные слова о жизни Космоса.`
        },
        eng: {
            name: 'PASSION',
            descr: ` If you like to look at the starry sky. If it attracts you with its harmony and strikes you with its immensity, then you have a living heart beating in your chest. This means that it will be able to resonate with the innermost words about the life of the Cosmos.`
        },
        ge: {
            name: 'HINGABE',
            descr: `Wenn Sie gerne in den Sternenhimmel schauen. Wenn es Sie mit seiner Harmonie anzieht und Sie mit seiner Unermesslichkeit beeindruckt, dann schlägt in Ihrer Brust ein lebendiges Herz. Dies bedeutet, dass es in der Lage sein wird, die innersten Worte über das Leben des Kosmos widerzuspiegeln.`
        }
    },
    {
        ua: {
            name: 'СТРАХ',
            descr: `При неусвідомленості чи невизначеності джерела небезпеки виникає стан тривоги. Страх – це темні хмари, які одного разу перетворюються на небесні квіти, коли їх цілує світло.`
        },
        rus: {
            name: 'СТРАХ',
            descr: `При неосознанности или неопределенности источника опасности возникает состояние тревоги. Страх – это тёмные тучи, которые однажды превращаются в небесные цветы, когда их целует свет.`
        },
        eng: {
            name: 'FEAR',
            descr: `With unawareness or uncertainty of the source of danger, a state of anxiety arises. Fear is dark clouds that one day turns into heavenly flowers when light kiss them.`
        },
        ge: {
            name: 'ANGST',
            descr: `Mit der Unkenntnis oder Ungewissheit über die Gefahrenquelle entsteht ein Angstzustand. Angst sind dunkle Wolken, die sich eines Tages in himmlische Blumen verwandeln, wenn das Licht sie küsst.`
        }
    },
    {
        ua: {
            name: 'СОРОМ',
            descr: `Відчайдушно й безрозсудно піднявши руки до неба, ми відправили в політ величезну брилу металу, щоб пильніше вдивитись у шалено далекі космічні простори, зоряні чарівні дали. А якщо пальцями Небо чіпати – залишаються плями. А якщо заборонити собі торкатися Неба – можна втратити себе.`
        },
        rus: {
            name: 'СТЫД',
            descr: `Отчаянно и безрассудно подняв руки к небу, мы отправили в полет огромную глыбу металла, чтобы пристальнее вглядеться в безумно далекие космические пространства, звёздные волшебные дали. А если пальцами Небо трогать – остаются пятна. А если запретить себе касаться Неба – можно потерять себя.`
        },
        eng: {
            name: 'SHAME',
            descr: `Desperately and recklessly raising our hands to the sky, we sent a huge block of metal flying in order to take a closer look at the insanely distant outer space, the magical starry distances. And if you touch the sky with your fingers, spots remain. And if you forbid yourself to touch the Sky, you can lose yourself.`
        },
        ge: {
            name: 'SCHAM',
            descr: `Verzweifelt und rücksichtslos hoben wir unsere Hände zum Himmel und ließen einen riesigen Metallblock fliegen, um den wahnsinnig fernen Weltraum, die magischen Sternenfernen, genauer zu betrachten. Und wenn man den Himmel mit den Fingern berührt, bleiben Flecken zurück. Und wenn Sie sich verbieten, den Himmel zu berühren, können Sie sich selbst verlieren.`
        }
    },
    {
        ua: {
            name: 'ТУГА',
            descr: `У кожного з нас є свій ангел. Коли вам погано і здається, що все втрачено, подивіться на Небо. Воно навчить вас і зцілить. Відкрийте широко очі і впустіть його безмежну мудрість, спокій і легкість.`
        },
        rus: {
            name: 'ТОСКА',
            descr: `У каждого из нас на небе есть свой ангел. Когда вам плохо и кажется, что всё потеряно, посмотрите на Небо. Оно научит вас и исцелит. Откройте широко глаза и впустите в себя его бескрайнюю мудрость, покой и легкость.`
        },
        eng: {
            name: 'YEARNING',
            descr: `Each of us has an angel in heaven. When you feel bad and it seems that everything is lost, look at the sky. It will teach you and heal you. Open your eyes wide and let in his boundless wisdom, peace, and lightness.`
        },
        ge: {
            name: 'SEHNSUCHT',
            descr: `Jeder von uns hat einen Engel im Himmel. Wenn Sie sich schlecht fühlen und es scheint, als wäre alles verloren, schauen Sie in den Himmel. Es wird dich lehren und heilen. Öffnen Sie Ihre Augen weit und lassen Sie seine grenzenlose Weisheit, seinen Frieden und seine Leichtigkeit herein.`
        }
    },
    {
        ua: {
            name: 'ТРИВОГА',
            descr: `На що ми б не дивилися – це входить і заповнює нас. Ми можемо бути заповнені цим небом, цими зірками, адже наша свідомість не має розмірів. Так чи варто занурюватися в почуття тривоги, яке бере гору і тільки світло хмар може розвіяти цю ілюзію.`
        },
        rus: {
            name: 'ТРЕВОГА',
            descr: `На что бы мы не смотрели – это входит и заполняет нас. Мы можем быть заполнены этим небом, этими звездами, ведь наше сознание не имеет размеров. Так стоит ли погружаться в чувство тревоги, которое берет верх и только свет облаков может развеять эту иллюзию.`
        },
        eng: {
            name: 'DISMAY',
            descr: `Whatever we look at, it comes in and fills us. We can be filled with this sky, these stars because our consciousness has no dimensions. So is it worth plunging into a sense of anxiety that takes over and only the light of the clouds can dispel this illusion?`
        },
        ge: {
            name: 'UNRUHE',
            descr: `Was auch immer wir betrachten, es kommt herein und erfüllt uns. Wir können von diesem Himmel, diesen Sternen erfüllt sein, weil unser Bewusstsein keine Dimensionen hat. Lohnt es sich also, in ein Gefühl der Angst einzutauchen, das die Oberhand gewinnt und nur das Licht der Wolken diese Illusion zerstreuen kann?`
        }
    },
    {
        ua: {
            name: 'ПОВАГА',
            descr: `Небо, море, земля – довговічні, тому що вони існують не для себе. Повага глибини іншого – визначає ефективність та комфортність взаємин. Це дуже приємне почуття саме собою, і є захисником почуття Любові. Кохання без поваги довго жити не зможе.`
        },
        rus: {
            name: 'УВАЖЕНИЕ',
            descr: `Небо, море, земля – долговечны, потому что они существуют не для себя. Уважение глубины другого – определяет эффективность и комфортность взаимоотношений. Это очень приятное чувство само по себе, и оно является защитником чувства Любви. Любовь без уважения долго жить не сможет.`
        },
        eng: {
            name: 'RESPECT',
            descr: `The sky, the sea, the earth are durable, because they do not exist for themselves. Respect for the depth of another determines the effectiveness and comfort of relationships. This is a very pleasant feeling in itself, and it is the protector of the feeling of Love. Love without respect cannot live long.`
        },
        ge: {
            name: 'RESPEKTIERUNG',
            descr: `Der Himmel, das Meer, die Erde sind langlebig, weil sie nicht für sich selbst existieren. Der Respekt vor der Tiefe eines anderen bestimmt die Wirksamkeit und den Komfort von Beziehungen. Das ist an sich schon ein sehr angenehmes Gefühl und es ist der Beschützer des Gefühls der Liebe. Liebe ohne Respekt kann nicht lange leben.`
        }
    },
    {
        ua: {
            name: 'ВПЕВНЕНІСТЬ',
            descr: `Зрілість духу означає: торкнутися свого внутрішнього неба. Тільки ви стверджуєтеся у своєму внутрішньому небі, ви знайшли будинок, і велика зрілість виникає у ваших очах та діях. Особливий стан розуму, у якому людина висловлює згоду міркувань без остраху можливості помилки.`
        },
        rus: {
            name: 'УВЕРЕННОСТЬ',
            descr: `Зрелость духа означает: коснуться своего внутреннего неба. Только вы утверждаетесь в своем внутреннем небе, вы нашли дом, и великая зрелость возникает в ваших глазах и действиях. Особое состояние ума, в котором человек выражает согласие суждениям без боязни возможности ошибки.`
        },
        eng: {
            name: 'CONFIDENCE',
            descr: `Maturity of the spirit means: touching your inner sky. Once you are established in your inner sky, you have found a home and great maturity arises in your eyes and actions. A special state of mind in which a person expresses agreement with judgments without fear of the possibility of error.`
        },
        ge: {
            name: 'GEWISSHEIT',
            descr: `Reife des Geistes bedeutet: Berühre deinen inneren Himmel. Sobald Sie in Ihrem inneren Himmel verankert sind, haben Sie ein Zuhause gefunden und große Reife entsteht in Ihren Augen und Handlungen. Ein besonderer Geisteszustand, in dem eine Person ihre Zustimmung zu Urteilen zum Ausdruck bringt, ohne Angst vor möglichen Fehlern zu haben.`
        }
    },
    {
        ua: {
            name: 'ЗДИВУВАННЯ',
            descr: `Ніяка гострота розуму людського не буває такою великою, щоб могла проникнути в Небо. Море і небо – два символи нескінченності. Щодня прокидаючись ранком з думкою «Ух ти!» – це і є внутрішнє захоплення і здивування хмар, що приходить світові, завжди ідеальному і божественному.`
        },
        rus: {
            name: 'УДИВЛЕНИЕ',
            descr: `Никакая острота ума человеческого не бывает так велика, чтобы могла проникнуть в Небо. Море и небо — два символа бесконечности. Каждый день просыпаясь по утру с мыслью «Ух ты!» – это и есть внутренний восторг и удивление приходящему свету облаков, всегда идеальному и божественному.`
        },
        eng: {
            name: 'ASTONISHMENT',
            descr: `No sharpness of the human mind is so great that it could penetrate into Heaven. The sea and the sky are two symbols of infinity. Every day waking up in the morning with the thought «Wow!» – this is the inner delight and wonder at the incoming light of the clouds, always ideal and divine.`
        },
        ge: {
            name: 'ERSTAUNEN',
            descr: `Keine Schärfe des menschlichen Geistes ist so groß, dass sie in den Himmel eindringen könnte. Das Meer und der Himmel sind zwei Symbole der Unendlichkeit. Jeden Morgen wache ich mit dem Gedanken «Wow!» auf. – das ist die innere Freude und das Staunen über das einfallende Licht der Wolken, immer ideal und göttlich.`
        }
    },
    {
        ua: {
            name: 'ЗАДОВОЛЕННЯ',
            descr: `Коли ти вибираєш небо. Небо вибирає тебе. Задоволення є емоційною реакцією на щастя, душевною відповіддю на сповнене бажання чи мету. Той момент, коли досягаєш Неба, коли розчиняєшся у світлі хмар і разом із птахами вирушаєш у нову подорож.`
        },
        rus: {
            name: 'УДОВЛЕТВОРЕНИЕ',
            descr: `Когда ты выбираешь Небо. Небо выбирает тебя. Удовлетворение является эмоциональной реакцией на счастье, душевным ответом на исполненное желание или цель. Тот момент, когда достигаешь Неба, когда растворяешься в свете облаков и вместе с птицами отправляешься в новое путешествие. `
        },
        eng: {
            name: 'SATISFACTION',
            descr: `When you choose Heaven. Heaven chooses you. Satisfaction is an emotional response to happiness, a soulful response to a fulfilled desire or goal. That moment when you reach the Sky, when you dissolve in the light of the clouds and set off on a new journey together with the birds.`
        },
        ge: {
            name: 'ZUFRIEDENHEIT',
            descr: `Wenn du den Himmel wählst. Der Himmel wählt dich. Zufriedenheit ist eine emotionale Reaktion auf Glück, eine gefühlvolle Reaktion auf einen erfüllten Wunsch oder ein erfülltes Ziel. Dieser Moment, wenn Sie den Himmel erreichen, wenn Sie sich im Licht der Wolken auflösen und gemeinsam mit den Vögeln zu einer neuen Reise aufbrechen.`
        }
    },
    {
        ua: {
            name: 'НАСОЛОДА',
            descr: `Одне задоволення – лежати на зеленій траві влітку і вдивлятися в небесні дали. Знаходити хмарних звірят і разом вирушати в політ ясним небозводом. Дозволь собі з літати, дозволь те задоволення від життя, яке наповнює тебе зсередини світлом та любов'ю.`
        },
        rus: {
            name: 'УДОВОЛЬСТВИЕ',
            descr: `Одно удовольствие – лежать на зеленой траве летом и вглядываться в небесныедали. Находить облачных зверят и вместе отправляться в полет по ясному небосводу. Позволь себе с летать, позволь то удовольствие от жизни, которое наполняет тебя изнутри светом и любовью.`
        },
        eng: {
            name: 'PLEASURE',
            descr: `It is a pleasure to lie on the green grass in summer and peer into the heavenly distances. Find cloudy animals and go flying through the clear sky together. Let yourself fly, let the pleasure of life that fills you from the inside with light and love.`
        },
        ge: {
            name: 'WOHLGEFALLEN',
            descr: `Im Sommer ist es ein Vergnügen, im grünen Gras zu liegen und in die himmlischen Weiten zu blicken. Finden Sie wolkige Tiere und fliegen Sie gemeinsam durch den klaren Himmel. Lassen Sie sich fliegen, genießen Sie die Lebensfreude, die Sie von innen mit Licht und Liebe erfüllt.`
        }
    },
    {
        ua: {
            name: 'ЩАСТЯ',
            descr: `Споріднені душі є на небесах. Зустріти таку на Землі – щастя. Прокинутися сьогодні вранці – щастя. Побачити новий день – щастя. Небо – це щастя.`
        },
        rus: {
            name: 'СЧАСТЬЕ',
            descr: `Родственные души есть на небесах. Встретить такую на Земле – счастье. Проснуться сегодня утром – счастье. Увидеть новый день – счастье. Небо – это счастье.`
        },
        eng: {
            name: 'HAPPINESS',
            descr: `There are kindred spirits in heaven. To meet such a person on Earth is happiness. Waking up this morning is happiness. To see a new day is happiness. Heaven is happiness.`
        },
        ge: {
            name: 'GLÜCK',
            descr: `Es gibt Seelenverwandte im Himmel. Einen solchen Menschen auf der Erde zu treffen, ist Glück. Heute Morgen aufzuwachen ist Glück. Einen neuen Tag zu sehen ist Glück. Der Himmel ist Glück.`
        }
    },
    {
        ua: {
            name: 'ЖАХ',
            descr: `Чорне небо було буквально всипане зірками. Зоряне небо над океаном – це неймовірна неможливість, і споглядання неба є погляд у нескінченність.`
        },
        rus: {
            name: 'УЖАС',
            descr: `Черное небо было буквально усыпано звёздами. Звёздное небо над океаном – это обозримая невозможность, и созерцание неба есть взгляд в бесконечность.`
        },
        eng: {
            name: 'HORROR',
            descr: `The black sky was literally strewn with stars. The starry sky over the ocean is a foreseeable impossibility, and the contemplation of the sky is a look into infinity.`
        },
        ge: {
            name: 'GRUSEL',
            descr: `Der schwarze Himmel war buchstäblich mit Sternen übersät. Der Sternenhimmel über dem Meer ist eine vorhersehbare Unmöglichkeit, und die Betrachtung des Himmels ist ein Blick in die Unendlichkeit.`
        }
    },
    {
        ua: {
            name: 'УМИРОТВОРЕННЯ',
            descr: `Небо в очах відбившись душу любов'ю наповнить і всі ми одного разу народившись, обов'язково згадаємо істину.`
        },
        rus: {
            name: 'УМИРОТВОРЕНИЕ',
            descr: `Небо в глазах отразившись душу любовью наполнит и все мы однажды родившись. Обязательно истину вспомним.`
        },
        eng: {
            name: 'APPEASEMENT',
            descr: `Heaven will be filled in the eyes that reflect the soul with love, and one day we will all be born in the truth of self-knowledge. Let's remember the truth`
        },
        ge: {
            name: 'BESCHWICHTIGUNG',
            descr: `Der Himmel in den Augen, die die Seele mit Liebe widerspiegeln, wird erfüllt sein, und eines Tages werden wir alle in der Wahrheit der Selbsterkenntnis geboren. Erinnern wir uns an die Wahrheit.`
        }
    },
    {
        ua: {
            name: 'ПРИНИЖЕННЯ',
            descr: `Ніхто не в силах привласнити собі гуркіт грому. Ніхто не може відібрати небеса в іншої людини. Ніхто не може забрати з собою твоє Небо під час розлучення. Тільки ти маєш право оцінити себе за бажання і відповідно поринути в ілюзію страху бути приниженим – це теж твій вибір.`
        },
        rus: {
            name: 'УНИЖЕНИЕ',
            descr: `Никто не в силах присвоить себе раскат грома. Никто не может отобрать Небеса у другого человека. Никто не может забрать с собой твоё Небо при расставании. Только ты в праве оценить себя при желании и соответственно погрузиться в иллюзию страха быть униженным – это тоже твой выбор.`
        },
        eng: {
            name: 'HUMILIATION',
            descr: `No one can appropriate the clap of thunder. No one can take Heaven from another person. No one can take your Heaven with them when parting. Only you have the right to evaluate yourself if you wish and, accordingly, plunge into the illusion of fear of being humiliated – this is also your choice.`
        },
        ge: {
            name: 'ERNIEDRIGUNG',
            descr: `Niemand kann sich den Donnerschlag aneignen. Niemand kann einer anderen Person den Himmel nehmen. Niemand kann deinen Himmel beim Abschied mitnehmen. Nur Sie haben das Recht, sich selbst zu bewerten, wenn Sie möchten, und sich dementsprechend in die Illusion der Angst vor Demütigung zu stürzen – auch dies ist Ihre Entscheidung.`
        }
    },
    {
        ua: {
            name: 'ЗАСМУЧЕННЯ',
            descr: `Навіть у самий тужливий осінній дощовий день варто пам'ятати, що Небо насправді блакитне — треба лише трошки почекати і знову веселка висвітлить все довкола. Зневіра – це заперечення життя. Небажання приймати Небо таким, яким воно є в моменті «Тут і зараз».`
        },
        rus: {
            name: 'УНЫНИЕ',
            descr: `Даже в самый заунывный осенний дождливый день стоит помнить, что Небо на самом деле голубое — нужно только немножко подождать и снова радуга осветит всё вокруг. Уныние — это отрицание жизни. Нежелание принимать Небо таким, какое оно есть в  моменте «Здесь и сейчас».`
        },
        eng: {
            name: 'DESPONDENCY',
            descr: `Whatever we look at, it comes in and fills us. We can be filled with this sky, these stars because our consciousness has no dimensions. So is it worth plunging into a sense of anxiety that takes over and only the light of the clouds can dispel this illusion?`
        },
        ge: {
            name: 'NIEDERGESCHLAGENHEIT',
            descr: `Selbst am traurigsten Herbstregentag sollte man sich daran erinnern, dass der Himmel tatsächlich blau ist – man muss nur ein wenig warten, und schon wird der Regenbogen alles um ihn herum erhellen. Verzweiflung ist die Verleugnung des Lebens. Unwilligkeit, den Himmel so zu akzeptieren, wie er im Hier und Jetzt ist.`
        }
    },
    {
        ua: {
            name: 'ШОК',
            descr: `– це якийсь стрес, коли руйнується світ в одну мить. Небо перестає існувати, все наше життя перекреслює заціпеніння, розчарування, заперечення. І можна повністю зануритися в забуття. Це вибух грому, що застиг очах ілюзорності буття.`
        },
        rus: {
            name: 'ШОК',
            descr: ` – это некий стресс, когда рушится мир в одно мгновение. Небо перестает существовать, всю нашу жизнь перечеркивает оцепенение, разочарование, отрицание. И можно полностью погрузиться в забвенье. Это взрыв грома, застывший глазах иллюзорности бытия.`
        },
        eng: {
            name: 'SHOCK',
            descr: `– is a kind of stress when the world collapses in an instant. The sky ceases to exist, our whole life is crossed out by numbness, disappointment, and denial. And you can completely immerse yourself in oblivion. It is a burst of thunder, frozen in the eyes of the illusory existence.`
        },
        ge: {
            name: 'SCHOCK',
            descr: `Das ist eine Stress, wenn die Welt augenblicklich zusammenbricht. Der Himmel hört auf zu existieren, unser ganzes Leben ist von Taubheit, Enttäuschung und Verleugnung durchzogen. Und Sie können völlig in Vergessenheit geraten. Es ist ein Donnerschlag, erstarrt in den Augen der illusorischen Existenz.`
        }
    },
    {
        ua: {
            name: 'ЕЙФОРІЯ',
            descr: `Стан блаженства, радісного, душевного підйому, що не з'ясовується зовнішніми проявами Неба, обставинами чи причинами його виникнення. Просто бути. Одна Мить. Одна любов. Одне небо.`
        },
        rus: {
            name: 'ЭЙФОРИЯ',
            descr: `Состояние блаженства, радостного, душевного подъёма, не объяснимого внешними проявлениями Неба, обстоятельствами или причинами его возникновения. Просто есть. Одно Мгновение. Одна Любовь. Одно Небо.`
        },
        eng: {
            name: 'EUPHORIA',
            descr: `A state of bliss, joyful, spiritual uplift, not explained by the external manifestations of Heaven, the circumstances, or causes of its occurrence. Just eat. One moment. One Love. One Sky.`
        },
        ge: {
            name: 'EUPHORIE',
            descr: `Ein Zustand der Glückseligkeit, der Freude und der spirituellen Erhebung, der nicht durch die äußeren Manifestationen des Himmels, die Umstände oder Ursachen seines Auftretens erklärt wird. ISS einfach. Einen Moment. Eine Liebe. Ein Himmel.`
        }
    },
    {
        ua: {
            name: 'ЛЮТЬ',
            descr: `Активне протистояння тому, що вважається злом, бажання боротися, битися за свою ідею, свободу і право літати у хмарах вічно мирного Неба. Веселощі – це Небо, під яким цвіте все, крім злості.`
        },
        rus: {
            name: 'ЯРОСТЬ',
            descr: `Активное противостояние тому, что считается злом, желание сражаться, биться за свою идею, свободу и право летать в облаках вечно мирного Неба. Веселье — это Небо, под которым цветет всё, кроме злобы.`
        },
        eng: {
            name: 'FURY',
            descr: `Active opposition to what is considered evil, the desire to fight, fight for your idea, freedom and the right to fly in the clouds of the eternally peaceful Sky. Joy is the Sky under which everything blooms except malice.`
        },
        ge: {
            name: 'ZORN',
            descr: `Aktiver Widerstand gegen das, was als böse gilt, der Wunsch zu kämpfen, für die eigene Idee, die Freiheit und das Recht, in den Wolken des ewig friedlichen Himmels zu fliegen. Freude ist der Himmel, unter dem alles blüht, außer der Bosheit.`
        }
    }
];
const serviceTr = [
    {
        ua: `Натисни на карту`,
        rus: `Нажми на карту`,
        eng: `Click on the card`,
        ge: `Klicken Sie auf die Karte`
    },
    {
        ua: `Чекай, перемішується`,
        rus: `Подожди, перемешивается`,
        eng: `Wait, it's stirring`,
        ge: `Warten Sie, es regt sich`
    },
    {
        ua: `Витягни карту`,
        rus: `Вытащи карту`,
        eng: `Pull out the card`,
        ge: `Karte herausziehen`
    },
    {
        ua: `Твоя карта`,
        rus: `Твоя карта`,
        eng: `Your card`,
        ge: `Deine Karte`
    },
    {
        ua: `Перемішати`,
        rus: `Перемешать`,
        eng: `Shuffle`,
        ge: `Mischen`
    },
    {
        ua: `Подивитися результат`,
        rus: `Посмотреть результат`,
        eng: `View result`,
        ge: `Sehen das Ergebnis`
    },
    {
        ua: 'Залишилось безкоштовних переглядів:',
        rus: 'Осталось бесплатных просмотров:',
        eng: 'Free views left:',
        ge: 'Freie Zeiten übrig:'
    },
    {
        ua: 'Ви використали безкоштовні перегляди. Щоб отримати ще перегляди, будь ласка, оберіть варіант безлімітного доступу МАК',
        rus: 'Вы использовали бесплатные просмотры. Чтобы получить еще просмотры, выберите вариант безлимитного доступа МАК',
        eng: 'You have used free views. To get more views, please select the unlimited MAC option',
        ge: 'Sie haben die kostenlosen Ansichten aufgebraucht. Um mehr Aufrufe zu erhalten, wählen Sie bitte die Option unbegrenzter MAK-Zugriff'
    },
    {
        ua: 'Безлімітний доступ МАК',
        rus: 'Безлимитный доступ МАК',
        eng: 'Unlimited access MAC',
        ge: 'Unbegrenzter MAC-Zugriff'
    },
    {
        ua: 'Щоб подивитися результат, заповніть форму',
        rus: 'Чтобы посмотреть результат, заполните форму',
        eng: 'To see the result, fill out the form',
        ge: 'Um das Ergebnis zu sehen, füllen Sie das Formular aus'
    },
    {
        ua: 'Щоб використати ще 4 спроби, приєднайтесь до нашого ТГ бота і заберіть там свій бонус',
        rus: 'Чтобы использовать еще 4 попытки, присоединитесь к нашему ТГ боту и заберите там свой бонус',
        eng: 'To use 4 more attempts, join our TG bot and collect your bonus there',
        ge: 'Um 4 weitere Versuche zu nutzen, treten Sie unserem TG-Bot bei und sammeln Sie dort Ihren Bonus'
    },
    {
        ua: 'Отримати мій бонус',
        rus: 'Получить мой бонус',
        eng: 'Get my bonus',
        ge: 'Holen Sie sich Ihren Bonus'
    }
]
const tariffsTr = [
    {
        ua: 'економія',
        rus: 'экономия',
        eng: 'saving',
        ge: 'sparen'
    },
    {
        ua: 'оплатити',
        rus: 'оплатить',
        eng: 'pay',
        ge: 'zahlen'
    },
    {
        ua: 'подарунок',
        rus: 'подарок',
        eng: 'gift',
        ge: 'Geschenk'
    },
    {
        ua: count => {
            switch (count) {
                case 1: return 'місяць';
                case 3: return 'місяця';
                case 6: return 'місяців';
            }
        },
        rus: count => {
            switch (count) {
                case 1: return 'месяц';
                case 3: return 'месяца';
                case 6: return 'месяцев';
            }
        },
        eng: () => 'month',
        ge: count => count === 6 ? 'monate' : 'monat'
    },
    {
        ua: 'Тарифи безлімітного користування МАК',
        rus: 'Тарифы безлимитного пользования МАК',
        eng: 'Tariffs for unlimited use of MAC',
        ge: 'Tarife für die unbegrenzte Nutzung von MAK'
    },
    {
        ua: 'Пів року',
        rus: 'Пол года',
        eng: 'Half a year',
        ge: 'Ein halbes Jahr'
    }
]
/**
 * jquery.baraja.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
jQuery.fn.reverse = [].reverse;

;(function ($, window, undefined) {
    'use strict';
    // global
    let Modernizr = window.Modernizr;
    let fanConfig = [
        {
            speed: 500,
            easing: 'ease-out',
            range: 90,
            direction: 'right',
            origin: {x: 25, y: 100},
            center: true
        },,
        {
            speed: 500,
            easing: 'ease-out',
            range: 90,
            direction: 'left',
            // note that the x origin changes (symmetric)
            origin: {x: 75, y: 100},
            center: true
        },,,
        {
            speed: 500,
            easing: 'ease-out',
            range: 100,
            direction: 'right',
            origin: {x: 50, y: 200},
            center: true
        },,
        {
            speed: 500,
            easing: 'ease-out',
            range: 20,
            direction: 'right',
            origin: {x: 50, y: 200},
            center: false,
            translation: 300
        },
        {
            speed: 500,
            easing: 'ease-out',
            range: 20,
            direction: 'left',
            origin: {x: 50, y: 200},
            center: false,
            translation: 300
        }
    ];
    const WATCHES = 5;
    let $barajaEl = $('#baraja-el'),
        lang = window.location.href.replace(/^.+sky_cards_/, ''),
        message = $('#message'),
        reorderBtn = $('#reorder'),
        showResultBtn = $('#showResultBtn:not([disabled])'),
        tgBotLink = $('#tgBotLink'),
        tgBotHint = $('#tgBotHint'),
        watchesLeft = WATCHES,
        reorderIteration = 0;

    if (lang?.length > 3) {
        lang = window.cardsLang || 'ua';
        window.cardsLang = lang;
    }

    message.text(serviceTr[0][lang]);
    reorderBtn.text(serviceTr[4][lang]);
    showResultBtn.text(serviceTr[5][lang]);
    tgBotHint.html(serviceTr[10][lang]);
    tgBotLink.html(serviceTr[11][lang]);

    data.forEach((card, i) => {
        i && $barajaEl.append('<li data-i=' + i + '><img src="https://goncharukvalera.github.io/cards/2/images/' + i + '.jpg" alt="' + data[i][lang].name + '"/><h4>' + data[i][lang].name + '</h4></li>');
    });
    $.Baraja = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };
    // the options
    $.Baraja.defaults = {
        // if we want to specify a selector that triggers the next() function. example: '#baraja-nav-next'
        nextEl: '',
        // if we want to specify a selector that triggers the previous() function
        prevEl: '',
        // default transition speed
        speed: 300,
        // default transition easing
        easing: 'ease-in-out'
    };
    $.Baraja.prototype = {
        _init: function (options) {
            // options
            this.options = $.extend(true, {}, $.Baraja.defaults, options);
            let transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            };
            this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
            this._setDefaultFanSettings();
            this.$items = this.$el.children('li');
            this.itemsCount = this.$items.length;
            if (this.itemsCount === 0) {
                return false;
            }
            // support for CSS Transitions
            this.supportTransitions = Modernizr.csstransitions;
            // opened/closed deck
            this.closed = true;
            // lowest value for the z-index given to the items
            this.itemZIndexMin = 1000;
            // sets the item's z-index value
            this._setStack();
            // initialize some events
            this._initEvents();
        },
        _setDefaultFanSettings: function () {
            this.fanSettings = {
                // speed for opening/closing
                speed: 500,
                // easing for opening/closing
                easing: 'ease-out',
                // difference/range of possible angles that the items will have
                // example: with range:90 and center:false the first item
                // will have 0deg and the last one 90deg;
                // if center:true, then the first one will have 45deg
                // and the last one -45deg; in both cases the difference is 90deg
                range: 90,
                // this defines the position of the first item
                // (to the right, to the left)
                // and its angle (clockwise / counterclockwise)
                direction: 'right',
                // transform origin:
                // you can also pass a minX and maxX, meaning the left value
                // will vary between minX and maxX
                origin: {x: 25, y: 100},
                // additional translation of each item
                translation: 0,
                // if the cards should be centered after the transform
                // is applied
                center: true,
                // add a random factor to the final transform
                scatter: false
            };
        },
        _validateDefaultFanSettings: function (settings) {
            if (!settings.origin) {
                settings.origin = this.fanSettings.origin;
            } else {
                settings.origin.x = settings.origin.x || this.fanSettings.origin.x;
                settings.origin.y = settings.origin.y || this.fanSettings.origin.y;
            }
            settings.speed = settings.speed || this.fanSettings.speed;
            settings.easing = settings.easing || this.fanSettings.easing;
            settings.direction = settings.direction || this.fanSettings.direction;
            settings.range = settings.range || this.fanSettings.range;
            settings.translation = settings.translation || this.fanSettings.translation;
            if (settings.center == undefined) {
                settings.center = this.fanSettings.center;
            }
            if (settings.scatter == undefined) {
                settings.scatter = this.fanSettings.scatter;
            }
            this.direction = settings.direction;
            return settings;
        },
        _setStack: function ($items) {
            let self = this;
            $items = $items || this.$items;
            $items.each(function (i) {
                $(this).css('z-index', self.itemZIndexMin + self.itemsCount - 1 - i);
            });
        },
        _updateStack: function ($el, dir) {
            let currZIndex = Number($el.css('z-index')),
                newZIndex = dir === 'next' ? this.itemZIndexMin - 1 : this.itemZIndexMin + this.itemsCount,
                extra = dir === 'next' ? '+=1' : '-=1';
            $el.css('z-index', newZIndex);
            this.$items.filter(function () {
                let zIdx = Number($(this).css('z-index')),
                    cond = dir === 'next' ? zIdx < currZIndex : zIdx > currZIndex;
                return cond;
            }).css('z-index', extra);
        },
        _initEvents: function () {
            let self = this,
                {itemZIndexMin, itemsCount} = this;
            if (this.options.nextEl !== '') {
                $(this.options.nextEl).on('click.baraja', function () {
                    self._navigate('next');
                    return false;
                });
            }
            if (this.options.prevEl !== '') {
                $(this.options.prevEl).on('click.baraja', function () {
                    self._navigate('prev');
                    return false;
                });
            }
            this.$el.on('click.baraja', 'li', function () {
                let isTop = Number($(this).css('z-index')) === itemZIndexMin + itemsCount - 1;
                $('.flipped').removeClass('flipped');
                if (!self.isAnimating) {
                    self._move2front($(this));
                    if (!isTop) {
                        $(this).addClass('flipped');
                        const tgBotBonus = localStorage.getItem('bonus') === 'tgBotBonus';
                        if (watchesLeft === WATCHES) {
                            message.text(serviceTr[9][lang]);
                            showResultBtn.show();
                        } else {
                            if (watchesLeft && (watchesLeft !== WATCHES) && tgBotBonus || userGroups.includes('Personal') || userGroups.includes('Standard') || userGroups.includes('Business')) {
                                message.text('');
                                debugger
                                showResultBtn.show();
                            } else {
                                if (!tgBotBonus && watchesLeft) {
                                    tgBotLink.addClass('df');
                                    tgBotHint.show();
                                    localStorage.setItem('url', location.href);
                                }
                                if (!watchesLeft) {
                                    $counter.text(serviceTr[7][lang]);
                                }
                            }
                        }
                    }
                }
                $('#result').slideUp();
            });
        },
        _resetTransition: function ($el) {
            $el.css({
                '-webkit-transition': 'none',
                '-moz-transition': 'none',
                '-ms-transition': 'none',
                '-o-transition': 'none',
                'transition': 'none'
            });
        },
        _setOrigin: function ($el, x, y) {
            $el.css('transform-origin', x + '% ' + y + '%');
        },
        _setTransition: function ($el, prop, speed, easing, delay) {
            if (!this.supportTransitions) {
                return false;
            }
            if (!prop) {
                prop = 'all';
            }
            if (!speed) {
                speed = this.options.speed;
            }
            if (!easing) {
                easing = this.options.easing;
            }
            if (!delay) {
                delay = 0;
            }
            let styleCSS = '';
            prop === 'transform' ?
                styleCSS = {
                    '-webkit-transition': '-webkit-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-moz-transition': '-moz-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-ms-transition': '-ms-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-o-transition': '-o-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    'transition': 'transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
                } :
                styleCSS = {
                    '-webkit-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-moz-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-ms-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    '-o-transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
                    'transition': prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
                };
            $el.css(styleCSS);
        },
        _applyTransition: function ($el, styleCSS, fncomplete, force) {
            if (this.supportTransitions) {
                if (fncomplete) {
                    $el.on(this.transEndEventName, fncomplete);
                    if (force) {
                        fncomplete.call();
                    }
                }
                setTimeout(function () {
                    $el.css(styleCSS);
                }, 25);
            } else {
                $el.css(styleCSS);
                if (fncomplete) {
                    fncomplete.call();
                }
            }
        },
        _navigate: function (dir) {
            this.closed = false;
            let self = this,
                extra = 15,
                cond = dir === 'next' ? self.itemZIndexMin + self.itemsCount - 1 : self.itemZIndexMin,
                $item = this.$items.filter(function () {
                    return Number($(this).css('z-index')) === cond;
                }),
                translation = dir === 'next' ? $item.outerWidth(true) + extra : $item.outerWidth(true) * -1 - extra,
                rotation = dir === 'next' ? 5 : 5 * -1;
            this._setTransition($item, 'transform', this.options.speed, this.options.easing);
            this._applyTransition($item, {transform: 'translate(' + translation + 'px) rotate(' + rotation + 'deg)'}, function () {
                $item.off(self.transEndEventName);
                self._updateStack($item, dir);
                self._applyTransition($item, {transform: 'translate(0px) rotate(0deg)'}, function () {
                    $item.off(self.transEndEventName);
                    self.isAnimating = false;
                    self.closed = true;
                });
            });
        },
        _move2front: function ($item) {
            // debugger
            this.isAnimating = true;
            let self = this,
                isTop = Number($item.css('z-index')) === this.itemZIndexMin + this.itemsCount - 1,
                callback = isTop ? function () {
                    self.isAnimating = false;
                } : function () {
                    return false;
                };
            isTop && ($item = null);
            // if it's the one with higher z-index, just close the baraja
            if (!this.closed) {
                this._close(callback, $item);
            } else {
                // debugger
                // this._fan(fanConfig[Math.floor(Math.random()*fanConfig.length)]);
                this._fan(fanConfig[5]);
                message.text(serviceTr[2][lang]);
            }
            if (isTop) {
                return false;
            }
            this._resetTransition($item);
            this._setOrigin($item, 50, 50);
            $item.css({
                opacity: 0,
                transform: 'scale(2) translate(100px) rotate(20deg)'
            });
            this._updateStack($item, 'prev');
            setTimeout(function () {
                self._setTransition($item, 'all', self.options.speed, 'ease-in');
                self._applyTransition($item, {transform: 'none', opacity: 1}, function () {
                    $item.off(self.transEndEventName);
                    self.isAnimating = false;
                });
            }, this.options.speed / 2);
        },
        _close: function (callback, $item) {
            let self = this,
                $items = self.$items,
                force = this.closed ? true : false;
            if ($item) {
                $items = $items.not($item);
            }
            this._applyTransition($items, {transform: 'none'}, function () {
                self.closed = true;
                $items.off(self.transEndEventName);
                self._resetTransition($items);
                setTimeout(function () {
                    self._setOrigin($items, 50, 50);
                    if (callback) {
                        callback.call();
                    }
                }, 25);
            }, force);
        },
        _fan: function (settings) {
            let self = this;
            this.closed = false;
            settings = this._validateDefaultFanSettings(settings || {});
            // set transform origins
            // if minX and maxX are passed:
            if (settings.origin.minX && settings.origin.maxX) {
                let max = settings.origin.maxX, min = settings.origin.minX,
                    stepOrigin = (max - min) / this.itemsCount;
                this.$items.each(function (i) {
                    let $el = $(this),
                        pos = self.itemsCount - 1 - (Number($el.css('z-index')) - self.itemZIndexMin),
                        originX = pos * (max - min + stepOrigin) / self.itemsCount + min;
                    if (settings.direction === 'left') {
                        originX = max + min - originX;
                    }
                    self._setOrigin($(this), originX, settings.origin.y);
                });
            } else {
                this._setOrigin(this.$items, settings.origin.x, settings.origin.y);
            }
            this._setTransition(this.$items, 'transform', settings.speed, settings.easing);
            let stepAngle = settings.range / (this.itemsCount - 1),
                stepTranslation = settings.translation / (this.itemsCount - 1),
                cnt = 0;
            this.$items.each(function (i) {
                let $el = $(this),
                    pos = self.itemsCount - 1 - (Number($el.css('z-index')) - self.itemZIndexMin),
                    val = settings.center ? settings.range / 2 : settings.range,
                    angle = val - stepAngle * pos,
                    position = stepTranslation * (self.itemsCount - pos - 1);
                if (settings.direction === 'left') {
                    angle *= -1;
                    position *= -1;
                }
                if (settings.scatter) {
                    let extraAngle = Math.floor(Math.random() * stepAngle),
                        extraPosition = Math.floor(Math.random() * stepTranslation);
                    // not for the first item...
                    if (pos !== self.itemsCount - 1) {
                        angle = settings.direction === 'left' ? angle + extraAngle : angle - extraAngle;
                        position = settings.direction === 'left' ? position - extraPosition : position + extraPosition;
                    }
                }
                // save..
                $el.data({translation: position, rotation: angle});
                self._applyTransition($el, {transform: 'translate(' + position + 'px) rotate(' + angle + 'deg)'}, function () {
                    ++cnt;
                    $el.off(self.transEndEventName);
                    if (cnt === self.itemsCount - 1) {
                        self.isAnimating = false;
                    }
                });
            });
        },
        // adds new elements to the deck
        _add: function ($elems) {
            let self = this,
                newElemsCount = $elems.length, cnt = 0;
            $elems.css('opacity', 0).appendTo(this.$el);
            // reset
            this.$items = this.$el.children('li');
            this.itemsCount = this.$items.length;
            // set z-indexes
            this._setStack($elems);
            // animate new items
            $elems.css('transform', 'scale(1.8) translate(200px) rotate(15deg)').reverse().each(function (i) {
                let $el = $(this);
                self._setTransition($el, 'all', 500, 'ease-out', i * 200);
                self._applyTransition($el, {transform: 'none', opacity: 1}, function () {
                    ++cnt;
                    $el.off(self.transEndEventName);
                    self._resetTransition($el);
                    if (cnt === newElemsCount) {
                        self.isAnimating = false;
                    }
                });
            });
        },
        _allowAction: function () {
            return this.itemsCount > 1;
        },
        _prepare: function (callback) {
            let self = this;
            if (!this.closed) {
                this._close(function () {
                    callback.call();
                });
            } else {
                callback.call();
            }
        },
        _dispatch: function (action, args) {
            let self = this;
            if (((action === this._fan || action === this._navigate) && !this._allowAction()) || this.isAnimating) {
                return false;
            }
            this.isAnimating = true;
            this._prepare(function () {
                action.call(self, args);
            });
        },
        // public method: closes the deck
        close: function (settings) {
            if (this.isAnimating) {
                return false;
            }
            this._close();
        },
        // public method: shows next item
        next: function () {
            this._dispatch(this._navigate, 'next');
        },
        // public method: shows previous item
        previous: function () {
            this._dispatch(this._navigate, 'prev');
        },
        // public method: opens the deck
        fan: function (settings) {
            this._dispatch(this._fan, settings);
        },
        // public method: adds new elements
        add: function ($elems) {
            this._dispatch(this._add, $elems);
        }
    };
    let logError = function (message) {
        if (window.console) {
            window.console.error(message);
        }
    };
    $.fn.baraja = function (options) {
        let instance = $.data(this, 'baraja');
        if (typeof options === 'string') {
            let args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                if (!instance) {
                    logError('cannot call methods on baraja prior to initialization; ' +
                        'attempted to call method \'' + options + '\'');
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                    logError('no such method \'' + options + '\' for baraja instance');
                    return;
                }
                instance[options].apply(instance, args);
            });
        } else {
            this.each(function () {
                if (instance) {
                    instance._init();
                } else {
                    instance = $.data(this, 'baraja', new $.Baraja(options, this));
                }
            });
        }
        return instance;
    };

    let baraja = $barajaEl.baraja();
    // navigation
    $('#nav-prev').on('click', function (e) {
        baraja.previous();
    });
    $('#nav-next').on('click', function (e) {
        baraja.next();
    });

    // simple fan
    $('#nav-fan').on('click', function (e) {
        baraja.fan(fanConfig[0]);
    });

    $('#nav-fan2').on('click', function (e) {
        baraja.fan(fanConfig[2]);
    });

    // more realistic fan: without common origin (means the origin changes / increments by card )
    // $('#nav-fan3').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 90,
    //         direction: 'right',
    //         origin: {minX: 20, maxX: 80, y: 100},
    //         center: true,
    //         translation: 60
    //     });
    // });

    // $('#nav-fan4').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 90,
    //         direction: 'left',
    //         origin: {minX: 20, maxX: 80, y: 100},
    //         center: true,
    //         translation: 60
    //     });
    // });

    // playing with different origins and ranges
    $('#nav-fan5').on('click', function (e) {
        baraja.fan(fanConfig[5]);
    });

    // $('#nav-fan6').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 80,
    //         direction: 'left',
    //         origin: {x: 200, y: 50},
    //         center: true
    //     });
    // });

    // center false, playing with translation
    $('#nav-fan7').on('click', function (e) {
        baraja.fan(fanConfig[7]);
    });

    $('#nav-fan8').on('click', function (e) {
        baraja.fan(fanConfig[8]);
    });

    // using scatter : true

    // $('#nav-fan9').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 20,
    //         direction: 'right',
    //         origin: {x: 50, y: 200},
    //         center: false,
    //         translation: 300,
    //         scatter: true
    //     });
    // });

    // $('#nav-fan10').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 20,
    //         direction: 'left',
    //         origin: {x: 50, y: 200},
    //         center: false,
    //         translation: 300,
    //         scatter: true
    //     });
    // });

    // $('#nav-fanOther1').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 130,
    //         direction: 'left',
    //         origin: {x: 25, y: 100},
    //         center: false
    //     });
    // });

    // $('#nav-fanOther2').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 360,
    //         direction: 'left',
    //         origin: {x: 50, y: 90},
    //         center: false
    //     });
    // });

    // $('#nav-fanOther3').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 330,
    //         direction: 'left',
    //         origin: {x: 50, y: 100},
    //         center: true
    //     });
    // });

    // $('#nav-fanOther4').on('click', function (e) {
    //     baraja.fan({
    //         speed: 500,
    //         easing: 'ease-out',
    //         range: 90,
    //         direction: 'right',
    //         origin: {minX: 20, maxX: 80, y: 100},
    //         center: true,
    //         translation: 60,
    //         scatter: true
    //     });
    // });

    // close the baraja
    $('#close').on('click', function (e) {
        baraja.close();
    });

    // example of how to add more items
    // $('#add').on('click', function (e) {
    //     if ($(this).hasClass('disabled')) {
    //         return false;
    //     }
    //     $(this).addClass('disabled');
    //     baraja.add($('<li><img src="images/6.jpg" alt="Card 6"/><h4>Serenity</h4><p>Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.</p></li><li><img src="images/7.jpg" alt="image7"/><h4>Dark Honor</h4><p>Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.</p></li><li><img src="images/8.jpg" alt="image8"/><h4>Nested Happiness</h4><p>Minim post-ironic banksy american apparel iphone wayfarers.</p></li><li><img src="images/9.jpg" alt="image9"/><h4>Cherry Country</h4><p>Sint vinyl Austin street art odd future id trust fund, terry richardson cray.</p></li>'));
    // });


    reorderBtn.on('click', function (e) {
        $('.flipped').removeClass('flipped');
        $('#result').slideUp();
        if (reorderIteration === 2 || reorderIteration === 4) {
            baraja.next();
        } else {
            baraja.previous();
        }
        if (reorderIteration <= WATCHES) {
            setTimeout(() => {
                reorderBtn.click();
                reorderIteration++;
            }, 400);
            message.text(serviceTr[1][lang]);
        } else {
            reorderIteration = 0;
            setTimeout(() => {message.text(serviceTr[0][lang])}, 400);
        }
    });


    const findLocalItems = query => {
        let i, results = [];
        for (i in localStorage) {
            if (localStorage.hasOwnProperty(i)) {
                if (i.match(query) || (!query && typeof i === 'string')) {
                    let val = JSON.parse(localStorage.getItem(i));
                    results.push({key: i, val});
                }
            }
        }
        return results;
    };
    let ip,
        rec = null,
        $counter = $('#counter'),
        setCount = count => {
            count ? $counter.text(`${serviceTr[6][lang]} ${count}`) : $counter.text(serviceTr[7][lang]);
        },
        storageUserData = findLocalItems(/tilda_members_profile[0-9]+$/)[0]?.val,
        userGroups = [],
        currentDateTime = new Date(),
        $tariffs = $('#tariffs'),
        $tariffsBtn = $('#tariffsBtn'),
        $tariffsTitle = $('#tariffs h1');

    $tariffsTitle.text(tariffsTr[4][lang]);
    $tariffsBtn.text(serviceTr[8][lang]);
    $tariffs.find('>div>div').each((i, tariff) => {
        const $tariff = $(tariff),
            $period = $tariff.find('p'),
            period = +$period.text(),
            $btn = $tariff.find('a');
        if (period === 6) {
            $period.text(tariffsTr[5][lang]);
        } else {
            $period.find('span').text(tariffsTr[3][lang](period));
        }
        $btn.text(tariffsTr[1][lang]);
        $btn.attr('href', $btn.attr('href') + lang);
        $tariff.find('div span').text(tariffsTr[0][lang]);
        i === 2 && $tariff.find('b').text('+ ' + tariffsTr[2][lang]);
    });

    //submit contacts form
    $('body').on('click', '.uc-clientContactsFor button[type=submit]', e => {
        const $form = $(e.target).closest('form'),
            email = $form.find('[type=email]').val(),
            userName = $form.find('[name=Name]').val();
        debugger
        setTimeout(() => {
            if ($form.find('.js-errorbox-all').is(':visible')) {
                // console.log('has error', email, userName);
            } else {
                localStorage.setItem('email', email);
                localStorage.setItem('userName', userName);
                // console.log('success', email, userName);
                setTimeout(() => {
                    $('[class*=clientContactsFor] .t-popup').fadeOut(300);
                    watchesLeft--;
                    showResult();
                }, 500);
            }
        }, 500);
    });
    //submit contacts form

    //bonus   ?bonus=tgBotBonus
    {
        const login = localStorage.getItem('email'),
            name = localStorage.getItem('userName'),
            bonus = localStorage.getItem('bonus');
        if (bonus === 'tgBotBonus' && document.referrer.includes('tgBotBonus') && name && login &&
            !userGroups.includes('Personal') && !userGroups.includes('Standard') && !userGroups.includes('Business')
            /*|| location.hostname === 'localhost'*/) {
            $counter.show();
            // $.post(`https://members.tilda.cc/api/createmember/`, // unauthorized error, need cookies
            //     {
            //         activity: true,
            //         groups: [794582],
            //         login,
            //         name,
            //         password: '',
            //         projectId: 178112,
            //         setPassword: true
            //     }, function () {
            //         console.log('User received bonus');
            //     });
        }
    }
    //bonus

    storageUserData?.groups?.forEach(group => {
        if (group.is_confirmed && group.expired) {
            let expDateTime = new Date(group.expired);
            if (expDateTime > currentDateTime) {
                userGroups.push(group.name);
            }
        }
    });

    if (localStorage.getItem('bonus') === 'tgBotBonus' || userGroups.includes('Personal') || userGroups.includes('Standard') || userGroups.includes('Business')) {
        tgBotLink.removeClass('df');
        tgBotHint.hide();
    }
    const urlMocapi = 'https://64e680cb09e64530d1800ac4.mockapi.io';
    $.getJSON('https://api.ipify.org?format=json', data => {
        ip = data.ip;
        $.getJSON(`${urlMocapi}/ips`, data => {
            rec = data.find(rec => rec.ip === ip);
            if (rec?.id) {
                watchesLeft = +rec.watchesLeft;
            }
            setCount(watchesLeft);
            if (watchesLeft !== WATCHES && !userGroups.includes('Personal') && !userGroups.includes('Standard') && !userGroups.includes('Business')) {
                $counter.show();
            }
        });
    });
    const showResult = () => {
        showResultBtn.hide();
        let i = $('.flipped').data('i');
        $('#result').html('<div><img src="https://goncharukvalera.github.io/cards/2/images/' + i + '.jpg" alt="' + data[i][lang].name + '"/><h4>' + data[i][lang]?.name + '</h4></div><span>' + serviceTr[3][lang] + ':</span><h4>' + data[i][lang]?.name + '</h4><p>' + data[i][lang]?.descr + '</p>').slideDown();

        if (rec?.id) {
            $.ajax({
                url: `${urlMocapi}/ips/${rec.id}`,
                type: `PUT`,
                data: {watchesLeft, createdAt: +Date.now()},
            }).done(function () {
                setCount(watchesLeft);
            });
        } else {
            $.post(`${urlMocapi}/ips`, {ip, watchesLeft, createdAt: +Date.now()}, function () {
                setCount(watchesLeft);
            });
        }
    }
    showResultBtn.on('click', function () {
        // $(this).removeAttr('disabled');
        if (watchesLeft === WATCHES && !localStorage.getItem('email')) {
            $('[class*=clientContactsFor] .t-popup').fadeIn(300);
            showResultBtn.hide();
        } else {
            watchesLeft--;
            if (!watchesLeft && !userGroups.includes('Personal') && !userGroups.includes('Standard') && !userGroups.includes('Business')) {
                $counter.text(serviceTr[7][lang]);
                $(this).attr('disabled', 'disabled');
            }
            showResult();
        }
    });

    $tariffsBtn.on('click', function () {
        $tariffsBtn.removeClass('df');
        $tariffs.slideDown(300);
    });

    // came from bot
    // const params = new URLSearchParams(location.search);
    // const redirectUrl = localStorage.getItem('url')
    // if (params.get('bonus') === 'tgBotBonus' && redirectUrl) {
    //     localStorage.setItem('bonus', 'tgBotBonus');
    //     location.href = redirectUrl
    // }
    // came from bot

    // fix for reload after back in browser
    window.addEventListener('pageshow', function (e) {
        let historyTraversal = e.persisted ||
            (typeof window.performance != 'undefined' && window.performance.navigation.type === 2);
        if (historyTraversal) {
            window.location.reload();
        }
    });
    // fix for reload after back in browser

    // reset flow
    $('#resetFlowBtn').on('click', function () {
        const urlMocapi = 'https://64e680cb09e64530d1800ac4.mockapi.io';
        $.getJSON('https://api.ipify.org?format=json', data => {
            const ip = data.ip;
            $.getJSON(`${urlMocapi}/ips`, data => {
                data.forEach(rec => {
                    if (rec.ip === ip) {
                        fetch(`https://64e680cb09e64530d1800ac4.mockapi.io/ips/${rec.id}`, {
                            method: 'DELETE',
                        }).then(res => {
                            if (res.ok) {
                                localStorage.clear();
                                return res.json();
                            }
                            console.log('Error when try to delete IP record');
                        }).then(task => {
                            // Do something with deleted task
                        }).catch(error => {
                            console.log('Unhandled error when try to delete IP record');
                        });
                    }
                });

            });
        });
    });
    // reset flow
})(jQuery, window);