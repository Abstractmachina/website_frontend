import crypto from 'crypto';
import queryString from "querystring";


/**
 * Description: Generate an authentication token to access Bunny Pullzone
 * @param {string} path:relative path to file
 * @param {nnumber} expiry:time in seconds
 * @returns {string} full URL to file
 */
export const generateBunnyCdnToken = (path : string, expiry : number) : string => {
    const securityKey = process.env.BUNNY_CDN_KEY;
    // const path = '/pathto/file.jpg';
    
    // Set the time of expiry to one hour from now
    var expires = Math.round(Date.now() / 1000) + expiry;
    
    var hashableBase = securityKey + path + expires;
    
    // If using IP validation
    // hashableBase += "146.14.19.7";
    
    // Generate and encode the token 
    var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
    var token = new Buffer(md5String, 'binary').toString('base64');
    token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
    
    // Generate the URL
    var url = `${process.env.BUNNY_PULLZONE}${path}?token=${token}&expires=${expires}`;


    return url;
}



function addCountries(url:string, a:string, b:string) {
	var tempUrl = url;
	if (a != null) {
		var tempUrlOne = new URL(tempUrl);
		tempUrl += ((tempUrlOne.search == "") ? "?" : "&") + "token_countries=" + a;
	}
	if (b != null) {
		var tempUrlTwo = new URL(tempUrl);
		tempUrl += ((tempUrlTwo.search == "") ? "?" : "&") + "token_countries_blocked=" + b;
	}
	return tempUrl;
}

export function generateBunnyCdnToken_V2(url:string, securityKey:string, expirationTime:number = 3600, userIp:string, isDirectory = false, pathAllowed:string, countriesAllowed:string, countriesBlocked:string) {
	/*
		url: CDN URL w/o the trailing '/' - exp. http://test.b-cdn.net/file.png
		securityKey: Security token found in your pull zone
		expirationTime: Authentication validity (default. 86400 sec/24 hrs)
		userIp: Optional parameter if you have the User IP feature enabled
		isDirectory: Optional parameter - "true" returns a URL separated by forward slashes (exp. (domain)/bcdn_token=...)
		pathAllowed: Directory to authenticate (exp. /path/to/images)
		countriesAllowed: List of countries allowed (exp. CA, US, TH)
		countriesBlocked: List of countries blocked (exp. CA, US, TH)
	*/
	var parameterData = "", parameterDataUrl = "", signaturePath = "", hashableBase = "", token = "";
	var expires = Math.floor(new Date().getTime() / 1000) + expirationTime;
	var url = addCountries(url, countriesAllowed, countriesBlocked);
	var parsedUrl = new URL(url);
	var parameters = (new URL(url)).searchParams;
	if (pathAllowed != "") {
		signaturePath = pathAllowed;
		parameters.set("token_path", signaturePath);
	} else {
		signaturePath = decodeURIComponent(parsedUrl.pathname);
	}
	parameters.sort();
	if (Array.from(parameters).length > 0) {
		parameters.forEach(function(value, key) {
			if (value == "") {
				return;
			}
			if (parameterData.length > 0) {
				parameterData += "&";
			}
			parameterData += key + "=" + value;
			parameterDataUrl += "&" + key + "=" + queryString.escape(value);
			
		});
	}
	hashableBase = securityKey + signaturePath + expires + ((userIp != null) ? userIp : "") + parameterData;
	token = Buffer.from(crypto.createHash("sha256").update(hashableBase).digest()).toString("base64");
	token = token.replace(/\n/g, "").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
	if (isDirectory) {
		return parsedUrl.protocol+ "//" + parsedUrl.host + "/bcdn_token=" + token + parameterDataUrl + "&expires=" + expires + parsedUrl.pathname;
	} else {
		return parsedUrl.protocol + "//" + parsedUrl.host + parsedUrl.pathname + "?token=" + token + parameterDataUrl + "&expires=" + expires;
	}
}