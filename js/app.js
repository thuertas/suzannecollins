$(document).foundation()
Foundation.reInit('equalizer');

$(document).ready(function() {
    let result = findGetParams(window.location.href)
    if (('mail' in result)&&('token' in result)){
   	    $('#newsletter-modal').foundation('open');
    }
});

function findGetParams(url) {
   	let result = {};
   	let params = url.split('?')[1]
   	if (params === undefined){
   		return result
   	}

   	params = params.split('&')
   	for (i in params) {
   		let param = params[i].split('=')
   		let key = param[0]
   		let value = param[1]
   		result[key] = value
   	}
    return result;
}
