'use strict';
describe("Plane", function() {
  let plane;
  let airport;
  

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("instructs a plane to land", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  // it("confirms plane has landed", function(){
  //   plane.land(airport);
  //   expect(plane.land).toBe(true);
  // });


  // it("instructs a plane to take off", function(){
  //   plane.takeoff(airport);
  //   expect(plane.takeoff).toEqual("plane has took off");
  // });

  // it("confirms plane has took off", function(){
  //   plane.takeoff(airport);
  //   expect(plane.takeoff).toBe(true);
  // })






//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
  

});

