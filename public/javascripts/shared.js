$(()=>{
console.log('YES')
$('.zipbutton').click((event)=>{
  event.preventDefault();
  console.log('clicked');

});

$('.suitor_select').change(()=> {
  let id = $('.suitor_select').val();
  $.get(`http://localhost:3000/plan_date/get_contact/${id}`)
  .done((suitor)=> {
    $('.contact_container').empty();
    $('.contact_container').append(`<img class='contact' src='${suitor.image_url}'/>`);
    $('.contact_container').append(`<p class='contact-name'><span class='name'><b>${suitor.name}</b></span></p>`);
    $('.contact_container').append(`<p class='contact-met'><b>Where Met?</b> ${suitor.where_met}</p>`);
    $('.contact_container').append(`<p class='contact-rating'><b>Rating:</b> ${suitor.rating}</p>`);
    $('.contact_container').append(`<p class='contact-note'><b>Note: </b> ${suitor.note}</p>`);
    $('.contact_container').show();
    console.log(suitor);
  })
}
);

})
