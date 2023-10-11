function requestValidator(input) {

    let request = input;

    isMthodValid(request);
    isURIValid(request);
    isVersionValid(request);
    isValidMessage(request);

    return request;

    function isMthodValid(obj) {
        const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if (!Object.keys(obj).includes('method') || !validMethod.includes(obj.method)) {
            throw Error(`Invalid request header: Invalid Method`);
        }
    }

    function isURIValid(obj) {
        let reqURI = obj.uri;
        let pattern = /^[a-zA-Z0-9.]+$/g;

        if (reqURI === '*') {
            return;
        }
        else if (!Object.keys(obj).includes('uri') || !pattern.test(reqURI)) {
            throw Error(`Invalid request header: Invalid URI`);
        }
    }

    function isVersionValid(obj) {
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (!Object.keys(obj).includes('version') || !validVersions.includes(obj.version)) {
            throw Error(`Invalid request header: Invalid Version`);
        }
    }

    function isValidMessage(obj) {
        let reqMsg = obj.message;
        let pattern = /^[^<>&'"\\]*$/i;

        if (!Object.keys(request).includes('message') || !pattern.test(reqMsg)) {
            throw Error(`Invalid request header: Invalid Message`);
        }
    }

}

requestValidator(
    {
        method: 'POST',
        version: 'HTTP/0.9',
        message: 'rm -<rf /*'
      }
      
  );