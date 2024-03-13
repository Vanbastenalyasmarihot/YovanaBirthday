var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  'Hay YO',
  '<img src="https://media.tenor.com/cvDAdMAKi6cAAAAi/hasher-happy-sticker.gif"></img> <b><center>Selamat Ulang Tahun ya YO! </b><br><br>Maafin aku ya, hanya ini yang bisa kulakuin buat kamu:)',
    'Maafin aku udah pernah nyakitin kamu dan hancurin perasaanmu:)',
  'Maaf juga karena aku cuma bisa nyampain nya lewat chat kaya gini, Gak laki memang aku nyampain lewat gini, tapi aku malu aja sama diriku sendiri, kadang pengen chat kamu, kadang juga pengen dengar suaramu, tapi gak boleh berharap lebih kan ya?:)',
  'Gpp deh tapi ingat ya Yo, Kamu harus menjadi wanita luar biasa ok Yo, Tetap kuat dan selalu menjadi wanita yang hebat.',
  'Meski sekarang kita udah bisa di bilang kaya air dan api, ku harap kamu selalu berjalan di jalanmu dan jangan sampai lupa pada tujuanmu.',
  'Aku bangga sama kamu, aku gak bisa apa apa lagi sekarang buat nemanin prosesmu berjalan, mengoreksi pilihanmu, tapi ku harap kamu punya cara hebat buat selalu yang terdepan, dan selalu memprioritaskan dirimu.',
  'Sekali lagi SELAMAT ULANG TAHUN PEJUANG JAVA SCRIPT:)',
  'bye Yo, Sehat selalu ya:)',
  'See ya:)',
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://qph.cf2.quoracdn.net/main-thumb-1664319564-200-kenjkamgwtkubcqebicjxgdhpluiyluw.jpeg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://qph.cf2.quoracdn.net/main-thumb-1664319564-200-kenjkamgwtkubcqebicjxgdhpluiyluw.jpeg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}