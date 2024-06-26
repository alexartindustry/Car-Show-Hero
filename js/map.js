jQuery(document).ready(function () {
  $(document).on('click', '#reset-btn', function(e){ 
    e.preventDefault();
    $('#vmap').remove();
    $('#map-states').append('<div id="vmap" class="jvmap-smart"></div>');
    Map();
    $('.events').css('display','none');
    /*
    $('#events-tx').css('display','block');
    $('#selected-state').text('TEXAS');*/
    $('#selected-state').text('');
    $('html, body').animate({
      scrollTop: $('#states').offset().top
  }, 'slow');
  });

  function Map() {
  jQuery('#vmap').vectorMap({
      map: 'usa_en',
      enableZoom: false,
      showTooltip: true,
      backgroundColor: '#000',
      borderColor: "#fff",
      borderWidth: 1,
      selectedColor: '#a80005',
      /*selectedRegions: 'tx',*/
      hoverColor: '#a80005',
      onRegionClick: function(element, code, region)
      {
          var message = 'You clicked "'
              + region
              + '" which has the code: '
              + code.toUpperCase();
         /* $('#vmap path').css('filter','grayscale(1)');
          $('#vmap path[id="jqvmap1_'+code+'"]').css('filter','grayscale(0)');*/
          $('#selected-state').text(region);
          $('.events').css('display','none');
          $('#events-' + code).css('display','block');
          $('html, body').animate({
              scrollTop: $('#state-events').offset().top
          }, 'slow');
          /*alert(message);*/
      },
      colors: {
        hi: "#b6b6b6",
        ak:"#707070",
        fl: "#707070",
        nh: "#898989",
        vt: "#b6b6b6",
        me: "#707070",
        ri: "#636363",
        ny: "#636363",
        pa: "#dadada",
        nj: "#b6b6b6",
        de: "#636363",
        md: "#898989",
        va: "#707070",
        wv: "#b6b6b6",
        oh: "#707070",
        in: "#dadada",
        il: "#b6b6b6",
        ct: "#898989",
        wi: "#707070",
        nc: "#898989",
        dc: "#898989",
        ma: "#dadada",
        tn: "#b6b6b6",
        ar: "#dadada",
        mo: "#898989",
        ga: "#dadada",
        sc: "#b6b6b6",
        ky: "#898989",
        al: "#636363",
        la: "#b6b6b6",
        ms: "#898989",
        ia:"#dadada",
        mn: "#b6b6b6",
        ok: "#898989",
        tx: "#707070",
        nm: "#dadada",
        ks: "#dadada",
        ne: "#898989",
        sd: "#707070",
        nd: "#636363",
        wy: "#dadada",
        mt: "#b6b6b6",
        co: "#636363",
        ut: "#b6b6b6",
        az: "#898989",
        nv: "#dadada",
        or: "#898989",
        wa: "#636363",
        ca:"#b6b6b6",
        mi: "#898989",
        id: "#707070",
        gu: "#707070",
        vi: "#707070",
        pr: "#707070",
        as: "#707070",
        mp: "#707070"
      },
      onResize: function(event, width, height)
      {
      }
    });
    $('#vmap path[id="jqvmap1_tx"]').css('filter','grayscale(0)');
    }

    Map();
});