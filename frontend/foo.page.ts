import {NamedPage, addPage} from '@hydrooj/ui-default';
addPage (new NamedPage ('home_account', () => {
  const el = document.createElement ('style');
  el.innerHTML = `*[data-type="upload"] { display: none !important; } `; // remove upload icon in the profile editor below
  document.head.appendChild (el);


	var btn = document.getElementsByClassName("change-avatar button rounded primary")[0];
	btn.addEventListener('click', function (e){
		var sel = document.getElementById("type");
		sel.options.remove(3); 
	});

}));


