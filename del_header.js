const version = 'V1.0.2';

function setHeader(headers, name, value) {
    headers[name.toLowerCase()] = value;
}

setHeader($request.headers, "X-RevenueCat-ETag", "");
$done({ headers: $request.headers });
