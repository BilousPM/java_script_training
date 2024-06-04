!function(){console.log("After !!!");try{setTimeout((()=>{const o=10;o=5,console.log(o)}),1e3)}catch(o){console.log(o)}console.log("Beafore!!!"),console.log("After !!!"),setTimeout((()=>{try{const o=10;o=5,console.log(o)}catch(o){console.log(o)}}),1e3),console.log("Beafore!!!")}();
//# sourceMappingURL=crud.5f971fda.js.map
