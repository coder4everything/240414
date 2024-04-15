/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//navigator.geolocation.getCurrentPosition정보참조
//https://velog.io/@hayeooooon/2022-08-06
function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve(position);
            },
            error => {
                reject(error);
            }
        );
    });
}

function setLocation(){
  // 프로미스를 사용하여 위치 정보 가져오기
  // 그냥 프로미스 써보고 싶었음
  getCurrentPosition()
      .then(position => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      })
      .catch(error => {
          console.error('위치 정보를 가져오는 동안 오류 발생:', error);
      });
}
