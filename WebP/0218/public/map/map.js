import config from "../../api.js";

const KAKAO_MAP_API_KEY = config.KAKAO_MAP_API_KEY;

const container = document.querySelector('#map');
const options = {
    center: new kakao.maps.LatLng(35.170797, 129.114157),
    level: 7
};
const map = new kakao.maps.Map(container, options);

// 마커 만들기
function makeMarker(store) {
    const {sno, name, lat, lng} = store;
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({ position: markerPosition });

    marker.show = function () { marker.setMap(map); }
    marker.hide = function () { marker.setMap(null); }

    const iwContent = `<div style="padding:5px;">${sno} - ${name}</div>`;
    const infowindow = new kakao.maps.InfoWindow({ content: iwContent, removable: true });

    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        map.panTo(markerPosition);
    });

    store.marker = marker;
    return store;
}

const stores = [
    {sno:1, name: '늘해랑', lat: 35.172417, lng: 129.071677, cat:'S'},
    {sno:2, name: '국제밀면', lat: 35.19686, lng: 129.07787, cat:'N'},
    {sno:3, name: '합천일류돼지국밥', lat: 35.162277, lng: 128.980138, cat:'S'},
    {sno:4, name: '범일돼지국밥', lat: 35.242739, lng: 129.093678, cat:'S'},
    {sno:5, name: '미각반점', lat: 35.228885, lng: 129.085024, cat:'C'},
    {sno:6, name: '수복 돼지국밥', lat: 35.205792, lng: 129.102198, cat:'S'},
];

const markedStores = stores.map(s => makeMarker(s));

function showSelectStore(catName) {
    markedStores.forEach(s => s.marker.hide());
    markedStores.filter(s => catName === 'A' || s.cat === catName).forEach(s => s.marker.show());
}

document.querySelector('.category').addEventListener("click", e => {
    const target = e.target;
    if(target.tagName !== 'LI') { return; }
    showSelectStore(target.dataset.cat);
}, false);
