import {NamedPage, addPage} from '@hydrooj/ui-default';
addPage (new NamedPage ('home_account', () => {
  const el = document.createElement ('style');
  //el.innerHTML = `*[data-type="upload"] { display: none !important; } .change-avatar  { display: none !important;  }`;
  el.innerHTML = `*[data-type="upload"] { display: none !important; } `; // 去掉个人简介中的上传图片图标
  document.head.appendChild (el);


	var btn = document.getElementsByClassName("change-avatar button rounded primary")[0];
	btn.addEventListener('click', function (e){
		var sel = document.getElementById("type");
		sel.options.remove(3); 
		sel.options.remove(0); 
		sel.options.remove(0); 
		var plh = document.getElementsByClassName("textbox")[0];
		plh.placeholder = "QQ Number";
//		console.log(sel.options[0].value);
	});

}));


