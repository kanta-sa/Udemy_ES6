// 走行距離を求めよう

let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance;

totalDistance = trips.reduce(function(dis, trip){
    return dis + trip.distance;
}, 0);

totalDistance;
