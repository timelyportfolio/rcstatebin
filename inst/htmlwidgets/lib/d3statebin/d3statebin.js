// Generated by CoffeeScript 1.8.0
(function() {
  var createAccessors, extend, root, state_coords;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  createAccessors = function(visExport) {
    var n;
    for (n in visExport.opts) {
      if (!visExport.opts.hasOwnProperty(n)) {
        continue;
      }
      visExport[n] = (function(n) {
        return function(v) {
          if (arguments.length) {
            visExport.opts[n] = v;
            return this;
          } else {
            return visExport.opts[n];
          }
        };
      })(n);
    }
  };

  extend = function(defaults, options) {
    var extended, prop;
    extended = {};
    prop = void 0;
    for (prop in defaults) {
      prop = prop;
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }
    for (prop in options) {
      prop = prop;
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }
    return extended;
  };

  d3.table = function(data) {
    var table;
    table = ["<table style='line-height:2em;'>"];
    d3.entries(data).forEach(function(d) {
      return table.push("<tr><td>" + d.key + "</td><td>&nbsp</td><td>" + d.value + "</td></tr>");
    });
    return table.join("") + "</table>";
  };

  d3.uniq = function(data, fun) {
    var v_;
    if (typeof fun === 'function') {
      v_ = data.map(fun);
    } else {
      v_ = data.map(function(d) {
        return d[fun];
      });
    }
    return d3.set(v_).values();
  };

  d3.selection.prototype.appendOnce = function(name) {
    var that;
    that = this.selectAll(name).data([{}]);
    that.enter().append(name);
    return that;
  };

  d3.selection.prototype.dataAppend = function(data, name) {
    var that;
    that = this.selectAll(name).data(data);
    return that.enter().append(name);
  };

  d3.ui = d3.ui || {};

  d3.ui.panel = function() {
    var defaults, exports, opts;
    defaults = {
      panels: ["heading", "body"],
      type: "default"
    };
    opts = arguments[0] || defaults;
    exports = function(selection) {
      return selection.each(function(data) {
        return d3.select(this).appendOnce("div.panel.panel-" + opts.type).dataAppend(opts.panels, "div").attr({
          "class": function(d) {
            return "panel-" + d;
          }
        });
      });
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };

  d3.ui.select = function() {
    var event_handlers, exports, opts;
    opts = {
      text: "text",
      value: "value"
    };
    event_handlers = {};
    exports = function(selection) {
      return selection.each(function(data) {
        var event, select, _results;
        select = d3.select(this).appendOnce("select.form-control.col");
        select.dataAppend(data, "option");
        select.selectAll("option").attr({
          value: function(d) {
            return d[opts.value] || d;
          }
        }).text(function(d) {
          return d[opts.text] || d;
        });
        _results = [];
        for (event in event_handlers) {
          _results.push(select.on(event, event_handlers[event]));
        }
        return _results;
      });
    };
    exports.on = function(event, fun) {
      if (arguments.length === 1) {
        return event_handlers[event];
      }
      event_handlers[event] = fun;
      return exports;
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };

  d3.ui.paginate = function() {
    var exports, opts;
    opts = {
      callback: function(d, i) {
        return console.log(d);
      }
    };
    exports = function(selection) {
      return selection.each(function(data) {
        var li, nav;
        nav = d3.select(this);
        nav.appendOnce("ul.pagination").dataAppend(data, "li").classed("active", function(d, i) {
          return i === 0;
        }).append("a").text(function(d) {
          return d;
        });
        li = nav.selectAll("li");
        return li.on("click", function(d, i) {
          li.classed("active", false);
          d3.select(this).classed("active", true);
          return opts.callback(d, i);
        });
      });
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };

  state_coords = function(state) {
    return {
      "AK": [
        {
          "row": 7,
          "col": 1
        }
      ],
      "AL": [
        {
          "row": 7,
          "col": 8
        }
      ],
      "AR": [
        {
          "row": 6,
          "col": 6
        }
      ],
      "AZ": [
        {
          "row": 6,
          "col": 3
        }
      ],
      "CA": [
        {
          "row": 5,
          "col": 2
        }
      ],
      "CO": [
        {
          "row": 5,
          "col": 4
        }
      ],
      "CT": [
        {
          "row": 4,
          "col": 11
        }
      ],
      "DC": [
        {
          "row": 6,
          "col": 10
        }
      ],
      "DE": [
        {
          "row": 5,
          "col": 11
        }
      ],
      "FL": [
        {
          "row": 8,
          "col": 10
        }
      ],
      "GA": [
        {
          "row": 7,
          "col": 9
        }
      ],
      "HI": [
        {
          "row": 8,
          "col": 1
        }
      ],
      "IA": [
        {
          "row": 4,
          "col": 6
        }
      ],
      "ID": [
        {
          "row": 3,
          "col": 3
        }
      ],
      "IL": [
        {
          "row": 3,
          "col": 7
        }
      ],
      "IN": [
        {
          "row": 4,
          "col": 7
        }
      ],
      "KS": [
        {
          "row": 6,
          "col": 5
        }
      ],
      "KY": [
        {
          "row": 5,
          "col": 7
        }
      ],
      "LA": [
        {
          "row": 7,
          "col": 6
        }
      ],
      "MA": [
        {
          "row": 3,
          "col": 11
        }
      ],
      "MD": [
        {
          "row": 5,
          "col": 10
        }
      ],
      "ME": [
        {
          "row": 1,
          "col": 12
        }
      ],
      "MI": [
        {
          "row": 3,
          "col": 8
        }
      ],
      "MN": [
        {
          "row": 3,
          "col": 6
        }
      ],
      "MO": [
        {
          "row": 5,
          "col": 6
        }
      ],
      "MS": [
        {
          "row": 7,
          "col": 7
        }
      ],
      "MT": [
        {
          "row": 3,
          "col": 4
        }
      ],
      "NC": [
        {
          "row": 6,
          "col": 8
        }
      ],
      "ND": [
        {
          "row": 3,
          "col": 5
        }
      ],
      "NE": [
        {
          "row": 5,
          "col": 5
        }
      ],
      "NH": [
        {
          "row": 2,
          "col": 12
        }
      ],
      "NJ": [
        {
          "row": 4,
          "col": 10
        }
      ],
      "NM": [
        {
          "row": 6,
          "col": 4
        }
      ],
      "NV": [
        {
          "row": 4,
          "col": 3
        }
      ],
      "NY": [
        {
          "row": 3,
          "col": 10
        }
      ],
      "OH": [
        {
          "row": 4,
          "col": 8
        }
      ],
      "OK": [
        {
          "row": 7,
          "col": 5
        }
      ],
      "OR": [
        {
          "row": 4,
          "col": 2
        }
      ],
      "PA": [
        {
          "row": 4,
          "col": 9
        }
      ],
      "RI": [
        {
          "row": 4,
          "col": 12
        }
      ],
      "SC": [
        {
          "row": 6,
          "col": 9
        }
      ],
      "SD": [
        {
          "row": 4,
          "col": 5
        }
      ],
      "TN": [
        {
          "row": 6,
          "col": 7
        }
      ],
      "TX": [
        {
          "row": 8,
          "col": 5
        }
      ],
      "UT": [
        {
          "row": 5,
          "col": 3
        }
      ],
      "VA": [
        {
          "row": 5,
          "col": 9
        }
      ],
      "VT": [
        {
          "row": 2,
          "col": 11
        }
      ],
      "WA": [
        {
          "row": 3,
          "col": 2
        }
      ],
      "WI": [
        {
          "row": 2,
          "col": 7
        }
      ],
      "WV": [
        {
          "row": 5,
          "col": 8
        }
      ],
      "WY": [
        {
          "row": 4,
          "col": 4
        }
      ]
    }[state][0];
  };

  d3.heatmap = function(S, A) {
    var defaults, exports, opts;
    defaults = {};
    opts = extend(defaults, arguments[0]);
    exports = function(selection) {
      return selection.each(function(data) {
        var cell, cellEnter;
        S.x.domain(d3.uniq(data, A.x));
        S.y.domain(d3.uniq(data, A.y));
        S.c.domain(d3.extent(data, A.z));
        cell = d3.select(this).selectAll(".cell").data(data, A.id);
        cellEnter = cell.enter().append("g.cell");
        cellEnter.append("rect.state");
        cellEnter.append("text.state");
        cell.attr({
          transform: function(d) {
            return "translate(" + (S.x(A.x(d))) + ", " + (S.y(A.y(d))) + ")";
          }
        });
        cell.select("rect.state").attr({
          x: 0,
          y: 0,
          width: S.x.rangeBand(),
          height: S.y.rangeBand()
        }).style({
          fill: function(d) {
            return S.c(A.z(d));
          }
        });
        return cell;
      });
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };

  d3.render = {} || d3.render;

  d3.render.legend = function() {
    var exports, mylegend;
    mylegend = d3.svg.legend().units("").cellWidth(40).cellHeight(10);
    exports = function(selection) {
      return selection.each(function(data) {
        var legend;
        legend = d3.select(this).appendOnce("g.legend").translate(5, 0);
        legend.select(".mutLegendGroup").remove();
        return legend.call(mylegend);
      });
    };
    d3.rebind(exports, mylegend, "inputScale");
    return exports;
  };

  d3.render.tip = function(sel, html) {
    var tip;
    tip = d3.tip().attr("class", "d3-tip light").html(html || d3.table);
    sel.call(tip);
    sel.on("mouseover", tip.show);
    return sel.on("mouseout", tip.hide);
  };

  d3.statemap = function(S, A) {
    var exports, opts;
    opts = {};
    exports = function(selection) {
      return selection.each(function(data) {
        var cell, legend;
        cell = d3.select(this).call(d3.heatmap(S, A));
        cell.selectAll("rect.state").call(d3.render.tip);
        legend = d3.render.legend().inputScale(S.c);
        d3.select(this).call(legend);
        return cell.selectAll("text.state").attr({
          dx: S.x.rangeBand() / 2,
          dy: S.y.rangeBand() / 2
        }).text(function(d) {
          return d.state;
        });
      });
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };

  d3.container = function(sel, o) {
    var svg;
    o.margin = o.margin || {
      top: 20,
      bottom: 40,
      left: 40,
      right: 20
    };
    o.W = o.width + o.margin.left + o.margin.right;
    o.H = o.height + o.margin.top + o.margin.bottom;
    svg = sel.appendOnce("svg").attr({
      "width": o.W,
      "height": o.H
    }).appendOnce("g.main").attr({
      transform: "translate(" + o.margin.left + ", " + o.margin.top + ")"
    });
    return svg;
  };

  root.statemap = function() {
    var defaults, exports, opts;
    defaults = {
      x: "state",
      y: "count",
      facet: null,
      width: 400,
      height: 400 / 1.5,
      margin: {
        top: 20,
        right: 80,
        bottom: 50,
        left: 50
      },
      colors: colorbrewer.Blues[7],
      heading: "Statebins",
      footer: "This is a statebin chart",
      units: "",
      control: 'dropdown'
    };
    opts = extend(defaults, arguments[0]);
    exports = function(selection) {
      return selection.each(function(data) {
        var A, S, choices, mypanel1, panel1, pbody, update;
        A = {
          x: function(d) {
            return state_coords(d[opts.x]).col;
          },
          y: function(d) {
            return state_coords(d[opts.x]).row;
          },
          z: function(d) {
            return d[opts.y];
          },
          id: function(d) {
            return d[opts.x];
          }
        };
        S = {
          x: d3.scale.ordinal().rangeRoundBands([0, opts.width], 0.02),
          y: d3.scale.ordinal().rangeRoundBands([0, opts.height], 0.02),
          c: d3.scale.quantize().range(opts.colors)
        };
        panel1 = d3.ui.panel().panels(['heading', 'body', 'footer']);
        mypanel1 = d3.select(this).call(panel1);
        console.log(mypanel1.data());
        mypanel1.select('.panel-heading').html(opts.heading);
        pbody = mypanel1.select(".panel-body");
        if (opts.facet) {
          console.log("Group is defined");
          switch (opts.control) {
            case "steps":
              choices = d3.ui.paginate().callback(function(d, i) {
                return update(d);
              });
              break;
            case "dropdown":
              choices = d3.ui.select().text("description").value("code").on("change", function(d, i) {
                return update(this.value);
              });
          }
          pbody.appendOnce("div." + opts.control).datum(d3.uniq(data, opts.facet)).call(choices);
        }
        mypanel1.select(".panel-footer").html(opts.footer);
        update = function(grp) {
          var data_;
          data_ = data.filter(function(d) {
            if (opts.facet) {
              return d[opts.facet] === grp;
            } else {
              return true;
            }
          });
          return d3.container(pbody, opts).datum(data_, A.id).call(d3.statemap(S, A));
        };
        if (opts.facet) {
          return update(d3.uniq(data, opts.facet)[0]);
        } else {
          return update();
        }
      });
    };
    exports.opts = opts;
    createAccessors(exports);
    return exports;
  };


  /*
  codes = {"T01":"Property Taxes","T09":"General Sales and Gross Receipts Taxes","T10":"Alcoholic Beverages Sales Tax","T11":"Amusements Sales Tax","T12":"Insurance Premiums Sales Tax","T13":"Motor Fuels Sales Tax","T14":"Pari-mutuels Sales Tax","T15":"Public Utilities Sales Tax","T16":"Tobacco Products Sales Tax","T19":"Other Selective Sales and Gross Receipts Taxes","T20":"Alcoholic Beverages License","T21":"Amusements License","T22":"Corporations in General License","T23":"Hunting and Fishing License","T24":"Motor Vehicles License","T25":"Motor Vehicle Operators License","T27":"Public Utilities License","T28":"Occupation and Businesses License, NEC","T29":"Other License Taxes","T40":"Individual Income Taxes","T41":"Corporation Net Income Taxes","T50":"Death and Gift Taxes","T51":"Documentary and Stock Transfer Taxes","T53":"Severance Taxes","T99":"Taxes, NEC"}
  
  data4.forEach (d) ->
    d.share = d.share*100
    d.description = codes[d.category]
  
  
  opts =
    x: "state"
    y: "share"
    heading: "<b>Where do your state's taxes come from?</b>"
    footer: "<small>Source: Census <a href='http://www2.census.gov/govs/statetax/14staxcd.txt'>(Data)</a>"
    colors: colorbrewer['Greens'][5]
  
  mystatemap = statemap(opts)
   */


  /*
    .x("state")
    .y("share")
    .group("description")
    .heading("<b>Where do your state's taxes come from?</b>")
    .footer("<small>Source: Census <a href='http://www2.census.gov/govs/statetax/14staxcd.txt'>(Data)</a>")
    .colors(colorbrewer['Greens'][5])
   */


  /*
  chart = d3.select("#mypanel")
    .datum(data4.filter (d) -> d.category is "T01")
    .call(mystatemap)
   */


  /*
  filtered_data = (cat) ->
    data4.filter (d) -> d.category is cat
  
  dat = ["T01", "T40", "T41"].map(filtered_data)
  
  
  chart2 = d3.select("#mypanel")
    .selectAll("div")
    .data(dat).enter()
    .append("div")
    .call(mystatemap)
   */


  /*
  d3.select("#bins").on "change", ->
     chart
      .call(mystatemap.colors(colorbrewer.Greens[this.value]))
  
  choices = d3Selectinput()
    .on "change", (d, i) ->
      colors = colorbrewer[@value][5]
      chart.call(mystatemap.colors(colors))
   */


  /*
  console.log document.getElementById("bins").value
  
  
  d3.selection.prototype.appendOnce2 = (name) ->
     that = this.selectAll(name).data([{}])
     that.enter().append(name)
  
  d3.selection.prototype.dataAppend2 = (data, name) ->
     that = this.selectAll(name).data(data)
     that.enter().append(name)
     return that
   */


  /*
  d3.selection.prototype.appendOnce2 = (name) ->
    that = this.select(name)
    if that.empty()
      this.append(name)
    else
      that
   */


  /*
  colpal = ['Blues', 'PuRd']
  charts = d3.selectAll(".PANEL")
    .data([data3, data3])
    .each (d, i) ->
       d3.select(this).call mystatemap.colors(colorbrewer[colpal[i]][5])
   */

}).call(this);