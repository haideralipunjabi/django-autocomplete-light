var dalLoadLanguage=function(e){var n;e&&e.fn&&e.fn.select2&&e.fn.select2.amd&&(n=e.fn.select2.amd),n.define("select2/i18n/tk",[],function(){return{errorLoading:function(){return"Netije ýüklenmedi."},inputTooLong:function(e){return e.input.length-e.maximum+" harp bozuň."},inputTooShort:function(e){return"Ýene-de iň az "+(e.minimum-e.input.length)+" harp ýazyň."},loadingMore:function(){return"Köpräk netije görkezilýär…"},maximumSelected:function(e){return"Diňe "+e.maximum+" sanysyny saýlaň."},noResults:function(){return"Netije tapylmady."},searching:function(){return"Gözlenýär…"},removeAllItems:function(){return"Remove all items"}}}),n.define,n.require},event=new CustomEvent("dal-language-loaded",{lang:"tk"});document.dispatchEvent(event);