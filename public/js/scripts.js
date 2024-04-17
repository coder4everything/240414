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
                reject('위치 정보를 가져오는 동안 오류 발생:',error);
            }
        );
    });
}

function setLocation(){
  // 프로미스를 사용하여 위치 정보 가져오기
  // 그냥 프로미스 써보고 싶었음
    getCurrentPosition()
        .then(position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            return new Promise((resolve,reject) =>{
                // XMLHttpRequest 객체 생성
                var xhr = new XMLHttpRequest();
                // 요청을 보낼 URL 설정
                var url = "/unlogined"; // 실제 요청을 보낼 서버의 URL로 변경해야 합니다
                xhr.open("POST", url, true);
                // 변수 값 합치기
                var data = JSON.stringify({ latitude: latitude, longitude: longitude });
                // 요청 헤더 설정 (JSON 형식의 데이터 전송)
                xhr.setRequestHeader("Content-Type", "application/json");
                // 요청이 완료되었을 때의 콜백 함수 설정
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            // 요청이 성공적으로 완료되었을 때
                            resolve(xhr.responseText);
                        } else {
                            // 요청이 실패했을 때 처리할 코드
                            reject('요청 실패:', xhr.status);
                        }
                    }
                };
                // 요청 보내기
                xhr.send(data);                
            });
        })
        .then(
            locationInfo => {
                console.log(locationInfo);
            }
        )
        .catch(error => {
            console.error(error);
        });
    


}
