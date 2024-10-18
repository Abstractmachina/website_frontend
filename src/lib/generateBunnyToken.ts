import crypto from 'crypto';


/**
 * Description: Generate an authentication token to access Bunny Pullzone
 * @param {string} path:relative path to file
 * @param {nnumber} expiry:time in seconds
 * @returns {string} full URL to file
 */
export function generateBunnyToken(path: string, expiry: number): string {
  const securityKey = process.env.BUNNY_CDN_KEY;
  // const path = '/pathto/file.jpg';
  
  // Set the time of expiry
  var expires = Math.round(Date.now() / 1000) + expiry;
  
  var hashableBase = securityKey + path + expires;

  console.log("security key:", securityKey);
  console.log("path:", path);
  console.log("expires:", expires);
  
  // If using IP validation
  // hashableBase += "146.14.19.7";
  
  // Generate and encode the token 
  var md5String = crypto.createHash("md5").update(hashableBase).digest("binary");
  var token = new Buffer(md5String, 'binary').toString('base64');
  token = token.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
  
  // Generate the URL
  var url = `${process.env.NEXT_PUBLIC_BUNNY_CDN_PULLZONE}${path}?token=${token}&expires=${expires}`;


  return url;
}