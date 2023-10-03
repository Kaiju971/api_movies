export const Errors = (codeErr: number) => {
  let response = "";

  switch (codeErr) {
    case 400:
      response = "Client Error: Bad Request";
      break;
    case 401:
      response = "Client Error: Unauthorized";
      break;
    case 402:
      response = "Client Error: Payment Required";
      break;
    case 403:
      response = "Client Error: Forbidden";
      break;
    case 404:
      response = "Client Error: Not Found";
      break;
    case 405:
      response = "Client Error: Method Not Allowed";
      break;
    case 406:
      response = "Client Error: Not Acceptable";
      break;
    case 407:
      response = "Client Error: Proxy Authentication Required";
      break;
    case 408:
      response = "Client Error: Request Timeout";
      break;
    case 409:
      response = "Client Error: Conflict";
      break;
    case 410:
      response = "Client Error: Gone";
      break;
    case 411:
      response = "Client Error: Length Required";
      break;
    case 412:
      response = "Client Error: Precondition Failed";
      break;
    case 413:
      response = "Client Error: Payload Too Large";
      break;
    case 414:
      response = "Client Error: URI Too Long";
      break;
    case 415:
      response = "Client Error: Unsupported Media Type";
      break;
    case 416:
      response = "Client Error: Range Not Satisfiable";
      break;
    case 417:
      response = "Client Error: Expectation Failed ";
      break;
    case 419:
      response = "Client Error: Authentication Timeout (not in RFC 2616)";
      break;
    case 421:
      response = "Client Error: Misdirected Request";
      break;
    case 499:
      response = "Client Error: Client Closed Request";
      break;
    case 500:
      response = "Server Error: Internal Server Error";
      break;
    case 501:
      response = "Server Error: Not Implemented";
      break;
    case 502:
      response = "Server Error: Bad Gateway";
      break;
    case 503:
      response = "Server Error: Service Unavailable";
      break;
    case 504:
      response = "Server Error: Gateway Timeout";
      break;
    case 505:
      response = "Server Error: HTTP Version Not Supported";
      break;
    case 506:
      response = "Server Error: Variant Also Negotiates";
      break;
    case 507:
      response = "Server Error: Insufficient Storage";
      break;
    case 508:
      response = "Server Error: Loop Detected";
      break;
    case 509:
      response = "Server Error: Bandwidth Limit Exceeded";
      break;
    case 510:
      response = "Server Error: Not Extended";
      break;
    case 511:
      response = "Server Error: Network Authentication Required";
      break;
    case 520:
      response = "Server Error: Unknown Error";
      break;
    case 521:
      response = "Server Error: Web Server Is Down";
      break;
    case 522:
      response = "Server Error: Connection Timed Out";
      break;
    case 523:
      response = "Server Error: Origin Is Unreachable";
      break;
    case 524:
      response = "Server Error: A Timeout Occurred ";
      break;
    case 525:
      response = "Server Error: SSL Handshake Failed";
      break;
    case 526:
      response = "Server Error: Invalid SSL Certificate";
      break;

    default:
  }

  return response;
};
