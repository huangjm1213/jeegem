/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/webapp.js']) {
  _$jscoverage['plugins/webapp.js'] = [];
  _$jscoverage['plugins/webapp.js'][28] = 0;
  _$jscoverage['plugins/webapp.js'][29] = 0;
  _$jscoverage['plugins/webapp.js'][30] = 0;
  _$jscoverage['plugins/webapp.js'][31] = 0;
  _$jscoverage['plugins/webapp.js'][39] = 0;
  _$jscoverage['plugins/webapp.js'][40] = 0;
  _$jscoverage['plugins/webapp.js'][42] = 0;
  _$jscoverage['plugins/webapp.js'][43] = 0;
  _$jscoverage['plugins/webapp.js'][44] = 0;
  _$jscoverage['plugins/webapp.js'][46] = 0;
  _$jscoverage['plugins/webapp.js'][47] = 0;
  _$jscoverage['plugins/webapp.js'][48] = 0;
  _$jscoverage['plugins/webapp.js'][52] = 0;
  _$jscoverage['plugins/webapp.js'][53] = 0;
  _$jscoverage['plugins/webapp.js'][55] = 0;
  _$jscoverage['plugins/webapp.js'][56] = 0;
  _$jscoverage['plugins/webapp.js'][58] = 0;
  _$jscoverage['plugins/webapp.js'][59] = 0;
  _$jscoverage['plugins/webapp.js'][60] = 0;
  _$jscoverage['plugins/webapp.js'][62] = 0;
  _$jscoverage['plugins/webapp.js'][65] = 0;
  _$jscoverage['plugins/webapp.js'][67] = 0;
}
_$jscoverage['plugins/webapp.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\"> * &#30334;&#24230;&#24212;&#29992;</span>","<span class=\"c\"> * @file</span>","<span class=\"c\"> * @since 1.2.6.1</span>","<span class=\"c\"> */</span>","","","<span class=\"c\">/**</span>","<span class=\"c\"> * &#22312;&#24403;&#21069;&#20809;&#26631;&#22788;&#25554;&#20837;&#19968;&#20010;&#30334;&#24230;&#24212;&#29992;&#65292; &#38656;&#35201;&#30334;&#24230;APPKey</span>","<span class=\"c\"> * @command webapp</span>","<span class=\"c\"> * @method execCommand</span>","<span class=\"c\"> * @param { KeyValueMap } appOptions &#24212;&#29992;&#25152;&#38656;&#30340;&#21442;&#25968;&#39033;&#65292; &#25903;&#25345;&#30340;key&#26377;&#65306; title=&gt;&#24212;&#29992;&#26631;&#39064;&#65292; width=&gt;&#24212;&#29992;&#23481;&#22120;&#23485;&#24230;&#65292;</span>","<span class=\"c\"> * height=&gt;&#24212;&#29992;&#23481;&#22120;&#39640;&#24230;&#65292;logo=&gt;&#24212;&#29992;logo&#65292;url=&gt;&#24212;&#29992;&#22320;&#22336;</span>","<span class=\"c\"> * @example</span>","<span class=\"c\"> * ```javascript</span>","<span class=\"c\"> * //editor&#26159;&#32534;&#36753;&#22120;&#23454;&#20363;</span>","<span class=\"c\"> * //&#22312;&#32534;&#36753;&#22120;&#37324;&#25554;&#20837;&#19968;&#20010;&#8220;&#26893;&#29289;&#22823;&#25112;&#20725;&#23608;&#8221;&#30340;APP</span>","<span class=\"c\"> * editor.execCommand( 'webapp' , {</span>","<span class=\"c\"> *     title: '&#26893;&#29289;&#22823;&#25112;&#20725;&#23608;',</span>","<span class=\"c\"> *     width: 560,</span>","<span class=\"c\"> *     height: 465,</span>","<span class=\"c\"> *     logo: '&#24212;&#29992;&#23637;&#31034;&#30340;&#22270;&#29255;',</span>","<span class=\"c\"> *     url: '&#30334;&#24230;&#24212;&#29992;&#30340;&#22320;&#22336;'</span>","<span class=\"c\"> * } );</span>","<span class=\"c\"> * ```</span>","<span class=\"c\"> */</span>","","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'webapp'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","    <span class=\"k\">function</span> createInsertStr<span class=\"k\">(</span> obj<span class=\"k\">,</span> toIframe<span class=\"k\">,</span> addParagraph <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">return</span> <span class=\"k\">!</span>toIframe <span class=\"k\">?</span>","                <span class=\"k\">(</span>addParagraph <span class=\"k\">?</span> <span class=\"s\">'&lt;p&gt;'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'&lt;img title=\"'</span><span class=\"k\">+</span>obj<span class=\"k\">.</span>title<span class=\"k\">+</span><span class=\"s\">'\" width=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>width <span class=\"k\">+</span> <span class=\"s\">'\" height=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>height <span class=\"k\">+</span> <span class=\"s\">'\"'</span> <span class=\"k\">+</span>","                        <span class=\"s\">' src=\"'</span> <span class=\"k\">+</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>UEDITOR_HOME_URL <span class=\"k\">+</span> <span class=\"s\">'themes/default/images/spacer.gif\" style=\"background:url('</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>logo<span class=\"k\">+</span><span class=\"s\">') no-repeat center center; border:1px solid gray;\" class=\"edui-faked-webapp\" _url=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>url <span class=\"k\">+</span> <span class=\"s\">'\" /&gt;'</span> <span class=\"k\">+</span>","                        <span class=\"k\">(</span>addParagraph <span class=\"k\">?</span> <span class=\"s\">'&lt;/p&gt;'</span> <span class=\"k\">:</span> <span class=\"s\">''</span><span class=\"k\">)</span>","                <span class=\"k\">:</span>","                <span class=\"s\">'&lt;iframe class=\"edui-faked-webapp\" title=\"'</span><span class=\"k\">+</span>obj<span class=\"k\">.</span>title<span class=\"k\">+</span><span class=\"s\">'\" width=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>width <span class=\"k\">+</span> <span class=\"s\">'\" height=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>height <span class=\"k\">+</span> <span class=\"s\">'\"  scrolling=\"no\" frameborder=\"0\" src=\"'</span> <span class=\"k\">+</span> obj<span class=\"k\">.</span>url <span class=\"k\">+</span> <span class=\"s\">'\" logo_url = '</span><span class=\"k\">+</span>obj<span class=\"k\">.</span>logo<span class=\"k\">+</span><span class=\"s\">'&gt;&lt;/iframe&gt;'</span><span class=\"k\">;</span>","    <span class=\"k\">}</span>","","    <span class=\"k\">function</span> switchImgAndIframe<span class=\"k\">(</span> img2frame <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">var</span> tmpdiv<span class=\"k\">,</span>","                nodes <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span> me<span class=\"k\">.</span>document<span class=\"k\">,</span> <span class=\"k\">!</span>img2frame <span class=\"k\">?</span> <span class=\"s\">\"iframe\"</span> <span class=\"k\">:</span> <span class=\"s\">\"img\"</span> <span class=\"k\">);</span>","        <span class=\"k\">for</span> <span class=\"k\">(</span> <span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> node<span class=\"k\">;</span> node <span class=\"k\">=</span> nodes<span class=\"k\">[</span>i<span class=\"k\">++];</span> <span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span> node<span class=\"k\">.</span>className <span class=\"k\">!=</span> <span class=\"s\">\"edui-faked-webapp\"</span> <span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">continue</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            tmpdiv <span class=\"k\">=</span> me<span class=\"k\">.</span>document<span class=\"k\">.</span>createElement<span class=\"k\">(</span> <span class=\"s\">\"div\"</span> <span class=\"k\">);</span>","            tmpdiv<span class=\"k\">.</span>innerHTML <span class=\"k\">=</span> createInsertStr<span class=\"k\">(</span> img2frame <span class=\"k\">?</span> <span class=\"k\">{</span>url<span class=\"k\">:</span>node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span> <span class=\"s\">\"_url\"</span> <span class=\"k\">),</span> width<span class=\"k\">:</span>node<span class=\"k\">.</span>width<span class=\"k\">,</span> height<span class=\"k\">:</span>node<span class=\"k\">.</span>height<span class=\"k\">,</span>title<span class=\"k\">:</span>node<span class=\"k\">.</span>title<span class=\"k\">,</span>logo<span class=\"k\">:</span>node<span class=\"k\">.</span>style<span class=\"k\">.</span>backgroundImage<span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">\"url(\"</span><span class=\"k\">,</span><span class=\"s\">\"\"</span><span class=\"k\">).</span>replace<span class=\"k\">(</span><span class=\"s\">\")\"</span><span class=\"k\">,</span><span class=\"s\">\"\"</span><span class=\"k\">)</span><span class=\"k\">}</span> <span class=\"k\">:</span> <span class=\"k\">{</span>url<span class=\"k\">:</span>node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span> <span class=\"s\">\"src\"</span><span class=\"k\">,</span> <span class=\"s\">2</span> <span class=\"k\">),</span>title<span class=\"k\">:</span>node<span class=\"k\">.</span>title<span class=\"k\">,</span> width<span class=\"k\">:</span>node<span class=\"k\">.</span>width<span class=\"k\">,</span> height<span class=\"k\">:</span>node<span class=\"k\">.</span>height<span class=\"k\">,</span>logo<span class=\"k\">:</span>node<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"logo_url\"</span><span class=\"k\">)</span><span class=\"k\">}</span><span class=\"k\">,</span> img2frame <span class=\"k\">?</span> <span class=\"k\">true</span> <span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span><span class=\"k\">false</span> <span class=\"k\">);</span>","            node<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>replaceChild<span class=\"k\">(</span> tmpdiv<span class=\"k\">.</span>firstChild<span class=\"k\">,</span> node <span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span>","","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span> <span class=\"s\">\"beforegetcontent\"</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        switchImgAndIframe<span class=\"k\">(</span> <span class=\"k\">true</span> <span class=\"k\">);</span>","    <span class=\"k\">}</span> <span class=\"k\">);</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span> <span class=\"s\">'aftersetcontent'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","        switchImgAndIframe<span class=\"k\">(</span> <span class=\"k\">false</span> <span class=\"k\">);</span>","    <span class=\"k\">}</span> <span class=\"k\">);</span>","    me<span class=\"k\">.</span>addListener<span class=\"k\">(</span> <span class=\"s\">'aftergetcontent'</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">(</span> cmdName <span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span> cmdName <span class=\"k\">==</span> <span class=\"s\">'aftergetcontent'</span> <span class=\"k\">&amp;&amp;</span> me<span class=\"k\">.</span>queryCommandState<span class=\"k\">(</span> <span class=\"s\">'source'</span> <span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","            <span class=\"k\">return</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","        switchImgAndIframe<span class=\"k\">(</span> <span class=\"k\">false</span> <span class=\"k\">);</span>","    <span class=\"k\">}</span> <span class=\"k\">);</span>","","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'webapp'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span> cmd<span class=\"k\">,</span> obj <span class=\"k\">)</span> <span class=\"k\">{</span>","            me<span class=\"k\">.</span>execCommand<span class=\"k\">(</span> <span class=\"s\">\"inserthtml\"</span><span class=\"k\">,</span> createInsertStr<span class=\"k\">(</span> obj<span class=\"k\">,</span> <span class=\"k\">false</span><span class=\"k\">,</span><span class=\"k\">true</span> <span class=\"k\">)</span> <span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/webapp.js'][28]++;
UE.plugins.webapp = (function () {
  _$jscoverage['plugins/webapp.js'][29]++;
  var me = this;
  _$jscoverage['plugins/webapp.js'][30]++;
  function createInsertStr(obj, toIframe, addParagraph) {
    _$jscoverage['plugins/webapp.js'][31]++;
    return ((! toIframe)? ((addParagraph? "<p>": "") + "<img title=\"" + obj.title + "\" width=\"" + obj.width + "\" height=\"" + obj.height + "\"" + " src=\"" + me.options.UEDITOR_HOME_URL + "themes/default/images/spacer.gif\" style=\"background:url(" + obj.logo + ") no-repeat center center; border:1px solid gray;\" class=\"edui-faked-webapp\" _url=\"" + obj.url + "\" />" + (addParagraph? "</p>": "")): ("<iframe class=\"edui-faked-webapp\" title=\"" + obj.title + "\" width=\"" + obj.width + "\" height=\"" + obj.height + "\"  scrolling=\"no\" frameborder=\"0\" src=\"" + obj.url + "\" logo_url = " + obj.logo + "></iframe>"));
}
  _$jscoverage['plugins/webapp.js'][39]++;
  function switchImgAndIframe(img2frame) {
    _$jscoverage['plugins/webapp.js'][40]++;
    var tmpdiv, nodes = domUtils.getElementsByTagName(me.document, ((! img2frame)? "iframe": "img"));
    _$jscoverage['plugins/webapp.js'][42]++;
    for (var i = 0, node; (node = nodes[(i++)]);) {
      _$jscoverage['plugins/webapp.js'][43]++;
      if ((node.className != "edui-faked-webapp")) {
        _$jscoverage['plugins/webapp.js'][44]++;
        continue;
      }
      _$jscoverage['plugins/webapp.js'][46]++;
      tmpdiv = me.document.createElement("div");
      _$jscoverage['plugins/webapp.js'][47]++;
      tmpdiv.innerHTML = createInsertStr((img2frame? {url: node.getAttribute("_url"), width: node.width, height: node.height, title: node.title, logo: node.style.backgroundImage.replace("url(", "").replace(")", "")}: {url: node.getAttribute("src", 2), title: node.title, width: node.width, height: node.height, logo: node.getAttribute("logo_url")}), (img2frame? true: false), false);
      _$jscoverage['plugins/webapp.js'][48]++;
      node.parentNode.replaceChild(tmpdiv.firstChild, node);
}
}
  _$jscoverage['plugins/webapp.js'][52]++;
  me.addListener("beforegetcontent", (function () {
  _$jscoverage['plugins/webapp.js'][53]++;
  switchImgAndIframe(true);
}));
  _$jscoverage['plugins/webapp.js'][55]++;
  me.addListener("aftersetcontent", (function () {
  _$jscoverage['plugins/webapp.js'][56]++;
  switchImgAndIframe(false);
}));
  _$jscoverage['plugins/webapp.js'][58]++;
  me.addListener("aftergetcontent", (function (cmdName) {
  _$jscoverage['plugins/webapp.js'][59]++;
  if (((cmdName == "aftergetcontent") && me.queryCommandState("source"))) {
    _$jscoverage['plugins/webapp.js'][60]++;
    return;
  }
  _$jscoverage['plugins/webapp.js'][62]++;
  switchImgAndIframe(false);
}));
  _$jscoverage['plugins/webapp.js'][65]++;
  me.commands.webapp = {execCommand: (function (cmd, obj) {
  _$jscoverage['plugins/webapp.js'][67]++;
  me.execCommand("inserthtml", createInsertStr(obj, false, true));
})};
});