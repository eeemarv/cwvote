$(document).ready(function(){

	var $generate = $('#generate');
	var $pw = $generate.parent().siblings('input').eq(0);

	$pw.keyup(function(){
		$(this).attr('type', 'password');
	});

	$generate.click(function(e){

		var length = 6;
		var numbers = 2;
		var vow = 'aeiou';
		var con1 = 'bcdfghjklmnpqrstvwxyz';
		var con2 = 'trcrbrfrthdrchphwrstspswprslcl';
		var vc = Math.floor(Math.random() * 2);
		var pw = '';

		for (var i = 0; i < length; i++)
		{
			var no_num = Math.floor(Math.random() * length);

			if (no_num)
			{
				if (vc)
				{
					if (Math.floor(Math.random() * 2))
					{
						var ran = Math.floor(Math.random() * con1.length);
						pw += con1.substring(ran, ran + 1);
					}
					else
					{
						ran = Math.floor(Math.random() * (con2.length / 2)) * 2;
						pw += con2.substring(ran, ran + 2);
					}
				}
				else
				{
					ran = Math.floor(Math.random() * vow.length);
					pw += vow.substring(ran, ran + 1);
				}
			}
			else
			{
				pw += Math.floor(Math.random() * 10);
			}

			vc++;
			vc = (vc > 1) ? 0 : 1;
		}

		$pw.val(pw).attr('type', 'text');

		e.preventDefault();
	});
});

