function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
      const index = url.indexOf(parameter) + parameter.length + 1;
    //   console.log(index)
      
      var result = ""
      for(let i=index; i<url.length; i++ ){
        if(url[i] === "&"){
          break;
        }
        result += url[i];
      }
      
      console.log(result)
    }
    
getUrlParameterValue("https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby", "utm_medium")