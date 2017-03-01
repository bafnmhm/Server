(function (C) {
    jQuery.extend({
        ht_getcookie: function (W) {
            var k = document.cookie.indexOf(W);
            var i = document.cookie.indexOf(";", k);
            return k == -1 ? "" : unescape(document.cookie.substring(k + W.length + 1, (i > k ? i : document.cookie.length)))
        }, ht_setcookie: function (aa, Z, Y, X, k, W) {
            var i = new Date();
            i.setTime(i.getTime() + Y * 1000);
            document.cookie = escape(aa) + "=" + escape(Z) + (i ? "; expires=" + i.toGMTString() : "") + (X ? "; path=" + X : "; path=/") + (k ? "; domain=" + k : "") + (W ? "; secure" : "")
        }, textFocus: function (W) {
            var k, i, W = W === undefined ? 0 : parseInt(W);
            this.each(function () {
                if (!this.setSelectionRange) {
                    k = this.createTextRange();
                    W === 0 ? k.collapse(false) : k.move("character", W);
                    k.select()
                } else {
                    i = this.value.length;
                    W === 0 ? this.setSelectionRange(i, i) : this.setSelectionRange(W, W)
                }
                this.focus()
            });
            return this
        }
    });
    var w = [];
    var D = [];
    var E = [];
    var G = [];
    var v = 0;
    var y = 0;
    var A = 0;
    var S = 0;
    var U = false;
    var g = false;
    var H = false;
    var z = 0;
    var I = null;
    var m = -1;
    var N = {};
    var f = [];
    var e = [];
    var d = [];
    var b = [];
    var V = [];
    var F = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    var j = [];
    var x = false;
    var c = [];
    for (var R = 0; R < 26; R++) {
        c[R] = []
    }
    var P = [];
    for (var T = 0; T < 5; T++) {
        P[T] = []
    }
    var t = [];
    var s = [];
    var q = [];
    var p = [];
    var o = [];
    var K = [];
    var a = false;
    var L = true;
    var u = 12;
    var h = "简码/汉字";
    var n = "简码/汉字";
    var r = "inp-txt_select";
    var l = "inp-txt";
    var B = false;
    var J = null;
    var Q = null;
    var M = false;
    var O = C.ht_getcookie("hj_favcity");
    C.stationFor12306 = {
        bindInputs: [], get_initInputValue: function () {
            return h
        }, get_initTopInputValue: function () {
            return n
        }, city_Bind: function (k) {
            if (k.length == 0) {
                return
            }
            var i = "";
            C.each(k, function (W) {
                if (O == k[W][2]) {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'><b>" + k[W][1] + "</b></span></div>\n"
                } else {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'>" + k[W][1] + "</span><span style='float:right;' class='ralign'>" + k[W][3] + "</span></div>\n"
                }
            });
            C("#panel_cities").html(i);
            C(".cityline").mouseover(function () {
                C.stationFor12306.city_shiftSelect(this)
            }).click(function () {
                C.stationFor12306.city_confirmSelect();
                E = C.stationFor12306.filterCity("");
                C.stationFor12306.city_showlist(0)
            });
            C.stationFor12306.city_shiftSelect(C("#citem_0"))
        }, city_changeSelectIndex: function (i) {
            var k = A + i;
            if (k == -1) {
                C.stationFor12306.city_showlist(z - 1);
                C.stationFor12306.city_shiftSelect(C("#citem_" + (G.length - 1)))
            } else {
                if (k == G.length) {
                    C.stationFor12306.city_showlist(z + 1);
                    C.stationFor12306.city_shiftSelect(C("#citem_0"))
                } else {
                    C.stationFor12306.city_shiftSelect(C("#citem_" + k))
                }
            }
        }, city_confirmSelect: function () {
            I.val(S[1]);
            curObjCode.val(S[2]);
            if (B) {
                C.stationFor12306.setStationInCookies(S[1], S[2])
            }
            C("#form_cities").css("display", "none");
            C("#form_cities2").css("display", "none");
            C("#form_cities3").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(S[2])
            }
            if (J) {
                J(I, curObjCode)
            }
        }, city_shiftSelect: function (k) {
            if (v != k) {
                if (v != 0) {
                    C(v).removeClass("citylineover").addClass("cityline").css("backgroundColor", "white")
                }
                if (k != 0) {
                    try {
                        v = k;
                        var i = C(v).removeClass("cityline").addClass("citylineover").css("backgroundColor", "#c8e3fc");
                        A = Number(i.attr("id").split("_")[1]);
                        S = w[Number(i.attr("cturn"))];
                        C("#cityid").val(S[2])
                    } catch (W) {
                    }
                }
            }
        }, city_shiftSelectInLi: function (i) {
            if (y != i) {
                if (y != 0) {
                    C(y).removeClass("ac_over").addClass("ac_odd")
                }
                if (i != 0) {
                    try {
                        y = i;
                        C(y).removeClass("ac_odd").addClass("ac_over")
                    } catch (k) {
                    }
                }
            }
        }, js: function (W) {
            var k;
            for (k = 1; k <= 7; k++) {
                if (C("#nav_list" + k).attr("class")) {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            for (k = 1; k <= 7; k++) {
                if (k == W) {
                    C("#ul_list" + k).css("display", "block");
                    C("#nav_list" + k).addClass("action");
                    if (k == 1 || k == 7) {
                        C("#flip_cities2").css("display", "none")
                    }
                    if (k > 1 && k < 7) {
                        var Y = C.stationFor12306.tHtmlGetCityName(W - 1, -1, 0);
                        if (Y > u) {
                            var X = Math.ceil(Y / u);
                            if (X > 1) {
                                C.stationFor12306.pageDesigh(X, 0, k)
                            }
                            C("#flip_cities2").css("display", "block")
                        } else {
                            C("#flip_cities2").css("display", "none")
                        }
                    } else {
                        I.focus()
                    }
                } else {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            if (1 != W) {
                C(".ac_even").on("mouseover", function () {
                    C.stationFor12306.city_shiftSelectInLi(this)
                }).on("click", function () {
                    I.val(C(this).text());
                    curObjCode.val(C(this).attr("data"));
                    if (B) {
                        C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                    }
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    C.stationFor12306.setStationStyle();
                    if (L) {
                        C.stationFor12306.LoadJS(C(this).attr("data"))
                    }
                    if (J) {
                        J(I, curObjCode)
                    }
                })
            }
        }, tHtmlGetCityName: function (k, i, X) {
            switch (k) {
                case 0:
                    if (i == -1) {
                        return D.length
                    }
                    if (i == -2) {
                        return D
                    }
                    return D[i];
                    break;
                case 1:
                    if (i == -1) {
                        return c[3].length
                    }
                    if (i == -2) {
                        return f
                    }
                    if (f.length > u) {
                        var W = Math.ceil((f.length) / u);
                        if (W > 1) {
                            t = f.slice(u * (X), Math.min(u * (X + 1), f.length));
                            return t[i]
                        }
                    }
                    return f[i];
                    break;
                case 2:
                    if (i == -1) {
                        return c[7].length
                    }
                    if (i == -2) {
                        return e
                    }
                    if (e.length > u) {
                        var W = Math.ceil((e.length) / u);
                        if (W > 1) {
                            s = e.slice(u * (X), Math.min(u * (X + 1), e.length));
                            return s[i]
                        }
                    }
                    return e[i];
                    break;
                case 3:
                    if (i == -1) {
                        return c[11].length
                    }
                    if (i == -2) {
                        return d
                    }
                    if (d.length > u) {
                        var W = Math.ceil((d.length) / u);
                        if (W > 1) {
                            q = d.slice(u * (X), Math.min(u * (X + 1), d.length));
                            return q[i]
                        }
                    }
                    return d[i];
                    break;
                case 4:
                    if (i == -1) {
                        return c[18].length
                    }
                    if (i == -2) {
                        return b
                    }
                    if (b.length > u) {
                        var W = Math.ceil((b.length) / u);
                        if (W > 1) {
                            p = b.slice(u * (X), Math.min(u * (X + 1), b.length));
                            return p[i]
                        }
                    }
                    return b[i];
                    break;
                case 5:
                    if (i == -1) {
                        return c[24].length
                    }
                    if (i == -2) {
                        return V
                    }
                    if (V.length > u) {
                        var W = Math.ceil((V.length) / u);
                        if (W > 1) {
                            o = V.slice(u * (X), Math.min(u * (X + 1), V.length));
                            return o[i]
                        }
                    }
                    return V[i];
                    break;
                default:
                    return "error";
                    break
            }
        }, closeShowCity: function () {
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.each(C.stationFor12306.bindInputs, function (Y, X) {
                var W = "#" + X;
                var k = "#" + X + "Text";
                var i = C(k).val();
                if ("" == i) {
                    C(k).val(h);
                    C.stationFor12306.from_to_station_class_gray(C(k));
                    C(W).val("")
                }
            })
        }, showAllCity: function () {
            var ab = "";
            var k = "440px";
            if (B) {
                k = "400px"
            }
            ab = '<div class="com_hotresults" id="thetable" style="width:' + k + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (B) {
                ab = ab + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
            }
            ab = ab + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li></ul>';
            if (B) {
                ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
                var ac = C.stationFor12306.getStationInCookies();
                var Y = ac.length;
                if (Y > 2) {
                    M = true;
                    for (var ad = 0; ad < Y; ad++) {
                        ab += '<li class="ac_even"   title="' + ac[ad][0] + '" data="' + ac[ad][1] + '">' + ac[ad][0] + "</li>"
                    }
                }
                ab += "</ul>"
            }
            ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
            var X = C.stationFor12306.tHtmlGetCityName(0, -1, 0);
            var aa = "";
            if (!B) {
                aa = " openLi"
            }
            for (var ad = 0; ad < X; ad++) {
                ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + "</li>"
            }
            ab += "</ul>";
            for (var ae = 2; ae <= 6; ae++) {
                var Z = ae - 1;
                var i = C.stationFor12306.tHtmlGetCityName(Z, -1, 0);
                if (i > u) {
                    var W = Math.ceil((i) / u);
                    if (W > 1) {
                        ab += '<div id="ul_list' + ae + '">';
                        C.stationFor12306.pageDesigh(W, 0, ae)
                    }
                    C("#flip_cities2").css("display", "block")
                } else {
                    ab += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + ae + '">';
                    C("#flip_cities2").css("display", "none");
                    var aa = "";
                    if (!B) {
                        aa = " openLi"
                    }
                    for (var ad = 0; ad < C.stationFor12306.tHtmlGetCityName(Z, -1, 0); ad++) {
                        ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + "</li>"
                    }
                }
                ab += "</div>"
            }
            ab += '<div id="flip_cities2"> 翻页控制区</div>';
            ab += "</div>";
            C("#panel_cities2").html(ab);
            C("#thetable").on("click", function () {
                if (C("#form_cities2").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C("#form_cities").on("click", function () {
                if (C("#form_cities").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C(".ac_even").on("mouseover", function () {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function () {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            });
            C("#flip_cities2").css("display", "none");
            return w
        }, LoadJS: function (W) {
            if (((typeof(mm_addjs) != "undefined")) && ("" != mm_addjs) && (mm_addjs == 1)) {
                var k = document.getElementsByTagName("HEAD").item(0);
                var i = document.createElement("SCRIPT");
                i.src = mm_srcjs + W + ".js";
                i.type = "text/javascript";
                k.appendChild(i)
            }
        }, addZMHtml: function (X, Y) {
            var W = "";
            if (X && X.length > 0) {
                var Z = X[0][0].charAt(0);
                W += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
                W += '<li class="ac_letter">' + Z.toUpperCase() + "</li>";
                for (var i = 0; i < 12; i++) {
                    var k = X[i];
                    if (k) {
                        W += '<li class="ac_even' + Y + '"   title="' + k[1] + '" data="' + k[2] + '">' + k[1] + "</li>"
                    } else {
                        W += '<li class="ac_even' + Y + '" </li>'
                    }
                }
                W += "</ul>"
            }
            return W
        }, pageDesigh: function (Z, ac, ad) {
            var W = "";
            if (Z > 1) {
                if (ac == -1) {
                    ac = (Z - 1)
                } else {
                    if (ac == Z) {
                        ac = 0
                    }
                }
                var ab = "";
                if (!B) {
                    ab = " openLi"
                }
                for (var X = 2; X <= 6; X++) {
                    if (X == ad) {
                        var aa = P[X - 2];
                        for (var i = 0; i < aa.length; i++) {
                            K = aa[i].slice(ac * u, (ac + 1) * u);
                            W += C.stationFor12306.addZMHtml(K, ab)
                        }
                    }
                }
                C("#ul_list" + ad).html(W);
                C("#ul_list" + ad).css("height", 270);
                if (W) {
                    var Y = (ac == 0) ? "&laquo;&nbsp;上一页" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac - 1) + "," + ad + ");return false;'>&laquo;&nbsp;上一页</a>";
                    Y += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
                    Y += (ac == Z - 1) ? "下一页&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac + 1) + "," + ad + ")'>下一页&nbsp;&raquo;</a>";
                    C("#flip_cities2").html(Y)
                } else {
                    C("#flip_cities2").html("")
                }
                if (m == 1 | m == 0 | m == 2) {
                    m == -1
                }
                if (I) {
                    I.select()
                }
            } else {
            }
            C(".ac_even").on("mouseover", function () {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function () {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            })
        }, filterCity: function (Z) {
            if (Z.length == 0) {
                C("#top_cities").html(n);
                return w
            }
            var Y = /<\/?[^>]*>/g;
            Z = Z.replace(Y, "");
            var W = [];
            var k = /[^A-z]/.test(Z);
            for (var X = 0; X < w.length; X++) {
                if (C.stationFor12306.isMatchCity(w[X], Z, k)) {
                    W.push(w[X])
                }
            }
            if (W.length > 0) {
                C("#top_cities").html('按"<font color=red>' + Z + '</font>"检索：');
                return W
            } else {
                C("#top_cities").html("无法匹配:<font color=red>" + Z + "</font>");
                return []
            }
        }, replaceChar: function (i, W, k) {
            return i.substr(0, W) + k + i.substr(W + 1, i.length - 1)
        }, isMatchCity: function (Z, ac, W) {
            var ac = ac.toLowerCase();
            var k = [Z[4].toLowerCase(), Z[1], Z[3].toLowerCase()];
            var ab = -1;
            var Y = -1;
            if (W) {
                ac = ac.split("");
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[1].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[1] = C.stationFor12306.replaceChar(k[1], ae, "-");
                        ab = ae
                    } else {
                        return false
                    }
                }
            } else {
                ac = ac.split("");
                var i = true;
                var aa = true;
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[0].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[0] = C.stationFor12306.replaceChar(k[0], ae, "-");
                        ab = ae
                    } else {
                        i = false;
                        break
                    }
                }
                for (var X = 0; X < ac.length; X++) {
                    var ad = k[2].indexOf(ac[X]);
                    if (ad > Y && ad <= X) {
                        k[2] = C.stationFor12306.replaceChar(k[2], ad, "-");
                        Y = ad
                    } else {
                        aa = false;
                        break
                    }
                }
                if ((i == false) && (aa == false)) {
                    return false
                }
            }
            return true
        }, city_showlist_page: function (ad, Y) {
            var Z = "";
            Z += '<div class="citypage">';
            Z += (ad == 0) ? "" : '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad - 1) + ');return false;"><<</a>';
            var ae = ad + 1;
            var aa = Y;
            var ab = 2;
            var ac = 5;
            var k = (ae - ab) > 0 ? (ae + ab > aa ? aa - ac + 1 : ae - ab) : 1;
            var W = k + ac > aa ? aa + 1 : k + ac;
            if (aa < ac) {
                for (var X = 1; X < aa + 1; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            } else {
                for (var X = k; X < W; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            }
            Z += (ad == Y - 1) ? "" : '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad + 1) + ');return false;">>></a>';
            Z += "</div>";
            return Z
        }, city_showlist: function (W) {
            if (E.length > 6) {
                var k = Math.ceil((E.length) / 6);
                if (W == -1) {
                    W = (k - 1)
                } else {
                    if (W == k) {
                        W = 0
                    }
                }
                G = E.slice(6 * (W), Math.min(6 * (W + 1), E.length));
                C.stationFor12306.city_Bind(G);
                var i = "";
                i += C.stationFor12306.city_showlist_page(W, k);
                C("#flip_cities").html(i);
                C("#flip_cities").css("display", "block")
            } else {
                W = 0;
                G = E;
                C.stationFor12306.city_Bind(G);
                C("#flip_cities").css("display", "none")
            }
            z = W;
            if (C("#form_cities").css("display") == "block") {
                a = true;
                I.focus()
            }
        }, fixDivBugInIE6: function (i) {
            try {
                i.bgiframe();
                if (i.width() > C("> ul", i).width()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).width(C("> ul", i).width());
                    i.css("overflow", "scroll")
                }
                if (i.height() > C("> ul", i).height()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).height(C("> ul", i).height());
                    i.css("overflow", "scroll")
                }
            } catch (k) {
            }
        }, clearStation: function (i) {
            m = -1;
            var W = I.val();
            var X = curObjCode.val();
            if (W == "" || X == "") {
                I.val("");
                curObjCode.val("")
            } else {
                var k = W + "|" + X;
                if (typeof(station_names) != "undefined") {
                    if (station_names.indexOf(k) == -1) {
                        I.val("");
                        curObjCode.val("")
                    } else {
                        if ("click" == i) {
                            I.select();
                            if (C("#form_cities").is(":hidden")) {
                                C("#form_cities2").css("display", "block")
                            }
                        }
                    }
                } else {
                    I.val("");
                    curObjCode.val("")
                }
            }
        }, MapCityID: function (W) {
            for (var k = 0; k < w.length; k++) {
                if (w[k][1] == W) {
                    return w[k][2]
                }
            }
            return 0
        }, MapCityName: function (k) {
            for (var W = 0; W < w.length; W++) {
                if (w[W][2] == k) {
                    return w[W][1]
                }
            }
            return ""
        }, SetISPos: function (Y) {
            if (Q) {
                Q(C("#form_cities"), C("#form_cities2"))
            } else {
                C("#form_cities").css("left", Y.position().left);
                C("#form_cities").css("top", Y.position().top + Y.height() + 12);
                C("#form_cities2").css("left", Y.position().left);
                C("#form_cities2").css("top", Y.position().top + Y.height() + 12)
            }
            var X = Y.offset().top;
            var i = C("#search_div");
            var k = C("#choice_div");
            i.css("top", X);
            k.css("top", X);
            var W = Y.offset().left;
            i.css("left", W);
            k.css("left", W)
        }, myHandlerFg: function (i) {
            if (i == null) {
                i.keyCode = 9
            } else {
                if (!i.which && i.which == 13) {
                    i.preventDefault()
                } else {
                    if (i.which && i.keyCode == 13) {
                        i.which = 9
                    }
                }
            }
        }, myHandler2: function (i) {
            if (i == null) {
                i = window.event;
                i.returnValue = false
            } else {
                if (i.which && i.which == 13) {
                    var W = document.getElementById("Upload_Data3");
                    if (document.createEvent) {
                        var k = document.createEvent("MouseEvents");
                        k.initEvent("click", true, false);
                        W.dispatchEvent(k)
                    } else {
                        if (document.createEventObject) {
                            W.fireEvent("onclick")
                        }
                    }
                } else {
                    if (!i.which && i.which == 13) {
                        i.preventDefault()
                    }
                }
            }
        }, from_to_station_class_plain: function (i) {
            if (l && l != "") {
                i.removeClass(l)
            }
            if (r && r != "") {
                i.addClass(r)
            }
        }, from_to_station_class_gray: function (i) {
            if (r && r != "") {
                i.removeClass(r)
            }
            if (l && l != "") {
                i.addClass(l)
            }
        }, setStationStyle: function () {
            var i = I.val();
            if (i == "") {
                I.val(h);
                C.stationFor12306.from_to_station_class_gray(I);
                curObjCode.val("")
            } else {
                C.stationFor12306.from_to_station_class_plain(I)
            }
        }, setCurValue: function () {
            I.val(S[1]);
            curObjCode.val(S[2])
        }, bindEvent: function (i) {
            var W = "#" + i;
            var k = "#" + i + "Text";
            C(k).keydown(function (Y) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                L = true;
                C("#form_cities2").css("display", "none");
                y = 0;
                var X = C(k).width();
                if (-[1,]) {
                    X = X - 4
                }
                X = X < 220 ? 220 : X;
                C("#form_cities").css("width", X);
                C("#form_cities").css("display", "block");
                C(".AbcSearch li").removeClass("action");
                C(".popcitylist").css("display", "none");
                if (M && B) {
                    C("#ul_list7").css("display", "block");
                    C("#nav_list7").addClass("action")
                } else {
                    C("#nav_list1").addClass("action");
                    C("#ul_list1").css("display", "block")
                }
                C("#flip_cities2").css("display", "none");
                C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                Y = Y || window.event;
                if (Y.keyCode == 40) {
                    C.stationFor12306.city_changeSelectIndex(1);
                    C("#form_cities").css("display", "block");
                    C.stationFor12306.SetISPos(I);
                    C.stationFor12306.setCurValue()
                } else {
                    if (Y.keyCode == 38) {
                        C.stationFor12306.city_changeSelectIndex(-1);
                        C.stationFor12306.setCurValue();
                        C("#form_cities").css("display", "block");
                        C.stationFor12306.SetISPos(I)
                    } else {
                        if (Y.keyCode == 13) {
                            C.stationFor12306.city_confirmSelect();
                            if (document.addEventListener) {
                                document.addEventListener("keypress", C.stationFor12306.myHandlerFg, true)
                            } else {
                                evt = window.event;
                                evt.keyCode = 9
                            }
                        }
                    }
                }
            }).focus(function () {
                L = true;
                if (a) {
                    C("#form_cities2").css("display", "none");
                    y = 0;
                    a = false;
                    m = -1
                } else {
                    if (m == -1) {
                        C(".AbcSearch li").removeClass("action");
                        C(".popcitylist").css("display", "none");
                        C("#flip_cities2").css("display", "none");
                        if (M && B) {
                            C("#ul_list7").css("display", "block");
                            C("#nav_list7").addClass("action")
                        } else {
                            C("#nav_list1").addClass("action");
                            C("#ul_list1").css("display", "block")
                        }
                        C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                        C("#form_cities2").css("display", "block");
                        for (var X = 2; X <= 6; X++) {
                            C("#ul_list" + X).css("height", 0)
                        }
                    }
                }
                I = C(k);
                curObjCode = C(W);
                m = 0;
                U = true;
                C.stationFor12306.SetISPos(I)
            }).blur(function () {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = false;
                L = true;
                if (!g && !H) {
                    C.stationFor12306.clearStation("blur");
                    U = false;
                    C("#form_cities").css("display", "none");
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    E = C.stationFor12306.filterCity("");
                    C.stationFor12306.city_showlist(0);
                    C.stationFor12306.setStationStyle()
                }
            }).keyup(function (X) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                X = X || window.event;
                if (X.keyCode != 40 && X.keyCode != 38 && X.keyCode != 37 && X.keyCode != 39 && X.keyCode != 13 && X.keyCode != 9) {
                    E = C.stationFor12306.filterCity(I.val());
                    C.stationFor12306.city_showlist(0)
                }
            }).click(function () {
                C.stationFor12306.clearStation("click")
            });
            C.stationFor12306.bindInputs.push(i)
        }, getStationInCookies: function () {
            var W = [];
            var k = C.ht_getcookie("_city_name_save_station");
            if (k) {
                var i = k.split(",");
                if (i && i.length > 0) {
                    C.each(i, function (aa, Z) {
                        var X = Z.split("#");
                        var Y = [];
                        Y[0] = X[0];
                        Y[1] = X[1];
                        W[aa] = Y
                    })
                }
            }
            return W
        }, setStationInCookies: function (af, W) {
            var ac = C.stationFor12306.getStationInCookies();
            var Z = [];
            var ag = ac.length;
            var Y = true;
            var ah = 10;
            for (var aa = 0; aa < ag; aa++) {
                if (ac[aa][0] == af && ac[aa][1] == W) {
                    Y = false
                }
                Z.push(ac[aa])
            }
            if (Y) {
                Z.push([af, W])
            }
            var ab = Z;
            var X = "";
            var ad = ab.length;
            var aa = 0;
            if (ad > ah) {
                aa = 1
            }
            var i = aa;
            if (ad > 1) {
                C("#ul_list7").html("");
                M = true
            }
            var ae = "";
            for (; aa < ad; aa++) {
                if (aa > i) {
                    X += ","
                }
                X += ab[aa][0] + "#" + ab[aa][1];
                if (M && B) {
                    ae += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + ab[aa][0] + '" data="' + ab[aa][1] + '">' + ab[aa][0] + "</li>"
                }
            }
            if (M && B) {
                C("#ul_list7").html(ae)
            }
            C.ht_setcookie("_city_name_save_station", X, 365 * 24 * 60 * 60)
        }, li_click: function (i) {
            I.val(C(i).text());
            curObjCode.val(C(i).attr("data"));
            if (B) {
                C.stationFor12306.setStationInCookies(C(i).text(), C(i).attr("data"))
            }
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(C(i).attr("data"))
            }
            if (J) {
                J(I, curObjCode)
            }
        }, init: function (ac, ad) {
            if (typeof(ad) != "undefined") {
                if (typeof(ad._init_input) != "undefined") {
                    h = ad._init_input
                }
                if (typeof(ad._top_4_initInput) != "undefined") {
                    n = ad._top_4_initInput
                }
                if (typeof(ad.confirmCallBack) != "undefined") {
                    J = ad.confirmCallBack
                }
                if (typeof(ad._selected_class) != "undefined") {
                    r = ad._selected_class
                }
                if (typeof(ad._unselected_class) != "undefined") {
                    l = ad._unselected_class
                }
                if (typeof(ad._12306_openFavorite) != "undefined") {
                    B = ad._12306_openFavorite
                }
                if (typeof(ad.position) != "undefined") {
                    Q = ad.position
                }
            }
            if (typeof(station_names) != "undefined") {
                var Z = station_names.split("@");
                for (var Y = 0; Y < Z.length; Y++) {
                    var ab = Z[Y];
                    var aa = ab.toString().charAt(0);
                    for (var X in F) {
                        if (aa == F[X]) {
                            c[X].push(ab.split("|"))
                        }
                    }
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        if (O != "" && ab[2] == O) {
                            favcity = ab;
                            w.unshift(ab);
                            if (Y > 6) {
                                w.push(ab)
                            }
                        } else {
                            w.push(ab)
                        }
                    }
                }
                f = c[0].concat(c[1]).concat(c[2]).concat(c[3]).concat(c[4]);
                e = c[5].concat(c[6]).concat(c[7]).concat(c[8]).concat(c[9]);
                d = c[10].concat(c[11]).concat(c[12]).concat(c[13]).concat(c[14]);
                b = c[15].concat(c[16]).concat(c[17]).concat(c[18]).concat(c[19]);
                V = c[20].concat(c[21]).concat(c[22]).concat(c[23]).concat(c[24]).concat(c[25]);
                P[0] = [c[0], c[1], c[2], c[3], c[4]];
                P[1] = [c[5], c[6], c[7], c[8], c[9]];
                P[2] = [c[10], c[11], c[12], c[13], c[14]];
                P[3] = [c[15], c[16], c[17], c[18], c[19]];
                P[4] = [c[20], c[22], c[23], c[24], c[25]];
                for (var Y = 0; Y < w.length; Y++) {
                    w[Y].push(Y)
                }
            }
            if (typeof(favorite_names) != "undefined") {
                var W = favorite_names.split("@");
                for (var Y = 0; Y < W.length; Y++) {
                    var ab = W[Y];
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        D.push(ab)
                    }
                }
                for (var Y = 0; Y < D.length; Y++) {
                    D[Y].push(Y)
                }
            }
            E = C.stationFor12306.filterCity("");
            C.stationFor12306.city_showlist(0);
            C.stationFor12306.showAllCity();
            a = false;
            C.stationFor12306.fixDivBugInIE6(C("#form_cities"));
            C.stationFor12306.fixDivBugInIE6(C("#form_cities2"));
            if (ac && ac.length > 0) {
                C.each(ac, function (k, i) {
                    C.stationFor12306.bindEvent(i)
                })
            }
            C("#form_cities").mousedown(function () {
                g = true
            }).mouseup(function () {
                g = false
            });
            C("#form_cities2").mousedown(function () {
                H = true
            }).mouseup(function () {
                H = false
            })
        }
    }
})(jQuery);
(function () {
    $.stopStation = function (a) {
        var b = this;
        b.init = function () {
            b.options = $.extend({}, $.stopStation.defaultOptions, a);
            if (null == b.options.url || null == b.options.getSearchDate) {
                throw"error options,url can not be null"
            }
            b.options.mouseOnPanel = 0;
            if (!$("#" + b.options.showDivId)[0]) {
                var d = [];
                var c = -1;
                d[++c] = '<div class="station" style="display:none;" id="' + b.options.showDivId + '"><b></b>';
                d[++c] = '<div class="station-info" id="' + b.options.showTitleId + '"></div>';
                d[++c] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
                d[++c] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
                d[++c] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
                d[++c] = '<div class="station-bd"><table><tbody id="' + b.options.showTableId + '"></tbody></table></div></div>';
                $(d.join("")).appendTo($("body:eq(0)"));
                $("#_stopStation_close_id").on("click", b.close)
            }
            $("#" + b.options.showDivId).css("z-index", "20001");
            if (b.options.mouseOutClose) {
                $("#" + b.options.showDivId).on("mouseenter", function (e) {
                    b.options.mouseOnPanel = 1
                }).on("mouseleave", function () {
                    b.options.mouseOnPanel = 0;
                    $("#" + b.options.showDivId).hide().appendTo($("body:eq(0)"));
                    $("#" + b.options.showTableId).html("")
                })
            }
        };
        b.close = function () {
            $("#" + $.stopStation.defaultOptions.showDivId).closest("tr").removeAttr("style");
            $("#" + $.stopStation.defaultOptions.showDivId).removeAttr("style");
            b.options.mouseOnPanel = 0;
            $("#" + $.stopStation.defaultOptions.showDivId).hide().appendTo($("body:eq(0)"));
            $("#" + $.stopStation.defaultOptions.showTableId).html("")
        };
        b.open = function (f, j, h, e, i, c) {
            $("#" + $.stopStation.defaultOptions.showDivId).attr("style", "z-index:20001");
            if (a.timer) {
                clearTimeout(a.timer)
            }
            var g = a.getSearchDate();
            if (i && "" != i && null != i) {
                var d = formatDate(i);
                if ("-" != d) {
                    g = formatDate(i)
                } else {
                    g = a.getSearchDate()
                }
            } else {
                g = a.getSearchDate()
            }
            $.ajax({
                url: a.url,
                type: "get",
                isTakeParam: false,
                beforeSend: function (k) {
                    k.setRequestHeader("If-Modified-Since", "0");
                    k.setRequestHeader("Cache-Control", "no-cache")
                },
                data: {train_no: j, from_station_telecode: h, to_station_telecode: e, depart_date: g},
                success: function (p) {
                    var t = p.data.data;
                    if (t && t.length > 0) {
                        var r = [];
                        var u = -1;
                        for (var q = 0; q < t.length; q++) {
                            var l = t[q];
                            if (q == 0) {
                                var n = null;
                                n = l.train_class_name;
                                var s = l.service_type;
                                if ("0" == s) {
                                    c = "无空调"
                                } else {
                                    c = "有空调"
                                }
                                if (!n) {
                                    n = "&nbsp;&nbsp;"
                                }
                                $("#" + $.stopStation.defaultOptions.showTitleId).html('<span class="item1">' + l.station_train_code + '次      </span><span class="item2">' + l.start_station_name + "<em>--></em>" + l.end_station_name + '</span><span class="item3">' + n + '</span><span class="item4">' + c + "</span>").find("span").css("color", "#333")
                            }
                            var m = "";
                            if (!l.isEnabled) {
                                m = " style='color: #999;' "
                            }
                            r[++u] = '<tr><td width="50" class="tc" ' + m + ">" + l.station_no + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.station_name + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.arrive_time + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.start_time + "</td>";
                            r[++u] = "<td " + m + ">" + l.stopover_time + "</td></tr>"
                        }
                        $("#" + $.stopStation.defaultOptions.showTableId).html(r.join(""));
                        var o = $("#" + $.stopStation.defaultOptions.appendTo + f);
                        $("#" + $.stopStation.defaultOptions.showDivId).appendTo(o).show();
                        $(".ticket-info").filter("div").attr("style", "");
                        o[0].style["z-index"] = 19999;
                        if (!(navigator.appVersion.indexOf("MSIE 6") > -1)) {
                        } else {
                        }
                    }
                }
            })
        };
        b.init();
        myStopStation = b;
        return b
    };
    $.fn.stopStation = function () {
        return (new $.stopStation(Array.prototype.slice.call(arguments)[0]))
    };
    $.stopStation.defaultOptions = {
        url: null,
        mouseOutClose: false,
        showDivId: "train_div_",
        showTableId: "train_table_",
        showTitleId: "train_span_",
        appendTo: "train_num_",
        getSearchDate: null
    }
})();
var myStopStation = function () {
};
var formatDate = function (b) {
    if (b && (b.length == 8)) {
        var c = b.substring(0, 4);
        var d = b.substring(4, 6);
        var a = b.substring(6, 8);
        return c + "-" + d + "-" + a
    } else {
        return "-"
    }
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var box;
var countDown = null;
var ischeckAutoSubmitCode = true;
var hainan_tip;
var firstShow = 1;
var endShow = 20;
var dataNumber = 0;
var change_dates_arr = [];
var isOther = true;
var dwTranTimeStr;
var ydTranTimeStr;
var uninputmsg = "用户名／邮箱／手机号码";
var adtimeout = 5000;
var iframeUrl = "https://ad.12306.cn/res/0004.html";
var frameComplete = false;
var iframeOnload = function () {
    frameComplete = true
};
var yxTrainPageSize = 15;
var passengerPageSize = 20;
var timer_time = 3;
var yxTrainChange = "";
var trainListForIE = [];
var queryLeftTicket_times = 0;
var queryLeftTicket_count = 10;
var ifAlertCode = false;
var intervalTime;
(function () {
    var a;
    var a0 = null;
    var bA;
    var bo;
    var N;
    var af;
    var b8;
    var bR;
    var p = false;
    var bZ = 0;
    var ax;
    var bb;
    var x;
    var ac;
    var ce;
    var a8 = new Array();
    var bO = new Array();
    var bY = new Array();
    var W = new Array();
    var bJ = new Array();
    var K;
    var aC = new Array();
    tickets_info = new Array();
    var a1 = true, b1 = true, aW = true, ay = "starttime";
    var aB = true;
    var bw = [];
    var be = [];
    var bQ = [];
    var aN;
    var H = [];
    var bP = "";
    var b6 = "";
    var a6 = "";
    var g = "";
    var D = "";
    $(document).ready(function () {
        $.init_ul4li();
        f();
        Y();
        y();
        ab();
        F();
        az();
        a3();
        bu();
        clickCheckBoxName();
        bz();
        bT();
        aq();
        ag();
        b2();
        A();
        aV();
        bF();
        $("#float").headerFloat();
        $(window).scroll(function () {
            if (a0 != null && (!a0.isHidden())) {
                $("#floatTable").hide();
                $(window).scrollTop(a)
            }
        });
        $.stopStation({
            url: ctx + "czxx/queryByTrainNo", getSearchDate: function () {
                return train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
            }
        });
        ba();
        ci();
        b3();
        o();
        R();
        ad();
        bP = $("#fromStationText").val();
        b6 = $("#toStationText").val();
        $("#showOnlyTicA").bind("click", function () {
            $("#filterTic").attr("checked", "checked");
            bf();
            $jpopup.startOrHiden()
        });
        aN = $.autoSubmit();
        var cn = $("#train_date").val();
        var cl = $("#back_train_date").val();
        if (cl == "") {
            $("#back_train_date").val(cn)
        } else {
            $("#back_train_date").val(cl)
        }
        t();
        aT();
        var cm = new bn("right");
        cm.init();
        G();
        U();
        if (page_show_flag == "preStep") {
            $("#query_ticket").click()
        }
    });
    var bn = function (cs) {
        var ct, cp = {}, cu, cq = this, co = false, cm, cr, cn = {x: 10, y: 66}, cl = {x: 5, y: 1};
        this.move = function () {
            cm = cm + cl.x;
            cr = cr + cl.y;
            if (cm < cn.x) {
                cm = cn.x;
                cl.x = -cl.x
            } else {
                if (cm > cp.dx) {
                    cm = cp.dx;
                    cl.x = -cl.x
                }
            }
            if (cr < cn.y) {
                cr = cn.y;
                cl.y = -cl.y
            } else {
                if (cr > cp.dy) {
                    cr = cp.dy;
                    cl.y = -cl.y
                }
            }
            cu.css(cs, cm + "px").css("top", cr + "px")
        };
        this.init = function () {
            if (co) {
                return
            }
            co = true;
            cu = $(bn.htmlTemplate);
            $(window).on("resize", cq.resize);
            cu.css(cs, cn.x + "px").css({top: cn.y + "px"}).on("mouseenter", cq.stop).on("mouseleave", cq.resize).children("a.close").on("click", cq.hidden);
            $("body").append(cu);
            cm = cn.x;
            cr = cn.y;
            cq.resize()
        };
        this.destory = function () {
            cu.remove()
        };
        this.resize = function () {
            cp.dx = ($(window).width() - $(".content").width()) / 2 - cu.width();
            cp.dy = ($(window).height()) - cu.height();
            if (cp.dx <= (cn.x + Math.abs(cl.x)) || cp.dy <= (cn.y + Math.abs(cl.y))) {
                cq.stop()
            } else {
                cq.alive()
            }
        };
        this.show = function () {
            cu.show();
            cq.alive()
        };
        this.hidden = function () {
            cq.stop();
            cu.hide()
        };
        this.stop = function () {
            clearInterval(ct)
        };
        this.alive = function () {
            cq.stop();
            ct = setInterval(cq.move, 200)
        }
    };
    bn.htmlTemplate = '<div class="fix-yh" id="myfix_yh" style="overflow: hidden;"><iframe onload="iframeOnload()" style="border:0;width:110%;height:110%;" id="ad_frame_query" src="' + iframeUrl + '"></iframe></div>';
    function G() {
        setTimeout(function () {
            if (!frameComplete) {
                var cm = $("#ad_frame_query");
                var cl = cm.get(0);
                var cn = ctx + "resources/images/bg11.png";
                cm.remove();
                $("#myfix_yh").css("background", "url(" + cn + ") no-repeat");
                $("#myfix_yh").html('<a href="javascript:void(0);" class="close" title="关闭">关闭</a>');
                $("#myfix_yh").children("a.close").on("click", function () {
                    $(this).parent().hide()
                })
            }
        }, adtimeout)
    }

    function bG(cm) {
        if (cm) {
            $(".yzm").show();
            $("#orange_msg").hide();
            $("#randCodeForm_id").find("a").css("margin-top", "30px");
            var cl = $("#qr_submit1");
            cl.unbind("click").bind("click", h);
            cl.removeClass("btn92").addClass("btn92s").show();
            ifAlertCode = true
        } else {
            $(".yzm").hide();
            $("#orange_msg").show();
            $("#qr_submit1").hide();
            ifAlertCode = false
        }
    }

    function ad() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == "fc") {
                rqChecked.push($("#back_train_date").val())
            } else {
                rqChecked.push($("#train_date").val())
            }
        }
    }

    function b3() {
        if (ClickWho == "0X00") {
            $("#sf1").attr("disabled", "true");
            $("#sf1_label").addClass("color999");
            $("#sf2").attr("checked", "true");
            $("#query_ticket").removeClass().addClass("btn92s")
        } else {
            if (ClickWho == "00" || ClickWho == "ADULT") {
                $("#sf2").attr("disabled", "true");
                $("#sf2_label").addClass("color999");
                $("#query_ticket").removeClass().addClass("btn92s")
            } else {
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }
        if (isstudentDate) {
            $("#sf2").attr("disabled", "true");
            $("#sf2_label").addClass("color999");
            $("#query_ticket").removeClass().addClass("btn92s")
        }
    }

    function ah() {
        if (!isInitStationDiv) {
            d();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            at();
            isInitJsrenderTemplate = true
        }
    }

    function ba() {
        $("#fromStationText").mouseover(ah);
        $("#toStationText").mouseover(ah);
        $("#dc").mouseover(ah);
        $("#wf").mouseover(ah);
        $("#dc_label").mouseover(ah);
        $("#wf_label").mouseover(ah);
        $("#train_date").mouseover(ah);
        $("#back_train_date").mouseover(ah);
        $("#date_range").mouseover(ah)
    }

    function aA(cl) {
        aK();
        var cs = bJ.length;
        if ($("#query_ticket").html() == "停止查询") {
            if (cs > 0 && aO) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("查询");
                $("#query_ticket").unbind("click");
                bK();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(aY);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var ct = "成功查到" + $("#back_train_date").val() + "的" + bJ[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        } else {
                            var ct = "成功查到" + $("#train_date").val() + "的" + bJ[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        }
                        if (cs == 1) {
                            ct = ct + "车。"
                        } else {
                            ct = ct + "等" + cs + "趟车。"
                        }
                        $("#filterRes").html(ct)
                    }
                }
                jPlayer("play")
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var cr = autoSearchTime / 1000;
                $("#filterTicDiv").html("<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cr + "</font>秒<strong>");
                countDown = window.setInterval(function () {
                    var cu = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
                    if (cr == 0) {
                        cr = autoSearchTime / 1000
                    }
                    cr = cr - 1;
                    if (cr == 4) {
                        cu = cu + "&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                    if (cr == 3) {
                        cu = cu + "&nbsp;&nbsp;&nbsp;"
                    }
                    if (cr == 2) {
                        cu = cu + "&nbsp;&nbsp;"
                    }
                    if (cr == 1) {
                        cu = cu + "&nbsp;"
                    }
                    cu = cu + cr;
                    cu += "</font>秒<strong>";
                    $("#filterTicDiv").html(cu)
                }, 1000);
                $("#filterTic").hide()
            }
        }
        var cq = new Array();
        cq.push('<tbody id="queryLeftTable">');
        var cn = bV(cl);
        if (cn) {
            cl = ca(cl)
        }
        for (var cm = 0; cm < cl.length; cm++) {
            cq.push('<tr id="ticket_');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push('" class="');
            cq.push(cm % 2 ? '">' : 'bgc">');
            cq.push('<td colspan="4" width="370">');
            cq.push('<div class="ticket-info clearfix" id="train_num_');
            cq.push(cm);
            cq.push('">');
            cq.push('<div class="train" id="ticket_');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push('_train">');
            var cp = "";
            if (c(cl[cm].queryLeftNewDTO.station_train_code)) {
                cp = ' style="color:red;" '
            }
            cq.push("<div><a  " + cp + ' title="点击查看停靠站信息" href="javascript:" id="');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.from_station_telecode);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.to_station_telecode);
            if ("1" == cl[cm].queryLeftNewDTO.controlled_train_flag || "2" == cl[cm].queryLeftNewDTO.controlled_train_flag) {
                cq.push('" class="number"');
                cq.push(">")
            } else {
                cq.push('" class="number"  onclick="myStopStation.open(\'');
                cq.push(cm);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.train_no);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.from_station_telecode);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.to_station_telecode);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.start_train_date);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.train_seat_feature);
                cq.push("');\">")
            }
            cq.push(cl[cm].queryLeftNewDTO.station_train_code);
            cq.push("</a>");
            if (cl[cm].queryLeftNewDTO.is_support_card != 0) {
                cq.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
            }
            cq.push("</div>");
            cq.push('<span id="');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.from_station_no);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.to_station_no);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.yp_info);
            cq.push("_");
            cq.push(cl[cm].queryLeftNewDTO.seat_types);
            if ("1" == cl[cm].queryLeftNewDTO.controlled_train_flag || "2" == cl[cm].queryLeftNewDTO.controlled_train_flag) {
                cq.push('" class="lookup"><span style="display:none;">查看票价</span><b style="display:none;" title="查看票价"></b></span>')
            } else {
                cq.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>')
            }
            cq.push("</div>");
            cq.push('<div class="cdz">');
            if (cl[cm].queryLeftNewDTO.from_station_telecode != null && cl[cm].queryLeftNewDTO.from_station_telecode == cl[cm].queryLeftNewDTO.start_station_telecode) {
                cq.push('<strong class="start-s">');
                cq.push(cl[cm].queryLeftNewDTO.from_station_name);
                cq.push("</strong>")
            } else {
                cq.push("<strong>");
                cq.push(cl[cm].queryLeftNewDTO.from_station_name);
                cq.push("</strong>")
            }
            if (cl[cm].queryLeftNewDTO.to_station_telecode != null && cl[cm].queryLeftNewDTO.to_station_telecode == cl[cm].queryLeftNewDTO.end_station_telecode) {
                cq.push('<strong class="end-s">');
                cq.push(cl[cm].queryLeftNewDTO.to_station_name);
                cq.push("</strong>")
            } else {
                cq.push("<strong>");
                cq.push(cl[cm].queryLeftNewDTO.to_station_name);
                cq.push("</strong>")
            }
            cq.push("</div>");
            cq.push('<div class="cds">');
            if ("1" == cl[cm].queryLeftNewDTO.controlled_train_flag || "2" == cl[cm].queryLeftNewDTO.controlled_train_flag) {
                cq.push('<strong class="start-t" style="color:#999;">');
                cq.push("-----");
                cq.push("</strong>");
                cq.push('<strong class="color999">');
                cq.push("-----");
                cq.push("</strong>")
            } else {
                cq.push('<strong class="start-t">');
                cq.push(cl[cm].queryLeftNewDTO.start_time);
                cq.push("</strong>");
                cq.push('<strong class="color999">');
                cq.push(cl[cm].queryLeftNewDTO.arrive_time);
                cq.push("</strong>")
            }
            cq.push("</div>");
            cq.push('<div  class="ls" ');
            cq.push('id="');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push('_ls">');
            if ("1" == cl[cm].queryLeftNewDTO.controlled_train_flag || "2" == cl[cm].queryLeftNewDTO.controlled_train_flag) {
                cq.push('<strong class="color999">');
                cq.push("------");
                cq.push("</strong>");
                cq.push('<strong class="color999">');
                cq.push("------");
                cq.push("</strong>")
            } else {
                cq.push("<strong>");
                cq.push(cl[cm].queryLeftNewDTO.lishi);
                cq.push("</strong>");
                cq.push("<span>");
                cq.push(changeArriveDate(cl[cm].queryLeftNewDTO.start_time, cl[cm].queryLeftNewDTO.lishi));
                cq.push("到达</span>")
            }
            cq.push("</div>");
            cq.push("</div>");
            cq.push("</td>");
            b4(cq, cl[cm].queryLeftNewDTO.swz_num, "SWZ_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "91", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.tz_num, "TZ_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "P1", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.zy_num, "ZY_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "M1", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.ze_num, "ZE_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "O1", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.gr_num, "GR_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "61", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.rw_num, "RW_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "41", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.yw_num, "YW_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "31", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.rz_num, "RZ_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "21", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.yz_num, "YZ_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "11", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.wz_num, "WZ_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "W1", cl[cm].queryLeftNewDTO.controlled_train_flag);
            b4(cq, cl[cm].queryLeftNewDTO.qt_num, "QT_", cl[cm].queryLeftNewDTO.train_no, cl[cm].queryLeftNewDTO.yp_ex, "", cl[cm].queryLeftNewDTO.controlled_train_flag);
            if ("Y" == cl[cm].queryLeftNewDTO.canWebBuy) {
                cq.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="checkG1234(\'');
                cq.push(cl[cm].secretStr);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.start_time);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.train_no);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.from_station_telecode);
                cq.push("','");
                cq.push(cl[cm].queryLeftNewDTO.to_station_telecode);
                cq.push("')\">");
                cq.push(buttonText());
                cq.push("</a>");
                cq.push("</td>")
            } else {
                cq.push('<td align="center" width="80" class="no-br">');
                cq.push(cl[cm].buttonTextInfo);
                cq.push("</td>")
            }
            cq.push("</tr>");
            cq.push('<tr datatran="' + cl[cm].queryLeftNewDTO.station_train_code + '" id="price_');
            cq.push(cl[cm].queryLeftNewDTO.train_no);
            cq.push('" style="display:none;"></tr>')
        }
        cq.push("</tbody>");
        $("#queryLeftTable").replaceWith(cq.join(""));
        if (cn) {
            for (var cm = 0; cm < cl.length; cm++) {
                var co = cl[cm];
                if (c(co.queryLeftNewDTO.station_train_code)) {
                    showTicketPrice($("#SWZ_" + co.queryLeftNewDTO.train_no)[0])
                }
            }
        }
    }

    function ca(cm) {
        if (cm && cm.length > 0) {
            var cq = [];
            var cl = [];
            for (var cn = 0, co = cm.length; cn < co; cn++) {
                var cp = cm[cn];
                if (c(cp.queryLeftNewDTO.station_train_code)) {
                    cq.push(cp)
                } else {
                    cl.push(cp)
                }
            }
            cm = cq.concat(cl)
        }
        return cm
    }

    function c(cn) {
        if (DW_TRAINS && DW_TRAINS.length) {
            for (var cl = 0, cm = DW_TRAINS.length; cl < cm; cl++) {
                if (cn == DW_TRAINS[cl]) {
                    return true
                }
            }
        } else {
            return false
        }
        return false
    }

    function bV(cl) {
        if (cl && cl.length > 0) {
            if (DW_TRAINS && DW_TRAINS.length) {
                for (var co = 0, cq = cl.length; co < cq; co++) {
                    var cp = cl[co].queryLeftNewDTO.station_train_code;
                    for (var cm = 0, cn = DW_TRAINS.length; cm < cn; cm++) {
                        if (cp == DW_TRAINS[cm]) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    function ae(cr, cl) {
        var cs, cp, co;
        var cn;
        co = cr["leftTicketDTO.train_date"];
        if (hainan_limit_start_traindate && C(co) >= C(hainan_limit_start_traindate)) {
            if (hainan_limit_from_telcode && hainan_limit_to_telcode) {
                for (var cm = 0, cq = cl.length; cm < cq; cm++) {
                    cs = cl[cm].queryLeftNewDTO.from_station_telecode;
                    cp = cl[cm].queryLeftNewDTO.to_station_telecode;
                    cn = cl[cm].buttonTextInfo;
                    if (hainan_limit_from_telcode.indexOf(cs) > -1 && hainan_limit_to_telcode.indexOf(cp) > -1 && cn.indexOf("起售") > -1) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function b4(cp, cm, cu, cq, cn, ct, co) {
        cn = cn.replace("F", "4").replace("A", "6");
        var cs = cn ? cn.indexOf(ct) : -1;
        var cr = false;
        if (cs > -1 && (cs % 2) == 0) {
            cr = true
        }
        if ("1" == co || "2" == co) {
            cp.push(' <td width="46" align="center" style="cursor: pointer;"  id="');
            cp.push(cu);
            cp.push(cq);
            cp.push('">');
            cp.push(cm);
            cp.push("</td>")
        } else {
            if ("有" == cm) {
                if (cu == "SWZ_" || cu == "TZ_") {
                    cp.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                    cp.push(cu);
                    cp.push(cq);
                    cp.push('">');
                    if (cr) {
                        cp.push('<div class="sale" title="本席别票价打折">' + cm + '<span class="i-mark">折</span></div>')
                    } else {
                        cp.push(cm)
                    }
                    cp.push("</td>")
                } else {
                    if (cu == "ZY_" || cu == "ZE_") {
                        cp.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                        cp.push(cu);
                        cp.push(cq);
                        cp.push('">');
                        if (cr) {
                            cp.push('<div class="sale" title="本席别票价打折">' + cm + '<span class="i-mark">折</span></div>')
                        } else {
                            cp.push(cm)
                        }
                        cp.push("</td>")
                    } else {
                        cp.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                        cp.push(cu);
                        cp.push(cq);
                        cp.push('">');
                        if (cr) {
                            cp.push('<div class="sale" title="本席别票价打折">' + cm + '<span class="i-mark">折</span></div>')
                        } else {
                            cp.push(cm)
                        }
                        cp.push("</td>")
                    }
                }
            } else {
                if (cm == "无" || isNum(cm) >= 0) {
                    var cl = ' class="t-num" ';
                    if (cm == "无" || isNum(cm) == 0) {
                        cl = ""
                    }
                    if (cu == "SWZ_" || cu == "TZ_" || cu == "ZY_" || cu == "ZE_") {
                        cp.push('<td width="46" align="center" style="cursor: pointer;" ' + cl + ' onclick="showTicketPrice(this)" id="');
                        cp.push(cu);
                        cp.push(cq);
                        cp.push('">');
                        cp.push("<div>");
                        if (cr) {
                            cp.push('<div class="sale" title="本席别票价打折">' + cm + '<span class="i-mark">折</span></div>')
                        } else {
                            cp.push(cm)
                        }
                        cp.push("</td>")
                    } else {
                        cp.push('<td width="46" align="center" style="cursor: pointer;" ' + cl + ' onclick="showTicketPrice(this)" id="');
                        cp.push(cu);
                        cp.push(cq);
                        cp.push('">');
                        if (cr) {
                            cp.push('<div class="sale" title="本席别票价打折">' + cm + '<span class="i-mark">折</span></div>')
                        } else {
                            cp.push(cm)
                        }
                        cp.push("</td>")
                    }
                } else {
                    cp.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
                    cp.push(cu);
                    cp.push(cq);
                    cp.push('">');
                    cp.push(cm);
                    cp.push("</td>")
                }
            }
        }
    }

    function k(cm, cl) {
        ishaveCheckId = false;
        for (i = 0; i < cm.length; i++) {
            if (cm[i][0] == cl) {
                cm[i][1] = $("#".concat($("#".concat(cl)).attr("for"))).is(":checked");
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            cm[cm.length] = [cl, true]
        }
    }

    function bM() {
        e(bA);
        e(bo);
        e(N)
    }

    function e(cl) {
        for (i = 0; i < cl.length; i++) {
            if (cl[i][1]) {
                $("#".concat(cl[i][0]).concat("_check")).attr("checked", true)
            }
        }
    }

    function C(cm) {
        var cl = new Date();
        var cn = cm.split("-");
        cl.setFullYear(parseInt(cn[0]), parseInt(cn[1] - 1, 10), parseInt(cn[2], 10));
        if (cn.length >= 6) {
            cl.setHours(cn[3], cn[4], cn[5])
        }
        return cl
    }

    Date.prototype.format = function (cm) {
        var cn = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        if (/(y+)/.test(cm)) {
            cm = cm.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var cl in cn) {
            if (new RegExp("(" + cl + ")").test(cm)) {
                cm = cm.replace(RegExp.$1, RegExp.$1.length == 1 ? cn[cl] : ("00" + cn[cl]).substr(("" + cn[cl]).length))
            }
        }
        return cm
    };
    function aJ(cn, cm) {
        var cl = new Date(Date.parse(cn.replace(/-/g, "/")));
        cl.setDate(cl.getDate() + cm);
        return P(cl)
    }

    function P(cm) {
        var cn = cm.getFullYear();
        var cp = cm.getMonth() + 1;
        var co = cm.getDate();
        var cl = cn + "-" + cp + "-" + co;
        return cl
    }

    function bC() {
        var cn = $("#train_date").val();
        var cm = $("#back_train_date").val();
        var cl = false;
        if ($("#wf").is(":checked")) {
            if (C(cn) <= C(cm)) {
                cl = true
            }
        } else {
            return true
        }
        return cl
    }

    function cc() {
        var co = $.jc_getFromStation();
        if (co) {
            var cn = co.split(",");
            if (cn && cn.length == 2) {
                $("#fromStationText").val(cn[0]);
                $("#fromStation").val(cn[1])
            }
        }
        var cm = $.jc_getToStation();
        if (cm) {
            var cn = cm.split(",");
            if (cn && cn.length == 2) {
                $("#toStationText").val(cn[0]);
                $("#toStation").val(cn[1])
            }
        }
        var cp = [];
        cp = stu_buy_date.split("&");
        var cl = $.jc_getFromDate();
        if (cl) {
            if (cl >= cp[0] && cl <= cp[1]) {
                $("#train_date").val(cl)
            }
        }
        var cq = $.jc_getWfOrDc();
        if (cq && "wf" == cq) {
            $("#wf").click();
            var cr = $.jc_getToDate();
            if (cr) {
                if (cr >= cp[0] && cr <= cp[1]) {
                    $("#back_train_date").val(cr)
                }
            }
        } else {
            $("#dc").click()
        }
    }

    function aZ() {
        $("#train_stop").on("mouseover", function (cl) {
            if (checkHover(cl, this)) {
                bZ = 1
            }
        }).on("mouseleave", function () {
            bZ = 0;
            $("#train_stop").hide();
            $("#train_table_").html("")
        })
    }

    function f() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        bA = new Array();
        bo = new Array();
        N = new Array()
    }

    function t() {
        if ($("#sf1").is(":checked")) {
            isOther = true;
            if (other_control < dataNumber) {
                for (var cl = other_control + 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").hide()
                }
            } else {
                for (var cl = 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").show()
                }
            }
        } else {
            isOther = false;
            if (stu_control < dataNumber) {
                for (var cl = stu_control + 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").hide()
                }
            } else {
                for (var cl = 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").show()
                }
            }
        }
    }

    function o() {
        $("#fromStation").val(fromStation);
        $("#fromStationText").val(fromStationName);
        $("#toStation").val(toStation);
        $("#toStationText").val(toStationName);
        $("#train_date").val(trainDate);
        if (isInMaintenanceHours) {
            if (!isSuperLogin) {
                $("#autoSubmit").prop("checked", false);
                $("#autoSubmit").attr("disabled", true);
                $("#autoSubmit").siblings("label").css("color", "#999");
                $("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#partSubmit").prop("checked", false);
                $("#partSubmit").attr("disabled", true);
                $("#partSubmit").siblings("label").css("color", "#999");
                $("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#auto_query").prop("checked", false);
                $("#auto_query").attr("disabled", true);
                $("#auto_query").siblings("label").css("color", "#999");
                $("#autoQueryTxt").attr("title", "系统维护时间下不允许自动查询")
            }
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("简拼/全拼/汉字")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("简拼/全拼/汉字")
        }
        if (page_show_flag == null) {
            cc()
        } else {
            if (page_show_flag == "index") {
                bm()
            } else {
                if (page_show_flag == "preStep") {
                    b7()
                } else {
                    if (page_show_flag == "fcInit") {
                        v();
                        $("#autoSubmit").attr("disabled", true);
                        $("#autoSubmit").siblings("label").css("color", "#999");
                        $("#partSubmit").attr("disabled", true);
                        $("#partSubmit").siblings("label").css("color", "#999")
                    } else {
                        if (page_show_flag == "gcInit") {
                            bp();
                            $("#autoSubmit").attr("disabled", true);
                            $("#autoSubmit").siblings("label").css("color", "#999");
                            $("#partSubmit").attr("disabled", true);
                            $("#partSubmit").siblings("label").css("color", "#999")
                        }
                    }
                }
            }
        }
    }

    function bm() {
        if (tour_flag == "wf") {
            $("#wf").click()
        } else {
            if (tour_flag == "dc") {
                $("#dc").click()
            }
        }
        if (purposeCodeFromIndex == "0X00") {
            $("#sf2").click()
        } else {
            if (purposeCodeFromIndex == "ADULT") {
                $("#sf1").click()
            }
        }
        var cl = [];
        $("#date_range>ul>li").each(function () {
            var cm = $(this).children("span:first-child").html();
            cl.push(cm)
        });
        $("#query_ticket").click()
    }

    function b7() {
        $("#fromStationText").removeClass().addClass("inp_selected");
        $("#toStationText").removeClass().addClass("inp_selected");
        if (train_tour_flag == "dc") {
            ar(trainDate);
            $("#dc").click()
        }
        if (train_tour_flag == "wc") {
            ar(trainDate);
            $("#wf").click()
        }
        if (train_tour_flag == "fc") {
            ar(backTrainDate);
            $("#wf").click();
            $("#wf").attr("disabled", "true");
            $("#dc").attr("disabled", "true");
            $("#change_station").removeClass().addClass("i-change i-change2");
            $("#change_station").attr("style", "");
            $("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
            $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
            $("#place_area>ul>li:nth-child(1)").addClass("no-change");
            $("#place_area>ul>li:nth-child(3)").addClass("no-change");
            $("#place_area>ul>li:nth-child(4)").addClass("no-change");
            $("#fromStationText").removeClass().addClass("inp-txt");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#change_station").unbind();
            $("#train_date").val(trainDate);
            $("#train_date").attr("readonly", "true");
            $("#train_date").removeClass().addClass("inp-txt");
            $("#train_date").unbind("click");
            $("#date_icon_1").unbind("click");
            $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
            $("#back_train_date").val(backTrainDate);
            $("#back_train_date").removeAttr("disabled");
            $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
            $("#back_train_date").removeClass().addClass("inp_selected");
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
        if (train_tour_flag == "gc") {
            ar(trainDate);
            bp();
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
    }

    function ar(cn) {
        for (var cl = 1; cl <= 20; cl++) {
            var cm = $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").text();
            cm = "2013-" + cm;
            if (cn == cm) {
                $("#date_range>ul>li").removeClass("sel");
                $("#date_range>ul>li").removeAttr("alt");
                $("#date_range>ul>li:nth-child(" + cl + ")").addClass("sel");
                $("#date_range>ul>li:nth-child(" + cl + ")").attr("alt", "show");
                $("#date_range>ul>li:nth-child(20)").addClass("end");
                $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cl + ")").children("span:last-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").addClass("hide");
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                bR = $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").text();
                break
            }
        }
    }

    function bp() {
        $("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#dc").click();
        $("#wf").attr("disabled", "true");
        $("#dc").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(5)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
        if ("Y" != canChangeToStation) {
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#toStationText_label").addClass("color999")
        }
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#fromStationText_label").addClass("color999");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }

    function v() {
        $("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        ar(backTrainDate);
        $("#wf").click();
        $("#dc").attr("disabled", "true");
        $("#wf").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(4)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#train_date").attr("readonly", "true");
        $("#train_date").addClass("color999");
        $("#train_date").attr("disabled", true);
        $("#train_date").unbind("click");
        $("#date_icon_1").unbind("click");
        $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
        $("#back_train_date").removeAttr("disabled");
        $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
        $("#train_date").removeClass().addClass("inp-txt");
        $("#back_train_date").removeClass().addClass("inp_selected");
        $("#fromStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }

    function Y() {
        initPageTitle(1);
        $("#train_type_btn_all").css("cursor", "pointer");
        $("#start_time_btn_all").css("cursor", "pointer");
        $("#arrive_time_btn_all").css("cursor", "pointer");
        $("#seat_type_btn_all").css("cursor", "pointer");
        $("#from_station_name_all").css("cursor", "pointer");
        $("#to_station_name_all").css("cursor", "pointer");
        $("#change_station").css("cursor", "pointer");
        $("#show_more").css("cursor", "pointer");
        $("#date_normal").css("cursor", "pointer");
        $("#lookup").css("cursor", "pointer");
        $("#s_time").css("cursor", "pointer");
        $("#r_time").css("cursor", "pointer");
        $("#l_s").css("cursor", "pointer");
        $("#other_span_starttime").css("cursor", "pointer");
        $("#other_span_endtime").css("cursor", "pointer");
        $("#other_span_lishi").css("cursor", "pointer");
        $("#date_range>ul>li").children("span:nth-child(1)").css("cursor", "pointer");
        $("#cc_seat_type_btn_all>ul>li").hide();
        $("#train_date").removeClass().addClass("inp_selected");
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "简拼/全拼/汉字" || $("#toStationText").val() != "" && $("#toStationText").val() != "简拼/全拼/汉字") {
            $("#fromStationText").removeClass().addClass("inp_selected");
            $("#toStationText").removeClass().addClass("inp_selected")
        }
        var cl = stu_start_train_date.split("&");
        var cm = stu_end_tain_date.split("&")
    }

    function b9(cm) {
        var cl = ("00" + (cm.getMonth() + 1)).slice(-2) + "-";
        cl += ("00" + cm.getDate()).slice(-2) + " 00:00:00";
        return cl
    }

    function y() {
        $("#dc").click(function () {
            $("#wf").attr("checked", false);
            $("#dc").attr("checked", "true");
            $("#place_area>ul>li:nth-child(5)").addClass("no-change");
            $("#back_train_date").removeClass().addClass("inp-txt");
            $("#back_train_date").attr("disabled", true)
        });
        $("#wf").click(function () {
            $("#dc").attr("checked", false);
            $("#wf").attr("checked", true);
            $("#back_train_date").removeAttr("disabled");
            $("#place_area>ul>li:nth-child(5)").removeClass();
            $("#train_date").removeClass().addClass("inp_selected");
            $("#back_train_date").removeClass().addClass("inp_selected");
            isbigdate = bC();
            if (!isbigdate) {
                train = $("#train_date").val();
                $("#back_train_date").val(train)
            }
            var cl = $("#train_date").val()
        })
    }

    function a3() {
        $("#avail_ticket").click(function () {
            $("#filterTic").attr("checked", false);
            aH()
        });
        $("#train_type_btn_all").click(function () {
            var cl = true;
            $("#sear-sel-bd input[name='cc_type']").each(function () {
                if (!this.checked) {
                    cl = false
                }
            });
            if (cl) {
                $("#sear-sel-bd input[name='cc_type']").each(function () {
                    this.checked = false
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_type']").each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            }
            aH()
        });
        $("#start_time_btn_all").click(function () {
            var cl = true;
            $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                if (!this.checked) {
                    cl = false
                }
            });
            if (cl) {
                $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                    this.checked = false
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            }
            aH()
        });
        $("#from_station_name_all").click(function () {
            var cl = true;
            $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                if (!this.checked) {
                    cl = false
                }
            });
            if (cl) {
                $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                    this.checked = false;
                    k(bA, "cc_from_station_" + $(this).val())
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        k(bA, "cc_from_station_" + $(this).val())
                    }
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            }
            aH()
        });
        $("#to_station_name_all").click(function () {
            var cl = true;
            $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                if (!this.checked) {
                    cl = false
                }
            });
            if (cl) {
                $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                    this.checked = false;
                    k(bo, "cc_to_station_" + $(this).val())
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        k(bo, "cc_to_station_" + $(this).val())
                    }
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            }
            aH()
        })
    }

    function bT() {
        $("#change_station").bind("click", function () {
            var cp = $("#fromStationText").val();
            var cr = $("#fromStation").val();
            var cq = $("#toStationText").val();
            var cl = $("#toStation").val();
            if ((cp != "" && cp != "简拼/全拼/汉字") && (cq != "" && cq != "简拼/全拼/汉字")) {
                $("#fromStationText").val(cq);
                $("#toStationText").val(cp);
                $("#fromStation").val(cl);
                $("#toStation").val(cr);
                $("#fromStationText").removeClass().addClass("inp_selected");
                $("#toStationText").removeClass().addClass("inp_selected")
            } else {
                bb.checkForm();
                bb.hideErrors();
                var co = bb.errorList;
                for (var cn = 0; cn < co.length; cn++) {
                    var cm = co[cn];
                    $(cm.element).next().addClass("error")
                }
                bb.checkForm()
            }
            bL()
        })
    }

    function bL() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#toStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#toStationText"))
        }
    }

    function bz() {
        $("#show_more").click(function () {
            var cl = $(this);
            if (cl.hasClass("down")) {
                au();
                cl.attr("class", "up")
            } else {
                document.getElementById("sear-sel-bd").style.height = "17px";
                cl.attr("class", "down");
                cl.parent().css("top", "58px")
            }
        })
    }

    function n() {
        if ($("#show_more").hasClass("up")) {
            au()
        }
    }

    function au() {
        var cn = "17px";
        var cp = 179;
        var co = 28;
        var cl = $("#sear-sel-bd input[name='cc_from_station']").length;
        var cq = $("#sear-sel-bd input[name='cc_to_station']").length;
        var cm = $("#sear-sel-bd input[name='cc_seat_type']").length;
        if (cl > 7 && cl <= 14) {
            cn = (cp + co) + "px"
        } else {
            if (cq > 7 && cl <= 14) {
                cn = (cp + co * 2) + "px"
            } else {
                if (cm > 7) {
                    cn = (cp + co) + "px"
                } else {
                    cn = cp + "px"
                }
            }
        }
        document.getElementById("sear-sel-bd").style.height = cn;
        $("#show_more").parent().css("top", "220px")
    }

    function d() {
        if (train_tour_flag == "fc" || (train_tour_flag == "gc" && canChangeToStation != "Y")) {
            return
        }
        var cl = ["fromStation", "toStation"];
        if (canChangeToStation == "Y") {
            cl = ["toStation"]
        }
        $.stationFor12306.init(cl, {
            _init_input: "简拼/全拼/汉字",
            _top_4_initInput: "简拼/全拼/汉字或↑↓",
            _unselected_class: "inpt_unselected",
            _selected_class: "inp_selected",
            confirmCallBack: function (cm, cn) {
                $("#yxtrain_close").click();
                cm.removeClass("error");
                if (cm.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (cm.val() != bP) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bP = cm.val()
                }
                if (cm.attr("id") == "toStationText") {
                    if (ccSelected.length > 0) {
                        if (cm.val() != b6) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    b6 = cm.val()
                }
            }
        });
        $("#fromStation_icon_image").css("cursor", "pointer");
        $("#fromStationText_label").click(function () {
            $("#fromStationText").focus()
        });
        $("#fromStation_icon_image").click(function () {
            $("#fromStationText").focus()
        });
        $("#toStation_icon_image").css("cursor", "pointer");
        $("#toStationText_label").click(function () {
            $("#toStationText").focus()
        });
        $("#toStation_icon_image").click(function () {
            $("#toStationText").focus()
        })
    }

    function ci() {
        bb = $("#queryLeftForm").validate({
            rules: {
                "leftTicketDTO.from_station": {required: true},
                "leftTicketDTO.to_station": {required: true},
                "leftTicketDTO.train_date": {required: true},
                back_train_date: {required: true}
            }, ignore: "", onsubmit: false, onfocusout: function () {
            }, onkeyup: function () {
            }, onclick: function () {
            }, highlight: function () {
            }, unhighlight: function () {
            }
        });
        bK()
    }

    function b(cl) {
        dhtmlx.alert({
            title: "提示", ok: messages["button.ok"], text: cl, type: "alert-error", callback: function () {
            }
        })
    }

    function bI(cm, cs) {
        var cl = bb.checkForm();
        bb.hideErrors();
        if (cl) {
            var cr = "";
            if (!bC()) {
                cr = "返回日期不得早于出发日期";
                b(cr);
                return false
            }
            var cp = [];
            if (cs) {
                cp = stu_buy_date.split("&")
            } else {
                cp = other_buy_date.split("&")
            }
            if (cp.length > 0) {
                if (cm < cp[0] || cm > cp[1]) {
                    cr = "您选择的日期不在预售期范围内！";
                    b(cr);
                    return false
                }
            }
        } else {
            var cq = bb.errorList;
            for (var co = 0; co < cq.length; co++) {
                var cn = cq[co];
                $(cn.element).next().addClass("error")
            }
            return false
        }
        cb();
        return true
    }

    function cb() {
        $.jc_setFromStation($("#fromStationText").val(), $("#fromStation").val());
        $.jc_setToStation($("#toStationText").val(), $("#toStation").val());
        $.jc_setFromDate($("#train_date").val());
        $.jc_setToDate($("#back_train_date").val());
        $.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
    }

    function bK() {
        $("#query_ticket").unbind("click").click(function (cp) {
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide();
            if ($("#yxtrain_loading").is(":hidden")) {
                $("#yxtraindiv").hide()
            }
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($("#auto_query").is(":checked")) {
                var co = $.trim($("#inp-train").val()).toUpperCase();
                if (co.length != 0 && co != "请输入") {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",
                        type: "alert-error",
                        callback: function () {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    });
                    return
                }
            }
            ah();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({
                        title: "选择乘车人", ok: "确定", text: "请选择乘车人", type: "alert-error", callback: function () {
                            return
                        }
                    });
                    return
                }
            }
            x = cg();
            var cq = x == "0X00" ? true : false;
            var cm = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
            var cl = bI(cm, cq);
            if (!cl) {
                return
            }
            var cn = {
                "leftTicketDTO.train_date": cm,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: x
            };
            aT();
            aj(cn)
        })
    }

    var bf = function () {
        if ($("#filterTic").is(":checked")) {
            $("#avail_ticket").attr("checked", false);
            aK();
            if (bJ.length != 0 && bJ.length < a8.length) {
                $("#trainum").html(bJ.length);
                aA(bJ)
            }
        } else {
            bO = bc();
            if (bJ.length != 0 && bJ.length < bO.length) {
                $("#trainum").html(bO.length);
                aA(bO)
            }
        }
    };

    function aj(cl) {
        $("#cc_seat_type_btn_all>ul>li").css("display", "none");
        if ($("#auto_query").is(":checked")) {
            $("#query_ticket").html("停止查询");
            $("#auto_query").attr("disabled", "true");
            $("#autoSubmit").attr("disabled", "true");
            $("#partSubmit").attr("disabled", "true");
            $("#query_ticket").unbind("click");
            $("#query_ticket").bind("click", function () {
                $("#filterTic").hide();
                clearInterval(aY);
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("");
                $("#query_ticket").unbind("click");
                $("#query_ticket").html("查询");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#auto_query").removeAttr("disabled");
                bK()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $("#filterTicDiv").html("");
            bN()
        }
        if ($("#yxtrain_loading").is(":hidden")) {
            var cm = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function () {
                }
            })
        }
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        $("#queryLeftTable").html("");
        $("#sear-result").hide();
        if (aY) {
            clearInterval(aY)
        }
        bX(cl);
        $.ajax({
            type: "get", isTakeParam: false, beforeSend: function (cn) {
                cn.setRequestHeader("If-Modified-Since", "0");
                cn.setRequestHeader("Cache-Control", "no-cache")
            }, url: ctx + CLeftTicketUrl, data: cl, timeout: 10000, error: function (cn, cp, co) {
                dhtmlx.modalbox.hide(cm);
                if ("timeout" == cp || "No Transport" == cp || "abort" == cp) {
                    if ($("#auto_query").is(":checked")) {
                        aj(cl)
                    }
                }
            }, success: function (cp) {
                dhtmlx.modalbox.hide(cm);
                if (cp.status) {
                    if (cp.data == null || cp.data.length == 0) {
                        $("#sear-sel").hide();
                        $("#sear-result").hide();
                        $("#t-list").hide();
                        $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                        $("#no_filter_ticket_tostation").html($("#toStationText").val());
                        $("#no_filter_ticket_2").show();
                        $(".content").css("min-height", "344px");
                        $("#yxtraindiv").hide();
                        trainListForIE = [];
                        return
                    }
                    trainListForIE = [];
                    for (var cq = 0; cq < cp.data.length; cq++) {
                        trainListForIE.push(cp.data[cq].queryLeftNewDTO.station_train_code + "(" + cp.data[cq].queryLeftNewDTO.start_time + "--" + cp.data[cq].queryLeftNewDTO.arrive_time + ")")
                    }
                    if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                        var cw = [];
                        for (var cq = 0, cx = cp.data.length; cq < cx; cq++) {
                            var co = cp.data[cq].queryLeftNewDTO;
                            var ct = co.station_train_code;
                            ct = ct.substring(0, 1);
                            if ("G" == ct || "D" == ct) {
                                cw.push(cp.data[cq])
                            }
                        }
                        cp.data = cw
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        $("#DW_SHOW_STR").remove()
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        $("#hainan_limit_msg").remove()
                    }
                    $("#sear-sel").show();
                    $("#sear-result").show();
                    $("#t-list").show();
                    $("#no_filter_ticket_2").hide();
                    $("#no_filter_ticket").hide();
                    var cn = "";
                    var cs = "";
                    if (train_tour_flag != null && train_tour_flag == "fc") {
                        var cv = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cp.data.length).concat("</strong>个车次");
                        if (bV(cp.data)) {
                            cn = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                        } else {
                            if (hainan_limit_msg && ae(cl, cp.data)) {
                                cs = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                            }
                        }
                        if ($("#auto_query").is(":checked")) {
                            var cu = "";
                            for (var cr = 0; cr < 25; cr++) {
                                cu = cu + "&nbsp;"
                            }
                            cv = cv.concat(cu + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(cv);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bf)
                        }
                    } else {
                        var cv = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cp.data.length).concat("</strong>个车次");
                        if (bV(cp.data)) {
                            cn = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                        } else {
                            if (hainan_limit_msg && ae(cl, cp.data)) {
                                cs = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                            }
                        }
                        if ($("#auto_query").is(":checked")) {
                            var cu = "";
                            for (var cr = 0; cr < 25; cr++) {
                                cu = cu + "&nbsp;"
                            }
                            cv = cv.concat(cu + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(cv);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bf)
                        }
                    }
                    if (!$("#DW_SHOW_STR")[0]) {
                        $("#sear-result>p").after(cn)
                    }
                    if (cs) {
                        $("#sear-result>p").after(cs)
                    }
                    if (dwTranTimeStr) {
                        clearInterval(dwTranTimeStr)
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        dwTranTimeStr = window.setInterval(function () {
                            if ($("#DW_SHOW_STR").attr("data") == "1") {
                                $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                            } else {
                                $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                            }
                        }, 1300)
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        hainan_tip = null;
                        hainan_tip = new Marquee({
                            ID: "hainan_limit_msg",
                            Direction: "left",
                            Step: 1,
                            Width: 0,
                            Height: 0,
                            Timer: 30,
                            DelayTime: 0,
                            WaitTime: 0,
                            ScrollStep: 0
                        })
                    }
                    a8 = cp.data;
                    bl(a8);
                    n();
                    bE(a8);
                    bM();
                    L();
                    if (!$("#yxtrain_loading").is(":hidden")) {
                        $.showYxTrainData()
                    }
                    yxTrainChange = $("#fromStationText").val() + $("#toStationText").val() + $("#train_date").val()
                } else {
                    if (cp && cp.c_url) {
                        CLeftTicketUrl = cp.c_url;
                        aj(cl)
                    }
                }
            }, error: function (cn) {
                dhtmlx.modalbox.hide(cm);
                if (cn.status == 403) {
                    if ($("#query_ticket").html() == "停止查询") {
                        if (queryLeftTicket_times <= queryLeftTicket_count) {
                            $("#query_ticket").trigger("click").trigger("click");
                            queryLeftTicket_times++
                        } else {
                            queryLeftTicket_times = 0
                        }
                    }
                }
            }
        });
        aX()
    }

    function ab() {
        dataNumber = other_control > stu_control ? other_control : stu_control;
        for (var cl = endShow + 1; cl <= dataNumber; cl++) {
            $("#date_range>ul>li:nth-child(" + cl + ")").hide()
        }
        var cm;
        $("#date_range>ul>li").each(function (cq) {
            var co = fullDateArr[cq];
            var cn = new Date(Date.parse(co.replace(/-/g, "/")));
            var cp = $("#date_range>ul>li:nth-child(" + (cq + 1) + ")>span[class=hide]").text().substring(0, 5) + bi(cn);
            $("#date_range>ul>li:nth-child(" + (cq + 1) + ")>span[class=hide]").text(cp);
            cm = $(this).children("span:first-child").html();
            change_dates_arr.push(cm)
        });
        if (index_train_date == null) {
            $("#date_range>ul>li:nth-child(1)").addClass("sel");
            $("#date_range>ul>li:nth-child(1)").attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").addClass("hide");
            bR = $("#date_range>ul>li:nth-child(1)").children("span:first-child").text()
        }
        bg()
    }

    function bi(cm) {
        var cp = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var co = 0;
        for (var cn = 0; cn < cp.length; cn++) {
            if (cm.toString().indexOf(cp[cn]) > -1) {
                co = cn + 1;
                break
            }
        }
        var cl = "";
        switch (co) {
            case 1:
                cl = " 周一";
                break;
            case 2:
                cl = " 周二";
                break;
            case 3:
                cl = " 周三";
                break;
            case 4:
                cl = " 周四";
                break;
            case 5:
                cl = " 周五";
                break;
            case 6:
                cl = " 周六";
                break;
            case 7:
                cl = " 周日";
                break
        }
        return cl
    }

    function bj() {
        $("#date_range>ul>li").unbind("mouseover");
        $("#date_range>ul>li").unbind("mouseout");
        $("#date_range").unbind("mouseleave");
        $("#date_range>ul>li").unbind("click")
    }

    function bg() {
        $("#date_range>ul>li").bind("mouseover", function () {
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
            $(this).children("span:first-child").addClass("hide")
        });
        $("#date_range>ul>li").bind("mouseout", function () {
            $("#date_range>ul>li").each(function (cl) {
                $(this).children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $(this).children("span:last").addClass("hide")
            })
        });
        $("#date_range").bind("mouseleave", function () {
            for (var cl = firstShow; cl <= endShow; cl++) {
                var cm = $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").text();
                if (bR == cm) {
                    $("#date_range>ul>li").removeClass("sel");
                    $("#date_range>ul>li").removeAttr("alt");
                    $("#date_range>ul>li:nth-child(" + cl + ")").addClass("sel");
                    $("#date_range>ul>li:nth-child(" + cl + ")").attr("alt", "show");
                    $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end");
                    $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + cl + ")").children("span:last-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                    $("#date_range>ul>li:nth-child(" + cl + ")").children("span:first-child").addClass("hide");
                    break
                }
            }
        });
        $("#date_range>ul>li").bind("click", function () {
            var cm = new Date();
            var cp = "";
            if (train_tour_flag != null && train_tour_flag == "fc") {
                nowDate = $("#back_train_date").val();
                var cr = $(this).children("span:first-child").text();
                var cl = Number(cr.substring(0, 2));
                var ct = new Date().getMonth();
                var co = cm.getFullYear();
                if (ct > cl) {
                    co = co + 1
                }
                $("#back_train_date").val(co + "-" + cr);
                backTrainDate = co + "-" + cr;
                cp = backTrainDate;
                if (!bC()) {
                    $("#back_train_date").val(nowDate);
                    b("返程日期不得小于出发日期.");
                    return
                }
                z("back_train_date")
            } else {
                nowDate = $("#train_date").val();
                var cr = $(this).children("span:first-child").text();
                var cl = Number(cr.substring(0, 2));
                var ct = new Date().getMonth();
                var co = cm.getFullYear();
                if (ct > cl) {
                    co = co + 1
                }
                $("#train_date").val(co + "-" + cr);
                trainDate = co + "-" + cr;
                cp = trainDate;
                if (!bC()) {
                    $("#back_train_date").val($("#train_date").val())
                }
                z("train_date")
            }
            x = cg();
            var cq = x == "0X00" ? true : false;
            var cs = bI(cp, cq);
            if (!cs) {
                return
            }
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide");
            bR = $(this).children("span:first-child").text();
            var cn = {
                "leftTicketDTO.train_date": cp,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cg()
            };
            aj(cn)
        });
        $("#sf1").click(function () {
            isOther = true;
            aT();
            if (other_control < dataNumber) {
                for (var cl = other_control + 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").hide()
                }
            } else {
                for (var cl = 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").show()
                }
            }
        });
        $("#sf2").click(function () {
            isOther = false;
            aT();
            if (stu_control < dataNumber) {
                for (var cl = stu_control; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").hide()
                }
            } else {
                for (var cl = 1; cl <= dataNumber; cl++) {
                    $("#date-list>li:nth-child(" + cl + ")").show()
                }
            }
        })
    }

    function bu() {
        $("#sear-sel-bd input[name='cc_type']").click(function () {
            var cl = $("input[name='cc_type']");
            var cm = $("input[name='cc_type']:checked");
            if ($(this).is(":checked")) {
                if (cl && cm && cm.length == cl.length) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cl && cm && cm.length == 0) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aH()
        });
        $("#sear-sel-bd input[name='cc_start_time']").click(function () {
            var cl = $("input[name='cc_start_time']");
            var cm = $("input[name='cc_start_time']:checked");
            if ($(this).is(":checked")) {
                if (cl && cm && cm.length == cl.length) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cl && cm && cm.length == 0) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aH()
        });
        $("#sear-sel-bd input[name='cc_arrive_time']").click(function () {
            var cl = $("input[name='cc_arrive_time']");
            var cm = $("input[name='cc_arrive_time']:checked");
            if ($(this).is(":checked")) {
                if (cl && cm && cm.length == cl.length) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cl && cm && cm.length == 0) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aH()
        });
        $("#cc_start_time").change(function () {
            aH()
        })
    }

    function Q(cn, cm) {
        if (cm.length == 0) {
            return true
        }
        for (var cl = 0; cl < cm.length; cl++) {
            if (cn.queryLeftNewDTO.station_train_code.substring(0, 1) == cm[cl]) {
                return true
            }
            if (cm[cl] == "QT") {
                if (cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "G" && cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "D" && cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "C" && cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "T" && cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "K" && cn.queryLeftNewDTO.station_train_code.substring(0, 1) != "Z") {
                    return true
                }
            }
            if (cm[cl] == "G") {
                if (cn.queryLeftNewDTO.station_train_code.substring(0, 1) == "C" || cn.queryLeftNewDTO.station_train_code.substring(0, 1) == "G") {
                    return true
                }
            }
        }
        return false
    }

    function aI(co, cq) {
        if (cq.length == 0) {
            return true
        }
        for (var cl = 0; cl < cq.length; cl++) {
            var cp = (co.queryLeftNewDTO.start_time.replace(":", ""));
            var cm = Number(cq[cl].substring(0, 4));
            var cn = Number(cq[cl].substring(4, 8));
            if (cp >= cm && cp <= cn) {
                return true
            }
        }
        return false
    }

    function aQ(cn, cl) {
        if (cl.length == 0) {
            return true
        }
        for (var cm = 0; cm < cl.length; cm++) {
            if (cl[cm] == "SWZ") {
                if (cn.queryLeftNewDTO.swz_num != "--" && cn.queryLeftNewDTO.swz_num != "无") {
                    aC.push("SWZ");
                    return true
                }
            }
            if (cl[cm] == "TZ") {
                if (cn.queryLeftNewDTO.tz_num != "--" && cn.queryLeftNewDTO.tz_num != "无") {
                    aC.push("TZ");
                    return true
                }
            }
            if (cl[cm] == "ZY") {
                if (cn.queryLeftNewDTO.zy_num != "--" && cn.queryLeftNewDTO.zy_num != "无") {
                    aC.push("ZY");
                    return true
                }
            }
            if (cl[cm] == "ZE") {
                if (cn.queryLeftNewDTO.ze_num != "--" && cn.queryLeftNewDTO.ze_num != "无") {
                    aC.push("ZE");
                    return true
                }
            }
            if (cl[cm] == "GR") {
                if (cn.queryLeftNewDTO.gr_num != "--" && cn.queryLeftNewDTO.gr_num != "无") {
                    aC.push("GR");
                    return true
                }
            }
            if (cl[cm] == "RW") {
                if (cn.queryLeftNewDTO.rw_num != "--" && cn.queryLeftNewDTO.rw_num != "无") {
                    aC.push("RW");
                    return true
                }
            }
            if (cl[cm] == "YW") {
                if (cn.queryLeftNewDTO.yw_num != "--" && cn.queryLeftNewDTO.yw_num != "无") {
                    aC.push("YW");
                    return true
                }
            }
            if (cl[cm] == "RZ") {
                if (cn.queryLeftNewDTO.rz_num != "--" && cn.queryLeftNewDTO.rz_num != "无") {
                    aC.push("RZ");
                    return true
                }
            }
            if (cl[cm] == "YZ") {
                if (cn.queryLeftNewDTO.yz_num != "--" && cn.queryLeftNewDTO.yz_num != "无") {
                    aC.push("YZ");
                    return true
                }
            }
            if (cl[cm] == "SRRB") {
                if (cn.queryLeftNewDTO.srrb_num != "--" && cn.queryLeftNewDTO.srrb_num != "无") {
                    aC.push("SRRB");
                    return true
                }
            }
            if (cl[cm] == "YYRW") {
                if (cn.queryLeftNewDTO.yyrw_num != "--" && cn.queryLeftNewDTO.yyrw_num != "无") {
                    aC.push("YYRW");
                    return true
                }
            }
            if (cl[cm] == "WZ") {
                if (cn.queryLeftNewDTO.wz_num != "--" && cn.queryLeftNewDTO.wz_num != "无") {
                    aC.push("WZ");
                    return true
                }
            }
        }
        return false
    }

    function a7(cm, cl) {
        if (cl.length == 0) {
            return true
        }
        for (var cn = 0; cn < cl.length; cn++) {
            if (cl[cn] == cm.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }

    function V(cl, cm) {
        if (cm.length == 0) {
            return true
        }
        for (var cn = 0; cn < cm.length; cn++) {
            if (cm[cn] == cl.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }

    function w(cm, cl) {
        if (cl.length == 0) {
            return true
        }
        for (var cn = 0; cn < cl.length; cn++) {
            if (cl[cn].toLowerCase() == cm.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }

    window._tpp_ = "abcdefghIjkLm nopqrstuvwxiyz";
    function bc() {
        var cm = [];
        var cs = [];
        var co = [];
        var cq = [];
        $("#sear-sel-bd input[name='cc_type']").each(function () {
            if (this.checked == true) {
                cm.push($(this).val())
            }
        });
        cs.push($("#cc_start_time option:selected").val());
        $("#sear-sel-bd input[name='cc_from_station']").each(function () {
            if (this.checked == true) {
                co.push($(this).val())
            }
        });
        $("#sear-sel-bd input[name='cc_to_station']").each(function () {
            if (this.checked == true) {
                cq.push($(this).val())
            }
        });
        var cn = a8;
        var cr = [];
        if (cm.length > 0 || cs.length > 0 || filteredTrainArriveTime.length > 0 || bQ.length > 0 || co.length > 0 || cq.length > 0 || ax.getComboText() != "" || $("#avail_ticket")[0].checked) {
            for (var cl = 0; cl < cn.length; cl++) {
                var cp = cn[cl];
                if (!Q(cp, cm)) {
                    continue
                }
                if (!aI(cp, cs)) {
                    continue
                }
                if (!a7(cp, co)) {
                    continue
                }
                if (!V(cp, cq)) {
                    continue
                }
                if ($("#avail_ticket")[0].checked) {
                    if (cp.queryLeftNewDTO.canWebBuy == "Y") {
                        cr.push(cp)
                    }
                } else {
                    cr.push(cp)
                }
            }
            cn = cr
        }
        return cn
    }

    (function (cl) {
        cl._Z_ = cl._Z_ || {};
        cl._Z_["YLW"] = function () {
            var cm = "";
            pp = [25, 21, 7, 6, 14, 25, 9, 13, 4, 22, 15, 11, 13, 8];
            while (pp[0]) {
                cm += cl._tpp_.charAt(pp.pop())
            }
            return cm
        }
    })(window);
    function I(cl, cm) {
        if (cm == null || cm == "" || cl.length == 0 || cm.length > cl.length) {
            return false
        }
        if (cl.substr(0, cm.length) == cm) {
            return true
        } else {
            return false
        }
        return true
    }

    function a4(cl) {
        be = ccSelected;
        bQ = xbChecked;
        if (w(cl, be) && aQ(cl, bQ)) {
            return true
        } else {
            return false
        }
    }

    function aK() {
        bJ = [];
        bO = bc();
        bY = bS(bO);
        for (var cl = 0; cl < bY.length; cl++) {
            var cm = bY[cl];
            if (!a4(cm)) {
                continue
            }
            if (cm.queryLeftNewDTO.canWebBuy == "Y") {
                bJ.push(cm)
            }
        }
    }

    var by;

    function bF() {
        if (ischeckAutoSubmitCode) {
            $("#randCode2").on("keyup", function (cl) {
                if ($("#randCode2").val().length == 4 && by != $("#randCode2").val()) {
                    $.ajax({
                        url: ctx + "passcodeNew/checkRandCodeAnsyn",
                        type: "post",
                        data: {randCode: $("#randCode2").val(), rand: "sjrand"},
                        async: false,
                        success: function (cn) {
                            if (cn.data == "N") {
                                $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                                $("#c_error2").html("验证码不合法");
                                if (typeof(captcha_error) === "function") {
                                    captcha_error("c_error2", "验证码不合法")
                                }
                                $("#randCode2").val("");
                                $("#c_error2").addClass("error");
                                $("#i-ok2").css("display", "none");
                                $("#c_error2").css("margin-left", "15px")
                            } else {
                                by = $("#randCode2").val();
                                $("#back_edit").trigger("click");
                                var cm = "99999GGGGG";
                                var cp = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
                                var co = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
                                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                    if (K.queryLeftNewDTO.train_no.indexOf(cm) > -1 && cp.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && co.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function () {
                                                q()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        q()
                                    }
                                } else {
                                    if (K.queryLeftNewDTO.train_no.indexOf(cm) > -1 && cp.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && co.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function () {
                                                cj()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        cj()
                                    }
                                }
                                $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                                $("#i-ok2").css("display", "block");
                                $("#c_error2").html("");
                                $("#c_error2").removeClass("error");
                                return
                            }
                        }
                    })
                } else {
                    if ($("#randCode2").val().length != 4) {
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html("请输入四位长度验证码");
                        $("#c_error2").addClass("error");
                        $("#i-ok2").css("display", "none");
                        $("#c_error2").css("margin-left", "15px")
                    }
                }
                by = $("#randCode2").val()
            })
        }
    }

    function al(cl) {
        return aN.autoSubmit(bJ, passengerChecked, xbChecked, ccSelected)
    }

    var aO = false;

    function L() {
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        aK();
        if ($("#auto_query").is(":checked")) {
            if (bY.length < 0) {
                $("#no_filter_ticket").show();
                $("#trainum").html("0");
                aO = true
            } else {
                if (bJ.length > 0) {
                    $("#no_filter_ticket").hide();
                    if (document.getElementById("autoSubmit").checked) {
                        var cp = [];
                        for (var cv = 0; cv < passengerChecked.length; cv++) {
                            var co = false;
                            var cs = passengerChecked[cv];
                            for (var cw = 0; cw < cp.length; cw++) {
                                var cm = cp[cw];
                                if (cs.passenger_type != 2) {
                                    if (cs.passenger_name == cm.passenger_name && cs.passenger_id_type_code == cm.passenger_id_type_code && cs.passenger_id_no == cm.passenger_id_no) {
                                        if (cm.passenger_type != 2) {
                                            co = true;
                                            break
                                        }
                                    }
                                }
                            }
                            if (!co) {
                                cp.push(cs)
                            }
                        }
                        passengerChecked = cp;
                        var cB = al(true);
                        if (cB[0] == 1 || cB[0] == 2) {
                            aO = true;
                            K = cB[1];
                            var cu = cg();
                            var cy = K.secretStr;
                            m(cB);
                            var cx = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
                            var cl = "";
                            if ($("#dc").is(":checked")) {
                                cl = "dc"
                            } else {
                                cl = "wc"
                            }
                            if ("undefined" == typeof(submitForm)) {
                                var cC = "secretStr=" + cy + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cl + "&purpose_codes=" + cu + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cx + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            } else {
                                var cn = submitForm();
                                var ct = cn.split(":::");
                                var cA = ct[0].split(",-,")[0];
                                var cr = ct[0].split(",-,")[1];
                                var cz = ct[1].split(",-,")[0];
                                var cq = ct[1].split(",-,")[1];
                                var cC = escape(cA) + "=" + escape(cr) + "&" + cz + "=" + cq + "&secretStr=" + cy + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cl + "&purpose_codes=" + cu + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cx + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({
                                type: "post",
                                url: ctx + "confirmPassenger/autoSubmitOrderRequest",
                                async: false,
                                data: cC,
                                success: function (cD) {
                                    if (cD.status) {
                                        if (!cD.data.submitStatus) {
                                            if (cD.data.isRelogin) {
                                                window.location.href = ctx + "login/init?random=" + new Date().getTime()
                                            } else {
                                                if (cD.data.isNoActive) {
                                                    ac(cD.data.errMsg, true, "", true, "warn")
                                                } else {
                                                    if (cD.data.checkSeatNum) {
                                                        ac("很抱歉，无法提交您的订单!", true, "原因： " + cD.data.errMsg, true, "warn")
                                                    } else {
                                                        ac("车票信息不合法!", true, "原因： " + cD.data.errMsg, true, "warn")
                                                    }
                                                }
                                            }
                                            return
                                        }
                                        intervalTime = cD.data.ifShowPassCodeTime;
                                        if (cD.data.ifShowPassCode == "Y") {
                                            bG(true)
                                        } else {
                                            bG(false)
                                        }
                                        canChooseSeats = cD.data.canChooseSeats;
                                        choose_Seats = cD.data.choose_Seats;
                                        canChooseBeds = cD.data.canChooseBeds;
                                        isCanChooseMid = cD.data.isCanChooseMid;
                                        if (cD.data.smokeStr != "" && cD.data.smokeStr.length > 0) {
                                            $("#dialog_smoker_msg").html(cD.data.smokeStr);
                                            dhtmlx.createWin({
                                                winId: "dialog_smoker",
                                                closeWinId: ["dialog_smoker_close", "dialog_smoker_cancel"],
                                                okId: "dialog_smoker_ok",
                                                okCallBack: function () {
                                                    l(cD, cu)
                                                },
                                                checkConfirm: function () {
                                                    return true
                                                },
                                                callback: function () {
                                                }
                                            })
                                        } else {
                                            l(cD, cu)
                                        }
                                    }
                                }
                            })
                        } else {
                            aO = false;
                            M()
                        }
                    } else {
                        aO = true
                    }
                } else {
                    aO = false;
                    M()
                }
                $("#trainum").html(bY.length);
                aA(bY)
            }
        } else {
            if (bY.length < 0) {
                aO = true;
                $("#no_filter_ticket").show();
                $("#no_filter_ticket_msg_1").show();
                $("#no_filter_ticket_msg_2").hide();
                $("#trainum").html("0");
                return
            } else {
                aO = true;
                $("#trainum").html(bY.length);
                aA(bY)
            }
        }
    }

    function l(cm, cn) {
        if (cm.data.isNeedPassCode == "N") {
            $("#leftTicketOrderNote").hide();
            $("#qr_submit").nextAll("a").eq(0).hide();
            ischeckAutoSubmitCode = false
        } else {
            $("#leftTicketOrderNote").show();
            $("#qr_submit").nextAll("a").eq(0).show();
            ischeckAutoSubmitCode = true
        }
        if (cm.data && undefined != cm.data.result && typeof(cm.data.result) != "undefined") {
            var co = cm.data.get608Msg;
            if (undefined != co && typeof(co) != "undefined" && "" != co) {
                if (cm.data.name && cm.data.card && cm.data.tel) {
                    $("#608_check_msg").html(co);
                    dhtmlx.createWin({
                        winId: "608_check",
                        closeWinId: ["608_check_close", "608_check_cancel"],
                        okId: "608_check_ok",
                        okCallBack: function () {
                            $("#608_name").html(cm.data.name);
                            $("#608_card").html(cm.data.card);
                            $("#608_tel").html(cm.data.tel);
                            $("#ticketInfo").html(cm.data.ticketInfo);
                            dhtmlx.createWin({
                                winId: "608_complain",
                                closeWinId: ["608_complain_close", "608_complain_cancel"],
                                okId: "608_complain_ok",
                                okCallBack: function () {
                                    var cp = dhtmlx.modalbox({
                                        targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                        callback: function () {
                                        }
                                    });
                                    $.ajax({
                                        url: ctx + "confirmPassenger/report",
                                        type: "post",
                                        async: false,
                                        success: function (cq) {
                                            dhtmlx.modalbox.hide(cp);
                                            dhtmlx.alert({
                                                title: "提示",
                                                ok: messages["button.ok"],
                                                text: cq.data == "Y" ? "举报成功" : "举报失败",
                                                type: "alert-info"
                                            })
                                        },
                                        error: function (cq, cs, cr) {
                                            dhtmlx.modalbox.hide(cp)
                                        }
                                    })
                                },
                                checkConfirm: function () {
                                    return true
                                }
                            });
                            $("#608_complain").css("top", "200px")
                        },
                        checkConfirm: function () {
                            return true
                        }
                    });
                    $("#608_check").css("top", "200px")
                } else {
                    dhtmlx.alert({
                        title: "警告", ok: "确定", text: co, type: "alert-error", callback: function () {
                            var cp = cm.data.result;
                            location_code = cp.split("#")[0];
                            md5Str = cp.split("#")[1];
                            leftTicketStr = cp.split("#")[2];
                            isAsync = cp.split("#")[3];
                            bq(cn, cm.data.isCheckOrderInfo, cm.data.doneHMD)
                        }
                    })
                }
            } else {
                var cl = cm.data.result;
                location_code = cl.split("#")[0];
                md5Str = cl.split("#")[1];
                leftTicketStr = cl.split("#")[2];
                isAsync = cl.split("#")[3];
                bq(cn, cm.data.isCheckOrderInfo, cm.data.doneHMD)
            }
        }
    }

    var O = 0;
    var aY;

    function M() {
        var cl;
        if (rqChecked.length > 1) {
            if (O >= rqChecked.length) {
                O = 0
            }
            cl = rqChecked[O++]
        } else {
            if (train_tour_flag == "fc") {
                cl = $.trim($("#back_train_date").val())
            } else {
                cl = $.trim($("#train_date").val())
            }
        }
        clearInterval(aY);
        aY = window.setInterval(function () {
            if (train_tour_flag == "fc") {
                $("#back_train_date").val(cl)
            } else {
                $("#train_date").val(cl)
            }
            var cm = {
                "leftTicketDTO.train_date": cl,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cg()
            };
            aT();
            aj(cm)
        }, autoSearchTime)
    }

    function h() {
        if (ifAlertCode && !verifyRandCode($("#randCode_other")[0], true)) {
            return
        }
        var cl = bD();
        if (cl.length == 0 || tickets_info.length == cl.length / 2) {
            $("#content_autosubmitcheckticketinfo").hide();
            loadGrayBackground();
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                q()
            } else {
                cj()
            }
        } else {
            dhtmlx.alert({
                title: "警告",
                ok: "确定",
                text: "您还有未选座的乘客，请选座完成后再提交订单！",
                type: "alert-error",
                callback: function () {
                }
            })
        }
    }

    function bU() {
        aw();
        cf(tickets_info);
        T();
        b5();
        $("#i-ok2").hide();
        if (ifAlertCode) {
            refreshImg("passenger", "randp", "other")
        }
        $("#error_msgmypasscode2").hide();
        $("#content_autosubmitcheckticketinfo").show();
        box = dhtmlx.createWin({
            winId: "autosubmitcheckticketinfo", closeWinId: ["back_edit"], callback: function () {
                clearTimeout(aG);
                jPlayer("stop")
            }, okId: "qr_submit", okCallBack: function () {
                jPlayer("stop");
                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                    q()
                } else {
                    cj()
                }
            }, checkConfirm: function () {
                if (!bk()) {
                    return false
                }
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                if (ifAlertCode) {
                    return verifyRandCode($("#randCode_other")[0], true)
                } else {
                    if (isAsync == ticket_submit_order.request_flag.isAsync) {
                        q()
                    } else {
                        cj()
                    }
                }
            }
        });
        var cm = parseInt(intervalTime / timer_time);
        if (!ifAlertCode) {
            ai(timer_time, cm)
        } else {
            var cl = $("#qr_submit1");
            cl.unbind("click");
            cl.removeClass("btn92s").addClass("btn92");
            aF(timer_time, cm)
        }
        if (tickets_info.length > 3 && canChooseSeats && "Y" == canChooseSeats) {
            $("#autosubmitcheckticketinfo").css("top", "70px")
        } else {
            $("#autosubmitcheckticketinfo").css("top", "100px")
        }
        $("#autosubmitcheckticketinfo").css("position", "absolute");
        $(".dhx_modal_cover").css("background-color", "#EEEEEE");
        $("#randCode_other").focus()
    }

    var aG;

    function ai(cm, cl) {
        if (cm == 0) {
            clearTimeout(aG);
            h();
            return
        } else {
            cm--
        }
        aG = setTimeout(function () {
            ai(cm, cl)
        }, cl)
    }

    var br;

    function aF(cn, cm) {
        if (cn == 0) {
            clearTimeout(br);
            var cl = $("#qr_submit1");
            cl.unbind("click").bind("click", h);
            cl.removeClass("btn92").addClass("btn92s");
            return
        } else {
            cn--
        }
        br = setTimeout(function () {
            aF(cn, cm)
        }, cm)
    }

    function aH() {
        if (a8.length == 0) {
            return
        }
        var cl = bc();
        var cm = bS(cl);
        $("#train_stop").appendTo($("body")).hide();
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        if (cm.length > 0) {
            $("#no_filter_ticket").hide();
            $("#trainum").html(cm.length)
        } else {
            $("#no_filter_ticket").show();
            $("#no_filter_ticket_msg_1").show();
            $("#no_filter_ticket_msg_2").hide();
            $("#trainum").html("0");
            return
        }
        aA(cm)
    }

    function bv(cm) {
        var cl = b8.createWindow(cm + "_", 0, 0, 660, 100);
        cl.attachObject(cm);
        cl.clearIcon();
        cl.denyResize();
        cl.setModal(true);
        cl.center();
        cl.button("park").hide();
        cl.button("minmax1").hide();
        cl.hideHeader();
        return cl
    }

    function aw() {
        var cq = new Array();
        $("#autosubmit_check_ticket_tit").html("");
        var co = $("#train_date").val();
        var cl = bi(new Date(Date.parse(co.replace(/-/g, "/"))));
        var cm = K.queryLeftNewDTO.station_train_code;
        var cv = null;
        var cw = K.queryLeftNewDTO.from_station_name;
        var cp = K.queryLeftNewDTO.to_station_name;
        var cr = K.queryLeftNewDTO.start_time;
        var cu = K.queryLeftNewDTO.arrive_time;
        var ct = function (cy, cA, cx, cC, cz, cB, cE, cD) {
            this.date = cy;
            this.week = cA;
            this.station_train_code = cx;
            this.train_headers = cC;
            this.from_station = cz;
            this.start_time = cB;
            this.to_station = cE;
            this.arrive_time = cD
        };
        var cn = new ct(co, cl, cm, cv, cw, cr, cp, cu);
        cq.push(cn);
        var cs = $("#autoSubTicketTitTemplate").html();
        $.templates({leftTableTemplate: cs});
        $("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(cq))
    }

    function m(cx) {
        if (aY) {
            clearInterval(aY)
        }
        var cm = "";
        var cn = "";
        var cs = "";
        var co = "";
        if ($("#sf2").is(":checked")) {
            cs = "3";
            co = "学生票"
        }
        tickets_info = new Array();
        var cy = cx[1];
        var cr = cx[2];
        var cq = 0;
        var cp = passengerChecked.length;
        for (var ct = 0; ct < cr.length; ct++) {
            var cv = 0;
            if (cr[ct].toLowerCase() == "srrb" || cr[ct].toLowerCase() == "yyrw") {
                var cl = cy.queryLeftNewDTO["seat_types"];
                if (cr[ct].toLowerCase() == "srrb" && cl.indexOf("F") > -1) {
                    cv = cy.queryLeftNewDTO["rw_num"]
                }
                if (cr[ct].toLowerCase() == "yyrw" && cl.indexOf("A") > -1) {
                    cv = cy.queryLeftNewDTO["gr_num"]
                }
            } else {
                cv = cy.queryLeftNewDTO[cr[ct].toLowerCase() + "_num"]
            }
            if (cv == "--" || cv == "无") {
                cv = 0
            } else {
                if (cv == "有") {
                    cv = 20
                } else {
                    cv = Number(cv)
                }
            }
            if (cq >= cp) {
                break
            }
            var cw = cr[ct];
            cm = av(cw);
            cn = J(cw);
            for (var cu = 0; cu < cv; cu++) {
                if (cq >= cp) {
                    break
                }
                cs = passengerChecked[cu].passenger_type;
                if (!cs || "" == cs) {
                    cs = "1"
                }
                if (cs == "1") {
                    co = "成人票"
                } else {
                    if (cs == "2") {
                        co = "儿童票"
                    } else {
                        if (cs == "3") {
                            co = "学生票"
                        } else {
                            if (cs == "4") {
                                co = "残军票"
                            }
                        }
                    }
                }
                tickets_info.push(new a9("sdAdd_" + am(), cm, cn, cs, co, passengerChecked[cq].passenger_name, passengerChecked[cq].passenger_id_type_code, passengerChecked[cq].passenger_id_type_name, passengerChecked[cq].passenger_id_no, passengerChecked[cq].mobile_no));
                cq++
            }
        }
    }

    function cf(cm) {
        var cl;
        if ("X" == canChooseBeds) {
            $("#bed_show").html("<span style='background:url(../resources/images/icon_new.png) right center no-repeat; padding-right:30px; cursor: pointer;' title='欢迎使用12306选铺功能'>铺别</span>");
            cl = $("#autoSubCheckTicketInfoTemplate_chooseBeds").html().replace("<!--", "").replace("-->", "");
            $("#bed_show").show()
        } else {
            $("#bed_show").hide();
            cl = $("#autoSubCheckTicketInfoTemplate").html()
        }
        $.templates({leftTableTemplate: cl});
        $("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(cm))
    }

    function j() {
        var co = K.queryLeftNewDTO.yz_num;
        var cl = K.queryLeftNewDTO.rz_num;
        var cs = K.queryLeftNewDTO.yw_num;
        var cq = K.queryLeftNewDTO.rw_num;
        var cr = K.queryLeftNewDTO.gr_num;
        var cp = K.queryLeftNewDTO.ze_num;
        var cu = K.queryLeftNewDTO.zy_num;
        var cv = K.queryLeftNewDTO.tz_num;
        var cm = K.queryLeftNewDTO.swz_num;
        var ct = K.queryLeftNewDTO.wz_num;
        var cn = "";
        if (co != "--") {
            cn = "YZ";
            return cn
        }
        if (cp != "--") {
            cn = "ZE";
            return cn
        }
        if (cs != "--") {
            cn = "YW";
            return cn
        }
        if (cu != "--") {
            cn = "ZY";
            return cn
        }
        if (cl != "--") {
            cn = "RZ";
            return cn
        }
        if (cq != "--") {
            cn = "RW";
            return cn
        }
        if (cv != "--") {
            cn = "TZ";
            return cn
        }
        if (cr != "--") {
            cn = "GR";
            return cn
        }
        if (cm != "--") {
            cn = "SWZ";
            return cn
        }
        if (ct != "--") {
            cn = "WZ";
            return cn
        }
    }

    function J(cm) {
        var cl = "";
        if (cm == "ZY") {
            cl = "一等座"
        }
        if (cm == "ZE") {
            cl = "二等座"
        }
        if (cm == "SWZ") {
            cl = "商务座"
        }
        if (cm == "TZ") {
            cl = "特等座"
        }
        if (cm == "YZ") {
            cl = "硬座"
        }
        if (cm == "RZ") {
            cl = "软座"
        }
        if (cm == "YW") {
            cl = "硬卧"
        }
        if (cm == "RW") {
            cl = "软卧"
        }
        if (cm == "GR") {
            cl = "高级软卧"
        }
        if (cm == "SRRB") {
            cl = "动卧"
        }
        if (cm == "YYRW") {
            cl = "高级动卧"
        }
        if (cm == "WZ") {
            cl = "无座"
        }
        return cl
    }

    function av(cm) {
        var cl = "";
        if (cm == "ZY") {
            cl = "M"
        }
        if (cm == "ZE") {
            cl = "O"
        }
        if (cm == "SWZ") {
            cl = "9"
        }
        if (cm == "TZ") {
            cl = "P"
        }
        if (cm == "YZ") {
            cl = "1"
        }
        if (cm == "RZ") {
            cl = "2"
        }
        if (cm == "YW") {
            cl = "3"
        }
        if (cm == "RW") {
            cl = "4"
        }
        if (cm == "GR") {
            cl = "6"
        }
        if (cm == "WZ") {
            cl = "WZ"
        }
        if (cm == "SRRB") {
            cl = "F"
        }
        if (cm == "YYRW") {
            cl = "A"
        }
        return cl
    }

    function a9(cs, cn, co, cq, cp, cm, cu, ct, cr, cl) {
        this.only_id = cs, this.seat_type = cn;
        this.seat_type_name = co;
        this.ticket_type = cq, this.ticket_type_name = cp;
        this.name = cm;
        this.id_type = cu;
        this.id_type_name = ct;
        this.id_no = cr;
        this.phone_no = cl;
        this.toString = function () {
            return this.name + "_" + this.id_type + "_" + this.id_no + "_" + this.phone_no
        }
    }

    function am() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var cn = 0;
            for (var cm = 0; cm < tickets_info.length; cm++) {
                var cl = Number(tickets_info[cm].only_id.split("_")[1]);
                if (cl > cn) {
                    cn = cl
                }
            }
            return cn + 1
        }
    }

    function aX() {
        bJ = [];
        W = [];
        aC = [];
        tickets_info = [];
        bO = [];
        bY = [];
        K = "";
        isAsync = "";
        location_code = "";
        md5Str = "";
        leftTicketStr = ""
    }

    getpassengerTicketsForAutoSubmit = function () {
        var cm = "";
        for (var cr = 0; cr < tickets_info.length; cr++) {
            var cs = "";
            if ("WZ" == tickets_info[cr].seat_type) {
                cs = av(j())
            } else {
                cs = tickets_info[cr].seat_type
            }
            var cp = $("#autosubmit_check_ticketInfo").find("select[id^=ticketype_]");
            var ct = "0";
            if (cp && cp.length > 0) {
                var cl = tickets_info[cr].seat_type + "#" + tickets_info[cr].ticket_type + "#" + tickets_info[cr].name + "#" + tickets_info[cr].id_no;
                for (var cq = 0, cw = cp.length; cq < cw; cq++) {
                    var cu = cp.eq(cq);
                    var cn = cu.val().split("_")[0];
                    var co = cu.val().split("_")[1];
                    if (cl == cn) {
                        ct = co
                    }
                }
            }
            var cv = cs + "," + ct + "," + tickets_info[cr].ticket_type + "," + tickets_info[cr].name + "," + tickets_info[cr].id_type + "," + tickets_info[cr].id_no + "," + (tickets_info[cr].phone_no == null ? "" : tickets_info[cr].phone_no) + ",N";
            cm += cv + "_"
        }
        return cm.substring(0, cm.length - 1)
    };
    getOldPassengersForAutoSubmit = function () {
        var cn = "";
        for (var cm = 0; cm < passengerChecked.length; cm++) {
            var cl = passengerChecked[cm].passenger_name + "," + passengerChecked[cm].passenger_id_type_code + "," + passengerChecked[cm].passenger_id_no + "," + passengerChecked[cm].passenger_type;
            cn += cl + "_"
        }
        return cn
    };
    var aM = false;

    function bq(cl, cm) {
        var cq = "";
        var cn = $("#train_date").val().split("-");
        var co = new Date();
        co.setFullYear(cn[0], cn[1] - 1, cn[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != "") {
            var cp = null;
            if (tickets_info[0].seat_type == "WZ") {
                if (K.queryLeftNewDTO.yz_num != "--") {
                    tickets_info[0].seat_type = "1";
                    aM = true;
                    tickets_info[0].seat_type_name = "硬座"
                } else {
                    if (K.queryLeftNewDTO.ze_num != "--") {
                        tickets_info[0].seat_type = "O";
                        aM = true;
                        tickets_info[0].seat_type_name = "二等座"
                    }
                }
            }
            $.ajax({
                url: ctx + "confirmPassenger/getQueueCountAsync",
                type: "post",
                async: false,
                data: {
                    train_date: co.toString(),
                    train_no: K.queryLeftNewDTO.train_no,
                    stationTrainCode: K.queryLeftNewDTO.station_train_code,
                    seatType: tickets_info[0].seat_type,
                    fromStationTelecode: K.queryLeftNewDTO.from_station_telecode,
                    toStationTelecode: K.queryLeftNewDTO.to_station_telecode,
                    leftTicket: leftTicketStr,
                    purpose_codes: cl,
                    isCheckOrderInfo: cm
                },
                dataType: "json",
                success: function (ct) {
                    if (ct.status) {
                        if (ct.data.isRelogin == "Y") {
                            window.location.href = ctx + "login/init?random=" + new Date().getTime()
                        }
                        var cu = null;
                        var cs = tickets_info[0].seat_type;
                        cu = ct.data.ticket.split(",");
                        cq = "本次列车，" + (tickets_info[0].seat_type_name).split("（")[0] + "余票";
                        if (parseInt(cu[0]) >= 0) {
                            cq += "<strong>" + cu[0] + "</strong>张"
                        } else {
                            cq += cu[0]
                        }
                        var cr = false;
                        if (cu.length > 1) {
                            cq += ",无座余票";
                            if (parseInt(cu[1]) >= 0) {
                                cq += "<strong>" + cu[1] + "</strong>张"
                            } else {
                                cq += cu[1]
                            }
                            cr = true
                        }
                        cq += "。";
                        if (ct.data.op_2 == "true") {
                            if ((aM && !cr) || !aM) {
                                aO = false;
                                M();
                                return
                            }
                            cq += '<font color="red">目前排队人数已经超过余票张数，请您选择其他席别或车次。</font>'
                        } else {
                            if (ct.data.countT > 0) {
                                cq += '目前排队人数<font color="red">' + ct.data.countT + "</font>人，";
                                if (if_show_pass_code_login == "Y") {
                                    cq += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。"
                                }
                            }
                        }
                        var cv = $("#sy_ticket_num_id");
                        if (cv != null) {
                            cv.html(cq)
                        }
                        bU()
                    }
                },
                error: function (cr, ct, cs) {
                    return
                }
            })
        } else {
            bU()
        }
    }

    function bs(cm, cl) {
        rt = "";
        seat_1 = -1;
        seat_2 = -1;
        i = 0;
        while (i < cm.length) {
            s = cm.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == cl) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == "0") {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > -1) {
            rt += seat_1
        }
        if (seat_2 > -1) {
            rt += "," + seat_2
        }
        return rt
    }

    function cj() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingle",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                tour_flag: "dc",
                randCode: $("#randCode_other").val(),
                purpose_codes: cg(),
                key_check_isChange: md5Str,
                train_location: location_code,
                choose_seats: bD(),
                seatDetailType: aL()
            },
            dataType: "json",
            async: true,
            success: function (cl) {
                if (cl.status) {
                    if (cl.data.submitStatus) {
                        otsRedirect("post", ctx + "payOrder/init?random=" + new Date().getTime(), {})
                    } else {
                        ac("出票失败!", false, "原因： " + cl.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function () {
                            af("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function (cl, cn, cm) {
                ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }

    function q() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingleForQueueAsys",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                randCode: $("#randCode_other").val(),
                purpose_codes: cg(),
                key_check_isChange: md5Str,
                leftTicketStr: leftTicketStr,
                train_location: location_code,
                choose_seats: bD(),
                seatDetailType: aL()
            },
            dataType: "json",
            async: true,
            success: function (cl) {
                $("#i-ok").css("display", "none");
                $("#i-ok2").css("display", "none");
                $("#c_error2").html("");
                $("#c_error2").removeClass("error");
                $("#randCode2").val("");
                if (cl.status) {
                    if (!cl.data.submitStatus) {
                        ac("出票失败!", false, "原因： " + cl.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function () {
                            af("transforNotice_id", true)
                        });
                        if (cl.data.errMsg.indexOf("余票不足") >= 0) {
                            jPlayer("stop");
                            $("#qr_closeTranforDialog_id").click();
                            $("#query_ticket").click()
                        }
                    } else {
                        var cm = new OrderQueueWaitTime("dc", an, r);
                        cm.start(queryOrderWaitTimeInterval)
                    }
                } else {
                    ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function (cl, cn, cm) {
                ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }

    function an(cl, cn, cm) {
        if (cn <= 5) {
            ac("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
        } else {
            if (cn > 30 * 60) {
                ac("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
            } else {
                ac("订单已经提交，最新预估等待时间" + cm + "，请耐心等待。", false, "", false, "queue")
            }
        }
    }

    function r(cl, cn, cm) {
        if (cn == -1 || cn == -100) {
            $.ajax({
                url: ctx + "confirmPassenger/resultOrderForDcQueue",
                data: {orderSequence_no: cm.orderId},
                type: "POST",
                dataType: "json",
                success: function (co) {
                    if (co.status) {
                        if (co.data.submitStatus) {
                            otsRedirect("post", ctx + "/payOrder/init?random=" + new Date().getTime(), {})
                        } else {
                            ac("下单成功", false, "", false, "win")
                        }
                    } else {
                        ac("下单成功。", false, "", false, "win")
                    }
                },
                error: function (co, cq, cp) {
                    ac("下单成功。", false, "", false, "win")
                }
            })
        } else {
            bH(cn, cm)
        }
    }

    function bH(cl, cm) {
        if (cm.name && cm.card && cm.tel) {
            af("transforNotice_id", true);
            $("#608_check_msg").html(cm.msg);
            dhtmlx.createWin({
                winId: "608_check",
                closeWinId: ["608_check_close", "608_check_cancel"],
                okId: "608_check_ok",
                okCallBack: function () {
                    $("#608_name").html(cm.name);
                    $("#608_card").html(cm.card);
                    $("#608_tel").html(cm.tel);
                    $("#ticketInfo").html(cm.ticketInfo);
                    dhtmlx.createWin({
                        winId: "608_complain",
                        closeWinId: ["608_complain_close", "608_complain_cancel"],
                        okId: "608_complain_ok",
                        okCallBack: function () {
                            var cn = dhtmlx.modalbox({
                                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                callback: function () {
                                }
                            });
                            $.ajax({
                                url: ctx + "confirmPassenger/report",
                                type: "post",
                                async: false,
                                success: function (co) {
                                    dhtmlx.modalbox.hide(cn);
                                    if (co.data == "Y") {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报成功",
                                            type: "alert-info"
                                        })
                                    } else {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报失败",
                                            type: "alert-error"
                                        })
                                    }
                                    $("#i-okmypasscode1").hide();
                                    if (ifAlertCode) {
                                        refreshImg("passenger", "randp", "other")
                                    }
                                },
                                error: function (co, cq, cp) {
                                    dhtmlx.modalbox.hide(cn)
                                }
                            })
                        },
                        checkConfirm: function () {
                            return true
                        }
                    });
                    $("#608_complain").css("top", "200px")
                },
                checkConfirm: function () {
                    return true
                },
                callback: function () {
                    $("#i-okmypasscode1").hide();
                    if (ifAlertCode) {
                        refreshImg("passenger", "randp", "other")
                    }
                }
            });
            $("#608_check").css("top", "200px");
            return
        }
        if (cl == -1) {
            return
        } else {
            if (cl == -2) {
                if (cm.errorcode == 0) {
                    ac("订票失败!", true, "原因： " + cm.msg, true, "lose")
                } else {
                    ac("订票失败!", true, "原因： " + cm.msg, true, "lose")
                }
                if (cm.msg.indexOf("没有足够的票") > -1) {
                    jPlayer("stop");
                    $("#qr_closeTranforDialog_id").click();
                    $("#query_ticket").click()
                }
            } else {
                if (cl == -3) {
                    ac("哎呀,订票失败!", true, "订单已撤销", true, "lose")
                } else {
                    window.location.href = ctx + "queryOrder/initNoComplete?random=" + new Date().getTime()
                }
            }
        }
    }

    function R() {
        ce = new dhtmlXWindows();
        ce.enableAutoViewport(true);
        ce.setSkin("dhx_terrace");
        ce.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        af = function (cp, co) {
            unLoadGrayBackground();
            if (ce.isWindow(cp + "_")) {
                ce.window(cp + "_").setModal(false);
                ce.window(cp + "_").hide()
            }
        };
        ac = function (cv, cs, cp, co, cr) {
            var cu = '<div class="tit">' + (cs ? '<span class="colorC">' + cv + "</span>" : cv) + "</div>";
            var cq = "<P>" + cp + "</p>";
            var ct = cs ? '<p>请点击[<a href="' + ctx + 'queryOrder/init"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'queryOrder/initNoComplete">未完成订单</a>”</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + cr);
            if (co) {
                $("#up-box-hd_id").html("提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
                ct = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
            } else {
                $("#up-box-hd_id").html("提示");
                $("#lay-btn_id").html("")
            }
            $("#orderResultInfo_id").html(cu + (cp == "" || cp == null || cp == "undefined" || cp == undefined ? "" : cq) + ct);
            cl("transforNotice_id");
            if (co) {
                $("#closeTranforDialog_id").click(function () {
                    af("transforNotice_id", true)
                });
                $("#qr_closeTranforDialog_id").click(function () {
                    af("transforNotice_id", true);
                    $("#i-ok").css("display", "none")
                })
            }
        };
        function cl(cs) {
            af(cs, false);
            if ("checkticketinfo_id" == cs) {
                var cq = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (cq.to_station_telecode == ticket_submit_order.special_areas.lso || cq.to_station_telecode == ticket_submit_order.special_areas.dao || cq.to_station_telecode == ticket_submit_order.special_areas.ado || cq.to_station_telecode == ticket_submit_order.special_areas.nqo || cq.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (cm()) {
                        $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                        $("#notice_2_id").html("2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
                        if (cn()) {
                            $("#notice_3_id").html("3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                    if (cn()) {
                        $("#notice_3_id").html("2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                    } else {
                        $("#notice_3_id").html("")
                    }
                }
            }
            var cp = a2(cs);
            var co = $(window).width() / 2 - 300;
            var cr = cd() + ($(window).height() / 2 - 200);
            cp.setDimension($("#content_" + cs).width(), $("#content_" + cs).height() + 10);
            $(".dhtmlx_window_active").height($("#content_" + cs).height());
            $(".dhtmlx_window_active").css({left: co + "px", top: cr + "px"})
        }

        function cn() {
            for (var cp = 0; cp < limit_tickets.length; cp++) {
                var co = limit_tickets[cp];
                if (co.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }

        function cm() {
            for (var cp = 0; cp < limit_tickets.length; cp++) {
                var co = limit_tickets[cp];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && co.save_status != "" && (co.id_type == ticket_submit_order.passenger_card_type.passport || co.id_type == ticket_submit_order.passenger_card_type.work || co.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && (co.id_type == ticket_submit_order.passenger_card_type.passport || co.id_type == ticket_submit_order.passenger_card_type.work || co.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                        return true
                    }
                }
            }
            return false
        }
    }

    function a2(cm) {
        var cl = ce.createWindow(cm + "_", 0, 0, 660, 100);
        cl.attachObject(cm);
        cl.clearIcon();
        cl.denyResize();
        cl.setModal(true);
        cl.center();
        cl.button("park").hide();
        cl.button("minmax1").hide();
        cl.hideHeader();
        return cl
    }

    function C(cm) {
        var cl = new Date();
        var cn = cm.split("-");
        cl.setFullYear(parseInt(cn[0]), parseInt(cn[1] - 1, 10), parseInt(cn[2], 10));
        if (cn.length >= 6) {
            cl.setHours(cn[3], cn[4], cn[5])
        }
        return cl
    }

    function aD(cl) {
        var co = "", cn = "";
        var cq = cl.replace(/-/g, "");
        if (cq.substring(4, 5) == "0") {
            co = cq.substring(5, 6) + "月"
        } else {
            co = cq.substring(4, 6) + "月"
        }
        if (cq.substring(6, 7) == "0") {
            cn = cq.substring(7, 8) + "日"
        } else {
            cn = cq.substring(6, 8) + "日"
        }
        var cm = new Date(Date.parse(cl.replace(/-/g, "/")));
        var cp = "日一二三四五六";
        return co.concat(cn).concat("&nbsp;&nbsp;").concat("周").concat(cp.charAt(cm.getDay()))
    }

    showTicketPrice = function (cp) {
        var ct = $(cp).parent("tr").children("td").children("div").children("div").children("span").attr("id");
        if (undefined == ct || ct == null || "undefined" == typeof(ct)) {
            ct = $(cp).attr("id")
        }
        $("#price_" + cq).hide();
        $("#tp-list-price").hide();
        $("#sleeper-price>span").css("cursor", "pointer");
        var cq = ct.split("_")[0];
        var cr = $("#price_" + cq).attr("datatran");
        var cs = ct.split("_")[1];
        var co = ct.split("_")[2];
        var cu = ct.split("_")[3];
        var cn = ct.split("_")[4];
        var cl = $("#WZ_" + cq).html();
        var cm = $("#QT_" + cq).html();
        if (cn && ($("#ticket_" + cq + "_train>span>span").text() == "查看票价")) {
            if ($("#ticket_" + cq).attr("class") == "bgc") {
                $("#price_" + cq).addClass("bgc")
            }
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function (cv) {
                    cv.setRequestHeader("If-Modified-Since", "0");
                    cv.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPriceFL",
                data: {
                    train_no: cq,
                    from_station_no: cs,
                    to_station_no: co,
                    seat_types: cn,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                timeout: 1000,
                error: function (cv, cx, cw) {
                },
                success: function (cv) {
                }
            });
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function (cv) {
                    cv.setRequestHeader("If-Modified-Since", "0");
                    cv.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPrice",
                data: {
                    train_no: cq,
                    from_station_no: cs,
                    to_station_no: co,
                    seat_types: cn,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                success: function (cv) {
                    if (cv.status) {
                        $("#ticket_" + cq + "_train>span>span").html("收起票价");
                        $("#ticket_" + cq + "_train>span>b").addClass("open");
                        $("#ticket_" + cq + "_train>span>b").attr("title", "收起票价");
                        if (cm == "--") {
                            cv.data.MIN = ""
                        }
                        if (cl == "--") {
                            cv.data.WZ = ""
                        }
                        $("#price_" + cq).html($.render.priceTableTemplate(cv.data));
                        $("#price_" + cq).show();
                        if (cr && c(cr)) {
                            $("#price_" + cq).find("td").eq(0).html('<a class="ad-tlist-hot" href="javascript:void(0);">移动宾馆 免费晚餐 快捷舒适 准时正点</a>')
                        } else {
                            $("#price_" + cq).find("td").eq(0).html("")
                        }
                        if (cv.data.PM != "--") {
                            $("#sleeper-price_" + cq).mouseover(function () {
                                $("#tp-list-price_" + cq).show()
                            });
                            $("#sleeper-price_" + cq).mouseout(function () {
                                $("#tp-list-price_" + cq).hide()
                            })
                        }
                    }
                }
            })
        } else {
            $("#ticket_" + cq + "_train>span>span").html("查看票价");
            $("#ticket_" + cq + "_train>span>b").attr("title", "查看票价");
            $("#ticket_" + cq + "_train>span>b").removeClass();
            $("#price_" + cq).html("");
            $("#price_" + cq).hide()
        }
    };
    function bS(cl) {
        if (ay == "starttime") {
            return cl.sort(function (cn, cm) {
                var cp = Number(cn.queryLeftNewDTO.start_time.replace(":", ""));
                var co = Number(cm.queryLeftNewDTO.start_time.replace(":", ""));
                if (cp > co) {
                    return a1 ? 1 : -1
                } else {
                    return a1 ? -1 : 1
                }
            })
        } else {
            if (ay == "arrivedtime") {
                return cl.sort(function (cn, cm) {
                    var cp = Number(cn.queryLeftNewDTO.arrive_time.replace(":", ""));
                    var co = Number(cm.queryLeftNewDTO.arrive_time.replace(":", ""));
                    if (cp > co) {
                        return b1 ? 1 : -1
                    } else {
                        return b1 ? -1 : 1
                    }
                })
            } else {
                if (ay == "lishi") {
                    return cl.sort(function (cn, cm) {
                        var cp = Number(cn.queryLeftNewDTO.lishi.replace(":", ""));
                        var co = Number(cm.queryLeftNewDTO.lishi.replace(":", ""));
                        if (cp > co) {
                            return aW ? 1 : -1
                        } else {
                            return aW ? -1 : 1
                        }
                    })
                }
            }
        }
        return cl
    }

    function az() {
        $("#s_time").click(function () {
            if (a1) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a1 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a1 = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ay = "starttime";
            aH()
        });
        $("#other_span_starttime").click(function () {
            if (a1) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a1 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a1 = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ay = "starttime";
            aH()
        });
        $("#r_time").click(function () {
            if (b1) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b1 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                $("#other_span_endtime").removeClass().addClass("b2");
                $("#other_span_lishi").removeClass().addClass("b2")
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b1 = true;
                $("#other_span_endtime").removeClass().addClass("b2");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ay = "arrivedtime";
            aH()
        });
        $("#other_span_endtime").click(function () {
            if (b1) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b1 = false;
                $("#other_span_endtime").removeClass().addClass("b4");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b1 = true;
                $("#other_span_endtime").removeClass().addClass("b3");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ay = "arrivedtime";
            aH()
        });
        $("#l_s").click(function () {
            if (aW) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aW = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aW = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ay = "lishi";
            aH()
        });
        $("#other_span_lishi").click(function () {
            if (aW) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aW = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aW = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ay = "lishi";
            aH()
        })
    }

    closeTrainStop = function () {
        over_flag = false;
        bZ = 0;
        $("#train_stop").hide();
        $("#train_table").html("")
    };
    hideTrainStop = function (cl) {
        over_flag = false;
        if (p) {
            clearTimeout(p)
        }
        p = window.setTimeout(function () {
            if (bZ != 1) {
                bZ = 0;
                $("#train_stop").hide();
                $("#train_table").html("")
            }
        }, 130)
    };
    checkHover = function (cm, cl) {
        if (getEvent(cm).type == "mouseover") {
            return !$.contains(cl, getEvent(cm).relatedTarget || getEvent(cm).fromElement) && !((getEvent(cm).relatedTarget || getEvent(cm).fromElement) === cl)
        } else {
            return !$.contains(cl, getEvent(cm).relatedTarget || getEvent(cm).toElement) && !((getEvent(cm).relatedTarget || getEvent(cm).toElement) === cl)
        }
    };
    getEvent = function (cl) {
        return cl || window.event
    };
    checkHover = function (cm, cl) {
        if (getEvent(cm).type == "mouseover") {
            return !$.contains(cl, getEvent(cm).relatedTarget || getEvent(cm).fromElement) && !((getEvent(cm).relatedTarget || getEvent(cm).fromElement) === cl)
        } else {
            return !$.contains(cl, getEvent(cm).relatedTarget || getEvent(cm).toElement) && !((getEvent(cm).relatedTarget || getEvent(cm).toElement) === cl)
        }
    };
    getEvent = function (cl) {
        return cl || window.event
    };
    function bB(cn, cl) {
        for (var cm = 0; cm < cl.length; cm++) {
            if (cl[cm].key == cn) {
                return true
            }
        }
        return false
    }

    function bl(cp) {
        var cu = function (cv) {
            this.value = cv
        };
        var cq = new Array();
        var cm = new Array();
        var co = {};
        var cl = {};
        $("#cc_from_station_name_all>ul").html("");
        $("#cc_to_station_name_all>ul").html("");
        var cn;
        var ct;
        var cs;
        for (var cr = 0; cr < cp.length; cr++) {
            cn = cp[cr].queryLeftNewDTO.from_station_name;
            ct = cp[cr].queryLeftNewDTO.to_station_name;
            cs = cp[cr];
            if (!co[cn]) {
                cq.push(new cu(cn));
                co[cn] = true
            }
            if (!cl[ct]) {
                cm.push(new cu(ct));
                cl[ct] = true
            }
        }
        $("#to_station_ul").html($.render.toStationNameTableTemplate(cm));
        $("#from_station_ul").html($.render.stationNameTableTemplate(cq));
        $("#sear-sel-bd input[name='cc_from_station']").click(function () {
            k(bA, "cc_from_station_" + $(this).val());
            var cv = $("input[name='cc_from_station']");
            var cw = $("input[name='cc_from_station']:checked");
            if ($(this).is(":checked")) {
                if (cv && cw && cw.length == cv.length) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cv && cw && cw.length == 0) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aH()
        });
        $("#sear-sel-bd input[name='cc_to_station']").click(function () {
            k(bo, "cc_to_station_" + $(this).val());
            var cv = $("input[name='cc_to_station']");
            var cw = $("input[name='cc_to_station']:checked");
            if ($(this).is(":checked")) {
                if (cv && cw && cw.length == cv.length) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cv && cw && cw.length == 0) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aH()
        })
    }

    submitOrderRequest = function (cm, cl) {
        $.ajax({
            type: "post", url: ctx + "login/checkUser", data: {}, beforeSend: function (cn) {
                cn.setRequestHeader("If-Modified-Since", "0");
                cn.setRequestHeader("Cache-Control", "no-cache")
            }, success: function (cn) {
                var cp;
                checkusermdId = cn.attributes;
                if (cn.data.flag) {
                    if (train_tour_flag == "fc") {
                        cp = $("#back_train_date").val()
                    } else {
                        cp = $("#train_date").val()
                    }
                    if (x == "0X00") {
                        var co = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (C(studentComPerArr[i - 1]) <= C(cp) && C(studentComPerArr[i]) >= C(cp)) {
                                co = true;
                                break
                            }
                        }
                        if (!co) {
                            b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
                            return
                        }
                    }
                    S(cm, cl)
                } else {
                    bv();
                    $("#floatTable").hide();
                    a = $(window).scrollTop();
                    aa(cm, cl)
                }
            }
        })
    };
    function S(cy, cr) {
        var cl = "";
        if ($("#dc").is(":checked")) {
            cl = "dc"
        } else {
            cl = "wc"
        }
        if (train_tour_flag == "fc") {
            cl = "fc";
            var co = cr.split(":");
            var cn = $("#back_train_date").val() + "-" + co[0] + "-" + co[1] + "-00";
            try {
                if (roundReferTime) {
                    if (C(roundReferTime) >= C(cn)) {
                        b("您预订的往程车票到站时间为" + C(roundReferTime).format("yyyy年MM月dd日 hh时mm分") + "，返回日期不能早于此时间");
                        return
                    }
                }
            } catch (ct) {
            }
        }
        if (train_tour_flag == "gc") {
            cl = "gc"
        }
        if ("undefined" == typeof(submitForm)) {
            var cp = "secretStr=" + cy + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cl + "&purpose_codes=" + cg() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cw
        } else {
            var cm = submitForm();
            var cx = cm.split(":::");
            var cs = cx[0].split(",-,")[0];
            var cv = cx[0].split(",-,")[1];
            var cq = cx[1].split(",-,")[0];
            var cu = cx[1].split(",-,")[1];
            var cp = escape(cs) + "=" + escape(cv) + "&" + cq + "=" + cu + "&secretStr=" + cy + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cl + "&purpose_codes=" + cg() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cw
        }
        var cw = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
        $.ajax({
            type: "post",
            url: ctx + "leftTicket/submitOrderRequest",
            data: cp,
            async: false,
            success: function (cz) {
                if (cz.status) {
                    if (cz.data == "Y") {
                        dhtmlx.alert({
                            title: "温馨提示",
                            ok: "确定",
                            text: "您选择的列车距开车时间很近了，请确保有足够的时间抵达车站，并办理换取纸质车票、安全检查、实名制验证及检票等手续，以免耽误您的旅行。",
                            type: "alert-warn",
                            callback: function () {
                                aU(cl, train_tour_flag)
                            }
                        })
                    } else {
                        aU(cl, train_tour_flag)
                    }
                }
            }
        })
    }

    function aU(cm, cl) {
        if (cl != null) {
            if (cl == "fc") {
                otsRedirect("post", ctx + "confirmPassenger/initFc", {});
                return
            }
            if (cl == "gc") {
                otsRedirect("post", ctx + "confirmPassenger/initGc", {});
                return
            }
        }
        if (cm == "dc") {
            otsRedirect("post", ctx + "confirmPassenger/initDc", {});
            return
        } else {
            otsRedirect("post", ctx + "confirmPassenger/initWc", {})
        }
    }

    var ch = $("#fromStation").val();
    var bd = $("#toStation").val();
    var bW = $.trim($("#train_date").val());
    a6 = ch + bd + bW;
    $("#add-train").click(function () {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次", ok: "确定", text: "请填写出发地！", type: "alert-error"});
            return
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次", ok: "确定", text: "请填写目的地！", type: "alert-error"});
            return
        }
        var co = $('#prior_train span[name="prior_train-span"]').length;
        var cp = $.trim($("#inp-train").val()).toUpperCase();
        if (cp.length == 0 || cp == "请输入") {
            dhtmlx.alert({
                title: "输入车次", ok: "确定", text: "请输入车次", type: "alert-error", callback: function () {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }
            })
        } else {
            if (co < 6) {
                var cm = /^[a-zA-Z0-9]+$/;
                var cn = /^[0-9]+$/;
                if (!cm.test(cp)) {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "车次格式输入错误！",
                        type: "alert-error",
                        callback: function () {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    })
                } else {
                    if (cn.test(cp) && cp.length > 4) {
                        dhtmlx.alert({
                            title: "输入车次",
                            ok: "确定",
                            text: "车次格式输入错误！",
                            type: "alert-error",
                            callback: function () {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }
                        })
                    } else {
                        if (cp.length < 2) {
                            dhtmlx.alert({
                                title: "输入车次",
                                ok: "确定",
                                text: "车次格式输入错误！",
                                type: "alert-error",
                                callback: function () {
                                    ccInputSelected = true;
                                    $("#inp-train").select()
                                }
                            })
                        } else {
                            if ($.inArray(cp, ccSelected) < 0) {
                                var cl = "<span name='prior_train-span' class='sel-box w80'>" + cp + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cp + "\",4)'></a></span>";
                                $("#prior_train").append(cl);
                                ccSelected.push(cp);
                                $("#inp-train").val("")
                            } else {
                                dhtmlx.alert({
                                    title: "输入车次",
                                    ok: "确定",
                                    text: "此车次已经添加过！",
                                    type: "alert-error",
                                    callback: function () {
                                        ccInputSelected = true;
                                        $("#inp-train").select()
                                    }
                                })
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({title: "输入车次", ok: "确定", text: "最多添加5个优先车次", type: "alert-error"});
                $("#inp-train").val("")
            }
        }
    });
    function cg() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }

    $("#yxtrain_close").click(function (cl) {
        $("#yxtraindiv").hide()
    });
    $("#yxtrain_a_close").click(function (cl) {
        $("#yxtraininput").val("");
        $("#yxtraininput").trigger("keyup")
    });
    $("#passenger_a_close").click(function (cl) {
        $("#searchPassenger").val("");
        $("#searchPassenger").trigger("keyup")
    });
    $("#yxtraininput").bind("keyup", function () {
        var cm = $(this).val().toUpperCase();
        var cl = $("#yxtrain_code").height();
        if (u(cm, 0)) {
            ck(1)
        } else {
            ck(3)
        }
        $("#yxtrain_code").css("height", cl)
    });
    function ck(cl) {
        $("#yxtrain_loading").hide();
        $("#yxtrain_code").hide();
        $("#yxTrain_page").hide();
        $("#yxtrain_empty").hide();
        if (1 == cl) {
            $("#yxtrain_code").show();
            $("#yxTrain_page").show()
        } else {
            if (2 == cl) {
                $("#yxtrain_loading").show()
            } else {
                if (3 == cl) {
                    $("#yxtrain_empty").show()
                }
            }
        }
    }

    function u(cz, cl) {
        cz = cz.toUpperCase();
        var cv = [];
        var cA = $("#prior_train span:gt(1)");
        if (cA && cA.length > 0) {
            for (var co = 0; co < cA.length; co++) {
                cv.push(cA[co].innerText)
            }
        }
        var cy = [];
        var cu = [];
        if (trainListForIE && trainListForIE.length > 0) {
            for (var cm = 0; cm < trainListForIE.length; cm++) {
                cy.push(trainListForIE[cm]);
                cu.push(trainListForIE[cm])
            }
        }
        if (cz) {
            for (var co = 0; co < cu.length; co++) {
                var ct = cu[co].substring(0, cu[co].indexOf("("));
                if (ct.indexOf(cz) <= -1) {
                    cy.splice($.inArray(cu[co], cy), 1)
                }
            }
        }
        if (cy && cy.length > 0) {
            var cq = "";
            for (var co = 0; co < cy.length; co++) {
                var ct = cy[co];
                var cp = ct.indexOf("(") > -1 ? ct.substring(0, ct.indexOf("(")) : ct;
                var cw = co >= yxTrainPageSize * (cl) && co < yxTrainPageSize * (cl + 1);
                if (cw) {
                    if (cp.indexOf(cz) > -1) {
                        var cs = ct.indexOf(cz);
                        var cr = ct.substring(0, cs);
                        var cx = ct.substring(cs + cz.length, ct.indexOf("("));
                        var cn = ct.substring(ct.indexOf("("));
                        if (cv && cv.length > 0 && $.inArray(cp, cv) > -1) {
                            cq += '<li style="width: 140px;" traincode=' + cp + ' name="yxtrainli" class="cur"><span style="font-size:15px;">' + cr + '<span style="color:red;">' + cz + "</span>" + cx + "</span>" + cn + "</li>"
                        } else {
                            cq += '<li style="width: 140px;" traincode=' + cp + ' name="yxtrainli"><span style="font-size:15px;">' + cr + '<span style="color:red;">' + cz + "</span>" + cx + "</span>" + cn + "</li>"
                        }
                    }
                }
            }
            $("#yxtrain_code").html(cq)
        } else {
            return false
        }
        if (cy.length > 0) {
            E(cl, cy.length)
        }
        $('li[name="yxtrainli"]').click(function () {
            if ($(this).attr("class") == "cur") {
                var cD = $('span[name="prior_train-span"]');
                for (var cB = 0; cB < cD.length; cB++) {
                    var cC = $(cD[cB]).html();
                    if (cC.indexOf($(this).attr("traincode")) > -1) {
                        $(cD[cB]).children().click()
                    }
                }
                $(this).removeClass()
            } else {
                $("#inp-train").val($(this).attr("traincode"));
                var cE = $('#prior_train span[name="prior_train-span"]').length;
                $("#add-train").click();
                if (cE < 6) {
                    $(this).attr("class", "cur");
                    $.chooseAutoSubmit()
                }
            }
        });
        return true
    }

    function E(cl, cm) {
        var cn = Math.ceil(cm / yxTrainPageSize);
        $("#yxTrain_page").html(aE(cl, cn)).show()
    }

    function aE(ct, co) {
        var cp = "";
        cp += (ct == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct - 1) + ')" class="prev">上一页</a>';
        var cu = ct + 1;
        var cq = co;
        var cr = 2;
        var cs = 5;
        var cl = (cu - cr) > 0 ? (cu + cr > cq ? cq - cs + 1 : cu - cr) : 1;
        var cm = cl + cs > cq ? cq + 1 : cl + cs;
        if (cq < cs) {
            for (var cn = 1; cn < cq + 1; cn++) {
                if (cu == cn) {
                    cp += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cn - 1) + ')" class="on">' + (cn) + "</a>"
                } else {
                    cp += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cn - 1) + ')">' + (cn) + "</a>"
                }
            }
        } else {
            for (var cn = cl; cn < cm; cn++) {
                if (cu == cn) {
                    cp += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cn - 1) + ')" class="on">' + (cn) + "</a>"
                } else {
                    cp += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cn - 1) + ')">' + (cn) + "</a>"
                }
            }
        }
        cp += (ct == co - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct + 1) + ')" class="next">下一页</a>';
        return cp
    }

    function a5(ct, co) {
        if (co == 0) {
            return ""
        }
        var cp = "";
        cp += (ct == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct - 1) + ')" class="prev">上一页</a>';
        var cu = ct + 1;
        var cq = co;
        var cr = 2;
        var cs = 5;
        var cl = (cu - cr) > 0 ? (cu + cr > cq ? cq - cs + 1 : cu - cr) : 1;
        var cm = cl + cs > cq ? cq + 1 : cl + cs;
        if (cq < cs) {
            for (var cn = 1; cn < cq + 1; cn++) {
                if (cu == cn) {
                    cp += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cn - 1) + ')" class="on">' + (cn) + "</a>"
                } else {
                    cp += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cn - 1) + ')">' + (cn) + "</a>"
                }
            }
        } else {
            for (var cn = cl; cn < cm; cn++) {
                if (cu == cn) {
                    cp += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cn - 1) + ')" class="on">' + (cn) + "</a>"
                } else {
                    cp += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cn - 1) + ')">' + (cn) + "</a>"
                }
            }
        }
        cp += (ct == co - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct + 1) + ')" class="next">下一页</a>';
        return cp
    }

    function cg() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }

    jQuery.extend({
        chooseAutoSubmit: function () {
            if (!$("#autoSubmit").is(":disabled")) {
                if (!$("#autoSubmit").is(":checked")) {
                    $("#autoSubmit").click()
                }
            }
        }, init_ul4li: function () {
            var cl = [];
            var cn = 0;
            cl[cn++] = '<li><input name="cc_type" value="G" type="checkbox" class="check" /><label for="">GC-高铁/城际</label></li>';
            cl[cn++] = '<li><input name="cc_type" value="D" type="checkbox" class="check" /><label for="">D-动车</label></li>';
            cl[cn++] = '<li><input name="cc_type" value="Z" type="checkbox" class="check" /><label for="">Z-直达</label></li>';
            cl[cn++] = '<li><input name="cc_type" value="T" type="checkbox" class="check" /><label for="">T-特快</label></li>';
            cl[cn++] = '<li><input name="cc_type" value="K" type="checkbox" class="check" /><label for="">K-快速</label></li>';
            cl[cn++] = '<li><input name="cc_type" value="QT" type="checkbox" class="check" /><label for="">其他</label></li>';
            $("#_ul_station_train_code").html(cl.join(""));
            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                var cp = $("#_ul_station_train_code li");
                for (var cm = 2, co = cp.length; cm < co; cm++) {
                    cp.eq(cm).find("input").attr("disabled", "disabled");
                    cp.eq(cm).find("label").attr("for", "").attr("style", "color: rgb(153, 153, 153)")
                }
            }
            $("#startendtime").html('<span class="b1" id="s_time">出发时间</span><br /><span class="b2" id="r_time">到达时间</span>');
            $("#floatstartendtime").html('<span class="b1" id="other_span_starttime">出发时间</span><br /><span class="b2" id="other_span_endtime">到达时间</span>')
        }, parseDateFormat: function (cp) {
            var cl = "";
            var cm = cp.getFullYear();
            var co = cp.getMonth() + 1;
            var cn = cp.getDate();
            if (co < 10) {
                co = "0" + co
            }
            if (cn < 10) {
                cn = "0" + cn
            }
            cl = cm + "-" + co + "-" + cn;
            return cl
        }, renderPassenger: function (cD) {
            if (!cD) {
                cD = 0
            }
            if (passengerAll) {
                var cp = $("#searchPassenger").val();
                var cl = [];
                if (cp != "" && cp != "输入乘客姓名") {
                    var cB = passengerAll.length;
                    for (var cy = 0; cy < cB; cy++) {
                        var cx = passengerAll[cy];
                        if (cx.passenger_name.indexOf(cp) > -1 || (cx.first_letter && cx.first_letter.toUpperCase().indexOf(cp.toUpperCase()) > -1)) {
                            cl.push(cx)
                        }
                    }
                } else {
                    cl = passengerAll.slice(passengerPageSize * (cD), Math.min(passengerPageSize * (cD + 1), passengerAll.length))
                }
                var cw = cl.length;
                var cu = [];
                var cq = 0;
                for (var cy = 0; cy < cw; cy++) {
                    var cx = cl[cy];
                    var cC = cx.passenger_type_name;
                    if (!cC) {
                        cC = ""
                    }
                    var co = "";
                    var cm = "";
                    if ($("#sf2").is(":checked")) {
                        if (cx.passenger_type != "3") {
                            co = " disabled='true' ";
                            cm = " class='color999' "
                        }
                    }
                    var ct = cx.total_times;
                    if (cx.passenger_id_type_code == "2") {
                        co = " disabled='true' ";
                        cm = " class='color999' title='请修改身份信息' "
                    } else {
                        if (cx.passenger_id_type_code == "1") {
                            if (!isCanGP("1", ct)) {
                                co = " disabled='true' ";
                                cm = " class='color999' title='请修改身份信息' "
                            }
                        } else {
                            if (!isCanGP("B", ct)) {
                                co = " disabled='true' ";
                                cm = " class='color999' title='请修改身份信息' "
                            }
                            if (!isCanGP("H", ct)) {
                                co = " disabled='true' ";
                                cm = " class='color999' title='请修改身份信息' "
                            }
                        }
                    }
                    var cv = cC == "成人" ? cx.passenger_name : cx.passenger_name + "(" + cC + ")";
                    cv = cv.substring(0, 9);
                    if (cp != "" && cp != "输入乘客姓名") {
                        if (cx.passenger_name.indexOf(cp) > -1 || (cx.first_letter && cx.first_letter.toUpperCase().indexOf(cp.toUpperCase()) > -1)) {
                            cq++;
                            if ($.pHasInSelected(cx)) {
                                if (cm) {
                                    var cs = cm.indexOf("'");
                                    cm = cm.substring(0, cs + 1) + "cur " + cm.substring(cs + 1)
                                } else {
                                    cm = "class='cur'"
                                }
                            }
                            cu[cy] = "<li style='width:110px' " + cm + " p_value='" + cx.passenger_name + "(" + cC + ")(" + cx.passenger_id_no + ")' name='" + cx.passenger_type + "' codeType='" + cx.passenger_id_type_code + "' flag='" + cx.total_times + "'>" + cv + "</li>"
                        }
                    } else {
                        cq++;
                        if ($.pHasInSelected(cx)) {
                            if (cm) {
                                var cs = cm.indexOf("'");
                                cm = cm.substring(0, cs) + "cur " + cm.substring(cs)
                            } else {
                                cm = "class='cur'"
                            }
                        }
                        cu[cy] = "<li style='width:110px' " + cm + " p_value='" + cx.passenger_name + "(" + cC + ")(" + cx.passenger_id_no + ")'  name='" + cx.passenger_type + "' codeType='" + cx.passenger_id_type_code + "' flag='" + cx.total_times + "'>" + cv + "</li>"
                    }
                }
                var cz = 100;
                var cA = 0;
                if (cq / 3 > 11) {
                    cz = 310;
                    cA = 258
                } else {
                    cz = 100 + parseInt((cq / 3) * 25);
                    cA = cz - 48
                }
                $("#sel-buyer").css("height", cz);
                $("#pContent").css("height", cA);
                $("#buyer-list").html(cu.join(""));
                var cn = 0;
                if (cp != "" && cp != "输入乘客姓名") {
                    cn = cl.length
                } else {
                    cn = passengerAll.length
                }
                var cr = Math.ceil(cn / passengerPageSize);
                $("#passenger_page").html(a5(cD, cr)).show()
            }
            $("#buyer-list li").click(function () {
                if ($(this).hasClass("color999")) {
                    return
                }
                var cG = $("#setion_postion span").length;
                var cI = $(this).attr("p_value");
                if (!$(this).hasClass("cur")) {
                    if (cG < 6) {
                        var cE = "";
                        var cF = true;
                        if (cI.indexOf("成人") > -1 || cI.indexOf("残疾军人、伤残人民警察") > -1) {
                            cE = "<span name='" + cI + "' class='sel-box w80'><a href='javascript:' onclick='$.addChildPassenger(\"" + cI + "\");' style='position:static;background:none;width:auto;' title='您可点击此乘车人添加儿童票。'>" + cI + "</a><a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cI + "\",1)'></a></span>";
                            $("#setion_postion").append(cE);
                            $.checkedPasseanger(cI)
                        } else {
                            if (cI.indexOf("学生") > -1) {
                                var cH = $(this);
                                if ($.checkSeatTypes()) {
                                    cE = "<span name='" + cI + "' class='sel-box w80'>" + cI + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cI + "\",1)'></a></span>";
                                    $("#setion_postion").append(cE);
                                    $.checkedPasseanger(cI)
                                } else {
                                    $("#conifrmdialog_student_to_adult_context").html("当前选择的优先席别有不支持学生票的，是否选择购买成人票？");
                                    dhtmlx.createWin({
                                        winId: "confirmChangeStudentToAdult",
                                        closeWinId: ["close_conifrmdialog_student_to_adult", "cancel_dialog_student_to_adult"],
                                        callback: function () {
                                            $(cH).prop("checked", false)
                                        },
                                        okId: "goto_student_to_adult",
                                        okCallBack: function () {
                                            var cJ = cI.replace(/学生/, "成人");
                                            cE = "<span name='" + cI + "' class='sel-box w80'>" + cJ + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cI + "\",1)'></a></span>";
                                            $("#setion_postion").append(cE);
                                            $.checkedPasseanger(cJ)
                                        }
                                    })
                                }
                            } else {
                                if (cI.indexOf("儿童") > -1) {
                                    cE = "<span name='" + cI + "' class='sel-box w80' title='如需修改旅客类型，请修改相应常用联系人信息。'>" + cI + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cI + "\",1)'></a></span>";
                                    $("#setion_postion").append(cE);
                                    $.checkedPasseanger(cI)
                                } else {
                                    cE = "<span name='" + cI + "' class='sel-box w80'>" + cI + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cI + "\",1)'></a></span>";
                                    $("#setion_postion").append(cE);
                                    $.checkedPasseanger(cI)
                                }
                            }
                        }
                        $(this).addClass("cur");
                        $.chooseAutoSubmit()
                    } else {
                        dhtmlx.alert({title: "添加常用联系人", ok: "确定", text: "最多添加5位联系人", type: "alert-error"});
                        $(this).removeClass("cur")
                    }
                } else {
                    $.each($("#setion_postion span"), function (cJ, cK) {
                        if (cI == $(cK).attr("name")) {
                            $(cK).remove();
                            $.removePasseanger(cI);
                            return
                        }
                    });
                    $(this).removeClass("cur")
                }
            })
        }, reloadPassenger: function () {
            var cl = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function () {
                }
            });
            $.ajax({
                type: "post",
                isTakeParam: false,
                cache: false,
                async: false,
                url: ctx + "confirmPassenger/getPassengerDTOs",
                timeout: 10000,
                error: function (cm, co, cn) {
                    dhtmlx.modalbox.hide(cl)
                },
                success: function (cm) {
                    dhtmlx.modalbox.hide(cl);
                    if (cm.status) {
                        if (cm.data.noLogin == "true") {
                            bv();
                            $("#floatTable").hide();
                            a = $(window).scrollTop();
                            Z()
                        } else {
                            if (cm.data.exMsg != "" && cm.data.exMsg != null && cm.data.exMsg != "null") {
                                b(cm.data.exMsg);
                                return
                            }
                            $("#sel-buyer").show();
                            $("#sel-seat").hide();
                            $("#sel-date").hide();
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16);
                            passengerAll = cm.data.normal_passengers;
                            if (!(passengerAll && passengerAll.length > 0)) {
                                passengerAll = []
                            }
                            var cp = cm.data.dj_passengers;
                            if (cp && cp.length > 0) {
                                var co = cp.length;
                                for (var cn = 0; cn < co; cn++) {
                                    if (!$.checkIsHas(passengerAll, cp[cn])) {
                                        passengerAll.push(cp[cn])
                                    }
                                }
                            }
                            two_isOpenClick = cm.data.two_isOpenClick;
                            other_isOpenClick = cm.data.other_isOpenClick;
                            $.renderPassenger()
                        }
                    }
                }
            })
        }, checkIsHas: function (cn, co) {
            var cm = cn.length;
            for (var cl = 0; cl < cm; cl++) {
                if (cn[cl].passenger_name == co.passenger_name && cn[cl].passenger_id_type_code == co.passenger_id_type_code && co.passenger_id_no == cn[cl].passenger_id_no) {
                    return true
                }
            }
            return false
        }, pHasInSelected: function (co) {
            var cm = passengerChecked.length;
            if (cm > 0) {
                for (var cl = 0; cl < cm; cl++) {
                    var cn = passengerChecked[cl];
                    if (cn.passenger_name == co.passenger_name && cn.passenger_id_type_code == co.passenger_id_type_code && cn.passenger_id_no == co.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        }, showSelectBuyer: function () {
            $("#sel-seat").hide();
            $("#yxtraindiv").hide();
            $("#sel-date").hide();
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var cl = $("#buyer-list li");
                for (var cm = 0; cm < cl.length; cm++) {
                    var co = $(cl[cm]).attr("name");
                    var cn = $(cl[cm]).attr("codeType");
                    var cp = $(cl[cm]).attr("flag");
                    if ($("#sf2").is(":checked")) {
                        if (co != "3") {
                            $(cl[cm]).addClass("color999")
                        } else {
                            $(cl[cm]).removeClass("color999")
                        }
                    } else {
                        $(cl[cm]).removeClass("color999")
                    }
                    if (cn == "2") {
                        $(cl[cm]).addClass("color999")
                    } else {
                        if (cn == "1") {
                            if (!isCanGP("1", cp)) {
                                $(cl[cm]).addClass("color999")
                            }
                        } else {
                            if (!isCanGP("B", cp)) {
                                $(cl[cm]).addClass("color999")
                            }
                            if (!isCanGP("H", cp)) {
                                $(cl[cm]).addClass("color999")
                            }
                        }
                    }
                }
                $("#sel-buyer").show();
                $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16)
            }
        }, click_YX_page: function (cm) {
            var cn = $("#yxtraininput").val().toUpperCase();
            var cl = $("#yxtrain_code").height();
            if (u(cn, cm)) {
                ck(1)
            } else {
                ck(3)
            }
            $("#yxtrain_code").css("height", cl)
        }, click_passenger_page: function (cl) {
            $.renderPassenger(cl)
        }, showYxTrain: function () {
            $("#yxtrain_code").css("height", "auto");
            $("#yxtrain_code li").removeClass();
            $("#yxtraininput").val("");
            $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
            ck(2);
            var cn = $("#fromStationText").val() + $("#toStationText").val() + $("#train_date").val();
            if (trainListForIE.length == 0 || yxTrainChange != cn) {
                x = cg();
                var cp = x == "0X00" ? true : false;
                var cm = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
                var cl = bI(cm, cp);
                if (!cl) {
                    $("#yxtraindiv").hide();
                    return
                }
                var co = {
                    "leftTicketDTO.train_date": cm,
                    "leftTicketDTO.from_station": $("#fromStation").val(),
                    "leftTicketDTO.to_station": $("#toStation").val(),
                    purpose_codes: x
                };
                aT();
                $.ajax({
                    type: "get", isTakeParam: false, beforeSend: function (cq) {
                        cq.setRequestHeader("If-Modified-Since", "0");
                        cq.setRequestHeader("Cache-Control", "no-cache")
                    }, url: ctx + CLeftTicketUrl, data: co, timeout: 10000, error: function() {this.showYxTrain()}, success: function (cs) {
                        if (cs.status) {
                            if (cs.data == null || cs.data.length == 0) {
                                ck(3);
                                trainListForIE = [];
                                return
                            }
                            trainListForIE = [];
                            for (var ct = 0; ct < cs.data.length; ct++) {
                                trainListForIE.push(cs.data[ct].queryLeftNewDTO.station_train_code + "(" + cs.data[ct].queryLeftNewDTO.start_time + "--" + cs.data[ct].queryLeftNewDTO.arrive_time + ")")
                            }
                            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                                var cz = [];
                                for (var ct = 0, cA = cs.data.length; ct < cA; ct++) {
                                    var cr = cs.data[ct].queryLeftNewDTO;
                                    var cw = cr.station_train_code;
                                    cw = cw.substring(0, 1);
                                    if ("G" == cw || "D" == cw) {
                                        cz.push(cs.data[ct])
                                    }
                                }
                                cs.data = cz
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                $("#DW_SHOW_STR").remove()
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                $("#hainan_limit_msg").remove()
                            }
                            $("#sear-sel").show();
                            $("#sear-result").show();
                            $("#t-list").show();
                            $("#no_filter_ticket_2").hide();
                            $("#no_filter_ticket").hide();
                            var cq = "";
                            var cv = "";
                            if (train_tour_flag != null && train_tour_flag == "fc") {
                                var cy = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cs.data.length).concat("</strong>个车次");
                                if (bV(cs.data)) {
                                    cq = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                                } else {
                                    if (hainan_limit_msg && ae(co, cs.data)) {
                                        cv = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                    }
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var cx = "";
                                    for (var cu = 0; cu < 25; cu++) {
                                        cx = cx + "&nbsp;"
                                    }
                                    cy = cy.concat(cx + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(cy);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bf)
                                }
                            } else {
                                var cy = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aD($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cs.data.length).concat("</strong>个车次");
                                if (bV(cs.data)) {
                                    cq = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                                } else {
                                    if (hainan_limit_msg && ae(co, cs.data)) {
                                        cv = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                    }
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var cx = "";
                                    for (var cu = 0; cu < 25; cu++) {
                                        cx = cx + "&nbsp;"
                                    }
                                    cy = cy.concat(cx + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(cy);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bf)
                                }
                            }
                            if (!$("#DW_SHOW_STR")[0]) {
                                $("#sear-result>p").after(cq)
                            }
                            if (cv) {
                                $("#sear-result>p").after(cv)
                            }
                            if (dwTranTimeStr) {
                                clearInterval(dwTranTimeStr)
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                dwTranTimeStr = window.setInterval(function () {
                                    if ($("#DW_SHOW_STR").attr("data") == "1") {
                                        $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                                    } else {
                                        $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                                    }
                                }, 1300)
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                hainan_tip = null;
                                hainan_tip = new Marquee({
                                    ID: "hainan_limit_msg",
                                    Direction: "left",
                                    Step: 1,
                                    Width: 0,
                                    Height: 0,
                                    Timer: 30,
                                    DelayTime: 0,
                                    WaitTime: 0,
                                    ScrollStep: 0
                                })
                            }
                            a8 = cs.data;
                            ah();
                            bl(a8);
                            n();
                            bE(a8);
                            bM();
                            $("#queryLeftTable").html("");
                            $("#trainum").html("");
                            aK();
                            if (bY.length < 0) {
                                aO = true;
                                $("#no_filter_ticket").show();
                                $("#no_filter_ticket_msg_1").show();
                                $("#no_filter_ticket_msg_2").hide();
                                $("#trainum").html("0");
                                return
                            } else {
                                aO = true;
                                $("#trainum").html(bY.length);
                                aA(bY);
                                $.showYxTrainData()
                            }
                            yxTrainChange = $("#fromStationText").val() + $("#toStationText").val() + $("#train_date").val()
                        } else {
                            if (cs && cs.c_url) {
                                CLeftTicketUrl = cs.c_url;
                                aj(co)
                            }
                        }
                    }
                });
                yxTrainChange = cn
            } else {
                $.showYxTrainData()
            }
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide()
        }, showYxTrainData: function () {
            if (u($("#yxtraininput").val(), 0)) {
                $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
                ck(1);
                $("#yxtraininput").focus()
            } else {
                ck(3)
            }
        }, getMindateForCal: function () {
            if ($("#sf2").is(":checked")) {
                g = studentMindate
            } else {
                g = otherMindate
            }
            return g
        }, getMaxdateForCal: function () {
            if ($("#sf2").is(":checked")) {
                D = studentMaxdate
            } else {
                D = otherMaxdate
            }
            return D
        }
    });
    function F() {
        $("#show_all_query_result").click(function () {
            bA = new Array();
            bo = new Array();
            N = new Array();
            $("#train_type_btn_all").removeClass().addClass("btn-all");
            $("#start_time_btn_all").removeClass().addClass("btn-all");
            $("#arrive_time_btn_all").removeClass().addClass("btn-all");
            $("#seat_type_btn_all").removeClass().addClass("btn-all");
            $("#from_station_name_all").removeClass().addClass("btn-all");
            $("#to_station_name_all").removeClass().addClass("btn-all");
            $("#sear-sel-bd input").each(function () {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (ax) {
                ax.setComboText("")
            }
            $("#avail_ticket").attr("checked", false);
            aH()
        })
    }

    function at() {
        var cl = $("#queryPriceTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({priceTableTemplate: cl});
        var cl = $("#fromStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationNameTableTemplate: cl});
        var cl = $("#toStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({toStationNameTableTemplate: cl});
        var cl = $("#seatTypeTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({seatTypeTemplate: cl});
        var cl = $("#stationinfoTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationinfoTemplate: cl})
    }

    function bE(cm) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function () {
        };
        $("#train_combo_box").hide();
        var cl = [];
        if (!ax) {
            ax = new dhtmlXCombo("train_combo_box_div", "cc", 90)
        } else {
            ax.setComboText("")
        }
        ax.clearAll();
        $(cm).each(function () {
            cl.push([this.queryLeftNewDTO.station_train_code, this.queryLeftNewDTO.station_train_code])
        });
        ax.addOption(cl);
        ax.enableFilteringMode(true);
        ax.attachEvent("onChange", function () {
            if (ax.getComboText() != "") {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
            aH()
        });
        if (!$("#iLcear")[0]) {
            $(".dhx_combo_box ").append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $("#iLcear").on("click", function () {
                if (ax) {
                    ax.setComboText("");
                    $(this).hide()
                }
            })
        }
        $(".dhx_combo_input").on("keyup", function () {
            if ($(this).val() == "") {
                $("#iLcear").hide()
            } else {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
        })
    }

    function aq() {
        if (!b8) {
            b8 = new dhtmlXWindows();
            b8.enableAutoViewport(true);
            b8.setSkin("dhx_terrace");
            b8.attachViewportTo("winVP");
            b8.setImagePath(ctx + "resources/js/rich/windows/imgs/")
        }
        $("#username").keydown(function () {
            login_errorMsg_hide()
        });
        $("#password").keydown(function () {
            login_errorMsg_hide()
        })
    }

    function bt() {
        b8.window("login").hide();
        b8.window("login").setModal(false)
    }

    function bv() {
        if (b8.window("login")) {
            b8.window("login").setModal(false);
            b8.window("login").hide()
        }
        a0 = b8.createWindow("login", 0, 0, 400, 350);
        var cl, cm;
        if (typeof(TouLocal) != "undefined" && TouLocal.checkZByTargeElement("")) {
            cl = $(window).width() / 2 - 208;
            cm = cd() + ($(window).height() / 2 - 232)
        } else {
            cl = $(window).width() / 2 - 200;
            cm = cd() + ($(window).height() / 2 - 205)
        }
        a0.attachObject("relogin");
        if (if_show_pass_code_login == "Y") {
            a0.setDimension($("#content").width(), $("#content").height() + 10)
        } else {
            a0.setDimension(530, 343);
            cl = $(window).width() / 2 - 250
        }
        $(".dhtmlx_window_active").height($("#content").height());
        $(".dhtmlx_window_active").css({left: cl, top: cm});
        a0.bringToTop();
        b8.window("login").clearIcon();
        b8.window("login").denyResize();
        a0.button("park").hide();
        a0.button("minmax1").hide();
        a0.hideHeader();
        if (if_show_pass_code_login == "Y") {
            refreshImg("login", "sjrand")
        }
        a0.setModal(true);
        $("#relogin_close").click(function () {
            bh();
            var cn = $(window).scrollTop();
            var co = $("#float").position().top;
            if (cn > co + 30) {
                $("#floatTable").show()
            }
            bt()
        });
        if (typeof(touclickHook_leftTicketLogin) === "function") {
            touclickHook_leftTicketLogin()
        }
    }

    function bh() {
        aP();
        $("#username").val("");
        $("#password").val("");
        $("#randCode").val("");
        b2()
    }

    function cd() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }

    function aP() {
        $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error")
    }

    function B(cp) {
        var cm = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
        var cl = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var co = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        var cn = true;
        aP();
        if ("" == cp || cp == null || cp == uninputmsg || cp == "admin") {
            $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
            cn = login_messages.userNameEmpty
        } else {
            if (!cl.test(cp) && !co.test(cp) && !cm.test(cp)) {
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                cn = login_messages.userNameFormat
            }
        }
        return cn
    }

    function bx(cl) {
        var cm = true;
        aP();
        if ("" == cl || cl == null) {
            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
            cm = login_messages.passwordEmpty
        } else {
            if (cl.length < 6) {
                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                cm = login_messages.passwordLength
            }
        }
        return cm
    }

    function aS() {
        var cn = $.trim($("#username").val());
        var cl = $.trim($("#password").val());
        var cm = B(cn);
        return typeof(cm) === "boolean" ? bx(cl) : cm
    }

    function A() {
        var cm = false;
        var cl = false;
        $("#username").on("keyup", function () {
            aB = true
        }).blur(function () {
            if (aB) {
                var cn = $.trim($("#username").val());
                cm = B(cn);
                if (if_show_pass_code_login == "Y") {
                    if (typeof(cm) !== "boolean") {
                        showError($("#randCode")[0], cm)
                    } else {
                        if (cm === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (typeof(cm) !== "boolean") {
                        login_errorMsg(cm)
                    } else {
                        if (cm === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        });
        $("#password").blur(function () {
            if (aB) {
                var cn = $.trim($("#password").val());
                if (if_show_pass_code_login == "Y") {
                    if (cm === true && typeof(cl = bx(cn)) !== "boolean") {
                        showError($("#randCode")[0], cl)
                    } else {
                        if (cm === true && cl === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (cm === true && typeof(cl = bx(cn)) !== "boolean") {
                        login_errorMsg(cl)
                    } else {
                        if (cm === true && cl === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        })
    }

    function aa(cm, cl) {
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function () {
            var cn = aS();
            if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], cn)) {
                return
            }
            if (if_show_pass_code_login == "N" && typeof(cn) !== "boolean") {
                login_errorMsg(cn);
                return
            }
            $("#loginForm").ajaxSubmit({
                url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                type: "post",
                dataType: "json",
                async: false,
                success: function (co) {
                    if (co.data.status) {
                        if (co.data.username != null) {
                            bt();
                            loginAsyn(co.data.username);
                            if (co.data.otherMsg != "") {
                                dhtmlx.alert({
                                    title: messages["message.error"],
                                    ok: messages["button.ok"],
                                    text: co.data.otherMsg,
                                    type: "alert-error",
                                    callback: function () {
                                        if ("Y" == co.data.notifysession) {
                                            dhtmlx.createWin({
                                                winId: "notifysession",
                                                closeWinId: ["close_notifysession"],
                                                okId: "goto_notifysession",
                                                okCallBack: function () {
                                                    S(cm, cl)
                                                }
                                            })
                                        } else {
                                            S(cm, cl)
                                        }
                                    }
                                })
                            } else {
                                if ("Y" == co.data.notifysession) {
                                    dhtmlx.createWin({
                                        winId: "notifysession",
                                        closeWinId: ["close_notifysession"],
                                        okId: "goto_notifysession",
                                        okCallBack: function () {
                                            S(cm, cl)
                                        }
                                    })
                                } else {
                                    S(cm, cl)
                                }
                            }
                        }
                    } else {
                        if (if_show_pass_code_login == "Y") {
                            showSuc($("#randCode")[0]).hide()
                        } else {
                            login_errorMsg_hide()
                        }
                        if (if_show_pass_code_login == "Y") {
                            refreshImg("login", "sjrand")
                        }
                        $("#password").val("");
                        $("#randCode").val("");
                        if (co.data.loginFail != null) {
                            if (co.data.loginFail == "登录名不存在!") {
                                aB = false;
                                aP();
                                $("#username").removeClass("error").focus()
                            } else {
                                if (co.data.loginFail == "验证码不正确！" && co.data.loginFail != "登录名不存在!") {
                                    aP();
                                    $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                    $("#randCode").focus()
                                } else {
                                    if (co.data.loginFail != "验证码不正确！" && co.data.loginFail != "登录名不存在!") {
                                        aP();
                                        $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                        $("#password").focus()
                                    }
                                }
                            }
                            if (if_show_pass_code_login == "Y") {
                                showError($("#randCode")[0], co.data.loginFail)
                            } else {
                                login_errorMsg(co.data.loginFail)
                            }
                        }
                    }
                }
            })
        })
    }

    function Z() {
        var cl = false;
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function () {
            if (!cl) {
                var cm = aS();
                if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], cm)) {
                    cl = false;
                    return
                }
                cl = true;
                $("#loginForm").ajaxSubmit({
                    url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                    type: "post",
                    dataType: "json",
                    async: false,
                    success: function (cn) {
                        if (cn.data.status) {
                            if (cn.data.otherMsg != "") {
                                dhtmlx.alert({
                                    title: messages["message.error"],
                                    ok: messages["button.ok"],
                                    text: cn.data.otherMsg,
                                    type: "alert-error",
                                    callback: function () {
                                        if (cn.data.username != null) {
                                            bt();
                                            loginAsyn(cn.data.username)
                                        }
                                    }
                                })
                            } else {
                                if (cn.data.username != null) {
                                    bt();
                                    loginAsyn(cn.data.username)
                                }
                            }
                        } else {
                            $("#i-ok").hide();
                            if (if_show_pass_code_login == "Y") {
                                refreshImg("login", "sjrand")
                            }
                            $("#password").val("");
                            $("#randCode").val("");
                            if (cn.data.loginFail != null) {
                                if (cn.data.loginFail == "登录名不存在!") {
                                    aB = false;
                                    aP();
                                    $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                    $("#username").focus()
                                } else {
                                    if (cn.data.loginFail == "验证码不正确！" && cn.data.loginFail != "登录名不存在!") {
                                        aP();
                                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                        $("#randCode").focus()
                                    } else {
                                        if (cn.data.loginFail != "验证码不正确！" && cn.data.loginFail != "登录名不存在!") {
                                            aP();
                                            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                            $("#password").focus()
                                        }
                                    }
                                }
                                if (if_show_pass_code_login == "Y") {
                                    showError($("#randCode")[0], cn.data.loginFail)
                                } else {
                                    login_errorMsg(cn.data.loginFail)
                                }
                            }
                        }
                    },
                    complete: function () {
                        cl = false
                    }
                })
            }
        })
    }

    function aV() {
        window.sucessCallback = function () {
            by = $("#randCode2").val();
            $("#back_edit").trigger("click");
            var cl = "99999GGGGG";
            var cn = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
            var cm = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                if (K.queryLeftNewDTO.train_no.indexOf(cl) > -1 && cn.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cm.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function () {
                            q()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    q()
                }
            } else {
                if (K.queryLeftNewDTO.train_no.indexOf(cl) > -1 && cn.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cm.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function () {
                            cj()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    cj()
                }
            }
            return
        }
    }

    function b2() {
        $("#username").css("color", "#333");
        $("#password").css("color", "#333");
        $("#randCode").css("color", "#333");
        if ($("#username").val() == "" || $("#username").val() == uninputmsg || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val(uninputmsg);
            $("#password").val("")
        }
        $("#username").focus(function () {
            var cl = $("#username").val();
            if (cl == uninputmsg) {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function () {
            var cl = $("#username").val();
            if (cl == "") {
                $("#username").css("color", "#999");
                $("#username").val(uninputmsg)
            }
        })
    }

    function ag() {
        $("#forget_my_password_id").on("click", function (cl) {
            otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
        })
    }

    function aT() {
        var cl = 1;
        var cr;
        var cw;
        var cn;
        var cq = true;
        var cp = true;
        var cu = true;
        var cy;
        var cm;
        var cv = false;
        var cs = false;
        var cx = false;
        cn = dataNumber;
        var ct;
        if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
            ct = jQuery.inArray($("#back_train_date").val().substring(5, 10), change_dates_arr)
        } else {
            ct = jQuery.inArray($("#train_date").val().substring(5, 10), change_dates_arr)
        }
        if (ct != "-1") {
            ct = ct + 1;
            cy = firstShow;
            cm = endShow;
            if (parseInt(ct) >= parseInt(firstShow) && parseInt(ct) <= parseInt(endShow)) {
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        cs = true;
                        cv = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control
                    }
                }
                if (!cs) {
                    cq = false;
                    cp = false;
                    cu = false;
                    cw = endShow + 1
                }
            } else {
                cv = true;
                firstShow = ct;
                endShow = firstShow + 19;
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        cs = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control;
                        cs = true
                    }
                }
                if (!cs) {
                    cr = firstShow - 1;
                    cw = endShow + 1;
                    if (cr < cl) {
                        cq = false
                    }
                }
            }
            if (isOther) {
                if (other_control < dataNumber) {
                    cx = true
                }
            } else {
                if (stu_control < dataNumber) {
                    cx = true
                }
            }
            if (cs) {
                cv = true;
                firstShow = endShow - 19;
                cr = firstShow - 1;
                if (cx) {
                    cp = true;
                    cw = endShow + 1;
                    cn = dataNumber
                } else {
                    cp = false
                }
                if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
                    $("#back_train_date").val(fullDateArr[ct - 1])
                } else {
                    $("#train_date").val(fullDateArr[ct - 1])
                }
            }
            if (parseInt(firstShow) < 1) {
                firstShow = 1
            }
            if (cq) {
                for (var co = cl; co <= cr; co++) {
                    $("#date_range>ul>li:nth-child(" + co + ")").hide()
                }
            }
            if (cp) {
                for (var co = cw; co <= cn; co++) {
                    $("#date_range>ul>li:nth-child(" + co + ")").hide()
                }
            }
            if (cu) {
                for (var co = firstShow; co <= endShow; co++) {
                    $("#date_range>ul>li:nth-child(" + co + ")").show()
                }
            }
            $("#date_range>ul>li").removeClass("sel");
            if (cv) {
                $("#date_range>ul>li:nth-child(" + cy + ")").children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + cy + ")").children("span:last").removeClass();
                $("#date_range>ul>li:nth-child(" + cm + ")").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:first").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:last").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end")
            }
            $("#date_range>ul>li:nth-child(" + ct + ")").addClass("sel");
            $("#date_range>ul>li:nth-child(" + ct + ")").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + ct + ")").children("span:first-child").addClass("hide");
            bR = $("#date_range>ul>li:nth-child(" + ct + ")").children("span:first-child").text()
        }
    }

    function bN() {
        $("#query_ticket").unbind("click");
        $("#query_ticket_stu").unbind("click");
        $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
        $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
        bj();
        setTimeout(function () {
            ci();
            bg();
            $("#query_ticket").removeClass().addClass("btn92s");
            $("#query_ticket_stu").removeClass().addClass("btn92s");
            if (train_tour_flag != "gc" && train_tour_flag != "fc") {
                if (ClickWho == "0X00") {
                    $("#query_ticket").unbind();
                    $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket_stu").removeClass().addClass("btn92s")
                }
                if (ClickWho == "00") {
                    $("#query_ticket_stu").unbind();
                    $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket").removeClass().addClass("btn92s")
                }
            }
            if (isstudentDate) {
                $("#query_ticket_stu").unbind();
                $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }, 1000)
    }

    changeArriveDate = function (cm, cl) {
        cm = cm.replace(":", "");
        cl = cl.replace(":", "");
        hour_value = Number(cm.substring(0, 2)) + Number(cl.substring(0, 2));
        min_value = Number(cm.substring(2, 4)) + Number(cl.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return "次日"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "两日"
            } else {
                if (hour_value >= 72) {
                    return "三日"
                } else {
                    return "当日"
                }
            }
        }
    };
    changeLiShi = function (cl) {
        if (cl.substring(0, 1) == "0") {
            if (cl.substring(1, 2) == "0") {
                if (cl.substring(3, 4) == "0") {
                    cl = cl.substring(4, 5) + "分"
                } else {
                    cl = cl.substring(3, 5) + "分"
                }
            } else {
                cl = cl.substring(1, 2) + "小时" + cl.substring(3, 5) + "分"
            }
        } else {
            if (cl.substring(3, 5) == "00") {
                cl = cl.substring(0, 2) + "小时"
            } else {
                cl = cl.substring(0, 2) + "小时" + cl.substring(3, 5) + "分"
            }
        }
        return cl
    };
    isNum = function (cl) {
        return parseInt(cl)
    };
    buttonText = function () {
        return "预订"
    };
    function ao() {
        if ($("#sf2").is(":checked")) {
            if (C($("#train_date").val()) > C(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                bj()
            } else {
                bg()
            }
        }
    }

    function ap() {
        if (train_tour_flag == "fc") {
            var cl = $("#back_train_date").val();
            z("back_train_date")
        } else {
            var cl = $("#train_date").val();
            z("train_date")
        }
        if (rqChecked.length == 0) {
            rqChecked.push(cl)
        }
        var cm = false;
        if (cl != rqChecked[0]) {
            for (var cn = 0; cn < rqChecked.length; cn++) {
                if (cl == rqChecked[cn]) {
                    cm = true;
                    rqChecked.splice(cn, 1);
                    $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", false);
                    rqChecked.splice(0, 1, cl);
                    $("#prior_date span[name=" + cl + "]").remove();
                    break
                }
            }
            if (!cm) {
                $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", false);
                rqChecked.splice(0, 1, cl);
                $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", true)
            }
        }
    }

    $("#train_date").focus(function () {
        $("#train_date").jcalendar({
            isSingle: false,
            startDate: $.getMindateForCal(),
            endDate: $.getMaxdateForCal(),
            onpicked: function () {
                ap();
                $("#train_date").blur();
                var cl = $("#train_date").val();
                var cm = $("#back_train_date").val();
                if ($("#wf").is(":checked")) {
                    if (!cm | C(cl) > C(cm)) {
                        $("#back_train_date").val(cl)
                    }
                }
                aT()
            }
        })
    });
    $("#date_icon_1").click(function () {
        $("#train_date").focus()
    });
    $("#back_train_date").focus(function () {
        $("#back_train_date").jcalendar({
            isSingle: false,
            startDate: $("#train_date").val(),
            endDate: $.getMaxdateForCal(),
            onpicked: function () {
                ap();
                $("#back_train_date").blur();
                aT()
            }
        })
    });
    $("#date_icon_2").click(function () {
        $("#back_train_date").focus()
    });
    String.prototype.toDate = function () {
        style = "yyyy-MM-dd hh:mm";
        var co = {"y+": "y", "M+": "M", "d+": "d", "h+": "h", "m+": "m"};
        var cl = {y: "", M: "", d: "", h: "00", m: "00"};
        var cn = style;
        for (var cm in co) {
            if (new RegExp("(" + cm + ")").test(style)) {
                cl[co[cm]] = this.substring(cn.indexOf(RegExp.$1), cn.indexOf(RegExp.$1) + RegExp.$1.length)
            }
        }
        return new Date(cl.y, cl.M - 1, cl.d, cl.h, cl.m)
    };
    function z(cp) {
        if (cp == "back_train_date" && ClickWho != "0X00") {
            return
        }
        var cl = ($("#" + cp).val().split(" ")[0] + " 00:00:00").toDate().getTime();
        var cr = stu_start_train_date.split("&");
        var cn = stu_end_tain_date.split("&");
        var cm = false;
        for (var co = 0, cq = cr.length; co < cq; co++) {
            if (cl >= cr[co].toDate().getTime() && cl <= cn[co].toDate().getTime()) {
                cm = true;
                break
            }
        }
        if (cm) {
            $("#sf2").attr("disabled", false);
            $("#sf2_label").removeClass("color999")
        } else {
            $("#sf2").attr("checked", false);
            $("#sf1")[0]["checked"] = "checked";
            $("#sf2").attr("disabled", true);
            $("#sf2_label").addClass("color999")
        }
    }

    function bX(cl) {
        if (isSaveQueryLog == "Y") {
            $.ajax({
                type: "get", isTakeParam: false, beforeSend: function (cm) {
                    cm.setRequestHeader("If-Modified-Since", "0");
                    cm.setRequestHeader("Cache-Control", "no-cache")
                }, url: ctx + "leftTicket/log", data: cl, timeout: 15000, error: function (cm, co, cn) {
                }, success: function (cm) {
                }
            })
        }
    }

    var aR = 0;
    var X = new Array();

    function U() {
        $("div#id-seat-sel div.sel-item a").on("click", function () {
            if ($(this).attr("class") == "cur") {
                $(this).removeClass("cur");
                aR--;
                var cm = $(this).attr("id");
                $.each(X, function (cn, cp) {
                    var co = $(cp).attr("id");
                    if (cm == co) {
                        X.splice(cn, 1)
                    }
                });
                $("#selectNo").html(aR + "/" + tickets_info.length)
            } else {
                X.push($(this));
                $(this).addClass("cur");
                if (aR == tickets_info.length) {
                    var cl = X[aR - 1];
                    $(cl).removeClass("cur");
                    X.splice(aR - 1, 1);
                    return
                }
                aR++;
                $("#selectNo").html(aR + "/" + tickets_info.length)
            }
        })
    }

    function T() {
        ak();
        if (tickets_info && tickets_info.length > 0) {
            var co = "Y";
            var cl = tickets_info[0].seat_type;
            for (var cn = 0; cn < tickets_info.length; cn++) {
                var cm = tickets_info[cn];
                if (cm.seat_type != cl) {
                    co = "N";
                    break
                }
            }
            if (canChooseSeats && "Y" == canChooseSeats && "Y" == co) {
                if (choose_Seats) {
                    if ("M" == cl && choose_Seats.indexOf("M") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#yideng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#yideng2").css("display", "block")
                        }
                        $("#notice_1_id").html("*选座后如果系统票额不足，系统将随机为您申请席位。")
                    }
                    if ("O" == cl && choose_Seats.indexOf("O") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#erdeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#erdeng2").css("display", "block")
                        }
                        $("#notice_1_id").html("*选座后如果系统票额不足，系统将随机为您申请席位。")
                    }
                    if ("P" == cl && choose_Seats.indexOf("P") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html("*选座后如果系统票额不足，系统将随机为您申请席位。")
                    }
                    if ("9" == cl && choose_Seats.indexOf("9") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html("*选座后如果系统票额不足，系统将随机为您申请席位。")
                    }
                }
            }
        }
    }

    function ak() {
        $("div#id-seat-sel div.sel-item a").removeClass("cur");
        aR = 0;
        X = new Array();
        $("#selectNo").html(aR + "/" + tickets_info.length);
        $("#id-seat-sel.sel-item").css("display", "none");
        $("#id-seat-sel").css("display", "none");
        $("#notice_1_id").html("");
        $("#yideng1").css("display", "none");
        $("#yideng2").css("display", "none");
        $("#erdeng1").css("display", "none");
        $("#erdeng2").css("display", "none");
        $("#tedeng1").css("display", "none");
        $("#tedeng2").css("display", "none")
    }

    function bD() {
        var cl = "";
        $.each($("div#id-seat-sel div.seat-sel-bd a"), function () {
            if ($(this).attr("class") == "cur") {
                var cm = $(this).attr("id");
                cl += cm
            }
        });
        return cl
    }

    function bk() {
        if (aR != 0 && aR != tickets_info.length) {
            $("#sy_ticket_num_id").html("<span style='color:red;'>请按照乘车人个数选座对应的席位。</span>");
            return false
        } else {
            return true
        }
    }

    function b5() {
        b0();
        if (tickets_info && tickets_info.length > 0) {
            if (canChooseBeds && "Y" == canChooseBeds) {
                $("#id-bed-sel").css("display", "block");
                $("#notice_1_id").html("*选铺后如果系统票额不足，系统将随机为您申请铺位。");
                if (isCanChooseMid && "Y" == isCanChooseMid) {
                    $("#mid_bed").css("display", "block")
                } else {
                    $("#mid_bed").css("display", "none")
                }
            } else {
                $("#id-bed-sel").css("display", "none")
            }
        }
    }

    numSet = function (co, cl) {
        var ct = parseInt($("#x_no").text());
        var cp = parseInt($("#z_no").text());
        var cn = parseInt($("#s_no").text());
        var cr = tickets_info.length;
        var cm = ct + cp + cn;
        if ("add" == co) {
            if (cm < cr) {
                var cs = document.getElementById(cl).innerText;
                var cq = parseInt(cs) + 1;
                document.getElementById(cl).innerText = cq;
                $("#selectBedNo").html(cm + 1 + "/" + cr)
            }
        } else {
            var cs = document.getElementById(cl).innerText;
            if (cm > 0 && parseInt(cs) > 0) {
                var cq = parseInt(cs) - 1;
                document.getElementById(cl).innerText = cq;
                $("#selectBedNo").html(cm - 1 + "/" + cr)
            }
        }
    };
    function b0() {
        $("#x_no").html("0");
        $("#z_no").html("0");
        $("#s_no").html("0");
        $("#selectBedNo").html(0 + "/" + tickets_info.length);
        $("#confirmDiv").css("padding", "20px 0");
        $("#checktrain").css("display", "none")
    }

    function aL() {
        var cl = $("#x_no").text();
        var cm = $("#z_no").text();
        var cn = $("#s_no").text();
        return cl + cm + cn
    }
})();
function checkG1234(g, f, c, h, b) {
    var a = "99999GGGGG";
    var e = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
    var d = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
    if (c.indexOf(a) > -1 && e.indexOf(h) > -1 && d.indexOf(b) > -1) {
        dhtmlx.createWin({
            winId: "confirmG1234",
            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
            okId: "goto_integration_G1234",
            okCallBack: function () {
                submitOrderRequest(g, f)
            },
            callback: function () {
                return
            }
        })
    } else {
        submitOrderRequest(g, f)
    }
};
var left_ticket_messages = {
    "leftTicketDTO.from_station": "出发站",
    "leftTicketDTO.to_station": "目的站",
    "leftTicketDTO.train_no": "车次",
    "leftTicketDTO.train_date": "出发日",
    back_train_date: "返程日"
};
jQuery.validator.addMethod("checkLoginUserName", function (f, d) {
    var a = false;
    var c = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
    var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
    var e = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    if (b.test(f) || e.test(f) || c.test(f)) {
        a = true
    }
    return this.optional(d) || a
}, "wrong username.");
jQuery.validator.addMethod("requiredUserName", function (b, a) {
    if ("用户名／邮箱／手机号" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function (b, a) {
    if ("简码／汉字" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong schoolname.");
jQuery.validator.addMethod("randCodeRequired", function (b, a) {
    $("#i-ok").css("display", "none");
    return b.length > 0
}, "验证码错误!");
jQuery.validator.addMethod("randCodeFormat", function (c, b) {
    $("#i-ok").css("display", "none");
    var a = /^[a-zA-Z0-9]+$/;
    return this.optional(b) || a.test(c)
}, "验证码错误!");
jQuery.validator.addMethod("randCodeLength", function (b, a) {
    $("#i-ok").css("display", "none");
    return b.length == 4
}, "验证码错误!.");
jQuery.validator.addMethod("integrationCheck", function (b, a) {
    var c = /^\d{6}$/;
    return this.optional(a) || c.test(b)
}, "wrong integrationpassword");
jQuery.validator.addMethod("integrationPwdCheck", function (b, a, c) {
    if ($("#" + c[0]).val() == $("#" + c[1]).val()) {
        return true
    }
    return false
}, "两次输入密码不一致!.");
jQuery.validator.addMethod("checkRandCode", function (c, b, d) {
    var a = true;
    if (c && c.length == 4) {
        $.ajax({
            url: ctx + "passcodeNew/checkRandCodeAnsyn",
            type: "post",
            data: {randCode: c, rand: d},
            async: false,
            success: function (e) {
                if (e.data == "N") {
                    a = false;
                    $("#i-ok").css("display", "none")
                } else {
                    a = true;
                    $("#i-ok").css("display", "block")
                }
            }
        })
    } else {
        a = false;
        $("#i-ok").css("display", "none")
    }
    return a
}, "验证码错误!.");
jQuery.validator.addMethod("validateUsersName", function (b, a) {
    return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "用户名只能由字母、数字或_组成");
jQuery.validator.addMethod("checkWriteSpace", function (c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 32) {
            return false
        }
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("validateRandCode", function (b, a) {
    return this.optional(a) || /^[a-zA-Z0-9]+$/.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkPassward", function (c, b, e) {
    var d = true;
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Passward wrong");
function validateSecIdCard(g) {
    var f = 0;
    var a = g;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function validateFirIdCard(g) {
    var f = 0;
    var a;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    if (g.length == 15) {
        a = idCardUpdate(g)
    } else {
        a = g
    }
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function idCardUpdate(g) {
    var b;
    var f = /^(\d){15}$/;
    if (f.test(g)) {
        var e = 0;
        var a = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var d = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        g = g.substr(0, 6) + "19" + g.substr(6, g.length - 6);
        for (var c = 0; c < g.length; c++) {
            e += parseInt(g.substr(c, 1)) * a[c]
        }
        g += d[e % 11];
        b = g
    } else {
        b = "#"
    }
    return b
}
jQuery.validator.addMethod("checkBorth", function (e, c) {
    var b = e;
    if (b == "") {
        return true
    } else {
        var a = b.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (a == null) {
            return false
        }
        var f = new Date(a[1], a[3] - 1, a[4]);
        return (f.getFullYear() == a[1] && (f.getMonth() + 1) == a[3] && f.getDate() == a[4])
    }
}, "日期格式不合法");
jQuery.validator.addMethod("byteRangeLength", function (d, b, e) {
    var c = d.length;
    for (var a = 0; a < d.length; a++) {
        if (d.charCodeAt(a) > 127) {
            c++
        }
    }
    return this.optional(b) || (c >= e[0] && c <= e[1])
}, "length wrong");
jQuery.validator.addMethod("checkNameCharBlank", function (c, b, d) {
    var a = d.split("@");
    if ($("#" + a[1]).val() == "") {
        return true
    } else {
        if ($("#" + a[0]).val() == "1" || $("#" + a[0]).val() == "2") {
            return this.optional(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(c)
        } else {
            if ($("#" + a[0]).val() == "B") {
                if (/^[-]+$/.test(c)) {
                    return false
                }
                return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(c)
            } else {
                if ($("#" + a[0]).val() == "H") {
                    if (/^[-]+$/.test(c)) {
                        return false
                    }
                    return this.optional(b) || /^[a-z A-Z·。.．\u3400-\u9FFF-]+$/.test(c)
                } else {
                    return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF]+$/.test(c)
                }
            }
        }
    }
}, "wrong name.");
jQuery.validator.addMethod("checkIdValidStr", function (c, b) {
    var a = /^[a-zA-Z0-9\_\-\(\)]+$/;
    return this.optional(b) || (a.test(c))
}, "wrong id");
jQuery.validator.addMethod("isSecIDCard", function (b, a, c) {
    if (!checkIfSecIdCard($(c).val())) {
        return true
    }
    return validateSecIdCard(b)
}, "wrong");
function checkIfSecIdCard(a) {
    if (a == "1") {
        return true
    }
    return false
}
function checkIfFirIdCard(a) {
    if (a == "2") {
        return true
    }
    return false
}
function checkCardForHKorTW(a) {
    if (a == "C" || a == "G") {
        return true
    }
    return false
}
jQuery.validator.addMethod("isFirIDCard", function (b, a, c) {
    if (!checkIfFirIdCard($(c).val())) {
        return true
    }
    return validateFirIdCard(b)
}, "wrong");
jQuery.validator.addMethod("checkHkongMacao", function (c, b, d) {
    if ($(d).val() == "C") {
        var a = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkTaiw", function (c, a, e) {
    if ($(e).val() == "G") {
        var d = /^[0-9]{8}$/;
        var b = /^[0-9]{10}$/;
        return this.optional(a) || (d.test(c)) || (b.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkPassport", function (d, b, e) {
    if ($(e).val() == "B") {
        var c = /^[a-zA-Z]{5,17}$/;
        var a = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(b) || (a.test(d)) || c.test(d)
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkWork", function (c, b, d) {
    if ($(d).val() == "H") {
        var a = /^[a-zA-Z]{3}[0-9]{12}$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("isMobile", function (d, b) {
    var c = d.length;
    var a = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
    return this.optional(b) || (c == 11 && a.test(d))
}, "wrong mobile phone ");
jQuery.validator.addMethod("isTelePhone", function (b, a) {
    var c = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
    return this.optional(a) || (c.test(b))
}, "wrong telePhone ");
jQuery.validator.addMethod("illegalChar", function (c, b, e) {
    var d = true;
    if (c.indexOf("$") >= 0) {
        return false
    }
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62 || c.charCodeAt(a) == 34 || c.charCodeAt(a) == 63) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Illegal char wrong");
jQuery.validator.addMethod("isZipCode", function (c, b) {
    var a = /^[0-9]{6}$/;
    return this.optional(b) || (a.test(c))
}, "wrong zipcode");
jQuery.validator.addMethod("isEmail", function (c, a) {
    var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(a) || (b.test(trim(c)))
}, "wrong email");
function replaceChar(b) {
    var a = b.value.replace(/['"<> ?]/g, "");
    b.value = a
}
function checkNameChar1(a) {
    return /^[a-zA-Z0-9\u3400-\u9FFF]+$/.test(a)
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function ltrim(a) {
    return a.replace(/(^\s*)/g, "")
}
function rtrim(a) {
    return a.replace(/(\s*$)/g, "")
}
jQuery.validator.addMethod("validateName", function (b, a) {
    return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
}, "wrong username.");
jQuery.validator.addMethod("studentRequired", function (b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != ""
    }
    return true
}, "wrong studentRequired.");
jQuery.validator.addMethod("studentStationRequired", function (b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != "简拼/全拼/汉字" && trim(b) != ""
    }
    return true
}, "wrong studentStationRequired.");
jQuery.validator.addMethod("studentValidateName", function (b, a, c) {
    if ($(c).val() == "3") {
        return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkStudentName", function (b, a, c) {
    if ($(c).val() == "3") {
        if ((!b || trim(b) == "" || trim(b) == "简码/汉字")) {
            return false
        }
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("isQuestionNull", function (b, a, c) {
    if (jQuery.trim(b) != "") {
        if (jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) == "" || jQuery.trim($(c[0]).val()) == "") {
            return false
        }
    }
    return true
}, "you should input the question");
jQuery.validator.addMethod("isAnswerNull", function (b, a, c) {
    if ((jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) != "") || (jQuery.trim($(c[0]).val()) != "")) {
        if (jQuery.trim(b) == "") {
            return false
        }
    }
    return true
}, "you should input the answer");
function checkSex(c, b, a) {
    if (!checkSexByCardId(c, b, a)) {
        if (!confirm("性别与身份证中的性别不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkSexByCardId(c, e, a) {
    function b(h, i) {
        var g = null;
        if (i.length == 15) {
            g = i.substring(14, 15)
        } else {
            if (i.length == 18) {
                g = i.substring(16, 17)
            } else {
                return true
            }
        }
        if (g == "x" || g == "X") {
            g = "10"
        }
        var f = parseInt(g);
        var j = f % 2;
        if (j === 0 && h === "F") {
            return true
        } else {
            if (j === 1 && h === "M") {
                return true
            } else {
                return false
            }
        }
    }

    var d = $(a).val();
    if (checkIfSecIdCard($(e).val()) && validateSecIdCard(d)) {
        if (d !== "") {
            return b(c, d)
        } else {
            return true
        }
    } else {
        if (checkIfFirIdCard($(e).val()) && validateFirIdCard(d)) {
            if (d !== "") {
                return b(c, d)
            } else {
                return true
            }
        } else {
            return true
        }
    }
}
function checkBirdDateByCardId(c, e, b) {
    var a = null;
    var d = $(b).val();
    if (checkIfSecIdCard($(e).val()) && d !== "" && validateSecIdCard(d)) {
        a = d.substring(6, 14)
    } else {
        if (checkIfFirIdCard($(e).val()) && d !== "" && validateFirIdCard(d)) {
            if (d.length == 15) {
                a = "19" + d.substring(6, 12)
            } else {
                if (d.length == 18) {
                    a = d.substring(6, 14)
                }
            }
        } else {
            return true
        }
    }
    if (c !== "") {
        c = c.replace(/-/g, "");
        if (c != a) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkBirdate(c, b, a) {
    if (!checkBirdDateByCardId(c, b, a)) {
        if (!confirm("出生日期与身份证中的出生日期不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
jQuery.validator.addMethod("checkPwdValidate", function (b, a) {
    return this.optional(a) || /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(b)
}, "contain writespace");
jQuery.validator.addMethod("checkConfirmPassWard", function (b, a, c) {
    if ($(c).val() != null) {
        return $(c).val() == b
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("IVR_passwd_format", function (b, a) {
    var c = /^[0-9]{6}$/;
    return this.optional(a) || c.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkStation", function (b, a) {
    if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字" || trim(b) == "简拼/全拼/汉字或↑↓")) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkAnsyUserName", function (e, c, f) {
    var b = f[0];
    var d = $("#" + f[1]).val();
    var a = true;
    $.ajax({
        url: b + "?user_name=" + e, type: "get", async: false, success: function (g, h) {
            if (g.data == true) {
                a = false
            } else {
                a = true
            }
        }, error: function (g, i, h) {
            a = false
        }
    });
    return a
}, "wrong cardNo");
function checkPwdRank(e, a, d) {
    var b = $(e);
    var c = b.val();
    if (c.length <= 6 || new RegExp("^[a-zA-Z]{6,}$").test(c) || new RegExp("^[0-9]{6,}$").test(c) || new RegExp("^[_]{6,}$").test(c)) {
        $("#" + a).attr("title", "危险");
        $("#" + d).html("危险");
        $("#" + a).removeClass("rank-a");
        $("#" + a).removeClass("rank-b");
        $("#" + a).removeClass("rank-c");
        $("#" + a).addClass("rank-a")
    } else {
        if (c.length > 6 && new RegExp("[a-zA-Z]").test(c) && new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
            $("#" + a).attr("title", "安全");
            $("#" + d).html("安全");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-c")
        } else {
            $("#" + a).attr("title", "一般");
            $("#" + d).html("一般");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-b")
        }
    }
}
Array.prototype.unique = function () {
    var b = {}, a = this.length;
    for (var c = 0; c < a; c++) {
        if (typeof b[this[c]] == "undefined") {
            b[this[c]] = 1
        }
    }
    this.length = 0;
    a = 0;
    for (var c in b) {
        this[a++] = c
    }
    return this
};
function checkSearchPwdRank(h, c, g) {
    var e = $(h);
    var f = e.val();
    if (f.length < 6) {
        $("#" + c).attr("title", "危险");
        $("#" + g).html("危险");
        $("#" + c).removeClass("rank-a");
        $("#" + c).removeClass("rank-b");
        $("#" + c).removeClass("rank-c");
        $("#" + c).addClass("rank-a")
    } else {
        var a = [];
        for (var b = 0; b < 6; b++) {
            a.push(f.charAt(b))
        }
        a = a.unique();
        var d = a.length;
        if (d == 1) {
            $("#" + c).attr("title", "危险");
            $("#" + g).html("危险");
            $("#" + c).removeClass("rank-a");
            $("#" + c).removeClass("rank-b");
            $("#" + c).removeClass("rank-c");
            $("#" + c).addClass("rank-a")
        } else {
            if (d > 1 && d < 5) {
                $("#" + c).attr("title", "一般");
                $("#" + g).html("一般");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-b")
            } else {
                $("#" + c).attr("title", "安全");
                $("#" + g).html("安全");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-c")
            }
        }
    }
}
jQuery.validator.addMethod("checkDetailAddress", function (b, a) {
    return this.optional(a) || /^[0-9a-zA-Z\u3400-\u9FFF\#]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressName", function (b, a) {
    if (/^[-]+$/.test(b)) {
        return false
    }
    return this.optional(a) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressSelect", function (b, a) {
    if ("" == b) {
        return false
    }
    if (b) {
        return true
    }
    return this.optional(a)
}, "wrong name.");
var login_messages = {
    randCodeError: "验证码错误!",
    randCodeExpired: "验证码失效",
    randCodeLentgh: "验证码长度为4位!",
    randCodeFormat: "验证码只能由数字或字母组成!",
    randCodeEmpty: "验证码不能为空!",
    userNameEmpty: "登录名必须填写!",
    userNameFormat: "登录名格式不正确，请重新输入!",
    passwordEmpty: "密码必须填写,且不少于6位!",
    passwordLength: "密码长度不能少于6位!",
    pleaseClickCaptcha: "请点击验证码",
    pleaseClickLeftCaptcha: "请点击左侧验证码",
    pleaseClickCaptchaRight: "请点击正确的验证码",
    pleaseClickBottomCaptcha: "请点击下方验证码",
    loginError: "当前访问用户过多,请稍候重试!",
    submitAfterVerify: "提交",
    pleaseClickSubmitButtonAfterClick: "pleaseClickSubmitButtonAfterClick",
    leftTicketOrderNoteMessage: '点击"提交"按钮获取验证码',
    leftTicketOrderClickCallbackNoteMessage: '完成选择后，继续点击下方橙色"提交"按钮提交订单',
    leftTicketOrderShowCallbackNoteMessage: "按照提示点击选择所有的图片",
    leftTicketOrderHiddenCallbackNoteMessage: '点击"提交"按钮获取验证码',
    getCaptchaByClick: "点击获取验证码"
};
function Marquee(a) {
    if (a == null || a == "") {
        return
    }
    this.ID = document.getElementById(a.ID);
    if (!this.ID) {
        this.id = -1;
        return
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = {top: 0, up: 0, bottom: 1, down: 1, left: 2, right: 3};
    if (typeof a.Direction == "number" && a.Direction) {
        this.Direction = a.Direction
    }
    if (typeof a.Direction == "string" && a.Direction) {
        this.Direction = this.DirectionArray[a.Direction.toString().toLowerCase()]
    }
    if (typeof a.Step == "number" && a.Step) {
        this.Step = a.Step
    }
    if (typeof a.Width == "number" && a.Width) {
        this.Width = a.Width
    }
    if (typeof a.Height == "number" && a.Height) {
        this.Height = a.Height
    }
    if (typeof a.Timer == "number" && a.Timer) {
        this.Timer = a.Timer
    }
    if (typeof a.DelayTime == "number" && a.DelayTime) {
        this.DelayTime = a.DelayTime
    }
    if (typeof a.WaitTime == "number" && a.WaitTime) {
        this.WaitTime = a.WaitTime
    }
    if (typeof a.ScrollStep == "number" && a.ScrollStep) {
        this.ScrollStep = a.ScrollStep
    }
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    this.Start()
}
Marquee.prototype.Start = function () {
    if (this.ID == -1) {
        return
    }
    if (this.Width == 0) {
        this.Width = parseInt(this.ID.style.width)
    }
    if (this.Height == 0) {
        this.Height = parseInt(this.ID.style.height)
    }
    if (this.Timer < 20) {
        this.Timer = 20
    }
    if (this.WaitTime < 800) {
        this.WaitTime = 800
    }
    this.HalfWidth = Math.round(this.Width / 2);
    this.HalfHeight = Math.round(this.Height / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width + "px";
    this.ID.style.height = this.Height + "px";
    if (typeof this.ScrollStep != "number") {
        this.ScrollStep = this.Direction > 1 ? this.Width : this.Height
    }
    var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;padding-right:100px;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
    var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
    var e = this;
    e.tempHTML = e.ID.innerHTML;
    if (e.Direction <= 1) {
        e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
    } else {
        if (e.ScrollStep == 0 && e.DelayTime == 0) {
            e.ID.innerHTML += e.ID.innerHTML
        } else {
            e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
        }
    }
    var f = this.Timer;
    var a = this.DelayTime;
    var c = this.WaitTime;
    e.StartID = function () {
        e.Scroll()
    };
    e.Continue = function () {
        if (e.MouseOver == 1) {
            setTimeout(e.Continue, a)
        } else {
            clearInterval(e.TimerID);
            e.CTL = e.Stop = 0;
            e.TimerID = setInterval(e.StartID, f)
        }
    };
    e.Pause = function () {
        e.Stop = 1;
        clearInterval(e.TimerID);
        setTimeout(e.Continue, a)
    };
    e.Begin = function () {
        e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2 : e.ID.scrollHeight / 2;
        if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step) || (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
            e.ID.innerHTML = e.tempHTML;
            delete (e.tempHTML);
            return
        }
        delete (e.tempHTML);
        e.TimerID = setInterval(e.StartID, f);
        if (e.ScrollStep < 0) {
            return
        }
        e.ID.onmousemove = function (g) {
            if (e.ScrollStep == 0 && e.Direction > 1) {
                var g = g || window.event;
                if (window.event) {
                    if (e.IsNotOpera) {
                        e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX - e.ID.scrollLeft : g.srcElement.offsetLeft - e.ID.scrollLeft + g.offsetX
                    } else {
                        e.ScrollStep = null;
                        return
                    }
                } else {
                    e.EventLeft = g.layerX - e.ID.scrollLeft
                }
                e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
                e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
                e.Step = Math.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
            }
        };
        e.ID.onmouseover = function () {
            if (e.ScrollStep == 0) {
                return
            }
            e.MouseOver = 1;
            clearInterval(e.TimerID)
        };
        e.ID.onmouseout = function () {
            if (e.ScrollStep == 0) {
                if (e.Step == 0) {
                    e.Step = 1
                }
                return
            }
            e.MouseOver = 0;
            if (e.Stop == 0) {
                clearInterval(e.TimerID);
                e.TimerID = setInterval(e.StartID, f)
            }
        }
    };
    setTimeout(e.Begin, c)
};
Marquee.prototype.Scroll = function () {
    switch (this.Direction) {
        case 0:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollTop >= this.ClientScroll) {
                    this.ID.scrollTop -= this.ClientScroll
                }
                this.ID.scrollTop += this.Step
            }
            break;
        case 1:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollTop <= 0) {
                    this.ID.scrollTop += this.ClientScroll
                }
                this.ID.scrollTop -= this.Step
            }
            break;
        case 2:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollLeft >= this.ClientScroll) {
                    this.ID.scrollLeft -= this.ClientScroll
                }
                this.ID.scrollLeft += this.Step
            }
            break;
        case 3:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollLeft <= 0) {
                    this.ID.scrollLeft += this.ClientScroll
                }
                this.ID.scrollLeft -= this.Step
            }
            break
    }
};
