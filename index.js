var airports = require('airport-codes');

hexo.extend.tag.register('airport', function(args, content){
  var code = args[0];
  var airport = airports.findWhere({iata: code});
  var name = airport.get('name');
  var city = airport.get('city');
  var country = airport.get('country');
  var html = `<span class='airport-summary'>
                <span class='airport-summary-code' title='${name}'>${code}</span>
                <span class='airport-summary-location'>${city}, ${country}</span>
              </span>`;
  return html;
});
