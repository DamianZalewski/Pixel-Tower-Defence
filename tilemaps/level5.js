(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level5",
{ "height":10,
 "infinite":false,
 "layers":[
        {
         "data":[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
         "height":10,
         "name":"sand",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }, 
        {
         "data":[2, 2, 2, 0, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 3, 0, 0, 0, 0, 2, 2, 2, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 0, 0, 3, 0, 2, 2, 2, 2, 2, 2, 0, 0, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 0, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 2, 2, 0, 3, 3, 3, 3, 0, 0, 0, 2, 2, 0, 3, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 2, 0, 0, 0, 2, 2, 2, 2],
         "height":10,
         "name":"adds",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":10,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.1.6",
 "tileheight":54,
 "tilesets":[
        {
         "firstgid":1,
         "source":"grass.tsx"
        }, 
        {
         "firstgid":2,
         "source":"rock.tsx"
        }, 
        {
         "firstgid":3,
         "source":"path.tsx"
        }, 
        {
         "firstgid":4,
         "source":"sand.tsx"
        }],
 "tilewidth":54,
 "type":"map",
 "version":1,
 "width":10
});