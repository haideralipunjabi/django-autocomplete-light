var dalLoadLanguage=function(e){var n;e&&e.fn&&e.fn.select2&&e.fn.select2.amd&&(n=e.fn.select2.amd),n.define("select2/i18n/cs",[],function(){function t(e,n){switch(e){case 2:return n?"dva":"dvě";case 3:return"tři";case 4:return"čtyři"}return""}return{errorLoading:function(){return"Výsledky nemohly být načteny."},inputTooLong:function(e){var n=e.input.length-e.maximum;return 1==n?"Prosím, zadejte o jeden znak méně.":n<=4?"Prosím, zadejte o "+t(n,!0)+" znaky méně.":"Prosím, zadejte o "+n+" znaků méně."},inputTooShort:function(e){var n=e.minimum-e.input.length;return 1==n?"Prosím, zadejte ještě jeden znak.":n<=4?"Prosím, zadejte ještě další "+t(n,!0)+" znaky.":"Prosím, zadejte ještě dalších "+n+" znaků."},loadingMore:function(){return"Načítají se další výsledky…"},maximumSelected:function(e){var n=e.maximum;return 1==n?"Můžete zvolit jen jednu položku.":n<=4?"Můžete zvolit maximálně "+t(n,!1)+" položky.":"Můžete zvolit maximálně "+n+" položek."},noResults:function(){return"Nenalezeny žádné položky."},searching:function(){return"Vyhledávání…"},removeAllItems:function(){return"Odstraňte všechny položky"}}}),n.define,n.require},event=new CustomEvent("dal-language-loaded",{lang:"cs"});document.dispatchEvent(event);