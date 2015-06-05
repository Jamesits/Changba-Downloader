eventFire = function(el, etype){
  if (el.fireEvent) {
    (el.fireEvent('on' + etype));
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
};
    $($(".pcsong_play_button")[0]).attr("id", "zhj_play_button");
    $($(".pcsong_play_button")[1]).attr("id", "zhj_pause_button");
	eventFire(document.getElementById('zhj_play_button'), 'click');
      //var h = $('#jquery_jplayer_1').html();
      //while ( h == '<img id="jp_poster_0" style="width: 0px; height: 0px; display: none; ">'){
      //console.log("Trying...");
      //var rs = eventFire(obj, 'click');
      //h = $('#jquery_jplayer_1').html();
      //}
    var h = $('#jp_audio_0').attr('src');
    console.log(h);
    $("#export_song").click(function(){
    	location.href = h;
    }).attr("href", h);
    eventFire(document.getElementById('zhj_pause_button'), 'click');