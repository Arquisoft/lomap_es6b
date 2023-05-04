import java.time.Duration;
import java.util.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class AddPlace1User extends Simulation {

  {
    HttpProtocolBuilder httpProtocol = http
      .baseUrl("https://inrupt.net")
      .inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*\\.svg", ".*detectportal\\.firefox\\.com.*"))
      .acceptHeader("*/*")
      .acceptEncodingHeader("gzip, deflate, br")
      .acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
      .doNotTrackHeader("1")
      .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0");
    
    Map<CharSequence, String> headers_0 = new HashMap<>();
    headers_0.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
    headers_0.put("Sec-Fetch-Dest", "document");
    headers_0.put("Sec-Fetch-Mode", "navigate");
    headers_0.put("Sec-Fetch-Site", "none");
    headers_0.put("Sec-Fetch-User", "?1");
    headers_0.put("Upgrade-Insecure-Requests", "1");
    
    Map<CharSequence, String> headers_1 = new HashMap<>();
    headers_1.put("Origin", "https://uo282249.github.io");
    headers_1.put("Sec-Fetch-Dest", "empty");
    headers_1.put("Sec-Fetch-Mode", "cors");
    headers_1.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_2 = new HashMap<>();
    headers_2.put("Access-Control-Request-Headers", "content-type");
    headers_2.put("Access-Control-Request-Method", "POST");
    headers_2.put("Origin", "https://uo282249.github.io");
    headers_2.put("Sec-Fetch-Dest", "empty");
    headers_2.put("Sec-Fetch-Mode", "cors");
    headers_2.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_3 = new HashMap<>();
    headers_3.put("Content-Type", "application/json");
    headers_3.put("Origin", "https://uo282249.github.io");
    headers_3.put("Sec-Fetch-Dest", "empty");
    headers_3.put("Sec-Fetch-Mode", "cors");
    headers_3.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_4 = new HashMap<>();
    headers_4.put("If-None-Match", "W/\"4ac-ibs7FMDcT/LugQv7+54WcO8A360\"");
    headers_4.put("Origin", "https://uo282249.github.io");
    headers_4.put("Sec-Fetch-Dest", "empty");
    headers_4.put("Sec-Fetch-Mode", "cors");
    headers_4.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_5 = new HashMap<>();
    headers_5.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
    headers_5.put("Sec-Fetch-Dest", "document");
    headers_5.put("Sec-Fetch-Mode", "navigate");
    headers_5.put("Sec-Fetch-Site", "cross-site");
    headers_5.put("Sec-Fetch-User", "?1");
    headers_5.put("Upgrade-Insecure-Requests", "1");
    
    Map<CharSequence, String> headers_6 = new HashMap<>();
    headers_6.put("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8");
    headers_6.put("Origin", "https://inrupt.net");
    headers_6.put("Sec-Fetch-Dest", "document");
    headers_6.put("Sec-Fetch-Mode", "navigate");
    headers_6.put("Sec-Fetch-Site", "same-origin");
    headers_6.put("Sec-Fetch-User", "?1");
    headers_6.put("Upgrade-Insecure-Requests", "1");
    
    Map<CharSequence, String> headers_8 = new HashMap<>();
    headers_8.put("Access-Control-Request-Headers", "authorization,dpop");
    headers_8.put("Access-Control-Request-Method", "POST");
    headers_8.put("Origin", "https://uo282249.github.io");
    headers_8.put("Sec-Fetch-Dest", "empty");
    headers_8.put("Sec-Fetch-Mode", "cors");
    headers_8.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_9 = new HashMap<>();
    headers_9.put("DPoP", "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkkxSExsMV9FejBSRkpYUGhMVVptcXRSYkozclFtWVhuLVotWWZLenREbmMiLCJ5IjoiNlJCYy02WEdtX0ZvdS1uVzZ4aTByaUZJRV93OExrWExidnFRM2tVNUlEayIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2lucnVwdC5uZXQvdG9rZW4iLCJodG0iOiJQT1NUIiwianRpIjoiZDUzNzMzNTYtNGI4OC00YmUwLWFjYzgtNTJkZGJiMGZkNzg4IiwiaWF0IjoxNjgzMTM4NjQyfQ.H7s4pBdrmqyS9AlilfY3nNFiDnRLtNAR5fSN13pMqxVGMftSgg4wDZ-ui2FE3UPcmYrzmMU7FLq_8teHUXH58A");
    headers_9.put("Origin", "https://uo282249.github.io");
    headers_9.put("Sec-Fetch-Dest", "empty");
    headers_9.put("Sec-Fetch-Mode", "cors");
    headers_9.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_11 = new HashMap<>();
    headers_11.put("Access-Control-Request-Headers", "authorization,dpop");
    headers_11.put("Access-Control-Request-Method", "GET");
    headers_11.put("Origin", "https://uo282249.github.io");
    headers_11.put("Sec-Fetch-Dest", "empty");
    headers_11.put("Sec-Fetch-Mode", "cors");
    headers_11.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_12 = new HashMap<>();
    headers_12.put("Accept", "text/turtle");
    headers_12.put("Origin", "https://uo282249.github.io");
    headers_12.put("Sec-Fetch-Dest", "empty");
    headers_12.put("Sec-Fetch-Mode", "cors");
    headers_12.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_13 = new HashMap<>();
    headers_13.put("Accept", "text/turtle");
    headers_13.put("Origin", "https://uo282249.github.io");
    headers_13.put("Sec-Fetch-Dest", "empty");
    headers_13.put("Sec-Fetch-Mode", "cors");
    headers_13.put("Sec-Fetch-Site", "cross-site");
    headers_13.put("authorization", "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSIsImV4cCI6MTY4NDM0ODI0MywiaWF0IjoxNjgzMTM4NjQzLCJqdGkiOiJlYzM2M2MyZjJiYjE1MWM2IiwiY25mIjp7ImprdCI6IkFaVjA5VEV5aEF2MkNGbzJHWFotVXZDLTBHR3dsNTRpeHVrZUZLSTlJWVEifSwiY2xpZW50X2lkIjoiMzQwY2U0YmIxZDZkNjlkNmU1ZjIzMWY5NDVkOTU5MGMiLCJ3ZWJpZCI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSJ9.CMx049l5VLmtdD2MUStLOJADuwsJvU0VgTFtAA-jtnXDuIEOc8wKSVjMTwZAyCHz-nwq3eJIM7sCr1if2xBtTrS5OxYrepX4rcDKYSwHJ8WqDCcje8rCFL3QfMwYaqD-8e3-S4vOes0bUOK2lAzXZYGHn1aStg5-xnV5oIp8gqgNJw9DK-jByNuKd1TbplOCBK4FTJiiIT60LrGlf-ZpmpeV8fiNPl1E2WZCO3T_rNBu53CRlOA3Ml7DEWGKYyqk_gSCSwXbparLGtjBznUAG3U1_QNm5Bht-nBU1Qoe8Lh_8F0TV9u_BL4CXX9LSjSLftyiQzC3OgFRdlX47C0owQ");
    headers_13.put("dpop", "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkkxSExsMV9FejBSRkpYUGhMVVptcXRSYkozclFtWVhuLVotWWZLenREbmMiLCJ5IjoiNlJCYy02WEdtX0ZvdS1uVzZ4aTByaUZJRV93OExrWExidnFRM2tVNUlEayIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2FkcmlhbmFtYW51ZWxhbGljaWEuaW5ydXB0Lm5ldC9wcml2YXRlL1BsYWNlcy8iLCJodG0iOiJHRVQiLCJqdGkiOiI0OGIxMzFlNS00OGMwLTRmNmEtYjBmMi00MmZjZjljZjE1YjgiLCJpYXQiOjE2ODMxMzg2NDN9.XwIBkUNTc0yAPO6W9x-PkZhcStHRy6uAYhJbx9aJju75m2flTezW04OGPziXQau7C4wB3UXuJLSDH2Nbp--Qzw");
    
    Map<CharSequence, String> headers_15 = new HashMap<>();
    headers_15.put("Origin", "https://uo282249.github.io");
    headers_15.put("Sec-Fetch-Dest", "empty");
    headers_15.put("Sec-Fetch-Mode", "cors");
    headers_15.put("Sec-Fetch-Site", "cross-site");
    headers_15.put("authorization", "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSIsImV4cCI6MTY4NDM0ODI0MywiaWF0IjoxNjgzMTM4NjQzLCJqdGkiOiJlYzM2M2MyZjJiYjE1MWM2IiwiY25mIjp7ImprdCI6IkFaVjA5VEV5aEF2MkNGbzJHWFotVXZDLTBHR3dsNTRpeHVrZUZLSTlJWVEifSwiY2xpZW50X2lkIjoiMzQwY2U0YmIxZDZkNjlkNmU1ZjIzMWY5NDVkOTU5MGMiLCJ3ZWJpZCI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSJ9.CMx049l5VLmtdD2MUStLOJADuwsJvU0VgTFtAA-jtnXDuIEOc8wKSVjMTwZAyCHz-nwq3eJIM7sCr1if2xBtTrS5OxYrepX4rcDKYSwHJ8WqDCcje8rCFL3QfMwYaqD-8e3-S4vOes0bUOK2lAzXZYGHn1aStg5-xnV5oIp8gqgNJw9DK-jByNuKd1TbplOCBK4FTJiiIT60LrGlf-ZpmpeV8fiNPl1E2WZCO3T_rNBu53CRlOA3Ml7DEWGKYyqk_gSCSwXbparLGtjBznUAG3U1_QNm5Bht-nBU1Qoe8Lh_8F0TV9u_BL4CXX9LSjSLftyiQzC3OgFRdlX47C0owQ");
    headers_15.put("dpop", "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkkxSExsMV9FejBSRkpYUGhMVVptcXRSYkozclFtWVhuLVotWWZLenREbmMiLCJ5IjoiNlJCYy02WEdtX0ZvdS1uVzZ4aTByaUZJRV93OExrWExidnFRM2tVNUlEayIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2FkcmlhbmFtYW51ZWxhbGljaWEuaW5ydXB0Lm5ldC9wcml2YXRlL1BsYWNlcy9kMzc3OTZmZC1kN2IwLTQ4YzEtYmE2Yi1hOTg5ZDkxZTY1MDMuanNvbiIsImh0bSI6IkdFVCIsImp0aSI6IjgzY2JjMzdhLTcyNTEtNDgyNS04NzAxLWFiNDcyYzgzOTY2OCIsImlhdCI6MTY4MzEzODY0NH0.pITWljnYs5tXLW_TmQFKIoZy2mo_62uRen3qZD1d6fIp4QupUvL8B1cbLHCaQSfZ4ldIyU4c0aC1TGLC-J1H6g");
    
    Map<CharSequence, String> headers_16 = new HashMap<>();
    headers_16.put("Access-Control-Request-Headers", "authorization,content-type,dpop");
    headers_16.put("Access-Control-Request-Method", "PUT");
    headers_16.put("Origin", "https://uo282249.github.io");
    headers_16.put("Sec-Fetch-Dest", "empty");
    headers_16.put("Sec-Fetch-Mode", "cors");
    headers_16.put("Sec-Fetch-Site", "cross-site");
    
    Map<CharSequence, String> headers_17 = new HashMap<>();
    headers_17.put("Origin", "https://uo282249.github.io");
    headers_17.put("Sec-Fetch-Dest", "empty");
    headers_17.put("Sec-Fetch-Mode", "cors");
    headers_17.put("Sec-Fetch-Site", "cross-site");
    headers_17.put("authorization", "DPoP eyJhbGciOiJSUzI1NiIsImtpZCI6IlJTZFhXUEplV0pJIn0.eyJpc3MiOiJodHRwczovL2lucnVwdC5uZXQiLCJhdWQiOiJzb2xpZCIsInN1YiI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSIsImV4cCI6MTY4NDM0ODI0MywiaWF0IjoxNjgzMTM4NjQzLCJqdGkiOiJlYzM2M2MyZjJiYjE1MWM2IiwiY25mIjp7ImprdCI6IkFaVjA5VEV5aEF2MkNGbzJHWFotVXZDLTBHR3dsNTRpeHVrZUZLSTlJWVEifSwiY2xpZW50X2lkIjoiMzQwY2U0YmIxZDZkNjlkNmU1ZjIzMWY5NDVkOTU5MGMiLCJ3ZWJpZCI6Imh0dHBzOi8vYWRyaWFuYW1hbnVlbGFsaWNpYS5pbnJ1cHQubmV0L3Byb2ZpbGUvY2FyZCNtZSJ9.CMx049l5VLmtdD2MUStLOJADuwsJvU0VgTFtAA-jtnXDuIEOc8wKSVjMTwZAyCHz-nwq3eJIM7sCr1if2xBtTrS5OxYrepX4rcDKYSwHJ8WqDCcje8rCFL3QfMwYaqD-8e3-S4vOes0bUOK2lAzXZYGHn1aStg5-xnV5oIp8gqgNJw9DK-jByNuKd1TbplOCBK4FTJiiIT60LrGlf-ZpmpeV8fiNPl1E2WZCO3T_rNBu53CRlOA3Ml7DEWGKYyqk_gSCSwXbparLGtjBznUAG3U1_QNm5Bht-nBU1Qoe8Lh_8F0TV9u_BL4CXX9LSjSLftyiQzC3OgFRdlX47C0owQ");
    headers_17.put("content-type", "application/ld+json");
    headers_17.put("dpop", "eyJhbGciOiJFUzI1NiIsImp3ayI6eyJjcnYiOiJQLTI1NiIsImt0eSI6IkVDIiwieCI6IkkxSExsMV9FejBSRkpYUGhMVVptcXRSYkozclFtWVhuLVotWWZLenREbmMiLCJ5IjoiNlJCYy02WEdtX0ZvdS1uVzZ4aTByaUZJRV93OExrWExidnFRM2tVNUlEayIsImFsZyI6IkVTMjU2In0sInR5cCI6ImRwb3Arand0In0.eyJodHUiOiJodHRwczovL2FkcmlhbmFtYW51ZWxhbGljaWEuaW5ydXB0Lm5ldC9wcml2YXRlL1BsYWNlcy9mNTYwZDRiNS04NDZlLTQ5NmEtOTZhNy1jOWM3Mzk1MjkwMzkuanNvbiIsImh0bSI6IlBVVCIsImp0aSI6ImY1ZGQxMmE0LTNlOTItNGFjMi05NmI1LWYxYWI2NTdkZDc1YSIsImlhdCI6MTY4MzEzODY1NX0.gkk2Nahnf_6Neb5sZqAKGbo6fjUYTTiSM5A9_ZA8kWFbZjoKTwZPoFS7Zo6UDzwF2w48lpVrRoag1L2ecoUMUw");
    
    String uri1 = "https://adrianamanuelalicia.inrupt.net";
    
    String uri3 = "https://uo282249.github.io/lomap_es6b";

    ScenarioBuilder scn = scenario("AddPlace1User")
      .exec(
        http("request_0")
          .get(uri3 + "/")
          .headers(headers_0)
      )
      .pause(1)
      .exec(
        http("request_1")
          .get("/.well-known/openid-configuration")
          .headers(headers_1)
          .resources(
            http("request_2")
              .options("/register")
              .headers(headers_2),
            http("request_3")
              .post("/register")
              .headers(headers_3)
              .body(RawFileBody("addPlaceRequests/0003_request.json")),
            http("request_4")
              .get("/.well-known/openid-configuration")
              .headers(headers_4),
            http("request_5")
              .get("/authorize?client_id=340ce4bb1d6d69d6e5f231f945d9590c&redirect_uri=https%3A%2F%2Fuo282249.github.io%2Flomap_es6b%2F&response_type=code&scope=openid%20offline_access%20webid&state=a28f05ea5ac648b2ac134f55e805fd5e&code_challenge=bNUFsBHf4KaWfZ6_JxYxC-v7-pCoZ2S7btKJZRmVrDU&code_challenge_method=S256&prompt=consent&response_mode=query")
              .headers(headers_5)
          )
      )
      .pause(7)
      .exec(
        http("request_6")
          .post("/login/password")
          .headers(headers_6)
          .formParam("username", "AdrianaManuelAlicia")
          .formParam("password", "AdrianaManuelAlicia")
          .formParam("response_type", "code")
          .formParam("display", "")
          .formParam("scope", "openid offline_access webid")
          .formParam("client_id", "340ce4bb1d6d69d6e5f231f945d9590c")
          .formParam("redirect_uri", "https://uo282249.github.io/lomap_es6b/")
          .formParam("state", "a28f05ea5ac648b2ac134f55e805fd5e")
          .formParam("nonce", "")
          .formParam("request", "")
          .resources(
            http("request_7")
              .get("/.well-known/openid-configuration")
              .headers(headers_4),
            http("request_8")
              .options("/token")
              .headers(headers_8),
   
            http("request_10")
              .get("/jwks")
              .headers(headers_1),
            http("request_11")
              .options(uri1 + "/private/Places/")
              .headers(headers_11),
            http("request_12")
              .get(uri1 + "/profile/card")
              .headers(headers_12),
            http("request_13")
              .get(uri1 + "/private/Places/")
              .headers(headers_13),
            http("request_14")
              .options(uri1 + "/private/Places/d37796fd-d7b0-48c1-ba6b-a989d91e6503.json")
              .headers(headers_11),
            http("request_15")
              .get(uri1 + "/private/Places/d37796fd-d7b0-48c1-ba6b-a989d91e6503.json")
              .headers(headers_15)
          )
      )
      .pause(9)
      .exec(
        http("request_16")
          .options(uri1 + "/private/Places/f560d4b5-846e-496a-96a7-c9c739529039.json")
          .headers(headers_16)
          .resources(
            http("request_17")
              .put(uri1 + "/private/Places/f560d4b5-846e-496a-96a7-c9c739529039.json")
              .headers(headers_17)
              .body(RawFileBody("addPlaceRequests/0017_request.txt"))
          )
      );

	  setUp(scn.injectOpen(atOnceUsers(1))).protocols(httpProtocol);
  }
}
