const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
// $pdfs.hide();

$("ul").append("<label><input type='checkbox'> Allow PDF downloads</label>");

//open new tab for secure links
$secureLinks.attr('target', '_blank');

//auto download pdfs or open in new tab
$pdfs.attr('download', true)
      .attr('target', '_blank');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
  //check if box is checked
  //if zero checkboxes = checked
  if($(':checked').length === 0){
      //prevent download
    event.preventDefault();
    //alert user
    alert('Please check the box to allow pdf downloads')
  }
  //else, allow download
});
