(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['peopleCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"peopleCard\">\r\n  <p class=\"player-info-line\">Name: "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":44}}}) : helper)))
    + "</p>\r\n  <div class=\"deletePlayerCard\">\r\n    <button class=\"deletePlayerCardBtn\" type=\"button\" name=\"button\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":4,"column":75},"end":{"line":4,"column":87}}}) : helper)))
    + "\">X</button>\r\n  </div>\r\n  <p class=\"player-info-line\">Year: "
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":6,"column":36},"end":{"line":6,"column":44}}}) : helper)))
    + "</p>\r\n  <p class=\"player-info-line\">Email: "
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":46}}}) : helper)))
    + "</p>\r\n  <p class=\"player-info-line\">Game: "
    + alias4(((helper = (helper = lookupProperty(helpers,"game") || (depth0 != null ? lookupProperty(depth0,"game") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"game","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":44}}}) : helper)))
    + "</p>\r\n  <p class=\"player-info-line\">Username: "
    + alias4(((helper = (helper = lookupProperty(helpers,"username") || (depth0 != null ? lookupProperty(depth0,"username") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":52}}}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['homeCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"game-card\">\r\n  <div>\r\n    <a href=\"/players/"
    + alias4(((helper = (helper = lookupProperty(helpers,"team") || (depth0 != null ? lookupProperty(depth0,"team") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"team","hash":{},"data":data,"loc":{"start":{"line":3,"column":22},"end":{"line":3,"column":30}}}) : helper)))
    + "\"><img class=\"game-icon\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":3,"column":60},"end":{"line":3,"column":67}}}) : helper)))
    + "\" /></a>\r\n  </div>\r\n</section>\r\n";
},"useData":true});
templates['teamPlayer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"teamRoster-player\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":21}}}) : helper)))
    + "\" alt=\"OFFENSE\" height=\"42\" width=\"42\">\r\n      <div class=\"PlayerHandle-playerwrapper\">\r\n    <b class=\"PlayerHandle-handle\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"player") || (depth0 != null ? lookupProperty(depth0,"player") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"player","hash":{},"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":45}}}) : helper)))
    + "\r\n    </b>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();