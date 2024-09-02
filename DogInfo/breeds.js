const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const reset = document.getElementById("reset-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

const currentDogs = [];

// 정보 가져오는 기능 메소드
function displayDogs(item){
  const dogImgDiv = document.createElement("div");

  dogImgDiv.classList.add("flex-item");
  dogImgDiv.innerHTML = `<img src="${item}">`;

  main.appendChild(dogImgDiv);
}

window.addEventListener("load", function(){
  //강아지 사진 업로드
  request1.open("get", apiRandomDogs);

  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response);

    response.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();

  // select에 견종 정보
  request2.open("get", apiAllBreeds);

  request2.addEventListener("load", function(){
    const response = JSON.parse(request2.response);

    Object.keys(response.message).forEach(function(item){
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });
  request2.send();
});

// 검색 필터링 기능
button.addEventListener("click", function(){
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(input.value) !== -1
  });

  input.value = "";

  filteredDogs.forEach(function(item){
    displayDogs(item);
  });
})

// select 필터링 기능
select.addEventListener("change", function(){
  main.innerHTML = "";
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(select.value) !== -1
  });

  filteredDogs.forEach(function(item){
    displayDogs(item);
  });
})

// 리셋 버튼 기능
reset.addEventListener("click", function(){
  request1.open("get", apiRandomDogs);

  main.innerHTML = "";

  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response);

    response.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

// 더보기 기능(리스트 더 뽑아오기)
more.addEventListener("click", function(){
  request1.open("get", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response);
    response.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    });
  })
  request1.send();
});

// 스크롤 TOP 이동 기능
tothetop.addEventListener("click", function(){
  // scrollTo : 주어진 위치로 스크롤을 이동한다.
  window.scrollTo({ top : 0 });
});