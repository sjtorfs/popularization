(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("fde53e85-c815-49a0-af98-356857489f06");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fde53e85-c815-49a0-af98-356857489f06' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"8ac00c25-14a3-4617-95c4-365ded80dd46":{"roots":{"references":[{"attributes":{"axis_label":"Broadband","formatter":{"id":"15586","type":"BasicTickFormatter"},"ticker":{"id":"15557","type":"BasicTicker"}},"id":"15556","type":"LinearAxis"},{"attributes":{"callback":null,"end":0.11509172062917213,"js_property_callbacks":{"change:value":[{"id":"15581","type":"CustomJS"}]},"start":-1.1279433893629371,"step":0.0024860702199842187,"title":"Optical","value":-0.3577626808955013},"id":"15579","type":"Slider"},{"attributes":{"ticker":{"id":"15557","type":"BasicTicker"}},"id":"15560","type":"Grid"},{"attributes":{},"id":"15554","type":"LinearScale"},{"attributes":{},"id":"15584","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":-0.08883900262682537,"js_property_callbacks":{"change:value":[{"id":"15581","type":"CustomJS"}]},"start":-3.6362842042585,"step":0.007094890403263349,"title":"UV","value":-2.549488903199783},"id":"15578","type":"Slider"},{"attributes":{"axis_label":"Emitted light","formatter":{"id":"15584","type":"BasicTickFormatter"},"ticker":{"id":"15562","type":"BasicTicker"}},"id":"15561","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"15562","type":"BasicTicker"}},"id":"15565","type":"Grid"},{"attributes":{},"id":"15566","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":1.8684933986507108,"js_property_callbacks":{"change:value":[{"id":"15581","type":"CustomJS"}]},"start":-1.0695024356080174,"step":0.005875991668517456,"title":"IR","value":-0.8867733639162343},"id":"15580","type":"Slider"},{"attributes":{},"id":"15589","type":"Selection"},{"attributes":{"background_fill_color":{"value":"rgb(253, 245, 230)"},"below":[{"id":"15556","type":"LinearAxis"}],"border_fill_color":{"value":"rgb(253, 245, 230)"},"center":[{"id":"15560","type":"Grid"},{"id":"15565","type":"Grid"}],"left":[{"id":"15561","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"15576","type":"GlyphRenderer"}],"title":{"id":"15546","type":"Title"},"toolbar":{"id":"15569","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"15548","type":"DataRange1d"},"x_scale":{"id":"15552","type":"LinearScale"},"y_range":{"id":"15550","type":"DataRange1d"},"y_scale":{"id":"15554","type":"LinearScale"}},"id":"15545","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15562","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"15566","type":"WheelZoomTool"},{"id":"15567","type":"PanTool"},{"id":"15568","type":"ResetTool"}]},"id":"15569","type":"Toolbar"},{"attributes":{},"id":"15568","type":"ResetTool"},{"attributes":{},"id":"15588","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"15545","subtype":"Figure","type":"Plot"},0,0],[{"id":"15582","type":"Column"},0,1]]},"id":"15593","type":"GridBox"},{"attributes":{"callback":null,"data":{"Galaxy":{"__ndarray__":"VxAmcFplBMASemkTx8sAwMIxQO4Fd/C/xTqLcZXl1r8HT8iSe7m0vw/5cPAlGqk/vk1rdybrxD/yveqtJNHOP7je0WW+I9I/oJhUHGsU1z8ylMEWskjSPwAAAAAAAAAAq9N0SZUjzL/XYt5nFfDmvwR+n4hyYOy/","dtype":"float64","shape":[15]},"index":["bayes.FUV","bayes.NUV","bayes.u_prime","bayes.g_prime","bayes.r_prime","bayes.i_prime","bayes.z_prime","bayes.vista.vircam.Y","bayes.vista.vircam.J","bayes.vista.vircam.H","bayes.vista.vircam.Ks","bayes.WISE1","bayes.WISE2","bayes.WISE3","bayes.WISE4"],"lambda":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},"selected":{"id":"15589","type":"Selection"},"selection_policy":{"id":"15588","type":"UnionRenderers"}},"id":"15544","type":"ColumnDataSource"},{"attributes":{},"id":"15586","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"15595","type":"ToolbarBox"},{"id":"15593","type":"GridBox"}]},"id":"15596","type":"Row"},{"attributes":{},"id":"15567","type":"PanTool"},{"attributes":{"line_width":2,"x":{"field":"lambda"},"y":{"field":"Galaxy"}},"id":"15574","type":"Line"},{"attributes":{"args":{"A":[[0.0,0.0,-2.3365263664841794e-17,0.15656733580836818,0.9431057341653999,-0.6162969177879617,-0.5096341476376635,0.037038169721366296,0.05594715604294425,-0.2867337481385754,-0.15008344206718388,-0.06370247683491086,-0.07980507776966572,0.025401741297560478,9.470059357524167e-17],[-0.0,-0.0,-1.0735418971240875e-16,0.26847926309456943,-0.009439703941295386,0.4527665052033084,-1.0229633335636474,-0.24730354953819478,-0.07977175917263926,-0.5213338607224071,-0.4664408026559162,-0.3100641866804108,-0.23172494397020832,0.04127309020426453,2.7290700945682255e-16],[-0.0,-0.0,-5.30345675017835e-17,-0.1859786273926521,-0.14578338097752266,-0.13571468804887526,-0.015127419553533627,0.03757370653286976,0.08813012005942364,-0.526979911971951,-1.0035823569656346,-0.19651158523395806,-0.36186000574993776,0.31765393206798154,8.358435767088677e-16],[-0.0,-0.0,-1.1846245982991987e-16,-0.24695686532653155,-0.12704294170549538,-0.08428197071520846,-0.17995501788511423,0.10757747667984148,-0.41885843325589056,-0.7704229584730793,0.20809606396292651,-0.6011737808519139,-0.1687012973414072,0.28530467034186285,5.153788792677858e-16],[-0.0,-0.0,-7.494870935910002e-17,-0.30415638773971965,-0.1997249834534644,-0.17513692315307708,-0.2318681931049308,-0.13383667618381337,0.20666397398118375,-0.4159177978015493,-0.2103271506875673,-0.3621284863382197,-0.17699393465151841,-0.8022093216955656,-1.0742084051373184e-15],[0.0,0.0,-6.88321716277061e-17,-0.31584317115947325,-0.22558332139486312,-0.09981049735227136,-0.38794227627370864,-0.13932584981843094,0.05155509737240053,-0.5388138791640567,0.08190617845482649,0.6308354603853835,-0.42811971446682795,0.09334046532993234,1.1879790549008e-16],[0.0,0.0,-6.076221598044001e-17,-0.36055079643033033,-0.20817865830734594,-0.14405801138315788,-0.38694226960602063,-0.07335719455040567,-0.012521565724165925,-0.279632272113394,-0.2699605928080297,0.04588128403755018,0.7828317557416766,0.11857860991911964,-4.3893666267351503e-17],[-0.0,-0.0,1.1431566749220523e-16,-0.36974510190165055,-0.19871519132564078,-0.20428684761774824,-0.39688405035818125,-0.2810523634116354,0.42863695067117275,0.2788806634561445,0.06873697701501318,-0.40443846353519514,-0.24920365288242505,0.37884244458232114,7.373158590970739e-16],[-0.0,-0.0,6.279361679111666e-17,-0.37908541887960967,-0.0785172878293996,-0.10926019047439868,-0.3590908100245211,0.23621656485108497,-0.6492495003360597,0.37058760406682256,-0.2598261829656609,0.015123594073557027,-0.22593803697345863,-0.1330536513896145,-5.243011499636227e-17],[-0.0,-0.0,1.6906148262779159e-34,3.1264966216118344e-28,-1.1283632535860501e-24,-1.4652553871788753e-23,7.775818232292213e-21,5.617417979822536e-19,-9.816295578019084e-19,9.463395493561255e-19,-2.856041064978292e-17,-1.7793740654111998e-16,-2.462884284669709e-16,1.550677581706323e-15,-1.0],[0.0,0.0,-9.05806619389866e-18,-0.12730013041838054,-0.0003603072118549652,0.2302476071662663,-0.21045971773288433,0.8516867412876274,0.39944647256403254,-0.048637600045432806,0.052326504494797525,-0.016253931397956348,-0.008913109796529768,0.00347580905581614,-2.998889566807462e-18],[0.0,0.0,4.469314012893342e-17,0.915494670068448,-0.4522323012823319,-0.6578016260149067,0.0038556680607562343,0.30280259403326204,0.00047274588341607695,0.26858273065271604,0.19633677182265644,0.109353173636525,0.0918967645192102,-0.025858012346256082,-1.1925500832946005e-16],[-1.0,-0.0,1.1102230246251565e-16,-0.26761496323309053,-0.42944973052623336,0.35804885256731933,0.6245986888324621,0.003538814346662471,-0.0011695397825634349,0.4205738402556802,0.2857701498253392,0.16699197930744256,0.15772380429892943,-0.044775287475587136,-1.9227774486932465e-16],[-0.0,-1.0,1.1102230246251565e-16,0.6945274396237994,-0.16236793416487388,-0.2848139749153034,0.43088785852524475,0.243732869452966,0.033275081538690535,0.5619397437058702,0.40370532452025765,0.24497988154286607,0.21637762791824175,-0.06100528966867547,-2.6953993970015643e-16],[0.0,0.0,-0.9999999999999999,0.30854814646861206,0.3168958086127043,-0.04241436218571097,0.6691512771876831,0.10320354995226552,0.04394652480150279,0.7508129481795446,0.532237236482123,0.34574567458570676,0.31126489026016835,-0.08452062001035238,-3.739749644028018e-16]],"A_FUV":[-0.6666361058226346,-0.15054034728368854,0.44983521583413727,-0.21264321705248862,-0.4532805156657324,0.2148917718430188,0.18023823628850125,-0.007373858940438719,-0.015539109584769494,0.027222206653495798,0.011859587445568288,-0.007326340916873323,-0.0022999631471693543,-0.0010122294278868912,0.0],"A_W4":[-0.2416128177852398,0.703365853371344,-0.3702910681744455,-0.43891346786994206,0.1277871885556663,0.2711319572122634,0.09561998407493885,-0.13236300206029655,-0.007414126313535982,-0.015613868163411768,-0.017824114134356094,-0.003936545613167611,0.001174066576929939,0.0007935235874534859,2.069750442077167e-18],"A_g":[-0.18187927349438882,-0.18471221620467665,-0.4261483057027532,0.2111013573441344,0.026945265973966594,-0.00556176391512919,0.4783494900666447,0.08964409341565224,0.02466133609511176,0.5002484657162494,0.3533569689811526,0.222962090149924,0.20129928773767417,-0.05543043802582948,-1.8479446598235485e-16],"FUV":{"id":"15578","type":"Slider"},"SDSSg":{"id":"15579","type":"Slider"},"W4":{"id":"15580","type":"Slider"},"pcamean":[-1.461870552727398,-1.2516630245451585,-0.8237695705614415,-0.29210183862164874,-0.10133452127357125,0.006195660452136923,0.08614083337123335,0.15805820172919144,0.19621979314528945,0.25777401474347766,0.2257873003148594,0.0,-0.20629787447659167,0.10022709336610236,0.29700244249854457],"source":{"id":"15544","type":"ColumnDataSource"}},"code":"\\n        const data = source.data;\\n        \\n        data[\\"Galaxy\\"][0] = FUV.value;\\n        data[\\"Galaxy\\"][3] = SDSSg.value;\\n        data[\\"Galaxy\\"][14] = W4.value;\\n\\n        var fuv = data[&#x27;Galaxy&#x27;][0] - pcamean[0];\\n        var g = data[&#x27;Galaxy&#x27;][3] - pcamean[3];\\n        var w4 = data[&#x27;Galaxy&#x27;][14] - pcamean[14];\\n        \\n        var c = [];\\n        for (var i = 0; i &lt; A_FUV.length; i++){\\n            c.push(-fuv*A_FUV[i] - g*A_g[i] - w4*A_W4[i]);\\n        }\\n        \\n        var x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\\n        \\n        for (var i = 0; i &lt; A.length; i++) {\\n            for (var j = 0; j &lt; A[0].length; j++){\\n                x[i] += A[i][j]*c[j];\\n            }\\n        }\\n        \\n        var x2 = [fuv, x[0], x[1], g, x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], w4];\\n        \\n        for (var i = 0; i &lt; pcamean.length; i++){\\n            x2[i] += pcamean[i];\\n        }\\n\\n        for (var i = 0; i &lt; pcamean.length; i++){\\n            data[\\"Galaxy\\"][i] = x2[i];\\n        }\\n        \\n        source.change.emit();\\n    "},"id":"15581","type":"CustomJS"},{"attributes":{"text":"Spectral energy distribution"},"id":"15546","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"lambda"},"y":{"field":"Galaxy"}},"id":"15575","type":"Line"},{"attributes":{"children":[{"id":"15578","type":"Slider"},{"id":"15579","type":"Slider"},{"id":"15580","type":"Slider"}]},"id":"15582","type":"Column"},{"attributes":{"callback":null},"id":"15550","type":"DataRange1d"},{"attributes":{"source":{"id":"15544","type":"ColumnDataSource"}},"id":"15577","type":"CDSView"},{"attributes":{"callback":null},"id":"15548","type":"DataRange1d"},{"attributes":{"tools":[{"id":"15566","type":"WheelZoomTool"},{"id":"15567","type":"PanTool"},{"id":"15568","type":"ResetTool"}]},"id":"15594","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"15544","type":"ColumnDataSource"},"glyph":{"id":"15574","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15575","type":"Line"},"selection_glyph":null,"view":{"id":"15577","type":"CDSView"}},"id":"15576","type":"GlyphRenderer"},{"attributes":{},"id":"15557","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"15594","type":"ProxyToolbar"},"toolbar_location":"left"},"id":"15595","type":"ToolbarBox"},{"attributes":{},"id":"15552","type":"LinearScale"}],"root_ids":["15596"]},"title":"Bokeh Application","version":"1.3.4"}}';
                  var render_items = [{"docid":"8ac00c25-14a3-4617-95c4-365ded80dd46","roots":{"15596":"fde53e85-c815-49a0-af98-356857489f06"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();